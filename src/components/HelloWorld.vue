<template>
  <div class="hello">
    <h1 @click='click(3,$event)'>{{ msg }}</h1>
    <slot :content="content">祝孤生</slot>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: ['msg'],
  data(){
    return {
      content:'hello world'
    }
  },
  methods:{
    click(a,b){
      console.log(a,b)
       this.$emit('hello')
      this.$emit('update:inputAttr',{type:'password',value:23})
    }
  },
  mounted(){
    this.$emit('hello',2)
    console.log('hello,world',this.$listeners,this.$attrs)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>