<!--
SPDX-FileCopyrightText: 2023-2024 DMTF
SPDX-License-Identifier: BSD-3-Clause
Copyright Notice:
Copyright 2023-2024 DMTF. All rights reserved.
License: BSD 3-Clause License. For full text see link: https://github.com/DMTF/Redfish-Trawler/blob/main/LICENSE.md
-->

<template>
<!-- Use Vue template for a basic Table, on all collections -->
    <div class="basic">
        <div class="container">
            <div class="row">
                <div class="col">
                    <div class="title">{{ title }}</div>
                    <div class="propertyblock">
                        <div v-for="entry in ['Name', 'Id', 'Model']" :key="entry">
                            {{ entry }}: {{ resource[entry] }}
                        </div>
                        <div> Health: {{ resource.Status ? resource.Status.Health : 'n/a' }}</div>     
                        <div> PowerState: {{ resource['PowerState'] }}</div>     
                    </div>
                    <div class="title"> NetworkProtocol </div>
                    <div class="propertyblock">
                        <div> Health: {{ net_protocol.Status ? net_protocol.Status.Health : 'n/a' }}</div>     
                        <div v-for="entry in ['Name', 'HostName', 'FQDN']" :key="entry">
                            {{ entry }}: {{ net_protocol[entry] }}
                        </div>
                        <div> Proxy: {{ net_protocol.Proxy ? (net_protocol.Proxy.Enabled ? 'Enabled' : 'Disabled') : 'n/a' }}</div>     
                        <div> Proxy URI: {{ net_protocol.Proxy ? net_protocol.Proxy.ProxyServerURI : 'n/a' }}</div>     
                        <div v-for="protocol in ['HTTP', 'HTTPS', 'IPMI', 'SSH', 'SNMP', 'VirtualMedia', 'SSDP', 'Telnet', 'KVMIP']" :key="protocol">
                            {{ protocol }}: {{ net_protocol[protocol] ? (net_protocol[protocol]['ProtocolEnabled'] ? 'Enabled' + ', port ' + net_protocol[protocol].Port: 'Disabled') : '-' }}
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="title"> Network Interfaces </div>
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col-4">Name</th>
                                <th scope="col-4">Enabled</th>
                                <th scope="col-4">Speed</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-if="eth_interfaces.length === 0">
                                <td colspan="3">--</td>
                            </tr>
                            <tr v-for="entry in eth_interfaces" :key="entry">
                                <td> {{ entry['Id'] }} ({{ entry['Name'] }})</td>
                                <td> {{ entry['InterfaceEnabled'] }}</td>
                                <td> {{ entry['SpeedMbps'] }} Mbps</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <div class="propertyblock" style="float: right">
                        <div class="title">Actions</div>
                        <div>
                            <ActionModal :service="service" 
                            :action_object="resource.Actions ? resource.Actions['#Manager.Reset'] : null" 
                            title="Reset Manager" short="Reset Manager"
                            msg="Are you sure you wish to reset this Manager?"/>
                        </div>
                        <div>
                            <ActionModal :service="service" 
                            :action_object="resource.Actions ? resource.Actions['#Manager.ResetToDefaults'] : null" 
                            :action_info="action_params['reset_defaults']"
                            title="Reset To Defaults" short="Reset To Defaults"
                            msg="Are you sure you wish to reset this Manager?"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
import ActionModal from '../Actions/ActionModal.vue';
export default {
    name: 'ResourceManager',
    components: {
        ActionModal
    },
    props: ['service', 'payload', 'keys'],
    watch: {
        payload() {
            this.title = 'Manager'
            this.resource = this.payload['_payload']
            this.net_protocol = this.payload['_protocol']
            this.eth_interfaces = this.payload['_interfaces']

        },
    },
    setup(props) {
        console.log(props.payload)
        console.log(props.keys)

        const action_params = ref({
            "reset_defaults": { 
              'ResetAll':  {'option': "ResetAll", 'value':['ResetAll', 'PreserveNetworkAndUsers', 'PreserveNetwork']}
            }
        })

        const title = ref('Manager')
        const resource = ref(props.payload['_payload'])
        const net_protocol = ref(props.payload['_protocol'])
        const eth_interfaces = ref(props.payload['_interfaces'])

        return {title, resource, net_protocol, eth_interfaces, action_params}
    }
}
</script>