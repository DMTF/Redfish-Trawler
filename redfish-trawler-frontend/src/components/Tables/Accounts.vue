<!--
SPDX-FileCopyrightText: 2023-2024 DMTF
SPDX-License-Identifier: BSD-3-Clause
Copyright Notice:
Copyright 2023-2024 DMTF. All rights reserved.
License: BSD 3-Clause License. For full text see link: https://github.com/DMTF/Redfish-Trawler/blob/main/LICENSE.md
-->

<template>
  <!-- Use Vue template for a basic Table, on all collections -->
  <!-- <div class="title">{{ title }} </div> -->
  <div class="basic">
    <table class="table">
        <thead>
            <tr>
                <th scope="col-4">Name</th>
                <th scope="col-4">Role</th>
                <th scope="col-2">Locked</th>
                <th scope="col-2">Enabled</th>
                <th scope="col-2">Account Types</th>
                <th scope="col-2">Action</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="entry in all_elements" :key="entry">
                <td>
                    <ActionPatchPost :service="service" :discrete="true" @refresh="$emit('refresh')"
                    :action_uri="'/redfish/v1/AccountService/Accounts/' + entry.Id " :action_info="action_params['edit_user']" :call_type="'PATCH'"
                    title="Edit Account" :short="entry.UserName"
                    msg="Do you wish to edit this account?"/>
                </td>
                <td> {{ entry.RoleId }}</td>
                <td> {{ entry.Locked }}</td>
                <td> {{ entry.Enabled }}</td>
                <td> {{ entry.AccountTypes ? entry.AccountTypes.join(', ') : '-'}}</td>
                <td> <ActionDeleteResource :target_id="entry['@odata.id']" :resource_type="Account" :service="service" @refresh="$emit('refresh')"/>
                </td>
            </tr>
        </tbody>
    </table>
  </div>
</template>

<script>
import { ref } from 'vue';
import ActionDeleteResource from '../Actions/ActionDeleteResource.vue';
import ActionPatchPost from '../Actions/ActionPatchPost.vue';
export default {
    name: 'TableAccounts',
    components: { 
        ActionDeleteResource,
        ActionPatchPost
    },
    props: ['service', 'payload', 'keys'],
    watch: {
        payload() {
            this.all_elements = this.payload
        },
    },
    setup(props) {
        const action_params = ref({
            "edit_user": { 
              'Enabled':  {'option': "Enabled", 'value':true},
              'Locked':  {'option': "Locked", 'value':true},
              'UserName': {'option': 'UserName', 'value': 0},
              'Password': {'option': 'Password', 'value': 0, 'hidden': true},
              'RoleId': {'option': 'RoleId', 'value': 0}
            }
          })
        console.log(props.payload)
        console.log(props.keys)

        const title = ref('Accounts')
        const all_elements = ref(props.payload)
        const all_keys = ref(props.keys)

        return {title, all_elements, all_keys, action_params}
    }
}
</script>
