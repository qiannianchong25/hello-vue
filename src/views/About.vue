<template>
  <div class="about">
    <h1>This is an about page</h1>
    <current-componet :is="isComponent"></current-componet>
    <p><router-link :to="{name:'Home'}">首页</router-link></p>
    <current-componet :is="isComponent"></current-componet>
    <button @click="click">点击{{$children.length}}</button>
    <vue-input v-if="status"></vue-input>
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
      status:false,
      b:'b',
      n:'n',
      len:0,
      isComponent:'vue-input'
    }
  },
  methods:{
    click(){
      this.status=!this.status
      // console.log(3456,this.isComponent)
      // if(this.isComponent==='vue-input'){
      //   this.isComponent='hello-world'
      // }else{
      //   this.isComponent='vue-input'
      // }
    }
  },
  // beforeRouteEnter (to,from,next) {
  //   console.log('AboutbeforeRouteEnter',to,from)
  //   next()
  // },
  // beforeRouteUpdate (to,from,next) {
  //   console.log(this)
  //   console.log('AboutbeforeRouteUpdate')
  //   next()
  // },
  // beforeRouteLeave (to,from,next) {
  //   console.log(this)
  //   console.log('AboutbeforeRouteLeave',to,from)
  //   next()
  // },
  // activated(){
  //   console.log(this)
  //   console.log('Aboutactivated')
  // },
  // deactivated(){
  //   console.log(this)
  //   console.log('Aboutdeactivated')
  // },
  // created(){
  //   console.log(this._data)
  //   console.log('Aboutcreated')
  // },
  // beforeMount(){
  //   console.log(this)
  //   console.log('AboutbeforeMount')
  // },
  mounted(){
    this.$http.getList({
      returnPage:1
    }).then(res=>{
      console.log('proxy',res)
    })
    this.$http.getLocal().then(
      res=>{
        console.log('local',res)
      }
    )
    this.$http.getUserInfo().then(
      res=>{
        console.log('userInfo',res)
      }
    )
    // this.len=this.$children.length
    console.log(this)
    console.log('Aboutmounted')
  },
  // beforeUpdate(){
  //   console.log(this)
  //   console.log('beforeUpdate')
  // },
  // updated(){
  //   console.log(this.$el)
  //   console.log('updated')
  // },
  // beforeDestroy(){
  //   console.log(this)
  //   console.log('AboutbeforeDestroy')
  // },
  // destroyed(){
  //   console.log(this)
  //   console.log('Aboutdestroyed')
  // }
}
</script>
