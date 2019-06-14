<template>
  <section class="cart_section">
    <div class="shop_tt">
      <i class="icon iconfont" :class="isallselected?'icon_check':'icon_nocheck'" @click="allselect(isallselected)"></i>
      <span class="yiyaowang_logo shop_logo_new"></span>
    </div>
    <div class="shop_cart" v-for="(goods,idx) in cartlist" :key="idx">
      <div class="cart_unit" :class="isEdit?'edit_statu':''">
        <div class="cart_pro">
          <span class="ico_box" @click="select(goods.guid)">
            <i class="icon iconfont" :class="goods.selected?'icon_check':'icon_nocheck'"></i>
          </span>
          <div class="pro_img_box">
            <img :src="goods.img" class="pro_img">
          </div>
          <h2 class="pro_name" v-text="goods.name"></h2>

          <div class="price_count">
            <a
              href="javascript:;"
              class="btn_reduce btn_ok"
              :class="goods.qty<=1?'disabled':''"
              @click="reduce(goods.guid,goods.qty)"
            ></a>
            <input
              type="tel"
              maxlength="4"
              class="input_nub"
              v-model="goods.qty"
              @blur="inputqty(goods.guid,goods.qty)"
            >
            <a href="javascript:;" class="btn_add btn_ok"  @click="add(goods.guid,goods.qty)"></a>
          </div>
          <span class="price">¥{{goods.price}}</span>
        </div>
      </div>
    </div>
  </section>
</template>


<script>
export default {
  data() {
    return {};
  },
  computed: {
    cartlist() {
      return this.$store.state.cartlist;
    },
    isallselected(){
        let arr = this.$store.state.cartlist.find(function(item){
             if(item.selected==false){
                 return item
             }
         })
        return arr?false:true
    },
    isEdit() {
      let isEdit = this.$store.state.cartstate == "编辑";
      if (!isEdit) {
        return true;
      } else {
        return false;
      }
    }
   
  },
  methods: {
    // 减少购物车数量
    reduce(guid, qty) {
      qty--;
      qty < 1 ? (qty = 1) : (qty = qty);
      this.$store.commit("changeQty", { guid, qty });
    },
    // 增加购物车数量
    add(guid, qty) {
      qty++;
      this.$store.commit("changeQty", { guid, qty });
    },
    // 用v-model在input框完成双向数据绑定，传goods.qty过来才是输入的数量，如果用v-text会导致goods.qty依然为输入前的值
    inputqty(guid, qty) {
      // 判断输入数值为数字
      qty * 1 === qty * 1 ? (qty = qty) : (qty = 1);
      this.$store.commit("changeQty", { guid, qty });
    },
    // 是否选中高亮
    select(guid){
         this.$store.commit("select", guid);
    },
    // 全选
    allselect(isallselected){
        if(isallselected){
         this.$store.commit("notAllSelect");
        }else{
         this.$store.commit("allSelect");
        }
    },
  }
};
</script>


<style scoped>
.cart_section {
  background: #fff;
  margin-bottom: 0.26666667rem;
  overflow: hidden;
}
.cart_section .shop_tt {
  height: 1.09333333rem;
  line-height: 1.09333333rem;
  border-bottom: 1px solid #f5f5f6;
  padding: 0 0.26666667rem;
  position: relative;
}
.cart_section .shop_tt .iconfont {
  position: absolute;
  left: 0.26666667rem;
  margin-top: 0.02666667rem;
}
.cart_section .shop_tt .yiyaowang_logo {
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6Njk3NEVGN0UzOUIxMTFFODhDRDFCRTUxQ0YzN0JEOEIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6Njk3NEVGN0YzOUIxMTFFODhDRDFCRTUxQ0YzN0JEOEIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo2OTc0RUY3QzM5QjExMUU4OENEMUJFNTFDRjM3QkQ4QiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo2OTc0RUY3RDM5QjExMUU4OENEMUJFNTFDRjM3QkQ4QiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PkN4BxMAAANPSURBVHja7JhbSFRRFIZnphEGoayIyi4WoeXYWERpt5cCi6bHIF8qsrAiwTelMEqLLlQ+GT1IkXSjyAjCwoqwC5IJGZnXUV/mIbMs1Egxp2b61/Bv2RzOzDz0MAOdBT9rn33W3uebtdfe5zD2UChkS2Rz2BLcLEAL0AK0AP93wKjWnJ7thfqhwngxOCOAJcNdhIrYNZYwgIDLgbsFLdW62+IOCLApcGXQCQN4AOqOKyDg0uFuQutMYjrX9rUF4gYIuKnwu6Cn3NW5hpiPxkEZnvx8uCyoobf93mvDvf1waVAd7rX8K6DdUH+NcBsNMaXIYCUeLCVwCdoAeSC57ocGDfOtYNsPDUOnAPoA471on4Tuc1xJDLaf0AW9BmfArTcJVBlcyazJQxujTPxKa0vt1rN9BlrFUprJeSJZKp9Xo2+GrREO7jAgsvAebpPJcjuYDTma6hHXbBIjmXXzsgMxDfBVkegQvwXumcypA3pNYgexvANaljPgHkFzoULcq4U/BJ1nSAkm/832OFQOmGrWpEttOsRIdmTF+qCvLJsg9BbxE9qP6XXwwXZm0BZjg1zl+TgNOsK+RdBD6jn0EvJBc6BzjFFn6jAA5AfvhF5AT3iMXWFplDJumQJ0avWVGg0Qv9odGO++lmQLSR3O0pb+qMkSyXHVxEIXy1TZo78OHYOWQ2ugG7KZoAKMPct+MZ8zyvJOAmKQwDftc2V+ygqO7S2b8G/GdSXvydLdhlZDxQCu42YS61LM2qYR+wyNQCmE8bF/vtYn1hMLsJX+MAemdDqSH+92uXMB8oX3yqEdUvw8S8WyDYBqyTq0HS3ztbA01HPkTZbEFQoDOlB/01mkRvujLcmA4Rh5x+x5WDdS4AUscBvPSR1IAXZx+Ys5/0HoNLSQR1eVlr3JJc7joWu0HuzSX2xXE2I2dBkgIQ1cxn9DX7s21qPtWBd3scpoLTdGBeeUL6Yh6ADmCCJeAQ7h+rsAbo+wvPphnMb39g9oDyYZweAatEPcAC705TF2Ho+hUegD68/Oaz/G5UR7m2n126o+FraZwL1hbSmT9+0C7eumgu27zKDR5GwrAswowBez746W+Wi2hJvoeJje+m/GArQALUAL0AK0AONqfwUYAPnjDB34eZuPAAAAAElFTkSuQmCC);
}
.cart_section .shop_tt .shop_logo_new {
  width: 0.9rem;
  height: 0.9rem;
  display: inline-block;
  background-repeat: no-repeat;
  background-size: 0.9rem 0.9rem;
  position: absolute;
  top: 0.14rem;
  left: 1.28rem;
  float: left;
}
.cart_section .shop_tt {
  height: 1.09333333rem;
  line-height: 1.09333333rem;
  border-bottom: 1px solid #f5f5f6;
  padding: 0 0.26666667rem;
  position: relative;
}
.cart_section .shop_tt .right_warm {
  font-size: 0.32rem;
  color: #666;
  position: absolute;
  right: 0.26666667rem;
}
.cart_section .shop_cart {
  clear: both;
  padding: 0.26666667rem 0.26666667rem 0;
  border-bottom: 1px solid #f5f5f6;
  overflow: hidden;
}
.cart_section .shop_cart .cart_unit {
  padding-bottom: 0.32rem;
}
.cart_section .shop_cart .cart_unit .cart_pro {
  position: relative;
  -webkit-transform: translateX(0px);
  padding-left: 3.52rem;
  min-height: 2.16rem;
  -webkit-transition: -webkit-transform 0.2s;
  transition: transform 0.2s;
}
.cart_section .shop_cart .cart_unit .cart_pro .ico_box {
  height: 0.8rem;
  width: 1.06666667rem;
  position: absolute;
  left: -0.26666667rem;
  top: 0.53333333rem;
  padding-top: 0.26666667rem;
  display: inline-block;
  cursor: pointer;
}
.cart_section .shop_cart .cart_unit .cart_pro .iconfont {
  margin-top: 0.05333333rem;
  margin-left: 0.26666667rem;
}
.iconfont {
  font-size: 0.53333333rem;
  color: #ccc;
}
.icon_check {
  color: #ff6666;
}
.icon_check:before {
  content: "\E6B2";
}
.cart_section .shop_cart .cart_unit .cart_pro .pro_img_box {
  width: 2.13333333rem;
  height: 2.13333333rem;
  display: inline-block;
  border: 1px solid #e5e5e5;
  -webkit-border-radius: 2px;
  border-radius: 2px;
  position: absolute;
  top: 0;
  left: 1.06666667rem;
}
.cart_section .shop_cart .cart_unit .cart_pro .pro_img_box .pro_img {
  width: 2.13333333rem;
  height: 2.13333333rem;
}
.cart_section .shop_cart .cart_unit .cart_pro .pro_img_box .tingsheng {
  height: 0.58666667rem;
  line-height: 0.58666667rem;
  width: 2.13333333rem;
  text-align: center;
  background: rgba(0, 0, 0, 0.3);
  display: inline-block;
  color: #fff;
}
.cart_section .shop_cart .cart_unit .cart_pro .pro_img_box .pro_mark {
  position: absolute;
  font-size: 0.32rem;
  left: 0;
  bottom: 0;
}
.cart_section .shop_cart .cart_unit .cart_pro .pro_name {
  font-size: 0.37333333rem;
  line-height: 0.58666667rem;
  color: #666;
  white-space: nowrap;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
}
.cart_section .shop_cart .cart_unit .cart_pro .price_count {
  position: absolute;
  right: 0;
  bottom: 0;
}
.price_count {
  width: 2.66666667rem;
  height: 0.53333333rem;
  line-height: 0.42666667rem;
  border: 1px solid #e5e5e5;
  -webkit-border-radius: 2px;
  border-radius: 2px;
  padding: 0.08rem 0;
  text-align: center;
}
.price_count .btn_reduce.disabled {
  background-position: 0 -0.53333333rem;
  cursor: default;
}
.price_count .btn_reduce {
  background-position: 0 0;
  border-right: 1px solid #e5e5e5;
}
.price_count input {
  width: 1.2rem;
  line-height: 0.53333333rem;
  border: none;
  color: #666;
  font-size: 0.37333333rem;
  text-align: center;
}
.price_count a,
.price_count input {
  float: left;
}
.price_count .btn_add {
  background-position: -0.69333333rem 0;
  border-left: 1px solid #e5e5e5;
}
.price_count a {
  width: 0.69333333rem;
  height: 0.53333333rem;
  background: url(data:image/png;base64,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)
    no-repeat;
  background-size: 1.38666667rem 1.06666667rem;
}
.cart_section .shop_cart .cart_unit .cart_pro .warm_info {
  font-size: 0.32rem;
  color: #ff6666;
}
.cart_section .shop_cart .cart_unit .cart_pro .price {
  font-size: 0.4rem;
  color: #ff6666;
  position: absolute;
  left: 3.52rem;
  top: 1.6rem;
}
.cart_section .shop_cart .edit_statu .cart_pro .price_count input {
    width: 100%;
}
.cart_section .shop_cart .edit_statu .cart_pro .price {
    display: none;
}
.cart_section .shop_cart .edit_statu .cart_pro .price_count .btn_reduce {
    position: absolute;
    left: 0;
}
.cart_section .shop_cart .edit_statu .cart_pro .price_count .btn_add {
    position: absolute;
    right: 0;
}
.cart_section .shop_cart .edit_statu .cart_pro .price_count {
    position: relative;
    display: block;
    width: auto;
    margin-bottom: 0.13333333rem;
    margin-top: 0.4rem;
    padding: 0.08rem 0.69333333rem;
}
</style>
