<template>
  <n-card title="03. 使用 Reactive 函数实现动态响应">
    <h1>my info</h1>
    <h2>name: {{ name }}</h2>
    <h3>job.type: {{ job.type }}</h3>
    <h3>job.salary {{ job.salary }}</h3>
    <n-button type="primary" @click="changeJob">修改</n-button>
  </n-card>
</template>

<script lang="ts">
import { reactive } from "vue";
export default {
  name: "App",
  components: {},

  setup() {
    let name = "zhangsan";
    // reactive 不能处理基本类型
    // const age = reactive(20);

    // reactive 接受 object 对象
    const job = reactive({
      type: "前端工程师",
      salary: "30k",
    });

    const hobby = reactive(["抽烟", "喝酒", "烫头"]);

    function changeJob(): void {
      name = "wangwu";

      job.type = "后端工程师";
      job.salary = "60k";

      // 直接通过索引修改对象值
      hobby[0] = "学习";
    }
    return {
      name,

      job,

      changeJob,
    };
  },
};
</script>

