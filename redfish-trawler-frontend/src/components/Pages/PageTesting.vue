
<template>
  <!-- Use Vue template for a basic Table, on all collections -->
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
            <tr v-for="entry in allChassis" :key="entry">
                <td> {{ entry.Name }} ({{ entry.Id }})</td>
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
    name: 'PageTest',
    props: ['testPayload'],
    watch: {
    chassisPayload() {
        this.allChassis = this.chassisPayload
    }
    },
    setup(props) {
        console.log(props.chassisPayload)
        const allChassis = ref(props.chassisPayload)

        return {allChassis}
    }
}
</script>

<style>
td {
    text-align: center;
}
</style>