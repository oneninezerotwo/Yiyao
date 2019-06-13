<template>
  <div id="cart" style>
    <div class="page" style>
      <div class="login_bar" style>
        <span class="bar_info">登录后可同步电脑与手机购物车中的商品</span>
        <span class="login_btn">登录</span>
      </div>
      <div class="cart_container cart_has_bar_container">
        <!---->
        <div class="cart_empty" v-show="showcarlist">
          <div class="cart_ico">
            <i class="icon iconfont icon_shopcar"></i>
          </div>
          <p class="empty_warm">购物车还是空的</p>
          <router-link to="/" class="see_btn">去看看</router-link>
        </div>

        <!-- 购物车商品组件 -->
        <cartlist  v-show="!showcarlist"/>
        <!---->

        <div>
          <div class="cart_other">
            <div class="other_tt">
              <span class="tt_name">常备用药</span>
              <span class="more_link">
                更多
                <i class="icon iconfont icon_rightarrow"></i>
              </span>
            </div>

            <!-- 广告商品 -->
            <div data-ywpoint="null_null_null_null_I0159_0" class="cart_other_list">
              <ul class="list_ul" style="width: 54.1867rem;">
                <li v-for="(cartad,idx) in adlist" :key="idx">
                  <div class="img_box">
                    <img :src="cartad.productImgUrl" alt>
                  </div>
                  <p class="pro_name">{{cartad.productName}}</p>
                  <span class="price">¥{{cartad.nowPrice}}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 确认删除 -->
    <cartdelconfirm/>
  </div>
</template>

<script>
import cartlist from "./Cartlist";
import cartdelconfirm from "./CartDelConfirm";


export default {
  name:"cartmain",
  data() {
    return {
      adlist:[],
    }
  },
  components:{
    cartlist,cartdelconfirm
  },
  mounted() {
    this.$axios
      .get(
        "https://www.easy-mock.com/mock/5cfdd3c3efbf411d9cca7e71/111/cartad"
      )
      .then(({ data }) => {
        let adlist = data.data.standbyMedicine;
        this.adlist = adlist;
      });
  },
  computed: {
    showcarlist(){
      if(this.$store.state.cartlist.length>0){
        return false;
      }else{
        return true;
      }
    }
  },
};
</script>

<style scoped>
.cart_has_bar_container {
    padding-top: 2.3733333333333333rem;
}
.cart_empty {
    height: 4rem;
    padding: 1.6rem;
    text-align: center;
}
.cart_empty .cart_ico {
    position: relative;
    width: 3.86666667rem;
    height: 0.56rem;
    display: inline-block;
}
.cart_other .cart_other_list .list_ul li .pro_name {
    color: #333;
    padding: 0.13333333rem;
    white-space: nowrap;
    width: 2.98666667rem;
    overflow: hidden;
    text-overflow: ellipsis;
}
.cart_other .cart_other_list .list_ul li .price {
    color: #FF6666;
    padding-left: 0.13333333rem;
}
.cart_empty .cart_ico .iconfont {
    font-size: 0.56rem;
    padding: 0 0.21333333rem;
    background: #F0F0F0;
    position: absolute;
    z-index: 5;
    left: 50%;
    margin-left: -0.48rem;
}
.cart_empty .cart_ico:after {
    content: "";
    width: 3.86666667rem;
    height: 1px;
    display: inline-block;
    background: #ccc;
    position: absolute;
    top: 0.26666667rem;
    left: 0;
}
.cart_empty .empty_warm {
    font-size: 0.34666667rem;
    margin-top: 0.66666667rem;
    color: #999;
}
.cart_empty .see_btn {
    height: 0.58666667rem;
    line-height: 0.58666667rem;
    width: 1.73333333rem;
    cursor: pointer;
    border: 1px solid #FF6666;
    color: #FF6666;
    -webkit-border-radius: 3px;
    border-radius: 3px;
    display: inline-block;
    margin-top: 0.66666667rem;
}
.cart_other {
    background: #fff;
    margin-bottom: 0.26666667rem;
}
.cart_other .other_tt {
    height: 1.17333333rem;
    border-bottom: 1px solid #eee;
    position: relative;
}
.cart_other .other_tt .tt_name {
    height: 1.14666667rem;
    line-height: 1.17333333rem;
    font-size: 0.42666667rem;
    width: 2.98666667rem;
    color: #FF6666;
    display: inline-block;
    border-bottom: 2px solid #FF6666;
    position: absolute;
    left: 0.26666667rem;
}
.cart_other .other_tt .more_link {
    line-height: 1.17333333rem;
    font-size: 0.37333333rem;
    position: absolute;
    right: 0.26666667rem;
    color: #666;
}
.cart_other .other_tt .more_link .iconfont {
    font-size: 0.32rem;
}
.iconfont {
    font-size: 0.53333333rem;
    color: #ccc;
}
.cart_other .cart_other_list {
    overflow-x: scroll;
    overflow-y: hidden;
    padding: 0.26666667rem;
    position: relative;
    -webkit-overflow-scrolling: touch;
    height: 4rem;
}
.cart_other .cart_other_list .list_ul {
    position: absolute;
    width: 100%;
    white-space: nowrap;
    height: 3.73333333rem;
    width: 20rem;
}
ul, li {
    list-style: none;
}
.cart_other .cart_other_list .list_ul li {
    width: 2.98666667rem;
    margin: 0 0.26666667rem 0 0.13333333rem;
    float: left;
}
.img_box img{
  width: 100%;
}
</style>

