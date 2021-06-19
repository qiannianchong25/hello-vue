<template>
  <div class="container">
    <div id="grid">
      <div class="item first">1</div>
      <div class="item second">2</div>
      <div class="item third">3</div>
      <div class="item fourth">4</div>
      <div class="item fifth">5</div>
      <div class="item sixth">6</div>
      <div class="item seventh">7</div>
      <div class="item">8</div>
      <div class="item">9</div>
    </div>
    <div class="column-wraper">
      <h2>英国维斯米斯特教堂碑文</h2>
      <div>当我年轻的时候，我梦想改变这个世界；当我成熟以后，我发现我不能够改变这个世界，我将目光缩短了些，决定只改变我的国家；当我进入暮年以后，我发现我不能够改变我们的国家，我的最后愿望仅仅是改变一下我的家庭，但是，这也不可能。当我现在躺在床上，行将就木时，我突然意识到：如果一开始我仅仅去改变我自己，然后，我可能改变我的家庭；在家人的帮助和鼓励下，我可能为国家做一些事情；然后，谁知道呢?我甚至可能改变这个世界。</div>
    </div>
    <div class="flex">
      <div class="left">left</div>
      <div class="center">center</div>
      <div class="right">right</div>
      <div class="item">568</div>
      <div class="item">569</div>
      <div class="item">570</div>
      <div class="item">571</div>
      <div class="item">572</div>
    </div>
    <div class="test">
      <tag v-bind="o">34567slot</tag>
      <button @click="clickBtn">点击</button>
      <div>{{arr}}</div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      index:1,
      arr:Array.from({length:5},(v,i)=>i),
      tag:'',
      o:{
        is:''
      }
    }
  },
  computed:{
    a(){
      return this.index
    }
  },
  methods:{
    clickBtn(){
      console.log('我变了')
      this.arr.fill(3)
      console.log(this.arr)
      // this.index++
      // console.log(this.index)
      // this.tag='h'+[this.index%6+1];
      // this.$router.replace('./grid').catch(e=>e)
    }
  },
  beforRouteEnter(){
    console.log('beforRouterEnter')
  },
  beforRouteUpdate(){
    console.log('beforRouterUpdate')
  },
  beforRouteLeave(){
    console.log('beforRouterLeave')
  },
  async beforeCreate () {
    await 1;
    console.log('beforeCreate')
  },
  created(){
    console.log('created')
    this.tag='h1';
    this.o.is=this.tag
  },
  async beforeMount(){
    await 2;
    console.log('beforeMount')
  },
  mounted(){
    console.log('mounted')
  },
  beforeUpdate(){
    console.log('beforeUpdate')
  },
  updated(){
    console.log('updated')
  }
};
</script>

<style lang="stylus" scoped>
$color = white;
$items = first, second, third, fourth, fifth, sixth;
$bgColors = #19CAAD #8CC7B5 #D1BA74 #BEE7E9 #E6CEAC #ECAD9E #39a9ed #9acd32 #2c3e50;
button{
  width 40px
  line-height 2
}
#grid {
  display: grid;
  height 100vw
  grid-template: repeat(3, 1fr) \/ repeat(3, 1fr);

  // grid-template-columns  100px 1fr minmax(120px,3fr)
  // grid-template-rows repeat(2,120px)
  // grid-gap 5px 10px
  for row, index in $bgColors {
    .item:nth-child({index + 1}) {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: row;
      color: $color;
    }
  }
}

.column-wraper {
  padding-top: 100px;
  // 包含column-width和column-count
  columns: 40px 3;
  column-rule: 2px solid yellowgreen;

  h2 {
    // 跨行
    column-span: all;
  }
  div{
    text-align justify
  }
}
.flex
  display flex
  flex-wrap wrap
  div
    width 21%
    flex 1 0 18%
  .left
  // 优先级:width<flex-basis<max-width<min-width;flex包括flex-flow、flex-shrink、flex-basis。三者默认值分别为0,0,auto。flex-flow按比例分配剩余宽度，加上原本宽度得到实际宽度；flex-shrink按权重计算溢出宽度，然后由原本宽度减去得到实际宽度。总权重为各元素shrink*元素宽度之和，然后各自溢出宽度为本元素shrink*自身宽度/总权重，经过本身宽度减去该宽度得到实际的宽度
    // flex-basis 100px
    // width 70px
    // min-width 200px
    // max-width 80px
    background-color red
  .center
    // flex 1 1 200px
    background-color yellow
  .right
    // flex 1 1 75px
    background-color green
  for v,i in $bgColors
    .item:nth-child({i+1})
      background-color v
    

</style>