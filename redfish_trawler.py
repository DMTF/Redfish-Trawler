import argparse
import redfish
from urllib import parse

from flask import Flask, render_template, request

app = Flask(__name__)

SERVICE_PARAMS = ["base_url", "username", "password"]

LOGIN_TYPES = {
    'None': None,
    'Basic': redfish.AuthMethod.BASIC,
    'Session': redfish.AuthMethod.SESSION
}

# TODO: Reduce code reuse in backend, such as in GET PATCH POST DELETE
# TODO: Reduce code reuse in action forms in Frontend
# TODO: Solve modals being shared between actions
# TODO: Do not store credentials locally, let the browser do it, if at all.
available_services = {
    "mockup": {
        "base_url": "http://127.0.0.1:8000",
        "username": "NoName",
        "password": "NoPass",
        "logintype": redfish.AuthMethod.BASIC
    },
    "mockup2": {
        "base_url": "http://127.0.0.1:8001",
        "username": "NoName",
        "password": "NoPass",
        "logintype": redfish.AuthMethod.BASIC
    }
}


live_services = {}


@app.route('/services', methods=['GET'])
def get_service_details():
    """Gives us list of services that are available and live
    """

    return {
        'available': {nick: host['base_url'] for nick, host in available_services.items()},
        'live': list(live_services.keys())
    }


@app.route('/add-service', methods=['POST'])
def receive_service_details():
    """POST to /add-service, add service details to program
    """

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
    service_name = request.json.get('service_name')

    if service_name in live_services:
        # close active redfish service
        pass
    else:
        # return 'SERVICE NOT LIVE'
        return get_service_details()

    return get_service_details()


@app.route("/")
def start():
    return render_template(
        'compiled/index.html'
    )


@app.route("/test_page")
def test_page():
    return render_template(
        'test_page.html',
        available=available_services.keys(),
        live=live_services.keys()
    )


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

    # TODO: Work on polling individual resources, using Redfish's baked in polling registering function (and other message registry stuff)?
    if page_name.lower() == 'chassis':
        # if single chassis...
        chassis_name = request.args.get('chassis_name')
        if chassis_name:
            return_data = {'_fans': [], '_poweredby': [], '_temperatures': [], '_payload': {}}

            response = context.get('/redfish/v1/Chassis/{}'.format(chassis_name))

            if response.status in [200]:
                decoded = response.dict
                return_data['_payload'] = decoded
                response_thermal = context.get(decoded['Thermal'].get('@odata.id')) if decoded.get('Thermal') else None
                response_links = decoded.get('Links', {})

                # fans
                all_fans = response_links.get('CooledBy', [])
                return_data['_fans'].extend(get_all_members(context, all_fans))
                
                # powered
                all_powers = response_links.get('PoweredBy', [])
                return_data['_poweredby'].extend(get_all_members(context, all_powers))

                # local thermal
                if response_thermal:
                    for inside_fan in response_thermal.dict.get('Fans', []):
                        return_data['_fans'].append(inside_fan)
                    for inside_temp in response_thermal.dict.get('Temperatures', []):
                        return_data['_temperatures'].append(inside_temp)

            else:
                return 'NO CHASSIS FOUND', 400
        else:
            # Return Format: _chassis: exposed chassis data, response: full response dict
            return_data = {'_chassis': [], '_payload': {}}

            response = context.get('/redfish/v1/Chassis')

            if response.status in [200]:
                decoded = response.dict
                return_data['_payload'] = decoded
                return_data['_chassis'] = get_all_members(context, decoded['Members'])
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

    return 'OK PAGE VIEW'


def get_service_context(service_name):
    """Get service context.  If it doesn't exist, create the context.

    Raises:
        KeyError: service_name doesn't exist
    """
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
    argget.add_argument('--hostip', type=str, default='0.0.0.0',
                        help='ip to host on, default 0.0.0.0')
    args = argget.parse_args()

    # Setup ENDPOINTS
    # hello.py
