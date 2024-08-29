<!--
SPDX-FileCopyrightText: 2023-2024 DMTF
SPDX-License-Identifier: BSD-3-Clause
Copyright Notice:
Copyright 2023-2024 DMTF. All rights reserved.
License: BSD 3-Clause License. For full text see link: https://github.com/DMTF/Redfish-Trawler/blob/main/LICENSE.md
-->

<template>
  <!-- Use Vue template for a basic Table, on all collections -->
  <!-- <div class="title">{{ title }} </div> -->
  <div class="basic">
    <table class="table">
        <thead>
            <tr>
                <th scope="col-4">Name</th>
                <th scope="col-4">Role</th>
                <th scope="col-2">Locked</th>
                <th scope="col-2">Enabled</th>
                <th scope="col-2">Subscription Types</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="entry in all_elements" :key="entry">
                <td> <a href="#" @click="$emit('gotoaccount', entry['@odata.id'])">{{ entry.UserName }}</a></td>
                <td> {{ entry.RoleId }}</td>
                <td> {{ entry.Locked }}</td>
                <td> {{ entry.Enabled }}</td>
                <td> {{ entry.AccountTypes }}</td>
            </tr>
        </tbody>
    </table>
  </div>
</template>

<script>
import { ref } from 'vue';
export default {
    name: 'TableAccounts',
    props: ['payload', 'keys'],
    watch: {
        payload() {
            this.all_elements = this.payload
        },
    },
    setup(props) {
        console.log(props.payload)
        console.log(props.keys)

        const title = ref('Accounts')
        const all_elements = ref(props.payload)
        const all_keys = ref(props.keys)

        return {title, all_elements, all_keys}
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
