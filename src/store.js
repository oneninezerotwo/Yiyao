import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    show:0,
    isLogin:false,
    cartlist: [
      // {
      //   img: 'https://p1.maiyaole.com/img/971/971672/120_120.jpg?a=1127706105',
      //   qty: 1,
      //   price: '12.80',
      //   name: '信龙 炉甘石洗剂 100ml',
      //   selected: true
      // }
    ],
    cartstate: "编辑",
    CartDelComfirm:false,
  },
  mutations: {
    // 购物车编辑状态切换
    changeCart(state) {
      if (state.cartstate == "编辑") {
        state.cartstate = "完成";
      }else{
        state.cartstate = "编辑";
      }
    },
    // 购物车修改数量
    changeQty(state, {guid,qty}) {
      state.cartlist = state.cartlist.map(function (goods) {
        if (goods.guid == guid) {
          goods.qty = qty;
        }
        return goods;
      })
    },
    addCartchangeQty(state, {guid,qty}) {
      state.cartlist = state.cartlist.map(function (goods) {
        if (goods.guid == guid) {
          goods.qty += qty;
        }
        return goods;
      })
    },
    // 购物车单选状态
    select(state, guid) {
      state.cartlist = state.cartlist.map(function (goods) {
        if (goods.guid == guid) {
          goods.selected = !goods.selected;
        }
        return goods;
      })
    },
    // 购物车全选/反选状态
    allSelect(state) {
      state.cartlist = state.cartlist.map(function (goods) {
        goods.selected = true;
        return goods;
      });
    },
    notAllSelect(state) {
      state.cartlist = state.cartlist.map(function (goods) {
        goods.selected = false;
        return goods;
      });
    },
    // 显示删除确认状态
    confirmChange(state){
      state.CartDelComfirm=!state.CartDelComfirm;
    },
    // 删除购物车
    cartdelete(state){
      state.cartlist = state.cartlist.filter(function(goods){
        if(goods.selected==false){
          return goods;
        }
      })
    },
    // 登陆状态切换
    Login(state){
      state.isLogin=true;
    },
    Loginout(state){
      state.isLogin=false;
    },
    addToCart(state,goods){
      state.cartlist.push(goods)
    }
  },
  actions: {


  }
})