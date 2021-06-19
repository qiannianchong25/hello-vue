/*
 * @Author: mikey.zhaopeng 
 * @Date: 2021-06-19 19:18:35 
 * @Last Modified by:   mikey.zhaopeng 
 * @Last Modified time: 2021-06-19 19:18:35 
 */
<template>
  <div>
    <model-test v-model="title"></model-test>
    <model-test :sync.sync="text"></model-test>
    <div class="btn" v-on="event">请狠狠的点击我{{test.a}}</div>
    <div v-demo:a.active="text?'yes':'no'">自定义指令</div>
  </div>
</template>

<script>
import ModelTest from "../components/TestModel";
export default {
  name: "Model",
  components: {
    ModelTest,
  },
  directives: {
    demo: {
      inserted(el, binding, vnode, oldVnode) {
        console.log(el, binding, vnode, oldVnode);
        console.log(binding.value);
      },
      update() {
        console.log("update");
      },
      componentUpdated() {
        console.log("componentUpdated");
      },
      unbind() {
        console.log("unbind");
      },
    },
  },
  props: {},
  data() {
    return {
      title: true,
      text: true,
      a: {
        b: 3,
      },
      event: {
        click: this.click,
      },
      test: {
        a: 1,
      },
    };
  },
  watch: {
    test: {
      handler(val) {
        console.log(`watch:${val.a}`);
      },
      immediate: true,
      deep: true,
    },
  },
  methods: {
    click() {
      this.b++;
      this.test.a++;
      // this.$router.push({name:'home',query:{a:1,b:2}})
      // this.a.c++
      // console.log(this.a.c)
    },
  },
  mounted() {
    this.a = { c: 4 };
    console.log("store", this.$store.state.a);
    const ws = new WebSocket("wss://api-aws.huobi.pro/ws");
    console.log("ws", ws);
    ws.binaryType = "blob";
    ws.onopen = (data) => {
      console.log("data", data);
      ws.send({
        sub: "market.btcusdt.trade.detail",
        id: 1,
      });
    };
    ws.onmessage = async (res) => {
      console.log("res",await res.data.text());
    };
  },
  beforeUpdate() {
    console.log("beforeUpdate");
  },
  updated() {
    console.log("updated");
  },
};
</script>

<style>
.btn {
  margin: 40px 0;
}
</style>