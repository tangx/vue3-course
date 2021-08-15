<template>
  <n-card title="02. 使用 Ref 函数实现动态响应">
    <h1>my info</h1>
    <h2>name: {{ name }}</h2>
    <h2>age: {{ age }}</h2>
    <h3>job.type: {{ job.type }}</h3>
    <h3>job.salary {{ job.salary }}</h3>
    <n-button type="primary" @click="changeJob">换人</n-button>
  </n-card>
</template>

<script lang="ts">
import { ref } from "vue";
export default {
  name: "App",
  components: {},

  setup() {
    let name = "zhangsan";
    const age = ref(20);
    const job = ref({
      type: "前端工程师",
      salary: "30k",
    });
    function sayHello(): void {
      console.log(`i'm ${name}, ${age} year old`);
    }

    function changeJob(): void {
      name = "wangwu";
      age.value = 30;
      job.value.type = "后端工程师";
      console.log(job);
      job.value.salary = "60k";
    }
    return {
      name,
      age,
      job,
      sayHello,
      changeJob,
    };
  },
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
