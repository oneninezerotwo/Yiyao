<template>
  <div class="cart_footer">
    <div class="all_select">
      <i
        class="icon iconfont"
        :class="isallselected?'icon_check':'icon_nocheck'"
        @click="allselect(isallselected)"
      ></i>
      <p>全选</p>
    </div>
    <div class="shop_settlement_box">
      <p class="price_p">
        合计：
        <em>¥{{totalPrice}}</em>
      </p>
      <p class="msg_p">
        不含运费，已优惠¥
        <em>0.00</em>
      </p>
    </div>
    <a href="javascript:;" class="btn_settlement" :class="isSelected?'btn_settlement_ok':''">
      去结算
      <em>({{totalClass}})</em>
    </a>
  </div>
</template>


<script>
export default {
  name: "carfooter",
  data() {
    return {};
  },
  computed: {
    // 全选状态
    isallselected() {
      let arr = this.$store.state.cartlist.find(function(item) {
        if (item.selected == false) {
          return item;
        }
      });
      return arr ? false : true;
    },
    // 总价
    totalPrice() {
        let total=0;
        this.$store.state.cartlist.forEach(element => {
            if(element.selected){
                total+=element.qty*element.price
            }
        });
        return total.toFixed(2);
    },
    // 选中商品类型总数
    totalClass() {
        let totalqty=0;
        this.$store.state.cartlist.forEach(element => {
            if(element.selected){
                totalqty+=element.qty/element.qty;
            }
        });
        return totalqty;
    },
    // 是否选择切换按钮颜色
     isSelected(){
      let arr = this.$store.state.cartlist.find(function(item){
             if(item.selected==true){
                 return item
             }
         })
        return arr?true:false
    }
  },
  methods: {
    // 全选操作
    allselect(isallselected) {
      if (isallselected) {
        this.$store.commit("notAllSelect");
      } else {
        this.$store.commit("allSelect");
      }
    }
  }
};
</script>

<style scoped>
.cart_footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 1.49333333rem;
  line-height: 1.49333333rem;
  background: #fff;
  border-top: 1px solid #eeeeee;
  box-sizing: border-box;
}
.cart_footer .all_select {
  position: absolute;
  top: 0.4rem;
  left: 0.21333333rem;
  line-height: 0.26666667rem;
  text-align: center;
}
.icon_check {
  color: #ff6666;
}
.icon_check:before {
  content: "\E6B2";
}
.cart_footer .all_select p {
  font-size: 0.32rem;
  color: #ccc;
  margin-top: 0.26666667rem;
}
.cart_footer .shop_settlement_box {
  text-align: right;
  padding: 0 3.73333333rem 0 1.33333333rem;
}
.cart_footer .price_p {
  height: 0.85333333rem;
  line-height: 0.85333333rem;
  color: #666;
  white-space: nowrap;
}
.cart_footer .price_p em {
  font-size: 0.53333333rem;
  color: #ff6666;
  font-style: normal;
}
.color_red {
  color: #ff6666;
}
.cart_footer .btn_settlement.btn_settlement_ok {
  background: #ff6666;
}
.cart_footer .btn_settlement {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  font-size: 0.48rem;
  line-height: 1.49333333rem;
  color: #fff;
  background: #ccc;
  float: right;
  width: 3.46666667rem;
  text-align: center;
}
.cart_footer .msg_p {
  height: 0.53333333rem;
  line-height: 0.42666667rem;
  font-size: 0.32rem;
  color: #999;
}
.cart_footer .btn_settlement em {
  font-style: normal;
  color: #fff;
}
.cart_section .shop_cart .edit_statu .cart_pro .price_count .btn_reduce {
    position: absolute;
    left: 0;
}

</style>
