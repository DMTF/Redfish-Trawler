<template>
  <!-- Use Vue template for a basic Table, on all collections -->
  <div class="title">Accounts
    <a href="#" class="addeditaction">Add New</a>
  </div>
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
                <td> {{ entry.UserName }}</td>
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
    props: ['myPayload'],
    watch: {
    myPayload() {
        this.all_elements = this.myPayload
    }
    },
    setup(props) {
        console.log(props.myPayload)
        const all_elements = ref(props.myPayload)

        return {all_elements}
    }
}
</script>

<style>
</style>