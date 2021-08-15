<template>
  <n-card title="10. WatchEffect" size="huge">
    <div>
      watchEffect 接受 1 个参数， 回调函数。 watchEffect 不需要指明监视的内容，
      回调函数中的任何对象变化都能被监视到。
      <p>1.命名函数回调: watchEffect(function)</p>
      <p>2.匿名函数回调: watchEffect(()=>{})</p>
      <div>
        <h3>watchEffect and computed</h3>
        <p>1. 相同: 都是动态触发的。</p>
        <p>2. 不同: watchEffect, 不关注返回值。 而 computed 关注。</p>
      </div>
    </div>

    <div>
      <h3>demo</h3>
      <p>j1.salary: {{ person.job.j1.salary }}</p>
      <p>j2.salary: {{ person.job.j2.salary }}</p>
      <p>totla.salary: {{ person.salary }}</p>

      <button @click="person.job.j1.salary++">
        j1.salary++ : {{ person.job.j1.salary }}K
      </button>
      <button @click="person.job.j2.salary++">
        j2.salary++ : {{ person.job.j2.salary }}K
      </button>
    </div>
  </n-card>
</template>

<script lang="ts">
import { ref, reactive, watchEffect } from "vue";
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
      salary: 0,
      job: {
        j1: {
          salary: 20,
        },
        j2: {
          salary: 20,
        },
      },
    });

    // 匿名函数回调
    watchEffect(() => {
      const x1 = sum.value;
      console.log("watchEffect:::: 匿名函数被回调了。");
    });

    // 命名函数回调
    function totlaSalary(): void {
      person.salary = person.job.j1.salary + person.job.j2.salary;
    }
    watchEffect(totlaSalary);

    // 返回
    return {
      msg,
      sum,
      person,
    };
  },
};
</script>

