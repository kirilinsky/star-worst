export default function guest({ next, store }) {
    if (store.getters.getUserStatus.loggedIn) {
        return next({
            name: 'profile'
        })
    }
    return next()
}