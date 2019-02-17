<template>
  <!--背景图-->
  <div class = "background" :style = "background">

    <!--login框，表单+tab标签页的组合-->
    <div class = "loginFrame">

      <!--表单组件放在外面，标签栏在里面-->
      <el-form ref = "postForm" :model = "postForm"  :rules = "rules"  class = "register-container">

        <!-- 注册标题 -->
        <div>
          <h3 class="titleReg">完善信息</h3>
        </div>

        <div class = "formGroup">
          <el-form-item  label="姓名" prop = "userName" >
            <el-input type = "text"  auto-complete = "off" v-model="postForm.userName" placeholder = "请输入您的名称" class = "form-userName" ></el-input>
          </el-form-item>
          <el-form-item  label="身份证" prop = "idCard" >
            <el-input type = "text"  auto-complete = "off" v-model="postForm.idCard"  placeholder = "请输入您的身份证" class = "form-idCard" ></el-input>
          </el-form-item>
          <el-form-item  label="年龄" prop = "age" >
            <el-input type = "text"  auto-complete = "off" v-model="postForm.age" :disabled="true" class = "form-age" ></el-input>
          </el-form-item>
          <el-form-item  label="性别" prop = "sex" >
            <el-input type = "text"  auto-complete = "off" v-model="postForm.sex" :disabled="true" class = "form-sex" ></el-input>
          </el-form-item>
          <el-form-item  label="省份" prop = "area" >
            <el-input type = "text"  auto-complete = "off" v-model="postForm.area" :disabled="true" class = "form-area" ></el-input>
          </el-form-item>
        </div>

        <div class = "form-Button">
          <el-form-item style = "width:100%;">
            <el-button type = "primary"  style = "margin-left:0px; width:100%;" :loading="loading" @click.native.prevent="handlePerfect">提交</el-button>
          </el-form-item>
        </div>

      </el-form>
    </div>
  </div>

</template>

<script>
  const defaultForm = {
    userName: '', // 姓名
    idCard: '', // 身份证
    age: '', // 年龄
    sex: '', // 性别
    area: '', // 省份
    mobile: ''
  }

  export default {
    metaInfo () {
      return {
        title: this.pageTitle,
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
      const validateidCard = (rule, value, callback) => {
        if (value.length < 1) {
          this.$message({
            message: '身份证没填',
            type: 'error'
          })
        } else {
          const reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/
          if (reg.test(value)) {
            callback()
          } else {
            return callback(new Error('------------------请输入正确格式的身份证--------------------'))
          }
        }
      }
      const validateuserName = (rule, value, callback) => {
        if (value.length < 1) {
          this.$message({
            message: '姓名必须传',
            type: 'error'
          })
        } else {
          callback()
        }
      }
      return {
        loading: false,
        postForm: Object.assign({}, defaultForm),
        reg: /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/,
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
          userName: [{ required: true, trigger: 'blur', validator: validateuserName }],
          idCard: [{ required: true, trigger: 'blur', validator: validateidCard }]
        },
        checked: false,
        pageTitle: '完善信息|河南商丘市民康医院官网',
        pageKeyWords: '河南商丘市民康医院官网信息完善',
        pageDescription: '河南商丘市民康医院是二级甲等医院,是一家综合医院,商丘市各县区医疗救助保险定点医疗机构。'
      }
    },
    methods: {
      getAge: function (strBirthday) {
        var returnAge
        const birthYear = strBirthday.slice(0, 4)
        const birthMonth = strBirthday.slice(4, 6)
        const birthDay = strBirthday.slice(6)
        const d = new Date()
        const nowYear = d.getFullYear()
        const nowMonth = d.getMonth() + 1
        const nowDay = d.getDate()
        if (nowYear === birthYear) {
          returnAge = 0 // 同年 则为0岁
        } else {
          const ageDiff = nowYear - birthYear // 年之差
          if (ageDiff > 0) {
            if (nowMonth === birthMonth) {
              const dayDiff = nowDay - birthDay // 日之差
              if (dayDiff < 0) {
                returnAge = ageDiff - 1
              } else {
                returnAge = ageDiff
              }
            } else {
              const monthDiff = nowMonth - birthMonth // 月之差
              if (monthDiff < 0) {
                returnAge = ageDiff - 1
              } else {
                returnAge = ageDiff
              }
            }
          } else {
            returnAge = -1 // 返回-1 表示出生日期输入错误 晚于今天
          }
        }
        return returnAge // 返回周岁年龄
      },
      getSex: function (inputStr) {
        var sex
        if (inputStr.length === 18) {
          sex = inputStr.charAt(16)
          if (sex % 2 === 0) {
            return '女'
          } else {
            return '男'
          }
        } else {
          sex = inputStr.charAt(14)
          if (sex % 2 === 0) {
            return '女'
          } else {
            return '男'
          }
        }
      },
      handlePerfect () {
        this.$refs.postForm.validate(valid => {
          if (valid) {
            this.loading = true
            this.$store.dispatch('Perfect', this.postForm).then(() => {
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
      },
      getArea: function (inputStr) {
        const areas = {
          11: '北京',
          12: '天津',
          13: '河北',
          14: '山西',
          15: '内蒙古',
          21: '辽宁',
          22: '吉林',
          23: '黑龙江',
          31: '上海',
          32: '江苏',
          33: '浙江',
          34: '安徽',
          35: '福建',
          36: '江西',
          37: '山东',
          41: '河南',
          42: '湖北',
          43: '湖南',
          44: '广东',
          45: '广西',
          46: '海南',
          50: '重庆',
          51: '四川',
          52: '贵州',
          53: '云南',
          54: '西藏',
          61: '陕西',
          62: '甘肃',
          63: '青海',
          64: '宁夏',
          65: '新疆',
          71: '台湾',
          81: '香港',
          82: '澳门',
          91: '国外'
        }
        if (areas[parseInt(inputStr.substr(0, 2))] !== null) {
          return areas[parseInt(inputStr.substr(0, 2))]
        }
      }
    },
    watch: {
      'postForm.idCard': function (val) {
        if (this.reg.test(val) && val !== null && val !== '') {
          const inputStr = val.toString()
          const birthdayStr = val.slice(6, 14)
          this.postForm.sex = this.getSex(inputStr)
          this.postForm.age = this.getAge(birthdayStr)
          this.postForm.area = this.getArea(inputStr)
        }
      }
    }
  }
</script>




<style>
  .register-container {
    -webkit-border-radius: 5px;
    border-radius: 15px;
    -moz-border-radius: 5px;
    background-clip: padding-box;
    margin: 90px auto;
    width: 450px;
    padding: 35px 35px 15px 35px;
    background: rgba(255,255,255,0.7);
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
  }
  .titleReg {
    text-align: center;
    font-size: 26px;
    font-weight: 400;
    color: forestgreen;
    margin: 0px auto 30px auto;
    font-weight: bold;
  }
  .formGroup{
    margin: 10px auto;
  }
  .form-userName{
    width:82%;
    flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
  }
  .form-idCard{
    width:82%;
    flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
  }
  .form-age{
    width:82%;
    flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
  }
  .form-sex{
    width:82%;
    flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
  }
  .form-area{
    width:82%;
    flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
  }
  label{
    width:18%;
    text-align:left;
  }


</style>
