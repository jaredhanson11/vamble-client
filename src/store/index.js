import Vue from 'vue'
import Vuex from 'vuex'
import API from '@/store/api.js'
import router from '@/router'
import { getRoute } from '@/router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {},
    esports: {},
    events: {},
    bets: {},
    betConditions: {},
    betTypes: {},
    betOdds: {}
  },
  mutations: {
    setUser(state, userJson) {
      Vue.set(state, 'user', userJson)
    }
  },
  actions: {
    loginUser(store, data) {
      API.axios.post(API.apiRoutes.LOGIN(), data).then(response => {
        store.commit('setUser', response.data)
        router.push(getRoute('home'))
      })
    },
    signupUser(store, data) {
      API.axios.post(API.apiRoutes.SIGNUP(), data).then(response => {
        store.commit('setUser', response.data)
        router.push(getRoute('home'))
      })
    }
  },
  getters: {
    user(state) {
      return state.user
    },
    esports(state) {
      return state.esports
    },
    events(state) {
      return state.events
    },
    bets(state) {
      return state.bets
    },
    betConditions(state) {
      return state.betConditions
    },
    betTypes(state) {
      return state.betTypes
    },
    betOdds(state) {
      return state.betOdds
    }
  }
})
