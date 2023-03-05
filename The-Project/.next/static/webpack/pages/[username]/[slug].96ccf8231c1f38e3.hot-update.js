"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/[username]/[slug]",{

/***/ "./pages/[username]/[slug].js":
/*!************************************!*\
  !*** ./pages/[username]/[slug].js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ Post; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Post_module_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @styles/Post.module.css */ \"./styles/Post.module.css\");\n/* harmony import */ var _styles_Post_module_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _components_PostContent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/PostContent */ \"./components/PostContent.js\");\n/* harmony import */ var _components_HeartButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/HeartButton */ \"./components/HeartButton.js\");\n/* harmony import */ var _components_AuthCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/AuthCheck */ \"./components/AuthCheck.js\");\n/* harmony import */ var _components_Metatags__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/Metatags */ \"./components/Metatags.js\");\n/* harmony import */ var _lib_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @lib/context */ \"./lib/context.js\");\n/* harmony import */ var _lib_firebase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../lib/firebase */ \"./lib/firebase.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-firebase-hooks/firestore */ \"./node_modules/react-firebase-hooks/firestore/dist/index.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\n\n\n\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _e = undefined;\n    try {\n        for(var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true){\n            _arr.push(_s.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();\n}\nvar _s1 = $RefreshSig$();\nvar __N_SSG = true;\nfunction Post(props) {\n    _s1();\n    var postRef = _lib_firebase__WEBPACK_IMPORTED_MODULE_6__.firestore.doc(props.path);\n    var ref = _slicedToArray((0,react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_8__.useDocumentData)(postRef), 1), realtimePost = ref[0];\n    var post = realtimePost || props.post;\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_9__.useContext)(_lib_context__WEBPACK_IMPORTED_MODULE_5__.UserContext), currentUser = ref1.user;\n    console.log(props);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"main\", {\n        className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_10___default().container),\n        __source: {\n            fileName: \"/workspace/BitCoinRace/The-Project/pages/[username]/[slug].js\",\n            lineNumber: 63\n        },\n        __self: this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Metatags__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                title: post.title,\n                description: post.title,\n                __source: {\n                    fileName: \"/workspace/BitCoinRace/The-Project/pages/[username]/[slug].js\",\n                    lineNumber: 64\n                },\n                __self: this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"section\", {\n                __source: {\n                    fileName: \"/workspace/BitCoinRace/The-Project/pages/[username]/[slug].js\",\n                    lineNumber: 66\n                },\n                __self: this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_PostContent__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    post: post,\n                    __source: {\n                        fileName: \"/workspace/BitCoinRace/The-Project/pages/[username]/[slug].js\",\n                        lineNumber: 67\n                    },\n                    __self: this\n                })\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"aside\", {\n                className: \"card\",\n                __source: {\n                    fileName: \"/workspace/BitCoinRace/The-Project/pages/[username]/[slug].js\",\n                    lineNumber: 70\n                },\n                __self: this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                        __source: {\n                            fileName: \"/workspace/BitCoinRace/The-Project/pages/[username]/[slug].js\",\n                            lineNumber: 71\n                        },\n                        __self: this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"strong\", {\n                            __source: {\n                                fileName: \"/workspace/BitCoinRace/The-Project/pages/[username]/[slug].js\",\n                                lineNumber: 72\n                            },\n                            __self: this,\n                            children: [\n                                post.heartCount || 0,\n                                \" 🤍\"\n                            ]\n                        })\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_AuthCheck__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        fallback: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_7___default()), {\n                            href: \"/enter\",\n                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                                children: \"💗 Sign Up\"\n                            })\n                        }),\n                        __source: {\n                            fileName: \"/workspace/BitCoinRace/The-Project/pages/[username]/[slug].js\",\n                            lineNumber: 75\n                        },\n                        __self: this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_HeartButton__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            postRef: postRef,\n                            __source: {\n                                fileName: \"/workspace/BitCoinRace/The-Project/pages/[username]/[slug].js\",\n                                lineNumber: 82\n                            },\n                            __self: this\n                        })\n                    }),\n                    (currentUser === null || currentUser === void 0 ? void 0 : currentUser.uid) === post.uid && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_7___default()), {\n                        href: \"/admin/\".concat(post.slug),\n                        __source: {\n                            fileName: \"/workspace/BitCoinRace/The-Project/pages/[username]/[slug].js\",\n                            lineNumber: 86\n                        },\n                        __self: this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                            className: \"btn-blue\",\n                            __source: {\n                                fileName: \"/workspace/BitCoinRace/The-Project/pages/[username]/[slug].js\",\n                                lineNumber: 87\n                            },\n                            __self: this,\n                            children: \"Edit Post\"\n                        })\n                    })\n                ]\n            })\n        ]\n    }));\n};\n_s1(Post, \"NKHWVj1vjLpP3uySy3V1sk3iAWM=\", false, function() {\n    return [\n        react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_8__.useDocumentData\n    ];\n});\n_c = Post;\nvar _c;\n$RefreshReg$(_c, \"Post\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9bdXNlcm5hbWVdL1tzbHVnXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTRDO0FBQ0s7QUFDQTtBQUNKO0FBQ0Y7QUFDRDtBQUNxQztBQUVuRDtBQUNvQztBQUM5Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTJDbkIsUUFBUSxDQUFDVSxJQUFJLENBQUNDLEtBQUssRUFBRSxDQUFDOztJQUNuQyxHQUFLLENBQUNDLE9BQU8sR0FBR04sd0RBQWEsQ0FBQ0ssS0FBSyxDQUFDRyxJQUFJO0lBQ3hDLEdBQUssQ0FBa0JOLEdBQXdCLGtCQUF4QkEsK0VBQWUsQ0FBQ0ksT0FBTyxPQUF2Q0csWUFBWSxHQUFJUCxHQUF3QjtJQUUvQyxHQUFLLENBQUNRLElBQUksR0FBR0QsWUFBWSxJQUFJSixLQUFLLENBQUNLLElBQUk7SUFFdkMsR0FBSyxDQUF5QlAsSUFBdUIsR0FBdkJBLGlEQUFVLENBQUNKLHFEQUFXLEdBQXRDWSxXQUFXLEdBQUtSLElBQXVCLENBQTdDUyxJQUFJO0lBQ2RDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDVCxLQUFLO0lBQ2YsTUFBTSx1RUFDSFUsQ0FBSTtRQUFDQyxTQUFTLEVBQUV0QiwyRUFBZ0I7Ozs7Ozs7aUZBQzlCSSw0REFBUTtnQkFBQ29CLEtBQUssRUFBRVIsSUFBSSxDQUFDUSxLQUFLO2dCQUFFQyxXQUFXLEVBQUVULElBQUksQ0FBQ1EsS0FBSzs7Ozs7OztpRkFFbkRFLENBQU87Ozs7OzsrRkFDTHpCLCtEQUFXO29CQUFDZSxJQUFJLEVBQUVBLElBQUk7Ozs7Ozs7O2tGQUd4QlcsQ0FBSztnQkFBQ0wsU0FBUyxFQUFDLENBQU07Ozs7Ozs7eUZBQ3BCTSxDQUFDOzs7Ozs7d0dBQ0NDLENBQU07Ozs7Ozs7Z0NBQUViLElBQUksQ0FBQ2MsVUFBVSxJQUFJLENBQUM7Z0NBQUMsQ0FBRTs7Ozt5RkFHOUIzQiw2REFBTTt3QkFDUjRCLFFBQVEsdUVBQ0x4QixrREFBSTs0QkFBQ3lCLElBQUksRUFBQyxDQUFROzJHQUNoQkMsQ0FBTTswQ0FBQyxDQUFTOzs7Ozs7Ozt1R0FJcEIvQiwrREFBVzs0QkFBQ1UsT0FBTyxFQUFFQSxPQUFPOzs7Ozs7OztxQkFHOUJLLFdBQVcsYUFBWEEsV0FBVyxLQUFYQSxJQUFJLENBQUpBLENBQWdCLEdBQWhCQSxJQUFJLENBQUpBLENBQWdCLEdBQWhCQSxXQUFXLENBQUVpQixHQUFHLE1BQUtsQixJQUFJLENBQUNrQixHQUFHLHlFQUMzQjNCLGtEQUFJO3dCQUFDeUIsSUFBSSxFQUFHLENBQU8sU0FBWSxPQUFWaEIsSUFBSSxDQUFDbUIsSUFBSTs7Ozs7O3VHQUM1QkYsQ0FBTTs0QkFBQ1gsU0FBUyxFQUFDLENBQVU7Ozs7OztzQ0FBQyxDQUFTOzs7Ozs7O0FBTWxELENBQUM7SUF2Q3VCWixJQUFJOztRQUVIRiwyRUFBZTs7O0tBRmhCRSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL1t1c2VybmFtZV0vW3NsdWddLmpzP2RlZjIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICdAc3R5bGVzL1Bvc3QubW9kdWxlLmNzcyc7XG5pbXBvcnQgUG9zdENvbnRlbnQgZnJvbSAnQGNvbXBvbmVudHMvUG9zdENvbnRlbnQnO1xuaW1wb3J0IEhlYXJ0QnV0dG9uIGZyb20gJ0Bjb21wb25lbnRzL0hlYXJ0QnV0dG9uJztcbmltcG9ydCBBdXRoQ2hlY2sgZnJvbSAnQGNvbXBvbmVudHMvQXV0aENoZWNrJztcbmltcG9ydCBNZXRhdGFncyBmcm9tICdAY29tcG9uZW50cy9NZXRhdGFncyc7XG5pbXBvcnQgeyBVc2VyQ29udGV4dCB9IGZyb20gJ0BsaWIvY29udGV4dCc7XG5pbXBvcnQgeyBmaXJlc3RvcmUsIGdldFVzZXJXaXRoVXNlcm5hbWUsIHBvc3RUb0pTT04gfSBmcm9tICcuLi8uLi9saWIvZmlyZWJhc2UnO1xuXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHsgdXNlRG9jdW1lbnREYXRhIH0gZnJvbSAncmVhY3QtZmlyZWJhc2UtaG9va3MvZmlyZXN0b3JlJztcbmltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyh7IHBhcmFtcyB9KSB7XG4gIGNvbnN0IHsgdXNlcm5hbWUsIHNsdWcgfSA9IHBhcmFtcztcbiAgY29uc3QgdXNlckRvYyA9IGF3YWl0IGdldFVzZXJXaXRoVXNlcm5hbWUodXNlcm5hbWUpO1xuXG4gIGxldCBwb3N0O1xuICBsZXQgcGF0aDtcblxuICBpZiAodXNlckRvYykge1xuICAgIGNvbnN0IHBvc3RSZWYgPSB1c2VyRG9jLnJlZi5jb2xsZWN0aW9uKCdwb3N0cycpLmRvYyhzbHVnKTtcbiAgICBwb3N0ID0gcG9zdFRvSlNPTihhd2FpdCBwb3N0UmVmLmdldCgpKTtcblxuICAgIHBhdGggPSBwb3N0UmVmLnBhdGg7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7IHBvc3QsIHBhdGggfSxcbiAgICByZXZhbGlkYXRlOiAxMDAsXG4gIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcbiAgLy8gSW1wcm92ZSBteSB1c2luZyBBZG1pbiBTREsgdG8gc2VsZWN0IGVtcHR5IGRvY3NcbiAgY29uc3Qgc25hcHNob3QgPSBhd2FpdCBmaXJlc3RvcmUuY29sbGVjdGlvbkdyb3VwKCdwb3N0cycpLmdldCgpO1xuXG4gIGNvbnN0IHBhdGhzID0gc25hcHNob3QuZG9jcy5tYXAoKGRvYykgPT4ge1xuICAgIGNvbnN0IHsgc2x1ZywgdXNlcm5hbWUgfSA9IGRvYy5kYXRhKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHBhcmFtczogeyB1c2VybmFtZSwgc2x1ZyB9LFxuICAgIH07XG4gIH0pO1xuXG4gIHJldHVybiB7XG4gICAgLy8gbXVzdCBiZSBpbiB0aGlzIGZvcm1hdDpcbiAgICAvLyBwYXRoczogW1xuICAgIC8vICAgeyBwYXJhbXM6IHsgdXNlcm5hbWUsIHNsdWcgfX1cbiAgICAvLyBdLFxuICAgIHBhdGhzLFxuICAgIGZhbGxiYWNrOiAnYmxvY2tpbmcnLFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb3N0KHByb3BzKSB7XG4gIGNvbnN0IHBvc3RSZWYgPSBmaXJlc3RvcmUuZG9jKHByb3BzLnBhdGgpO1xuICBjb25zdCBbcmVhbHRpbWVQb3N0XSA9IHVzZURvY3VtZW50RGF0YShwb3N0UmVmKTtcblxuICBjb25zdCBwb3N0ID0gcmVhbHRpbWVQb3N0IHx8IHByb3BzLnBvc3Q7XG5cbiAgY29uc3QgeyB1c2VyOiBjdXJyZW50VXNlciB9ID0gdXNlQ29udGV4dChVc2VyQ29udGV4dCk7XG5jb25zb2xlLmxvZyhwcm9wcylcbiAgcmV0dXJuIChcbiAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPE1ldGF0YWdzIHRpdGxlPXtwb3N0LnRpdGxlfSBkZXNjcmlwdGlvbj17cG9zdC50aXRsZX0gLz5cbiAgICAgIFxuICAgICAgPHNlY3Rpb24+XG4gICAgICAgIDxQb3N0Q29udGVudCBwb3N0PXtwb3N0fSAvPlxuICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICA8YXNpZGUgY2xhc3NOYW1lPVwiY2FyZFwiPlxuICAgICAgICA8cD5cbiAgICAgICAgICA8c3Ryb25nPntwb3N0LmhlYXJ0Q291bnQgfHwgMH0g8J+kjTwvc3Ryb25nPlxuICAgICAgICA8L3A+XG5cbiAgICAgICAgPEF1dGhDaGVja1xuICAgICAgICAgIGZhbGxiYWNrPXtcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZW50ZXJcIj5cbiAgICAgICAgICAgICAgPGJ1dHRvbj7wn5KXIFNpZ24gVXA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICB9XG4gICAgICAgID5cbiAgICAgICAgICA8SGVhcnRCdXR0b24gcG9zdFJlZj17cG9zdFJlZn0gLz5cbiAgICAgICAgPC9BdXRoQ2hlY2s+XG5cbiAgICAgICAge2N1cnJlbnRVc2VyPy51aWQgPT09IHBvc3QudWlkICYmIChcbiAgICAgICAgICA8TGluayBocmVmPXtgL2FkbWluLyR7cG9zdC5zbHVnfWB9PlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4tYmx1ZVwiPkVkaXQgUG9zdDwvYnV0dG9uPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgKX1cbiAgICAgIDwvYXNpZGU+XG4gICAgPC9tYWluPlxuICApO1xufVxuIl0sIm5hbWVzIjpbInN0eWxlcyIsIlBvc3RDb250ZW50IiwiSGVhcnRCdXR0b24iLCJBdXRoQ2hlY2siLCJNZXRhdGFncyIsIlVzZXJDb250ZXh0IiwiZmlyZXN0b3JlIiwiTGluayIsInVzZURvY3VtZW50RGF0YSIsInVzZUNvbnRleHQiLCJQb3N0IiwicHJvcHMiLCJwb3N0UmVmIiwiZG9jIiwicGF0aCIsInJlYWx0aW1lUG9zdCIsInBvc3QiLCJjdXJyZW50VXNlciIsInVzZXIiLCJjb25zb2xlIiwibG9nIiwibWFpbiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJzZWN0aW9uIiwiYXNpZGUiLCJwIiwic3Ryb25nIiwiaGVhcnRDb3VudCIsImZhbGxiYWNrIiwiaHJlZiIsImJ1dHRvbiIsInVpZCIsInNsdWciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/[username]/[slug].js\n");

/***/ })

});