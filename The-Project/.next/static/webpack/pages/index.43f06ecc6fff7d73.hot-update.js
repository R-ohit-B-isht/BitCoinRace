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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_PostFeed__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/PostFeed */ \"./components/PostFeed.js\");\n/* harmony import */ var _components_Metatags__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/Metatags */ \"./components/Metatags.js\");\n/* harmony import */ var _components_Loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/Loader */ \"./components/Loader.js\");\n/* harmony import */ var _lib_firebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @lib/firebase */ \"./lib/firebase.js\");\n/* harmony import */ var _leaders__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./leaders */ \"./pages/leaders.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _s = $RefreshSig$();\n// Max post to query per page\nvar LIMIT = 10;\nvar __N_SSP = true;\nfunction Home(props) {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(props.posts), posts = ref[0], setPosts = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(false), loading = ref1[0], setLoading = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(false), postsEnd = ref2[0], setPostsEnd = ref2[1];\n    // Get next page in pagination query\n    var getMorePosts = _asyncToGenerator(regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n        var last, cursor, query, newPosts;\n        return regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    setLoading(true);\n                    last = posts[posts.length - 1];\n                    cursor = typeof last.createdAt === 'number' ? (0,_lib_firebase__WEBPACK_IMPORTED_MODULE_5__.fromMillis)(last.createdAt) : last.createdAt;\n                    query = _lib_firebase__WEBPACK_IMPORTED_MODULE_5__.firestore.collectionGroup('posts').where('published', '==', true).orderBy('createdAt', 'desc').startAfter(cursor).limit(LIMIT);\n                    _ctx.next = 6;\n                    return query.get();\n                case 6:\n                    newPosts = _ctx.sent.docs.map(function(doc) {\n                        return doc.data();\n                    });\n                    setPosts(posts.concat(newPosts));\n                    setLoading(false);\n                    if (newPosts.length < LIMIT) {\n                        setPostsEnd(true);\n                    }\n                case 10:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"main\", {\n        __source: {\n            fileName: \"/workspace/BitCoinRace/The-Project/pages/index.js\",\n            lineNumber: 56\n        },\n        __self: this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components_Metatags__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                title: \"Home Page\",\n                description: \"Get the latest posts on our site\",\n                __source: {\n                    fileName: \"/workspace/BitCoinRace/The-Project/pages/index.js\",\n                    lineNumber: 57\n                },\n                __self: this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_leaders__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                username: posts[0].username,\n                amount: post[0].amount,\n                __source: {\n                    fileName: \"/workspace/BitCoinRace/The-Project/pages/index.js\",\n                    lineNumber: 59\n                },\n                __self: this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components_PostFeed__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                posts: posts,\n                __source: {\n                    fileName: \"/workspace/BitCoinRace/The-Project/pages/index.js\",\n                    lineNumber: 61\n                },\n                __self: this\n            }),\n            !loading && !postsEnd && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"button\", {\n                onClick: getMorePosts,\n                __source: {\n                    fileName: \"/workspace/BitCoinRace/The-Project/pages/index.js\",\n                    lineNumber: 63\n                },\n                __self: this,\n                children: \"Refresh\"\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components_Loader__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                show: loading,\n                __source: {\n                    fileName: \"/workspace/BitCoinRace/The-Project/pages/index.js\",\n                    lineNumber: 65\n                },\n                __self: this\n            }),\n            postsEnd && 'You have reached the end!'\n        ]\n    }));\n};\n_s(Home, \"WufBgus/378/T5nU8E2AL/dgqSc=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTJDO0FBQ0E7QUFDSjtBQUMwQjtBQUNuQztBQUNFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWhDLEVBQTZCO0FBQzdCLEdBQUssQ0FBQ08sS0FBSyxHQUFHLEVBQUU7O0FBZ0JELFFBQVEsQ0FBQ0MsSUFBSSxDQUFDQyxLQUFLLEVBQUUsQ0FBQzs7SUFDbkMsR0FBSyxDQUFxQkgsR0FBcUIsR0FBckJBLCtDQUFRLENBQUNHLEtBQUssQ0FBQ0MsS0FBSyxHQUF2Q0EsS0FBSyxHQUFjSixHQUFxQixLQUFqQ0ssUUFBUSxHQUFJTCxHQUFxQjtJQUMvQyxHQUFLLENBQXlCQSxJQUFlLEdBQWZBLCtDQUFRLENBQUMsS0FBSyxHQUFyQ00sT0FBTyxHQUFnQk4sSUFBZSxLQUE3Qk8sVUFBVSxHQUFJUCxJQUFlO0lBRTdDLEdBQUssQ0FBMkJBLElBQWUsR0FBZkEsK0NBQVEsQ0FBQyxLQUFLLEdBQXZDUSxRQUFRLEdBQWlCUixJQUFlLEtBQTlCUyxXQUFXLEdBQUlULElBQWU7SUFFL0MsRUFBb0M7SUFDcEMsR0FBSyxDQUFDVSxZQUFZLHFGQUFHLFFBQVEsV0FBSSxDQUFDO1lBRTFCQyxJQUFJLEVBRUpDLE1BQU0sRUFFTkMsS0FBSyxFQU9MQyxRQUFROzs7O29CQVpkUCxVQUFVLENBQUMsSUFBSTtvQkFDVEksSUFBSSxHQUFHUCxLQUFLLENBQUNBLEtBQUssQ0FBQ1csTUFBTSxHQUFHLENBQUM7b0JBRTdCSCxNQUFNLEdBQUcsTUFBTSxDQUFDRCxJQUFJLENBQUNLLFNBQVMsS0FBSyxDQUFRLFVBQUdsQix5REFBVSxDQUFDYSxJQUFJLENBQUNLLFNBQVMsSUFBSUwsSUFBSSxDQUFDSyxTQUFTO29CQUV6RkgsS0FBSyxHQUFHaEIsb0VBQ0ksQ0FBQyxDQUFPLFFBQ3ZCcUIsS0FBSyxDQUFDLENBQVcsWUFBRSxDQUFJLEtBQUUsSUFBSSxFQUM3QkMsT0FBTyxDQUFDLENBQVcsWUFBRSxDQUFNLE9BQzNCQyxVQUFVLENBQUNSLE1BQU0sRUFDakJTLEtBQUssQ0FBQ3BCLEtBQUs7OzJCQUVVWSxLQUFLLENBQUNTLEdBQUc7O29CQUEzQlIsUUFBUSxhQUF1QlMsSUFBSSxDQUFDQyxHQUFHLENBQUMsUUFBUSxDQUFQQyxHQUFHO3dCQUFLQSxNQUFNLENBQU5BLEdBQUcsQ0FBQ0MsSUFBSTs7b0JBRS9EckIsUUFBUSxDQUFDRCxLQUFLLENBQUN1QixNQUFNLENBQUNiLFFBQVE7b0JBQzlCUCxVQUFVLENBQUMsS0FBSztvQkFFaEIsRUFBRSxFQUFFTyxRQUFRLENBQUNDLE1BQU0sR0FBR2QsS0FBSyxFQUFFLENBQUM7d0JBQzVCUSxXQUFXLENBQUMsSUFBSTtvQkFDbEIsQ0FBQzs7Ozs7O0lBQ0gsQ0FBQztJQUVELE1BQU0sdUVBQ0htQixDQUFJOzs7Ozs7O2lGQUNGakMsNERBQVE7Z0JBQUNrQyxLQUFLLEVBQUMsQ0FBVztnQkFBQ0MsV0FBVyxFQUFDLENBQWtDOzs7Ozs7O2lGQUV6RS9CLGdEQUFNO2dCQUFDZ0MsUUFBUSxFQUFHM0IsS0FBSyxDQUFDLENBQUMsRUFBRTJCLFFBQVE7Z0JBQUVDLE1BQU0sRUFBR0MsSUFBSSxDQUFDLENBQUMsRUFBRUQsTUFBTTs7Ozs7OztpRkFFNUR0Qyw0REFBUTtnQkFBQ1UsS0FBSyxFQUFFQSxLQUFLOzs7Ozs7O2FBRXBCRSxPQUFPLEtBQUtFLFFBQVEseUVBQUswQixDQUFNO2dCQUFDQyxPQUFPLEVBQUV6QixZQUFZOzs7Ozs7MEJBQUUsQ0FBTzs7aUZBRS9EZCwwREFBTTtnQkFBQ3dDLElBQUksRUFBRTlCLE9BQU87Ozs7Ozs7WUFFcEJFLFFBQVEsSUFBSSxDQUEyQjs7O0FBRzlDLENBQUM7R0E3Q3VCTixJQUFJO0tBQUpBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUG9zdEZlZWQgZnJvbSAnQGNvbXBvbmVudHMvUG9zdEZlZWQnO1xuaW1wb3J0IE1ldGF0YWdzIGZyb20gJ0Bjb21wb25lbnRzL01ldGF0YWdzJztcbmltcG9ydCBMb2FkZXIgZnJvbSAnQGNvbXBvbmVudHMvTG9hZGVyJztcbmltcG9ydCB7IGZpcmVzdG9yZSwgZnJvbU1pbGxpcywgcG9zdFRvSlNPTiB9IGZyb20gJ0BsaWIvZmlyZWJhc2UnO1xuaW1wb3J0IExlYWRlciBmcm9tICcuL2xlYWRlcnMnO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbi8vIE1heCBwb3N0IHRvIHF1ZXJ5IHBlciBwYWdlXG5jb25zdCBMSU1JVCA9IDEwO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcbiAgY29uc3QgcG9zdHNRdWVyeSA9IGZpcmVzdG9yZVxuICAgIC5jb2xsZWN0aW9uR3JvdXAoJ3Bvc3RzJylcbiAgICAud2hlcmUoJ3B1Ymxpc2hlZCcsICc9PScsIHRydWUpXG4gICAgLm9yZGVyQnkoJ2NyZWF0ZWRBdCcsICdkZXNjJylcbiAgICAubGltaXQoTElNSVQpO1xuXG4gIGNvbnN0IHBvc3RzID0gKGF3YWl0IHBvc3RzUXVlcnkuZ2V0KCkpLmRvY3MubWFwKHBvc3RUb0pTT04pO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHsgcG9zdHMgfSwgLy8gd2lsbCBiZSBwYXNzZWQgdG8gdGhlIHBhZ2UgY29tcG9uZW50IGFzIHByb3BzXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUocHJvcHMpIHtcbiAgY29uc3QgW3Bvc3RzLCBzZXRQb3N0c10gPSB1c2VTdGF0ZShwcm9wcy5wb3N0cyk7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBbcG9zdHNFbmQsIHNldFBvc3RzRW5kXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAvLyBHZXQgbmV4dCBwYWdlIGluIHBhZ2luYXRpb24gcXVlcnlcbiAgY29uc3QgZ2V0TW9yZVBvc3RzID0gYXN5bmMgKCkgPT4ge1xuICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgY29uc3QgbGFzdCA9IHBvc3RzW3Bvc3RzLmxlbmd0aCAtIDFdO1xuXG4gICAgY29uc3QgY3Vyc29yID0gdHlwZW9mIGxhc3QuY3JlYXRlZEF0ID09PSAnbnVtYmVyJyA/IGZyb21NaWxsaXMobGFzdC5jcmVhdGVkQXQpIDogbGFzdC5jcmVhdGVkQXQ7XG5cbiAgICBjb25zdCBxdWVyeSA9IGZpcmVzdG9yZVxuICAgICAgLmNvbGxlY3Rpb25Hcm91cCgncG9zdHMnKVxuICAgICAgLndoZXJlKCdwdWJsaXNoZWQnLCAnPT0nLCB0cnVlKVxuICAgICAgLm9yZGVyQnkoJ2NyZWF0ZWRBdCcsICdkZXNjJylcbiAgICAgIC5zdGFydEFmdGVyKGN1cnNvcilcbiAgICAgIC5saW1pdChMSU1JVCk7XG5cbiAgICBjb25zdCBuZXdQb3N0cyA9IChhd2FpdCBxdWVyeS5nZXQoKSkuZG9jcy5tYXAoKGRvYykgPT4gZG9jLmRhdGEoKSk7XG5cbiAgICBzZXRQb3N0cyhwb3N0cy5jb25jYXQobmV3UG9zdHMpKTtcbiAgICBzZXRMb2FkaW5nKGZhbHNlKTtcblxuICAgIGlmIChuZXdQb3N0cy5sZW5ndGggPCBMSU1JVCkge1xuICAgICAgc2V0UG9zdHNFbmQodHJ1ZSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPG1haW4+XG4gICAgICA8TWV0YXRhZ3MgdGl0bGU9XCJIb21lIFBhZ2VcIiBkZXNjcmlwdGlvbj1cIkdldCB0aGUgbGF0ZXN0IHBvc3RzIG9uIG91ciBzaXRlXCIgLz5cbiAgICAgIFxuICAgICAgPExlYWRlciB1c2VybmFtZT17IHBvc3RzWzBdLnVzZXJuYW1lfSBhbW91bnQ9eyBwb3N0WzBdLmFtb3VudCB9IC8+XG4gICBcbiAgICAgIDxQb3N0RmVlZCBwb3N0cz17cG9zdHN9IC8+XG5cbiAgICAgIHshbG9hZGluZyAmJiAhcG9zdHNFbmQgJiYgPGJ1dHRvbiBvbkNsaWNrPXtnZXRNb3JlUG9zdHN9PlJlZnJlc2g8L2J1dHRvbj59XG5cbiAgICAgIDxMb2FkZXIgc2hvdz17bG9hZGluZ30gLz5cblxuICAgICAge3Bvc3RzRW5kICYmICdZb3UgaGF2ZSByZWFjaGVkIHRoZSBlbmQhJ31cbiAgICA8L21haW4+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUG9zdEZlZWQiLCJNZXRhdGFncyIsIkxvYWRlciIsImZpcmVzdG9yZSIsImZyb21NaWxsaXMiLCJMZWFkZXIiLCJ1c2VTdGF0ZSIsIkxJTUlUIiwiSG9tZSIsInByb3BzIiwicG9zdHMiLCJzZXRQb3N0cyIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwicG9zdHNFbmQiLCJzZXRQb3N0c0VuZCIsImdldE1vcmVQb3N0cyIsImxhc3QiLCJjdXJzb3IiLCJxdWVyeSIsIm5ld1Bvc3RzIiwibGVuZ3RoIiwiY3JlYXRlZEF0IiwiY29sbGVjdGlvbkdyb3VwIiwid2hlcmUiLCJvcmRlckJ5Iiwic3RhcnRBZnRlciIsImxpbWl0IiwiZ2V0IiwiZG9jcyIsIm1hcCIsImRvYyIsImRhdGEiLCJjb25jYXQiLCJtYWluIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInVzZXJuYW1lIiwiYW1vdW50IiwicG9zdCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJzaG93Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});