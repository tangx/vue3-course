<template>
  <div class="container">
    <div class="row">
      <div class="col-3">
        目录
        <div class="container">
          <router-link
            class="list-group-item"
            active-class="active"
            v-for=" (route,index) in top1Routes"
            :key="index"
            :to="route.to"
            :class="route.classes"
          >
            <div>{{ route.content }}</div>
          </router-link>
        </div>
      </div>
      <div class="col">
        内容
        <div>
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template> 


<script lang="ts">
import { reactive } from 'vue'
import { getCurrentInstance } from 'vue'

export default {
  name: "App",


  setup() {
    const top1Routes = reactive(
      [
        {
          to: "/index",
          content: "Index",
          classes: ['container'],
        },

        {
          to: "/about",
          content: "About"
        }
      ]
    )

    return {
      top1Routes
    }
  }


};
</script>
