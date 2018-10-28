const state = {
  daysInGame: {
    total: 22,
    lastDay: '26.10.2018'
  },
  lastResult: {
    wins: 10,
    total: 50
  },
  totalAccuracy: 15
}

const getters = {
  STATISTICS: state => {
    return state
  }
}

const mutations = {
  ADD_DAYS: (state, payload) => {
    state.daysInGame.lastDay = payload
    state.daysInGame.total++
  },
  SET_STATISTICS: (state, payload) => {
    state.lastResult = payload
  }
}
const actions = {
  SAVE_DAYS: async (context, payload) => {
    const now = new Date()
    const formatDate = now.getDate() + '.' + (now.getMonth() + 1) + '.' + now.getFullYear()
    if (state.daysInGame.lastDay === formatDate) {
      return
    }
    context.commit('ADD_DAYS', formatDate)
  },
  SAVE_STATISTICS: async (context, payload) => {
    context.commit('SET_STATISTICS', payload)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
