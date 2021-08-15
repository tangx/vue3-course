<template>
  <n-card title="12. ToRef and ToRefs" size="huge">
    <div>
      <p>toRef, toRefs 可以将对象转换为 「引用对象」， 以提供 「响应式服务」</p>
      <p>
        1. toRef(object,'target') : 将一个对象的「某个」属性转换为 ObjectRefImpl
        引用对象
      </p>
      <p>
        2. toRefs(object) : 将一个对象的 「第一层」子属性全部转换为
        ObjectRefImpl 引用对象， 「更深层不转换」
      </p>
      <p>2.2 toRefs 转换的结果可以使用 ...Name 解构</p>
    </div>

    <div>
      <h3>demo</h3>
      <p>toRefName: {{ toRefName }}</p>
      <p>person.name: {{ name }}</p>
      <p>person.age: {{ age }}</p>
      <p>person.job.j1.salary: {{ job.j1.salary }}</p>

      <button @click="age++">age++ : {{ age }}</button>
      <button @click="name += '!'">name!!</button>
      <button @click="job.j1.salary++">salary++ : {{ job.j1.salary }}K</button>
    </div>
  </n-card>
</template>

<script lang="ts">
import { reactive, toRef, toRefs } from "vue";
export default {
  name: "ToRef",

  setup() {
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

    let toRefsPerson = toRefs(person);
    console.log("toRefs %%%%% : ", toRefsPerson);

    // 返回
    return {
      toRefName: toRef(person, "name"),
      ...toRefsPerson,
    };
  },
};
</script>

