<template>
  <div class="about">
    <h1>This is an about page</h1>
    <current-componet :is="isComponent"></current-componet>
    <p><router-link :to="{name:'Home'}">首页</router-link></p>
    <button @click="click">点击</button>
  </div>
</template>
<script>
import mixin from '../mixin/mixin1'
import mixin2 from '../mixin/mixin2'
import VueInput from '../components/VueInput'
// import HelloWorld from '../components/HelloWorld'
export default{
  name:'About',
  components:{
    VueInput,
    HelloWorld:()=>import('../components/HelloWorld')
  },
  mixins:[mixin2,mixin],
  data(){
    return {
      b:'b',
      n:'n',
      isComponent:'vue-input'
    }
  },
  methods:{
    click(){
      console.log(3456,this.isComponent)
      if(this.isComponent==='vue-input'){
        this.isComponent='hello-world'
      }else{
        this.isComponent='vue-input'
      }
    }
  },
  beforeRouteEnter (to,from,next) {
    console.log(this)
    console.log('AboutbeforeRouteEnter')
    next()
  },
  beforeRouteUpdate (to,from,next) {
    console.log(this)
    console.log('AboutbeforeRouteEnter')
    next()
  },
  beforeRouteLeave (to,from,next) {
    console.log(this)
    console.log('AboutbeforeRouteEnter')
    next()
  },
  activated(){
    console.log(this)
    console.log('Aboutactivated')
  },
  deactivated(){
    console.log(this)
    console.log('Aboutdeactivated')
  },
  beforeCreate(){
    console.log(this)
    console.log('AboutbeforeCreate')
  },
  created(){
    console.log(this)
    console.log('Aboutcreated')
  },
  beforeMount(){
    console.log(this)
    console.log('AboutbeforeMount')
  },
  mounted(){
    console.log(this)
    console.log('Aboutmounted')
  },
  beforeDestroy(){
    console.log(this)
    console.log('AboutbeforeDestroy')
  },
  destroyed(){
    console.log(this)
    console.log('Aboutdestroyed')
  }
}
</script>
