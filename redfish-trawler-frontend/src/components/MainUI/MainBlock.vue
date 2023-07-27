<template>
  <div class="jumbotron hello">
    <p>
      Add and select a service to Continue
    </p>
  </div>
</template>

<script>
export default {
  name: 'MainBlock',
  setup(){
    function drawServiceRoot() {

    }

    function drawChassisPage() {

    }

    return {drawServiceRoot, drawChassisPage}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
    border:1px;
    border-style: solid;
    border-color:cornflowerblue;
    background-color: lightgrey;
    padding:8px;
    text-align: center;
    min-height:500px;
}
a {
  color: #42b983;
}
</style>
