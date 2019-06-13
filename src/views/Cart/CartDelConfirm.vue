<template>
  <div id="delete_layer" class="gray_layer_bg" :class="isShow?'show_gray_layer':''">
    <div class="layer_box">
      <div class="layer_con">
        <h3 class="layer_tt">确定删除选中的商品?</h3>
      </div>
      <div class="layer_btn_box">
        <span class="unit_btn cancle_btn" @click="cancel()">取消</span>
        <span class="unit_btn sure_btn" @click="cartcDelCommit()">确定</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
        }
    },
    computed: {
        isShow(){
            return this.$store.state.CartDelComfirm
        }
    },
    methods: {
        cancel(){
          this.$store.commit("confirmChange");
        },
        cartcDelCommit(){
          this.$store.commit("cartdelete");
          this.$store.commit("confirmChange");
        }
    },
};
</script>

<style scoped>
.gray_layer_bg {
    background: rgba(0, 0, 0, 0.3);
    height: 100%;
    width: 100%;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 900;
    opacity: 0;
    display: none;
}
.show_gray_layer {
    opacity: 1;
    -webkit-transition: all 0.3s ease;
    transition: all 0.3s ease;
    display: block;
}
.layer_box {
    width: 8.72rem;
    -webkit-border-radius: 5px;
    border-radius: 5px;
    background: #fff;
    overflow: hidden;
    position: absolute;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
}
.layer_box .layer_con {
    padding: 0.26666667rem 0.64rem;
}
.layer_box .layer_btn_box {
    text-align: center;
    padding-bottom: 0.4rem;
}
.layer_box .layer_tt {
    font-size: 0.42666667rem;
    text-align: center;
    line-height: 1.06666667rem;
    color: #333;
}
.layer_box .layer_btn_box .cancle_btn {
    color: #020202;
    border: 1px solid #CCCCCC;
}
.layer_box .layer_btn_box .unit_btn {
    width: 3.06666667rem;
    text-align: center;
    height: 0.96rem;
    line-height: 0.96rem;
    font-size: 0.42666667rem;
    display: inline-block;
    -webkit-border-radius: 3px;
    border-radius: 3px;
    margin: 0 0.26666667rem;
    cursor: pointer;
}
.layer_box .layer_btn_box .unit_btn {
    width: 3.06666667rem;
    text-align: center;
    height: 0.96rem;
    line-height: 0.96rem;
    font-size: 0.42666667rem;
    display: inline-block;
    -webkit-border-radius: 3px;
    border-radius: 3px;
    margin: 0 0.26666667rem;
    cursor: pointer;
}
.layer_box .layer_btn_box .sure_btn {
    background: #FF6666;
    border: 1px solid #FF6666;
    color: #fff;
}
</style>

