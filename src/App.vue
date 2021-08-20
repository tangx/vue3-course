<template>
  <h1>Vue3+ Typescript + Vite2</h1>

  <div id="routes">
    <router-link active-class="active" to="/index">Index</router-link>
    <router-link active-class="active" to="/about">About</router-link>
  </div>
  <div id="router-view">
    <router-view></router-view>
  </div>
</template> 


<script lang="ts">

export default {
  name: "App",
  components: {

  },
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