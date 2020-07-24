import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// const requireComponent=require.context('../views',false,/\.vue$/);
// requireComponent.keys().forEach(key=>{
//   console.log('component',requireComponent(key)) // 返回一个模块，这个模块就是真正需要的
//   console.log('id',requireComponent.id) // ./src/components/App sync \.vue$
//   console.log('resolve',requireComponent.resolve(key)) // ./src/components/App/nav.vue
//   console.log('key',key) // ./nav.vue
// })
Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    beforeEnter: (to,from,next) => {
      console.log(this)
      console.log('HomebeforeEnter')
      next()
    },
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    beforeEnter: (to,from,next) => {
      console.log(this)
      console.log('AboutbeforeEnter')
      next()
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    console.log('savedPosition',savedPosition)
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
export default router