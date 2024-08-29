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
    <a href="#" data-bs-toggle="modal" data-bs-target="#editAccountServiceModal">
      Edit
    </a>
    <div class="modal fade" id="editAccountServiceModal" tabindex="-1" aria-labelledby="editAccountServiceLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="editAccountServiceLabel">Reset Chassis</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="mb-3" v-for="(item, key) in action_info" :key="item.option">
              <label :for="key+'id'" class="form-label">{{ item.option }}</label>
              <select v-if="(typeof item.value == 'object')" class="form-select" :id="key+'id'" v-model="action_parameters[key]">
                <option v-for="val in item.value" :key="val" :value="val">{{ val }}</option>
              </select>
              <select v-else-if="(typeof item.value == 'boolean')" class="form-select" :id="key+'id'" v-model="action_parameters[key]">
                <option :value="true">True</option>
                <option :value="false">False</option>
              </select>
              <input v-else :id="key+'id'" type="text" class="form-control" v-model="action_parameters[key]" placeholder="">
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-danger" @click="editAccountService" data-bs-dismiss="modal">Yes</button>
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import { ref } from 'vue';
export default {
  name: "ActionPatchAccountService",
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

    const action_info = ref({ 
        'ServiceEnabled':  {'option': "Service Enabled", 'value':true},
        'AuthFailureLoggingThreshold': {'option': 'AuthFailureLoggingThreshold', 'value': 0},
        'MinPasswordLength': {'option': 'MinPasswordLength', 'value': 0},
        'AccountLockoutDuration': {'option': 'AccountLockoutDuration', 'value': 0},
        'AccountLockoutThreshold': {'option': 'AccountLockoutThreshold', 'value': 0},
        'AccountLockoutCounterResetAfter': {'option': 'AccountLockoutCounterResetAfter', 'value': 0}
      }
    )

    const action_parameters = ref({ })

    function editAccountService(event) {
      console.log('PATCH NOW')
      fetch('http://127.0.0.1:5000/redfish/v1/AccountService?service_name=' + props.service, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(action_parameters.value),
      }).then(response => alert([response.status, response.statusText, '\n'].join(' ')));
    }

    return { action_info, action_parameters, editAccountService}
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#current_service { 
  max-width:500px;
}
</style>