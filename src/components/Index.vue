<template>
  <!-- template here -->
  <div>Index: Vue3 + Typescript</div>
  <div>
    <router-link to="/index/ref-function">RefFunction</router-link>
    <router-link to="/index/reactive-function">ReactiveFunction</router-link>
  </div>
  <div>
    <router-view></router-view>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'


export default defineComponent({
});
</script>
