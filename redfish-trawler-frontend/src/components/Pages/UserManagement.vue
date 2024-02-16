<template>
  <!-- Use Vue template for a basic Table, on all collections -->
  <div class="basic">
      <!-- Use Vue template for a basic Table, on all collections -->
    <TableAccounts :payload="page_payload['_accounts']" v-if="view==='table'" @gotoaccount="elem => gotoResource(elem)"/>
    <TableRoles :payload="page_payload['_roles']" v-if="view==='table'" @gotorole="elem => gotoResource(elem)"/> 
    <div class="propertyblock" v-if="view==='table'">
        <div v-for="entry in ['ServiceEnabled', 'AuthFailureLoggingThreshold', 'MinPasswordLength',
                              'AccountLockoutDuration', 'AccountLockoutThreshold', 'AccountLockoutCounterResetAfter']" :key="entry">
            {{ entry }}: {{ page_payload['_payload'][entry] }}
        </div>
    </div>

    <ResourceGeneric :payload="page_payload" v-if="view==='resource'"/>
  </div>
</template>

<script>
import { ref } from 'vue';
import TableAccounts from '../Tables/Accounts.vue';
import TableRoles from '../Tables/Roles.vue';
import ResourceGeneric from '../Resources/Resource.vue';
export default {
    name: 'PageUserManagement',
    components: {
        TableAccounts,
        TableRoles,
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