(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/Register.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/Register.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      name: null,
      email: null,
      phone: null,
      password: null,
      repassword: null,
      errorMessages: '',
      role: '',
      roles: []
    };
  },
  created: function created() {},
  methods: {
    Register: function Register() {
      axios.post('api/register', {
        name: this.name,
        email: this.email,
        password: this.password
      }).then(function (res) {
        window.location.href = 'login';
      })["catch"](function (error) {
        console.log(error);
      });
    },
    CheckPassword: function CheckPassword(event) {
      if (this.repassword != this.password) {
        alert('Invalid credentials!');
        return;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/Register.vue?vue&type=template&id=62ff28b9&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/Register.vue?vue&type=template&id=62ff28b9& ***!
  \*****************************************************************************************************************************************************************************************************************/
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
    {
      staticClass: "container",
      staticStyle: { position: "relative", top: "10%" },
    },
    [
      _c(
        "center",
        [
          _c(
            "v-card",
            { attrs: { "max-width": "500" } },
            [
              _c(
                "v-container",
                {
                  staticClass: "text-xs-center",
                  staticStyle: { position: "relative", top: "5%" },
                },
                [
                  _c(
                    "v-form",
                    [
                      _c(
                        "center",
                        [
                          _c(
                            "h1",
                            {
                              staticClass: "mt-10 mb-5",
                              staticStyle: { color: "teal" },
                            },
                            [_vm._v("Sign Up")]
                          ),
                          _vm._v(" "),
                          _c("v-text-field", {
                            attrs: {
                              outlined: "",
                              name: "Name",
                              label: "Name",
                              rules: [
                                function () {
                                  return !!_vm.name || "This field is required"
                                },
                              ],
                              "error-messages": _vm.errorMessages,
                              required: "",
                            },
                            model: {
                              value: _vm.name,
                              callback: function ($$v) {
                                _vm.name = $$v
                              },
                              expression: "name",
                            },
                          }),
                          _vm._v(" "),
                          _c("v-text-field", {
                            attrs: {
                              outlined: "",
                              name: "Email",
                              label: "Email",
                              rules: [
                                function () {
                                  return !!_vm.email || "This field is required"
                                },
                              ],
                              "error-messages": _vm.errorMessages,
                              required: "",
                            },
                            model: {
                              value: _vm.email,
                              callback: function ($$v) {
                                _vm.email = $$v
                              },
                              expression: "email",
                            },
                          }),
                          _vm._v(" "),
                          _c("v-text-field", {
                            attrs: {
                              id: "password",
                              name: "Password",
                              outlined: "",
                              rules: [
                                function () {
                                  return (
                                    !!_vm.password || "This field is required"
                                  )
                                },
                              ],
                              "error-messages": _vm.errorMessages,
                              label: "Password",
                              type: "password",
                              required: "",
                            },
                            model: {
                              value: _vm.password,
                              callback: function ($$v) {
                                _vm.password = $$v
                              },
                              expression: "password",
                            },
                          }),
                          _vm._v(" "),
                          _c("v-text-field", {
                            attrs: {
                              id: "password",
                              rules: [
                                function () {
                                  return (
                                    !!_vm.repassword || "This field is required"
                                  )
                                },
                              ],
                              "error-messages": _vm.errorMessages,
                              name: "RePassword",
                              outlined: "",
                              label: "Re-enter Password",
                              type: "password",
                            },
                            on: { blur: _vm.CheckPassword },
                            model: {
                              value: _vm.repassword,
                              callback: function ($$v) {
                                _vm.repassword = $$v
                              },
                              expression: "repassword",
                            },
                          }),
                          _vm._v(" "),
                          _c(
                            "v-card-actions",
                            [
                              _c(
                                "v-btn",
                                {
                                  staticClass: "mb-10",
                                  staticStyle: { color: "white" },
                                  attrs: {
                                    primary: "",
                                    large: "",
                                    block: "",
                                    color: "teal",
                                  },
                                  on: {
                                    click: function ($event) {
                                      return _vm.Register()
                                    },
                                  },
                                },
                                [_vm._v("Create Account")]
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

/***/ "./resources/js/components/pages/Register.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/pages/Register.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Register_vue_vue_type_template_id_62ff28b9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Register.vue?vue&type=template&id=62ff28b9& */ "./resources/js/components/pages/Register.vue?vue&type=template&id=62ff28b9&");
/* harmony import */ var _Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Register.vue?vue&type=script&lang=js& */ "./resources/js/components/pages/Register.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Register_vue_vue_type_template_id_62ff28b9___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Register_vue_vue_type_template_id_62ff28b9___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pages/Register.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/pages/Register.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/pages/Register.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Register.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/Register.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/pages/Register.vue?vue&type=template&id=62ff28b9&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/pages/Register.vue?vue&type=template&id=62ff28b9& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_62ff28b9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Register.vue?vue&type=template&id=62ff28b9& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/Register.vue?vue&type=template&id=62ff28b9&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_62ff28b9___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_62ff28b9___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);