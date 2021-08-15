<template>
  <n-card title="06. setup() 注意事项">
    <n-button type="primary" @click="giveup">放弃前端</n-button>
    <div>
      {{ news }}
    </div>
    <!-- @hello 给组件绑定 事件 -->
    <!-- msg, school 给组件绑定 props -->
    <children @hello="showReciveMessage" :msg="news.msg" :school="news.school">
      <span>默认 slots, 名字为 default</span>
      <template v-slot:slot1>
        <span> 命名 slot， 名字为 slot1 </span>
      </template>
      <template v-slot:slot2>
        <span> 命名 slot， 名字为 slot2 </span>
      </template>
    </children>
    <div>SetupTips: 等待 Hello 事件 => {{ emitEvent.emitMsg }}</div>
  </n-card>
</template>

<script lang="ts">
import { reactive } from "vue";
import Children from "./comps/Children.vue";
export default {
  name: "SetupTips",
  components: {
    Children,
  },
  props: ["msg", "school"],
  setup() {
    let news = reactive({
      msg: "你好吗？",
      school: "尚硅谷",
    });

    let emitEvent = reactive({
      emitMsg: "",
    });
    let emitMsg: string = "";

    function giveup() {
      news.msg = "再见， 前端";
      news.school = "还是去搬砖";
    }

    function showReciveMessage(value: number): void {
      //   alert(`SetupTips: 我收到了一个 hello 事件， 接受到的信息是 ${value}`);
      emitEvent.emitMsg = `我收到了一个 hello 事件， 接受到的信息是 ${value}`;
    }

    return {
      news,
      emitEvent,
      giveup,
      showReciveMessage,
    };
  },
};
</script>

