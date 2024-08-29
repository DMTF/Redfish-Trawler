<!--
SPDX-FileCopyrightText: 2023-2024 DMTF
SPDX-License-Identifier: BSD-3-Clause
Copyright Notice:
Copyright 2023-2024 DMTF. All rights reserved.
License: BSD 3-Clause License. For full text see link: https://github.com/DMTF/Redfish-Trawler/blob/main/LICENSE.md
-->

<template>
    <div class="toasttable" tabindex="-1" aria-hidden="true">
      <div class="toastitem" v-for="msg in contents" :key="msg">
            {{ msg }}
      </div>
    </div>
</template>
<script>
    import { ref } from 'vue';
    export default {
        name: "StatusToast",
        props: [],
        setup(props) { 
            const contents = ref([])
            return {contents}
        }
    }
</script>


<style scoped>
.toasttable {
    height:fit-content;
    float: auto;
    position:fixed;
    margin:auto;
    width:50%;
    left:50%;
    transform: translatex(-50%)
}
.toastitem {
    background-color: white;
    border: 1px;
    border-color:grey;
    border-style: solid;
    border-radius: 10px;
    text-align: center;
}

</style>