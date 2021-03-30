export default {
    state: {
        user: {
            loggedIn: false

        }
    },
    getters: {
        getUserStatus: (state) => state.user,
        getUserLogged: state => state.user.loggedIn
    },
    mutations: {
        toggleLoggedIn(state) {
            state.user.loggedIn = !state.user.loggedIn
        }
    },
    actions: {
        loginAction({ commit }) {
            commit('toggleLoggedIn')
        }
    }
}