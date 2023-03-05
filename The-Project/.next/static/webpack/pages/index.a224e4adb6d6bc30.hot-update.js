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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Leader; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Board_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @styles/Board.module.css */ \"./styles/Board.module.css\");\n/* harmony import */ var _styles_Board_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_Board_module_css__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _components_HeartButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/HeartButton */ \"./components/HeartButton.js\");\n/* harmony import */ var _components_PostContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/PostContent */ \"./components/PostContent.js\");\n/* harmony import */ var _components_AuthCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/AuthCheck */ \"./components/AuthCheck.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _lib_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @lib/context */ \"./lib/context.js\");\n/* harmony import */ var _lib_firebase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @lib/firebase */ \"./lib/firebase.js\");\n/* harmony import */ var react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-firebase-hooks/firestore */ \"./node_modules/react-firebase-hooks/firestore/dist/index.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\n\n\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _e = undefined;\n    try {\n        for(var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true){\n            _arr.push(_s.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();\n}\nvar _s1 = $RefreshSig$();\nfunction Leader(post) {\n    _s1();\n    var postRef = _lib_firebase__WEBPACK_IMPORTED_MODULE_6__.firestore.doc(\"users/\".concat(post.post.uid, \"/posts/\").concat(post.post.slug));\n    var ref = _slicedToArray((0,react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_7__.useDocumentData)(postRef), 1), realtimePost = ref[0];\n    var post2 = realtimePost || post.post;\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_8__.useContext)(_lib_context__WEBPACK_IMPORTED_MODULE_5__.UserContext), currentUser = ref1.user;\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        __source: {\n            fileName: \"/workspace/BitCoinRace/The-Project/pages/leaders.js\",\n            lineNumber: 25\n        },\n        __self: this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                className: (_styles_Board_module_css__WEBPACK_IMPORTED_MODULE_9___default().alone),\n                __source: {\n                    fileName: \"/workspace/BitCoinRace/The-Project/pages/leaders.js\",\n                    lineNumber: 26\n                },\n                __self: this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                        id: \"crown\",\n                        src: \"/crown.svg\",\n                        alt: \"coroa\",\n                        style: {\n                            width: \"3rem\",\n                            height: \"3rem\",\n                            border: \"unset\",\n                            padding: \"unset\",\n                            animation: \"crown-animation 2s cubic-bezier(0.250, 0.460, 0.450, 0.940) both\"\n                        },\n                        __source: {\n                            fileName: \"/workspace/BitCoinRace/The-Project/pages/leaders.js\",\n                            lineNumber: 30\n                        },\n                        __self: this\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                        src: \"/hacker.png\",\n                        alt: \"\",\n                        __source: {\n                            fileName: \"/workspace/BitCoinRace/The-Project/pages/leaders.js\",\n                            lineNumber: 42\n                        },\n                        __self: this\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                        __source: {\n                            fileName: \"/workspace/BitCoinRace/The-Project/pages/leaders.js\",\n                            lineNumber: 43\n                        },\n                        __self: this,\n                        children: \"Top Post: $\".concat(post2.amount)\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                        className: (_styles_Board_module_css__WEBPACK_IMPORTED_MODULE_9___default().revenue),\n                        __source: {\n                            fileName: \"/workspace/BitCoinRace/The-Project/pages/leaders.js\",\n                            lineNumber: 45\n                        },\n                        __self: this,\n                        children: \"@\".concat(post2.username)\n                    })\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_PostContent__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                post: post2,\n                __source: {\n                    fileName: \"/workspace/BitCoinRace/The-Project/pages/leaders.js\",\n                    lineNumber: 49\n                },\n                __self: this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"aside\", {\n                className: \"card\",\n                __source: {\n                    fileName: \"/workspace/BitCoinRace/The-Project/pages/leaders.js\",\n                    lineNumber: 50\n                },\n                __self: this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                        __source: {\n                            fileName: \"/workspace/BitCoinRace/The-Project/pages/leaders.js\",\n                            lineNumber: 51\n                        },\n                        __self: this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"strong\", {\n                            __source: {\n                                fileName: \"/workspace/BitCoinRace/The-Project/pages/leaders.js\",\n                                lineNumber: 52\n                            },\n                            __self: this,\n                            children: [\n                                post2.heartCount || 0,\n                                \" 🤍\"\n                            ]\n                        })\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_AuthCheck__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        fallback: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                            href: \"/enter\",\n                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                                children: \"💗 Sign Up\"\n                            })\n                        }),\n                        __source: {\n                            fileName: \"/workspace/BitCoinRace/The-Project/pages/leaders.js\",\n                            lineNumber: 54\n                        },\n                        __self: this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_HeartButton__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            postRef: postRef,\n                            __source: {\n                                fileName: \"/workspace/BitCoinRace/The-Project/pages/leaders.js\",\n                                lineNumber: 61\n                            },\n                            __self: this\n                        })\n                    }),\n                    (currentUser === null || currentUser === void 0 ? void 0 : currentUser.uid) === post2.uid && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                        href: \"/admin/\".concat(post2.slug),\n                        __source: {\n                            fileName: \"/workspace/BitCoinRace/The-Project/pages/leaders.js\",\n                            lineNumber: 65\n                        },\n                        __self: this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                            className: \"btn-blue\",\n                            __source: {\n                                fileName: \"/workspace/BitCoinRace/The-Project/pages/leaders.js\",\n                                lineNumber: 66\n                            },\n                            __self: this,\n                            children: \"Edit Post\"\n                        })\n                    })\n                ]\n            })\n        ]\n    }));\n};\n_s1(Leader, \"NKHWVj1vjLpP3uySy3V1sk3iAWM=\", false, function() {\n    return [\n        react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_7__.useDocumentData\n    ];\n});\n_c = Leader;\nvar _c;\n$RefreshReg$(_c, \"Leader\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9sZWFkZXJzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTZDO0FBQ0k7QUFDQTtBQUNKO0FBQ2pCO0FBQ2M7QUFDZ0M7QUFFVjtBQUM5Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR25CLFFBQVEsQ0FBQ1csTUFBTSxDQUFDQyxJQUFJLEVBQUUsQ0FBQzs7SUFDcEMsR0FBSyxDQUFDQyxPQUFPLEdBQUdQLHdEQUFhLENBQUUsQ0FBTSxRQUF5Qk0sTUFBYyxDQUFyQ0EsSUFBSSxDQUFDQSxJQUFJLENBQUNHLEdBQUcsRUFBQyxDQUFPLFVBQWlCLE9BQWZILElBQUksQ0FBQ0EsSUFBSSxDQUFDSSxJQUFJO0lBRTVFLEdBQUssQ0FBa0JQLEdBQXdCLGtCQUF4QkEsK0VBQWUsQ0FBQ0ksT0FBTyxPQUF2Q0ksWUFBWSxHQUFJUixHQUF3QjtJQUUvQyxHQUFLLENBQUNTLEtBQUssR0FBR0QsWUFBWSxJQUFJTCxJQUFJLENBQUNBLElBQUk7SUFFdkMsR0FBSyxDQUF5QkYsSUFBdUIsR0FBdkJBLGlEQUFVLENBQUNMLHFEQUFXLEdBQXRDYyxXQUFXLEdBQUtULElBQXVCLENBQTdDVSxJQUFJO0lBR1osTUFBTSx1RUFFTkMsQ0FBRzs7Ozs7OztrRkFDRUEsQ0FBRztnQkFBQ0MsU0FBUyxFQUFFdEIsdUVBQVk7Ozs7Ozs7eUZBSTNCd0IsQ0FBRzt3QkFBQ0MsRUFBRSxFQUFDLENBQU87d0JBQ2JDLEdBQUcsRUFBQyxDQUFZO3dCQUNoQkMsR0FBRyxFQUFDLENBQU87d0JBQ1hDLEtBQUssRUFBRSxDQUFDOzRCQUNOQyxLQUFLLEVBQUUsQ0FBTTs0QkFDYkMsTUFBTSxFQUFFLENBQU07NEJBQ2RDLE1BQU0sRUFBRSxDQUFPOzRCQUNmQyxPQUFPLEVBQUUsQ0FBTzs0QkFDaEJDLFNBQVMsRUFBRSxDQUFrRTt3QkFDL0UsQ0FBQzs7Ozs7Ozt5RkFHRlQsQ0FBRzt3QkFBQ0UsR0FBRyxFQUFDLENBQWE7d0JBQUNDLEdBQUcsRUFBQyxDQUFFOzs7Ozs7O3lGQUM1Qk8sQ0FBQzs7Ozs7O2tDQUFJLENBQVcsYUFBZSxPQUFiaEIsS0FBSyxDQUFDaUIsTUFBTTs7eUZBRTlCQyxDQUFJO3dCQUFFZCxTQUFTLEVBQUV0Qix5RUFBYzs7Ozs7O2tDQUFLLENBQUMsR0FBaUIsT0FBZmtCLEtBQUssQ0FBQ29CLFFBQVE7Ozs7aUZBSXJEcEMsK0RBQVc7Z0JBQUNVLElBQUksRUFBRU0sS0FBSzs7Ozs7OztrRkFDdkJxQixDQUFLO2dCQUFDakIsU0FBUyxFQUFDLENBQU07Ozs7Ozs7eUZBQ3BCWSxDQUFDOzs7Ozs7d0dBQ0NNLENBQU07Ozs7Ozs7Z0NBQUV0QixLQUFLLENBQUN1QixVQUFVLElBQUksQ0FBQztnQ0FBQyxDQUFFOzs7O3lGQUUvQnRDLDZEQUFNO3dCQUNSdUMsUUFBUSx1RUFDTHRDLGtEQUFJOzRCQUFDdUMsSUFBSSxFQUFDLENBQVE7MkdBQ2hCQyxDQUFNOzBDQUFDLENBQVM7Ozs7Ozs7O3VHQUlwQjNDLCtEQUFXOzRCQUFDWSxPQUFPLEVBQUVBLE9BQU87Ozs7Ozs7O3FCQUc5Qk0sV0FBVyxhQUFYQSxXQUFXLEtBQVhBLElBQUksQ0FBSkEsQ0FBZ0IsR0FBaEJBLElBQUksQ0FBSkEsQ0FBZ0IsR0FBaEJBLFdBQVcsQ0FBRUosR0FBRyxNQUFLRyxLQUFLLENBQUNILEdBQUcseUVBQzVCWCxrREFBSTt3QkFBQ3VDLElBQUksRUFBRyxDQUFPLFNBQWEsT0FBWHpCLEtBQUssQ0FBQ0YsSUFBSTs7Ozs7O3VHQUM3QjRCLENBQU07NEJBQUN0QixTQUFTLEVBQUMsQ0FBVTs7Ozs7O3NDQUFDLENBQVM7Ozs7Ozs7QUFRbEQsQ0FBQztJQTdEdUJYLE1BQU07O1FBR0xGLDJFQUFlOzs7S0FIaEJFLE1BQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbGVhZGVycy5qcz8yNjA3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSBcIkBzdHlsZXMvQm9hcmQubW9kdWxlLmNzc1wiO1xuaW1wb3J0IEhlYXJ0QnV0dG9uIGZyb20gJ0Bjb21wb25lbnRzL0hlYXJ0QnV0dG9uJztcbmltcG9ydCBQb3N0Q29udGVudCBmcm9tICdAY29tcG9uZW50cy9Qb3N0Q29udGVudCc7XG5pbXBvcnQgQXV0aENoZWNrIGZyb20gJ0Bjb21wb25lbnRzL0F1dGhDaGVjayc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHsgVXNlckNvbnRleHQgfSBmcm9tICdAbGliL2NvbnRleHQnO1xuaW1wb3J0IHsgZmlyZXN0b3JlLCBnZXRVc2VyV2l0aFVzZXJuYW1lLCBwb3N0VG9KU09OIH0gZnJvbSAnQGxpYi9maXJlYmFzZSc7XG5cbmltcG9ydCB7IHVzZURvY3VtZW50RGF0YSB9IGZyb20gJ3JlYWN0LWZpcmViYXNlLWhvb2tzL2ZpcmVzdG9yZSc7XG5pbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExlYWRlcihwb3N0KSB7XG4gIGNvbnN0IHBvc3RSZWYgPSBmaXJlc3RvcmUuZG9jKGB1c2Vycy8ke3Bvc3QucG9zdC51aWR9L3Bvc3RzLyR7cG9zdC5wb3N0LnNsdWd9YCk7XG5cbiAgY29uc3QgW3JlYWx0aW1lUG9zdF0gPSB1c2VEb2N1bWVudERhdGEocG9zdFJlZik7XG5cbiAgY29uc3QgcG9zdDIgPSByZWFsdGltZVBvc3QgfHwgcG9zdC5wb3N0O1xuXG4gIGNvbnN0IHsgdXNlcjogY3VycmVudFVzZXIgfSA9IHVzZUNvbnRleHQoVXNlckNvbnRleHQpO1xuXG5cbiAgcmV0dXJuIChcbiAgICBcbiA8ZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hbG9uZX0+XG4gICAgICBcblxuXG4gICAgICA8aW1nIGlkPVwiY3Jvd25cIlxuICAgICAgICBzcmM9XCIvY3Jvd24uc3ZnXCJcbiAgICAgICAgYWx0PVwiY29yb2FcIlxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIHdpZHRoOiBcIjNyZW1cIixcbiAgICAgICAgICBoZWlnaHQ6IFwiM3JlbVwiLFxuICAgICAgICAgIGJvcmRlcjogXCJ1bnNldFwiLFxuICAgICAgICAgIHBhZGRpbmc6IFwidW5zZXRcIixcbiAgICAgICAgICBhbmltYXRpb246IFwiY3Jvd24tYW5pbWF0aW9uIDJzIGN1YmljLWJlemllcigwLjI1MCwgMC40NjAsIDAuNDUwLCAwLjk0MCkgYm90aFwiLFxuICAgICAgICB9fVxuICAgICAgLz5cblxuICAgICAgPGltZyBzcmM9XCIvaGFja2VyLnBuZ1wiIGFsdD1cIlwiIC8+XG4gICAgICA8cD57IGBUb3AgUG9zdDogJCR7cG9zdDIuYW1vdW50fWB9PC9wPlxuXG4gICAgICA8c3BhbiAgY2xhc3NOYW1lPXtzdHlsZXMucmV2ZW51ZX0+eyBgQCR7cG9zdDIudXNlcm5hbWV9YH08L3NwYW4+XG4gICBcbiAgICAgIDwvZGl2PlxuICAgIFxuICAgICAgPFBvc3RDb250ZW50IHBvc3Q9e3Bvc3QyfSAvPlxuICAgICAgPGFzaWRlIGNsYXNzTmFtZT1cImNhcmRcIj5cbiAgICAgICAgPHA+XG4gICAgICAgICAgPHN0cm9uZz57cG9zdDIuaGVhcnRDb3VudCB8fCAwfSDwn6SNPC9zdHJvbmc+XG4gICAgICAgIDwvcD5cbiAgICAgICAgPEF1dGhDaGVja1xuICAgICAgICAgIGZhbGxiYWNrPXtcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZW50ZXJcIj5cbiAgICAgICAgICAgICAgPGJ1dHRvbj7wn5KXIFNpZ24gVXA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICB9XG4gICAgICAgID5cbiAgICAgICAgICA8SGVhcnRCdXR0b24gcG9zdFJlZj17cG9zdFJlZn0gLz5cbiAgICAgICAgPC9BdXRoQ2hlY2s+XG5cbiAgICAgICAge2N1cnJlbnRVc2VyPy51aWQgPT09IHBvc3QyLnVpZCAmJiAoXG4gICAgICAgICAgPExpbmsgaHJlZj17YC9hZG1pbi8ke3Bvc3QyLnNsdWd9YH0+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0bi1ibHVlXCI+RWRpdCBQb3N0PC9idXR0b24+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICApfVxuICAgICAgICA8L2FzaWRlPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICBcbiAgICAgIFxuICApO1xufVxuIl0sIm5hbWVzIjpbInN0eWxlcyIsIkhlYXJ0QnV0dG9uIiwiUG9zdENvbnRlbnQiLCJBdXRoQ2hlY2siLCJMaW5rIiwiVXNlckNvbnRleHQiLCJmaXJlc3RvcmUiLCJnZXRVc2VyV2l0aFVzZXJuYW1lIiwicG9zdFRvSlNPTiIsInVzZURvY3VtZW50RGF0YSIsInVzZUNvbnRleHQiLCJMZWFkZXIiLCJwb3N0IiwicG9zdFJlZiIsImRvYyIsInVpZCIsInNsdWciLCJyZWFsdGltZVBvc3QiLCJwb3N0MiIsImN1cnJlbnRVc2VyIiwidXNlciIsImRpdiIsImNsYXNzTmFtZSIsImFsb25lIiwiaW1nIiwiaWQiLCJzcmMiLCJhbHQiLCJzdHlsZSIsIndpZHRoIiwiaGVpZ2h0IiwiYm9yZGVyIiwicGFkZGluZyIsImFuaW1hdGlvbiIsInAiLCJhbW91bnQiLCJzcGFuIiwicmV2ZW51ZSIsInVzZXJuYW1lIiwiYXNpZGUiLCJzdHJvbmciLCJoZWFydENvdW50IiwiZmFsbGJhY2siLCJocmVmIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/leaders.js\n");

/***/ })

});