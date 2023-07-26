<template>
  <div class="locbar">
    <ul>
      <li><span>Page:  </span><span>...</span></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'LocationBar',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.locbar {
  background-color: white;
  border:1px;
  border-style: solid;
  border-color:cornflowerblue;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
</style>