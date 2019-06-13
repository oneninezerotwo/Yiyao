<template>
  <div class="content">
    <yiheader/>
    <yifooter/>
    <yibanner/>
    <yinav/>
    <yifloor/>
    <div class="page_bottom"><p>广东壹号大药房连锁有限公司 020-31067218</p> <p>地址:广东省广州市越秀区共和西路1号2层</p></div>
  </div>
</template>

<script>
import yibanner from "./YiBanner";
import yiheader from "./YiHeader.vue";
import yifooter from "./YiFooter.vue";
import yinav from "./YiNav.vue";
import yifloor from "./YiFloor.vue";


export default {
  name: "home",
  components: {
    yiheader,
    yifooter,
    yibanner,
    yinav,
    yifloor,
    
  }
};
</script>

<style scoped>
</style>

