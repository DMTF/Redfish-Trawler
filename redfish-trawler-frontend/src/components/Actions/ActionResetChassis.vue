<!--
SPDX-FileCopyrightText: 2023-2024 DMTF
SPDX-License-Identifier: BSD-3-Clause
Copyright Notice:
Copyright 2023-2024 DMTF. All rights reserved.
License: BSD 3-Clause License. For full text see link: https://github.com/DMTF/Redfish-Trawler/blob/main/LICENSE.md
-->

<template>
    <!-- Button trigger modal -->
    <!-- TODO: replace each button with vue class?  Self check information before accepting -->
    <!-- Take advantage of Vues reactive forms -->
    <button type="button" class="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#resetChassisModal">
      Reset
    </button>
    <div class="modal fade" id="resetChassisModal" tabindex="-1" aria-labelledby="resetChassisLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="resetChassisLabel">Reset Chassis</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            Are you sure you want to reset this Chassis?
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-danger" @click="resetChassis" data-bs-dismiss="modal">Yes</button>
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import { ref } from 'vue';
export default {
  name: "ActionResetChassis",
  props: ['service', 'target_id'],
  data() {
    return { 'target_value': 'Chassis' }
  },
  watch: { 
    target_id: function(new_value) { 
      this.target_value = new_value
      print(this.target_value)
      print(this.target_id)
      print(this.service)
    }
  },
  setup(props) {

    const action_info = ref({ })

    const action_parameters = ref({ })

    function resetChassis(event) {
      console.log('RESETTING NOW')
      fetch('http://127.0.0.1:5000/redfish/v1/Chassis/' + props.target_id + '/Chassis.Reset?service_name=' + props.service, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({})
      }).then(response => alert([response.status, response.statusText, '\n'].join(' ')));
    }

    return { action_info, action_parameters, resetChassis}
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#current_service { 
  max-width:500px;
}
</style>