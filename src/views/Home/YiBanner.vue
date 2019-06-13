<template>
  <div class="ypc-swipe banner" ref="swiperBox">
    <swiper v-if="banner.length>1" :options="swiperOption" class="box-container" ref='mySwiper'>
      <swiper-slide v-for="(banner, index) in banner" :key="index">
        <a :href="banner.content" :data-ywpoint="'null_null_null_null_I0003_0'+index">
          <img :src="banner.pic" lazy="loaded">
        </a>
      </swiper-slide>
      <div id="ypc-swipe-indicators" class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
 
</template>


<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  name: "yibanner",
  data() {
    return {
      banner: "",
      swiperOption: {
        loop:true,
        pagination: {
          el: ".swiper-pagination"
        },
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        }
      }
    };
  },
  components: {
    swiper,
    swiperSlide
  },
  computed: {
     mySwiper() {
        return this.$refs.mySwiper.swiper
      }
  },
  mounted() {
    this.$axios
      .get(
        "https://www.easy-mock.com/mock/5cfdd3c3efbf411d9cca7e71/111/headerdata"
      )
      .then(({ data }) => {
        let banner = data.data.banner;
        this.banner = banner;
      });
  },
};
</script>

<style scoped>
@import "../../assets/swiper.css";
.banner {
  padding-top: 1.2rem;
}

</style>
