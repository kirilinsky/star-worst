export default {
    state: {
        user: {
            loggedIn: false,
            registered: false
        }
    },
    actions: {
        loginAction({ commit }) {
            commit('toggleLoggedIn')
        },
        setRegistered({ commit }) {
            commit('setRegistered')
        }
    },
    mutations: {
        toggleLoggedIn(state) {
            state.user.loggedIn = !state.user.loggedIn
        },
        setRegistered(state) {
            state.user.registered = !state.user.registered
        }
    },
    getters: {
        getUserStatus: state => state.user,
        getUserLogged: state => state.user.loggedIn,
        getUserRegistered: state => state.user.registered
    }
}