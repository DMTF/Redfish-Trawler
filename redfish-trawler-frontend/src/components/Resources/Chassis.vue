<template>
<!-- Use Vue template for a basic Table, on all collections -->
    <div class="basic">
        <div class="container">
            <div class="row">
                <div class="col">
                    <div class="title">{{ title }}</div>
                    <div class="propertyblock">
                        <div v-for="entry in ['Name', 'Id', 'SerialNumber', 'SKU', 'Model']" :key="entry">
                            {{ entry }}: {{ resource[entry] }}
                        </div>
                        <div> Health: {{ resource.Status ? resource.Status.Health : 'n/a' }}</div>     
                        <div> PowerState: {{ resource['PowerState'] }}</div>     
                        <div> LocationIndicator: {{ resource['LocationIndicator'] }}</div>     
                    </div>
                    <div class="title"> Temperatures </div>
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col-4">Name</th>
                                <th scope="col-4">Reading</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="entry in temps" :key="entry">
                                <td> {{ entry['MemberId'] }} ({{ entry['Name'] }})</td>
                                <td> {{ entry['ReadingCelsius'] }} C* </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="col">
                    <div class="title"> Fans </div>
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col-4">Name</th>
                                <th scope="col-4">Reading</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="entry in fans" :key="entry">
                                <td> {{ entry['MemberId'] }} ({{ entry['Name'] }})</td>
                                <td> {{ entry['Reading'] }} {{ entry['ReadingUnits'] }} </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
export default {
    name: 'ResourceChassis',
    components: { },
    props: ['payload', 'keys'],
    watch: {
        payload() {
            this.title = 'Chassis'
            this.resource = this.payload['_payload']
            this.fans = this.payload['_fans']
            this.temps = this.payload['_temperatures']
            this.poweredby = this.payload['_poweredby']

            console.log(this.fans)
            console.log(this.temps)
        },
    },
    setup(props) {
        console.log(props.payload)
        console.log(props.keys)

        const title = ref('Chassis')
        const resource = ref(props.payload['_payload'])
        const fans = ref(props.payload['_fans'])
        const temps = ref(props.payload['_temperatures'])
        const poweredby = ref(props.payload['_poweredby'])

        return {title, resource, fans, temps, poweredby}
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>