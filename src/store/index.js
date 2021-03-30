import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import user from './user'
import classState from './classState'

export default new Vuex.Store({
  modules: { user, classState }
})
