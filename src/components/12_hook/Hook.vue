<template>
  <n-card title="12. Hook" size="huge">
    <!-- 1. mount / unmount HookDemo -->
    <button @click="isOn = !isOn">mount / unmount HookDemo</button>
    <hook-demo v-if="isOn"></hook-demo>
  </n-card>
</template>

<script lang="ts">
import { ref } from "vue";
import HookDemo from "./comps/HookDemo.vue";

export default {
  name: "Hook",
  components: {
    HookDemo,
  },

  setup() {
    let isOn = ref(false);
    // 返回
    return {
      isOn,
    };
  },
};
</script>

