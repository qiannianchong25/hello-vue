<template>
  <div class="home">
    <nav>
      <van-row tag="ul" @click="rowClick">
        <van-col span="6" tag="li">首页</van-col>
        <van-col span="6" tag="li">我的博客</van-col>
        <van-col span="6" tag="li">我的github主页</van-col>
        <van-col span="6" tag="li">帮助</van-col>
      </van-row>
    </nav>-->
    <transition name="van-slide-up">
      <div v-show="visible" @click="slideUp" class="slide">Slide Up</div>
    </transition>
    <hello-world msg="乖儿子，叫爸爸" test="goodtest" #default="attr" @hello="clickHello" :inputAttr.sync="inputAttr">
      -->
      <!-- <template #default="attr">
         {{attr.content}}
      </template>-->
      {{attr}}
      <img :src="src" />
      <div class="logo" @click="jump"></div>
    </hello-world>
    <vue-input v-bind="inputAttr"></vue-input>
    <tree :list="list"></tree>
    <child-component inline-template :src="src" @click.native="INCREACE({amount:5})">
      <div>
        {{msg+src}}
        <p>These are compiled as the component's own template.</p>
        <p>Not parent's transclusion content.</p>
      </div>
    </child-component>
    <async-component></async-component>
    <router-link :to="{name:'About'}">关于我们</router-link>
  </div>
</template>
<script>
const list = [
  {
    name: "中国",
    children: [
      {
        name: "湖北",
        children: [
          {
            name: "孝感",
            children: [
              {
                name: "安陆",
                children: [
                  {
                    name: "棠棣",
                    children: [
                      {
                        name: "李园"
                      },
                      {
                        name: "河德"
                      },
                      {
                        name: "陈河"
                      }
                    ]
                  },
                  {
                    name: "陈店"
                  }
                ]
              },
              {
                name: "云梦"
              },
              {
                name: "孝昌"
              }
            ]
          },
          {
            name: "武汉",
            children: [
              {
                name: "武昌"
              },
              {
                name: "汉口"
              },
              {
                name: "汉阳"
              }
            ]
          }
        ]
      },
      {
        name: "浙江",
        children: [
          {
            name: "杭州",
            children: [
              {
                name: "淳安"
              }
            ]
          },
          {
            name: "丽水"
          }
        ]
      },
      {
        name: "安徽",
        children: [
          {
            name: "合肥"
          },
          {
            name: "滁州",
            children: [
              {
                name: "全椒"
              },
              {
                name: "琅琊区"
              },
              {
                name: "会峰区"
              }
            ]
          }
        ]
      }
    ]
  }
];
// @ is an alias to /src
import VueInput from './../components/VueInput'
import Tree from "../components/Tree";
import { Col, Row } from "vant";
import HelloWorld from "../components/HelloWorld";
import {mapMutations} from 'vuex'
export default {
  name: "Home",
  components: {
    [Col.name]: Col,
    [Row.name]: Row,
    VueInput,
    HelloWorld,
    Tree,
    // 内联模板组件
    ChildComponent: {
      props: ["src"],
      data() {
        return {
          msg: "I'm a child"
        };
      }
    },
    // 异步组件
    AsyncComponent: {
       //无法使用#async
      template: "#async",
      data() {
        return {
          async: "async异步喽！"
        };
      }
    }
    // asyncComponent:(resolve,reject)=>{
    //   try{
    //     setTimeout(()=>resolve({
    //       template:'<p>我是一个异步组件</p>',
    //       data(){
    //         return {
    //           async:1
    //         }
    //       }
    //     }),2000)
    //   }catch(e){
    //     reject(e)
    //   }
    // }
  },
  filters: {
    toArray(val) {
      return Array.of(val);
    }
  },
  data() {
    return {
      list,
      visible: true,
      src: "static/logo.png",
      inputAttr:{
        type:'text',
        value:12
      }
    };
  },
  watch: {},
  methods: {
    ...mapMutations(['INCREACE']),
    jump(){
      location='https://www.baidu.com/'
    },
    clickHello(e,arg) {
      console.log(e,'hello',arg)
    },   
    rowClick() {
      let second = 3;
      let toast = this.Toast.loading({
        duration: 0, // 持续展示 toast
        forbidClick: true,
        message: `倒计时 ${second} 秒`
      });
      let timer = setInterval(() => {
        if (second) {
          toast.message = `倒计时 ${second--} 秒`;
        } else {
          clearInterval(timer);
          this.Toast.clear();
        }
      }, 1000);
    },
    slideUp() {
      this.visible = !this.visible;
    }
  },
  // activated(){
  //   alert(1)
  // },
  // deactivated(){
  //   alert(2)
  // },
 beforeRouteEnter (to,from,next) {
    console.log(this)
    console.log('HomebeforeRouteEnter')
    next()
  },
  beforeRouteUpdate (to,from,next) {
    console.log(this)
    console.log('HomebeforeRouteEnter')
    next()
  },
  beforeRouteLeave (to,from,next) {
    console.log(this)
    console.log('HomebeforeRouteEnter')
    next()
  },
  activated(){
    console.log(this)
    console.log('Homeactivated')
  },
  deactivated(){
    console.log(this)
    console.log('Homedeactivated')
  },
  beforeCreate(){
    console.log(this)
    console.log('HomebeforeCreate')
  },
  created(){
    console.log(this)
    console.log('Homecreated')
  },
  beforeMount(){
    console.log(this)
    console.log('HomebeforeMount')
  },
  mounted(){
    console.log(this)
    console.log('Homemounted')
  },
  beforeDestroy(){
    console.log(this)
    console.log('HomebeforeDestroy')
  },
  destroyed(){
    console.log(this)
    console.log('Homedestroyed')
  }
  // mounted() {
  //   let { prefix, toArray } = this.$options.filters;
  //   let compose = (...fns) => x => fns.reduce((f, g) => g(f), x);
  //   let composeFilter = compose(prefix, toArray);
  //   let visible = composeFilter(this.visible, "老子是过滤器，屌不屌");
  //   console.log(visible, "this实例", this);
  //   console.log('async',this.$store.state.a);
  // }
};
</script>

<style lang="stylus">
.home .van-col {
  margin-bottom: 10px;
  color: #fff;
  font-size: 13px;
  line-height: 30px;
  text-align: center;
  background-clip: content-box;
}

.van-col:nth-child(odd) {
  background-color: #39a9ed;
}

.van-col:nth-child(even) {
  background-color: #66c6f2;
}

.logo {
  display: inline-block;
  padding: 40px;
  background-image: url('../assets/logo.png');
  background-size: contain;
}

.slide {
  font-size: 32px;
  color: yellowgreen;
  line-height: 2;
}
</style>

