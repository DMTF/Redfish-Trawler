<!--
SPDX-FileCopyrightText: 2023-2024 DMTF
SPDX-License-Identifier: BSD-3-Clause
Copyright Notice:
Copyright 2023-2024 DMTF. All rights reserved.
License: BSD 3-Clause License. For full text see link: https://github.com/DMTF/Redfish-Trawler/blob/main/LICENSE.md
-->

<template>
  <StatusToast/>
  <DebugPage :service="current_service" v-if="debugVisible" @toggleDebug="toggleDebug"/>
  <div class="container-fluid">
    <div class="row">
        <div class="container">
          <div class="row">
            <div class="col-sm-2">
              <SideBar @change-main="changeMain" @toggleDebug="toggleDebug"/>
            </div>
            <div class="col">
              <TopBar @change-service="changeService"/>
              <LocationBar/>
              <div class="jumbotron hello" :key="reset_me">
                <PageChassis :service="current_service" v-if="current_page=='pagechassis' && current_service!='unknown'"/>
                <PageUserManagement :service="current_service" v-else-if="current_page=='pageusermanagement' && current_service!='unknown'"/>
                <PageSystem :service="current_service" v-else-if="current_page=='pagesystem' && current_service!='unknown'"/>
                <PageManager :service="current_service" v-else-if="current_page=='pagemanager' && current_service!='unknown'"/>
                <PageLog :service="current_service" v-else-if="current_page=='pagelog' && current_service!='unknown'"/>
                <div v-else-if="!current_service || current_service==='unknown'">
                  Add or select a service to Continue
                </div>
                <div v-else>
                  Select from the sidebar to continue
                </div>
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

import { ref } from 'vue'

export default {
  name: 'App',
  components: {
    StatusToast, SideBar, TopBar, LocationBar, DebugPage,
    PageChassis,
    PageUserManagement,
    PageSystem,
    PageManager,
    PageLog
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
    const debugVisible = ref(false)

    function changeMain(data) {
      current_page.value = data
      reset_me.value += 1
    }

    function changeService(data) {
      console.log(data)
      current_service.value = data
      reset_me.value += 1
    }

    function toggleDebug() {
      // $('#DebugModal').modal('toggle')
    }

    function showToast(data) {
      console.log(data)
    }

    return {changeMain, changeService, toggleDebug, current_page, current_service, reset_me, debugVisible}
  }
}
</script>

<style>
  @import './assets/app.css';
</style>
