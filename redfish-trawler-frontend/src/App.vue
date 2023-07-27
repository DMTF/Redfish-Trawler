<template>
  <div class="container-fluid">
    <div class="row">
        <div class="container">
          <div class="row">
            <div class="col-sm-2">
              <SideBar/>
            </div>
            <div class="col">
              <TopBar/>
              <LocationBar/>
              <MainBlock/>
            </div>
          </div>
        </div>
      </div>
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
html, body {
    height: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  background-color:antiquewhite;
  border:1px;
  border-style: solid;
  border-color:cornflowerblue;
  width:100%;
  height:100%;
}
.bar {
  background-color: white;
  border: 1px;
  border-style: solid;
  border-color: cornflowerblue;
  padding: 8px;
}
img {
  width:100%
}
</style>
