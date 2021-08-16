<template>
  <n-card title="07. 计算属性">
    <div>
      first name:
      <input type="text" v-model="person.firstName" />
      <br />last name:
      <input type="text" v-model="person.lastName" />
      <br />fullname01:
      <input type="text" v-model="person.fullname01" />
    </div>
    <div>
      fullname readonly:
      <input type="text" v-model="fullnameReadonly" />
      <br />fullname changable:
      <input type="text" v-model="fullnameChangeable" />
    </div>
  </n-card>
</template>

<script lang="ts">
import { computed, reactive } from "vue";
export default {
  name: "Computed",
  components: {},
  setup() {
    let person = reactive({
      firstName: "Jack",
      lastName: "Sparrow",
      fullname01: "",
    });

    // //  计算属性简单写法， 只有 get。 readonly
    let fullnameReadonly = computed(() => {
      // 定义计算属性 fullnameReadonly
      // 并在函数内部修改 person.fullname01 的值
      // 在 return 中返回 fullnameReadonly
      //   必须在 return 中返回， fullnameReadonly 才会被执行
      person.fullname01 = person.firstName + " " + person.lastName;
      return person.fullname01;
    });

    // 虽然成功赋值了， 但是不能显示动态计算
    // 因为这里 .value 了。 所以赋值是静态值。 
    //   1. 可以使用 toRef 方式解决
    //   2. 或者使用 watchEffect 解决
    // person.fullname01 = computed(() => {
    //   return person.firstName + " " + person.lastName;
    // }).value;

    // //  计算属性完整写法， get / set
    let fullnameChangeable = computed({
      get() {
        return person.firstName + " " + person.lastName;
      },
      set(value: string) {
        const nameArr = value.split(" ");
        person.firstName = nameArr[0];
        person.lastName = nameArr[1];
      },
    });

    // 返回
    return {
      person,
      fullnameReadonly,
      fullnameChangeable,
    };
  },
};
</script>

