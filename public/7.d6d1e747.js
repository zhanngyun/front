webpackJsonp([7],{

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_login_vue__ = __webpack_require__(236);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6f344b18_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_login_vue__ = __webpack_require__(307);
function injectStyle (ssrContext) {
  __webpack_require__(305)
}
var normalizeComponent = __webpack_require__(0)
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_login_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6f344b18_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_login_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 215:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "resources/client/assets/avator/index.jpg";

/***/ }),

/***/ 236:
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

const defaultForm = {
  mobile: '', // 手机号
  verificationCode: '' // 验证码
};

/* harmony default export */ __webpack_exports__["a"] = ({
  metaInfo() {
    return {
      title: '用户登录|河南商丘市民康医院官网',
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
    const validateMobile = (rule, value, callback) => {
      if (value.length < 1) {
        this.$message({
          message: '手机号需必填',
          type: 'error'
        });
        this.isEnabled = true;
      } else {
        const reg = /^1[3|4|5|7|8][0-9]\d{8}$/;
        if (reg.test(value)) {
          callback();
          this.isEnabled = false;
        } else {
          this.isEnabled = true;
          return callback(new Error('请输入正确格式的手机号'));
        }
      }
    };
    const validateSmsCode = (rule, value, callback) => {
      if (value.length < 1) {
        this.$message({
          message: '验证码需必传',
          type: 'error'
        });
      } else {
        callback();
      }
    };
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
        backgroundImage: 'url(' + __webpack_require__(215) + ')',
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
    };
  },
  created() {},
  methods: {
    dx_yzm_bt() {
      this.is_dx_yz = false;
      const dxDjs = setInterval(() => {
        if (this.time-- <= 0) {
          this.time = 60;
          this.is_dx_yz = true;
          clearInterval(dxDjs);
        }
      }, 1000);
      this.$store.dispatch('sendMsg', this.postForm.mobile).then(data => {});
    },
    handleLogin() {
      this.$refs.postForm.validate(valid => {
        if (valid) {
          this.loading = true;
          this.$store.dispatch('Login', this.postForm).then(() => {
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
    }
  },
  watch: {
    'postForm.mobile': function (val) {
      const reg = /^1[3|4|5|7|8][0-9]\d{8}$/;
      if (reg.test(val) && val !== null && val !== '' && val.length === 11) {
        this.isEnabled = false;
      } else {
        this.isEnabled = true;
      }
    }
  }
});

/***/ }),

/***/ 305:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(306);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(179)("27e0923a", content, true);

/***/ }),

/***/ 306:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)(undefined);
// imports


// module
exports.push([module.i, ".login-container{border-radius:15px;-moz-border-radius:5px;background-clip:padding-box;margin:180px auto;width:350px;padding:35px 35px 15px;background:hsla(0,0%,100%,.7);border:1px solid #eaeaea;-webkit-box-shadow:0 0 25px #cac6c6;box-shadow:0 0 25px #cac6c6}.loginTitle{text-align:center;font-size:26px;font-weight:400;color:#b22222;margin:0 auto 40px;font-weight:700}.form-mobile{width:100%}.form-mobile,.form-verificationCode{-webkit-box-flex:1;flex:1;-webkit-flex:1;-ms-flex:1}.form-verificationCode{width:45%!important}.verify-btn{width:50%;-webkit-box-flex:1;flex:1;-webkit-flex:1;-ms-flex:1}label{width:70px;text-align:left}", ""]);

// exports


/***/ }),

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"background",style:(_vm.background)},[_c('div',{staticClass:"loginFrame"},[_c('el-form',{ref:"postForm",staticClass:"login-container",attrs:{"model":_vm.postForm,"rules":_vm.rules}},[_c('div',[_c('h3',{staticClass:"loginTitle"},[_vm._v("用户登录")])]),_vm._v(" "),_c('div',{staticClass:"formGroup"},[_c('el-form-item',{attrs:{"prop":"mobile"}},[_c('el-input',{staticClass:"form-mobile",attrs:{"type":"text","auto-complete":"off","maxlength":"11","placeholder":"请输入您的手机号"},model:{value:(_vm.postForm.mobile),callback:function ($$v) {_vm.$set(_vm.postForm, "mobile", $$v)},expression:"postForm.mobile"}})],1),_vm._v(" "),_c('el-form-item',{staticClass:"form-inline",attrs:{"prop":"verificationCode"}},[_c('el-input',{staticClass:"form-verificationCode",attrs:{"type":"text","auto-complete":"off","maxlength":"6","placeholder":"请输入验证码"},model:{value:(_vm.postForm.verificationCode),callback:function ($$v) {_vm.$set(_vm.postForm, "verificationCode", $$v)},expression:"postForm.verificationCode"}}),_vm._v(" "),(_vm.is_dx_yz)?_c('el-button',{staticClass:"verify-btn",attrs:{"type":"warning","disabled":this.isEnabled},on:{"click":_vm.dx_yzm_bt}},[_vm._v("获取验证码")]):_vm._e(),_vm._v(" "),(!_vm.is_dx_yz)?_c('el-button',{staticClass:"verify-btn",attrs:{"type":"warning","size":"small"}},[_vm._v(_vm._s(_vm.time)+"秒后重新获取")]):_vm._e()],1)],1),_vm._v(" "),_c('div',{staticClass:"form-Button"},[_c('el-form-item',{staticStyle:{"width":"100%"}},[_c('el-button',{staticStyle:{"margin-left":"0px","width":"100%"},attrs:{"type":"primary","loading":_vm.loading},nativeOn:{"click":function($event){$event.preventDefault();_vm.handleLogin($event)}}},[_vm._v("登录")])],1)],1)])],1)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

});