import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home/Home.vue'
import Cart from './views/Cart/Cart.vue'
import xFindacure from './views/xFindacure.vue';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue')
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    },
    {
      path: '/xFindacure',
      name: 'xFindacure',
      component: xFindacure,
    },
    {
      path: '/xCommodity',
      name: 'xCommodity',
      component: () => import('./views/xCommodity.vue'),
    },
    {
      path: '/xDetail',
      name: 'xDetail',
      component: () => import('./views/xDetail.vue'),
    },
  ]
})
