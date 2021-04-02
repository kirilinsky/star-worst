import { getUnits } from '@/services/api/connections'

export default {
  state: {
    units: [],
    unitsLoading: false,
    errorLoading: false
  },
  mutations: {
    setUnits(state, payload) {
      state.units = payload
    },
    setUnitsLoading(state, payload) {
      state.unitsLoading = payload
    },
    setErrorLoading(state, payload) {
      state.errorLoading = payload
    }
  },
  actions: {
    setUnits({ commit }) {
      commit('setUnitsLoading', true)
      getUnits()
        .then(res => {
          const allUnits = res.data
          commit('setUnits', allUnits)
        })
        .catch(err => {
          console.error(err)
          commit('setErrorLoading', true)
        })
        .finally(() => commit('setUnitsLoading', false))
    },
    setUnitsLoading({ commit }, payload) {
      commit('setUnitsLoading', payload)
    },
    setErrorLoading({ commit }, payload) {
      commit('setErrorLoading', payload)
    }
  },
  getters: {
    getUnits: state => state.units,
    getUnitsLoading: state => state.unitsLoading,
    getUnitsId: state => id => state.units.find(unit => unit.id === id)
  }
}