<template>
  <n-card title="05. Vue3 的响应行为">
    <n-tag type="warning">
      注意: `lang="ts"` 的时候， 是不能增删对象属性的。 因为 typescript
      是强类型语言。 使用了 `window.Proxy`
    </n-tag>
    <p>1. 通过 Proxy 代理: 拦截对象中任意变化的属性，增删改查</p>
    <p>2. 通过 Reflect 反射 对 **源对象** 的操作</p>
    <h2>name: {{ person.name }}</h2>
    <h2 v-show="person.age">age: {{ person.age }}</h2>
    <h2 v-if="person.gender">name: {{ person.gender }}</h2>
    <n-button type="primary" @click="addGender">添加性别</n-button>
    <n-button type="warning" @click="deleteAge">删除年龄</n-button>
  </n-card>
</template>

<script lang="js">
import { reactive } from "vue";
export default {
  name: "App",
  components: {},

  setup() {
    let person = reactive({
      name: "zhangsan",
      age: 20,
      hobby: ["抽烟", "喝酒", "烫头"],
    });

    function addGender() {
      person.gender = "男";
    }
    function deleteAge(){
        delete person.age;
    }

    return {
      person,
      addGender,
      deleteAge,
    };
  },
};
</script>

