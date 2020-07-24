import Vue from 'vue'
import App from './App.vue'
import './filters'
import router from './router'
import store from './store'
import Http from './service/http'
import FastClick from 'fastclick'
import 'lib-flexible'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
NProgress.inc(0.2)
NProgress.configure({ easing: 'ease', speed: 500, showSpinner: false })
router.beforeEach((to,from,next)=>{
  console.log('beforeEach')
  NProgress.start()
  next()
})
router.beforeResolve((to,from,next)=>{
  console.log('beforeResolve')
  NProgress.done()
  next()
})
router.afterEach(()=>{
  console.log('afterEach')
  NProgress.done()
})

// 引入van样式
import {Toast} from 'vant'
Vue.prototype.Toast=Toast;
Vue.config.productionTip = false
Vue.prototype.$http = Http
FastClick.attach(document.body)
console.log('config',Object.keys(Vue),Vue.util)
new Vue({
  router,
  store,
  // components:{App},
  // template:'<app/>'
  render: h => h(App)
}).$mount('#app')