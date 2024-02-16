
<template>
  <div class="bar d-flex">
    <select class="form-select" id="current_service" @change="$emit('changeService', current_service)" v-model="current_service">
      <option disabled>Select a Service</option>
      <option v-for="(host_url, service_name) in services" :key="service_name" :value="service_name">
        {{ service_name }} - {{ host_url }}
      </option>
    </select>

    <!-- Button trigger modal -->
    <!-- TODO: replace each button with vue class?  Self check information before accepting -->
    <!-- Take advantage of Vues reactive forms -->
    <button type="button" class="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#addServiceModal">
      Add Service
    </button>
    <div class="modal fade" id="addServiceModal" tabindex="-1" aria-labelledby="addServiceLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="addServiceLabel">Add a service</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form role="form">
              <div class="mb-3" v-for="(item, key) in service_info" :key="item.option">
                <label :for="key+'id'" class="form-label">{{ item.option }}</label>
                <select v-if="(typeof item.value == 'object')" :key="val" class="form-select" :id="key+'id'" v-model="new_service_info[key]">
                  <option v-for="val in item.value" :key="val" :value="val">{{ val }}</option>
                </select>
                <input v-else :id="key+'id'" type="text" class="form-control" v-model="new_service_info[key]" placeholder="">
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary" @click="addService" data-bs-dismiss="modal">Add service</button>
          </div>
        </div>
      </div>
    </div>

    <button type="button" class="btn btn-secondary btn-sm" @click="delService">Delete Service</button>
    <button type="button" class="btn btn-danger btn-sm" @click="closeService">Close Service</button>
  </div>
</template>

<script>
import { ref } from 'vue';
export default {
  name: "TopBar",
  setup() {
    const services = ref([])
    const current_service = ref('')

    const service_info = ref({
        'nickname':  {'option': "Nickname (optional)", 'value':''},
        'hostname':  {'option': "Hostname", 'value':'-'},
        'username':  {'option': "Username", 'value':'-'},
        'password':  {'option': "Password", 'value':''},
        'logintype':  {'option': "LoginType", 'value':['Basic', 'Session', 'None']}
      }
    )

    const new_service_info = ref({
      'nickname': '',
      'hostname': '-',
      'username': '-',
      'password': '',
      'logintype': 'Basic'
    })

    function pollServices(event) {
      fetch('http://127.0.0.1:5000/services')
        .then(response => response.json())
        .then(data => services.value = data.available);
    }

    function addService(event) {
      // do not use getelement, use Vue standards
      console.log(new_service_info)
      fetch('http://127.0.0.1:5000/add-service', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(new_service_info.value)
      }).then(response => response.json())
      .then(data => services.value = data.available);
    }

    function delService(event) {
      console.log(current_service.value)
      console.log(JSON.stringify({ hostname: current_service.value }))
      fetch('http://127.0.0.1:5000/delete-service', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          hostname: current_service.value
        })
      }).then(response => response.json())
      .then(data => services.value = data.available);
    }

    function closeService(event) {
      fetch('http://127.0.0.1:5000/close-service', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          hostname: this.current_service.value
        })
      }).then(response => response.json())
      .then(data => services.value = data.available);
    }

    pollServices()

    return { services, current_service, service_info, new_service_info, addService, delService, closeService, pollServices}
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#current_service { 
  max-width:500px;
}
</style>