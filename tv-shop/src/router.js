import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Store from './views/Store.vue'
import Promotions from './views/Promotions.vue'
import About from './views/About.vue'
import ErrorPage from './views/ErrorPage.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/store',
      name: 'store',
      component: Store
    },
    {
      path: '/promotions',
      name: 'promotions',
      component: Promotions
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/404',
      name: 'errorPage',
      component: ErrorPage
    },
    // FIX da se pra6ta ot BackEnd
    {
      path: '*',
      name: 'toErrorPage',
      redirect: '/404'
    }
  ]
})
