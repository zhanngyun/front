exports.ids = [11];
exports.modules = {

/***/ 182:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(223);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_508da002_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(271);
function injectStyle (ssrContext) {
var i
;(i=__webpack_require__(269),i.__inject__&&i.__inject__(ssrContext),i)
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
var __vue_module_identifier__ = "395c10be"
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_508da002_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

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

/* harmony default export */ __webpack_exports__["a"] = ({
  metaInfo() {
    return {
      title: '院内公告| 河南商丘市民康医院官网',
      meta: [{
        name: 'keywords',
        content: '河南商丘民康医院院内公告'
      }, {
        name: 'description',
        content: this.pageDescription
      }]
    };
  },
  name: 'dashboard',
  data() {
    return {
      list: this.$store.state.noticeList.records,
      total: 0,
      currentPage: 1,
      pageSize: 10,
      pageDescription: '河南商丘市民康医院是二级甲等医院,是一家综合医院,商丘市各县区医疗救助保险定点医疗机构。'
    };
  },
  computed: {
    layout: function () {
      if (this.$store.state.app.device !== 'mobile') {
        return 'total, sizes, prev, pager, next, jumper';
      } else {
        return 'sizes, prev, pager, next';
      }
    }
  },
  asyncData({ route, router, store }) {
    return _asyncToGenerator(function* () {
      yield store.dispatch('getNoticeList', { current: 1, size: 10 });
    })();
  },
  created() {
    if (typeof window !== 'undefined') {
      this.getNoticePage(1, 10);
    }
  },
  methods: {
    getNoticePage($v1, $v2) {
      const _that = this;
      this.$store.dispatch('getNoticeList', { current: $v1, size: $v2 }).then(data => {
        _that.list = _that.$store.state.noticeList.records;
        _that.total = _that.$store.state.noticeList.total;
      });
    },
    handleSizeChange(val) {
      this.pageSize = val;
      this.getNoticePage(1, val);
    },
    handleCurrentChange(val) {
      this.currentPage = val;
      this.getNoticePage(this.currentPage, this.pageSize);
    }
  }
});

/***/ }),

/***/ 269:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(270);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(177)
module.exports.__inject__ = function (context) {
  add("a0a98eee", content, true, context)
};

/***/ }),

/***/ 270:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)(undefined);
// imports


// module
exports.push([module.i, ".main{width:100%;margin-bottom:20px}.main,.main .title{text-align:center}.main .title span{display:block;height:80px;line-height:80px;font-size:24px;border-bottom:1px solid #015128}.main .list{width:80%;margin:0 auto}.main .list ul{margin-top:20px}.main .list ul li{list-style:circle outside none;height:40px;line-height:40px;font-size:14px;text-align:left;position:relative}.main .list ul li a{display:block;height:40px;line-height:40px;width:300px;float:left}.main .list ul li a:hover{color:#015128}.main .list ul li span{float:right;padding-right:30px}.main .list ul li .ellipsis{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block}.main .el-pagination{width:80%;margin:0 auto}.mobile .list ul li a{width:100px}.mobile .el-pagination{width:100%}", ""]);

// exports


/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('el-row',{staticClass:"clearfix"},[_c('el-col',{attrs:{"span":24}},[_c('div',{staticClass:"main"},[_c('div',{staticClass:"title"},[_c('span',[_vm._v("院内公告")])]),_vm._v(" "),_c('div',{staticClass:"list"},[_c('ul',_vm._l((_vm.list),function(item){return _c('li',{key:item.id},[_c('router-link',{staticClass:"ellipsis after",attrs:{"to":{path:'noticeDetail/' + item.id}}},[_vm._v(_vm._s(item.noticeTitle))]),_vm._v(" "),_c('span',[_vm._v(_vm._s(item.noticeCreateTime.substring(0,10)))])],1)}))]),_vm._v(" "),_c('div',{staticClass:"block"},[_c('el-pagination',{attrs:{"current-page":_vm.currentPage,"page-sizes":[5, 10, 20, 50],"page-size":10,"layout":_vm.layout,"total":_vm.total},on:{"size-change":_vm.handleSizeChange,"current-change":_vm.handleCurrentChange}})],1)])])],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

};;
//# sourceMappingURL=11.server-entry.js.map