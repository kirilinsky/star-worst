import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Profile from '../views/Profile.vue'

import guest from './midleware/guest'
import auth from './midleware/auth'
import middlewarePipeline from './middlewarePipeline'

import store from '../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,

  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      middleware: [guest]
    }
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile,
    meta: {
      middleware: [auth]
    }

  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})
router.beforeEach((to, from, next) => {
  if (!to.meta.middleware) {
    return next()
  }
  const middleware = to.meta.middleware
  const context = {
    to, from, next, store
  }

  return middleware[0]({
    ...context,
    next: middlewarePipeline(context, middleware, 1)
  })
})

export default router
