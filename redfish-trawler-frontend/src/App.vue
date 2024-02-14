<template>
  <div class="container-fluid">
    <div class="row">
        <div class="container">
          <div class="row">
            <div class="col-sm-2">
              <SideBar @change-main="changeMain"/>
            </div>
            <div class="col">
              <TopBar @change-service="changeService"/>
              <LocationBar/>
              <div class="jumbotron hello">
                <PageChassis :service="current_service" v-if="current_page=='pagechassis' && current_service!='unknown'"/>
                <PageUserManagement :service="current_service" v-if="current_page=='pageusermanagement' && current_service!='unknown'"/>
                <MainBlock v-else/>
              </div>
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
import PageChassis from './components/Pages/Chassis.vue'
import PageUserManagement from './components/Pages/UserManagement.vue'
// import PageTesting from './components/Pages/PageTesting.vue'
import { ref } from 'vue'

export default {
  name: 'App',
  components: {
    SideBar,
    TopBar,
    LocationBar,
    MainBlock,
    PageChassis,
    PageUserManagement
    // PageTesting
  },
  setup(){
    const current_page = ref('main')
    const current_service = ref('unknown')

    function changeMain(data) {
      current_page.value = data
    }

    function changeService(data) {
      console.log(data)
      current_service.value = data
    }

    return {changeMain, changeService, current_page, current_service}
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
.hello {
    border:1px;
    border-style: solid;
    border-color:cornflowerblue;
    background-color: lightgrey;
    padding:8px;
    text-align: center;
    min-height:500px;
}
.basic {
  justify-content: center;
  align-items: center;
}
.title {
  justify-content: left;
  text-align: left;
}
.propertyblock {
  justify-content: left;
  text-align: left;
  background-color: white;
  border: 1px;
  border-style: solid;
  border-color: grey;
  padding: 8px;
}
img {
  width:100%
}
td {
  text-align: center;
  vertical-align: middle;
}
a {
  color: cornflowerblue;
}
</style>
