<!--
SPDX-FileCopyrightText: 2023-2024 DMTF
SPDX-License-Identifier: BSD-3-Clause
Copyright Notice:
Copyright 2023-2024 DMTF. All rights reserved.
License: BSD 3-Clause License. For full text see link: https://github.com/DMTF/Redfish-Trawler/blob/main/LICENSE.md
-->

<template>
  <StatusToast/>
  <div class="container-fluid">
    <DebugPage :service="current_service" :log="debug_log" v-if="debug_log"/>
    <div class="row">
        <div class="container">
          <div class="row">
            <div class="col-sm-2">
              <SideBar :payload="current_root" @change-main="changeMain" @toggleDebug="toggleDebug"/>
            </div>
            <div class="col">
              <TopBar @change-service="changeService"/>
              <LocationBar/>
              <div class="jumbotron hello" :key="reset_me">
                <Transition appear name="fadein">
                  <PageChassis :service="current_service" v-if="current_page=='pagechassis' && current_service!='unknown'"/>
                  <PageUserManagement :service="current_service" v-else-if="current_page=='pageusermanagement' && current_service!='unknown'"/>
                  <PageSystem :service="current_service" v-else-if="current_page=='pagesystem' && current_service!='unknown'"/>
                  <PageManager :service="current_service" v-else-if="current_page=='pagemanager' && current_service!='unknown'"/>
                  <PageLog :service="current_service" v-else-if="current_page=='pagelog' && current_service!='unknown'"/>
                  <PageUpdate :service="current_service" v-else-if="current_page=='pageupdate' && current_service!='unknown'"/>
                  <div v-else-if="!current_service || current_service==='unknown'">
                    Add or select a service to Continue
                  </div>
                  <div v-else>
                    Select from the sidebar to continue
                  </div>
                </Transition>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import StatusToast from './components/MainUI/StatusToast.vue'
import SideBar from './components/MainUI/SideBar.vue'
import TopBar from './components/MainUI/TopBar.vue'
import LocationBar from './components/MainUI/LocationBar.vue'
import DebugPage from './components/MainUI/DebugPage.vue'

import PageChassis from './components/Pages/Chassis.vue'
import PageUserManagement from './components/Pages/UserManagement.vue'
import PageSystem from './components/Pages/System.vue'
import PageManager from './components/Pages/Manager.vue'
import PageLog from './components/Pages/Log.vue'
import PageUpdate from './components/Pages/Update.vue'

// Inject Bootstrap with the same key as defined in main.js
import { ref } from 'vue'

export default {
  name: 'App',
  components: {
    StatusToast, SideBar, TopBar, LocationBar, DebugPage,
    PageChassis,
    PageUserManagement,
    PageSystem,
    PageManager,
    PageLog,
    PageUpdate
  },
  created () {
      document.title = "Redfish Trawler";
  },
  setup(){
    // TODO: Don't pass down service all the way down to children, propogate gets to parent (?)
    // SEE: App -> ChassisPage -> ChassisTable -> ActionResetChassis
    const current_page = ref('main')
    const current_service = ref('unknown')
    const reset_me = ref(0)
    const current_root = ref({})
    const debug_log = ref("")
    const supportedServices = ref([])

    function changeMain(data) {
      current_page.value = data
      reset_me.value += 1
    }

    function changeService(data) {
      console.log(data)
      current_service.value = data
      getServiceRoot()
      reset_me.value += 1
    }

    function getServiceRoot() {
      fetch('/redfish/v1/?service_name=' + current_service.value, {
          method: 'GET',
          headers: { 'Content-Type': 'application/json', 'login-info': 'get-from-here'}
      }).then(response => response.json())
      .then(payload => (current_root.value = payload['_payload']))
    }

    function toggleDebug() {
      window.open('debug_log')
    }

    return {changeMain, changeService, toggleDebug, current_page, current_service, reset_me, debug_log, current_root}
  }
}
</script>

<style>
  @import './assets/app.css';
</style>
