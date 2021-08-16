<template>
  <!-- 模版中引入 ref(基本属性) 不需要 .value -->
  <div>{{ a }}</div>
  <div>{{ book }}</div>
  <button @click="changeInfo">change info</button>
</template>

<script lang='ts'>
import { defineComponent, ref, reactive } from 'vue'

interface Book {
  title: string
  author: string
  year: number
}
export default defineComponent({
  props: [
    'title',
    'age'],

  emits: [
    'hello'
  ],

  setup() {

    // 使用 as 检查类型
    let a = ref(0 as number)

    // 定义 使用类型检查
    let book = reactive(
      {
        title: "guoxue",
        author: 'zhugeliang',
        year: 1894
      } as Book
    )
    function changeInfo() {
      // ref 变更值需要 .value
      a.value += 1

      book.title = "《三国演义》"
      book.author = "罗贯中"
      book.year += 1

    }
    return {
      a,
      book,
      changeInfo,
    };
  },
});
</script>  