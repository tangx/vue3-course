<template>
  <h1>Vue3+ Typescript + Vite2</h1>

  <div>
    <Home></Home>
  </div>
</template> 


<script lang="ts">
import Home from './components/Home.vue'
export default {
  name: "App",

  components: {
    Home,
  }

};
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


<style scoped>
.router-view {
  background-color: #2c3e;
  border: 1px solid rebeccapurple;
}
</style>