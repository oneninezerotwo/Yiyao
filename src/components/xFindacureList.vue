<template>
    <div class="box">
        <div class="categories">
            <header class="categories_header_bar">
                <div class="categories_header_con">
                    <a href="javascript:void(0)" class="categories_header_left_btn">
                        <i class="logo"></i>
                    </a>
                    <span class="address_map">广东</span>
                    <div class="categories_header_search">
                        <div data-ywpoint="category_float0_0_search_2_0" class="search_box">
                            <i class="icon iconfont icon_search"></i>输入商品名称</div>
                    </div>
                    <a href="tel:4000070958" data-ywpoint="category_float0_0_inquiry_3" class="categories_header_right_btn">
                        <i class="tel"></i>
                    </a>
                </div>
            </header>
            <div class="categories_banner">
                <a href="https://yzm.111.com.cn/m/yw-twwz/index.html?channel=yiyaoapp" data-ywpoint="category_float1_0_banner_1_0" title=""><img src="http://m.111.com.cn/yyw/wap/category/static/img/categorie_bannr.de2a6a8.png"></a>
            </div>
            <div class="categories_content">
                <ul class="categories_list">
                    <li data-ywpoint="category_float2_0_entrance1_1_0" v-for="(i,item) in getItemFirstCategory" :key="item">
                        <a href="javascript:;" @click="highLight=item" :class="{'active':item === highLight}" v-text="i.name"></a>
                    </li>
                </ul>
                <div class="categories_box">
                    <!---->
                    <div class="ypc-swipe categories_box_banner">
                        <div class="ypc-swipe-items-wrap">
                            <section class="ypc-swipe-item current">
                                <a href="https://m.111.com.cn/maps/index.html?pageId=1613&amp;type=release&amp;showNav=yes" data-ywpoint="category_float2_fieldNaN_entrance3_NaN_0"><img src="https://p1.maiyaole.com/img/mobile/20193/1554798327252106.jpg"></a>
                            </section>
                        </div>
                        <div class="ypc-swipe-indicator-wrap">
                            <!---->
                            <ul class="ypc-swipe-indicators">
                                <li class="current ypc-swipe-indicator"></li>
                            </ul>
                            <!---->
                        </div>
                    </div>
                    <div class="categories_box_innner">
                        <div v-for="(j,index) in getItemSecondCategory" :key="index" v-if="highLight===index">
                            <h3 v-text="j.name"></h3>
                            <ul>
                                <li data-ywpoint="category_float2_field1_entrance3_1_0" v-for="(k, key) in j.thridCategory" :key="key">
                                    <router-link to="/xCommodity">
                                        <div class="categories_img default_pic"><img :src="k.icon"></div>
                                        <span v-text="k.name"></span>
                                    </router-link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer_tab_bar">
                <div class="tab_bar_ul">
                    <li>
                        <router-link to="/" data-ywpoint="0_0_0_home_1_0" class="">
                            <i class="icon iconfont icon_home"></i>
                            <span class="tab_bar_name">首页</span>
                        </router-link> 
                    </li>
                    <li>
                        <router-link to="/xFindacure" data-ywpoint="0_0_0_category_2_0" class="active">
                            <i class="icon iconfont icon_search"></i>
                            <span class="tab_bar_name">找药</span>
                        </router-link> 
                    </li>
                    <!---->
                    <li>
                         <router-link to="/cart" data-ywpoint="0_0_0_cart_3_0" class="">
                            <i class="icon iconfont icon_shopcar"></i>
                            <span class="tab_bar_name">购物车</span>
                        </router-link> 
                    </li>
                    <li>
                        <router-link to="/mine" data-ywpoint="0_0_0_my_4_0" class="">
                            <i class="icon iconfont icon_user"></i>
                            <span class="tab_bar_name">我的</span>
                        </router-link> 
                    </li>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="js">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      getItemFirstCategory: [],
      highLight:0,
      getItemSecondCategory:[],
    };
  },
  created() {
    this.getFirstData();
    this.getSecondData();
  },
  methods: {
    async getFirstData(callback) {
      const data = await this.$axios(
        "https://www.easy-mock.com/mock/5cf638f131d44a153b4b0a69/example/getItemFirstCategory"
      );
      this.getItemFirstCategory = data.data.data
    //   console.log(data);
    },
    async getSecondData(callback) {
      const data2 = await this.$axios(
        "https://www.easy-mock.com/mock/5cf638f131d44a153b4b0a69/example/getItemSecondCategory"
      );
      this.getItemSecondCategory = data2.data.data.categoryinfo
    //   console.log(this.getItemSecondCategory)
    }

  }
});
</script>

<style lang="scss" scoped>
.box {
  width: 100%;
  height: 100%;
}
.categories {
  // height: 667px !important;
  margin: 0 auto;
  padding-bottom: 1.4666666666666666rem;
  padding-top: 1.1733333333333333rem;
  box-sizing: border-box;
}
.categories,
.page_categories {
  height: 100%;
  overflow: hidden;
}
.categories_header_bar {
  height: 1.1733333333333333rem;
  background: #f9f9f9;
  border: 1px solid #e7e7e7;
  box-sizing: border-box;
  position: fixed;
  width: 100%;
  z-index: 100;
  left: 0;
  top: 0;
  text-align: center;
}
.categories_header_bar .categories_header_con {
  position: relative;
  padding: 0 1.3333333333333333rem 0 3.2rem;
  height: 1.1733333333333333rem;
}
.categories_header_bar .categories_header_con .categories_header_left_btn {
  padding: 0 0.4rem;
  height: 1.1733333333333333rem;
  display: inline-block;
  position: absolute;
  left: 0;
  top: 0;
  line-height: 1.1733333333333333rem;
}
a {
  color: #333;
  text-decoration: none;
}
.categories_header_bar .categories_header_con .logo {
  margin-top: 0.21333333333333335rem;
  width: 0.6666666666666666rem;
  height: 0.7466666666666667rem;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABUCAYAAADKzsqkAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RUM2RDBDNjkzOUIxMTFFODhDRDFCRTUxQ0YzN0JEOEIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RUM2RDBDNkEzOUIxMTFFODhDRDFCRTUxQ0YzN0JEOEIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpFQzZEMEM2NzM5QjExMUU4OENEMUJFNTFDRjM3QkQ4QiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpFQzZEMEM2ODM5QjExMUU4OENEMUJFNTFDRjM3QkQ4QiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PpG0BYEAAAaNSURBVHja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);
  display: block;
  background-size: 0.6666666666666666rem auto;
}
em,
i {
  font-style: normal;
}
.categories_header_bar .categories_header_con .address_map {
  position: absolute;
  line-height: 1.1733333333333333rem;
  left: 1.3333333333333333rem;
  top: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 1.2rem;
}
.categories_header_bar .categories_header_con .categories_header_search {
  position: absolute;
  right: 1.6rem;
  left: 2.6666666666666665rem;
}
.categories_header_bar
  .categories_header_con
  .categories_header_search
  .search_box {
  height: 0.6666666666666666rem;
  line-height: 0.6666666666666666rem;
  margin-top: 0.26666666666666666rem;
  font-size: 0.32rem;
  padding: 0 0.26666666666666666rem;
  text-align: left;
  border-radius: 10px;
  background: #ebebeb;
  color: #b8b8be;
  cursor: text;
}
.categories_header_bar
  .categories_header_con
  .categories_header_search
  .iconfont {
  font-size: 0.4rem;
  color: #b8b8be;
  margin-right: 0.16rem;
}
.iconfont {
  font-family: iconfont !important;
  font-size: 32px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.categories_header_bar .categories_header_con .categories_header_right_btn {
  position: absolute;
  right: 0;
  top: 0;
  height: 1.1733333333333333rem;
  line-height: 1.1733333333333333rem;
  display: inline-block;
  padding: 0 0.26666666666666666rem;
  cursor: pointer;
}
.categories_header_bar .categories_header_con .tel {
  width: 1.2rem;
  height: 0.6666666666666666rem;
  line-height: 0.6666666666666666rem;
  margin-top: 0.21333333333333335rem;
  display: block;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAAA4CAIAAADy9ngEAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QUY4RTUyMzg0Njg2MTFFNzg2M0RCNjRBMTlGMkFEOUQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QUY4RTUyMzk0Njg2MTFFNzg2M0RCNjRBMTlGMkFEOUQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpBRjhFNTIzNjQ2ODYxMUU3ODYzREI2NEExOUYyQUQ5RCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpBRjhFNTIzNzQ2ODYxMUU3ODYzREI2NEExOUYyQUQ5RCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PlmG/KcAAAeoSURBVHja7Jv5TxNb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);
  background-size: 1.2rem auto;
  background-position: 0;
}

// ==========================banner==========================
.categories_banner {
  position: fixed;
  top: 44px;
  z-index: 5;
  width: 100%;
}
.categories_banner,
.categories_banner img {
  height: 1.1733333333333333rem;
}
a {
  color: #333;
  text-decoration: none;
}
.categories_banner img {
  width: 100%;
  vertical-align: middle;
}
.categories_banner,
.categories_banner img {
  height: 1.1733333333333333rem;
}
// ======================left-list==================
.categories_content {
  -webkit-overflow-scrolling: touch;
  height: 100%;
  zoom: 1;
  margin: 0 auto;
  overflow: hidden;
  font-size: 0.37333333333333335rem;
  margin-top: 44px;
}

.categories_content .categories_list {
  height: 100%;
  overflow: auto;
  padding-bottom: 1.1733333333333333rem;
  width: 25%;
  float: left;
  -webkit-overflow-scrolling: touch;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  //   background: #f7f7f7;
}
.categories_content .categories_list li {
  height: 1.3066666666666666rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  background: #f7f7f7;
}
.categories_content .categories_list li a.active {
  color: #f66;
  background: #fff;
  border-left: 2px solid #f66;
}
.categories_content .categories_list li a {
  height: 1.3066666666666666rem;
  line-height: 1.3066666666666666rem;
  padding: 0 0.26666666666666666rem;
  color: #333;
  display: block;
  overflow: hidden;
}
// ==============right-list================
.categories_content .categories_box {
  // width: 75%;
  height: 100%;
  overflow-y: auto;
  padding: 0 0 0 0.26666666666666666rem;
  background: #fff;
}
.categories_content .categories_box .categories_box_banner {
  padding: 0.26666666666666666rem 0.26666666666666666rem 0 0;
  height: 2rem;
}
.ypc-swipe,
.ypc-swipe-items-wrap {
  overflow: hidden;
  position: relative;
}
.ypc-swipe-items-wrap {
  height: 100%;
}
.ypc-swipe,
.ypc-swipe-items-wrap {
  overflow: hidden;
  position: relative;
}
.ypc-swipe-items-wrap > .ypc-swipe-item.current {
  display: block;
  -webkit-transform: none;
  -ms-transform: none;
  transform: none;
}
.ypc-swipe-items-wrap > .ypc-swipe-item {
  position: absolute;
  -webkit-transform: translateX(-100%);
  -ms-transform: translateX(-100%);
  transform: translateX(-100%);
  width: 100%;
  height: 100%;
  display: none;
}
.categories_content .categories_box .categories_box_banner img {
  width: 100%;
  height: 2rem;
  vertical-align: middle;
  cursor: pointer;
}
.ypc-swipe-indicator-wrap {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 0.9333333333333333rem;
}
.categories_content .categories_box .ypc-swipe-indicators {
  background: none;
}
.categories_content .categories_box ul {
  overflow: hidden;
  background: #fff;
  padding: 0.5333333333333333rem 0.26666666666666666rem 0 0;
  font-size: 0.32rem;
}
.ypc-swipe-indicators {
  position: absolute;
  bottom: 0.24rem;
  left: 50%;
  -webkit-transform: translateX(-50%);
  -ms-transform: translateX(-50%);
  transform: translateX(-50%);
}
.categories_content .categories_box .ypc-swipe-indicators li {
  width: 0.21333333333333335rem;
  height: 0.21333333333333335rem;
  margin: 0.08rem;
}
.categories_content .categories_box li {
  float: left;
  width: 33.33333%;
  height: 2.3466666666666667rem;
  text-align: center;
  margin-bottom: 0.4rem;
  display: block;
}
.ypc-swipe-indicator.current {
  opacity: 1;
}
.ypc-swipe-indicator:last-child {
  margin-right: 0;
}
.ypc-swipe-indicator:first-child {
  margin-left: 0;
}
.ypc-swipe-indicator {
  display: inline-block;
  width: 0.26666666666666666rem;
  height: 0.26666666666666666rem;
  -webkit-border-radius: 50%;
  border-radius: 50%;
  background: #fff;
  opacity: 0.5;
  margin: 0 0.13333333333333333rem;
}
// =================right-bottom=============
.categories_content .categories_box .categories_box_innner {
  padding-bottom: 2.3466666666666667rem;
}
.categories_content .categories_box h3 {
  color: #333;
  height: 1.0666666666666667rem;
  line-height: 1.0666666666666667rem;
  font-size: 0.4266666666666667rem;
  padding: 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
.categories_content .categories_box ul {
  overflow: hidden;
  background: #fff;
  padding: 0.5333333333333333rem 0.26666666666666666rem 0 0;
  font-size: 0.32rem;
}
.categories_content .categories_box li {
  float: left;
  width: 33.33333%;
  height: 2.3466666666666667rem;
  text-align: center;
  margin-bottom: 0.4rem;
  display: block;
}
.categories_content .categories_box li a {
  display: block;
  color: #555;
}
.categories_content .categories_box li .categories_img {
  width: 1.5466666666666666rem;
  height: 1.5466666666666666rem;
  margin: 0 auto 0.26666666666666666rem;
  overflow: hidden;
}
.default_pic {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUoAAAFKCAIAAAD0S4FSAAAAGXRFW…YEQfQWBNFbEATRWxAE0VsQBNFbEATRWxAE0VsQxh7/J8AAoAPNDwO9u8EAAAAASUVORK5CYII=);
  background-size: 1.3333333333333333rem auto;
}
.categories_content .categories_box li img {
  width: 1.5466666666666666rem;
  height: 1.5466666666666666rem;
  border-radius: 50%;
}
.categories_content .categories_box li span {
  display: block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
// ===============footer==================
li,
ul {
  list-style: none;
}
.footer_tab_bar {
  position: fixed;
  height: 1.46666667rem;
  left: 0;
  bottom: 0;
  width: 100%;
  background: #fff;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-touch-callout: none;
  z-index: 10;
}
.footer_tab_bar .tab_bar_ul {
  border-top: 1px solid #d8d8d8;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: -webkit-box;
  display: flex;
  color: #333;
}
.footer_tab_bar .tab_bar_ul li {
  -ms-flex: 1;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  flex: 1;
  width: 100%;
  text-align: center;
  cursor: pointer;
}
.footer_tab_bar .tab_bar_ul li a {
  color: #333;
  display: block;
  padding-top: 0.08rem;
}
</style>




