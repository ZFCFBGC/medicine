<template>
    <div class="login">
        <header class="bar bar_nav">
            <a  class="top_icon icon_back fl">
                <i class="icon iconfont icon_leftarrow"></i>
            </a> 
            <div class="top_title">免密码登录</div>
        </header>
        <div class="login_page paddingTop ">
            <div class="top_tip">
                <p>新用户可通过快速登录注册账号</p>
            </div> 
            <div class="v-content content">
                <div class="item_control">
                    <input type="tel" placeholder="请输入手机号" autocomplete="off" maxlength="11" class="item_input"
                    v-model="tel"
                    @focus="focus(1)"
                    @blur="disappear(1)"
                    @input="go"
                    >
                    <i class="icon_clear" v-show="showtel" @click="close(1)"></i>
                    <i class="icon_success" v-show="showtel2"></i>
                </div> 
                <div class="item_control">
                    <input type="number" placeholder="请输入图片验证码" autocomplete="off" maxlength="4" class="item_input img_code"
                    @focus="focus(2)"
                    @blur="disappear(2)"
                    v-model="yzm"
                    @input="go"> 
                    <i class="icon_clear icon_rgt" v-show="showyzm" @click="close(2)"></i>
                    <div class="code_box code_text">
                        <img :src="verifyPicStr" /> 
                        <div class="change_code" @touchstart="changeyzm">换一张</div>
                    </div>
                </div> 
                <div class="item_control">
                    <input type="number" placeholder="请输入验证码" autocomplete="off" maxlength="4" class="item_input msg_code"
                    @focus="focus(3)"
                    @blur="disappear(3)"
                    @input="go"
                    v-model="yz"> 
                    <i class="icon_clear icon_right" v-show="showyz" @click="close(3)"></i>
                    <button class="btn_code " @click="check">获取验证码</button> 
                    <button disabled="disabled" class="btn_code" v-show="time">{{times}}</button>
                </div> 
                <div class="item_tips" v-show="err"><p>{{errmsg}}</p></div>
                <button  :disabled="isDisabled" class="btn_default btn_red btn_block mt20" @click="login">登录</button>
                <div class="item_box">
                    <a class="blue-color fl" >账号密码登录</a>
                </div> 
                <div class="quick_login">
                    <div class="item_box">
                        <div class="agree_item">
                            登录即代表您已同意
                            <a href="//m.111.com.cn/mblock/16/b_wap_service_page.html">《1药网用户协议》</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                verifyPicStr:'',
                showtel:false,
                showtel2:false,
                showyzm:false,
                showyz:false,
                tel:'',
                yzm:'',
                yz:'',
                err:false,
                errmsg:'手机号码格式错误，请重新输入',
                isDisabled:true,
                time:false,
                times:'重新发送(60)s'
            }
        },
        methods:{
            //聚焦图片出现
            focus(num){
                if(num === 1){
                    this.showtel = true;
                    this.showtel2 = false;
                }else if(num === 2){
                    this.showyzm = true;
                }else{
                    this.showyz = true;
                }
            },
            //失去焦点图片消失
            disappear(num){
                if(num === 1){
                    this.showtel = false;
                }else if(num === 2){
                    this.showyzm = false;
                }else{
                    this.showyz = false;
                }
            },
            //获取短信验证码
            check(){
                if(this.showtel2){
                    this.err = false;
                    let now = Date.now();
                    this.$http.get('yywpassport/customer/sendsms',{
                        timestamp: now,
                        telphone: 15570064784,
                        usetype: 1,
                        os: 'h5',
                        verifypicuuid: this.verifypicuuid,
                        piccode: this.yzm
                    }).then(res=>{
                        if(!res.data.successful){
                            this.errmsg = res.data.msg;
                            this.err = true;
                            this.getyzm();
                        }else{
                            this.time = true;
                            let sum = 60;
                            let tamp = setInterval(()=>{
                                sum--;
                                this.times = '重新发送(' + sum +')s';
                                if(sum < 0){
                                    this.time = false;
                                    clearInterval(tamp);
                                    this.times = '重新发送(60)s';
                                }
                            },1000)
                        }
                    })
                }else{
                    this.err = true
                }
            },
            //获取图形验证码
            getyzm(){
                let now = Date.now();
                this.$http.get('yywpassport/appgetpiccode',{
                    timestamp: now,
                }).then(res=>{
                    this.verifyPicStr = 'data:image/jpg;base64,' + res.data.data.verifyPicStr;
                    this.verifypicuuid = res.data.data.verifyPicUuid;
                })
            },
            //删除input内容
            close(num){
                if(num === 1){
                    this.tel = '';
                }else if(num === 2){
                    this.yzm = '';
                }else{
                    this.yz = '';
                }
            },
            //换一张验证码
            changeyzm(){
                this.getyzm();
            },
            //是否可以登录
            go(){
                if(/^1[3-9]\d{9}$/.test(this.tel)){
                   this.showtel2 = true
                }
                if(this.showtel2&&this.yzm.length == 4 &&this.yz.length == 4){
                    this.isDisabled = false;
                }else{
                    this.isDisabled = true;
                }
            },
            //登录
            login(){
                    // let now = Date.now();
                    // this.$http.get('yywpassport/customer/sendsms',{
                    //     token:'',
                    //     demandcartkey:'', 
                    //     cartkey: '',
                    //     provinceid: 20,
                    //     province: 20,
                    //     provincename: '广东',
                    //     tradername: 'yw_app',
                    //     trader: 'h5',
                    //     closesignature: 'yes',
                    //     signature_method: 'md5',
                    //     timestamp: now,
                    //     signature: '****',
                    //     siteid: 9,
                    //     telphone: 15570064784,
                    //     usetype: 1,
                    //     os: 'h5',
                    //     verifypicuuid: this.verifypicuuid,
                    //     piccode: this.yzm
                    // }).then(res=>{
                    //     if(res.data.successful){
                    //         this.$router.push({name:'Index'})
                    //     }else{
                    //         this.errmsg = res.data.msg;
                    //         this.err = true;
                    //         this.getyzm();
                    //     }
                    // })
                this.$router.push({name:'Home'})
            }
        },
        created(){
           this.getyzm();
        }

    }
</script>
<style scoped>
.login {
    background: #fff;
    height: 100%;
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
    z-index: 10;
    display: block;
    width: 100%;
}
.bar_nav .top_icon {
    height: 1.2rem;
    line-height: 1.2rem;
    margin: 0 -.4rem;
    padding: 0 .26666667rem;
    font-size: .37333333rem;
    position: relative;
    z-index: 20;
    color: #666;
}
.bar_nav .icon_back {
    width: .66666667rem;
}
.iconfont {
    font-size: .53333333rem;
    color: #ccc;
}
.bar_nav .top_title, button {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.bar_nav .top_title {
    right: 1.33333333rem;
    left: 1.33333333rem;
    display: inline-block;
    width: auto;
    margin: 0;
    color: #333;
}
.top_title {
    font-size: .42666667rem;
    font-weight: 500;
    line-height: 1.2rem;
    position: absolute;
    padding: 0;
    text-align: center;
    color: #333;
}
.login_page.paddingTop {
    padding: 0;
    padding-top: 1.2rem;
    font-size: .37333333rem;
}
.login_page .top_tip {
    height: .85333333rem;
    line-height: .85333333rem;
    text-align: center;
    background-color: #ffeded;
    opacity: .75;
    color: #f66;
}
.login_page .v-content {
    padding: 0 .53333333rem;
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
    box-sizing: border-box;
}
.login_page .item_input {
    padding: 0 .26666667rem;
    font-size: .37333333rem;
    color: #333;
    line-height: normal;
    display: inline-block;
    -webkit-box-shadow: inset 0 0 0 1rem #fff;
    box-shadow: inset 0 0 0 1rem #fff;
    border: 0 none;
    width: 100%;
    height: 0.5067rem;
}
.login_page .icon_clear, .login_page .icon_success {
    position: absolute;
    top: 0;
    right: 0;
    width: .8rem;
    height: 1.33333333rem;
    display: block;
}
.login_page .icon_clear {
    background: url('../../static/img/zclear.png') no-repeat 50% #fff;
    background-size: .42666667rem auto;
}
.login_page .icon_success {
    background: url('../../static/img/zsuccess.png') no-repeat 50% #fff;
    background-size: .53333333rem auto;
}
.login_page .icon_right {
    right: 2.66666667rem;
}
.login_page .icon_rgt {
    right: 4.8rem;
}
.login_page .img_code {
    width: 4.26666667rem;
}
.login_page .code_text {
    width: 4.53333333rem;
}
.login_page .code_box {
    position: absolute;
    top: .13333333rem;
    right: 0;
    height: 1.06666667rem;
    line-height: 1.06666667rem;
    font-size: .37333333rem;
    color: #666;
    background: #fff;
}
.login_page .code_box img {
    float: left;
    width: 2.66666667rem;
    height: 1.06666667rem;
}
.login_page .change_code {
    margin-left: 2.93333333rem;
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
    border: .08rem;
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
    font-size: .37333333rem;
    cursor: pointer;
    outline: 0;
    display: block;
}
.btn_default {
    border: 1px solid #ccc;
    color: #ccc;
}
.btn_block {
    display: block;
    width: 100%;
    margin-bottom: .26666667rem;
}
.btn_red {
    background: #f66;
    color: #fff;
    border-color: #f66;
}
.login_page .btn_code[disabled] {
    color: #7d7d7d;
    background-color: #ececec;
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
    border: .08rem;
}
.btn_disabled, button[disabled] {
    background: #eee;
    border-color: #eee;
}
button[disabled] {
    color: #bcbcbc;
}
.login_page .item_box {
    width: 100%;
    line-height: .8rem;
    display: block;
    margin-top: .53333333rem;
    overflow: hidden;
}
.login_page .item_box .blue-color {
    color: #0075e8;
}
.login_page .quick_login {
    font-size: .37333333rem;
    color: #9b9b9b;
    margin-top: 1.33333333rem;
    text-align: center;
}
.login_page .quick_login .item_box {
    text-align: center;
}
.login_page .item_box {
    width: 100%;
    line-height: .8rem;
    display: block;
    margin-top: .53333333rem;
    overflow: hidden;
}
.login_page .agree_item {
    min-width: 2.66666667rem;
    height: .8rem;
    line-height: .8rem;
}
.login_page .agree_item a {
    color: #ff7070;
    text-decoration: underline;
}
.login_page .item_tips {
    line-height: .8rem;
    padding: 0 .26666667rem;
    overflow: hidden;
}
.login_page .item_tips p {
    color: #f66;
}
</style>