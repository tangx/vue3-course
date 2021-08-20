<template>
  <div class="container">
    <div class="row">
      <div class="col-4">
        目录
        <div class="container">
          <div>
            <router-link class="list-group-item" to="/index">
              <div>INDEX</div>
            </router-link>
            <div class="row">
              <div class="col-2"></div>
              <div class="col">
                <router-link
                  class="list-group-item"
                  active-class="active"
                  to="/index/ref-function"
                >RefFunction</router-link>
                <router-link
                  class="list-group-item"
                  active-class="active"
                  to="/index/reactive-function"
                >ReactiveFunction</router-link>
              </div>
            </div>
          </div>
          <div>
            <router-link class="list-group-item" to="/about">
              <div>About</div>
            </router-link>
          </div>
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
