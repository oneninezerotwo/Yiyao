import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import VueAwesomeSwiper from 'vue-awesome-swiper'

Vue.config.productionTip = false

// 登陆判断
let uname = localStorage.name;
console.log(uname);
if(uname){
  store.commit('Login')
}else{
  store.commit('Loginout')

}

new Vue({
  router,
  store,
  VueAwesomeSwiper,
  render: h => h(App)
}).$mount('#app')
