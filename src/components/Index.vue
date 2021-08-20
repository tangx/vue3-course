<template>
  <!-- template here -->
  <!-- <div>
    <router-link to="/index/ref-function">RefFunction</router-link>
    <router-link to="/index/reactive-function">ReactiveFunction</router-link>
  </div>-->

  <div>
    <!-- 最上层导航 -->
    <ul class="list-group">
      <router-link
        class="list-group-item"
        data-bs-toggle="collapse"
        active-class="active"
        v-for=" (route,index) in routes"
        :key="index"
        :to="route.to"
      >{{ route.content }}</router-link>
    </ul>
  </div>
  <div>
    <router-view></router-view>
  </div>
</template>

<script lang='ts'>
import { defineComponent, reactive } from 'vue'


export default defineComponent({

  setup() {
    const routes = reactive([
      {
        to: "/index/ref-function",
        content: "RefFunction"
      },
      {
        to: "/index/reactive-function",
        content: "ReactiveFunction"
      }
    ])
    return {
      routes
    }
  }
});
</script>
