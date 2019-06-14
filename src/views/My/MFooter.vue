<template>
    <div class="footer_tab_bar">
                <div class="tab_bar_ul">
                    <li>
                        <router-link to="/" data-ywpoint="0_0_0_home_1_0" class="">
                            <i class="icon iconfont icon_home"></i>
                            <span class="tab_bar_name">首页</span>
                        </router-link> 
                    </li>
                    <li>
                        <router-link to="/xFindacure" data-ywpoint="0_0_0_category_2_0" class="">
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
                        <router-link to="/mine" data-ywpoint="0_0_0_my_4_0" class="active">
                            <i class="icon iconfont icon_user"></i>
                            <span class="tab_bar_name">我的</span>
                        </router-link> 
                    </li>
                </div>
            </div>
</template>
