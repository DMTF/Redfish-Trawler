<template>
  <!-- Use Vue template for a basic Table, on all collections -->
  <!-- <div class="title">{{ title }}
    <a href="#" class="addeditaction">Add New</a>
  </div> -->
  <div class="basic">
    <table class="table">
        <thead>
            <tr>
                <th v-for="entry in all_keys" :key="entry" class="col-4">
                    {{ ekey }}
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
    props: ['payload', 'keys'],
    watch: {
        payload() {
            this.all_elements = this.payload
        },
        keys() {
            this.all_keys = this.keys
        },
    },
    setup(props) {
        console.log(props.payload)
        console.log(props.keys)

        const title = ref('Collection')
        const all_elements = ref(props.payload)
        const all_keys = ref(props.keys)

        return {title, all_elements, all_keys}
    }
}
</script>