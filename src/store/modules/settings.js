const state = {
  typeOfCalculation: [],
  complexcity: 2,
  timeToPlay: 4
}

const getters = {
  TYPE_OF_CALCULATION: state => {
    return state.typeOfCalculation
  },
  COMPLEXITY: state => {
    return state.complexcity
  },
  TIME_TO_PLAY: state => {
    return state.timeToPlay
  }
}

const mutations = {
  SET_TYPE_OF_CALCULATION: (state, payload) => {
    state.typeOfCalculation = payload
  },
  SET_COMPLEXITY: (state, payload) => {
    state.complexcity = payload
  },
  SET_TIME_TO_PLAY: (state, payload) => {
    state.timeToPlay = payload
  }
}

const actions = {
  SAVE_TYPE_OF_CALCULATION: (context, payload) => {
    context.commit('SET_TYPE_OF_CALCULATION', payload)
  },
  SAVE_COMPLEXITY: (context, payload) => {
    context.commit('SET_COMPLEXITY', payload)
  },
  SAVE_TIME_TO_PLAY: (context, payload) => {
    context.commit('SET_TIME_TO_PLAY', payload)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
