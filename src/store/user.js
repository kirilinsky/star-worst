export default {
    state: {
        user: {
            loggedIn: false
        }
    },
    actions: {
        loginAction({ commit }) {
            commit('toggleLoggedIn')
        }
    },
    mutations: {
        toggleLoggedIn(state) {
            state.user.loggedIn = !state.user.loggedIn
        }
    },
    getters: {
        getUserStatus: (state) => state.user,
        getUserLogged: state => state.user.loggedIn
    }
}