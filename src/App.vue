<template>
  <computed />
  <setup-tips />
  <vue-3-reaction />
  <reactive-function />
  <ref-function />
</template>

<script lang="ts">
import Computed from "./components/07_computed/Computed.vue";
import SetupTips from "./components/06_SetupTips/SetupTips.vue";
import Vue3Reaction from "./components/04_Vue3Reaction/Vue3Reaction.vue";
import ReactiveFunction from "./components/03_ReactiveFunction/ReactiveFunction.vue";
import RefFunction from "./components/02_RefFunction/RefFunction.vue";

export default {
  name: "App",
  components: {
    Computed,
    SetupTips,
    Vue3Reaction,
    ReactiveFunction,
    RefFunction,
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
