<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <ref-function />
  <reactive-function />
  <Vue3Reaction />
</template>

<script lang="ts">
import RefFunction from "./components/RefFunction.vue";
import ReactiveFunction from "./components/ReactiveFunction.vue";
import Vue3Reaction from "./components/Vue3Reaction.vue";

export default {
  name: "App",
  components: {
    RefFunction,
    ReactiveFunction,
    Vue3Reaction,
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
