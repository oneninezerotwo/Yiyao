<template>
  <div>
    <header class="pro_header new_header">
      <router-link to="/xCommodity" href="javascript:void(0)" class="common_left_btn"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAJFBMVEVHcExjZ4FoaoRoa4Vpa4Voa4Voa4Voa4VobYZoa4Voa4Voa4WUaLDoAAAAC3RSTlMACRvbY3+9TjTxo6pDXvYAAACoSURBVEjHY2AYBSMduBCQl9rtgFeecfXuArwKxHZvxW9A9u4AygywJuBE5d1b8MozWRPwgvLu6XjlOax34jegc/cM/AbM3tlAkQHsszfjN6BytxF+F+zerIBXAevu7QwEQpFAIACDkaARBGKSYFSCUhMBIwglJ8IJkggjVu9egF8F1+5dBDLe6t0LGQjEyDYB/CqidydSaoQ3oeBk2d1AwCNKo4XsMAUAKpozCPEVxGYAAAAASUVORK5CYII="></router-link>
      <ul class="common_tt_tab">
        <li class="cur">商品</li>
        <li class="">详情</li>
        <li class="">说明书</li>
        <li class="">评价</li>
      </ul>
      <!---->
      <div class="common_more"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABAAgMAAADXB5lNAAAADFBMVEVHcExoa4Vpa4VVVYDgPx6dAAAABHRSTlMA+ogGEfkn6gAAACVJREFUOMtjYBgFIxvwRSMwGHCGITAYsIYiMHYBDC0Yho6C4QkAAEgGzW/LtMIAAAAASUVORK5CYII="></div>
      <div class="layer_gray_bg toggle_nav_bg" style="display: none;">
        <div id="toggleNav" class="toggle_nav">
          <a href="javascript:void(0)">
            <i class="icon iconfont icon_home"></i>首页</a>
          <a href="javascript:void(0)">
            <i class="icon iconfont icon_category"></i>分类</a>
          <a href="javascript:void(0)">
            <i class="icon iconfont icon_shopcar"></i>购物车</a>
          <a href="javascript:void(0)">
            <i class="icon iconfont icon_list"></i>需求清单</a>
          <a href="javascript:void(0)">
            <i class="icon iconfont icon_my"></i>我的</a>
        </div>
      </div>
    </header>
    <!-- ============== ===================-->
    <div class="content pro_content">
      <div>
        <div class="pro_sider">
          <div class="">
            <div class="itemSwipeWrapper srcoll_img">
              <div class="ypc-swipe">
                <div class="ypc-swipe-items-wrap">
                  <section class="ypc-swipe-item current"><img :src="this.detail.mainimg1"></section>
                </div>
              </div>
              <div class="pageNum">1/6</div>
              <!---->
            </div>
          </div>
          <div class="pro_sider_eleven" style="display: none;"><img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" lazy="loading"></div>
          <div class="pro_label">
            <div class="services_wrap">
              <span>
                满69包邮
              </span>
              <span>
                正品保证
              </span>
              <span>
                正品保险
              </span>
              <span>
                药监认证
              </span>
            </div> <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAQdJREFUeAHt1LENwjAQhWEbIRagYAJWomSNUCGLUVKyEhNQsAAFIYd00ul0QcSNRfTT2H7cOc4HSUp8EEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQSWL5Brb7GU6+b+uF2GIR1lj5xTv9vuz6Ucnr/s2bpfz7jWydzxc/Ov1GnfCNGNmSxPmn0bW/fr2VY6mTvqL2/7osx+b+dRbZTZHjuPaqPM9kTzaoBos3/MqgHkmfc3HGW+RtdRbZRpvR+j2ijzfX5d/Q6QF5488/q3k4tL5i8wtW7dP3UucgQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQWKbAG8gfasBhSpkJAAAAAElFTkSuQmCC" alt="" class="ddd"></div>
        </div>
      </div>

      <!-- =================== ================= -->

      <div class="pro_part" style="margin-bottom: 0.267rem;">
        <div class="pro_price">
          <span class="priceText">
            <span>¥</span>{{this.detail.pcSalePrice}}</span>
          <i class="pro_tag pro_tel" style="display: none;">手机专享</i>
          <i class="pro_tag" style="display: none;">省0.00元</i>
          <p class="instructions">说明书</p>
        </div>
        <!---->
        <div class="pro_title">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAAAgCAYAAADtwH1UAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjRCRkUwQUFBNkFFOTExRThCRDYzRkIxRUU3RTJBNTkyIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjRCRkUwQUFCNkFFOTExRThCRDYzRkIxRUU3RTJBNTkyIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NEJGRTBBQTg2QUU5MTFFOEJENjNGQjFFRTdFMkE1OTIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NEJGRTBBQTk2QUU5MTFFOEJENjNGQjFFRTdFMkE1OTIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7mTo/xAAAPQElEQVR42qxa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" class="icon_618">
          <!---->
          <!----><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEQAAAAgCAYAAACrdt7+AAAAAXNSR0IArs4c6QAAC5JJREFUaAWtWn+MVUcVPnPf61sWKBUosl0JKH9URa0RQ4M2pqCxsY0h0sS2pknrr5pYbFNJaCKkuNJgYkhp2kSr/tW0WTHapJEGQozpNtrENWhMa0BDLLGEbimtFndZdtl9747fd86cufftLhTR4e2dued85zs/Zu7c++4jyCW2gYHYOjbV3tiRsCmUskZC7A9F6JcoC0OIEqNICPgDH3u2oAMqcOJ6ygBWbAZST1kA1IDOA2bIjED1ap6wGFNjze3DWdCMgHCkaISjIRT7F6+UoYHbwpQjL9ZXfBdAfXEg9hUTnZ2hkDtjjIsI8zwYjRNQZgUggknUcDqmxOU2NvskR1e3Bzid120o9cSrcZaRKjfDsdBFUYwivsFWLHbteTCcypA5Bl0Udf19j8eeN0baOzA7W1GIBVqEhM4zmQy8QE7mWM4sx7DX3hJOgaotxuhdTlH9XOUU+OrhOBWEI8ppUHgA0LFZfOz1NMlwXoRxLOa9q3uK3fffH85X2mpUM6mEXBVhov0s6NdT6sQE5zFONOAUlCdVJ6ywlFqwFrwlMvNSMAylVWJVAWbL3Jf7mStWXnL1gqUiD7d6G5v3bJm9WpyTXNq+tD1e1+50DiCQFRTQmYLUq820ApkTdYmB3aKFIl/ZVMjpf4n85g9R/vlvT4I4IrgirCdH3d7OK4zzLl4U5QsbCoBF9h2KMj1NJJuttFZL5I6bjPW530U5M2Y+3J7ImX5UJnIyNBq3PLo1/IXn3po+YM+V0Z6oikEZQ9SWVoKN6QRBYP2xabLQ37g2yLo1hYxPRHl2qKZD8H7ZqIHbgNxnkPoFvSJLr6qKQm3f0kI+cR0Kgvb7lzoyqQvdZ0OkFwVZ/xHTHzleyptvAwguxkTuM2NBzk1SxHgYM5kYs6yQsjy47YdxXX2l5Hx1z3it/QLM9DJJRmZsBDZWRkvWMUoC+SPfLmT5kiAHXyzl578urVAIyvVMcOZK0cIqkcinPiZy9+cb6uf/ddh3qCPDWAO1QmRqxoWbxfB7m40NvqfkFcINtF6MbMUBLK2+VukPrQ6y/as2K46jQ0tW5OYbgnzukxdJDNhHni7lb/+gNedRXcjYuSCvvs6zqrWuELnmaoaONf5GlE5pOk+wgGrFctOfeivKVNv0fjw7wbgYt/c2KW4fS1l/YrrcAfxO2mhBeKnIRGerpW1UmiCGHp65NFIiCkZygaazfmG1WukK1rWTAoT0pWP866jeV86Kd0d56B6bt0cHSzmHS8aozW7+PJE9D1jxn9xfymtv0Rw6/gOQ5fYxNc5L/5oCMUG24tL5ES8d84TnDBguoAGbzrSW1JxfLLfv/bSts+IYOufHpkTpjA+B9WC2d3zNXPoMGSIFjiDf954gDeYH/x783kErUt/VlpwmCQLzGeWxfaZv9URZDXsYkhBbhMgJPHVUvji9dg8z2+x9QZwquULubWJ1tMJkBw9drmTPYNK59zjVQtFTrdHh1DRBbmN6x+YeiHmtGplyMEGGmBqcfuv2QhYtyBLXXFY/No7V9US6xsBgsRhVqln2jajvHPhFfKAZ8DiOYugTKKFaCGixjHKwTNEK5MkaqeFtN+e9vvtOYslmJPhst8gS8JsTn3FdVUn9yskoY+M40dqQSwcQaDSZpIqLetMtnC+2UhKKcXU9i4DLWcyepnHRxIhsbEoZNhlR9qFBODAbqtqdVlhurlyabBqyx22irmPRvQ8nA8/ZV5iZPPfbtOly6YKTs2vUxHHkveE1RcVFef8qkS232b6i5sTbh1bJITm7wsOGXW5qwt0aFyc/ZsBKoClXVnQHTb1esxxcTkvJzooscfUtjbLzGxe5W83h8yfPlHmCqLb4DciUtAYYUE73bJqeDuKaJirbn+QKUAJVJmOMuy+F7rI+8UxHpmu3OtdmJ+RC43kL++k9t9YSVFDynorz8rEo87A5jp2jTdClXpZRjp0wnvrRfNE+yKprsEf1QILP26Mizx8u5Xz6fmurxCzp0vNV9zXCGEM/Vgi+wmeI8ukZnZkrBlaRqdQFEP/pr1HO43E6QTQJYvQcB/ZMjPvEPNxlulvCEa+cUZ4+SK8Wcv8yQ5OfdxK7aIDl/RJZmg9Ko2y7u5CVfebvzTMiv3rBOEhr1OajXpz6WD0F6bd7YIqShloEklCWgkxq7VRuvuwcGAbEpnCMPTnt6ZU61au1npsM5/aB1Qw7xRv0CkS5eaNtQL6TGCNBhnnXldbrMXFSlUNlcEnuvqivN77W4SUzAqNrDU8LnPGjw0THsWZLKrQa060bg7Q7JlBI9uCh05if9HyR9XTDWbbVwz6x2CVKHINAazaC3LTexip4p4OmgEOKWb0nc8bPXOZig+51XjIj+JJ2LX1oupD6Q6gXwfxb8ETVyW6+Yeatw9DvdCSH8nDp58DNys5FTuOL2nd/3MmFy37zwGJxPAlHzzofklZcAnt93O8cAaIOI1ghchS6DdS7vVaRAoTCZsRWMI5NqioZ+mP3rm7SdEyxpE6fQG9cWxWwXghPivx8XPdvuGRSXRVUduE2iqmkmsjfT0Q5chxC2FXxqyrfPLKJD2I42pQi7o8duVeNGHkiqAdLvC0yi8oTpPxnh2w3p70FzhmigZHZkEfBoztfEVhByOSXjJeYPnhHW7Y4yGeurwqnxv/locTD0ZHjTMYMNRwMvZ+LrlEU+5ux1RxqnC9Hy1im96WWiIXrr+cYelqeeVRRVsWz5epYQO2OwMGMxsC8yJU9A04ZAH9uMspTB/DUR3PFVyQ1WFeSLGR+NuLlqHckUDCWiroi8lEIo739MtT85UCYuv077UGAv2mOaWkodv4MUpFZGs7Ti3t/UVghzCsLp5ZVD2NKelrdhdHCZWLfXOneAuDzDZ9L6kVyuPWmM7RFtC4/ZrIAXHFWiDrGY6/30A/yzbzednt7GrsmJzt3IUD9xls3pmMG6IVhEpR4e3xb7UHLhZfQk0ET14hp4JzqUBl4u137AaA0+5RZ8m8XFG1cTpMoV9Vvv5CYH+owxokXyCR2hIfx0Cp28UwL8uRAOHXH9um9uOM+RKEbaSA4iVB4UOqAh/+xsay5BiyNciZiVYrMnxfk65svr+AaHumYTOa3oqiufgiy118jakGoW9bX3H36VPuzqDxeISoTpKx+ItEqQYTIU7w0kwcfw/sQf/FLrP6jpiqiT01Pj8j3t5hLenAvRNsskF5JVDQ1HeXFP1sMKsBBC2c5ukh59ASmfJvHTVmbBmpjrQuEVnhTp+Pwykax2yXJ0k6/jDdn56c6hxHdCjdUQEIxWJZjCbbf6z/MRRv17XqpD1AoQGKlra8ojNSGSj5gfXodURGP/PzOwaI5lkg2vFjGK8OPfzDod5HnD1v5DacAPfCcRdSYzFDlH8UTVd9SexV57FVyJxv0PkwS2p7EpTL3S2YH3TWAnyGmOgdwoWhRNDF17IjKSU4mBcb9Jf/uArjrbf9JhVE5Q0vJ6MjsaO+FJELHCnU5k6qNaxla4jUd7FkBg1RyitlYjEazuOUH93X/DGF7k2H0+NRAeLnVaqxDYsNKxrXGATwyQE+SYA+eektGKfRgumozVi41rjAGVGqzB5G6Yk8sG4uNTv/yQTX54FBaO5YDjq1VoyQY5sqYWQzqZhWEQm6yS5Y3NuBKeBiBjasbBMaZZvMZZ09RFQgdG8Z6mxkLE3KAfezFNM7EAHMW1o/sFYeMlVXtNQKdGI6IyU3t69amqRVsHHwPr8LPDr6JZts0mFW6mQDuK2W7s7PEj90Br9k8EeLc2L+OU6Cp8QsiRw7wxHJfs00yX2FaMOUBJttXY5WBfrbOi28ZqD7xADyK4SBvrRcqhFlVcfn5BXv+d4hXyvZGFGQTyNcgAbxHCf2Yu4Uad4p05rtVirWInN2E8Z7OfNzVd2EZJFdIlbDSaKTOSR4LHZNzFvPBL6wjkB7FU+P+K/EEeqn/HeI/SHjwgMT88/AAAAAASUVORK5CYII=" class="icon_ziying">
          <!---->
          <!---->
          <span class="productName" v-text="this.detail.productName"></span>
          <!---->
        </div>
        <div data-ywpoint="null_null_null_null_I0109_0" class="pro_sider_des" v-text="this.detail.gift"></div>
        <!---->
        <p class="pro_note" style="padding-bottom: 0px;">
          本商品由1药网自营提供现货。
          <!---->
        </p>
        <p class="pro_wenhao" style="padding-top: 0.32rem;">{{this.detail.approvalnum}}
          <span>查询食药局批准文号<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABwElEQVRIS7XWQUsbURQF4HNmYoIbBVftrhQF9+q2y4bUWC3UgGMSHboIUmx/QEsJzb6LLFpFrElmRBACkjERXSnuRfwFbnRll02pjnPLU4QUWh3jy1vPnG949717hwi5yo53IODB7+bJXC6Xuwj5Ghj2wbLjvRfgC8AdQ7peZ7Pxn2HeDQ2osLK7mRaRZZCHUUNGLWvs7C7kXoAKc93ac19YBXAqvh+37VfHtyH3BlTYilsbYcA6DFzQiCRmrMTR/5C2gCtk1RtggG0B+kzTHM9aL/b+hbQNqLBFp/o4xlgDIoMwjfSsNaq27q/1IOC6Jo2eSwQbIvIMBudnp5PfWoUHAyqsWGzEevsCR0QmBVKwMy8/3SBaABWWz+eNJ/1DRQjekljqjv6aS6VSl9qAmy8uVbyPID6TrP2INqe0AwqqrG6+EZEFCbjfUQDoAFByax8gLGjfoqsiPx0qgqrIXOqONvUVufWYEizMZJL6jmnrRRPynZ1OftV20VbW6494LlsQDMKk3lbR2uwATNiZsV1tza6yVh8O/KAOwtferq8HDqoATyUSidtTCX0Dp+R40wC+kzzs0j0yOz702/1t+QNKFspaCCAQLQAAAABJRU5ErkJggg=="></span>
        </p>
      </div>

      <!-- ====================== ========== -->
      <div class="pro_group" style="">
        <div class="pro_block">
          <div class="pro_item">推荐装</div>
        </div>
        <ul class="pro_group_box">
          <li>
            <div class="divWrap">
              <span class="num">3件</span>
              <span class="splitLine">|</span>
              <span class="price">单价¥11.30</span>
            </div>
            <div class="divWrap">
              <span class="count">合计: ¥33.90</span>
              <span class="jsCount">省3.00元</span>
            </div>
          </li>
          <li>
            <div class="divWrap">
              <span class="num">6件</span>
              <span class="splitLine">|</span>
              <span class="price">单价¥10.80</span>
            </div>
            <div class="divWrap">
              <span class="count">合计: ¥64.80</span>
              <span class="jsCount">省9.00元</span>
            </div>
          </li>
        </ul>
      </div>

      <!-- =============== =================== -->
      <div class="comboContainer">
        <div class="comboMain">
          <div class="comboCaption">常用搭配</div>
          <ul class="comboLists">
            <li class="comboItem">
              <div class="comboName">增强抵抗 预防感冒</div>
              <ul class="comboProductLists">
                <li class="comboProductItem"><img class="productPic" src="https://p2.maiyaole.com/img/item/201808/10/100_20180810095613128.jpg" lazy="loaded">
                  <div class="productPrice">¥12.30x1件</div>
                </li>
                <li class="comboProductItem"><img class="productPic" src="https://p4.maiyaole.com/img/item/201904/25/100_20190425112141376.jpg" lazy="loaded">
                  <div class="productPrice">¥25.00x1件</div>
                </li>
                <!---->
              </ul>
              <div class="comboPrice">
                <div class="newPrice">搭配价
                  <span>¥37.30</span>
                </div>
                <div class="oldPrice">原价
                  <span>¥37.30</span>
                </div>
                <div class="totalProductCount">合计2件</div>
              </div>
              <div class="comboComment">
                <!---->
              </div>
            </li>
            <li class="comboItem">
              <div class="comboName">【感冒+凉血利咽】感冒灵+板蓝根</div>
              <ul class="comboProductLists">
                <li class="comboProductItem"><img class="productPic" src="https://p2.maiyaole.com/img/item/201808/10/100_20180810095613128.jpg" lazy="loaded">
                  <div class="productPrice">¥10.30x2件</div>
                </li>
                <li class="comboProductItem"><img class="productPic" src="https://p2.maiyaole.com/img/item/201811/09/100_2018110917355088.jpg" lazy="loaded">
                  <div class="productPrice">¥14.80x2件</div>
                </li>
                <!---->
              </ul>
              <div class="comboPrice">
                <div class="newPrice">搭配价
                  <span>¥50.20</span>
                </div>
                <div class="oldPrice">原价
                  <span>¥58.20</span>
                </div>
                <div class="totalProductCount">合计4件</div>
              </div>
              <div class="comboComment">
                <!---->
              </div>
            </li>
            <li class="comboItem">
              <div class="comboName">【感冒+退烧】感冒灵*2+泰诺林*1</div>
              <ul class="comboProductLists">
                <li class="comboProductItem"><img class="productPic" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" lazy="loading">
                  <div class="productPrice">¥11.60x1件</div>
                </li>
                <li class="comboProductItem"><img class="productPic" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" lazy="loading">
                  <div class="productPrice">¥20.00x1件</div>
                </li>
                <!---->
              </ul>
              <div class="comboPrice">
                <div class="newPrice">搭配价
                  <span>¥31.60</span>
                </div>
                <div class="oldPrice">原价
                  <span>¥35.60</span>
                </div>
                <div class="totalProductCount">合计2件</div>
              </div>
              <div class="comboComment">
                <!---->
              </div>
            </li>
            <li class="comboItem">
              <div class="comboName">【家庭常备】感冒灵+达克宁</div>
              <ul class="comboProductLists">
                <li class="comboProductItem"><img class="productPic" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" lazy="loading">
                  <div class="productPrice">¥12.30x1件</div>
                </li>
                <li class="comboProductItem"><img class="productPic" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" lazy="loading">
                  <div class="productPrice">¥18.30x1件</div>
                </li>
                <!---->
              </ul>
              <div class="comboPrice">
                <div class="newPrice">搭配价
                  <span>¥30.60</span>
                </div>
                <div class="oldPrice">原价
                  <span>¥31.10</span>
                </div>
                <div class="totalProductCount">合计2件</div>
              </div>
              <div class="comboComment">
                <!---->
              </div>
            </li>
          </ul>
        </div>
        <!---->
      </div>

      <!-- =========== ================== -->
      <div class="proBlock">
        <div class="proLabel">已选</div>
        <div class="proContent">适用人群:成人</div> <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAQdJREFUeAHt1LENwjAQhWEbIRagYAJWomSNUCGLUVKyEhNQsAAFIYd00ul0QcSNRfTT2H7cOc4HSUp8EEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQSWL5Brb7GU6+b+uF2GIR1lj5xTv9vuz6Ucnr/s2bpfz7jWydzxc/Ov1GnfCNGNmSxPmn0bW/fr2VY6mTvqL2/7osx+b+dRbZTZHjuPaqPM9kTzaoBos3/MqgHkmfc3HGW+RtdRbZRpvR+j2ijzfX5d/Q6QF5488/q3k4tL5i8wtW7dP3UucgQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQWKbAG8gfasBhSpkJAAAAAElFTkSuQmCC" class="proDDD"></div>

      <!--================= ====================== -->
      <div class="proBlock address">
        <div class="proLabel">送至</div>
        <div class="proContent">上海 上海市 浦东新区<br>
          <!---->
          <span>预计06月13日（周四）送达</span>
        </div> <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAQdJREFUeAHt1LENwjAQhWEbIRagYAJWomSNUCGLUVKyEhNQsAAFIYd00ul0QcSNRfTT2H7cOc4HSUp8EEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQSWL5Brb7GU6+b+uF2GIR1lj5xTv9vuz6Ucnr/s2bpfz7jWydzxc/Ov1GnfCNGNmSxPmn0bW/fr2VY6mTvqL2/7osx+b+dRbZTZHjuPaqPM9kTzaoBos3/MqgHkmfc3HGW+RtdRbZRpvR+j2ijzfX5d/Q6QF5488/q3k4tL5i8wtW7dP3UucgQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQWKbAG8gfasBhSpkJAAAAAElFTkSuQmCC" class="proDDD"></div>

      <!-- ================ ================ -->
      <div class="pro_review commnetBlock" style="padding: 0.266667rem 0.266667rem 0px;">
        <div class="commentCaption">
          <div class="caption">商品评价</div>
          <div class="rightMore">
            查看全部
            <span>17002</span>条评价
            <i class="icon iconfont icon_rightarrow" style="font-size: 0.3rem;"></i>
          </div>
        </div>
        <div>
          <ul>
            <li>
              <p class="commentContent">
                对商品非常满意
                <span class="pro_review_star">
                  <span class="real_star stars_width5"></span>
                </span>
              </p>
              <p class="commentInfo">
                <!---->
                <span>201***</span>
                <i>|</i>
                <span>2019-06-11 15:27:19</span>
              </p>
            </li>
          </ul>
        </div>
      </div>

      <!-- ====================================== -->
      <footer class="pro_bar pro_bar_tab">
        <a href="javascript:void(0)" class="pro_tab_item">
          <i class="icon iconfont barFav"></i>
          <span class="tab_label">收藏</span>
        </a>
        <a href="javascript:void(0)" class="pro_tab_item">
          <span id="selfCartIcon" class="icon_img icon_shopcar"></span>
          <router-link to="/cart" class="tab_label">购物车</router-link>
          <i class="tab_badge" v-show="showCartNum">{{totalClass}}</i>
        </a>
        <div class="pro_tab_item pro_add_car" @click="show">
          <span>加入购物车</span>
        </div>
      </footer>
    </div>
    
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  data() {
    return {
      brandId: null,
      detail: [],
    };
  },
  created() {
    this.brandId = this.$route.query.brandId;
    this.getData();
  },
  methods: {
    async getData(callback) {
      const data3 = await this.$axios('https://www.easy-mock.com/mock/5cf638f131d44a153b4b0a69/example/data'+this.brandId)
        this.detail = data3.data.product_info
    },
    show(){
      return this.$store.state.show = 1
    }
  },
  computed:{
    showCartNum(){
      if(this.$store.state.cartlist.length>0){
        return true
      }else{
        return false
      }
    },
    totalClass() {
        let totalqty=0;
        this.$store.state.cartlist.forEach(element => {
            if(element.selected){
                totalqty+=element.qty/element.qty;
            }
        });
        return totalqty;
    }
  }
});
</script>




<style lang="scss" scoped>
.pro_header.new_header {
  background-color: #fff;
  box-shadow: 0.02666667rem 0.13333333rem 0.24rem 0 rgba(0, 0, 0, 0.02);
}
.pro_header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 8;
  width: 100%;
  height: 1.2rem;
  line-height: 1.2rem;
  font-size: 0.4rem;
  text-align: center;
  background: #f9f9f9;
}
.pro_header.new_header .common_left_btn {
  position: absolute;
  top: 50%;
  left: 0.26666667rem;
  width: 0.85333333rem;
  height: 0.85333333rem;
  margin: 0;
  padding: 0;
  margin-top: -0.42666667rem;
}
.pro_header .common_left_btn {
  position: absolute;
  top: 0;
  left: 0rem;
  padding: 0 0.26666667rem;
  height: 100%;
  color: #999;
}
.pro_header.new_header .common_left_btn img {
  width: 0.85333333rem;
  height: 0.85333333rem;
  vertical-align: top;
}
img {
  vertical-align: middle;
}
.pro_header.new_header .common_tt_tab {
  height: 1.2rem;
  font-size: 0rem;
}
.pro_header .common_tt_tab {
  font-size: 0.42666667rem;
}
.pro_header.new_header .common_tt_tab li.cur {
  font-weight: bold;
  color: #5577fb;
}
.pro_header.new_header .common_tt_tab li {
  width: auto;
  height: auto;
  font-size: 0.32rem;
  font-weight: bold;
  color: #686b85;
  line-height: 1.2rem;
}
.pro_header .common_tt_tab li {
  position: relative;
  display: inline-block;
  height: 1.06666667rem;
  color: #414141;
  width: 1.33333333rem;
  cursor: pointer;
}
.pro_header.new_header .common_tt_tab li.cur:after {
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  bottom: 0.16rem;
  height: 0.05333333rem;
  margin: 0;
  padding: 0;
  background: linear-gradient(132deg, #5577fb 0%, #738efc 100%);
  border-radius: 0.05333333rem;
}
.pro_header .common_tt_tab .cur:after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 80%;
  margin-left: -40%;
  height: 0.02666667rem;
  background: #ff6666;
  color: #ff6666;
}
.pro_header.new_header .common_tt_tab li + li {
  margin-left: 0.45333333rem;
}
.pro_header.new_header .common_more {
  position: absolute;
  top: 50%;
  right: 0.26666667rem;
  width: 0.85333333rem;
  height: 0.85333333rem;
  margin: 0;
  padding: 0;
  margin-top: -0.42666667rem;
}
.pro_header .common_more {
  right: 0;
  padding: 0 0.26666667rem;
}
.pro_header .common_more,
.pro_header .shopcar_count {
  position: absolute;
  top: 0;
  right: 0.26666667rem;
}
.pro_header.new_header .common_more img {
  width: 0.85333333rem;
  height: 0.85333333rem;
  vertical-align: top;
}
img {
  vertical-align: middle;
}
// ============================================

.pro_header ~ .content {
  padding-top: 1.22666667rem;
}
.pro_content {
  padding-bottom: 1.73333333rem;
}
.pro_content .srcoll_img {
  position: relative;
  width: 100%;
  height: 6.4rem;
  background: #fff;
  text-align: center;
}
.ypc-swipe {
  overflow: hidden;
  position: relative;
  height: 100%;
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
  transform: none;
}
.ypc-swipe-items-wrap > .ypc-swipe-item {
  position: absolute;
  transform: translateX(-100%);
  width: 100%;
  height: 100%;
  display: none;
}
.pro_content .srcoll_img img {
  height: 6.4rem;
}
img {
  vertical-align: middle;
}
.itemSwipeWrapper .pageNum {
  position: absolute;
  right: 0.426667rem;
  bottom: 0.533333rem;
  height: 0.426667rem;
  padding: 0 0.213333rem;
  background-color: #a8abbb;
  -webkit-border-radius: 0.186667rem;
  border-radius: 0.186667rem;
  font-size: 0.32rem;
  color: #fff;
  line-height: 0.426667rem;
  text-align: center;
}
.pro_content .pro_sider .pro_label {
  position: relative;
  height: 0.42666667rem;
  margin: 0;
  padding: 0.32rem 1.01333333rem 0.32rem 0.4rem;
  background-color: #f6f6f6;
}
.pro_content .pro_sider .pro_label .services_wrap {
  white-space: nowrap;
  overflow: hidden;
}
.pro_content .pro_sider .pro_label .services_wrap span {
  display: inline-block;
  box-sizing: border-box;
  width: 2.77333333rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #262d56;
  font-size: 0.32rem;
  line-height: 0.42666667rem;
  background: url();
  background-size: 0.37333333rem auto;
  padding-left: 0.53333333rem;
}
.pro_content .pro_sider .pro_label .services_wrap span + span {
  margin-left: 0.13333333rem;
}
.pro_content .pro_sider .pro_label .ddd {
  position: absolute;
  top: 0.16rem;
  right: 0.26666667rem;
  width: 0.74666667rem;
  height: 0.74666667rem;
}
// ===============================
.pro_content .pro_part {
  position: relative;
  background: #fff;
  font-size: 0.37333333rem;
  box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.1);
}
.pro_content .pro_part .pro_price {
  height: 1.33333333rem;
  background-color: #fff;
  padding-top: 0.26666667rem;
  padding-left: 0.26666667rem;
  position: relative;
  vertical-align: middle;
  font-size: 0;
}
.pro_content .pro_part .pro_price .priceText {
  display: inline-block;
  margin-right: 0.13333333rem;
  font-size: 0.64rem;
  font-weight: bold;
  color: #ff394e;
  line-height: 1.33333333rem;
  vertical-align: middle;
}
.pro_content .pro_part .pro_price .priceText span {
  font-size: 0.37333333rem;
  font-weight: 700;
}
.pro_content .pro_part .pro_price .instructions {
  box-sizing: border-box;
  position: absolute;
  top: 0;
  right: 0;
  width: 1.6rem;
  height: 1.6rem;
  padding-top: 0.85333333rem;
  font-size: 0.32rem;
  color: #686b85;
  line-height: 0.32rem;
  text-align: center;
  background: url();
  background-size: 0.4rem 0.4rem;
}
.pro_content .pro_part p {
  word-break: break-all;
}
.pro_content .pro_part .pro_price .instructions:after {
  content: "";
  display: block;
  position: absolute;
  top: 0.34666667rem;
  left: 0;
  width: 0.05333333rem;
  height: 0.8rem;
  font-size: 0;
  overflow: hidden;
  background-color: rgba(38, 45, 86, 0.05);
}
.pro_content .pro_part .pro_title {
  padding: 0px 0.26666667rem 0.13333333rem;
  background-color: #fff;
  font-size: 0.48rem;
  font-weight: bold;
  color: #262d56;
  line-height: 0.64rem;
}
.pro_content .pro_part .pro_title img {
  height: 0.42666667rem;
  margin-right: 0.08rem;
}
.pro_content .pro_sider_des {
  padding: 0 0.26666667rem 0.26666667rem;
  font-size: 0.32rem;
  color: #686b85;
  line-height: 0.48rem;
  background: #fff;
  border-bottom: 1px solid #f4f4f6;
}
.pro_content .pro_part .pro_note {
  padding: 0.32rem 0.26666667rem;
  background-color: #fff;
  font-size: 0.32rem;
  color: #a0a3b3;
  line-height: 0.48rem;
}
.pro_content .pro_part p {
  word-break: break-all;
}
.pro_content .pro_part .pro_wenhao {
  height: 0.32rem;
  padding: 0 0.26666667rem 0.45333333rem;
  font-size: 0.32rem;
  color: #a0a3b3;
  line-height: 0.32rem;
}
.pro_content .pro_part p {
  word-break: break-all;
}
.pro_content .pro_part .pro_wenhao span {
  float: right;
  line-height: 0.32rem;
  vertical-align: top;
}
.pro_content .pro_part .pro_wenhao span img {
  width: 0.32rem;
  margin-left: 0.10666667rem;
  vertical-align: top;
}
// =============================

.pro_content .pro_group {
  background: #fff;
  margin-bottom: 0.26666667rem;
}
.pro_content .pro_group .pro_block {
  border: 0;
  color: #ff6666;
  padding: 0.53333333rem 0.26666667rem 0.26666667rem;
}
.pro_content .pro_block {
  padding: 0.26666667rem 0.4rem;
  position: relative;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
  border-bottom: 1px solid #e1e1e1;
}
.pro_content .pro_block .pro_item {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  flex: 1;
  font-size: 0.42666667rem;
  font-weight: bold;
  color: #262d56;
  line-height: 0.64rem;
}
.pro_content .pro_group .pro_group_box {
  padding: 0 0 0.53333333rem 0.26666667rem;
  white-space: nowrap;
  overflow: auto;
}
.pro_content .pro_group .pro_group_box li {
  box-sizing: border-box;
  display: inline-block;
  margin-right: 0.26666667rem;
  padding: 0.26666667rem;
  background-color: #fff;
  border: 0.02666667rem solid #eeeef2;
  border-radius: 0.16rem;
  font-size: 0.32rem;
  color: #686b85;
  line-height: 0.32rem;
}
.pro_content .pro_group .pro_group_box li .divWrap:first-child {
  padding-bottom: 0.13333333rem;
}
.pro_content .pro_group .pro_group_box li .divWrap .num {
  float: left;
  font-weight: 700;
}
.pro_content .pro_group .pro_group_box li .divWrap .splitLine {
  float: left;
  margin-left: 0.13333333rem;
  color: #eeeef2;
}
.pro_content .pro_group .pro_group_box li .divWrap .price {
  float: right;
}
.pro_content .pro_group .pro_group_box li .divWrap:after {
  content: "";
  display: block;
  clear: both;
}
.pro_content .pro_group .pro_group_box li .divWrap .count {
  float: left;
  font-weight: bold;
}
.pro_content .pro_group .pro_group_box li .divWrap .jsCount {
  float: right;
  margin-left: 0.13333333rem;
  font-weight: bold;
  color: #ff613c;
}

// ======================================
.comboContainer {
  margin-top: 0.4rem;
}
.comboContainer .comboMain .comboCaption {
  padding: 0 0.26666667rem;
  font-size: 0.42666667rem;
  font-weight: bold;
  color: #262d56;
  line-height: 0.64rem;
}
.comboContainer .comboMain .comboLists {
  padding: 0.26666667rem 0 0.4rem 0.26666667rem;
  white-space: nowrap;
  overflow: auto;
}
.comboContainer .comboMain .comboLists .comboItem {
  box-sizing: border-box;
  display: inline-block;
  width: 8rem;
  margin-right: 0.4rem;
  padding-top: 0.26666667rem;
  background-color: #ffffff;
  box-shadow: 0 0.02666667rem 0.64rem 0 rgba(38, 45, 86, 0.1);
  border-radius: 0.16rem;
}
.comboContainer .comboMain .comboLists .comboItem .comboName {
  margin: 0 0.26666667rem 0.4rem;
  font-size: 0.37333333rem;
  color: #262d56;
  line-height: 0.53333333rem;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.comboContainer .comboMain .comboLists .comboItem .comboProductLists {
  white-space: nowrap;
  overflow: auto;
  padding-bottom: 0.4rem;
  font-size: 0;
}
.comboContainer
  .comboMain
  .comboLists
  .comboItem
  .comboProductLists
  .comboProductItem {
  box-sizing: border-box;
  display: inline-block;
  width: 2.66666667rem;
  position: relative;
  text-align: center;
}
.comboContainer
  .comboMain
  .comboLists
  .comboItem
  .comboProductLists
  .comboProductItem
  .productPic {
  width: 1.86666667rem;
  height: 1.86666667rem;
  margin-bottom: 0.4rem;
}
img {
  vertical-align: middle;
}
.comboContainer
  .comboMain
  .comboLists
  .comboItem
  .comboProductLists
  .comboProductItem
  .productPrice {
  font-size: 0.32rem;
  color: #262d56;
  line-height: 0.32rem;
  text-align: center;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.comboContainer
  .comboMain
  .comboLists
  .comboItem
  .comboProductLists
  .comboProductItem
  + .comboProductItem::before {
  content: "";
  box-sizing: border-box;
  display: block;
  position: absolute;
  top: 0.74666667rem;
  left: -0.18666667rem;
  width: 0.37333333rem;
  height: 0.37333333rem;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcAgMAAAAPYzcHAAAACVBMVEVHcEyXl5eXl5f9jrk6AAAAAnRSTlMAf7YpoZUAAAAeSURBVAjXY2BAABEorUELWmsVCKyA07SyB8kfIAAAMDcL4ShK5f8AAAAASUVORK5CYII=);
  background-size: 0.37333333rem 0.37333333rem;
}
.comboContainer .comboMain .comboLists .comboItem .comboPrice {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  -webkit-box-align: center;
  box-align: center;
  -webkit-align-items: center;
  align-items: center;
  padding: 0.32rem 0.26666667rem;
  background: linear-gradient(90deg, #fbfbfb 0%, #f6f6f6 100%);
  font-size: 0.32rem;
  font-weight: bold;
  color: #686b85;
  line-height: 0.32rem;
}
.comboContainer .comboMain .comboLists .comboItem .comboPrice .newPrice span {
  margin-left: 0.26666667rem;
  color: #ff394e;
}
.comboContainer .comboMain .comboLists .comboItem .comboPrice .oldPrice {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  width: 100%;
  margin-left: 0.53333333rem;
  font-weight: normal;
  color: #a0a3b3;
}
.comboContainer .comboMain .comboLists .comboItem .comboPrice .oldPrice span {
  margin-left: 0.13333333rem;
}
.comboContainer
  .comboMain
  .comboLists
  .comboItem
  .comboPrice
  .totalProductCount {
  margin-left: 0.53333333rem;
}
.comboContainer .comboMain .comboLists .comboItem .comboComment {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  -webkit-box-align: center;
  box-align: center;
  -webkit-align-items: center;
  align-items: center;
  height: 0.32rem;
  padding: 0.4rem;
  font-size: 0.32rem;
  color: #262d56;
  line-height: 0.32rem;
}

// =====================================
.proBlock {
  box-sizing: border-box;
  position: relative;
  margin-bottom: 0.26666667rem;
  padding: 0.53333333rem 1.01333333rem 0.53333333rem 0.26666667rem;
  background-color: #fff;
  vertical-align: top;
}
.proBlock .proLabel {
  display: inline-block;
  vertical-align: top;
  width: 1.06666667rem;
  font-size: 0.32rem;
  color: #a0a3b3;
  line-height: 0.32rem;
}
.proBlock .proContent {
  vertical-align: top;
  display: inline-block;
  width: 7.52rem;
  font-size: 0.32rem;
  color: #262d56;
  font-weight: bold;
  line-height: 0.32rem;
}
.proBlock .proDDD {
  position: absolute;
  top: 0.32rem;
  right: 0.26666667rem;
  width: 0.74666667rem;
  height: 0.74666667rem;
}
// =======================================
.pro_content .pro_review {
  padding-left: 0.26666667rem;
  margin-bottom: 0.26666667rem;
  background: #fff;
}
.commnetBlock .commentCaption {
  clear: both;
  overflow: hidden;
}
.commnetBlock .commentCaption .caption {
  font-size: 0.42666667rem;
  font-weight: bold;
  color: #262d56;
  line-height: 0.64rem;
  float: left;
}
.commnetBlock .commentCaption .rightMore {
  font-size: 0.32rem;
  color: #a0a3b3;
  line-height: 0.64rem;
  float: right;
}
.commnetBlock .commentCaption .rightMore span {
  font-weight: bold;
  color: #262d56;
}
.pro_content .pro_review.commnetBlock ul {
  padding-right: 0;
}
.pro_content .pro_review ul {
  padding: 0 0.26666667rem 0.26666667rem 0;
}
.pro_content .pro_review.commnetBlock li {
  border-bottom: 0;
}
.pro_content .pro_review li {
  border-bottom: 1px solid #e1e1e1;
  padding: 0.26666667rem 0;
}
.pro_content .pro_review.commnetBlock li p.commentContent {
  font-size: 0.32rem;
  font-weight: bold;
  color: #686b85;
  line-height: 0.64rem;
}
.pro_content .pro_review li p {
  position: relative;
  line-height: 0.64rem;
  color: #020202;
  font-size: 0.37333333rem;
  word-break: break-all;
}
.pro_content .pro_review li .pro_review_star {
  position: absolute;
  right: 0;
  top: 0;
  display: inline-block;
  overflow: hidden;
  width: 1.94666667rem;
  height: 0.29333333rem;
  margin-top: 0.13333333rem;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAsCAYAAABygggEAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpBMjMyNzZBQzM0RkUxMUU5QTY3MEVFQjY2NERDNjg0MSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpBMjMyNzZBRDM0RkUxMUU5QTY3MEVFQjY2NERDNjg0MSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkEyMzI3NkFBMzRGRTExRTlBNjcwRUVCNjY0REM2ODQxIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkEyMzI3NkFCMzRGRTExRTlBNjcwRUVCNjY0REM2ODQxIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+WvwCSQAACFlJREFUeNrMWFtsVVUa/tZae5+9z+kpbekFSgiZB4boQxkBQ2IwIUKUmYl4a0RswmiiRsPLxJcmvJg46AMXNYMkJkZ9EKmXxMaQ4VIceJCSGNJiqWhmIgOCgbbQC6Ut55y991prvnUODEwonDPVycxJVvbea6393/9vffsIay3+Fz/vlpnnnweiCAhDrnJZSuDqVUCp0rPWgLVPc34jd1ted8KYzziAVAoQovS+u7p347h0fffdf1MjZ2DsUxT0Hq/HacAJKvyA960/3+M7/5bQkw74aisENhVnjM0hMZ9wfhmf+n9Zxa4OrJ1PJUfgiwMYmdiEyNUGwxmqdjRkFyMXHaHyuzkuVCKyslAr5ULZg4x/DmO5dfjhInB6ZDXOjK7CqWFg8PKTyKhBxLoHSfJEMb8zUuw8FGI58/cWi6kfYbALNemv8dPoavwwMgXlv4h0qhNpvxPavID+0QkMqVXI0DiYj1hyJyjlDY57Kw+1EIsQBH/m3XKOszDxPgxcOYw8DmJg3Hn/MDLB2zTKLxros6rDzE84FR/A6MVHUF+7Bg3pB5FP1nD9ORbiUcr8I2WdurNiKXdw4ywKbkPK68PlwhDOjruF5QhTFCTWFZX+y1CVQibpgB75FJcK72NsuAuqsQu14ZuI9D2U9Rp37eD4fbniWsLwvoJspguay38/28wIvMOkrKCQBkyHNzapg8JLNKwVie7GqdGNmONfwNy6CzRsIQ3dVD7HglVr7bMMaRaWy7moBUo8yoXplZZeonJXULYRnnqc7dWCfOwWajg2cOwrrzgMX6XyJt5tgyVKBeo4DA5V3OkFfRANfi9mB0Q5u50ztUSvzeUVK3Uavt+OyasbIPKtWDB7mF7/iV6Nle93M8I+34ya7CjqZq+nrDY60c7xY3nFuRytLnzBfuxgaLci9OsR+F+xbTrvrJQjNp9jfnU3mrIN9HYLPf2QsvZQVgV9PDAAjIxoTExs48tZzMm2YT5TFelLFQT6EtPicv4MuyPA1NT2a7Iq6OPq6hKAKDXJ62lWaSOhks9lQE5c89sVmbBN7Iwz7IbJ4ok2DZLdqjibvX6n+bI729LFUJlkL2SwHrFt5nMv178tKZSL4YmlrPzzDPV+GuoUBcVoZjLmdvB5q2J33pZ+rh8Mw12FJkZhqtCN4fxaNIVNqKnthVTjxcjA1mJ8aikGrw4RNL5DYxVrJMlQYcL1CLchGtNB5s2KJT3wUcUD/lf1QH10EjIP1GXcob+SQhMe+kcho8OonQNUEdDc3rgIp4Ijrhyrb1hI2oF/0JD72ZuNrO5GVAVrkfMfgBF30StZzKkRGjWzvkc6OMTTaS/3DrMe7iNa9fHd3EwUu/xs4djNuWMMuceWGoDyHOvYzfmTJQneYq6voCHr+fQyiyzh+jir+vVrTTYjIuAYxRpUVbVgz54xNDefw7Jlo5icjG7a8w3S6Y/R01OPwcEFaG2txZUr/ayVgTudy+L/hmXu2vUXRkkxXpodopiuFArRRVpoGNU6uJrXRj8tBTY6u/m4U0h8pjyLwhWFvBFMuYBOiCTSQhcMVODhD22/+5ks0+IpJb33hPCOC6FPCGk+sP9NlikcKMEu4W1HEk9utdadsXOYRptT/tVPmM1l4j9gmZV5zDBbiPna4IjxvQMWySbGkDF3ABW2J8IeslocYXTnWfMLKXaeChm2WpnpIcs4p3WyLgwaEWSaVgdVw6symQmmUj5J6waFb3uC0D5h7QxZpigOsdxY81aUxP1GZHZ5KvhaCrla5PSUjqMXtdWdWstOFtELXlI1ERWyq1KpuCcI8JEx9gSR5Q3KuPd2nTyNYrtIW4K9sfsZtZVK5felvMJj2uIxkXgDyvcfNtK+TYGzHLXRNtqZWPnbOKo+r5T/SFy48ngSX/5SSPWQNfqv0sNeIcTCssXFwO7QyswyoWwLcrKPW4YIYe6YXQ4RPcfWWcdN/g2gkymhJjuCMP+ptep96aW7hLFdRK83C55/j2/Na9bq8izTCrFESf+VybGRrvHLo5g7/+5mExfekdas4HLDrXjDgApdJ6R+SRvRKmWqm3s2przcBU/4F2KtFrIbNlWS4wPCiGdNIc4W8pPuuYVuPeqU3rEEXUFZNNK7xyFMC/sbnjU17AiyTFmeZYap3Kvc3ORLtc1LZWC04edo5SyToT/oe3GvJKhFVm5nBGttEm6uxOPTUZK0Z6tmb5g779etLLRhIUVlLJNsTcJsjk1qdCrOrE+0bBOJabdG/lhRO/lKf8G8dbAttgpp62XofyU82YkyBwqh+XMa2M1ibBAGW5TUH3qe3uN5hfLt5DE31WFOB6n8NhZF1sZxm4liF8OyLJNpLu6RRj9DG4PAK2xPp/M6kxkrj9URmY7zzEKysuxp5qix9L8HUO6715GdYkNaNFHCmVh7k4afQdMh2S2K83FwnXppHgBsYJsWjtpKsZffROuNFc1Sil4i17eqeHDIxVS1lDvOEzr3uxkyxEAJIZMkZRJUyDIlzHUkKbFMkGXyjFVSdtPvtSkvatJW9Qorx4veSdT6MlqaxOkhAfmdQeQ8zxhHgQRZJiplmTcKqMQyBb+GrKPVxvH6k2wVJBSn4K0k2048qY/6KjkcxQ7fSqSSmO4bZy1E5SzT3ii3Isuk0vt5dV8TjazwtUzFA8zZXeQWUjrmRNqfN8H3QphDPKP3CnjDXL+PLdjnvsRmQgRczMky5W7eHKNJbu8AT6QTRordtO+kNDyntV1slVpB7kaWKV9mTzkiP053Xy+eqTNlmUrYNVOTUy0PPbhibGj48rm+vr+NpqrSN7FM+00ul//4Ny2L6ufMq1+w/8Cx2uow7IeMB4Dbd8E/BRgAX0jiw7UikHsAAAAASUVORK5CYII=);
  background-size: 0.4rem auto;
}
.pro_content .pro_review li span {
  color: #828282;
}
.pro_content .pro_review.commnetBlock li p.commentInfo {
  font-size: 0.32rem;
  color: #a0a3b3;
  line-height: 0.64rem;
}
.pro_content .pro_review li p {
  position: relative;
  line-height: 0.64rem;
  color: #020202;
  font-size: 0.37333333rem;
  word-break: break-all;
}
.pro_content .pro_review li span {
  color: #828282;
}
.pro_content .pro_review li i {
  color: #949494;
  padding: 0 0.13333333rem;
}
.ykplayer .x-endPanel div,
a,
p,
span {
  padding: 0;
  margin: 0;
}
// =============================================
.pro_bar_tab {
  bottom: 0;
  width: 100%;
  padding: 0;
  display: table;
  table-layout: fixed;
}
.pro_bar {
  position: fixed;
  right: 0;
  left: 0;
  z-index: 10;
  height: 1.46666667rem;
  background-color: #ffffff;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-touch-callout: none;
  box-shadow: 0 -0.02666667rem 0.26666667rem 0 rgba(38, 45, 86, 0.05);
}
.pro_bar_tab .pro_tab_item {
  position: relative;
  display: table-cell;
  height: 1.46666667rem;
  color: #333;
  text-align: center;
  vertical-align: middle;
}

.pro_bar_tab .pro_tab_item .barFav {
background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAbFBMVEVHcEz////////////////////////////9/f7///////////////////////////////////////////////////+go7P39/i5u8fw8POmqbjm5+vg4eaqrbuxs8HAws3b3OLS1NvMzdbO0NjL7AZ0AAAAFnRSTlMADB4q4hRh//xy15gFVYuAzrbDQaXsRig04QAAAbhJREFUOMvdVNmWgyAMdUVAQe3CIqC0/f9/HIK2ta3OzOOcyYMCuYTk3kCS/EtLj4TzFmXzLENtzckx/YDlJyyN9UZXFDUNopW23hqJT/lrtBpbJaK5qywKeXXzTFlcr6JmVI9hdZwmNYT/NIXPoKYpLmqa3XFlYYPjInFBz5WJkZWpzrTA8hI22qJcgL0JHtkxOCPnWHuvMYfcUtbJsM/0Mw5JJxRuH/FJXZN7jIRgJZxEcdzdwpDssUZCmFsXiakGcTns83u4iKGCRJAWYom9aeDX4Oc27Mj2gVk40XIAeuGqch9YVk54ALZ2yWHHoAYLnDDIgewDCfhZzGEM9Te7QHoT41wD1P8djw/2GAZl2DaOgTJ3J2g94U0qEZ6eWofu8YDcOJ0Azj+6J8nPHvqHv+M49I4/r7jLoSNHWb/iajlCN75wnFEzBORpxVJzCrjB0Dd1y04Pwun+cUHSXjsx6O5D3PQQHE4fFke5TD/va9LEEGYOUXaQiu43BVsltZHyW5kqlhlJUO8krK3FQBzGQOvzum22AEih1I5Qr+Je4QG4YvTTo3YspLWyOP7i+WNty9K/9CB/AQUfJbDKS+9cAAAAAElFTkSuQmCC);
  background-size: 100% 100%;
}
.pro_bar_tab .pro_tab_item .iconfont {
  width: 0.66666667rem;
  height: 0.61333333rem;
  line-height: 0.61333333rem;
  padding-top: 0;
  padding-bottom: 0;
  font-size: 0.53333333rem;
  color: #666;
  margin: 0.10666667rem auto 0 auto;
  display: block;
}
.pro_bar_tab .pro_tab_item .iconfont ~ .tab_label {
  position: relative;
  top: 0;
  display: block;
  font-size: 0.32rem;
  color: #969aae;
  text-align: center;
}
.pro_bar_tab .pro_tab_item .icon_shopcar {
  background-position: -6.56rem -1.58666667rem;
}
.pro_bar_tab .pro_tab_item .icon_img {
  width: 0.66666667rem;
  height: 0.61333333rem;
  line-height: 0.61333333rem;
  padding-top: 0;
  padding-bottom: 0;
  font-size: 0.32rem;
  margin: 0.10666667rem auto 0 auto;
  display: block;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAuwAAADICAYAAACzgrT1AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo5RThFQ0M4OEQwNDBFNzExOTE0M0EyMTI4MkY1RUU1NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpEMkM4QzNCMDM4RjExMUU5QkQzNkM1MUVGNDcxQkE0MyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpEMkM4QzNBRjM4RjExMUU5QkQzNkM1MUVGNDcxQkE0MyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkMyN0I3NjVENDBEMTExRTdBNDE5REJFODhDNDBBQUJEIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkMyN0I3NjVFNDBEMTExRTdBNDE5REJFODhDNDBBQUJEIi8+IDwvcmRmOkRlc2NyaXB0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) no-repeat;
  background-size: 9.97333333rem auto;
}
.pro_bar_tab .pro_tab_item .icon_img ~ .tab_label {
    position: relative;
    top: 0;
    display: block;
    font-size: 0.32rem;
    color: #969AAE;
    text-align: center;
}
.pro_bar_tab .pro_tab_item .icon_shopcar {
    background-position: -6.56rem -1.58666667rem;
}
.pro_bar_tab .pro_tab_item .icon_img:before {
    clear: both;
    content: "";
    display: block;
    visibility: hidden;
}
#selfCartIcon{
      color: #FF6666;
      // text-decoration: none;
} 
.pro_bar_tab .pro_add_car,
.pro_bar_tab .pro_overseas_add_car,
.pro_bar_tab .pro_add_list {
  width: 3.46666667rem;
  font-size: 0.37333333rem;
  font-weight: 700;
  color: #ffffff !important;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQQAAABsBAMAAAB+9tG6AAAAD1BMVEX/UWn/XHX/Rl3/ZYD/PVLZB2IXAAALnklEQVRo3pVb25HlKgwEIoAiAcpFApQzoE7+Me0BvTFnzfjOzH5aV49WqyW7z/Ppn/p9rn4tT/n+F8bjins83nl4YlqfnFoeT7u3j9u9v3//XL1OQ8QAsKB8n68N868ywLsYx2/62hDHP9qCrw3juachbybU/unTiqv36YXKHhi/04BCfgjsgOi+PxEefDvZ0Nr3Z/hh2DCefOAF8EPv1gnf1w9HgBFfC8ZfeeLXAgwFGiJPS9MJGbzwFgj0QZ/ZMJKBbQjTBkiFRzbE8esdvdwEYUZhJAN6IT/csPfC8ME10uGSpAwjHQo6YWQD2UEGeHJCGsHwYkTKkAxHXvjUD1kwvdBVNYxUvCgbnMlFN8MQwQp4v3gigwFUEc+6WL0wYgDJADZUTsYZilmVDmzQJRGdIyeM949UiMoL6dwLFcsSDFigIVAyQgyC1MQoiGhLQhnQGpVkO6oITEXIhn5VSsgyK+KiZLSRwHyAbABkULCUyIyRiu+4MBwxAvHIBTYjFM6Gwrg4vRAHPn0NAA9IMsyKTMOCdoKOnfAZvdClKgtYMJzw9cBMhKIykrFpesHCQsr4gCdecqGPQHwoE3RFXhAHVZe6IoYHJjKYXORMhEB8vdAOesSsivmAGVV5AbCJIaEYdPT8EDQgMmKXuMELd3vFhZGPP1plUeAIAFlMMjrwwdoqZ5cAJ+QjL3yzAVrkcIGkAnphZoMrpk0hOhI8ghe8qogs3bq9FuW3GAY4YadU8Fwu1SmnBaUs6OixKkdN6GyYNlA67mx4FiWmJBVlVXwhcCgmNOlcmAWB8JgMXxhhQHTcl+UDmoYRXUpi4QsBEdrmI0RBitLbTi1eGDbkg3TkbDQJCbmAgZiRCIqzDSuILwxcwtokL+RZEZvX74uyYhSgXT9wYYZhWPCDOU58tHGYlOEUmjpEgoHhUvCIuDDdcM1QYDZE8AMmQ0QjBBqBuEEu3PkEoCu5YXhCt0nVpawXKAhOWBOHYdRjInRuWxs2bWpL3IjDC41XFRGhRZhQaO5GFZHvHTg9eoQUxPSCtKlwBUUXgm3Ws0WAG4YTonbDdAF0ynbYKT8SCdOn5k+gJmFScoaCaJvhz1ka9sTodkDiibOwDV3yUcNjKcIXovMaGFQq0NtxiJmvb6/0tfIwo70wCmKGIxThzs7CI8ICQJMZ7IC9Cnl7IW48yEwbKmfihKWvGzAdlRu4SVFJGN6GmUD5+J6OzBemBWamvAx3dI90pDjMujQdm3BhDlTv6TiyQNq1AmhNHYm2BOaOhAszDLYmAZnytKDdZ6yJQjHDUJUFYoBh0MBeZbj3UYoyq4IAG9r7TEkUfsKC5iy6Xbvg1pyMkXDB0qaRDEnRhTN0hE5pCgJnOmHwhkGP/3suiJEKygl5WpEasfj3Zg1RwGYpnRI6NaejiYTn+Z4Ig6JNjSSOWZA7/rrxQudWaTlLQY2hUE0ocIzkBaCv3sgs1Cnbnr+uuVCBROM0pyOhvUC9smhoIoUh6ZqY6gL2iB+k5ddA1zESBhUuzR0LhyICRHvRu/yidv0BmqRJoQGKschI5zYQzewVUlHSMYviBlLPeyCq2GAoCxFINdwX9f6ZC44oi1dzbc5oQzvnjp8qkpsQBiBsAtDlx2wP6Oh1s1bJmPMJg54t4jNxgSlL0dFAJwQkDMCePQ74iI3JJCRC06EXBixtpqmJjcQXnvqrJ90PslGXJKKC5EI7qIhObui2Ji+DjjolvXNeKjJqiSNDRrZfZGHbrAGbJiqZZom5wAlphwiZaikUkfUNwIX7V698NmtFWYzYRfC0qQieKnfAkBMNMhnQOZ9URKWRrlfJR6mIBy5EKYepbkQZrGc9JpE+Txh0/dBwryqSpEe0wsF0L9NUdKw1Jf9UOWSsfWfQFbTPShRaCwxFidCPaQr1Nm7XYsWkCwBN916Kd0+RpYMZk8D3RfrEfYSdrCUaQNyiUbtkitjX5BOauh6tDW8TZELKpKZ79ALQ1xQtMjE0tbOtDNsAexndKY0AHMwsxdMUNCqqSeUGlDheoamjzsOMZRnpFDwa5oa7ALWRiBvx9T6aKXGsrB2HCJMLgb0wW4SRoWmamkK8NxKH9Km92rSjLNXMlNSfLl4GwEQZnGYsMlNij/IP3RHp66v0CWITqyxaAw56knHWC94LQJtQNFC70jFlqSy5GfHXEieWOKwI7WhJaERHWY/9Yiy7XCAvzFFKsfjASnwBiYPwyTuzHpusJVr1NdFEuSEN7qGAS0XMkuzPZe0DHiERIBZx2UZQLvxe125mSlAeLzNFzPeXS+8p7TrA0XLKp4W7tUTslRSvV9GvatHP+sCwpmLXEV5hk9rVJlrW5rafKHfErXfDGKoaI0RvswBN0z0Lbj499YVM69p8sgxQJVnXxb1ibnaudVQQ/rG1T6B0nfWIim1y0tduNWhZCwVXLGMC+qoeu67NCZDhPpDBK2rAQOItgw6LCm2IkwcpPBJrMwyawvADGtyvOEwnEGchtS3I/YLR4SM2bCLQYkSjzTns7g8oS/+oXYCpCDXRATbalYg32GSyUe2FTigLnXF8cKjU7DEUq3E4tR7zzBeYvEauBiLxR9A0ZylkDBeqLF3JLJckpNMah5FfV9Etm0uSAwGYUgG9sOCzkcENg1WtMiUuiDa9IGuZgxMKoPBKYDASByluRuDg8wVe1ppdAGvxeS987ipC0PG6eKQKmjTR3toM99ErlUVPEhk3dDfV5REuiO54LQcM2K2n9hmWcxr2g57pGmzNm5Id8ys6VtzXXl3PEUHE168bQPPjYxZPRP4pfBJ/5S3hWbMG+RUKcp1lZKCzkYjRq8X5IrMkfv/JbqoiPKMfBBiCEsGhIsJ6VYQACRWh9wFYkWla0N75AifjkgrBrO41LkQnsJC8uaDIWnO78/aAYYeOdE8jEgedLmA+OhhmNDx7mayXJWFOaiXS2kGz7hyHaneE0qmAsoUf0PRg0WgDAXQ7447SpxbRj6Yp4wXv9GIoLYIXyI6JRL93XKh8YDZV6Gp1HiX6OcUfvT5l8TGZZGgivh7OlKRBo8hTzRnJVRQ+6nLQwGDvadTJ5aRNBz1C4tD1HUlZpHhLm6IccYxy9CYbm5yRHHqB8xEuLrtUJDdrWBFqWPBOw3Oye0rRPu+TOaLS6Wm3Rz1lGe7dZmnNbojr65POhXcSz0uZ5cBMX/oxOMk85/RGZNlIkOR33+0IoD/GBlUSoSiBAahbUTqP8Fdzx4FuaOyF/Ae5C+PQ5ZrGXBUtgwSLn4gLVnLL/0nI5/0CXNktsiNlo2pTRgVXfgANepOLyBfe0bELadEnFHh4ShWx7qwj5SITBvgHTjgIoLFTvZ5QmJOivqSjrMd0NCIik1wPWH0B7or2bOHn7au0a5UKYZ8KEadazxuy5dqQ6GvaNwn3vCMRxrKcINvNvR7p9LIWNeAHPP48+/wPLiznNCI2yURZrMrhZBeitc8MvWr44OCWpVZSgC9SWeyRWdFeKHqYikKfY0x6T9loZX2oNXW1K11fjxc9zysO79R2am2UjfWFfL+rLJXv0fF2oVdzU8QA7dQ0QzccoDbxqV8022LQmk5ygWz4XAuBLaz/8nYsWJVF2KuaKdVsDYHI79DU1e1Av+pyFX/JSsRKPSK4rZP1XMkoDTrfR+hIpEnPMkVU8ICzlLnFZoB8qr/AX+9fc63bbMcqbkq1wBHQC6h8lmA1P1ShlQLs90vrgy8DOA6wtDY1oXYBqLmZE1z+VmZRgBVnuQ9myirnNFiVnUcZs5Bwjisz4iwj21qpiKzu0X+ILNvz26GFX0/WJNfoxaajp0b9VFnoEw3+aCnfr7gAWhfrv8tYaY4Nl7W144KIdkPHA930wslM+bHcsXMiwAGBbCRWuUt9qLLMUmLEwUH6zAE1VPblJP4SFXz9MkHktuWzIb7/nYPMieKGJL7CstYMMxc7IdiTInOKrS9ZGn+3NPSFdu+A4R9B6PW7cFCOZwAAAABJRU5ErkJggg==);
  background-size: 100% 100%;
}
.pro_bar_tab .pro_tab_item {
  position: relative;
  display: table-cell;
  height: 1.46666667rem;
  color: #333;
  text-align: center;
  vertical-align: middle;
}
.pro_bar_tab .pro_add_car span,
.pro_bar_tab .pro_overseas_add_car span,
.pro_bar_tab .pro_add_list span {
  display: block;
  width: 100%;
  height: 100%;
  line-height: 1.46666667rem;
}
.pro_bar_tab .pro_tab_item .icon_img ~ .tab_label {
  position: relative;
  top: 0;
  display: block;
  font-size: 0.32rem;
  color: #969aae;
  text-align: center;
}
.pro_bar_tab .tab_badge {
    position: absolute;
    top: -0.10666667rem;
    left: 50%;
    z-index: 100;
    margin-left: -0.26666667rem;
    max-width: 1.06666667rem;
    height: 0.8rem;
    line-height: 0.8rem;
    padding: 0 0.26666667rem;
    font-size: 0.48rem;
    color: #fff;
    vertical-align: top;
    background: #FF6666;
    border-radius: 0.66666667rem;
    -webkit-transform: scale(0.5);
    transform: scale(0.5);
}
</style>
