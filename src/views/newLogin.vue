<template>
    <div id="quickLogin" class="main"><input type="text" name="username" style="display: none;"> <input type="password" name="password" style="display: none;">
        <header class="bar bar_nav">
            <router-link to="/mine" href="javascript:history.go(-1)" data-ywpoint="null_null_null_null_I0300_0" class="top_icon icon_back fl">
                <i class="icon iconfont icon_leftarrow"></i>
            </router-link>
            <div class="top_title">登录</div>
        </header>
        <div class="login_page paddingTop ">         
            <router-view/>
            <Otherlogin/>
        </div>
        
    </div>
</template>
<script>
import Otherlogin from '@/components/otherlogin.vue';
export default {
    components: {
        Otherlogin,
    },
    
}

</script>
<style>
body, html {
    background: #fff;
}
.top_title {
    font-size: .42666667rem;
    font-weight: 500;
    line-height: 1.2rem;
    position: absolute;
    padding: 0;
    text-align: center;
    color: #333
}

.bar,.top_title {
    display: block;
    width: 100%
}

.bar {
    position: fixed;
    height: 1.2rem;
    padding-right: .4rem;
    padding-left: .4rem;
    background-color: #f9f9f9;
    border-bottom: 1px solid #e6e6e6;
    -ms-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    z-index: 10
}

.bar_nav .top_icon {
    height: 1.2rem;
    line-height: 1.2rem;
    margin: 0 -.4rem;
    padding: 0 .26666667rem;
    font-size: .37333333rem;
    position: relative;
    z-index: 20;
    color: #666
}

.bar_nav .top_icon:active {
    color: #f66
}

.bar_nav .icon_back {
    width: .66666667rem
}

.bar_nav .top_title {
    right: 1.33333333rem;
    left: 1.33333333rem;
    display: inline-block;
    width: auto;
    margin: 0;
    color: #333
}

.bar_nav .top_title,button {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis
}

button {
    height: 1.2rem;
    line-height: 1.2rem;
    border: 1px solid #ccc;
    color: #ccc;
    text-decoration: none;
    text-align: center;
    -webkit-border-radius: .1rem;
    border-radius: .1rem;
    -ms-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: none;
    -ms-appearance: none;
    appearance: none;
    background: none;
    padding: 0 .2rem;
    margin: .4rem 0 0;
    position: relative;
    font-size: .3rem;
    cursor: pointer;
    outline: 0;
    display: block
}
button.mt20 {
    margin-top: .53333333rem
}

.btn_block {
    display: block;
    width: 100%;
    margin-bottom: .26666667rem
}

.btn_default {
    border: 1px solid #ccc;
    color: #ccc
}

.btn_default.active {
    background: #ddd;
    color: #fff
}

.btn_red {
    background: #f66;
    color: #fff;
    border-color: #f66
}

button[disabled] {
    color: #bcbcbc
}

.btn_disabled,button[disabled] {
    background: #eee;
    border-color: #eee
}

.content {
    -webkit-overflow-scrolling: touch
}

.login_page {
    font-size: .37333333rem;
    -webkit-overflow-scrolling: touch;
    padding: 1.2rem .53333333rem 0
}

/* .login_page.paddingTop {
    padding: 0;
    padding-top: 1.2rem
} */

.login_page .v-content {
    padding: 0 .53333333rem
}

.login_page .top_tip {
    height: .85333333rem;
    line-height: .85333333rem;
    text-align: center;
    background-color: #ffeded;
    opacity: .75;
    color: #f66
}

.login_page .icon {
    /* background: url(static/img/icon_bg.f61339d.png) no-repeat; */
    width: .42666667rem;
    height: .42666667rem;
    overflow: hidden;
    background-size: 100% auto
}

.login_page .item_top {
    position: relative;
    line-height: .53333333rem;
    font-size: .42666667rem;
    color: #333;
    padding: .53333333rem .26666667rem;
    text-align: center;
    font-weight: 500
}

.login_page .item_top.t_l {
    text-align: left
}

.login_page .item_control {
    position: relative;
    width: 100%;
    height: 1.33333333rem;
    line-height: 1.33333333rem;
    overflow: hidden;
    background-color: #fff;
    border: none;
    border-bottom: 1px solid #ccc;
    -ms-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box
}

.login_page .item_control.mt20 {
    margin-top: .53333333rem
}

.login_page .item_control.mt40 {
    margin-top: 1.06666667rem
}

.login_page .input_error {
    border-bottom: 1px solid red
}

.login_page .item_input {
    padding: 0 .26666667rem;
    font-size: .37333333rem;
    color: #333;
    line-height: normal;
    display: inline-block;
    -webkit-box-shadow: inset 0 0 0 1rem #fff;
    box-shadow: inset 0 0 0 1rem #fff;
    border: 0 none
}

.login_page .item_input::-webkit-input-placeholder {
    color: #ccc
}

.login_page .item_input:-moz-placeholder,.login_page .item_input::-moz-placeholder {
    color: #ccc
}

.login_page .item_input:-ms-input-placeholder {
    color: #ccc
}

.login_page .icon_clear {
    background: url(data:image/png;base64,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) no-repeat 50% #fff;
    background-size: .42666667rem auto
}

.login_page .icon_clear,.login_page .icon_success {
    position: absolute;
    top: 0;
    right: 0;
    width: .8rem;
    height: 1.33333333rem;
    display: none
}

.login_page .icon_success {
    background: url(data:image/png;base64,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) no-repeat 50% #fff;
    background-size: .53333333rem auto
}

.login_page .icon_success+.icon_clear {
    right: .8rem
}

.login_page .show {
    display: block
}

.login_page .item_password+.icon_clear,.login_page .item_password+.icon_success {
    right: 1.33333333rem
}

.login_page .msg_code {
    padding-right: 2.66666667rem
}

.login_page .msg_code+.icon_clear,.login_page .msg_code+.icon_success {
    right: 2.66666667rem
}

.login_page .img_code {
    width: 4.26666667rem
}

.login_page .img_code+.icon_clear,.login_page .img_code+.icon_success {
    right: 4.8rem
}

.login_page .item_password {
    width: 7.46666667rem
}

.login_page .item_pwd~.icon_clear,.login_page .item_pwd~.icon_success {
    right: 1.33333333rem
}

.login_page .item_pwd~.icon_success+.icon_clear {
    right: 2.13333333rem
}

.login_page .item_pwd {
    width: 7.46666667rem
}

.login_page .checkbtn {
    position: absolute;
    top: 0;
    right: 0;
    width: 1.33333333rem;
    height: 100%;
    background: url(data:image/png;base64,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) no-repeat 100% #fff;
    background-size: .69333333rem auto
}

.login_page .checkbtn.active {
    background: url(data:image/png;base64,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) no-repeat 100%;
    background-size: .69333333rem auto
}

.login_page .item_box {
    width: 100%;
    line-height: .8rem;
    display: block;
    margin-top: .53333333rem;
    overflow: hidden
}

.login_page .item_box .blue-color {
    color: #0075e8
}

.login_page .item_box.mt20 {
    margin-top: .53333333rem
}

.login_page .item_box.mt40 {
    margin-top: 1.06666667rem
}

.login_page .item_box p {
    color: #333
}

.login_page .item_box p a {
    color: #f66
}

.login_page .item_box .color_gray {
    color: #9b9b9b;
    padding: 0 .26666667rem;
    opacity: .5
}

.login_page .item_tips {
    line-height: .8rem;
    padding: 0 .26666667rem;
    overflow: hidden
}

.login_page .item_tips p {
    color: #f66
}

.login_page .item_tips .color_gray {
    color: #ccc
}

.login_page .agree_item {
    min-width: 2.66666667rem;
    height: .8rem;
    line-height: .8rem
}

.login_page .agree_item input {
    display: none
}

.login_page .agree_item .icon_agree {
    position: relative;
    width: .42666667rem;
    height: .48rem;
    overflow: hidden;
    float: left;
    margin: .13333333rem .13333333rem 0 0;
    display: block;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAABqCAYAAAD6F9IWAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6ODEwNDZEMUFDMjk3MTFFNjlCNTVENjM2NDlGQzgxRUQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6ODEwNDZEMUJDMjk3MTFFNjlCNTVENjM2NDlGQzgxRUQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo4MTA0NkQxOEMyOTcxMUU2OUI1NUQ2MzY0OUZDODFFRCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo4MTA0NkQxOUMyOTcxMUU2OUI1NUQ2MzY0OUZDODFFRCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PtAJM40AAA1ESURBVHja7FtpbFTX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) no-repeat;
    background-size: .42666667rem auto
}

.login_page .agree_item input:checked+.icon_agree {
    background-position: 0 -.50666667rem
}

.login_page .agree_item a {
    color: #ff7070;
    text-decoration: underline
}

.login_page .forgot_password {
    color: #666;
    float: right
}

.login_page .forgot_password:active {
    color: #007aff
}

.login_page .btn_code {
    position: absolute;
    bottom: .21333333rem;
    right: .26666667rem;
    padding: 0;
    margin: 0;
    width: 2.50666667rem;
    height: .74666667rem;
    font-size: .37333333rem;
    line-height: .8rem;
    text-align: right;
    color: #fff;
    text-align: center;
    background-color: #f66;
    border: .08rem
}

.login_page .btn_code[disabled] {
    color: #7d7d7d;
    background-color: #ececec
}

.login_page .btn_code.w100 {
    width: 3.2rem
}

.login_page .btn_code_email {
    position: absolute;
    top: 0;
    right: 0;
    padding: 0;
    margin: 0;
    width: 2.4rem;
    height: 100%;
    font-size: .37333333rem;
    text-align: right;
    color: red;
    background: #fff;
    border: 0
}

.login_page .btn_code_email[disabled],.login_page .btn_disable {
    color: #ccc
}

.login_page .code_box {
    position: absolute;
    top: .13333333rem;
    right: 0;
    width: 2.66666667rem;
    height: 1.06666667rem;
    line-height: 1.06666667rem;
    font-size: .37333333rem;
    color: #666;
    background: #fff
}

.login_page .code_box img {
    float: left;
    width: 2.66666667rem;
    height: 1.06666667rem
}

.login_page .code_text {
    width: 4.53333333rem
}

.login_page .change_code {
    margin-left: 2.93333333rem
}

.login_page .verified_phone {
    text-align: left;
    font-size: .4rem;
    color: #333;
    padding: 0 .26666667rem
}



.login_page .get_tel {
    padding: 0 .05333333rem
}

.login_page .get_time {
    font-size: .4rem;
    color: #999
}

.login_page .get_time em {
    font-style: normal;
    padding-right: .05333333rem
}

.login_page .get_code {
    display: none;
    color: #666;
    text-decoration: underline
}

.login_page .noborder {
    border: none
}

.login_page .list_block {
    position: relative
}

.login_page .list_block .list_top {
    line-height: .64rem;
    font-size: .42666667rem;
    color: #333;
    padding: .53333333rem 0 .8rem;
    text-align: center;
    font-weight: 500
}

.login_page .list_block .list_box {
    padding: 0 .53333333rem
}

.login_page .list_block .list_box a,.login_page .list_block .list_box div {
    height: 1.2rem;
    line-height: 1.2rem;
    margin-bottom: .53333333rem;
    color: #fff;
    text-align: center;
    background: #f66;
    -webkit-border-radius: 5px;
    border-radius: 5px;
    display: block;
    border: 1px solid #f66
}

.login_page .list_block .list_box .btn_white {
    background: #fff;
    color: #f66;
    border-color: #f66
}

</style>
