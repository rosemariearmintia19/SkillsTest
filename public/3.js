(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/Home.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/pages/Home.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      dialog: false,
      product_list: {},
      qty: 0,
      Name: null,
      product_details: {},
      count: 1
    };
  },
  created: function created() {
    this.GetProducts();
  },
  methods: {
    Order: function Order(product_id) {
      var _this = this;

      this.user = JSON.parse(localStorage.getItem('user'));
      axios.post('api/order', {
        ProductId: product_id,
        Qty: this.qty,
        OrderBy: this.user.account_id
      }).then(function (res) {
        _this.GetProducts();

        _this.dialog = false;
      });
    },
    ShowProduct: function ShowProduct(ProductId) {
      var _this2 = this;

      this.dialog = true;
      axios.post('api/getproduct', {
        ProductId: ProductId
      }).then(function (res) {
        _this2.product_details = res.data;
        _this2.Counter = res.data.length;
      });
    },
    GetProducts: function GetProducts(category_id) {
      var _this3 = this;

      axios.get('api/products').then(function (res) {
        _this3.product_list = res.data;
        _this3.Counter = res.data.length;
      });
    },
    close: function close() {
      var _this4 = this;

      this.dialog = false;
      this.$nextTick(function () {
        _this4.editedItem = Object.assign({}, _this4.defaultItem);
        _this4.editedIndex = -1;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/Home.vue?vue&type=style&index=0&id=4592b1a9&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/pages/Home.vue?vue&type=style&index=0&id=4592b1a9&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.a[data-v-4592b1a9]:hover {\r\n    cursor: pointer;\r\n    color: #26c6da\n}\np[data-v-4592b1a9] {\r\n    font-family: Trebuchet MS\n}\n.red[data-v-4592b1a9] {\r\n    background-color: red;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/Home.vue?vue&type=style&index=0&id=4592b1a9&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/pages/Home.vue?vue&type=style&index=0&id=4592b1a9&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=style&index=0&id=4592b1a9&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/Home.vue?vue&type=style&index=0&id=4592b1a9&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/Home.vue?vue&type=template&id=4592b1a9&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/pages/Home.vue?vue&type=template&id=4592b1a9&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "container-fluid" },
    [
      _c(
        "div",
        [
          _c(
            "v-toolbar",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.Counter > 0,
                  expression: "Counter > 0",
                },
              ],
              attrs: { light: "", extended: "", height: "4" },
            },
            [
              _c(
                "v-toolbar-title",
                {
                  staticClass: "dark--text mt-10",
                  staticStyle: { "font-family": "Trebuchet MS" },
                },
                [
                  _vm._v(
                    "\r\n                " +
                      _vm._s(_vm.Name) +
                      "\r\n            "
                  ),
                ]
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-row",
            _vm._l(_vm.product_list, function (list) {
              return _c(
                "v-col",
                {
                  key: list.product_id,
                  staticClass: "mt-10",
                  attrs: { cols: "3" },
                },
                [
                  _c(
                    "v-card",
                    { staticClass: "mt-10", attrs: { "max-width": "400" } },
                    [
                      _c(
                        "v-img",
                        {
                          staticClass: "white--text align-end mt-10",
                          attrs: {
                            height: "200px",
                            src: "images/30ml_alcoholder.jpg",
                          },
                        },
                        [_c("v-card-title", [_vm._v(_vm._s(list.Name))])],
                        1
                      ),
                      _vm._v(" "),
                      _c("v-card-subtitle", { staticClass: "pb-0" }, [
                        _vm._v(
                          "\r\n                      Available Stock: " +
                            _vm._s(list.stock) +
                            " Pcs\r\n                    "
                        ),
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-card-actions",
                        [
                          _c(
                            "v-btn",
                            {
                              attrs: { color: "#7EABA8", text: "" },
                              on: {
                                click: function ($event) {
                                  return _vm.ShowProduct(list.ProductId)
                                },
                              },
                            },
                            [
                              _vm._v(
                                "\r\n                            Order\r\n                        "
                              ),
                            ]
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                ],
                1
              )
            }),
            1
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-dialog",
        {
          attrs: { "max-width": "800px" },
          model: {
            value: _vm.dialog,
            callback: function ($$v) {
              _vm.dialog = $$v
            },
            expression: "dialog",
          },
        },
        [
          _c(
            "v-card",
            [
              _c(
                "v-card-text",
                [
                  _c(
                    "v-container",
                    _vm._l(_vm.product_details, function (detail) {
                      return _c(
                        "v-row",
                        { key: detail.ProductId },
                        [
                          _c(
                            "v-col",
                            { attrs: { "cols-3": "" } },
                            [
                              _c(
                                "v-card",
                                {
                                  staticClass: "mx-auto mt-10",
                                  attrs: {
                                    color: "white",
                                    dark: "",
                                    "max-width": "400",
                                  },
                                },
                                [
                                  _c(
                                    "v-card-text",
                                    { staticClass: "text-h5 font-weight-bold" },
                                    [
                                      _c("v-img", {
                                        attrs: {
                                          src: "images/30ml_alcoholder.jpg",
                                          eager: "",
                                          dense: "",
                                        },
                                      }),
                                    ],
                                    1
                                  ),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("v-col", { attrs: { "cols-9": "" } }, [
                            _c("div", { staticClass: "mt-10" }, [
                              _c("span", [_vm._v("Product Description:")]),
                              _c("br"),
                              _vm._v(" "),
                              _c("div", { staticClass: "mt-5" }, [
                                _c("p", [
                                  _vm._v(
                                    "\r\n                                         Stay safe with our alcohol holder. Made in genuine leather, silver key hook and key ring. 30ml bottle spray is included!\r\n                                    "
                                  ),
                                ]),
                              ]),
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "mt-10" }, [
                              _c("span", [_vm._v("Quantity:")]),
                              _c("br"),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "mt-5" },
                                [
                                  _c("v-text-field", {
                                    staticStyle: { "text-align": "center" },
                                    attrs: { type: "text" },
                                    model: {
                                      value: _vm.qty,
                                      callback: function ($$v) {
                                        _vm.qty = $$v
                                      },
                                      expression: "qty",
                                    },
                                  }),
                                ],
                                1
                              ),
                            ]),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "mt-9" },
                              [
                                _c(
                                  "v-btn",
                                  {
                                    staticClass: "form-control",
                                    attrs: { outlined: "", color: "green" },
                                    on: {
                                      click: function ($event) {
                                        return _vm.Order(detail.ProductId)
                                      },
                                    },
                                  },
                                  [
                                    _c("v-icon", [_vm._v("mdi-cart-plus")]),
                                    _vm._v(
                                      " Place Order\r\n                                "
                                    ),
                                  ],
                                  1
                                ),
                              ],
                              1
                            ),
                          ]),
                        ],
                        1
                      )
                    }),
                    1
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-card-actions",
                [
                  _c("v-spacer"),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { color: "teal darken-1", text: "" },
                      on: { click: _vm.close },
                    },
                    [
                      _vm._v(
                        "\r\n                    Cancel\r\n                "
                      ),
                    ]
                  ),
                ],
                1
              ),
            ],
            1
          ),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/pages/Home.vue":
/*!*******************************************!*\
  !*** ./resources/js/views/pages/Home.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Home_vue_vue_type_template_id_4592b1a9_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home.vue?vue&type=template&id=4592b1a9&scoped=true& */ "./resources/js/views/pages/Home.vue?vue&type=template&id=4592b1a9&scoped=true&");
/* harmony import */ var _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home.vue?vue&type=script&lang=js& */ "./resources/js/views/pages/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Home_vue_vue_type_style_index_0_id_4592b1a9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Home.vue?vue&type=style&index=0&id=4592b1a9&scoped=true&lang=css& */ "./resources/js/views/pages/Home.vue?vue&type=style&index=0&id=4592b1a9&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Home_vue_vue_type_template_id_4592b1a9_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Home_vue_vue_type_template_id_4592b1a9_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "4592b1a9",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/pages/Home.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/pages/Home.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/views/pages/Home.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/pages/Home.vue?vue&type=style&index=0&id=4592b1a9&scoped=true&lang=css&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/views/pages/Home.vue?vue&type=style&index=0&id=4592b1a9&scoped=true&lang=css& ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_4592b1a9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=style&index=0&id=4592b1a9&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/Home.vue?vue&type=style&index=0&id=4592b1a9&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_4592b1a9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_4592b1a9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_4592b1a9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_4592b1a9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/views/pages/Home.vue?vue&type=template&id=4592b1a9&scoped=true&":
/*!**************************************************************************************!*\
  !*** ./resources/js/views/pages/Home.vue?vue&type=template&id=4592b1a9&scoped=true& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_4592b1a9_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=template&id=4592b1a9&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/Home.vue?vue&type=template&id=4592b1a9&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_4592b1a9_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_4592b1a9_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);