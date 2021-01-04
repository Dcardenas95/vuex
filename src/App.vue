<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <ListProduct/>
    <hr>
    <Shoping/>
  </div>
</template>

<script>
import ListProduct from '@/components/ListProduct.vue'
import Shoping from '@/components/Shoping.vue'


export default {
  name: 'App',
  components: {
    ListProduct,
    Shoping
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
