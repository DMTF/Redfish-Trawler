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
      <!-- Use Vue template for a basic Table, on all collections -->
    <div v-if="view==='table'">
      <div class="title">Accounts
        <ActionPostAccount :service="service"/>
      </div>
      <TableAccounts :payload="page_payload['_accounts']" @gotoaccount="elem => gotoResource(elem)"/>
      <TableRoles :payload="page_payload['_roles']" @gotorole="elem => gotoResource(elem)"/> 
      <div class="title" v-if="view==='table'">Properties
        <ActionPatchAccountService :service="service"/>
      </div>
      <div class="propertyblock">
          <div v-for="entry in ['ServiceEnabled', 'AuthFailureLoggingThreshold', 'MinPasswordLength',
                                'AccountLockoutDuration', 'AccountLockoutThreshold', 'AccountLockoutCounterResetAfter']" :key="entry">
              {{ entry }}: {{ page_payload['_payload'][entry] }}
          </div>
      </div>
    </div>

    <ResourceGeneric :service="service" :deleteable="true" :payload="page_payload" v-if="view==='resource'"/>
  </div>
</template>

<script>
import { ref } from 'vue';
import TableAccounts from '../Tables/Accounts.vue';
import TableRoles from '../Tables/Roles.vue';
import ActionPatchAccountService from '../Actions/ActionPatchAccountService.vue';
import ActionPostAccount from '../Actions/ActionPostAccount.vue';
import ResourceGeneric from '../Resources/Resource.vue';
export default {
    name: 'PageUserManagement',
    components: {
        TableAccounts,
        TableRoles,
        ActionPatchAccountService,
        ActionPostAccount,
        ResourceGeneric
    },
    props: ['service'],
    watch: { },
     setup(props) {
        // change value of a const ref with .value
        const page_payload = ref({'_payload': {}})
        const view = ref('table')

        function gotoTable() {
          // TODO: move to its own shared function
          fetch('http://127.0.0.1:5000/page-view?service_name=' + props.service + '&page_name=usermanagement', {
              method: 'GET',
              headers: { 'Content-Type': 'application/json', 'login-info': 'get-from-here'}
          }).then(response => response.json())
          .then(payload => page_payload.value = payload)
          view.value = 'table' 
        }

        function gotoResource(elem) {
          fetch('http://127.0.0.1:5000' + elem + "?service_name=" + props.service, {
              method: 'GET',
              headers: { 'Content-Type': 'application/json', 'login-info': 'get-from-here'}
          }).then(response => response.json())
          .then(payload => page_payload.value = payload)
          view.value = 'resource' 
        }

        gotoTable()

        return {page_payload, view, gotoTable, gotoResource}
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>