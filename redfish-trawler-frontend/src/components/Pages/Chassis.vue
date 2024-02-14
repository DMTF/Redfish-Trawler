
<template>
  <!-- Use Vue template for a basic Table, on all collections -->
  <div class="basic">

      <!-- Use Vue template for a basic Table, on all collections -->
    <TableChassis :payload="page_payload['_chassis']" v-if="view==='table'" @gotochassis="elem => gotoResourceChassis(elem)"/>
    <ResourceChassis :payload="page_payload" v-if="view==='resource'"/> 
  </div>
</template>

<script>
import { ref } from 'vue';
import TableChassis from '../Tables/Chassis.vue';
import ResourceChassis from '../Resources/Chassis.vue';
export default {
    name: 'PageChassis',
    components: {
        TableChassis,
        ResourceChassis
    },
    props: ['service'],
    watch: { },
     setup(props) {
        // change value of a const ref with .value
        const page_payload = ref({})
        const view = ref('collection')

        function gotoTableChassis() {
          // TODO: move to its own shared function
          fetch('http://127.0.0.1:5000/page-view?service_name=' + props.service + '&page_name=chassis', {
              method: 'GET',
              headers: { 'Content-Type': 'application/json', 'login-info': 'get-from-here'}
          }).then(response => response.json())
          .then(payload => page_payload.value = payload)
          view.value = 'table' 
        }

        function gotoResourceChassis(elem) {
          console.log('GOTO!!!')
          console.log(elem)
          // TODO: move to its own shared function
          fetch('http://127.0.0.1:5000/page-view?service_name=' + props.service + '&page_name=chassis&chassis_name=' + elem, {
              method: 'GET',
              headers: { 'Content-Type': 'application/json', 'login-info': 'get-from-here'}
          }).then(response => response.json())
          .then(payload => page_payload.value = payload);
          view.value = 'resource' 
        }

        gotoTableChassis()

        return {page_payload, view, gotoTableChassis, gotoResourceChassis}
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>