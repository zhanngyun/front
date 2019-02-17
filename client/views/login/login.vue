<template>
  <!--背景图-->
  <div class = "background" :style = "background">

    <!--login框，表单+tab标签页的组合-->
    <div class = "loginFrame">

      <!--表单组件放在外面，标签栏在里面-->
      <el-form ref = "postForm" :model = "postForm"  :rules = "rules"  class = "login-container">

        <!-- 登录标题 -->
        <div>
          <h3 class="loginTitle">用户登录</h3>
        </div>

        <div class = "formGroup">
          <el-form-item   prop = "mobile" >
            <el-input type = "text"  auto-complete = "off" v-model="postForm.mobile"  maxlength="11" placeholder = "请输入您的手机号" class = "form-mobile" ></el-input>
          </el-form-item>
          <el-form-item prop = "verificationCode" class = "form-inline">
            <el-input type = "text" auto-complete = "off" v-model="postForm.verificationCode" maxlength="6" placeholder = "请输入验证码" class = "form-verificationCode" ></el-input>
            <el-button   type="warning"  @click="dx_yzm_bt" v-if="is_dx_yz" class="verify-btn" :disabled="this.isEnabled">获取验证码</el-button>
            <el-button   type="warning" size="small" v-if="!is_dx_yz" class="verify-btn">{{time}}秒后重新获取</el-button>
          </el-form-item>
        </div>

        <div class = "form-Button">
          <el-form-item style = "width:100%;">
            <el-button type = "primary"  style = "margin-left:0px; width:100%;" :loading="loading" @click.native.prevent="handleLogin">登录</el-button>
          </el-form-item>
        </div>

      </el-form>
    </div>
  </div>

</template>

<script>
  const defaultForm = {
    mobile: '', // 手机号
    verificationCode: '' // 验证码
  }

  export default {
    metaInfo () {
      return {
        title: '用户登录|河南商丘市民康医院官网',
        meta: [
          {
            name: 'keywords',
            content: this.pageKeyWords
          },
          {
            name: 'description',
            content: this.pageDescription
          }
        ]
      }
    },
    name: 'login',
    data () {
      const validateMobile = (rule, value, callback) => {
        if (value.length < 1) {
          this.$message({
            message: '手机号需必填',
            type: 'error'
          })
          this.isEnabled = true
        } else {
          const reg = /^1[3|4|5|7|8][0-9]\d{8}$/
          if (reg.test(value)) {
            callback()
            this.isEnabled = false
          } else {
            this.isEnabled = true
            return callback(new Error('请输入正确格式的手机号'))
          }
        }
      }
      const validateSmsCode = (rule, value, callback) => {
        if (value.length < 1) {
          this.$message({
            message: '验证码需必传',
            type: 'error'
          })
        } else {
          callback()
        }
      }
      return {
        loading: false,
        postForm: Object.assign({}, defaultForm),
        is_dx_yz: true,
        time: 60,
        isEnabled: true,
        background: {
          position: 'absolute',
          top: '0px',
          left: '0px',
          width: '100%',
          height: 'auto',
          backgroundImage: 'url(' + require('../../assets/avator/index.jpg') + ')',
          backgroundSize: '100% 100%',
          backgroundRepeat: 'no-repeat'
        },
        rules: {
          mobile: [{ required: true, trigger: 'blur', validator: validateMobile }],
          verificationCode: [{ required: true, trigger: 'blur', validator: validateSmsCode }]
        },
        checked: false,
        pageKeyWords: '河南商丘市民康医院官网',
        pageDescription: '河南商丘市民康医院是二级甲等医院,是一家综合医院,商丘市各县区医疗救助保险定点医疗机构。'
      }
    },
    created () {
    },
    methods: {
      dx_yzm_bt () {
        this.is_dx_yz = false
        const dxDjs = setInterval(() => {
          if ((this.time--) <= 0) {
            this.time = 60
            this.is_dx_yz = true
            clearInterval(dxDjs)
          }
        }, 1000)
        this.$store.dispatch('sendMsg', this.postForm.mobile).then(data => {})
      },
      handleLogin () {
        this.$refs.postForm.validate(valid => {
          if (valid) {
            this.loading = true
            this.$store.dispatch('Login', this.postForm).then(() => {
              this.loading = false
              this.$router.push({ path: '/' })
            }).catch(() => {
              this.loading = false
            })
          } else {
            console.log('error submit!!')
            return false
          }
        })
      }
    },
    watch: {
      'postForm.mobile': function (val) {
        const reg = /^1[3|4|5|7|8][0-9]\d{8}$/
        if (reg.test(val) && val !== null && val !== '' && val.length === 11) {
          this.isEnabled = false
        } else {
          this.isEnabled = true
        }
      }
    }
  }
</script>




<style>
  .login-container {
    -webkit-border-radius: 5px;
    border-radius: 15px;
    -moz-border-radius: 5px;
    background-clip: padding-box;
    margin: 180px auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background: rgba(255,255,255,0.7);
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
  }
  .loginTitle {
    text-align: center;
    font-size: 26px;
    font-weight: 400;
    color: firebrick;
    margin: 0px auto 40px auto;
    font-weight: bold;
  }
  .form-mobile{
    width:100%;
    flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
  }
  .form-verificationCode{
    width:45% !important;
    flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
  }
  .verify-btn{
    width:50%;
    flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
  }
  label{
    width:70px;
    text-align:left;
  }


</style>
