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
                <PageChassis :chassis-payload="current_payload" v-if="currentPage=='chassispage' && current_service!='unknown'"/>
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
import PageChassis from './components/Pages/PageChassis.vue'
import { ref } from 'vue'

export default {
  name: 'App',
  components: {
    SideBar,
    TopBar,
    LocationBar,
    MainBlock,
    PageChassis
  },
  setup(){
    const currentPage = ref('main')
    const current_service = ref('unknown')
    const current_payload = ref([
            {
                Name: "name",
                ChassisType: "a",
                PowerState: "-",
                Health: "name"
            },
            {
                Name: "name2",
                ChassisType: "b",
                PowerState: "-",
                Health: "name"
            },
            {
                Name: "name3",
                ChassisType: "c",
                PowerState: "-",
                Health: "name"
            },
        ]
    )

    function changeMain(data) {
      if (data == "chassispage") {
        console.log(data)
        console.log(current_service.value)
        if (current_service.value != 'unknown') {
          fetch('http://127.0.0.1:5000/page-view?service_name=' + current_service.value + '&page_name=chassis', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
          }).then(response => response.json())
          .then(payload => current_payload.value = payload.data);
          console.log(current_payload.value)
          currentPage.value = data
        }
      }
    }

    function changeService(data) {
      console.log(data)
      current_service.value = data
    }

    return {changeMain, changeService, currentPage, current_service, current_payload}
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
img {
  width:100%
}
</style>
