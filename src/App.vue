<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <ref-function />
</template>

<script lang="ts">
// import { defineComponent } from 'vue'
import RefFunction from "./components/RefFunction.vue";

export default {
  name: "App",
  components: {
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
