import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    a:1,
    b:2
  },
  mutations: {
    INCREACE(state,payload){
      state.a+=payload.amount
      console.log(`state.a的值为${state.a}`)
    }
  },
  actions: {
  },
  modules: {
  }
})
