<template>
  <h1>this is index</h1>

  <router-link
    class="list-group-item"
    active-class="active"
    v-for=" (route,index) in routes"
    :key="index"
    :to="route.to"
    :class="route.classes"
  >
    <div>{{ route.content }}</div>
  </router-link>
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
