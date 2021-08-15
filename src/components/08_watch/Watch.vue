<template>
  <n-card title="07. 计算属性">
    <div>
      Watch 接受三个参数 watch
      <p>1. watch(监视的对象, [新值，旧值], {参数})</p>
      <p>监视的对象: ref(obj), reactive(obj), [obj1,obj2]</p>
    </div>

    <n-card title="watch ref" size="medium">
      <div>msg: {{ msg }}</div>
      <div>sum: {{ sum }}</div>

      <button @click="sum++">sum++ : {{ sum }}</button>
      <button @click="msg += '!'">msg++ : {{ msg }}</button>
    </n-card>

    <n-card title="watch reactive" size="medium">
      <p>person.name: {{ person.name }}</p>
      <p>person.age: {{ person.age }}</p>
      <p>person.job.j1.salary: {{ person.job.j1.salary }}</p>

      <button @click="person.age++">age++ : {{ person.age }}</button>
      <button @click="person.name += '!'">name++ : {{ person.name }}</button>
      <button @click="person.job.j1.salary++">
        salary++ : {{ person.job.j1.salary }}K
      </button>
    </n-card>
  </n-card>
</template>

<script lang="ts">
import { ref, reactive, watch } from "vue";
export default {
  name: "Watch",
  components: {},

  setup() {
    // ref
    let msg = ref("oops");
    let sum = ref(0);

    // reactive
    let person = reactive({
      name: "zhangsan",
      age: 20,
      job: {
        j1: {
          salary: 20,
        },
      },
    });

    //  监视单个 ref 引用的 【一个】 对象
    watch(
      sum,
      (newValue, oldValue) => {
        console.log(
          `情况一: 监视单个 ref 引用的 【一个】 对象 is changed FROM ${oldValue} FROM =>  ${newValue}`
        );
      },
      { immediate: true }
    );

    // 情况二: 监视单个 ref 引用的 【多个】 对象
    watch(
      [sum, msg],
      (newValue, oldValue) => {
        console.log(
          `情况二: 监视单个 ref 引用的 【多个】 对象 FROM => ${oldValue} TO =>  ${newValue}`
        );
      },
      { immediate: true }
    );

    //  监视 reactive 所定义的一个响应式 【全部数据】
    //      1. 此处无法正确获取 oldValue
    //      2. 强制开启了深度监视 (deep配置无效)
    watch(
      person,
      (newValue, oldValue) => {
        console.log(
          `情况三: 监视 reactive 所定义的一个响应式 【全部数据 FROM => ${oldValue} TO =>  ${newValue}`
        );
      },
      { deep: false } //
    );

    // 情况四: 监视 reactive 所定义的一个响应式 其中的【某一个】属性
    watch(
      () => person.name,
      (newValue, oldValue) => {
        console.log(
          `情况四: 监视 reactive 所定义的一个响应式 其中的【某一个】属性 FROM => ${oldValue} TO =>  ${newValue}`
        );
      },
      { deep: false } //
    );

    // 情况五: 监视 reactive 所定义的一个响应式 其中的【某些】「基本类型」, 使用数组
    watch(
      [() => person.name, () => person.age],
      (newValue, oldValue) => {
        console.log(
          `情况五: 监视 reactive 所定义的一个响应式 其中的【某些】属性 FROM => ${oldValue} TO =>  ${newValue}`
        );
      },
      { deep: false } //
    );

    // // 情况六: 监视 reactive 所定义的一个响应式 其中 「对象类型」
    // // 2020-08-15 已经不存在这个问题了
    // watch(
    //   person.job,
    //   (newValue, oldValue) => {
    //     console.log(
    //       `情况六: 监视 reactive 所定义的一个响应式 其中 「对象类型」 FROM => ${oldValue} TO =>  ${newValue}`
    //     );
    //   },
    //   { deep: false } // 此处由于监视 reactive 定义的对西那个的某个属性， 所以 deep 配置有效。 // 2020-08-15 已经无法复现
    // );

    // 返回
    return {
      msg,
      sum,
      person,
    };
  },
};
</script>

