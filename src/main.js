import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'element-ui/lib/theme-chalk/index.css';
import ElementUI from "element-ui"


Vue.config.productionTip = false

// 登陆判断
let uname = localStorage.name;
console.log(uname);
if(uname){
  store.commit('Login')
}else{
  store.commit('Loginout')
}

Vue.use(ElementUI);


new Vue({
  router,
  store,
  VueAwesomeSwiper,
  render: h => h(App)
}).$mount('#app')
