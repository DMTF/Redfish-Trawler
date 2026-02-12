<!--
SPDX-FileCopyrightText: 2023-2024 DMTF
SPDX-License-Identifier: BSD-3-Clause
Copyright Notice:
Copyright 2023-2024 DMTF. All rights reserved.
License: BSD 3-Clause License. For full text see link: https://github.com/DMTF/Redfish-Trawler/blob/main/LICENSE.md
-->

<template>
  <Transition appear>
  <div class="basic" v-if="view!=''">
    <TableSystem :service="service" :payload="page_payload['_members']" v-if="view==='table'" @goto="elem => gotoResource(elem)"/>
    <ResourceSystem :service="service" :payload="page_payload" v-if="view==='resource'"/> 
  </div>
</Transition>
</template>

<script>
import { ref } from 'vue';
import TableSystem from '../Tables/System.vue';
import ResourceSystem from '../Resources/System.vue';
export default {
    name: 'PageSystem',
    components: {
        TableSystem,
        ResourceSystem
    },
    props: ['service'],
    watch: { },
     setup(props) {
        // change value of a const ref with .value
        const page_payload = ref({})
        const view = ref('')

        function gotoTable() {
          // TODO: move to its own shared function
          view.value = ''
          fetch('/page-view?service_name=' + props.service + '&page_name=system', {
              method: 'GET',
              headers: { 'Content-Type': 'application/json', 'login-info': 'get-from-here'}
          }).then(response => response.json())
          .then(payload => page_payload.value = payload)
          .then(function(){ view.value = 'table' })
        }

        function gotoResource(elem) {
          console.log('GOTO!!!')
          console.log(elem)
          view.value = ''
          // TODO: move to its own shared function
          fetch('/page-view?service_name=' + props.service + '&page_name=system&system_name=' + elem, {
              method: 'GET',
              headers: { 'Content-Type': 'application/json', 'login-info': 'get-from-here'}
          }).then(response => response.json())
          .then(payload => page_payload.value = payload)
          .then(function(){ view.value = 'resource' })
        }

        gotoTable()

        return {page_payload, view, gotoTable, gotoResource}
    }
}
</script>