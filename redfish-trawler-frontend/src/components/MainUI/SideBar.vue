<template>
  <div class="sidebar">
    <img id="logo" alt="Redfish logo" src="../../assets/redfish.png">
    <ul>
    <li><a>Service Information</a></li>
    <li><a>Chassis</a></li>
    <li><a>Managers</a></li>
    <li><a>Systems</a></li>
    <li><a>User Management</a></li>
    <li><a>Logs</a></li>
    <li><a>Events</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'SideBar',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 0 10px;
}
a {
  color:cornflowerblue;
}
.sidebar {
  background-color: white;
  height: 100%; 
  width: 200px; 
  position: fixed;
  z-index: 1;
  top: 0; 
  left: 0;
  border:1px;
  border-style: solid;
  border-color:cornflowerblue;
  overflow-x: hidden; /* Disable horizontal scroll */
}
#logo {
  width:inherit;
}
</style>
