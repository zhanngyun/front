webpackJsonp([6],{

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_register_vue__ = __webpack_require__(337);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_28432d80_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_register_vue__ = __webpack_require__(410);
function injectStyle (ssrContext) {
  __webpack_require__(408)
}
var normalizeComponent = __webpack_require__(3)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_register_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_28432d80_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_register_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 315:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "resources/client/assets/avator/index.jpg";

/***/ }),

/***/ 337:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

const defaultForm = {
  userName: '', // 姓名
  idCard: '', // 身份证
  age: '', // 年龄
  sex: '', // 性别
  area: '', // 省份
  mobile: ''
};

/* harmony default export */ __webpack_exports__["a"] = ({
  metaInfo() {
    return {
      title: this.pageTitle,
      meta: [{
        name: 'keywords',
        content: this.pageKeyWords
      }, {
        name: 'description',
        content: this.pageDescription
      }]
    };
  },
  name: 'login',
  data() {
    const validateidCard = (rule, value, callback) => {
      if (value.length < 1) {
        this.$message({
          message: '身份证没填',
          type: 'error'
        });
      } else {
        const reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
        if (reg.test(value)) {
          callback();
        } else {
          return callback(new Error('------------------请输入正确格式的身份证--------------------'));
        }
      }
    };
    const validateuserName = (rule, value, callback) => {
      if (value.length < 1) {
        this.$message({
          message: '姓名必须传',
          type: 'error'
        });
      } else {
        callback();
      }
    };
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
        backgroundImage: 'url(' + __webpack_require__(315) + ')',
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
    };
  },
  methods: {
    getAge: function (strBirthday) {
      var returnAge;
      const birthYear = strBirthday.slice(0, 4);
      const birthMonth = strBirthday.slice(4, 6);
      const birthDay = strBirthday.slice(6);
      const d = new Date();
      const nowYear = d.getFullYear();
      const nowMonth = d.getMonth() + 1;
      const nowDay = d.getDate();
      if (nowYear === birthYear) {
        returnAge = 0; // 同年 则为0岁
      } else {
        const ageDiff = nowYear - birthYear; // 年之差
        if (ageDiff > 0) {
          if (nowMonth === birthMonth) {
            const dayDiff = nowDay - birthDay; // 日之差
            if (dayDiff < 0) {
              returnAge = ageDiff - 1;
            } else {
              returnAge = ageDiff;
            }
          } else {
            const monthDiff = nowMonth - birthMonth; // 月之差
            if (monthDiff < 0) {
              returnAge = ageDiff - 1;
            } else {
              returnAge = ageDiff;
            }
          }
        } else {
          returnAge = -1; // 返回-1 表示出生日期输入错误 晚于今天
        }
      }
      return returnAge; // 返回周岁年龄
    },
    getSex: function (inputStr) {
      var sex;
      if (inputStr.length === 18) {
        sex = inputStr.charAt(16);
        if (sex % 2 === 0) {
          return '女';
        } else {
          return '男';
        }
      } else {
        sex = inputStr.charAt(14);
        if (sex % 2 === 0) {
          return '女';
        } else {
          return '男';
        }
      }
    },
    handlePerfect() {
      this.$refs.postForm.validate(valid => {
        if (valid) {
          this.loading = true;
          this.$store.dispatch('Perfect', this.postForm).then(() => {
            this.loading = false;
            this.$router.push({ path: '/' });
          }).catch(() => {
            this.loading = false;
          });
        } else {
          console.log('error submit!!');
          return false;
        }
      });
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
      };
      if (areas[parseInt(inputStr.substr(0, 2))] !== null) {
        return areas[parseInt(inputStr.substr(0, 2))];
      }
    }
  },
  watch: {
    'postForm.idCard': function (val) {
      if (this.reg.test(val) && val !== null && val !== '') {
        const inputStr = val.toString();
        const birthdayStr = val.slice(6, 14);
        this.postForm.sex = this.getSex(inputStr);
        this.postForm.age = this.getAge(birthdayStr);
        this.postForm.area = this.getArea(inputStr);
      }
    }
  }
});

/***/ }),

/***/ 408:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(409);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(279)("af3decf6", content, true);

/***/ }),

/***/ 409:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(24)(undefined);
// imports


// module
exports.push([module.i, ".register-container{border-radius:15px;-moz-border-radius:5px;background-clip:padding-box;margin:90px auto;width:450px;padding:35px 35px 15px;background:hsla(0,0%,100%,.7);border:1px solid #eaeaea;-webkit-box-shadow:0 0 25px #cac6c6;box-shadow:0 0 25px #cac6c6}.titleReg{text-align:center;font-size:26px;font-weight:400;color:#228b22;margin:0 auto 30px;font-weight:700}.formGroup{margin:10px auto}.form-age,.form-area,.form-idCard,.form-sex,.form-userName{width:82%;-webkit-box-flex:1;flex:1;-webkit-flex:1;-ms-flex:1}label{width:18%;text-align:left}", ""]);

// exports


/***/ }),

/***/ 410:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"background",style:(_vm.background)},[_c('div',{staticClass:"loginFrame"},[_c('el-form',{ref:"postForm",staticClass:"register-container",attrs:{"model":_vm.postForm,"rules":_vm.rules}},[_c('div',[_c('h3',{staticClass:"titleReg"},[_vm._v("完善信息")])]),_vm._v(" "),_c('div',{staticClass:"formGroup"},[_c('el-form-item',{attrs:{"label":"姓名","prop":"userName"}},[_c('el-input',{staticClass:"form-userName",attrs:{"type":"text","auto-complete":"off","placeholder":"请输入您的名称"},model:{value:(_vm.postForm.userName),callback:function ($$v) {_vm.$set(_vm.postForm, "userName", $$v)},expression:"postForm.userName"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"身份证","prop":"idCard"}},[_c('el-input',{staticClass:"form-idCard",attrs:{"type":"text","auto-complete":"off","placeholder":"请输入您的身份证"},model:{value:(_vm.postForm.idCard),callback:function ($$v) {_vm.$set(_vm.postForm, "idCard", $$v)},expression:"postForm.idCard"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"年龄","prop":"age"}},[_c('el-input',{staticClass:"form-age",attrs:{"type":"text","auto-complete":"off","disabled":true},model:{value:(_vm.postForm.age),callback:function ($$v) {_vm.$set(_vm.postForm, "age", $$v)},expression:"postForm.age"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"性别","prop":"sex"}},[_c('el-input',{staticClass:"form-sex",attrs:{"type":"text","auto-complete":"off","disabled":true},model:{value:(_vm.postForm.sex),callback:function ($$v) {_vm.$set(_vm.postForm, "sex", $$v)},expression:"postForm.sex"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"省份","prop":"area"}},[_c('el-input',{staticClass:"form-area",attrs:{"type":"text","auto-complete":"off","disabled":true},model:{value:(_vm.postForm.area),callback:function ($$v) {_vm.$set(_vm.postForm, "area", $$v)},expression:"postForm.area"}})],1)],1),_vm._v(" "),_c('div',{staticClass:"form-Button"},[_c('el-form-item',{staticStyle:{"width":"100%"}},[_c('el-button',{staticStyle:{"margin-left":"0px","width":"100%"},attrs:{"type":"primary","loading":_vm.loading},nativeOn:{"click":function($event){$event.preventDefault();_vm.handlePerfect($event)}}},[_vm._v("提交")])],1)],1)])],1)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

});