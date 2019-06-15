<template>
  <div class="cart_footer">
    <div class="all_select">
      <i class="icon iconfont" :class="isallselected?'icon_check':'icon_nocheck'"></i>
      <p>全选</p>
    </div>
    <a href="javascript:;" class="btn_settlement" :class="isSelected?'btn_settlement_ok':''" @click="showDelConfirm()">
      删除
      <em>({{totalClass}})</em>
    </a>
  </div>
</template>

<script>
export default {
  data() {
    return {
       totalqty:'',
    };
  },
  computed: {
    isallselected() {
      let arr = this.$store.state.cartlist.find(function(item) {
        if (item.selected == false) {
          return item;
        }
      });
      return arr ? false : true;
    },
    // 是否选择切换按钮颜色
    isSelected() {
      let arr = this.$store.state.cartlist.find(function(item) {
        if (item.selected == true) {
          return item;
        }
      });
      return arr ? true : false;
    },
    // 选中商品类型总数
    totalClass() {
      this.totalqty=0;
      this.$store.state.cartlist.forEach(element => {
        if (element.selected) {
          this.totalqty += element.qty / element.qty;
        }
      });
      return this.totalqty;
    }
  },
  methods: {
      showDelConfirm(){
        if(this.totalqty>=1){
        this.$store.commit("confirmChange");
          this.$store.commit("changeCart");
          }
      }
  },
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
.iconfont {
  font-size: 0.53333333rem;
  color: #ccc;
}
.icon_nocheck:before {
  content: "\E674";
}
.icon_check {
  color: #ff6666;
}
.cart_footer .all_select p {
  font-size: 0.32rem;
  color: #ccc;
  margin-top: 0.26666667rem;
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
.cart_footer .btn_settlement em {
  font-style: normal;
  color: #fff;
}
.cart_footer .btn_settlement.btn_settlement_ok {
    background: #FF6666;
}
</style>
