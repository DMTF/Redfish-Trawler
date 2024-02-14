<template>
  <div class="sidebar">
    <div class="list-group">
      <img class="list-group-item" id="logo" alt="Redfish logo" src="../../assets/redfish.png" />
      <a href="#" @click="$emit('changeMain', 'pageroot')" class="list-group-item list-group-item-action">Service Information</a>
      <a href="#" @click="$emit('changeMain', 'pagechassis')" class="list-group-item list-group-item-action">Chassis</a>
      <a href="#" @click="$emit('changeMain', 'pagemanager')" class="list-group-item list-group-item-action">Managers</a>
      <a href="#" @click="$emit('changeMain', 'pagesystem')" class="list-group-item list-group-item-action">Systems</a>
      <a href="#" @click="$emit('changeMain', 'pageuser')" class="list-group-item list-group-item-action">User Management</a>
      <a href="#" @click="$emit('changeMain', 'pagelog')" class="list-group-item list-group-item-action">Logs</a>
      <a href="#" @click="$emit('changeMain', 'pageevents')" class="list-group-item list-group-item-action">Events</a>
      <!-- TODO: Disable if debug is OFF -->
      <a href="#" @click="$emit('changeMain', 'pagetest')" class="list-group-item list-group-item-action">!!TEST!!</a>
    </div>
  </div>
</template>

<script>
import { defineEmits } from 'vue';
export default {
  name: "SideBar",
  setup() {
    const emits = defineEmits(['changeMain']);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.sidebar {
  background-color: white;
  height: 100%;
  border: 1px;
  border-style: solid;
  border-color: cornflowerblue;
  overflow-x: hidden; /* Disable horizontal scroll */
}
#logo {
  width: 100%;
}
</style>
