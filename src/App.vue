<template>
  <h1>Vue3+ Typescript + Vite2</h1>

  <div>
    <!-- 最上层导航 -->
    <ul class="list-group">
      <router-link
        class="list-group-item"
        data-bs-toggle="collapse"
        active-class="active"
        v-for=" (route,index) in indexRoutes"
        :key="index"
        :to="route.to"
      >
        <div>{{ route.content }}</div>
      </router-link>
      <div id="router-view">
        <router-view></router-view>
      </div>
    </ul>
  </div>
</template> 


<script lang="ts">
import { reactive } from 'vue'

export default {
  name: "App",


  setup() {
    const indexRoutes = reactive(
      [
        {
          to: "/index",
          content: "Index",
        },
        {
          to: "/about",
          content: "About"
        }
      ]
    )

    return {
      indexRoutes
    }
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