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
    },
    setEsports(state, esportsJson) {
      var esportsDict = {}
      for (var i in esportsJson) {
        var _esport = esportsJson[i]
        esportsDict[_esport.id] = _esport
      }
      Vue.set(state, 'esports', esportsDict)
    },
    setEvents(state, eventsJson) {
      var eventsDict = {}
      for (var i in eventsJson) {
        var _event = eventsJson[i]
        eventsDict[_event.id] = _event
      }
      Vue.set(state, 'events', eventsDict)
    },
    setEvent(state, eventJson) {
      Vue.set(state.events, eventJson.id, eventJson)
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
    },
    getEsports(store) {
      API.axios.get(API.apiRoutes.ESPORTS()).then(response => {
        store.commit('setEsports', response.data)
      })
    },
    getEvents(store) {
      API.axios.get(API.apiRoutes.EVENTS()).then(response => {
        store.commit('setEvents', response.data)
      })
    },
    getEvent(store, eventId) {
      API.axios.get(API.apiRoutes.EVENT(eventId)).then(response => {
        store.commit('setEvent', response.data)
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
    esportsList(state) {
      return Object.values(state.esports)
    },
    events(state) {
      return state.events
    },
    eventsList(state) {
      return Object.values(state.events)
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
