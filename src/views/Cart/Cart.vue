<template>
  <div class="cartDemand">
    <cartheader/>
    <cartmain/>
    <cartfooter v-show="showFooter&&isEdit"/>
    <cartfooter1 v-show="showFooter&&!isEdit"/>
  </div>
</template>


<script>
import cartheader from "./CartHeader";
import cartmain from "./CartMain";
import cartfooter from "./CartFooter";
import cartfooter1 from "./CartFooter1";

export default {
  name: "cart",
  components: {
    cartheader,
    cartmain,
    cartfooter,
    cartfooter1
  },
  computed: {
    isEdit() {
      let isEdit = this.$store.state.cartstate == "编辑";
      if (isEdit) {
        return true;
      } else {
        return false;
      }
    },
    // 判断购物车list是否有商品渲染底部组件
    showFooter(){
       if(this.$store.state.cartlist.length>0){
        return true;
      }else{
        return false;
      }
    }
  }
};
</script>

<style scoped>
</style>
