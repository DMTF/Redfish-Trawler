<template>
  <!-- Use Vue template for a basic Table, on all collections -->
  <div class="basic">
      <!-- Use Vue template for a basic Table, on all collections -->
    <TableAccounts :payload="page_payload['_accounts']"/>
    <TableRoles :payload="page_payload['_roles']"/> 
  </div>
</template>

<script>
import { ref } from 'vue';
import TableAccounts from '../Tables/Accounts.vue';
import TableRoles from '../Tables/Roles.vue';
export default {
    name: 'PageUserManagement',
    components: {
        TableAccounts,
        TableRoles
    },
    props: ['service'],
    watch: { },
     setup(props) {
        // change value of a const ref with .value
        const page_payload = ref({})
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

        gotoTable()

        return {page_payload, view, gotoTable}
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>