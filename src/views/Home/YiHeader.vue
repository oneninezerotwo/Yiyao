<template>
  <header class="header" :class="isFixd?'header_fixed':''">
    <div class="download-container download-container-a" :style="isFixd?'display:none':''">
      <img
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEQAAAA8CAMAAADovOwsAAACuFBMVEVHcEz/UF3/yj7/vzL/UF3/UF3/yz//Ul//YHf/YXL/yj7/uy//wzz/yj7/yj7/yj7//wD/yj7/YXT/yDf/yDz/y0D/wTX/zD//y0D/uSz/yz//uy//xjv//wD/yT7/yDv/uC3/yz3/xDn/yj//UF7/Ynb/tyv/UF3/yz7/yz7/YXT/yT3/UFz/UFz/yj7/zT//yj7/Znf/zDr/yj7/yj//zjv/yj7/yj3/zDP/yj7/yj7/vjL/yj7/vTH/yT//yz3/yz7/yz7/zDP/yT7/yz7/yzz/yz3/yj7/wjX/eFP/yT7/yj//zD3/wjb/yz7/yj7/wTT/yDz/vzD/uCz/yz7/YXT/iVD/uy7/uS3/xzv/wjb/xz7/UV//yz3/wzb/uSz/yT7/uSz/Znf/vC7/yj7/yz7/yz7/ui3/xjr/yj7/xzr/kU7/uy//Y3H/xCf/xjr/ui7/vTD/YXT/uS3/xjn/UV7/UFz/jk3/UV7/VVv/UV7/tkn/kkz/v0D/xjn/zj3/glD/UF3/UV3/vjH/yj7/yz7/yj//yT//yj7/yT7/uzD/uy//yj//zUD/yj7/yzz/yDz/yj7/yz7/p0D/yj7/yT3/vC//yj7/yTz/yz7/zDv/yj//zD7/yj7/yz7/yj3/yj3/yz7/yT7/y0H/yz7/z0D/yz7/yj3/YXT/UF3/yj7/uCz/jFD/jFH/jU3/hU//ui//cVT/yDz/vzP/uS3/yT3/b1X/aFb/wTX/Vlv/cFX/bVX/Ylj/xzv/vTH/ZVf/XFr/wjb/U1z/XVn/blX/Y1j/cFT/alb/Z1b/qjr/szH/jVP/pTb/vDD/vjL/vTD/rTP/uy//xDj/jVH/Xln/mDv/uTD/XFn/VFz/xjr/yj3/uDH/lTz/r0T/xj//nUn/oUj/u0H/uEL/qzT/oTf/wz//q0X/sjI7TTPyAAAAqHRSTlMArPb66O+n7C0d3+8R4v5SAffrDvxU+VUs/qP5+ALW/fxP/DVsGv3+nMjwq/um2VH7DyP6mxrdQw/m1feo8Tk2j+oFncUi/er92unQMvbSVv7nEPjr+fT3+vzjKeps/cCl9h7MlXu++vve9fX0Eg3W/f72+/nq6PyrsWIH/gwSFerrl/rkudRyV778+2E4HUT+eE74rPL34/uqHoYt8JM/u/SwJ7ogZ/3OJaM8AAACAklEQVRYw2NgQAX2Jn6OXt5S+rIM2ICPgwuvu562OAN+YLUKAjQlMOV4nPmgsqZ4zXAyhipbJaiILudqBpNbZY7XkGi4ulUGoqhSRpYIuVi8hvAjFK5iUkaWsZBDkkrBa0gqkspVXMJIMjbIMml4DUmI2xfObSsmA1GrgZDwh4iI+Fpz5xQGBGLVPH+OAJhOXg0B0kogLW52MPnaFhBfnlkNIp0eBBbtmySAbMjihXMXzOafxRAPNWS1JPNWkIfYoKAVyLnloQCTTcyr6584ZfqqHlSnLAO7NiR/C0zd6oJI5EBetWprM1xqdVQmOMXMRPfQIojqvRfhKoszkA2Z0AWX2HIJIsjLg2bG0nlQ5Vt3wB0TUYIwZEY33IzNm6CCnb3IJlR3LFmOsHXTZpjy4CyY2NRpMLF9N5F82dZeDzZAhZGR0bP8/rNHT5GMObj5/LVTF85cPQkTmXznyePnt8+e27EXoerew7sPahoqGSuqGHRWwsChA0e37952bNfGI9v3HN4JFloH07AezL1xfc+J3Rs3bty17fj+KzvhGhsZVuIDaIbgAKyjhowaMsQMUaeGIbosEBDDjgVkwwwJwyZbCtFZ1gQrUpJCV2ABlzdAwWlsskW5aCUbBzZVK9bAiqK1WKU5Rw0ZNWTUkFFDRg0ZNWTUkOFniKoW6YYIGUI1AwCpsNJ7JtgVRAAAAABJRU5ErkJggg=="
        alt="111"
        class="download-logo"
      >
      <p class="down-slogan">使用APP享受更多优惠</p>
      <a href="javascript:void(0);" class="btn-down">立即下载</a>
    </div>
    <div class="header-searchBar">
      <div class="logo"></div>
      <div class="address_map">广东</div>
      <div class="searchbar">
        <a
          href="//m.111.com.cn/yyw/wap/searchList/#/search"
          data-ywpoint="null_null_null_null_I0000_0"
          class="search_box"
        >
          <i class="icon iconfont icon_search"></i>输入商品名称
        </a>
      </div>
      <a href="tel:4000070958" data-ywpoint="null_null_null_null_I0002_0" class="tel"></a>
    </div>
  </header>
</template>


<script>
export default {
     name: 'yiheader',
     data() {
       return {
         isFixd:false,
       }
     },
    mounted() {
    window.onscroll = () => {
      if (window.scrollY > this.$el.offsetHeight) {
        this.isFixd = true;
      } else {
        this.isFixd = false;
      }

    };
  },
};
</script>

<style scoped>
@keyframes  searchbg{
0% {background: none;}
100% {background: white;}
}

.header_fixed{
  animation: searchbg 1s;
  background: white;
  height: 1.2rem;
}
</style>
