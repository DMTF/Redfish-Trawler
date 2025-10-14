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
    <button :id="my_id + 'DeleteModalButton'" type="button" href="#" data-bs-toggle="modal" :data-bs-target="'#' + my_id + 'DeleteModal'">
      Delete
    </button>
    <div class="modal fade" :id="my_id + 'DeleteModal'" tabindex="-1" :aria-labelledby="my_id + 'DeleteLabel'" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" :id="my_id + 'DeleteLabel'">Delete {{ resource_type }}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            Are you sure you want to delete this {{resource_type}}?
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-danger" @click="deleteResource" data-bs-dismiss="modal">Yes</button>
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
  name: "ActionDeleteResource",
  props: ['service', 'target_id'],
  beforeCreate() {
    all_id += 1;
  },
  watch: { 
    target_id: function(new_value) { 
      this.target_value = new_value
    }
  },
  setup(props, context) {
    const my_id = "PatchPost" + all_id.toString()

    const resource_type = ref('Resource')

    function deleteResource(event) {
      console.log('DELETE NOW')
      fetch('/redfish/v1/' + props.target_id + '?service_name=' + props.service, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({})
      }).then(endOfDelete);
    }

    function endOfDelete(response) {
      alert([response.status, response.statusText, '\n'].join(' '))
      context.emit("refresh")
    }

    return {my_id, resource_type, deleteResource}
  }
};
</script>
