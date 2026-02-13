<!--
SPDX-FileCopyrightText: 2023-2024 DMTF
SPDX-License-Identifier: BSD-3-Clause
Copyright Notice:
Copyright 2023-2024 DMTF. All rights reserved.
License: BSD 3-Clause License. For full text see link: https://github.com/DMTF/Redfish-Trawler/blob/main/LICENSE.md
-->

<template>
  <!-- Use Vue template for a basic Table, on all collections -->
  <!-- <div class="title">{{ title }}
    <a href="#" class="addeditaction">Add New</a>
  </div> -->
  <div class="basic">
    <table class="table" v-if="all_elements">
        <thead>
            <tr>
                <th v-for="entry in all_keys" :key="entry" class="col-4">
                    {{ all_names[entry] ? all_names[entry] : entry }}
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="entry in all_elements" :key="entry">
                <td v-for="ekey in all_keys" :key="ekey" class="col-4">
                    {{ entry[ekey] }}
                </td>
            </tr>
        </tbody>
    </table>
  </div>
</template>

<script>
import { ref } from 'vue';
export default {
    name: 'TableCollection',
    props: ['payload', 'keys', 'key_names', 'title'],
    watch: {
    },
    setup(props) {
        console.log(props.payload)
        console.log(props.keys)

        const all_elements = ref(props.payload)
        const all_keys = ref(props.keys)

        // replace keys with clean key names
        const all_names = ref(props.key_names)

        return {all_elements, all_keys, all_names}
    }
}
</script>