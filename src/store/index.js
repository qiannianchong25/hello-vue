import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    a: 1,
    b: 2
  },
  getters:{
    getA:state=>{
      return state.a
    }
  },
  mutations: {
    INCREACE(state, payload) {
      console.log(state.a, payload.amount)
      state.a += payload.amount
      console.log(`state.a的值为${state.a}`)
    }
  },
  actions: {},
  modules: {
    ab: {
      namespaced: true,
      state:{
        a: 3
      },
      mutations: {
        ADD(state) {
          state.a+=2
          console.log(state.a,'state')
        }
      },
      modules:{
        abb:{
          // namespaced:true,
          state:{
            a:'a',
            b:4
          },
          mutations:{
            ADD2(state){
              state.a+=1
              console.log('modules(abb)的结果:',state.a)
            }
          }
        }
      }
    },
    aa: {
        state: () => ({
          a: 3
        })
      }
  }
})