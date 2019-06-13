<template>
  <div class="footer_tab_bar">
    <div class="tab_bar_ul">
      <li>
        <router-link to="/" data-ywpoint="null_null_null_null_I5010_1" class="active">
          <i class="icon iconfont icon_home"></i>
          <span class="tab_bar_name">首页</span>
        </router-link>
      </li>
      <li>
        <router-link to="/xFindacure"
          data-ywpoint="null_null_null_null_I5010_2"
          class
        >
          <i class="icon iconfont icon_search"></i>
          <span class="tab_bar_name">找药</span>
        </router-link>
      </li>
      <li>
        <router-link to="/"
          data-ywpoint="null_null_null_null_I5010_5"
          class="tab_bar_img"
        >
          <div class="tab_bar_box">
            <img src="https://p1.maiyaole.com/img/mobile/20194/1559291236582101.png">
          </div>
        </router-link>
      </li>
      <li>
        <router-link to="/cart"
          data-ywpoint="null_null_null_null_I5010_3"
          class
        >
          <i class="icon iconfont icon_shopcar"></i>
          <span class="tab_bar_name">购物车</span>
        </router-link>
      </li>
      <li>
        <router-link to="/mine"
          href="//m.111.com.cn/yyw/wap/personalcenter/#/"
          data-ywpoint="null_null_null_null_I5010_4"
          class
        >
          <i class="icon iconfont icon_user"></i>
          <span class="tab_bar_name">我的</span>
        </router-link>
      </li>
    </div>
  </div>
</template>


<script>
export default {
    name:'yifooter'
}
</script>
