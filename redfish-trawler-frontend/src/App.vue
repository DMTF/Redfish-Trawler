<template>
  <div>
    <SideBar/>
    <TopBar/>
    <LocationBar/>
    <MainBlock/>
  </div>
</template>

<script>
import SideBar from './components/MainUI/SideBar.vue'
import TopBar from './components/MainUI/TopBar.vue'
import LocationBar from './components/MainUI/LocationBar.vue'
import MainBlock from './components/MainUI/MainBlock.vue'

export default {
  name: 'App',
  components: {
    SideBar,
    TopBar,
    LocationBar,
    MainBlock
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  margin-top: 60px;
  margin-left: 200px;
  background-color:antiquewhite;
  border:1px;
  border-style: solid;
  border-color:cornflowerblue;
}
ul {
  list-style-type: none;
  padding: 0;
}
</style>
