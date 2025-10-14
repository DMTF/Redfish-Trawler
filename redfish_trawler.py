# SPDX-FileCopyrightText: 2023-2024 DMTF
# SPDX-License-Identifier: BSD-3-Clause
# Copyright Notice:
# Copyright 2023-2024 DMTF. All rights reserved.
# License: BSD 3-Clause License. For full text see link: https://github.com/DMTF/Redfish-Trawler/blob/main/LICENSE.md

import sys
import os
import logging
import argparse
import webbrowser
from urllib import parse

import redfish

from flask import Flask, render_template, request, session
from flask_session import Session

app = Flask(__name__)

app.config["SECRET_KEY"] = os.urandom(12).hex()
app.config["SESSION_PERMANENT"] = True 
app.config["SESSION_TYPE"] = "filesystem"

my_logger = logging.getLogger('__name__')
my_logger.setLevel(logging.DEBUG)

standard_out = logging.StreamHandler(sys.stdout)
standard_out.setLevel(logging.INFO)
my_logger.addHandler(standard_out)

SERVICE_PARAMS = ["base_url", "username", "password"]

LOGIN_TYPES = {
    'None': None,
    'Basic': redfish.AuthMethod.BASIC,
    'Session': redfish.AuthMethod.SESSION
}

# Storing services per browser session, don't serve services when session unavailable?

active_session = {}

@app.route("/")
def start():
    if session.get('client_id') is None:
        print('New Client ID')
        session['client_id'] = os.urandom(12).hex()
        my_client_id = session['client_id']
        active_session[my_client_id] = {
            "available_services": {},
            "live_services": {},
            "logger": None
        }
    return render_template(
        'compiled/index.html'
    )


@app.route('/services', methods=['GET'])
def get_service_details():
    """Gives us list of services that are available and live
    """
    my_client_id = session['client_id']
    available_services = active_session[my_client_id]['available_services']
    live_services = active_session[my_client_id]['live_services']
    print(available_services)
    return {
        'available': {nick: host['base_url'] for nick, host in available_services.items()},
        'live': list(live_services.keys())
    }


@app.route('/add-service', methods=['POST'])
def receive_service_details():
    """POST to /add-service, add service details to program
    """
    my_client_id = session['client_id']
    available_services = active_session[my_client_id]['available_services']
    live_services = active_session[my_client_id]['live_services']

    nick = request.json.get('nickname')
    if nick is None or len(nick.strip()) == 0:
        nick = "Host-{}".format(
            len([x for x in available_services.keys() if 'Host-' in x]))

    # TODO: validate information before categorizing it
    available_services[nick] = {
        "base_url": request.json.get('hostname'),
        "username": request.json.get('username'),
        "password": request.json.get('password'),
        "logintype": LOGIN_TYPES.get(request.json.get('logintype'))
    }

    print(nick, available_services[nick])

    return get_service_details()


@app.route('/delete-service', methods=['POST'])
def remove_service_details():
    """POST to /remove-service, removes service_name from active program
    """
    my_client_id = session['client_id']
    available_services = active_session[my_client_id]['available_services']
    live_services = active_session[my_client_id]['live_services']

    service_name = request.json.get('hostname')

    print(service_name)
    print(available_services)

    if service_name in available_services:
        del available_services[service_name]
    else:
        # return 'SERVICE DOESNT EXIST'
        return get_service_details()

    if service_name in live_services:
        # close active redfish service
        pass

    return get_service_details()


@app.route('/close-service', methods=['POST'])
def close_service():
    my_client_id = session['client_id']
    available_services = active_session[my_client_id]['available_services']
    live_services = active_session[my_client_id]['live_services']

    service_name = request.json.get('service_name')

    if service_name in live_services:
        # close active redfish service
        pass
    else:
        # return 'SERVICE NOT LIVE'
        return get_service_details()

    return get_service_details()


@app.route("/redfish/v1", defaults={'path': ''}, methods=["GET", "POST", "PATCH", "DELETE"])
@app.route("/redfish/v1/", defaults={'path': ''}, methods=["GET", "POST", "PATCH", "DELETE"])
@app.route("/redfish/v1/<path:path>", methods=["GET", "POST", "PATCH", "DELETE"])
def route_to_service(path):
    service_name = request.args.get('service_name')

    if service_name is None:
        return 'NO SERVICE GIVEN', 400

    try:
        context = get_service_context(service_name)
    except KeyError:
        return 'MISSING SERVICE', 400

    print(request.path)

    if request.method == 'GET':
        response = context.get(request.path)

        # TODO: Check if we need to use headers for anything
        if response.status in [200]:
            contenttype = response.getheader('content-type')
            if 'application/json' in contenttype:
                return {'_payload': response.dict}

        return "STATUS CODE {}".format(response.status)

    if request.method == 'POST':
        print(request.json)

        # TODO: Check into sanitizing all inputs, even if this is a local program
        response = context.post(request.path, body=request.json)

        # TODO: Check if we need to use headers for anything
        if response:
            contenttype = response.getheader('content-type')
            if contenttype and 'application/json' in contenttype:
                return response.dict, response.status
            else:
                return response.text, response.status

        return "STATUS CODE {}".format(response.status)

    if request.method == 'PATCH':
        print(request.json)

        # TODO: Check into sanitizing all inputs, even if this is a local program
        response = context.patch(request.path, body=request.json)

        # TODO: Check if we need to use headers for anything
        if response:
            contenttype = response.getheader('content-type')
            if contenttype and 'application/json' in contenttype:
                return response.dict, response.status
            else:
                return response.text, response.status

        return "STATUS CODE {}".format(response.status)

    if request.method == 'DELETE':
        print(request.json)

        # TODO: Check into sanitizing all inputs, even if this is a local program
        response = context.delete(request.path)

        # TODO: Check if we need to use headers for anything
        if response:
            contenttype = response.getheader('content-type')
            if contenttype and 'application/json' in contenttype:
                return response.dict, response.status
            else:
                return response.text, response.status

        return "STATUS CODE {}".format(response.status)

    return "STATUS CODE {}".format(405)


def get_all_members(context, all_members):
    data = []
    url_payloads = {}
    for url in [member['@odata.id'] for member in all_members]:
        # TODO: Maybe use expected behavior from full path
        scheme, netloc, path, params, query, fragment = parse.urlparse(url)
        if path not in url_payloads:
            response = context.get(path)
            url_payloads[path] = response
        response = url_payloads[path]

        if response.status in [200]:
            target = response.dict
            if fragment:
                target_path = fragment.split('/')[1:] # /path/to/rsc
                for sub_path in target_path:
                    target = target[int(sub_path)] if sub_path.isdigit() else target[sub_path]

            data.append(target)
    print(data)
    return data


def get_from_nav_obj(context, nav_obj):
    if nav_obj and '@odata.id' in nav_obj:
        return context.get(nav_obj['@odata.id'])
    return None


# TODO: return proper response to frontend in any situation where a login fails or a payload is denied/400 code
@app.route('/page-view', methods=["GET"])
def gather_page_info():
    service_name = request.args.get('service_name')
    page_name = request.args.get('page_name')

    print(service_name, page_name)

    # TODO: make @app routings for consistent 400 errors
    if service_name is None:
        return 'NO SERVICE GIVEN', 400
    if page_name is None:
        return 'NO PAGE GIVEN', 400

    try:
        context = get_service_context(service_name)
    except KeyError:
        return 'MISSING SERVICE', 400

    print(context)

    return_data = {}

    # TODO: Work on polling individual resources, using Redfish's baked in polling registering function (and other message registry stuff)?
    if page_name.lower() == 'manager':
        # if single system...
        manager_name = request.args.get('manager_name')
        if manager_name:
            return_data = {}

            response = context.get('/redfish/v1/Managers/{}'.format(manager_name))

            if response.status in [200]:
                decoded = response.dict
                return_data['_payload'] = decoded

                if 'NetworkProtocol' in decoded:
                    response = context.get(decoded['NetworkProtocol']['@odata.id'])
                    if response.status in [200]:
                        return_data['_protocol'] = response.dict

                if 'EthernetInterfaces' in decoded:
                    response = context.get(decoded['EthernetInterfaces']['@odata.id'])
                    if response.status in [200]:
                        return_data['_interfaces'] = []
                        return_data['_interfaces'].extend(get_all_members(context, response.dict['Members']))
                
                return return_data

            else:
                return 'NO MANAGER FOUND', 400
        else:
            # Return Format: _members: exposed system data, _payload: full response dict
            response = context.get('/redfish/v1/Managers')

            if response.status in [200]:
                decoded = response.dict
                return_data['_payload'] = decoded
                return_data['_members'] = get_all_members(context, decoded['Members'])
            else:
                return 'NO SYSTEM FOUND', 400

        return return_data

    if page_name.lower() == 'system':
        # if single system...    
        system_name = request.args.get('system_name')
        if system_name:
            return_data = {'_payload': {}, '_memory': [], '_processors': [], '_storage': []}

            response = context.get('/redfish/v1/Systems/{}'.format(system_name))

            if response.status in [200]:
                decoded = response.dict
                return_data['_payload'] = decoded
                response_links = decoded.get('Links', {})

                # procs
                if 'Processors' in decoded:
                    response = context.get(decoded['Processors']['@odata.id'])
                    if response.status in [200]:
                        return_data['_processors'].extend(get_all_members(context, response.dict['Members']))

                if 'Memory' in decoded:
                    response = context.get(decoded['Memory']['@odata.id'])
                    if response.status in [200]:
                        return_data['_memory'].extend(get_all_members(context, response.dict['Members']))

                if 'SimpleStorage' in decoded:
                    response = context.get(decoded['SimpleStorage']['@odata.id'])
                    if response.status in [200]:
                        return_data['_storage'].extend(get_all_members(context, response.dict['Members']))

            else:
                return 'NO SYSTEM FOUND', 400
        else:
            # Return Format: _members: exposed system data, _payload: full response dict
            response = context.get('/redfish/v1/Systems')

            if response.status in [200]:
                decoded = response.dict
                return_data['_payload'] = decoded
                return_data['_members'] = get_all_members(context, decoded['Members'])
            else:
                return 'NO SYSTEM FOUND', 400

        return return_data

    elif page_name.lower() == 'chassis':
        # if single chassis...
        chassis_name = request.args.get('chassis_name')
        if chassis_name:
            return_data = {'_fans': [], '_poweredby': [], '_temperatures': [], '_payload': {}}

            response = context.get('/redfish/v1/Chassis/{}'.format(chassis_name))

            if response.status in [200]:
                decoded = response.dict
                return_data['_payload'] = decoded

                # Thermal section
                response_thermal = get_from_nav_obj(context, decoded.get('ThermalSubsystem'))
                if response_thermal:
                    response_fans = get_from_nav_obj(context, response_thermal.dict.get('Fans'))
                    if response_fans:
                        subsystem_fans = get_all_members(context, response_fans.dict['Members'])
                        for fan in subsystem_fans:
                            return_data['_fans'].append(fan)
                    response_metrics = get_from_nav_obj(context, response_thermal.dict.get('ThermalMetrics'))
                    if response_metrics:
                        for k, v in response_metrics.dict.get("TemperatureSummaryCelsius", {}).items():
                            v['Name'] = k
                            return_data['_temperatures'].append(v)
                else:
                    # retrofit to ThermalSubsystem
                    my_logger.warning('Falling back to Thermal')
                    response_thermal = get_from_nav_obj(context, decoded.get('Thermal'))
                    if response_thermal:
                        for inside_fan in response_thermal.dict.get('Fans', []):
                            return_data['_fans'].append({
                                "Name": inside_fan['Name'],
                                "SpeedPercent": {
                                    "SpeedRPM": inside_fan.get('Reading')
                                }
                            })
                        for inside_temp in response_thermal.dict.get('Temperatures', []):
                            return_data['_temperatures'].append({
                                "Name": inside_temp['Name'],
                                "Reading": inside_temp.get('ReadingCelsius')
                            })
                    else:
                        my_logger.warning('No Thermal object was found')

                response_links = decoded.get('Links', {})

                # fans
                all_fans = response_links.get('CooledBy', [])
                return_data['_fans'].extend(get_all_members(context, all_fans))
                
                # Power section
                response_power = get_from_nav_obj(context, decoded.get('PowerSubsystem'))
                if response_power:
                    response_subsystems = get_from_nav_obj(context, response_power.dict.get('PowerSupplies'))
                    if response_subsystems:
                        inner_supplies = get_all_members(context, response_subsystems.dict['Members'])
                        for supply in inner_supplies:
                            return_data['_poweredby'].append(supply)
                else:
                    my_logger.warning('Falling back to Power')
                    response_power = get_from_nav_obj(context, decoded.get('Power'))
                    if response_power:
                        for supply in response_power.dict.get('PowerSupplies', []):
                            return_data['_poweredby'].append(supply)
                    else:
                        my_logger.warning('No Power object was found')


                # powered
                all_powers = response_links.get('PoweredBy', [])
                return_data['_poweredby'].extend(get_all_members(context, all_powers))


            else:
                return 'NO CHASSIS FOUND', 400
        else:
            # Return Format: _members: exposed chassis data, _payload: full response dict
            response = context.get('/redfish/v1/Chassis')

            if response.status in [200]:
                decoded = response.dict
                return_data['_payload'] = decoded
                return_data['_members'] = get_all_members(context, decoded['Members'])
            else:
                return 'NO CHASSIS FOUND', 400

        return return_data

    if page_name.lower() == 'usermanagement':
        # Return Format: _chassis: exposed chassis data, response: full response dict
        return_data = {'_accounts': [], '_roles': [], '_payload': {}}

        response = context.get('/redfish/v1/AccountService')

        if response.status in [200]:
            decoded = response.dict
            return_data['_payload'] = decoded

            response_accounts = context.get(decoded['Accounts'].get('@odata.id')) if decoded.get('Accounts') else None
            if response_accounts:
                return_data['_accounts'] = get_all_members(context, response_accounts.dict['Members'])
                
            response_roles = context.get(decoded['Roles'].get('@odata.id')) if decoded.get('Roles') else None
            if response_roles:
                return_data['_roles'] = get_all_members(context, response_roles.dict['Members'])

        else:
            return 'NO ACCOUNTSERVICE FOUND', 400

        return return_data

    if page_name.lower() == 'log':
        return_data = {}
        log_name = request.args.get('target')
        if log_name:
            # TODO: Make sure input is Sanitized
            _, _, path, _, _, _ = parse.urlparse(log_name)
            response = context.get(path)

            if response.status in [200]:
                decoded = response.dict
                return_data['_payload'] = decoded
                log_entry_collection = context.get(decoded['Entries'].get('@odata.id')) if decoded.get('Entries') else None
                return_data['_entries'] = log_entry_collection.dict['Members'] if log_entry_collection else []
                return return_data

            else:
                return 'NO LOG FOUND', 400
        else:
            all_member_collections = []
            all_logservices = []

            # Get all members with a possible log service in them
            for target in ['/redfish/v1/Managers', '/redfish/v1/Systems', '/redfish/v1/Chassis']:
                response = context.get(target)
                if response.status in [200]:
                    decoded = response.dict
                    all_member_collections.append(decoded)
            
            for item in all_member_collections:
                my_members = get_all_members(context, item['Members'])
                for member in my_members:
                    response_log_members = context.get(member['LogServices'].get('@odata.id')) if member.get('LogServices') else None
                    if response_log_members:
                        my_log_members = get_all_members(context, response_log_members.dict['Members'])
                        all_logservices.extend(my_log_members)
            
            return_data['_members'] = all_logservices

            return return_data

    return 'OK PAGE VIEW'


def get_service_context(service_name):
    """Get service context.  If it doesn't exist, create the context.

    Raises:
        KeyError: service_name doesn't exist
    """
    my_client_id = session['client_id']
    available_services = active_session[my_client_id]['available_services']
    live_services = active_session[my_client_id]['live_services']

    if live_services.get(service_name) is None:

        if available_services.get(service_name) is None:
            raise KeyError(
                'SERVICE {} DOESNT EXIST, GIVE 400 ERROR'.format(service_name))

        params = available_services.get(service_name)

        context = redfish.redfish_client(
            base_url=params['base_url'],
            username=params['username'],
            password=params['password']
        )

        context.login(auth=params['logintype'])

        live_services[service_name] = context

    return live_services[service_name]


if __name__ == '__main__':
    argget = argparse.ArgumentParser(description='Redfish Trawler')

    # config
    argget.add_argument('--port', type=int, default='5000', help='port number to host on')
    argget.add_argument('--nossl', action="store_true", help='disable ssl')
    args = argget.parse_args()

    my_hostname = "127.0.0.1:{:n}".format(args.port)

    my_logger.info("Hosting on port {:n}".format(args.port))

    if args.nossl: 
        webbrowser.open_new("http://" + my_hostname)
        app.run(port=args.port)
    else:
        webbrowser.open_new("https://" + my_hostname)
        app.run(port=args.port, ssl_context='adhoc')
