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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Leader; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Board_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @styles/Board.module.css */ \"./styles/Board.module.css\");\n/* harmony import */ var _styles_Board_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Board_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_HeartButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/HeartButton */ \"./components/HeartButton.js\");\n/* harmony import */ var _components_PostContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/PostContent */ \"./components/PostContent.js\");\n/* harmony import */ var _components_AuthCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/AuthCheck */ \"./components/AuthCheck.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\nfunction Leader(post) {\n    console.log(post.post);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        className: (_styles_Board_module_css__WEBPACK_IMPORTED_MODULE_5___default().alone),\n        __source: {\n            fileName: \"/workspace/BitCoinRace/The-Project/pages/leaders.js\",\n            lineNumber: 12\n        },\n        __self: this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                id: \"crown\",\n                src: \"/crown.svg\",\n                alt: \"coroa\",\n                style: {\n                    width: \"3rem\",\n                    height: \"3rem\",\n                    border: \"unset\",\n                    padding: \"unset\",\n                    animation: \"crown-animation 2s cubic-bezier(0.250, 0.460, 0.450, 0.940) both\"\n                },\n                __source: {\n                    fileName: \"/workspace/BitCoinRace/The-Project/pages/leaders.js\",\n                    lineNumber: 16\n                },\n                __self: this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                src: \"/hacker.png\",\n                alt: \"\",\n                __source: {\n                    fileName: \"/workspace/BitCoinRace/The-Project/pages/leaders.js\",\n                    lineNumber: 28\n                },\n                __self: this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                __source: {\n                    fileName: \"/workspace/BitCoinRace/The-Project/pages/leaders.js\",\n                    lineNumber: 29\n                },\n                __self: this,\n                children: \"Top Post: $\".concat(post.post.amount)\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                className: (_styles_Board_module_css__WEBPACK_IMPORTED_MODULE_5___default().revenue),\n                __source: {\n                    fileName: \"/workspace/BitCoinRace/The-Project/pages/leaders.js\",\n                    lineNumber: 31\n                },\n                __self: this,\n                children: \"@\".concat(post.post.username)\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                className: (_styles_Board_module_css__WEBPACK_IMPORTED_MODULE_5___default().container),\n                __source: {\n                    fileName: \"/workspace/BitCoinRace/The-Project/pages/leaders.js\",\n                    lineNumber: 34\n                },\n                __self: this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_PostContent__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    post: post.post,\n                    __source: {\n                        fileName: \"/workspace/BitCoinRace/The-Project/pages/leaders.js\",\n                        lineNumber: 38\n                    },\n                    __self: this\n                })\n            })\n        ]\n    }));\n};\n_c = Leader;\nvar _c;\n$RefreshReg$(_c, \"Leader\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9sZWFkZXJzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUE2QztBQUNJO0FBQ0E7QUFDSjtBQUNqQjtBQUViLFFBQVEsQ0FBQ0ssTUFBTSxDQUFDQyxJQUFJLEVBQUUsQ0FBQztJQUNwQ0MsT0FBTyxDQUFDQyxHQUFHLENBQUNGLElBQUksQ0FBQ0EsSUFBSTtJQUNyQixNQUFNLHVFQUdERyxDQUFHO1FBQUNDLFNBQVMsRUFBRVYsdUVBQVk7Ozs7Ozs7aUZBSTNCWSxDQUFHO2dCQUFDQyxFQUFFLEVBQUMsQ0FBTztnQkFDYkMsR0FBRyxFQUFDLENBQVk7Z0JBQ2hCQyxHQUFHLEVBQUMsQ0FBTztnQkFDWEMsS0FBSyxFQUFFLENBQUM7b0JBQ05DLEtBQUssRUFBRSxDQUFNO29CQUNiQyxNQUFNLEVBQUUsQ0FBTTtvQkFDZEMsTUFBTSxFQUFFLENBQU87b0JBQ2ZDLE9BQU8sRUFBRSxDQUFPO29CQUNoQkMsU0FBUyxFQUFFLENBQWtFO2dCQUMvRSxDQUFDOzs7Ozs7O2lGQUdGVCxDQUFHO2dCQUFDRSxHQUFHLEVBQUMsQ0FBYTtnQkFBQ0MsR0FBRyxFQUFDLENBQUU7Ozs7Ozs7aUZBQzVCTyxDQUFDOzs7Ozs7MEJBQUksQ0FBVyxhQUFtQixPQUFqQmhCLElBQUksQ0FBQ0EsSUFBSSxDQUFDaUIsTUFBTTs7aUZBRWxDQyxDQUFJO2dCQUFFZCxTQUFTLEVBQUVWLHlFQUFjOzs7Ozs7MEJBQUssQ0FBQyxHQUFxQixPQUFuQk0sSUFBSSxDQUFDQSxJQUFJLENBQUNvQixRQUFROztpRkFHM0RqQixDQUFHO2dCQUFDQyxTQUFTLEVBQUVWLDJFQUFnQjs7Ozs7OytGQUkzQkUsK0RBQVc7b0JBQUNJLElBQUksRUFBRUEsSUFBSSxDQUFDQSxJQUFJOzs7Ozs7Ozs7O0FBV3BDLENBQUM7S0ExQ3VCRCxNQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2xlYWRlcnMuanM/MjYwNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gXCJAc3R5bGVzL0JvYXJkLm1vZHVsZS5jc3NcIjtcbmltcG9ydCBIZWFydEJ1dHRvbiBmcm9tICdAY29tcG9uZW50cy9IZWFydEJ1dHRvbic7XG5pbXBvcnQgUG9zdENvbnRlbnQgZnJvbSAnQGNvbXBvbmVudHMvUG9zdENvbnRlbnQnO1xuaW1wb3J0IEF1dGhDaGVjayBmcm9tICdAY29tcG9uZW50cy9BdXRoQ2hlY2snO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGVhZGVyKHBvc3QpIHtcbiAgY29uc29sZS5sb2cocG9zdC5wb3N0KVxuICByZXR1cm4gKFxuICAgIFxuIFxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hbG9uZX0+XG4gICAgICBcblxuXG4gICAgICA8aW1nIGlkPVwiY3Jvd25cIlxuICAgICAgICBzcmM9XCIvY3Jvd24uc3ZnXCJcbiAgICAgICAgYWx0PVwiY29yb2FcIlxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIHdpZHRoOiBcIjNyZW1cIixcbiAgICAgICAgICBoZWlnaHQ6IFwiM3JlbVwiLFxuICAgICAgICAgIGJvcmRlcjogXCJ1bnNldFwiLFxuICAgICAgICAgIHBhZGRpbmc6IFwidW5zZXRcIixcbiAgICAgICAgICBhbmltYXRpb246IFwiY3Jvd24tYW5pbWF0aW9uIDJzIGN1YmljLWJlemllcigwLjI1MCwgMC40NjAsIDAuNDUwLCAwLjk0MCkgYm90aFwiLFxuICAgICAgICB9fVxuICAgICAgLz5cblxuICAgICAgPGltZyBzcmM9XCIvaGFja2VyLnBuZ1wiIGFsdD1cIlwiIC8+XG4gICAgICA8cD57IGBUb3AgUG9zdDogJCR7cG9zdC5wb3N0LmFtb3VudH1gfTwvcD5cblxuICAgICAgPHNwYW4gIGNsYXNzTmFtZT17c3R5bGVzLnJldmVudWV9PnsgYEAke3Bvc3QucG9zdC51c2VybmFtZX1gfTwvc3Bhbj5cbiAgICAgICAgXG5cbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG5cbiAgICAgIFxuICAgICBcbiAgICAgICAgPFBvc3RDb250ZW50IHBvc3Q9e3Bvc3QucG9zdH0gLz5cbiAgICAgIFxuXG4gICAgICBcbiAgICA8L2Rpdj5cbiAgXG4gICAgICA8L2Rpdj5cbiAgICAgICAgICBcbiAgICAgICAgXG4gICAgICBcbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJzdHlsZXMiLCJIZWFydEJ1dHRvbiIsIlBvc3RDb250ZW50IiwiQXV0aENoZWNrIiwiTGluayIsIkxlYWRlciIsInBvc3QiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwiYWxvbmUiLCJpbWciLCJpZCIsInNyYyIsImFsdCIsInN0eWxlIiwid2lkdGgiLCJoZWlnaHQiLCJib3JkZXIiLCJwYWRkaW5nIiwiYW5pbWF0aW9uIiwicCIsImFtb3VudCIsInNwYW4iLCJyZXZlbnVlIiwidXNlcm5hbWUiLCJjb250YWluZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/leaders.js\n");

/***/ })

});