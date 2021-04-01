import { getUserInfo } from '@/services/api/connections'

export default {
    state: {
        user: {
            loggedIn: localStorage.getItem('session') || false,
            registered: false,
        },
    },
    actions: {
        loginAction({ commit }) {
            commit('toggleLoggedIn')
        },
        setRegistered({ commit }) {
            commit('setRegistered')
        },
        setUserInfo({ commit }) {
            const token = localStorage.getItem('token')
            getUserInfo(token).then(res => {
                const userInfo = res.data
                commit('setUserInfo', userInfo)
            })
        }
    },
    mutations: {
        toggleLoggedIn(state) {
            state.user.loggedIn = !state.user.loggedIn
        },
        setRegistered(state) {
            state.user.registered = !state.user.registered
        },
        setUserInfo(state, payload) {
            state.user = { ...state.user, ...payload }
        }
    },
    getters: {
        getUserStatus: state => state.user,
        getUserLogged: state => state.user.loggedIn,
        getUserRegistered: state => state.user.registered,
    }
}