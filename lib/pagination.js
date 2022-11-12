/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["cong-ui"] = factory();
	else
		root["cong-ui"] = factory();
})(self, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./components/lib/pagination/index.js":
/*!********************************************!*\
  !*** ./components/lib/pagination/index.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _src_main_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/main.vue */ \"./components/lib/pagination/src/main.vue\");\n\r\n_src_main_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].install = function (Vue) {\r\n  Vue.component(_src_main_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].name, _src_main_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_src_main_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack://cong-ui/./components/lib/pagination/index.js?");

/***/ }),

/***/ "./components/lib/pagination/src/main.vue":
/*!************************************************!*\
  !*** ./components/lib/pagination/src/main.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _main_vue_vue_type_template_id_03e6c338_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.vue?vue&type=template&id=03e6c338&scoped=true& */ \"./components/lib/pagination/src/main.vue?vue&type=template&id=03e6c338&scoped=true&\");\n/* harmony import */ var _main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main.vue?vue&type=script&lang=js& */ \"./components/lib/pagination/src/main.vue?vue&type=script&lang=js&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n;\nvar component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _main_vue_vue_type_template_id_03e6c338_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,\n  _main_vue_vue_type_template_id_03e6c338_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,\n  false,\n  null,\n  \"03e6c338\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"components/lib/pagination/src/main.vue\"\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);\n\n//# sourceURL=webpack://cong-ui/./components/lib/pagination/src/main.vue?");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js??vue-loader-options!./components/lib/pagination/src/main.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/index.js??vue-loader-options!./components/lib/pagination/src/main.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\r\n    /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\r\n        name: \"c-pager\",\r\n        data() {\r\n            return {\r\n                itemList: [],\r\n                activeIndex: 0\r\n            }\r\n        },\r\n        props: {\r\n            pagesize: {\r\n                type: Number,\r\n                default: 10\r\n            },\r\n            total: {\r\n                type: Number,\r\n                default: 100\r\n            }\r\n        },\r\n        created() {\r\n            let length = Math.ceil(this.total / this.pagesize)\r\n            for(let i = 1; i <= length; i++) {\r\n                this.itemList.push(i)\r\n            }\r\n        },\r\n        methods: {\r\n            addPage() {\r\n                let activePage = this.activeIndex + 1, length = this.total / this.pagesize\r\n                if(activePage + 1 <= length) {\r\n                    this.activeIndex ++\r\n                }\r\n            },\r\n            delPage() {\r\n                let activePage = this.activeIndex + 1\r\n                if(activePage - 1 >= 1) {\r\n                    this.activeIndex --\r\n                }\r\n            },\r\n        },\r\n        watch: {\r\n            activeIndex: {\r\n                handler(newVal, oldVal) {\r\n                    this.$emit('current-change', newVal, oldVal)\r\n                },\r\n                immediate:true\r\n            }\r\n        }\r\n    });\r\n\n\n//# sourceURL=webpack://cong-ui/./components/lib/pagination/src/main.vue?./node_modules/vue-loader/lib/index.js??vue-loader-options");

/***/ }),

/***/ "./components/lib/pagination/src/main.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./components/lib/pagination/src/main.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./main.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js??vue-loader-options!./components/lib/pagination/src/main.vue?vue&type=script&lang=js&\");\n /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack://cong-ui/./components/lib/pagination/src/main.vue?");

/***/ }),

/***/ "./components/lib/pagination/src/main.vue?vue&type=template&id=03e6c338&scoped=true&":
/*!*******************************************************************************************!*\
  !*** ./components/lib/pagination/src/main.vue?vue&type=template&id=03e6c338&scoped=true& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_template_id_03e6c338_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),\n/* harmony export */   \"staticRenderFns\": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_template_id_03e6c338_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)\n/* harmony export */ });\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_template_id_03e6c338_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./main.vue?vue&type=template&id=03e6c338&scoped=true& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./components/lib/pagination/src/main.vue?vue&type=template&id=03e6c338&scoped=true&\");\n\n\n//# sourceURL=webpack://cong-ui/./components/lib/pagination/src/main.vue?");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./components/lib/pagination/src/main.vue?vue&type=template&id=03e6c338&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./components/lib/pagination/src/main.vue?vue&type=template&id=03e6c338&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": () => (/* binding */ render),\n/* harmony export */   \"staticRenderFns\": () => (/* binding */ staticRenderFns)\n/* harmony export */ });\nvar render = function () {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"ul\",\n    { staticClass: \"pag\" },\n    [\n      _c(\"li\", { staticClass: \"pag-item\", on: { click: _vm.delPage } }, [\n        _vm._v(\"<\"),\n      ]),\n      _vm._v(\" \"),\n      _vm._l(_vm.itemList, function (item, index) {\n        return _c(\n          \"li\",\n          {\n            key: index,\n            staticClass: \"pag-item\",\n            class: { active: _vm.activeIndex === index },\n            on: {\n              click: function ($event) {\n                _vm.activeIndex = index\n              },\n            },\n          },\n          [_vm._v(\"\\n       \" + _vm._s(item) + \"\\n    \")]\n        )\n      }),\n      _vm._v(\" \"),\n      _c(\"li\", { staticClass: \"pag-item\", on: { click: _vm.addPage } }, [\n        _vm._v(\">\"),\n      ]),\n    ],\n    2\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack://cong-ui/./components/lib/pagination/src/main.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ normalizeComponent)\n/* harmony export */ });\n/* globals __VUE_SSR_CONTEXT__ */\n\n// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).\n// This module is a runtime utility for cleaner component module output and will\n// be included in the final webpack user bundle.\n\nfunction normalizeComponent (\n  scriptExports,\n  render,\n  staticRenderFns,\n  functionalTemplate,\n  injectStyles,\n  scopeId,\n  moduleIdentifier, /* server only */\n  shadowMode /* vue-cli only */\n) {\n  // Vue.extend constructor export interop\n  var options = typeof scriptExports === 'function'\n    ? scriptExports.options\n    : scriptExports\n\n  // render functions\n  if (render) {\n    options.render = render\n    options.staticRenderFns = staticRenderFns\n    options._compiled = true\n  }\n\n  // functional template\n  if (functionalTemplate) {\n    options.functional = true\n  }\n\n  // scopedId\n  if (scopeId) {\n    options._scopeId = 'data-v-' + scopeId\n  }\n\n  var hook\n  if (moduleIdentifier) { // server build\n    hook = function (context) {\n      // 2.3 injection\n      context =\n        context || // cached call\n        (this.$vnode && this.$vnode.ssrContext) || // stateful\n        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional\n      // 2.2 with runInNewContext: true\n      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {\n        context = __VUE_SSR_CONTEXT__\n      }\n      // inject component styles\n      if (injectStyles) {\n        injectStyles.call(this, context)\n      }\n      // register component module identifier for async chunk inferrence\n      if (context && context._registeredComponents) {\n        context._registeredComponents.add(moduleIdentifier)\n      }\n    }\n    // used by ssr in case component is cached and beforeCreate\n    // never gets called\n    options._ssrRegister = hook\n  } else if (injectStyles) {\n    hook = shadowMode\n      ? function () {\n        injectStyles.call(\n          this,\n          (options.functional ? this.parent : this).$root.$options.shadowRoot\n        )\n      }\n      : injectStyles\n  }\n\n  if (hook) {\n    if (options.functional) {\n      // for template-only hot-reload because in that case the render fn doesn't\n      // go through the normalizer\n      options._injectStyles = hook\n      // register for functional component in vue file\n      var originalRender = options.render\n      options.render = function renderWithStyleInjection (h, context) {\n        hook.call(context)\n        return originalRender(h, context)\n      }\n    } else {\n      // inject component registration as beforeCreate hook\n      var existing = options.beforeCreate\n      options.beforeCreate = existing\n        ? [].concat(existing, hook)\n        : [hook]\n    }\n  }\n\n  return {\n    exports: scriptExports,\n    options: options\n  }\n}\n\n\n//# sourceURL=webpack://cong-ui/./node_modules/vue-loader/lib/runtime/componentNormalizer.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./components/lib/pagination/index.js");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});