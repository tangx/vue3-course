<template>
  <n-card size="huge" title="setuptips children">
    <n-card size="medium" title="props">
      <p>为什么 props 变了， 但是 news 没变呢？</p>
      <!-- <p>props: {{ props }}</p>  不能直接在 template 中使用-->
      <p>news: {{ news }}</p>
      <button @click="changeNews">change news in children</button>
    </n-card>

    <n-card size="medium" title="context emits">
      <p>emit 事件</p>
      <!--  使用 context.emit 传递事件 -->
      <button @click="callEventHello">
        Children: 使用 context.emit 调用 hello 事件
      </button>
    </n-card>

    <n-card size="medium" title="context slots">
      <a href="https://www.bilibili.com/video/BV1Zy4y1K7SH?p=102"
        >default slot
      </a>
      <br />
      <a href="https://www.bilibili.com/video/BV1Zy4y1K7SH?p=103">
        named slots
      </a>
    </n-card>
  </n-card>
</template>

<script lang="ts">
import { reactive } from "vue";
export default {
  name: "Children",
  components: {},
  props: ["msg", "school"],

  // 在 子组件中定义 需要接收的「事件名称」
  emits: ["hello"],

  setup(props, ctx) {
    console.log("props::::", props);
    console.log("context");
    console.log("  ctx.attrs:::", ctx.attrs);
    console.log("  ctx.emit:::: ", ctx.emit);
    console.log("  ctx.slots:::: ", ctx.slots);

    let news = reactive({
      msg: props.msg,
      school: props.school,
    });

    function changeNews() {
      news.msg = "change news in children";
    }

    // 触发事件， 调用事件
    function callEventHello() {
      ctx.emit("hello", 666);
    }

    return {
      news,
      changeNews,
      callEventHello,
    };
  },
};
</script>

