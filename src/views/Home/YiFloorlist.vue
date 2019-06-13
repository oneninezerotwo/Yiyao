<template>
  <ul class="list_ul">
    <li v-for="(goodProducts,idx) in data" :key="idx">
      <a
        :href="'//m.111.com.cn/yyw/wap/item/#/item/'+goodProducts.itemid"
        data-ywpoint="F0005_undefined_null_null_I0018_1"
      >
        <div class="img_box">
          <img alt :src="goodProducts.productImg" lazy="loaded">
        </div>
        <p class="pro_name">{{goodProducts.productName}}</p>
        <p class="price">¥{{goodProducts.sellPrice}}</p>
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  name: "floorlist",
  props:['data'],
}
</script>