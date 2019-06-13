<template>
  <div class="good_topic">
    <div class="good_top">
      <p>精选专题</p>
    </div>
    <div class="good_list" v-for="(goodTopic,idx) in goodTopic" :key="idx">
      <div class="good_banner default_img">
        <a :href="goodTopic.href" data-ywpoint="F0005_0_null_null_I0018_0">
          <img :src="goodTopic.picUrl" lazy="loaded">
        </a>
      </div>
      <floorlist :data="goodProducts[idx]"></floorlist>
    </div>
  </div>
</template>




<script>
import floorlist from "./YiFloorlist";

export default {
  name: "yifloor",
  data() {
    return {
      goodTopic: [],
      goodProducts: []
    };
  },
  components: {
    floorlist
  },

  mounted() {
    this.$axios
      .get(
        "https://www.easy-mock.com/mock/5cfdd3c3efbf411d9cca7e71/111/taildata"
      )
      .then(({ data }) => {
        let goodTopic = data.data.goodTopic;
        this.goodTopic = goodTopic;

        let goodProducts = data.data.goodTopic.map(item => {
          return item.goodProducts;
        });
        this.goodProducts = goodProducts;
        // console.log(this.goodProducts);
      });
  }
};
</script>
