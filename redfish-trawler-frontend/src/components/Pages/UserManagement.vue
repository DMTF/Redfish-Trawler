<!--
SPDX-FileCopyrightText: 2023-2024 DMTF
SPDX-License-Identifier: BSD-3-Clause
Copyright Notice:
Copyright 2023-2024 DMTF. All rights reserved.
License: BSD 3-Clause License. For full text see link: https://github.com/DMTF/Redfish-Trawler/blob/main/LICENSE.md
-->

<template>
  <Transition appear>
  <!-- Use Vue template for a basic Table, on all collections -->
  <div class="basic" v-if="view!=''">
      <!-- Use Vue template for a basic Table, on all collections -->
    <div v-if="view==='table'">
      <div class="title">Accounts
        <ActionPatchPost :service="service" :action_uri="'/redfish/v1/AccountService/Accounts'" @refresh="gotoTable"
          :action_info="action_params['post_account']" :msg="'Add New Account'" :short="'Add new'" :call_type="'POST'"/>
      </div>
      <TableAccounts :payload="page_payload['_accounts']" :service="service" @refresh="gotoTable"/>
      <TableRoles :payload="page_payload['_roles']" /> 
      <div class="title" v-if="view==='table'">Account Service Settings
        <ActionPatchPost :service="service" :action_uri="'/redfish/v1/AccountService'" @refresh="gotoTable"
          :action_info="pick_params(action_params['patch_service'], Object.keys(page_payload['_payload']))" :msg="'Modify Properties'" :short="'Modify'" :call_type="'PATCH'"/>
      </div>
      <div class="propertyblock">
          <template v-for="entry in ['ServiceEnabled', 'AuthFailureLoggingThreshold', 'MinPasswordLength',
                                'AccountLockoutDuration', 'AccountLockoutThreshold', 'AccountLockoutCounterResetAfter']">
              <div v-if="entry in page_payload['_payload']" :key="entry">{{ entry }}: {{ page_payload['_payload'][entry] }}</div>
          </template>
      </div>
    </div>

    <ResourceGeneric :service="service" :deleteable="true" :payload="page_payload" v-if="view==='resource'"/>
  </div>
  </Transition>
</template>

<script>
import { ref } from 'vue';
import * as _ from "lodash";
import TableAccounts from '../Tables/Accounts.vue';
import TableRoles from '../Tables/Roles.vue';
import ActionPatchPost from '../Actions/ActionPatchPost.vue';
import ResourceGeneric from '../Resources/Resource.vue';
export default {
    name: 'PageUserManagement',
    components: {
        TableAccounts,
        TableRoles,
        ActionPatchPost,
        ResourceGeneric
    },
    methods: {
      // move this to generic modal for all actions to use/filter keys
      pick_params(current, expected) {
        return _.pick(current, expected)
      },
    },
    props: ['service'],
    watch: {},
     setup(props) {
        // change value of a const ref with .value
        const page_payload = ref({'_payload': {}})
        const view = ref('')
        const action_params = ref({
            "post_account": { 
              'Enabled':  {'option': "Enabled", 'value':true},
              'Locked':  {'option': "Locked", 'value':true},
              'Description': {'option': 'Description', 'value': 0},
              'UserName': {'option': 'UserName', 'value': 0},
              'Password': {'option': 'Password', 'value': 0, 'hidden': true},
              'RoleId': {'option': 'RoleId', 'value': 0}
            },
            "patch_service": {
              'ServiceEnabled':  {'option': "Service Enabled", 'value':true},
              'AuthFailureLoggingThreshold': {'option': 'AuthFailureLoggingThreshold', 'value': 0},
              'MinPasswordLength': {'option': 'MinPasswordLength', 'value': 0},
              'AccountLockoutDuration': {'option': 'AccountLockoutDuration', 'value': 0},
              'AccountLockoutThreshold': {'option': 'AccountLockoutThreshold', 'value': 0},
              'AccountLockoutCounterResetAfter': {'option': 'AccountLockoutCounterResetAfter', 'value': 0}
            }
          }
        )


        function gotoTable() {
          // TODO: move to its own shared function
          view.value = ''
          fetch('/page-view?service_name=' + props.service + '&page_name=usermanagement', {
              method: 'GET',
              headers: { 'Content-Type': 'application/json', 'login-info': 'get-from-here'}
          }).then(response => response.json())
          .then(payload => page_payload.value = payload)
          .then(function(){ view.value = 'table' })
        }

        function gotoResource(elem) {
          view.value = ''
          fetch('' + elem + "?service_name=" + props.service, {
              method: 'GET',
              headers: { 'Content-Type': 'application/json', 'login-info': 'get-from-here'}
          }).then(response => response.json())
          .then(payload => page_payload.value = payload)
          .then(function(){ view.value = 'resource' })
        }

        gotoTable()

        return {page_payload, view, action_params, gotoTable, gotoResource}
    }
}
</script>
