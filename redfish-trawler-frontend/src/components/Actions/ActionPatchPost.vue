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
    <a v-if="discrete" href="#" data-bs-toggle="modal" :data-bs-target="'#' + my_id + 'Modal'">
      {{ short }}
    </a>
    <button v-else type="button" href="#" data-bs-toggle="modal" :data-bs-target="'#' + my_id + 'Modal'">
      {{ short }}
    </button>
    <div class="modal fade" :id="my_id + 'Modal'" tabindex="-1" :aria-labelledby="my_id + 'Label'" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" :id="my_id + 'Label'">{{ msg }}</h5>
            <button :id="my_id + 'Close'" type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="mb-3" v-for="(item, key) in action_info" :key="item.option">
              <label :for="key + my_id" class="form-label">{{ item.option }}</label>
              <select v-if="(typeof item.value == 'object')" class="form-select" :id="key+my_id" v-model="action_parameters[key]">
                <option value="" selected disabled> Select Item </option>
                <option v-for="val in item.value" :key="val" :value="val">{{ val }}</option>
              </select>
              <select v-else-if="(typeof item.value == 'boolean')" class="form-select" :id="key+my_id" v-model="action_parameters[key]">
                <option :value="true">True</option>
                <option :value="false">False</option>
              </select>
              <input v-else :id="key + my_id" :type="item.hidden ? 'password' : 'text'" class="form-control" placeholder="" v-model="action_parameters[key]">
              <div v-if="item.hidden" class="mb-3"></div>
              <label v-if="item.hidden" :for="key+my_id+'Confirm'" class="form-label">Confirm {{ item.option }}</label>
              <input v-if="item.hidden" :id="key+my_id+'Confirm'" :type="item.hidden ? 'password' : 'text'" class="form-control" placeholder="" v-model="action_parameters[key + 'Confirm']">
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-danger" @click="postWithForm">OK</button>
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
          </div>
        </div>
      </div>
   </div>
</template> 

<script>
import { ref } from 'vue';
let all_id = 0
export default {
  name: "ActionPatchPost",
  props: ['service', 'title', 'short', 'msg', 'action_uri', 'action_info', 'call_type', 'my_callback', 'discrete'],
  beforeCreate() {
    all_id += 1;
    for (let item in this.action_info){
      let target = this.action_info[item].target
      if (target) {
        this.action_parameters[target] = {}
      }
    }
  },
  setup(props, context) {
    const my_id = "PatchPost" + all_id.toString()

    const action_parameters = ref({ })

    function postWithForm(event) {
      console.log(props.call_type + 'NOW')

      let output_json = {}
      for (let item in action_parameters.value){
        if (item === 'PasswordConfirm') {
          continue
        }
        let path = item.split('.', 2)
        if (path.length > 1){
          if (!output_json[path[0]]) {
            output_json[path[0]] = {}
          }
          output_json[path[0]][path[1]] = action_parameters.value[item]
        }
        else{
          output_json[path[0]] = action_parameters.value[item]
        }
      }

      if ('Password' in props.action_info){
        if (action_parameters.value['Password']){
          if (action_parameters.value['Password'] !== action_parameters.value['PasswordConfirm']){
            alert('Passwords do not match')
            return
          }
        }
        else {
          alert('Please enter a password')
          return
        }
      }

      fetch('' + props.action_uri + '?service_name=' + props.service, {
        method: props.call_type,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(output_json),
      }).then(endOfPostForm);
    }

    function endOfPostForm(response) {
      for (let item in action_parameters.value){
        action_parameters.value[item] = ''
      }
      alert([response.status, response.statusText, '\n'].join(' '))
      console.log(my_id)
      document.getElementById(my_id + "Close").click()
      context.emit("refresh")
    }

    return {my_id, action_parameters, postWithForm}
  }
};
</script>