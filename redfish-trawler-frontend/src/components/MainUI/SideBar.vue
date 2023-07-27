<template>
  <div class="sidebar">
    <div class="list-group">
      <img class="list-group-item" id="logo" alt="Redfish logo" src="../../assets/redfish.png" />
      <a href="#" @click="drawServiceRoot" class="list-group-item">Service Information</a>
      <a href="#" @click="drawChassisPage" class="list-group-item">Chassis</a>
      <a href="#" class="list-group-item">Managers</a>
      <a href="#" class="list-group-item">Systems</a>
      <a href="#" class="list-group-item">User Management</a>
      <a href="#" class="list-group-item">Logs</a>
      <a href="#" class="list-group-item">Events</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "SideBar",
  setup() {
    return {}
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: cornflowerblue;
}
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
