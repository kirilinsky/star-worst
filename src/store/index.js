import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import user from './user'
import classState from './classState'
import units from './units'

export default new Vuex.Store({
  modules: { user, classState, units }
})
