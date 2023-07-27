import argparse
import sqlite3
import redfish

from flask import Flask, render_template, request

app = Flask(__name__)

SERVICE_PARAMS = ["base_url", "username", "password"]

# TODO: Use local database (sqlite3 .db) to store and recall credentials, or simply don't do so, depending on request.
available_services = {
    "mockup": {
        "base_url": "http://127.0.0.1:8000",
        "username": "NoName",
        "password": "NoPass"
    },
    "mockup2": {
        "base_url": "http://127.0.0.1:8001",
        "username": "NoName",
        "password": "NoPass"
    }
}

live_services = {}

@app.route('/services', methods=['GET'])
def get_service_details():
    """Gives us list of services that are available and live
    """    
    
    return {
        'available': list(available_services.keys()),
        'live': list(live_services.keys())
    }


@app.route('/add-service', methods=['POST'])
def receive_service_details():
    """POST to /add-service, add service details to program
    """    

    nick = request.json.get('nickname')
    if nick is None or len(nick.strip()) == 0:
        nick = "Host-{}".format(len([x for x in available_services.keys() if 'Host-' in x]))

    host = request.json.get('hostname')
    user = request.json.get('username')
    pw = request.json.get('password')

    available_services[nick] = {
        "base_url": host,
        "username": user,
        "password": pw
    }
    
    print(nick, available_services[nick])

    return "OK"


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
        return 'SERVICE DOESNT EXIST'

    if service_name in live_services:
        # close active redfish service
        pass

    return "OK DELETE"


@app.route('/close-service', methods=['POST'])
def close_service():
    service_name = request.json.get('service_name')

    if service_name in live_services:
        # close active redfish service
        pass
    else:
        return 'SERVICE NOT LIVE'

    return "OK CLOSE"


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


@app.route("/redfish/v1", defaults={'path': ''})
@app.route("/redfish/v1/", defaults={'path': ''})
@app.route("/redfish/v1/<path:path>")
def route_to_service(path):
    service_name = request.args.get('service_name')

    if service_name is None:
        return 'NO SERVICE GIVEN, GIVE 400 ERROR'

    try:
        context = get_service_context(service_name)
    except KeyError as e:
        return str(e)

    print(request.path)

    response = context.get(request.path)

    if response.status in [200]:
        contenttype = response.getheader('content-type')
        if 'application/json' in contenttype:
            decoded = response.dict

            return response.dict
    
    return "STATUS CODE {}".format(response.status_code)


@app.route('/page-view', methods=["GET"])
def gather_page_info():
    service_name = request.args.get('service_name')
    page_name = request.args.get('page_name')

    if service_name is None:
        return 'NO SERVICE GIVEN, GIVE 400 ERROR'
    if page_name is None:
        return 'NO PAGE GIVEN, GIVE 400 ERROR'

    try:
        context = get_service_context(service_name)
    except KeyError as e:
        return str(e)

    if page_name.lower() == 'chassis':
        return_data = {'data': []}

        response = context.get('/redfish/v1/Chassis')

        if response.status in [200]:
            decoded = response.dict
            all_chassis = decoded['Members']
            for chassis_url in [m['@odata.id'] for m in all_chassis]:
                response = context.get(chassis_url)

                if response.status in [200]:
                    decoded_chassis = response.dict

                return_data['data'].append(decoded_chassis)
    
        return return_data

    return 'OK PAGE VIEW'


def get_service_context(service_name):
    """Get service context.  If it doesn't exist, create the context.

    Raises:
        KeyError: service_name doesn't exist
    """    
    if live_services.get(service_name) is None:

        if available_services.get(service_name) is None:
            raise KeyError('SERVICE {} DOESNT EXIST, GIVE 400 ERROR'.format(service_name))

        params = available_services.get(service_name)
        
        live_services[service_name] = redfish.redfish_client(**params)
    
    return live_services[service_name]


if __name__ == '__main__':
    argget = argparse.ArgumentParser(description='Redfish Trawler')

    # config
    argget.add_argument('--hostip', type=str, default='0.0.0.0', help='ip to host on, default 0.0.0.0')
    args = argget.parse_args()
    
    # Setup ENDPOINTS
    # hello.py
