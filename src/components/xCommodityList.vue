<template>
    <div style="width:100%;height:100%">
        <header data-v-3f01022a="" class="search_header_bar">
            <div data-v-3f01022a="" class="search_header_con">
                <router-link to="/" data-v-3f01022a="" href="javascript:history.go(-1)" data-ywpoint="null_null_null_null_I0033_0" class="search_header_left_btn">
                    <i data-v-3f01022a="" class="icon iconfont icon_leftarrow"></i>
                </router-link>
                <div data-v-3f01022a="" class="search_box">
                    <i data-v-3f01022a="" class="icon iconfont icon_search search_icon"></i> <input data-v-3f01022a="" id="searchKeyInput" type="text" name="" data-ywpoint="null_null_null_null_I0034_0" class="search_box_input"></div>
                <router-link to="/cart" data-v-3f01022a="" class="search_header_right_btn">
                    <i data-v-3f01022a="" data-ywpoint="null_null_null_null_I0035_0" class="icon iconfont icon_shopcar">
                        <!---->
                        <!---->
                    </i>
                </router-link>
            </div>
        </header>

        <!-- ====================分类=================== -->
        <div class="classify">
            <ul class="list">
                <li>
                    <span>感冒</span>
                    <i></i>
                </li>
                <li>
                    <span>综合排序</span>
                    <i></i>
                </li>
                <li>
                    <span>列表</span>
                    <i></i>
                </li>
                <li>
                    <span>筛选</span>
                    <i></i>
                </li>
            </ul>
        </div>
        <!-- =====================选项================ -->
        <div class="option">
            <ul class="Olist">
                <li>
                    <span>自营</span>
                </li>
                <li>
                    <span>品牌</span>
                    <i></i>
                </li>
                <li>
                    <span>促销</span>
                    <i></i>
                </li>
                <li>
                    <span>价格</span>
                    <i></i>
                </li>
            </ul>
        </div>

        <!-- =================商品列表================== -->
        <div class="box">
            <div class="shopbox">
                <div class="shoplist">
                  <!-- <router-link to="/xDetail"> -->
                    <div    data-ywpoint="null_null_null_null_I0063_0" data-v-044c737f="" v-for="(i, index) in prod" :key="index" @click="tab(index)">
                        <!---->
                        <div class="search_result_list_unit" style="display: block;"><img alt="" class="pro_img" :src="i.img" lazy="loaded">
                            <h2 class="pro_name">
                                <!---->
                                <!----><img src="//s.maiyaole.com/images/activity/618/list_618.png" class="pro_sell_type_icon"> <img src="data:image/png;base64,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" alt="" class="pro_sell_type_icon">
                                <!---->
                                <!---->
                                {{i.name}}
                            </h2>
                            <div class="pro_type">
                                <!---->
                                <!---->
                                <!---->
                                <!---->
                                <!---->
                                <!---->
                            </div>
                            <div class="pro_promotion_type">
                                <!---->
                                <!---->
                                <!---->
                                <!---->
                                <!---->
                                <!---->
                                <!---->
                            </div>
                            <span class="ask_answer_num">{{i.comments}}条问答</span>
                            <div class="search_price">
                                <span class="price">¥
                                    <i v-text="i.price"></i></span>
                                <span class="del_price">¥{{i.marketPrice}}.00</span> <img alt=""></div>
                            <!---->
                            <!---->

                        </div>
                    </div>
                  <!-- </router-link> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  data() {
    return {
      prod: [],
    };
  },
  methods: {
    async getProd(callback) {
      const data = await this.$axios(
        'https://www.easy-mock.com/mock/5cf638f131d44a153b4b0a69/example/prod',
      );
      this.prod = data.data.data.hits;
        // console.log(this.prod);
    },
    // getPhp(){
    //   this.$axios.get('http://localhost:1902/php/commodity.php',{
    //     params: {
    //       name: "黄",
    //       address: '镇龙',
    //       age:22
    //     } 
    //   }) //url为php运行于自带服务器的浏览器地址
    //   .then(res=>{console.log('success')})
    //   .catch(err=>{console.log(err)})
    // },
    tab(index) {
      const brandId = index;
      this.$router.push({
        path: 'xDetail',
        query: {brandId},
      });
      // console.log(brandId)
    },
  },
  created() {
      this.getProd();
      // this.getPhp();
  },
});
</script>



<style lang="scss" scoped>
.search_header_bar {
  height: 1.0666666666666667rem;
  background: #f9f9f9;
  border: 1px solid #e7e7e7;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  position: fixed;
  width: 100%;
  z-index: 100;
  left: 0;
  top: 0;
}
.search_header_bar .search_header_con {
  position: relative;
  padding: 0 1.3333333333333333rem;
  height: 1.0666666666666667rem;
}
.search_header_bar .search_header_con .search_header_left_btn {
  padding: 0 0.26666666666666666rem;
  height: 1.0666666666666667rem;
  display: inline-block;
  position: absolute;
  left: 0;
  top: 0;
  line-height: 0.8533333333333334rem;
}
a {
  text-decoration: none;
}
a {
  color: #333;
}
.search_header_bar .search_header_con .search_header_left_btn .icon_leftarrow {
  color: #666;
}
.iconfont {
  font-size: 0.53333333rem;
  color: #ccc;
}

.iconfont {
  font-size: 0.5333333333333333rem;
}
.iconfont {
  font-family: "iconfont" !important;
  /* font-size: 32px; */
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.icon_leftarrow:before {
  content: "〈";
}
.search_header_bar .search_header_con .search_box {
  height: 0.8rem;
  -webkit-border-radius: 0.4rem;
  border-radius: 0.4rem;
  background: #ebebeb;
  margin-top: 0.10666666666666667rem;
  padding: 0 1.0666666666666667rem 0 1.1733333333333333rem;
  position: relative;
}
.search_header_bar .search_header_con .search_box .search_icon {
  position: absolute;
  left: 0.26666666666666666rem;
  top: 0.13333333333333333rem;
  color: #505050;
  font-size: 0.48rem;
  width: 0.5866666666666667rem;
  height: 0.5866666666666667rem;
  display: inline-block;
  cursor: pointer;
  background: #ebebeb;
}
.iconfont {
  font-size: 0.53333333rem;
  color: #ccc;
}
.iconfont {
  font-size: 0.5333333333333333rem;
}
.iconfont {
  font-family: "iconfont" !important;
  /* font-size: 32px; */
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.icon_search:before {
  content: "\e608";
}
.search_header_bar .search_header_con .search_box .search_box_input {
  font-size: 0.32rem;
  color: #333;
  width: 100%;
  height: 0.8rem;
  border: 0;
  background: none;
  display: block;
  overflow: hidden;
  z-index: 0;
  padding: 0;
}
.search_header_bar .search_header_con .search_header_right_btn {
  position: absolute;
  right: 0;
  top: 0;
  height: 1.0666666666666667rem;
  line-height: 0.8533333333333334rem;
  display: inline-block;
  padding: 0 0.26666666666666666rem;
  cursor: pointer;
  color: #666;
}
.search_header_bar .search_header_con .search_header_right_btn .iconfont {
  color: #505050;
}
.iconfont {
  font-size: 0.53333333rem;
  color: #ccc;
}
.iconfont {
  font-size: 0.5333333333333333rem;
}
.iconfont {
  font-family: "iconfont" !important;
  /* font-size: 32px; */
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.icon_shopcar:before {
  content: "\e601";
}

// =========================分类=============================
.classify {
  position: fixed;
  top: 1.0666666666666667rem;
  height: 1.28rem;
  border-bottom: 1px solid #eee;
  background: #fff;
  width: 100%;
  z-index: 20;
  box-sizing: border-box;
  .list {
    font-size: 0.4rem;
    overflow: hidden;
    li {
      width: 18%;
      float: left;
      text-align: center;
      line-height: 1.28rem;
      height: 1.28rem;
      overflow: hidden;
      span {
        overflow: hidden;
        text-overflow: ellipsis;
        width: 5em;
      }
    }
    li:first-child {
      width: 31%;
      position: relative;
    }
    li:nth-child(2) {
      width: 32%;
      position: relative;
      padding-right: 0.5333333333333333rem;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
    }
  }
}

// =============================选项=================
.option {
  position: fixed;
  top: 2.3466666666666667rem;
  height: 1.1733333333333333rem;
  border-bottom: 1px solid #eee;
  z-index: 19;
  background: #fff;
  width: 100%;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  .Olist {
    font-size: 0.37333333333333335rem;
    padding-top: 0.21333333333333335rem;
    margin: 0 0.21333333333333335rem;
    display: flex;
    li {
      -webkit-box-flex: 1;
      -webkit-flex: 1;
      -ms-flex: 1;
      flex: 1;
      width: 100%;
      text-align: center;
      width: 25%;
      float: left;
      span {
        width: 90%;
        height: 0.7466666666666667rem;
        background: #f8f8f8;
        line-height: 0.7466666666666667rem;
        text-align: center;
        -webkit-border-radius: 0.08rem;
        border-radius: 0.08rem;
        display: inline-block;
      }
    }
  }
}

// =====================shoplist==================
.box {
  width: 100%;
  height: 100%;
  .shopbox {
    padding-top: 3.2533333333333334rem;
    .shoplist {
      background: #fff;
      margin-top: 0.26666666666666666rem;
      .search_result_list_unit {
        position: relative;
        padding-left: 2.986666666666667rem;
        min-height: 3.7333333333333334rem;
        border-bottom: 1px solid #eee;
        .pro_img {
          width: 2.1333333333333333rem;
          height: 2.1333333333333333rem;
          // background: url(../img/yyw.e128806.png) no-repeat;
          background-size: 100% 100%;
          position: absolute;
          left: 0.32rem;
          top: 0.7466666666666667rem;
        }
        .pro_name {
          font-size: 0.37333333333333335rem;
          padding-top: 0.26666666666666666rem;
          padding-right: 0.21333333333333335rem;
          line-height: 0.5333333333333333rem;
          max-height: 1.0666666666666667rem;
          overflow: hidden;
          .pro_sell_type_icon {
            height: 0.3466666666666667rem;
            float: left;
            margin: 0.08rem 0.10666666666666667rem 0 0;
          }
        }
        .pro_type {
          overflow: hidden;
          margin-top: 0.10666666666666667rem;
        }
        .pro_promotion_type {
          overflow: hidden;
          margin-top: 0.10666666666666667rem;
        }
        .ask_answer_num {
          font-size: 0.26666666666666666rem;
          color: #1a6abd;
          display: block;
          position: absolute;
          left: 2.986666666666667rem;
          bottom: 0.32rem;
        }
      }
    }
  }
  .ask_answer_num ~ .search_price {
    position: absolute;
    left: 2.986666666666667rem;
    bottom: 0.8rem;
  }
  .search_price {
    clear: both;
    display: block;
    // position: absolute;
    // left: 2.986666666666667rem;
    // bottom: 0.26666666666666666rem;
  }
  .search_price .price {
    font-size: 0.32rem;
    color: #f66;
    i {
      font-size: 0.48rem;
    }
  }
  .del_price {
    font-size: 0.32rem;
    text-decoration: line-through;
    color: #999;
    display: none;
  }
  .search_price span {
    float: left;
    margin-right: 0.10666666666666667rem;
  }
  .search_price img {
    height: 0.32rem;
    margin-right: 0.10666666666666667rem;
    float: left;
    margin-top: 0.10666666666666667rem;
  }
}
</style>

