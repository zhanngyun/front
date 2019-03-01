exports.ids = [10];
exports.modules = {

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(233);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_72520b09_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(302);
function injectStyle (ssrContext) {
var i
;(i=__webpack_require__(299),i.__inject__&&i.__inject__(ssrContext),i)
}
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-72520b09"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = "050e18fe"
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_72520b09_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 233:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_index__ = __webpack_require__(301);
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
  filters: {
    parseTime: function (val) {
      return Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["a" /* parseTime */])(val);
    }
  },
  methods: {
    getList() {
      this.listLoading = true;
      this.$store.dispatch('getOrderListByUserId', this.listQuery).then(data => {
        this.listLoading = false;
        this.total = data.total;
        this.tableData = data.records;
      }).catch(() => {
        this.listLoading = false;
      });
    },
    handleCurrentChange(val) {
      this.listQuery.current = val;
      this.getList();
    },
    handleSizeChange(val) {
      this.listQuery.size = val;
      this.getList();
    },
    handleClick(row) {
      this.$confirm('是否取消预约 ' + row.id + '  ?', '提示', { type: 'warning' }).then(() => {
        this.$store.dispatch('cancelOrdering', { orderId: row.id, userId: this.listQuery.userId }).then(data => {
          this.$notify({
            title: '成功',
            message: '取消预约成功',
            type: 'success',
            duration: 2000
          });
          this.getList();
        });
      }).catch(() => {
        this.$message.info('已取消操作!');
      });
    }
  },
  data() {
    return {
      total: 0,
      listLoading: true,
      listQuery: {
        current: 1,
        size: 10,
        userId: ''
      },
      tableData: [],
      pageTitle: '预约|河南商丘市民康医院官网',
      pageKeyWords: '河南商丘市民康医院官网',
      pageDescription: '河南商丘市民康医院是二级甲等医院,是一家综合医院,商丘市各县区医疗救助保险定点医疗机构。'
    };
  },
  created() {
    const that = this;
    if (typeof window !== 'undefined') {
      this.common.getUserInfo(this);
      if (that.$store.state.userInfo === '' || typeof that.$store.state.userInfo === 'undefined') {
        that.$message({
          message: '请先登录在进行操作',
          type: 'warning',
          duration: 2 * 1000,
          onClose() {
            const href = window.location.href;
            window.location.replace(href.substring(0, href.indexOf('/')) + '/login');
          }
        });
      } else {
        this.listQuery.userId = that.$store.state.userInfo.id;
        this.getList();
      }
    }
  }
});

/***/ }),

/***/ 299:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(300);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(177)
module.exports.__inject__ = function (context) {
  add("786aceb7", content, true, context)
};

/***/ }),

/***/ 300:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)(undefined);
// imports


// module
exports.push([module.i, ".demo-table-expand[data-v-72520b09]{font-size:0}.demo-table-expand label[data-v-72520b09]{width:120px!important;color:#99a9bf!important}.demo-table-expand .el-form-item[data-v-72520b09]{margin-right:0;margin-bottom:0;width:100%}", ""]);

// exports


/***/ }),

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = parseTime;
/* unused harmony export formatTime */
/**
 * Created by jiachenpan on 16/11/18.
 */

function parseTime(time, cFormat) {
  if (arguments.length === 0) {
    return null;
  }
  const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}';
  let date;
  if (typeof time === 'object') {
    date = time;
  } else {
    if (('' + time).length === 10) time = parseInt(time) * 1000;
    date = new Date(time);
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  };
  const timeStr = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
    let value = formatObj[key];
    if (key === 'a') return ['一', '二', '三', '四', '五', '六', '日'][value - 1];
    if (result.length > 0 && value < 10) {
      value = '0' + value;
    }
    return value || 0;
  });
  return timeStr;
}

function formatTime(time, option) {
  time = +time * 1000;
  const d = new Date(time);
  const now = Date.now();

  const diff = (now - d) / 1000;

  if (diff < 30) {
    return '刚刚';
  } else if (diff < 3600) {
    // less 1 hour
    return Math.ceil(diff / 60) + '分钟前';
  } else if (diff < 3600 * 24) {
    return Math.ceil(diff / 3600) + '小时前';
  } else if (diff < 3600 * 24 * 2) {
    return '1天前';
  }
  if (option) {
    return parseTime(time, option);
  } else {
    return d.getMonth() + 1 + '月' + d.getDate() + '日' + d.getHours() + '时' + d.getMinutes() + '分';
  }
}

/***/ }),

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('el-table',{directives:[{name:"loading",rawName:"v-loading.body",value:(_vm.listLoading),expression:"listLoading",modifiers:{"body":true}}],staticStyle:{"width":"100%"},attrs:{"data":_vm.tableData,"element-loading-text":"给我一点时间","border":"","fit":"","highlight-current-row":""}},[_c('el-table-column',{attrs:{"type":"expand"},scopedSlots:_vm._u([{key:"default",fn:function(props){return [_c('el-form',{staticClass:"demo-table-expand",attrs:{"label-position":"left","inline":""}},[_c('el-form-item',{attrs:{"label":"预约编号"}},[_c('span',[_vm._v(_vm._s(props.row.id))])]),_vm._v(" "),_c('el-form-item',{attrs:{"label":"姓名"}},[_c('span',[_vm._v(_vm._s(props.row.userName))])]),_vm._v(" "),_c('el-form-item',{attrs:{"label":"预约时间"}},[_c('span',[_vm._v(_vm._s(props.row.orderTime))])]),_vm._v(" "),_c('el-form-item',{attrs:{"label":"医生"}},[_c('span',[_vm._v(_vm._s(props.row.doctorName))])]),_vm._v(" "),_c('el-form-item',{attrs:{"label":"预约状态"}},[_c('span',[_vm._v(_vm._s(props.row.orderStatus === '1' ? '成功预约':'已取消'))])]),_vm._v(" "),_c('el-form-item',{attrs:{"label":"操作时间"}},[_c('span',[_vm._v(_vm._s(_vm._f("parseTime")(props.row.createTime)))])])],1)]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"id","label":"编号","align":"center"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"orderTime","label":"预约时间","align":"center"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"doctorName","label":"医生","align":"center"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('router-link',{attrs:{"to":'/doctorInfo/' + scope.row.doctorId}},[_c('el-button',{attrs:{"type":"primary"}},[_vm._v(_vm._s(scope.row.doctorName))])],1)]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"预约状态","align":"center"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('span',[_vm._v(_vm._s(scope.row.orderStatus === '1' ? '成功预约':scope.row.orderStatus === '3' ? '已失效':'已取消'))])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"操作","align":"center"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-button',{attrs:{"size":"small","type":scope.row.orderStatus === '1' ? 'danger' : 'info',"disabled":scope.row.orderStatus !== '1'},on:{"click":function($event){_vm.handleClick(scope.row)}}},[_vm._v("取消预约")])]}}])})],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"pagination-container\" data-v-72520b09>","</div>",[_c('el-pagination',{attrs:{"background":"","current-page":_vm.listQuery.current,"page-sizes":[10,20,30, 50],"page-size":_vm.listQuery.size,"layout":"total, sizes, prev, pager, next","total":_vm.total},on:{"size-change":_vm.handleSizeChange,"current-change":_vm.handleCurrentChange}})],1)],2)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

};;
//# sourceMappingURL=10.server-entry.js.map