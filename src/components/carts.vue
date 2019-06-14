<template>
  <transition name="bounce">
    <div class="pro_series_bg pro_series_bg_show" v-if="show">
      <div class="pro_series_header" @click="hite"></div>

      <div class="pro_series pro_series_show" v-show="show">
        <div class="pro_series_top">
          <img alt class="series_img" :src="this.detail2.mainimg1" lazy="loaded">
          <span class="price">
            <span>¥</span>
            {{this.detail2.pcSalePrice}}
          </span>
          <span class="choose_mark">
            已选：
            <em>成人</em>
          </span>
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAA05JREFUWAnVmc9PE0EUx9/aYGkpoIliQrwIRg1X/hCU/0D0IsGD0fDLwyYYARH+AQ9492L8E/So4QTRaMSLCahtgtAfQAuu3+/SYdel3c4uu1Bf8jrTznszn77OvJmdGhJSLMvqhesAtB/a7VJUZc2lS6i/MQxjlQ2xCqC6oFPQZWhQoQ99uyKHRKcZqAnNQ48r7MOEZiIBRUeD0B/QqIV9DoaGhLMBNaF/oHEJ+zahRiBQOKSgr6AnJRwrpQUJQ0buJOFUEDhm40jCyFQep1CavlEEEBdEnHOu0Xfm2P8snMOQooHL/iv0ku+3iL/xJ4a4isRe4FBnXOM9RP204YhDBrLYYkcQ0WN251YUTfI86Ps4r4xeL6L4S0Xwvg7c23dLcm9kWh48WpCtfFEbIJf7bfvR9/2HFR0/BmqEhgrwpo5XX1+PpNOtUqlUZGZ2UTY37Wni65rNbsjM3KIkEgk519kuN65f8bV3Nd5inTmPpxIuDi3J5jZkdu6l7O6WJZNJy+TYHenoaKvpS7jZ57StSDtsJ8aG6trW7ACLhRHkkUlbLl44L+OjtyWZPCuFwrbMPFuUra2jP3cEcGQaICDPc4HEgWyRfKF0BDIiODL1E5CHzcBSDzJCODJ1cw5+RuVaYMKqgzMnK5JOtcre/r6Uy6HnnBfjCwHz+PRY+Y+Q05iLOzu7ItjvO7FoJsfrLx4vhc/7An9iy8dAr0n1wNKwxFLv9bz9rCwCrvtZNGpTc65S3pOO9jZJtSalWKq/uhv152lfJyCfwEKJglN57vHEXTvXJZO1V3eIQdZCA3rhVBKut7pDwNHFBuRzayCpB6c6iRByKfhWF2D7cqeg0Ftd9Ylf64jRKHIqgqr0RnLq6Yua26Ky95QrZOMcpLw+KPxfP376JqXSjrS0JJDn9DZ+Qk6MDuFgkZJicRsnoT3/QZxWh4kHViZsaKyyuvpdt3+y2FckdgR5cgX4vAMfT62n57Jux/NVJvl/HppAzOPxMDS6jUo3Xo4dxx6usjifumv47U3diRKDnelmqVnHoMyNzXv1QWoANu/lkQprNZImyjivQsJdvynIajSb8wLTA9m8V8AeUO44T6DL0KBCn8CX6IeJ2g2iU8dgJ/I3xF998g4ZqqZnmAAAAABJRU5ErkJggg=="
            class="dialogClose"
            @click="hite"
          >
        </div>
        <div class="pro_series_info">
          <dl class="series_unit">
            <dt>适用人群</dt>
            <dd>
              <span class="cur">成人</span>
              <span>儿童</span>
            </dd>
          </dl>
        </div>
        <div class="pro_change_num">
          <span class="num_mark">购买数量</span>
          <div class="my_price_count">
            <a
              href="javascript:;"
              class="my_btn_reduce btn_ok disabled"
              :class="{'active':count > 1}"
              v-on:click="subtract()"
            >-</a>
            <input
              type="tel"
              maxlength="6"
              id="inputTag4Series"
              class="my_input_nub"
              value="1"
              v-model="count"
            >
            <a href="javascript:;" class="my_btn_add btn_ok" v-on:click="add()">+</a>
          </div>
        </div>
<<<<<<< HEAD
        <span class="my_btn_self pro_sure_btn" :data-item="detail2.brandId" @click="addtocart($event);hite()">加入购物车</span>
=======
        <span
          class="my_btn_self pro_sure_btn"
          :data-item="detail2.brandId"
          @click="addtocart($event)"
        >加入购物车</span>
>>>>>>> 319ecbf2b4531b3becac36746836b65ec2dbc8f1
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      count: 1,
      detail2: [],
      brandId: null
    };
  },
  created() {
    this.brandId = this.$route.query.brandId;
    this.getData2();
  },
  computed: {
    show() {
      return this.$store.state.show;
    }
  },
  methods: {
    hite() {
      return (this.$store.state.show = 0);
    },
    add(count) {
      this.count++;
    },
    subtract(count) {
      if (this.count <= 1) {
        this.count = 1;
      } else {
        this.count -= 1;
      }
    },
    async getData2(callback) {
      const data4 = await this.$axios(
        "https://www.easy-mock.com/mock/5cf638f131d44a153b4b0a69/example/data" +
          this.brandId
      );
      this.detail2 = data4.data.product_info;
<<<<<<< HEAD
      // console.log(this.detail2)
=======
      // console.log(this.detail2);
>>>>>>> 319ecbf2b4531b3becac36746836b65ec2dbc8f1
    },
    addtocart(e) {
      let cart = {
        guid: this.detail2.itemId,
        img: this.detail2.mainimg1,
        price: this.detail2.pcSalePrice,
        name: this.detail2.productName,
        selected: true,
        qty: this.count
      };
<<<<<<< HEAD
      this.$store.commit("addToCart", cart);
=======
      let arr = this.$store.state.cartlist.filter(
        item => item.guid == cart.guid
      );

      this.hite();

      this.$message({
        message: "添加成功！",
        type: "success"
      });

      if (arr.length == 0) {
        // 判断购物车内有无该类商品，有则更改qty，否则加入
        this.$store.commit("addToCart", cart);
      } else {
        this.$store.commit("addCartchangeQty", { guid: cart.guid, qty: cart.qty });
      }
>>>>>>> 319ecbf2b4531b3becac36746836b65ec2dbc8f1
    }
  }
});
</script>


<style lang="scss" scoped>
.active {
  background: #5577fb !important;
  color: white !important;
}
.pro_series_bg_show {
  opacity: 1;
  -webkit-transition: all 0.3s ease-in;
  transition: all 0.3s ease-in;
  //   display: block;
}
.pro_series_bg {
  background: rgba(0, 0, 0, 0.4);
  z-index: 1001;
  top: 0;
  height: 100%;
  width: 100%;
  // opacity: 0;
  position: fixed;
  //   display: none;
}
.pro_series_header {
  position: fixed;
  width: 100%;
  top: 0rem;
  height: 8rem;
  z-index: 1002;
}
.pro_series_bg .pro_series_show {
  -webkit-animation: seriesLyaerSliderUp 0.3s 1 ease-in forwards;
  animation: seriesLyaerSliderUp 0.3s 1 ease-in forwards;
}
.pro_series_bg .pro_series {
  background: #fff;
  position: fixed;
  left: 0;
  right: 0;
  // bottom: -11.46666667rem;
  bottom: 0rem;
  height: 11.92rem;
  padding: 0 0.4rem;
  z-index: 1002;
}
.pro_series_bg .pro_series .pro_series_top {
  height: 2.26666667rem;
  border-bottom: 1px solid #f4f4f6;
  position: relative;
  padding-left: 6.13333333rem;
}
.pro_series_bg .pro_series .pro_series_top .series_img {
  width: 2.13333333rem;
  height: 2.13333333rem;
  background: #fff;
  border: 1px solid #f0f0f0;
  border-radius: 0.05333333rem;
  box-shadow: 0 0 0 0.02666667rem #fafafa;
  position: absolute;
  top: -0.4rem;
  left: 0;
}
img {
  vertical-align: middle;
}
.pro_series_bg .pro_series .pro_series_top .price {
  font-size: 0.42666667rem;
  color: #ff394e;
  line-height: 0.42666667rem;
  position: absolute;
  top: 0.74666667rem;
  left: 2.50666667rem;
}
.pro_series_bg .pro_series .pro_series_top .price span {
  font-size: 0.32rem;
}
.pro_series_bg .pro_series .pro_series_top .choose_mark {
  position: absolute;
  top: 1.33333333rem;
  left: 2.50666667rem;
  font-size: 0.32rem;
  color: #636784;
  line-height: 0.37333333rem;
}
.pro_series_bg .pro_series .pro_series_top .choose_mark em {
  color: #262d56;
}
.pro_series_bg .pro_series .pro_series_top .dialogClose {
  position: absolute;
  top: -0.26666667rem;
  right: -0.13333333rem;
  width: 0.53333333rem;
  height: 0.53333333rem;
}
.pro_series_bg .pro_series .pro_series_info {
  height: 5.86666667rem;
  overflow-y: scroll;
}
.pro_series_bg .pro_series .pro_series_info .series_unit {
  padding: 0.26666667rem 0 0;
  clear: both;
}
.pro_series_bg .pro_series .pro_series_info .series_unit dt {
  font-size: 0.34666667rem;
  color: #636784;
  line-height: 0.34666667rem;
  padding-top: 0.26666667rem;
}
.pro_series_bg .pro_series .pro_series_info .series_unit dd {
  overflow: hidden;
}
.pro_series_bg .pro_series .pro_series_info .series_unit dd .cur {
  color: #5577fb;
  border-color: #5577fb;
}
.pro_series_bg .pro_series .pro_series_info .series_unit dd span {
  display: inline-block;
  float: left;
  height: 0.8rem;
  margin: 0.26666667rem 0.26666667rem 0 0;
  padding: 0 0.26666667rem;
  background-color: #fff;
  border: 1px solid rgba(38, 45, 86, 0.15);
  border-radius: 0.16rem;
  font-size: 0.37333333rem;
  color: #686b85;
  line-height: 0.8rem;
}
.pro_series_bg .pro_series .pro_series_info .series_unit dd span {
  display: inline-block;
  float: left;
  height: 0.8rem;
  margin: 0.26666667rem 0.26666667rem 0 0;
  padding: 0 0.26666667rem;
  background-color: #fff;
  border: 1px solid rgba(38, 45, 86, 0.15);
  border-radius: 0.16rem;
  font-size: 0.37333333rem;
  color: #686b85;
  line-height: 0.8rem;
}
.pro_series_bg .pro_series .pro_change_num {
  height: 0.72rem;
  padding: 0.53333333rem 0 0.93333333rem;
  position: relative;
}
.pro_series_bg .pro_series .pro_change_num .num_mark {
  display: inline-block;
  float: left;
  font-size: 0.34666667rem;
  color: #636784;
  line-height: 0.72rem;
}
.pro_series_bg .pro_series .pro_change_num .my_price_count {
  float: right;
  height: 0.72rem;
}
.pro_series_bg
  .pro_series
  .pro_change_num
  .my_price_count
  .my_btn_reduce.disabled,
.pro_series_bg
  .pro_series
  .pro_change_num
  .my_price_count
  .my_btn_add.disabled {
  border: 1px solid rgba(38, 45, 86, 0.15);
  background: #fff;
  color: #686b85;
  line-height: 0.58666667rem;
}
.pro_series_bg .pro_series .pro_change_num .my_price_count .my_btn_reduce,
.pro_series_bg .pro_series .pro_change_num .my_price_count .my_btn_add {
  display: block;
  float: left;
  box-sizing: border-box;
  width: 0.72rem;
  height: 0.72rem;
  background: linear-gradient(132deg, #5577fb 0%, #738efc 100%);
  border: 0;
  border-radius: 0.37333333rem;
  font-size: 0.53333333rem;
  color: #fff;
  font-weight: bold;
  line-height: 0.64rem;
  text-align: center;
  text-decoration: none;
}
.pro_series_bg .pro_series .pro_change_num a {
  color: rgba(255, 255, 255, 0);
}
.pro_series_bg .pro_series .pro_change_num .my_price_count .my_input_nub {
  display: block;
  float: left;
  box-sizing: border-box;
  width: 1.70666667rem;
  height: 0.72rem;
  margin: 0 0.13333333rem;
  padding: 0 0.13333333rem;
  background-color: #f6f6f6;
  border: 0;
  border-radius: 0.37333333rem;
  font-size: 0.37333333rem;
  color: #262d56;
  font-weight: bold;
  line-height: 0.72rem;
  text-align: center;
}
.pro_series_bg .pro_series .my_btn_self {
  display: block;
  box-sizing: border-box;
  height: 1.17333333rem;
  margin: 0;
  padding: 0;
  background: linear-gradient(270deg, #ff6b86 0%, #ff394e 100%);
  border-radius: 0.05333333rem;
  font-size: 0.42666667rem;
  color: #fff;
  font-weight: bold;
  line-height: 1.17333333rem;
  text-align: center;
}
@import "../assets/animate.css";
/* 进入的动画*/
.bounce-enter-active {
  animation: bounceInUp 1s;
}
/* 离开的动画 */
.bounce-leave-active {
  animation: bounceInUp 0s reverse;
}
/** 动画类 */
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  // 50% {
  //   transform: scale(1.5);
  // }
  100% {
    transform: scale(1);
  }
}
</style>


