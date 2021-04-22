import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _372f9d19 = () => interopDefault(import('../pages/farm.vue' /* webpackChunkName: "pages/farm" */))
const _3e4b25b2 = () => interopDefault(import('../pages/infos.vue' /* webpackChunkName: "pages/infos" */))
const _e9f631f8 = () => interopDefault(import('../pages/pools.vue' /* webpackChunkName: "pages/pools" */))
const _20b6de11 = () => interopDefault(import('../pages/trade.vue' /* webpackChunkName: "pages/trade" */))
const _7896a302 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/farm",
    component: _372f9d19,
    name: "farm___en"
  }, {
    path: "/infos",
    component: _3e4b25b2,
    name: "infos___en"
  }, {
    path: "/pools",
    component: _e9f631f8,
    name: "pools___en"
  }, {
    path: "/trade",
    component: _20b6de11,
    name: "trade___en"
  }, {
    path: "/",
    component: _7896a302,
    name: "index___en"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
