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
    <template v-if="page_payload['_firmware'] && page_payload['_firmware'].length">
      <div class="title">Firmware</div>
      <TableCollection v-if="page_payload['_firmware'].length" :service="service" :payload="page_payload['_firmware']" 
        :key_names="{'ReleaseDate': 'Release Date', 'SoftwareId': 'Software ID'}"
        :keys="['Name', 'Version', 'ReleaseDate', 'SoftwareId']" :title="Firmware"/>
    </template>
    <template v-if="page_payload['_software'] && page_payload['_software'].length">
      <div class="title">Software</div>
        <TableCollection :service="service" :payload="page_payload['_software']" 
          :keys="['Name', 'Version', 'ReleaseDate', 'SoftwareId']" :title="Software"/>
      </template>
    </div>
    </Transition>
  </template>

  <script>
  import { ref, onMounted } from 'vue';
  import TableCollection from '../Tables/Collection.vue';
  export default {
      name: 'PageUpdate',
      components: {
        TableCollection,
      },
    props: ['service'],
    watch: { },
     setup(props) {
        // change value of a const ref with .value
        const page_payload = ref({})
        const view = ref('')

        function gotoTable() {
          view.value = ''
          // TODO: move to its own shared function
          fetch('/page-view?service_name=' + props.service + '&page_name=update', {
              method: 'GET',
              headers: { 'Content-Type': 'application/json', 'login-info': 'get-from-here'}
          }).then(response => response.json())
          .then(payload => page_payload.value = payload)
          .then(function(){ view.value = 'table' })
        }

        onMounted(async() => gotoTable())

        return {page_payload, view, gotoTable}
    }
}
</script>