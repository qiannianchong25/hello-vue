<template>
  <section>
      <h1 v-show="toggle">自我介绍</h1>
      <p v-show="sync">大家好，我是渣渣灰</p>
      <button @click="click">切换</button>   
  </section>
</template>

<script>
export default {
 name:'TestModel',
 model:{
     prop:'toggle',
     event:'toggle'
 },
 props:{
     toggle:{
         type:Boolean,
         default:true
     },
     sync:{
         type:Boolean,
         default:true
     }
 },
 methods:{
     click(){
         this.$emit('toggle',!this.toggle)
         console.log(this.status)
         this.$emit('update:sync',!this.sync)
     }
 }
}
</script>

<style>

</style>