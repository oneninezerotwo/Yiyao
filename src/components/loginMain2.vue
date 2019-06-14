<template>
    <div class="content">
        <div class="item_control"><input type="text" v-model="content" placeholder="请输入用户名/手机号" maxlength="50" autocomplete="new-password" class="item_input">
            <i class="icon_clear show" v-show="content" @click="clear"></i>
        </div>
        <!---->
        <div class="item_control"><input :type="type" v-model="content2" placeholder="请输入密码" autocomplete="new-password" class="item_input item_password">
            <i class="icon_clear show" v-show="content2" @click="clear2"></i>
            <div class="checkbtn" :class="{'active' : isok}" @click="gaoliang"></div> 
        </div>
        <!---->
        <button data-ywpoint="null_null_null_null_I0301_0" :disabled="login" class="btn_default btn_red btn_block mt20" @click="newlogin">登录</button>
        <div class="item_box">
            <router-link to="/newlogin" data-ywpoint="null_null_null_null_I0303_0" class="fl blue-color" v-text="title"></router-link>
            <a class="forgot_password" data-ywpoint="null_null_null_null_I0304_0">忘记密码?</a>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            content : '',
            content2 : '', 
            isok : false,
            isok2 : true,
            type : "password",
            title :  "免密码登录"
        }
    },
    computed: {
        //非空判断
        login(){
            if(this.content&&this.content2){
                this.isok2 = false
            }else{
                this.isok2 = true
            }
            return this.isok2
        }
    },
    methods:{
        //清除内容
        clear(){
            this.content = ''
        },
        clear2(){
            this.content2 = ''
        },
        //眼睛
        gaoliang(){
            this.isok = !this.isok;
            if(this.isok){
                this.type = "text"
            }else{
                this.type = "password"
            }
        },
        newlogin(){
           
            this.$router.push({ path: '/mine', query: { name: this.content }});
           localStorage.setItem('name', this.content);
        }
    }
}

</script>

<style>

</style>
