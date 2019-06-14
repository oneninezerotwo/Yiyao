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
    {
      path: '/setting',
      name: 'setting',
      component: () => import(/* webpackChunkName: "about" */ './views/My/Setting.vue'),
    },
    {
      path: '/city',
      name: 'city',
      component: () => import(/* webpackChunkName: "about" */ './views/My/City.vue'),
    },
    {
      path: '/mine',
      name: 'mine',
      component: () => import(/* webpackChunkName: "about" */ './views/My.vue'),
    },
    {
      path: '/newlogin',redirect: '/newlogin1', 
      name: 'newlogin',
      component: () => import(/* webpackChunkName: "about" */ './views/newLogin.vue'),
      children:[{
        path: '/newlogin1',
        name: 'newlogin1',
        component: () => import(/* webpackChunkName: "about" */ './components/loginMain1.vue'),
      },
      {
        path: '/newlogin2',
        name: 'newlogin2',
        component: () => import(/* webpackChunkName: "about" */ './components/loginMain2.vue'),
      }]
    },
  ]
})
