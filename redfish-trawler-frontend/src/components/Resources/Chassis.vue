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
                        <div v-for="entry in ['Name', 'Id', 'SerialNumber', 'SKU', 'Model']" :key="entry">
                            {{ entry }}: {{ resource[entry] }}
                        </div>
                        <div> Health: {{ resource.Status ? resource.Status.Health : 'n/a' }}</div>     
                        <div> PowerState: {{ resource['PowerState'] }}</div>     
                        <div> LocationIndicator: {{ resource['LocationIndicator'] }}</div>     
                    </div>
                    <div class="title"> Temperatures </div>
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col-4">Name</th>
                                <th scope="col-4">Reading</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-if="temps.length === 0">
                                <td colspan="2">--</td>
                            </tr>
                            <tr v-for="entry in temps" :key="entry">
                                <td> {{ entry['Name'] }}</td>
                                <td> {{ entry.Reading ? entry['Reading'] + 'C°' : ''}} </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="col">
                    <div class="title"> Fans </div>
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col-4">Name</th>
                                <th scope="col-4">Reading</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-if="fans.length === 0">
                                <td colspan="2">--</td>
                            </tr>
                            <tr v-for="entry in fans" :key="entry">
                                <td> {{ entry['Name'] }}</td>
                                <td> {{ entry['SpeedPercent']['SpeedRPM'] }} RPM 
                                     {{ entry['SpeedPercent']['Reading'] ? '(' + entry['SpeedPercent']['Reading'] + "%)" : ''}} </td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="title"> Power Supply Information </div>
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col-4">Name</th>
                                <th scope="col-4">State</th>
                                <th scope="col-4">Health</th>
                                <th scope="col-4">Model</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-if="poweredby.length === 0">
                                <td colspan="4">--</td>
                            </tr>
                            <tr v-for="entry in poweredby" :key="entry">
                                <td> {{ entry['Name'] }}</td>
                                <td> {{ entry.Status ? entry.Status.State : 'n/a' }}</td>     
                                <td> {{ entry.Status ? entry.Status.Health : 'n/a' }}</td>     
                                <td> {{ entry['Model'] }}</td>
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
                                :action_object="resource.Actions ? resource.Actions['#Chassis.Reset'] : null" 
                                title="Reset Chassis" short="Reset Chassis"
                                msg="Are you sure you wish to reset this Chassis?"/>
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
    name: 'ResourceChassis',
    components: { ActionModal },
    props: ['service', 'payload', 'keys'],
    watch: {
        payload() {
            this.title = 'Chassis'
            this.resource = this.payload['_payload']
            this.fans = this.payload['_fans']
            this.temps = this.payload['_temperatures']
            this.poweredby = this.payload['_poweredby']

            console.log(this.fans)
            console.log(this.temps)
        },
    },
    setup(props) {
        console.log(props.payload)
        console.log(props.keys)

        const title = ref('Chassis')
        const resource = ref(props.payload['_payload'])
        const fans = ref(props.payload['_fans'])
        const temps = ref(props.payload['_temperatures'])
        const poweredby = ref(props.payload['_poweredby'])

        return {title, resource, fans, temps, poweredby}
    }
}
</script>
