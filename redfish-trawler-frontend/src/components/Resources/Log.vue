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
                    <div class="title">{{ title }}
                    </div>
                    <div class="propertyblock">
                        <div v-for="entry in ['Name', 'Id', 'MaxNumberOfRecords', 'OverWritePolicy']" :key="entry">
                            {{ entry }}: {{ resource[entry] }}
                        </div>
                        <div> Health: {{ resource.Status ? resource.Status.Health : 'n/a' }}</div>     
                    </div>
                </div>
            </div>
            <div>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col-2">Name</th>
                            <th scope="col-2">Entry Type</th>
                            <th scope="col-2">Severity</th>
                            <th scope="col-12">Message</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="entry in entries" :key="entry">
                            <td> <a href="#">{{ entry.Name }} ({{ entry.Id }})</a> </td>
                            <td> {{ entry.EntryType }}</td>
                            <td> {{ entry.Severity }}</td>
                            <td> {{ entry.Message }}</td>     
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="propertyblock" style="float:right">
                <ActionModal :service="service" 
                    :action_object="resource.Actions ? resource.Actions['#LogService.ClearLog'] : null" 
                    title="Clear Log" short="Clear Log"
                    msg="Are you sure you wish to clear this Log of ALL ENTRIES?"/>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
import ActionModal from '../Actions/ActionModal.vue';
export default {
    name: 'ResourceLog',
    components: { 
        ActionModal
    },
    props: ['service', 'payload', 'keys'],
    watch: {
        payload() {
            this.resource = this.payload['_payload']
            this.entries = this.payload['_entries']
            this.title = this.resource['@odata.type'].split('.').at(-1)
        },
    },
    setup(props) {
        console.log(props.payload)
        console.log(props.keys)

        const title = ref('Resource')
        const resource = ref(props.payload['_payload'])
        const entries = ref(props.payload['_entries'])

        return {title, resource, entries}
    }
}
</script>
