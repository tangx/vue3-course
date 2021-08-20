<template>
  <h1>Index</h1>

  <div>
    <router-view></router-view>
  </div>
</template> 




<script lang="ts">
import { reactive } from 'vue'

export default {
  name: "App",

  setup() {
    const routes = reactive([
      {
        to: "/index/ref-function",
        content: "RefFunction",
        classes: [],
      },
      {
        to: "/index/reactive-function",
        content: "ReactiveFunction"
      },
    ])

    return {
      routes,
    }
  }
};
</script>
