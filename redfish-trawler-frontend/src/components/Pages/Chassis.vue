
<template>
  <!-- Use Vue template for a basic Table, on all collections -->
  <div class="basic">
    <TableChassis :payload="page_payload['chassis']" v-if="view==='tablechassis'" @gotochassis="elem => gotoResourceChassis(elem)"/>
    <ResourceChassis :payload="page_payload" v-if="view==='resourcechassis'"/>
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
    watch: {
    },
     setup(props) {
        console.log('THIS IS SETUP')

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
          view.value = 'tablechassis' 
        }

        function gotoResourceChassis(elem) {
          console.log('GOTO!!!')
          console.log(elem)
          // TODO: move to its own shared function
          fetch('http://127.0.0.1:5000/page-view?service_name=' + props.service + '&page_name=chassis&chassis=' + elem, {
              method: 'GET',
              headers: { 'Content-Type': 'application/json', 'login-info': 'get-from-here'}
          }).then(response => response.json())
          .then(payload => page_payload.value = payload);
          view.value = 'resourcechassis' 
        }

        gotoTableChassis()

        return {page_payload, view, gotoTableChassis, gotoResourceChassis}
    }
}
</script>