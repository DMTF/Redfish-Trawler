# SPDX-FileCopyrightText: 2023-2024 DMTF
# SPDX-License-Identifier: BSD-3-Clause
# Copyright Notice:
# Copyright 2023-2024 DMTF. All rights reserved.
# License: BSD 3-Clause License. For full text see link: https://github.com/DMTF/Redfish-Trawler/blob/main/LICENSE.md

from urllib import parse
import logging

my_logger = logging.getLogger()
my_logger.setLevel(logging.DEBUG)

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
    return data


def get_from_nav_obj(context, nav_obj):
    if nav_obj and '@odata.id' in nav_obj:
        return context.get(nav_obj['@odata.id'])
    return None


def page_collection(context, target):
    # Return Format: _members: exposed system data, _payload: full response dict
    response = context.get(target)
    return_data = {}
    if response.status in [200]:
        decoded = response.dict
        return_data['_payload'] = decoded
        return_data['_members'] = get_all_members(context, decoded['Members'])
        return return_data
    else:
        return 'NO TARGET FOUND {}'.format(target), 400


def page_update(context):
    return_data = {'_payload': {}, '_firmware': [], '_software': []}

    response = context.get('/redfish/v1/UpdateService')

    if response.status in [200]:
        decoded = response.dict
        return_data['_payload'] = decoded

        response = context.get(decoded['FirmwareInventory'].get('@odata.id')) if decoded.get('FirmwareInventory') else None
        if response:
            return_data['_firmware'] = get_all_members(context, response.dict['Members'])

        response = context.get(decoded['SoftwareInventory'].get('@odata.id')) if decoded.get('SoftwareInventory') else None
        if response:
            return_data['_software'] = get_all_members(context, response.dict['Members'])

        return return_data
    else:
        return 'NO UPDATESERVICE FOUND', 400

def page_manager(context, manager_name):
        # if single system...
        return_data = {}
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
            return page_collection(context, '/redfish/v1/Managers')


def page_system(context, system_name):
    return_data = {}
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

            return return_data
        else:
            return 'NO SYSTEM FOUND', 400
    else:
        return page_collection(context, '/redfish/v1/Systems')


def page_chassis(context, chassis_name):
    return_data = {}
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

            return return_data
        else:
            return 'NO CHASSIS FOUND', 400
    else:
        return page_collection(context, '/redfish/v1/Chassis')

def page_usermanagement(context):
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

def page_log(context, log_name):
    return_data = {}
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