<template>
  <div id="wrapper">
    <van-password-input
      :value="value"
      :info="info"
      :errorInfo="errorInfo"
      :focused="showKeyboard"
      @focus="showKeyboard = true"
    ></van-password-input>
    <van-number-keyboard
      :show="showKeyboard"
      @input="onInput"
      @delete="onDelete"
      @blur="showKeyboard = false"
    />
   
  </div>
</template>

<script>
import { PasswordInput, NumberKeyboard } from "vant";
export default {
  name: "PasswordInput",
  components: {
    [PasswordInput.name]: PasswordInput,
    [NumberKeyboard.name]: NumberKeyboard,
  },
  data() {
    return {
      value: "",
      info: "密码为 6 位数字",
      errorInfo: "",
      showKeyboard: true,
    };
  },
  methods: {
    onInput(key) {
      key = this.value.length < 6 ? key : "";
      this.value += key;
      if(this.value.length>=6){
        this.errorInfo = "密码错误";
      }
    },
    onDelete() {
      this.value = this.value.slice(0, this.value.length - 1);
       this.errorInfo=''
    },
  },
};
</script>

<style>
</style>