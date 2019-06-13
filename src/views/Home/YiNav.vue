<template>
  <div class="floor">
    <div class="nav_menu nav_menu_two">
      <div class="nav_inner">
        <div class="nav_box">
          <a v-for="(nav,index) in navlist1" :key="index"
            :href="nav.cmsUrl"
            :data-ywpoint="'F0008_null_null_null_I0024_'+index"
            class="nav_item"
          >
            <div class="nav_img">
              <img :src="nav.adPic">
            </div>
            <p class="white" style="color: rgb(0, 0, 0);">{{nav.adTitle}}</p>
          </a>
        </div>
        <div class="nav_box">
          <a v-for="(nav,index) in navlist2" :key="index"
            :href="nav.cmsUrl"
            :data-ywpoint="'F0008_null_null_null_I0024_'+index+5"
            class="nav_item"
          >
            <div class="nav_img">
              <img :src="nav.adPic">
            </div>
            <p class="white" style="color: rgb(0, 0, 0);">{{nav.adTitle}}</p>
          </a>
        </div>
      </div>
      <div class="nav_img_bg default_pic">
        <img src="https://p1.maiyaole.com/img/mobile/20195/1560136230221101.jpg">
      </div>
    </div>
    <!---->
  </div>
</template>


<script>
export default {
  name: "yinav",
  data() {
    return {
      navlist1: [],
      navlist2: []
    };
  },
  async created() {
    const data = await this.$axios(
      "https://www.easy-mock.com/mock/5cfdd3c3efbf411d9cca7e71/111/headerdata"
    );
    this.navlist1 = data.data.data.templatedata[0].contentList.slice(0, 5);
    this.navlist2 = data.data.data.templatedata[0].contentList.slice(5, 10);
  }
};
</script>