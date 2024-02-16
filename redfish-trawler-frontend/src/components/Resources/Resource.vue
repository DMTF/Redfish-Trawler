<template>
<!-- Use Vue template for a basic Table, on all collections -->
    <div class="basic">
        <div class="container">
            <div class="row">
                <div class="col">
                    <div class="title">{{ title }}
                        <a href="#" class="addeditaction">Edit</a>
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
export default {
    name: 'ResourceGeneric',
    components: { },
    props: ['payload', 'keys'],
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