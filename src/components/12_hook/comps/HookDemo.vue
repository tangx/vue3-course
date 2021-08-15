<template>
  <h3>hook demo</h3>
  <div>
    <p>mount click at</p>
    <p>x: {{ point.x }}, y: {{ point.y }}</p>
  </div>
</template>

<script lang="ts">
// 引入 hook 函数
import usePoint from "./hooks/usePoint";

export default {
  name: "HookDemo",

  setup() {
    // 使用 hook 函数
    const point = usePoint();

    // 返回坐标
    return {
      point,
    };
  },
};
</script>

