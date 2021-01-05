<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <ListProduct/>
    <hr>
    <Shoping/>
    <ListEdit/>
  </div>
</template>

<script>
import ListProduct from '@/components/ListProduct.vue'
import Shoping from '@/components/Shoping.vue'
import ListEdit from '@/components/ListEdit.vue'


export default {
  name: 'App',
  components: {
    ListProduct,
    ListEdit,
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
