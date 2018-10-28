import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'
import statistics from './modules/statistics'
import settings from './modules/settings'

Vue.use(Vuex)

const vuexPersist = new VuexPersist({
  key: 'mentat-app',
  storage: localStorage
})

export const store = new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    statistics,
    settings
  },
  plugins: [vuexPersist.plugin]
})
