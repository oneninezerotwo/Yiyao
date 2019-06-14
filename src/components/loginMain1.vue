<template>
    <div>
        <div class="top_tip">
            <p>新用户可通过快速登录注册账号</p>
        </div>
        <div class="v-content content">
            <div class="item_control"><input type="tel" v-model="content" placeholder="请输入手机号" autocomplete="off" maxlength="11" class="item_input">
                <!---->
                <i class="icon_success show" v-show="stated"></i>
                <i class="icon_clear show" v-show="content" @click="clear"></i>
            </div>
            <div class="item_tips" v-show="state">
                <p>手机号码格式错误，请重新输入</p>
            </div>
            <!---->
            <div class="item_control"><input type="num" v-model="content2" placeholder="请输入验证码" autocomplete="off" maxlength="4" class="item_input msg_code">
                 
                <i class="icon_success show" v-show="content2 == yanzhengma"></i>
               
                <button class="btn_code" @click="getma">获取验证码</button>
                <button disabled="disabled" class="btn_code" v-show="state3">重新发送({{time}}s)</button>
            </div>
            <div class="item_tips" v-show="state5"><p>手机短信验证码错误</p></div>
            
            <!---->
            <button data-ywpoint="null_null_null_null_I0301_0" :disabled="login" class="btn_default btn_red btn_block mt20" @click="loginto">登录</button>
            <div class="item_box">
                <router-link to="newlogin2" data-ywpoint="null_null_null_null_I0302_0" class="fl blue-color" v-text="title"></router-link>
            </div>

        </div>
         <button v-text="yanzhengma"></button>
    </div>
</template>
<script>
export default {
  data() {
    return {
      content: "", //手机号
      content2: "", //验证码
      title: "账号密码登录",
      state: false, // 手机号码格式错误，请重新输入
      state2: false, //  绿色钩号
      state3: false, //重新发送(0s)
      state4: true, //重新发送(0s)
      state5: false, //手机短信验证码错误
      time: 90, //倒计时
      yanzhengma: "####"
    };
  },
  computed: {
    maxlength(){ 
      this.content2.length > 4 ? this.content2 = this.content2.slice(0,4) : this.content2
      return this.content2
    },
    stated() {
      var reg = /^1[3-9]\d{9}$/;
      if (reg.test(this.content)) {
        this.state2 = true;
      } else {
        this.state2 = false;
      }

      return this.state2;
    },
    login() {
      if (this.state2 && this.content2.length == 4) {
        this.state4 = false;
      } else {
        this.state4 = true;
      }
      return this.state4;
    }
  },
  methods: {
    clear() {
      this.content = "";
    },
    clear2() {
      this.content2 = "";
    },
    getma() {
      var reg = /^1[3-9]\d{9}$/;
      if (reg.test(this.content)) {
        this.state = false;
        this.state3 = true;
        var html =
          "0987654321";
        //随机数的范围：0-str.length-1
        console.log(html[2]);
        var res = "";
        for (var i = 0; i < 4; i++) {
          var now = parseInt(Math.random() * html.length); //0-str.length-1
          res += html[now];
        }
        //				console.log(res);//四位随机数
         ;
        this.yanzhengma = res;
        let timer = setInterval(() => {
          this.time--;
          if (this.time < 0) {
            clearInterval(timer);
            this.time = 90;
            this.state3 = false;
          }
        }, 1000);
      } else {
        this.state = true;
      }
    },
    loginto(){
        if(this.content2 == this.yanzhengma){
            this.$router.push({ path: '/mine', query: { name: this.content }});
           localStorage.setItem('name', this.content);
           this.state5 = false
           this.$store.commit("Login");
        }else{
            this.state5 = true
        }
    }
  }
};
</script>

<style>
</style>
