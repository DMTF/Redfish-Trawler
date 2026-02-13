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

import redfish

from flask import Flask, render_template, request, session, send_file, render_template_string

import resource_get

app = Flask(__name__, static_folder='templates/compiled/static')

app.config["SECRET_KEY"] = os.urandom(12).hex()
app.config["SESSION_PERMANENT"] = True 
app.config["SESSION_TYPE"] = "filesystem"

my_logger = logging.getLogger()
my_logger.setLevel(logging.DEBUG)

standard_out = logging.StreamHandler(sys.stdout)
standard_out.setLevel(logging.INFO)
my_logger.addHandler(standard_out)

level = logging.INFO
with open('trawler_log.txt', 'w'):
    pass
file_handler = logging.FileHandler("trawler_log.txt")
file_handler.setLevel(min(level, standard_out.level))
my_logger.addHandler(file_handler)

SERVICE_PARAMS = ["base_url", "username", "password"]

LOGIN_TYPES = {
    'None': None,
    'Basic': redfish.AuthMethod.BASIC,
    'Session': redfish.AuthMethod.SESSION
}

# Storing services per browser session, don't serve services when session unavailable?

active_session = {}


@app.before_request
def before_request_function():
    my_client_id = session.get('client_id')
    if len(active_session) and my_client_id not in active_session:
        return "Browser not identified, allow cookies and reset Trawler"


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

@app.route("/debug_log")
def debug_log():
    return send_file(
        './trawler_log.txt'
    )


@app.route('/services', methods=['GET'])
def get_service_details():
    """Gives us list of services that are available and live
    """
    my_client_id = session['client_id']
    available_services = active_session[my_client_id]['available_services']
    live_services = active_session[my_client_id]['live_services']
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

    return get_service_details()


@app.route('/delete-service', methods=['POST'])
def remove_service_details():
    """POST to /remove-service, removes service_name from active program
    """
    my_client_id = session['client_id']
    available_services = active_session[my_client_id]['available_services']
    live_services = active_session[my_client_id]['live_services']

    service_name = request.json.get('hostname')

    if service_name in available_services:
        del available_services[service_name]
    else:
        # return 'SERVICE DOESNT EXIST'
        return get_service_details()

    if service_name in live_services:
        # close active redfish service
        live_services[service_name].logout()
        del live_services[service_name]
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
        live_services[service_name].logout()
    else:
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

    if request.method == 'GET':
        response = context.get(request.path)

        # TODO: Check if we need to use headers for anything
        if response.status in [200]:
            contenttype = response.getheader('content-type')
            if 'application/json' in contenttype:
                return {'_payload': response.dict}

        return "STATUS CODE {}".format(response.status)

    if request.method == 'POST':

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




# TODO: return proper response to frontend in any situation where a login fails or a payload is denied/400 code
@app.route('/page-view', methods=["GET"])
def gather_page_info():
    service_name = request.args.get('service_name')
    page_name = request.args.get('page_name')

    # TODO: make @app routings for consistent 400 errors
    if service_name is None:
        return 'NO SERVICE GIVEN', 400
    if page_name is None:
        return 'NO PAGE GIVEN', 400

    try:
        context = get_service_context(service_name)
    except KeyError:
        return 'MISSING SERVICE', 400

    return_data = {}

    if page_name.lower() == 'update':
        return resource_get.page_update(context)

    # TODO: Work on polling individual resources, using Redfish's baked in polling registering function (and other message registry stuff)?
    if page_name.lower() == 'manager':
        manager_name = request.args.get('manager_name')
        return resource_get.page_manager(context, manager_name)

    if page_name.lower() == 'system':
        # if single system...    
        system_name = request.args.get('system_name')
        return resource_get.page_system(context, system_name)

    elif page_name.lower() == 'chassis':
        # if single chassis...
        chassis_name = request.args.get('chassis_name')
        return resource_get.page_chassis(context, chassis_name)

    if page_name.lower() == 'usermanagement':
        return resource_get.page_usermanagement(context)

    if page_name.lower() == 'log':
        log_name = request.args.get('target')
        return resource_get.page_log(context, log_name)

    return 'OK PAGE VIEW'


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
