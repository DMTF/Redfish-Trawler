<template>
<!-- Use Vue template for a basic Table, on all collections -->
    <div class="basic">
        <div class="container">
            <div class="row">
                <div class="col">
                    <div class="title">{{ title }}
                        <ActionDeleteResource v-if="deleteable" :target_id="resource['@odata.id']" :service="service"/>
                    </div>
                    <div class="propertyblock">
                        <div v-for="(entry, key) in resource" :key="entry">
                            {{ key }}: {{ entry }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
import ActionDeleteResource from '../Actions/ActionDeleteResource.vue';
export default {
    name: 'ResourceGeneric',
    components: { 
        ActionDeleteResource
    },
    props: ['service', 'payload', 'keys', 'deleteable'],
    watch: {
        payload() {
            this.title = 'ResourceGeneric'
            this.resource = this.payload['_payload']
        },
    },
    setup(props) {
        console.log(props.payload)
        console.log(props.keys)

        const title = ref('Resource')
        const resource = ref(props.payload['_payload'])

        return {title, resource}
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>