
<template>
  <div class="topbar">
    <ul>
      <li>
        <label for="current_service">Service: </label>
        <select id="current_service"></select>
      </li>
      <li><a href="" target="_blank" rel="noopener">Add New Service</a></li>
      <li>
        <a href="" target="_blank" rel="noopener">Delete Current Service</a>
      </li>
      <li><a href="" target="_blank" rel="noopener">Close Connection</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TopBar",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#current_service {
  width: 320px;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
.topbar {
  background-color: white;
  border: 1px;
  border-style: solid;
  border-color: cornflowerblue;
}
</style>