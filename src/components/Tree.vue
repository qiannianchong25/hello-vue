<template>
  <van-collapse  v-model="active" accordion class="list">
    <van-collapse-item  v-for="item in list" :key="item.name" :title="item.name" :name="item.name" :disabled="!item.children"
    :is-link="!!item.children">
      <tree :list="item.children" v-if="item.children&&item.children.length" v-model="active"></tree>
    </van-collapse-item>
  </van-collapse>
</template>

<script>
import { Collapse, CollapseItem} from "vant";
// import Tree from './Tree'
export default {
  name:'Tree',
  components: {
    [Collapse.name]: Collapse,
    [CollapseItem.name]: CollapseItem,
    // Tree:()=>import('./Tree.vue')
  },
  props:{
      list:{
          type:Array
      }
  },
  data() {
    return {
      active:''
    };
  },
  created(){
    // this.$options.components.Tree=Tree  //需要和import搭配使用
    // this.$options.components.Tree=require('./Tree').default
    this.list.map(v=>{
      v.title=v.name
    });
  }
};
</script>

<style scoped>
.list>>>.van-collapse-item__title .van-cell__right-icon::before{
  transform: rotate(0)
}
.list>>>.van-collapse-item__title--expanded .van-cell__right-icon::before{
  transform: rotate(90deg)
}
.list>>>.van-collapse-item__title--disabled .van-cell__title>span{
  font-weight: 200;
  color:red;
}
.list>>>.van-cell__title>span{
  font-weight:bold;
}
</style>