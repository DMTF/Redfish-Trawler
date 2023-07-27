
<template>
  <div class="bar d-flex">
    <select class="form-select" id="current_service" v-model="current_service">
      <option disabled>Select a Service</option>
      <option v-for="(service_name, index) in services" :key="index" :value="service_name">
        {{ index }} - {{ service_name }}
      </option>
    </select>

    <!-- Button trigger modal -->
    <!-- TODO: replace each button with vue class?  Self check information before accepting -->
    <!-- Take advantage of Vues reactive forms -->
    <button type="button" class="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#addServiceModal">
      Add Service
    </button>
    <div class="modal fade" id="addServiceModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Add a service</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form role="form">
              <div class="mb-3">
                <label for="service-nickname" class="form-label">Nickname (optional)</label>
                <input type="text" class="form-control" id="service-nickname" v-model="newnickname" placeholder="">
              </div>
              <div class="mb-3">
                <label for="service-hostname" class="form-label">Hostname</label>
                <input type="text" class="form-control" id="service-hostname" v-model="newhostname" placeholder="https://hostname">
              </div>
              <div class="mb-3">
                <label for="service-username" class="form-label">Username</label>
                <input type="text" class="form-control" id="service-username" v-model="newusername" placeholder="">
              </div>
              <div class="mb-3">
                <label for="service-password" class="form-label">Password</label>
                <input type="password" class="form-control" id="service-password" v-model="newpassword" placeholder="">
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
    const current_service = ref('TEST')

    const newnickname = ref('TEST')
    const newhostname = ref('TEST')
    const newusername = ref('TEST')
    const newpassword = ref('TEST')

    function pollServices(event) {
      fetch('http://127.0.0.1:5000/services')
        .then(response => response.json())
        .then(data => services.value = data.available);
    }

    function addService(event) {
      // do not use getelement, use Vue standards
      fetch('http://127.0.0.1:5000/add-service', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nickname: newnickname.value,
          hostname: newhostname.value,
          username: newusername.value,
          password: newpassword.value
        })
      })

      pollServices()
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
      })

      pollServices()
    }

    function closeService(event) {
      fetch('http://127.0.0.1:5000/close-service', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          hostname: this.current_service.value
        })
      })

      pollServices()

    }

    pollServices()

    return { services, current_service, newhostname, newnickname, newusername, newpassword, addService, delService, closeService, pollServices}
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#current_service { 
  max-width:500px;
}
</style>