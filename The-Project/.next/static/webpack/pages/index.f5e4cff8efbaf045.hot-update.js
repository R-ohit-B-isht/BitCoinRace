"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/leaders.js":
/*!**************************!*\
  !*** ./pages/leaders.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Leader; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Board_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @styles/Board.module.css */ \"./styles/Board.module.css\");\n/* harmony import */ var _styles_Board_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Board_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_HeartButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/HeartButton */ \"./components/HeartButton.js\");\n/* harmony import */ var _components_PostContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/PostContent */ \"./components/PostContent.js\");\n/* harmony import */ var _components_AuthCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/AuthCheck */ \"./components/AuthCheck.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\nfunction Leader(post) {\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        className: (_styles_Board_module_css__WEBPACK_IMPORTED_MODULE_5___default().alone),\n        __source: {\n            fileName: \"/workspace/BitCoinRace/The-Project/pages/leaders.js\",\n            lineNumber: 12\n        },\n        __self: this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                id: \"crown\",\n                src: \"/crown.svg\",\n                alt: \"coroa\",\n                style: {\n                    width: \"3rem\",\n                    height: \"3rem\",\n                    border: \"unset\",\n                    padding: \"unset\",\n                    animation: \"crown-animation 2s cubic-bezier(0.250, 0.460, 0.450, 0.940) both\"\n                },\n                __source: {\n                    fileName: \"/workspace/BitCoinRace/The-Project/pages/leaders.js\",\n                    lineNumber: 16\n                },\n                __self: this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                src: \"/hacker.png\",\n                alt: \"\",\n                __source: {\n                    fileName: \"/workspace/BitCoinRace/The-Project/pages/leaders.js\",\n                    lineNumber: 28\n                },\n                __self: this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                __source: {\n                    fileName: \"/workspace/BitCoinRace/The-Project/pages/leaders.js\",\n                    lineNumber: 29\n                },\n                __self: this,\n                children: \"Top Post: $\".concat(post.post.amount)\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                className: (_styles_Board_module_css__WEBPACK_IMPORTED_MODULE_5___default().revenue),\n                __source: {\n                    fileName: \"/workspace/BitCoinRace/The-Project/pages/leaders.js\",\n                    lineNumber: 31\n                },\n                __self: this,\n                children: \"@\".concat(post.post.username)\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_PostContent__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                post: post.post,\n                style: {\n                    width: \"100%\"\n                },\n                __source: {\n                    fileName: \"/workspace/BitCoinRace/The-Project/pages/leaders.js\",\n                    lineNumber: 36\n                },\n                __self: this\n            })\n        ]\n    }));\n};\n_c = Leader;\nvar _c;\n$RefreshReg$(_c, \"Leader\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9sZWFkZXJzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUE2QztBQUNJO0FBQ0E7QUFDSjtBQUNqQjtBQUViLFFBQVEsQ0FBQ0ssTUFBTSxDQUFDQyxJQUFJLEVBQUUsQ0FBQztJQUVwQyxNQUFNLHVFQUdEQyxDQUFHO1FBQUNDLFNBQVMsRUFBRVIsdUVBQVk7Ozs7Ozs7aUZBSTNCVSxDQUFHO2dCQUFDQyxFQUFFLEVBQUMsQ0FBTztnQkFDYkMsR0FBRyxFQUFDLENBQVk7Z0JBQ2hCQyxHQUFHLEVBQUMsQ0FBTztnQkFDWEMsS0FBSyxFQUFFLENBQUM7b0JBQ05DLEtBQUssRUFBRSxDQUFNO29CQUNiQyxNQUFNLEVBQUUsQ0FBTTtvQkFDZEMsTUFBTSxFQUFFLENBQU87b0JBQ2ZDLE9BQU8sRUFBRSxDQUFPO29CQUNoQkMsU0FBUyxFQUFFLENBQWtFO2dCQUMvRSxDQUFDOzs7Ozs7O2lGQUdGVCxDQUFHO2dCQUFDRSxHQUFHLEVBQUMsQ0FBYTtnQkFBQ0MsR0FBRyxFQUFDLENBQUU7Ozs7Ozs7aUZBQzVCTyxDQUFDOzs7Ozs7MEJBQUksQ0FBVyxhQUFtQixPQUFqQmQsSUFBSSxDQUFDQSxJQUFJLENBQUNlLE1BQU07O2lGQUVsQ0MsQ0FBSTtnQkFBRWQsU0FBUyxFQUFFUix5RUFBYzs7Ozs7OzBCQUFLLENBQUMsR0FBcUIsT0FBbkJNLElBQUksQ0FBQ0EsSUFBSSxDQUFDa0IsUUFBUTs7aUZBS3ZEdEIsK0RBQVc7Z0JBQUNJLElBQUksRUFBRUEsSUFBSSxDQUFDQSxJQUFJO2dCQUFFUSxLQUFLLEVBQUUsQ0FBQ0M7b0JBQUFBLEtBQUssRUFBQyxDQUFNO2dCQUFBLENBQUM7Ozs7Ozs7OztBQVUzRCxDQUFDO0tBdkN1QlYsTUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9sZWFkZXJzLmpzPzI2MDciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tIFwiQHN0eWxlcy9Cb2FyZC5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgSGVhcnRCdXR0b24gZnJvbSAnQGNvbXBvbmVudHMvSGVhcnRCdXR0b24nO1xuaW1wb3J0IFBvc3RDb250ZW50IGZyb20gJ0Bjb21wb25lbnRzL1Bvc3RDb250ZW50JztcbmltcG9ydCBBdXRoQ2hlY2sgZnJvbSAnQGNvbXBvbmVudHMvQXV0aENoZWNrJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExlYWRlcihwb3N0KSB7XG5cbiAgcmV0dXJuIChcbiAgICBcbiBcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYWxvbmV9PlxuICAgICAgXG5cblxuICAgICAgPGltZyBpZD1cImNyb3duXCJcbiAgICAgICAgc3JjPVwiL2Nyb3duLnN2Z1wiXG4gICAgICAgIGFsdD1cImNvcm9hXCJcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICB3aWR0aDogXCIzcmVtXCIsXG4gICAgICAgICAgaGVpZ2h0OiBcIjNyZW1cIixcbiAgICAgICAgICBib3JkZXI6IFwidW5zZXRcIixcbiAgICAgICAgICBwYWRkaW5nOiBcInVuc2V0XCIsXG4gICAgICAgICAgYW5pbWF0aW9uOiBcImNyb3duLWFuaW1hdGlvbiAycyBjdWJpYy1iZXppZXIoMC4yNTAsIDAuNDYwLCAwLjQ1MCwgMC45NDApIGJvdGhcIixcbiAgICAgICAgfX1cbiAgICAgIC8+XG5cbiAgICAgIDxpbWcgc3JjPVwiL2hhY2tlci5wbmdcIiBhbHQ9XCJcIiAvPlxuICAgICAgPHA+eyBgVG9wIFBvc3Q6ICQke3Bvc3QucG9zdC5hbW91bnR9YH08L3A+XG5cbiAgICAgIDxzcGFuICBjbGFzc05hbWU9e3N0eWxlcy5yZXZlbnVlfT57IGBAJHtwb3N0LnBvc3QudXNlcm5hbWV9YH08L3NwYW4+XG4gICAgICAgIFxuXG4gICAgICBcbiAgICAgXG4gICAgICAgIDxQb3N0Q29udGVudCBwb3N0PXtwb3N0LnBvc3R9IHN0eWxlPXt7d2lkdGg6XCIxMDAlXCJ9fSAvPlxuICAgICAgXG5cbiAgICAgIFxuICBcbiAgICAgIDwvZGl2PlxuICAgICAgICAgIFxuICAgICAgICBcbiAgICAgIFxuICApO1xufVxuIl0sIm5hbWVzIjpbInN0eWxlcyIsIkhlYXJ0QnV0dG9uIiwiUG9zdENvbnRlbnQiLCJBdXRoQ2hlY2siLCJMaW5rIiwiTGVhZGVyIiwicG9zdCIsImRpdiIsImNsYXNzTmFtZSIsImFsb25lIiwiaW1nIiwiaWQiLCJzcmMiLCJhbHQiLCJzdHlsZSIsIndpZHRoIiwiaGVpZ2h0IiwiYm9yZGVyIiwicGFkZGluZyIsImFuaW1hdGlvbiIsInAiLCJhbW91bnQiLCJzcGFuIiwicmV2ZW51ZSIsInVzZXJuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/leaders.js\n");

/***/ })

});