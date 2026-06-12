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
    <div class="row">
        <div class="container">
          <div class="row">
            <div class="col-sm-2">
              <div class="sidebar">
                <div class="list-group">
                  <img class="list-group-item" id="logo" alt="Redfish logo" src="./assets/redfish.png" />
                  <nav>
                    <RouterLink :to="{path: '/Chassis', query: {host: current_service}}" class="list-group-item list-group-item-action">Chassis</RouterLink>
                    <RouterLink :to="{path: '/Systems', query: {host: current_service}}" class="list-group-item list-group-item-action">Systems</RouterLink>
                    <RouterLink :to="{path: '/Managers', query: {host: current_service}}" class="list-group-item list-group-item-action">Managers</RouterLink>
                    <RouterLink :to="{path: '/UserManagement', query: {host: current_service}}" class="list-group-item list-group-item-action">User Management</RouterLink>
                    <RouterLink :to="{path: '/Logs', query: {host: current_service}}" class="list-group-item list-group-item-action">Logs</RouterLink>
                    <RouterLink v-if="current_root['UpdateService']" :to="{path: '/Update', query: {host: current_service}}" class="list-group-item list-group-item-action">Update</RouterLink>
                    <a href="#" v-else class="notsupported list-group-item list-group-item-action">Update</a>
                  </nav>
                  <!-- TODO: Disable if debug is OFF -->
                  <a href="/debug_log" target="_blank" class="bottom list-group-item list-group-item-action">Debug</a>
                </div>
              </div>
            </div>
            <div class="col">
              <TopBar @change-service="changeService"/>
              <div class="bar">
                <nav aria-label="breadcrumb">
                  <ol class="breadcrumb">
                    <li class="breadcrumb-item active">Service Name</li>
                    <li class="breadcrumb-item active" aria-current="page">...</li>
                  </ol>
                </nav>
              </div>
              <div class="jumbotron hello" :key="reset_me">
                <Transition appear name="fadein">
                  <RouterView/>
                  <!-- <div v-else>
                    Select from the sidebar to continue
                  </div> -->
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
import TopBar from './components/MainUI/TopBar.vue'

// Inject Bootstrap with the same key as defined in main.js
import { ref } from 'vue'

export default {
  name: 'App',
  components: {
    StatusToast, TopBar
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

    function changeMain() {
      reset_me.value += 1
      console.log($)
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

    return {changeMain, changeService, current_page, current_service, reset_me, current_root}
  }
}
</script>

<style>
  @import './assets/app.css';
</style>
