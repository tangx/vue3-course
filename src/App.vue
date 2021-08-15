<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <ref-function />
  <reactive-function />
</template>

<script lang="ts">
// import { defineComponent } from 'vue'
import RefFunction from "./components/RefFunction.vue";
import ReactiveFunction from "./components/ReactiveFunction.vue";

export default {
  name: "App",
  components: {
    RefFunction,
    ReactiveFunction,
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
