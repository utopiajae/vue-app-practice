import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const TYPES = {
  SET_LOCATION: "SET_LOCATION",
  SET_ADDRESS: "SET_ADDRESS"
}

const STATES = {
  location: {},
  address: ''
}

const GETTERS = {
  location: state => state.location,
  address: state => state.address
}

const MUTATIONS = {
  SET_LOCATION(state, location) {
    state.location = location || null;
  },
  SET_ADDRESS(state, address) {
    state.address = address || null;
  }
}

const ACTIONS = {
  setLocation({ commit }, location) {
    commit('SET_LOCATION', (location));
  },
  setAddress({ commit }, address) {
    commit('SET_ADDRESS', (address));
  }
}

export default new Vuex.Store({
  STATES,
  GETTERS,
  MUTATIONS,
  ACTIONS
})
