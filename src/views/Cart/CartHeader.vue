<template>
  <header id="cartDemandHeader" class="cart_common_header">
    <a href="javascript:;" class="common_left_btn" @click="gotoback">
      <i class="icon iconfont icon_leftarrow"></i>
    </a>
    <ul class="common_tt_tab">
      <li class="cur">
        <a>购物车</a>
      </li>
      <li>
        <a>需求清单</a>
      </li>
    </ul>
    <div class="common_right_btn">
      <span @click="bgisShow=!bgisShow">
        <i class="icon iconfont icon_points"></i>
      </span>
      <a href="javascript:; " v-show="edit" @click="editChange()">{{editText}}</a>
    </div>
    <div class="layer_gray_bg" v-show="bgisShow" @click="bgisShow=!bgisShow">
      <div class="ticket_top_menu">
        <router-link to="/">
          <i class="icon iconfont icon_home"></i>首页
         </router-link>
        <router-link to="/xFindacure">
          <i class="icon iconfont icon_category"></i>分类
         </router-link>
        <router-link to="/mine">
          <i class="icon iconfont icon_my"></i>我的
        </router-link>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "cartheader",
  data() {
      return {
          bgisShow:false,
          xuqiuShow:false
      }
  },
  computed: {
    edit(){
      if(this.$store.state.cartlist.length>0){
        return true;
      }else{
        return false;
      }
    },
    editText(){
      return this.$store.state.cartstate;
    }
    
  },
  methods: {
    editChange(){
        this.$store.commit("changeCart");
        this.$store.commit("notAllSelect");
    },
    gotoback(){
        this.$router.back(-1);
    }
  },

}
</script>


<style scoped>
.layer_gray_bg {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
    position: fixed;
    left: 0;
    top: 0;
    /* display: none; */
    z-index: 200;
}
.ticket_top_menu {
    background: #fff;
    width: 3.06666667rem;
    display: inline-block;
    position: fixed;
    right: 0.16rem;
    top: 1.44rem;
    border-radius: 5px;
    z-index: 9999;
}
.ticket_top_menu:before {
    content: "";
    width: 0;
    border: 0.32rem solid transparent;
    border-bottom-color: #fff;
    display: inline-block;
    position: absolute;
    top: -0.58666667rem;
    right: 0.4rem;
}
.ticket_top_menu a {
    display: block;
    cursor: pointer;
    clear: both;
    padding-left: 0.32rem;
    height: 1.06666667rem;
    line-height: 1.06666667rem;
    color: #666;
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
    text-align: left;
}
.cart_common_header .common_right_btn a, .cart_common_header .common_right_btn span {
    margin-left: 0.26666667rem;
    color: #999;
    float: right;
}
</style>



