import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Store from './views/Store.vue'
import Promotions from './views/Promotions'
import About from './views/About.vue'
import Cart from './views/Cart.vue'
import SingleTV from './views/SingleTV.vue'
import ErrorPage from './views/ErrorPage.vue'
import Login from './views/Login.vue'
import AdminPanel from './views/AdminPanel.vue'

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
      path: '/cart',
      name: 'cart',
      component: Cart
    },
    {
      path: '/tv/:id',
      name: 'tvID',
      component: SingleTV
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/adminPanel',
      name: 'adminPanel',
      component: AdminPanel
    },
    {
      path: '/404',
      name: 'errorPage',
      component: ErrorPage
    },
    // {
      // path: '*',
      // name: 'toErrorPage',
      // redirect: '/404'
    // }
  ]
})