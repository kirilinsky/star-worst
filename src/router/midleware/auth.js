export default function auth({ next, store }) {
    if (!store.getters.getUserStatus.loggedIn) {
        return next({
            name: 'signup'
        })
    }
    return next()
}