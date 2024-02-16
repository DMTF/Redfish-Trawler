<template>
  <!-- Use Vue template for a basic Table, on all collections -->
  <div class="title">{{ title }}
    <a href="#" class="addeditaction">Add New</a>
  </div>
  <div class="basic">
    <table class="table">
        <thead>
            <tr>
                <th scope="col-2">Name</th>
                <th scope="col-2">Description</th>
                <th scope="col-8">Assigned Privileges</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="entry in all_elements" :key="entry">
                <td> <a href="#" @click="$emit('gotorole', entry['@odata.id'])">{{ entry.Id }} ({{ entry.Name }})</a></td>
                <td> {{ entry.Description }}</td>
                <td> {{ entry.AssignedPrivileges }}</td>
            </tr>
        </tbody>
    </table>
  </div>
</template>

<script>
import { ref } from 'vue';
export default {
    name: 'TableRoles',
    props: ['payload', 'keys'],
    watch: {
        payload() {
            this.all_elements = this.payload
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>