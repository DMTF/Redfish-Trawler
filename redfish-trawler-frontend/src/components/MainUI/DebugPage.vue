
<!--
SPDX-FileCopyrightText: 2023-2025 DMTF
SPDX-License-Identifier: BSD-3-Clause
Copyright Notice:
Copyright 2023-2024 DMTF. All rights reserved.
License: BSD 3-Clause License. For full text see link: https://github.com/DMTF/Redfish-Trawler/blob/main/LICENSE.md
-->

<template>
    <!-- Button trigger modal -->
    <!-- TODO: replace each button with vue class?  Self check information before accepting -->
    <!-- Take advantage of Vues reactive forms -->
    <!-- <button :disabled="!action_object" :id="my_id + 'ModalButton'" type="button" href="#" data-bs-toggle="modal" :data-bs-target="'#' + my_id + 'Modal'"> -->
    <div class="modal fade" id="DebugModal" tabindex="-1" :aria-labelledby="my_id + 'Label'" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" :id="'DebugLabel'">Debug</h5>
            <button type="button" class="btn-close" @click="$emit('toggleDebug')" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            Show Debug Info Here
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-danger" @click="$emit('toggleDebug')">Close</button>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import { ref } from 'vue';
export default {
  name: "DebugPage",
  props: ['service'],
  data() {
    return {visible: false}
  },
  setup(props) {
    return {}
  }
};
</script>
