"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 9863:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ UserContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const UserContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({
    user: null,
    username: null
});


/***/ }),

/***/ 3409:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./lib/context.js
var context = __webpack_require__(9863);
// EXTERNAL MODULE: ./lib/firebase.js
var firebase = __webpack_require__(3925);
;// CONCATENATED MODULE: ./components/Navbar.js






// Top navbar
function Navbar() {
    const { user , username  } = (0,external_react_.useContext)(context/* UserContext */.S);
    const router = (0,router_.useRouter)();
    const signOut = ()=>{
        firebase/* auth.signOut */.I8.signOut();
        router.reload();
    };
    return(/*#__PURE__*/ jsx_runtime_.jsx("nav", {
        className: "navbar",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                        href: "/",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            className: "btn-logo",
                            children: "Blockonomics"
                        })
                    })
                }),
                username && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: "push-left",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                onClick: signOut,
                                children: "Sign Out"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                href: "/admin",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    className: "btn-blue",
                                    children: "Write Posts"
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                href: `/${username}`,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: (user === null || user === void 0 ? void 0 : user.photoURL) || '/hacker.png'
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                href: `/${username}`,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                    className: "text",
                                    children: `${username}` || 'Anonymus'
                                })
                            })
                        })
                    ]
                }),
                !username && /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                        href: "/enter",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            className: "btn-blue",
                            children: "Log in"
                        })
                    })
                })
            ]
        })
    }));
};

;// CONCATENATED MODULE: external "react-firebase-hooks/auth"
const auth_namespaceObject = require("react-firebase-hooks/auth");
;// CONCATENATED MODULE: ./lib/hooks.js



// Custom hook to read  auth record and user profile doc
function useUserData() {
    const [user] = (0,auth_namespaceObject.useAuthState)(firebase/* auth */.I8);
    const { 0: username , 1: setUsername  } = (0,external_react_.useState)(null);
    (0,external_react_.useEffect)(()=>{
        // turn off realtime subscription
        let unsubscribe;
        if (user) {
            const ref1 = firebase/* firestore.collection */.RZ.collection('users').doc(user.uid);
            unsubscribe = ref1.onSnapshot((doc)=>{
                var ref;
                setUsername((ref = doc.data()) === null || ref === void 0 ? void 0 : ref.username);
            });
        } else {
            setUsername(null);
        }
        return unsubscribe;
    }, [
        user
    ]);
    return {
        user,
        username
    };
}

// EXTERNAL MODULE: external "react-hot-toast"
var external_react_hot_toast_ = __webpack_require__(8922);
;// CONCATENATED MODULE: ./pages/_app.js






function MyApp({ Component , pageProps  }) {
    const userData = useUserData();
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(context/* UserContext.Provider */.S.Provider, {
        value: userData,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Navbar, {
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(external_react_hot_toast_.Toaster, {
            })
        ]
    }));
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 4324:
/***/ ((module) => {

module.exports = require("firebase/app");

/***/ }),

/***/ 4610:
/***/ ((module) => {

module.exports = require("firebase/auth");

/***/ }),

/***/ 6058:
/***/ ((module) => {

module.exports = require("firebase/firestore");

/***/ }),

/***/ 1668:
/***/ ((module) => {

module.exports = require("firebase/storage");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 8922:
/***/ ((module) => {

module.exports = require("react-hot-toast");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,664,925], () => (__webpack_exec__(3409)));
module.exports = __webpack_exports__;

})();