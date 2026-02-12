<!--
SPDX-FileCopyrightText: 2023-2024 DMTF
SPDX-License-Identifier: BSD-3-Clause
Copyright Notice:
Copyright 2023-2024 DMTF. All rights reserved.
License: BSD 3-Clause License. For full text see link: https://github.com/DMTF/Redfish-Trawler/blob/main/LICENSE.md
-->

<template>
  <div class="sidebar">
    <div class="list-group">
      <img class="list-group-item" id="logo" alt="Redfish logo" src="../../assets/redfish.png" />
      <!-- <a href="#" @click="$emit('changeMain', 'pageroot')" class="list-group-item list-group-item-action">Service Information</a> -->
      <a href="#" @click="$emit('changeMain', 'pagechassis')" class="list-group-item list-group-item-action">Chassis</a>
      <a href="#" @click="$emit('changeMain', 'pagesystem')" class="list-group-item list-group-item-action">Systems</a>
      <a href="#" @click="$emit('changeMain', 'pagemanager')" class="list-group-item list-group-item-action">Managers</a>
      <a href="#" @click="$emit('changeMain', 'pagelog')" class="list-group-item list-group-item-action">Logs</a>
      <a href="#" @click="$emit('changeMain', 'pageusermanagement')" class="list-group-item list-group-item-action">User Management</a>
      <a href="#" v-if="current_root['UpdateService']" @click="$emit('changeMain', 'pageupdate')" class="list-group-item list-group-item-action">Update Service</a>
      <a href="#" v-else class="notsupported list-group-item list-group-item-action">Update Service</a>
      <a href="#" @click="$emit('toggleDebug')" class="bottom list-group-item list-group-item-action">Debug</a>
      <!--<a href="#" @click="$emit('changeMain', 'pageevents')" class="list-group-item list-group-item-action">Events</a>-->
      <!-- TODO: Disable if debug is OFF -->
    </div>
  </div>
</template>

<script>
import { defineEmits, ref } from 'vue';
export default {
  name: "SideBar",
  props: ['payload'],
  watch: {
      payload() {
          this.current_root = this.payload
      },
  },
  setup(props) {
    const emits = defineEmits(['changeMain']);

    const current_root = ref(props.payload)
  
    return { current_root }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.notsupported {
  background-color: lightgrey;
  color: darkgrey;

}
.sidebar {
  background-color: white;
  height: 100%;
  border: 1px;
  border-style: solid;
  border-color: cornflowerblue;
  overflow-x: hidden; /* Disable horizontal scroll */
  position: relative;
}
#logo {
  width: 100%;
}
</style>
