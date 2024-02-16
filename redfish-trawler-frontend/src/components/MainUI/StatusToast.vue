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