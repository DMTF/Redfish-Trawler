<template>
<!-- Use Vue template for a basic Table, on all collections -->
    <div class="title">{{ title }}
        <a href="#" class="addeditaction">Add New</a>
    </div>
    <div class="basic">
        <table class="table">
            <thead>
                <tr>
                    <th scope="col-4">Name</th>
                    <th scope="col-4">ChassisType</th>
                    <th scope="col-2">PowerState</th>
                    <th scope="col-2">Health</th>
                    <th scope="col-2">Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="entry in all_elements" :key="entry">
                    <td> <a href="#" @click="$emit('gotochassis', entry.Id)">{{ entry.Name }} ({{ entry.Id }})</a> </td>
                    <td> {{ entry.ChassisType }}</td>
                    <td> {{ entry.PowerState }}</td>
                    <td> {{ entry.Status ? entry.Status.Health : 'n/a' }}</td>     
                    <td> <button class="btn"> Reset </button></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { ref } from 'vue';
export default {
    name: 'TableChassis',
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
