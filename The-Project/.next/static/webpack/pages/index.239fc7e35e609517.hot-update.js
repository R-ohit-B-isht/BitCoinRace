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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Leader; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Board_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @styles/Board.module.css */ \"./styles/Board.module.css\");\n/* harmony import */ var _styles_Board_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_Board_module_css__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _components_HeartButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/HeartButton */ \"./components/HeartButton.js\");\n/* harmony import */ var _components_PostContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/PostContent */ \"./components/PostContent.js\");\n/* harmony import */ var _components_AuthCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/AuthCheck */ \"./components/AuthCheck.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _lib_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @lib/context */ \"./lib/context.js\");\n/* harmony import */ var _lib_firebase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @lib/firebase */ \"./lib/firebase.js\");\n/* harmony import */ var react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-firebase-hooks/firestore */ \"./node_modules/react-firebase-hooks/firestore/dist/index.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\n\n\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _e = undefined;\n    try {\n        for(var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true){\n            _arr.push(_s.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();\n}\nvar _s1 = $RefreshSig$();\nfunction Leader(post) {\n    _s1();\n    var postRef = _lib_firebase__WEBPACK_IMPORTED_MODULE_6__.firestore.doc(\"users/\".concat(post.post.uid, \"/posts/\").concat(post.post.slug));\n    var ref = _slicedToArray((0,react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_7__.useDocumentData)(postRef), 1), realtimePost = ref[0];\n    var post2 = realtimePost || post.post;\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_8__.useContext)(_lib_context__WEBPACK_IMPORTED_MODULE_5__.UserContext), currentUser = ref1.user;\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        __source: {\n            fileName: \"/workspace/BitCoinRace/The-Project/pages/leaders.js\",\n            lineNumber: 25\n        },\n        __self: this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                className: (_styles_Board_module_css__WEBPACK_IMPORTED_MODULE_9___default().alone),\n                __source: {\n                    fileName: \"/workspace/BitCoinRace/The-Project/pages/leaders.js\",\n                    lineNumber: 26\n                },\n                __self: this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                        id: \"crown\",\n                        src: \"/crown.svg\",\n                        alt: \"coroa\",\n                        style: {\n                            width: \"3rem\",\n                            height: \"3rem\",\n                            border: \"unset\",\n                            padding: \"unset\",\n                            animation: \"crown-animation 2s cubic-bezier(0.250, 0.460, 0.450, 0.940) both\"\n                        },\n                        __source: {\n                            fileName: \"/workspace/BitCoinRace/The-Project/pages/leaders.js\",\n                            lineNumber: 30\n                        },\n                        __self: this\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                        src: \"/hacker.png\",\n                        alt: \"\",\n                        __source: {\n                            fileName: \"/workspace/BitCoinRace/The-Project/pages/leaders.js\",\n                            lineNumber: 42\n                        },\n                        __self: this\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                        __source: {\n                            fileName: \"/workspace/BitCoinRace/The-Project/pages/leaders.js\",\n                            lineNumber: 43\n                        },\n                        __self: this,\n                        children: \"Top Post: $\".concat(post2.amount)\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                        className: (_styles_Board_module_css__WEBPACK_IMPORTED_MODULE_9___default().revenue),\n                        __source: {\n                            fileName: \"/workspace/BitCoinRace/The-Project/pages/leaders.js\",\n                            lineNumber: 45\n                        },\n                        __self: this,\n                        children: \"@\".concat(post2.username)\n                    })\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_PostContent__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                post: post2,\n                __source: {\n                    fileName: \"/workspace/BitCoinRace/The-Project/pages/leaders.js\",\n                    lineNumber: 49\n                },\n                __self: this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"aside\", {\n                className: \"card\",\n                style: {\n                    display: \"flex\",\n                    justifyContent: \"space-around\"\n                },\n                __source: {\n                    fileName: \"/workspace/BitCoinRace/The-Project/pages/leaders.js\",\n                    lineNumber: 50\n                },\n                __self: this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                        __source: {\n                            fileName: \"/workspace/BitCoinRace/The-Project/pages/leaders.js\",\n                            lineNumber: 54\n                        },\n                        __self: this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"strong\", {\n                            __source: {\n                                fileName: \"/workspace/BitCoinRace/The-Project/pages/leaders.js\",\n                                lineNumber: 55\n                            },\n                            __self: this,\n                            children: [\n                                post2.heartCount || 0,\n                                \" 🤍\"\n                            ]\n                        })\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                        style: {\n                            display: \"flex\",\n                            justifyContent: \"space-evenly\",\n                            alignItems: \"flex-end\"\n                        },\n                        __source: {\n                            fileName: \"/workspace/BitCoinRace/The-Project/pages/leaders.js\",\n                            lineNumber: 58\n                        },\n                        __self: this,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_AuthCheck__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                fallback: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                    href: \"/enter\",\n                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                                        children: \"💗 Sign Up\"\n                                    })\n                                }),\n                                __source: {\n                                    fileName: \"/workspace/BitCoinRace/The-Project/pages/leaders.js\",\n                                    lineNumber: 63\n                                },\n                                __self: this,\n                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_HeartButton__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                    postRef: postRef,\n                                    __source: {\n                                        fileName: \"/workspace/BitCoinRace/The-Project/pages/leaders.js\",\n                                        lineNumber: 70\n                                    },\n                                    __self: this\n                                })\n                            }),\n                            (currentUser === null || currentUser === void 0 ? void 0 : currentUser.uid) === post2.uid && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                href: \"/admin/\".concat(post2.slug),\n                                __source: {\n                                    fileName: \"/workspace/BitCoinRace/The-Project/pages/leaders.js\",\n                                    lineNumber: 74\n                                },\n                                __self: this,\n                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                                    className: \"btn-blue\",\n                                    __source: {\n                                        fileName: \"/workspace/BitCoinRace/The-Project/pages/leaders.js\",\n                                        lineNumber: 75\n                                    },\n                                    __self: this,\n                                    children: \"Edit Post\"\n                                })\n                            })\n                        ]\n                    })\n                ]\n            })\n        ]\n    }));\n};\n_s1(Leader, \"NKHWVj1vjLpP3uySy3V1sk3iAWM=\", false, function() {\n    return [\n        react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_7__.useDocumentData\n    ];\n});\n_c = Leader;\nvar _c;\n$RefreshReg$(_c, \"Leader\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7OzhDQUFDLENBQVM7Ozs7Ozs7OztBQVNsRCxDQUFDO0lBdkV1QlgsTUFBTTs7UUFHTEYsMkVBQWU7OztLQUhoQkUsTUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9sZWFkZXJzLmpzPzI2MDciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tIFwiQHN0eWxlcy9Cb2FyZC5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgSGVhcnRCdXR0b24gZnJvbSAnQGNvbXBvbmVudHMvSGVhcnRCdXR0b24nO1xuaW1wb3J0IFBvc3RDb250ZW50IGZyb20gJ0Bjb21wb25lbnRzL1Bvc3RDb250ZW50JztcbmltcG9ydCBBdXRoQ2hlY2sgZnJvbSAnQGNvbXBvbmVudHMvQXV0aENoZWNrJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgeyBVc2VyQ29udGV4dCB9IGZyb20gJ0BsaWIvY29udGV4dCc7XG5pbXBvcnQgeyBmaXJlc3RvcmUsIGdldFVzZXJXaXRoVXNlcm5hbWUsIHBvc3RUb0pTT04gfSBmcm9tICdAbGliL2ZpcmViYXNlJztcblxuaW1wb3J0IHsgdXNlRG9jdW1lbnREYXRhIH0gZnJvbSAncmVhY3QtZmlyZWJhc2UtaG9va3MvZmlyZXN0b3JlJztcbmltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGVhZGVyKHBvc3QpIHtcbiAgY29uc3QgcG9zdFJlZiA9IGZpcmVzdG9yZS5kb2MoYHVzZXJzLyR7cG9zdC5wb3N0LnVpZH0vcG9zdHMvJHtwb3N0LnBvc3Quc2x1Z31gKTtcblxuICBjb25zdCBbcmVhbHRpbWVQb3N0XSA9IHVzZURvY3VtZW50RGF0YShwb3N0UmVmKTtcblxuICBjb25zdCBwb3N0MiA9IHJlYWx0aW1lUG9zdCB8fCBwb3N0LnBvc3Q7XG5cbiAgY29uc3QgeyB1c2VyOiBjdXJyZW50VXNlciB9ID0gdXNlQ29udGV4dChVc2VyQ29udGV4dCk7XG5cblxuICByZXR1cm4gKFxuICAgIFxuIDxkaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFsb25lfT5cbiAgICAgIFxuXG5cbiAgICAgIDxpbWcgaWQ9XCJjcm93blwiXG4gICAgICAgIHNyYz1cIi9jcm93bi5zdmdcIlxuICAgICAgICBhbHQ9XCJjb3JvYVwiXG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgd2lkdGg6IFwiM3JlbVwiLFxuICAgICAgICAgIGhlaWdodDogXCIzcmVtXCIsXG4gICAgICAgICAgYm9yZGVyOiBcInVuc2V0XCIsXG4gICAgICAgICAgcGFkZGluZzogXCJ1bnNldFwiLFxuICAgICAgICAgIGFuaW1hdGlvbjogXCJjcm93bi1hbmltYXRpb24gMnMgY3ViaWMtYmV6aWVyKDAuMjUwLCAwLjQ2MCwgMC40NTAsIDAuOTQwKSBib3RoXCIsXG4gICAgICAgIH19XG4gICAgICAvPlxuXG4gICAgICA8aW1nIHNyYz1cIi9oYWNrZXIucG5nXCIgYWx0PVwiXCIgLz5cbiAgICAgIDxwPnsgYFRvcCBQb3N0OiAkJHtwb3N0Mi5hbW91bnR9YH08L3A+XG5cbiAgICAgIDxzcGFuICBjbGFzc05hbWU9e3N0eWxlcy5yZXZlbnVlfT57IGBAJHtwb3N0Mi51c2VybmFtZX1gfTwvc3Bhbj5cbiAgIFxuICAgICAgPC9kaXY+XG4gICAgXG4gICAgICA8UG9zdENvbnRlbnQgcG9zdD17cG9zdDJ9IC8+XG4gICAgICA8YXNpZGUgY2xhc3NOYW1lPVwiY2FyZFwiIHN0eWxlPXt7XG4gICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1hcm91bmRcIlxuICAgIH19PlxuICAgICAgICA8cD5cbiAgICAgICAgICA8c3Ryb25nPntwb3N0Mi5oZWFydENvdW50IHx8IDB9IPCfpI08L3N0cm9uZz5cbiAgICAgICAgPC9wPlxuXG4gICAgICAgIDxkaXYgc3R5bGU9e3tcbiAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWV2ZW5seVwiLFxuICAgICAgICBhbGlnbkl0ZW1zOiBcImZsZXgtZW5kXCIsXG4gICAgfX0+XG4gICAgICAgIDxBdXRoQ2hlY2tcbiAgICAgICAgICBmYWxsYmFjaz17XG4gICAgICAgICAgICA8TGluayBocmVmPVwiL2VudGVyXCI+XG4gICAgICAgICAgICAgIDxidXR0b24+8J+SlyBTaWduIFVwPC9idXR0b24+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgfVxuICAgICAgICA+XG4gICAgICAgICAgPEhlYXJ0QnV0dG9uIHBvc3RSZWY9e3Bvc3RSZWZ9IC8+XG4gICAgICAgIDwvQXV0aENoZWNrPlxuXG4gICAgICAgIHtjdXJyZW50VXNlcj8udWlkID09PSBwb3N0Mi51aWQgJiYgKFxuICAgICAgICAgIDxMaW5rIGhyZWY9e2AvYWRtaW4vJHtwb3N0Mi5zbHVnfWB9PlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4tYmx1ZVwiPkVkaXQgUG9zdDwvYnV0dG9uPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvYXNpZGU+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIFxuICAgICAgXG4gICk7XG59XG4iXSwibmFtZXMiOlsic3R5bGVzIiwiSGVhcnRCdXR0b24iLCJQb3N0Q29udGVudCIsIkF1dGhDaGVjayIsIkxpbmsiLCJVc2VyQ29udGV4dCIsImZpcmVzdG9yZSIsImdldFVzZXJXaXRoVXNlcm5hbWUiLCJwb3N0VG9KU09OIiwidXNlRG9jdW1lbnREYXRhIiwidXNlQ29udGV4dCIsIkxlYWRlciIsInBvc3QiLCJwb3N0UmVmIiwiZG9jIiwidWlkIiwic2x1ZyIsInJlYWx0aW1lUG9zdCIsInBvc3QyIiwiY3VycmVudFVzZXIiLCJ1c2VyIiwiZGl2IiwiY2xhc3NOYW1lIiwiYWxvbmUiLCJpbWciLCJpZCIsInNyYyIsImFsdCIsInN0eWxlIiwid2lkdGgiLCJoZWlnaHQiLCJib3JkZXIiLCJwYWRkaW5nIiwiYW5pbWF0aW9uIiwicCIsImFtb3VudCIsInNwYW4iLCJyZXZlbnVlIiwidXNlcm5hbWUiLCJhc2lkZSIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsInN0cm9uZyIsImhlYXJ0Q291bnQiLCJhbGlnbkl0ZW1zIiwiZmFsbGJhY2siLCJocmVmIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/leaders.js\n");

/***/ })

});