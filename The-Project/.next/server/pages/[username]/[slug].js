(() => {
var exports = {};
exports.id = 551;
exports.ids = [551];
exports.modules = {

/***/ 5093:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Post_container__39vXa"
};


/***/ }),

/***/ 582:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "default": () => (/* binding */ Post)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_Post_module_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5093);
/* harmony import */ var _styles_Post_module_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_PostContent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2883);
/* harmony import */ var _components_HeartButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5691);
/* harmony import */ var _components_AuthCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8965);
/* harmony import */ var _components_Metatags__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7950);
/* harmony import */ var _lib_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9863);
/* harmony import */ var _lib_firebase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3925);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1664);
/* harmony import */ var react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8829);
/* harmony import */ var react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);











async function getStaticProps({ params  }) {
    const { username , slug  } = params;
    const userDoc = await (0,_lib_firebase__WEBPACK_IMPORTED_MODULE_6__/* .getUserWithUsername */ .Lp)(username);
    let post;
    let path;
    if (userDoc) {
        const postRef = userDoc.ref.collection('posts').doc(slug);
        post = (0,_lib_firebase__WEBPACK_IMPORTED_MODULE_6__/* .postToJSON */ .WS)(await postRef.get());
        path = postRef.path;
    }
    return {
        props: {
            post,
            path
        },
        revalidate: 100
    };
}
async function getStaticPaths() {
    // Improve my using Admin SDK to select empty docs
    const snapshot = await _lib_firebase__WEBPACK_IMPORTED_MODULE_6__/* .firestore.collectionGroup */ .RZ.collectionGroup('posts').get();
    const paths = snapshot.docs.map((doc)=>{
        const { slug , username  } = doc.data();
        return {
            params: {
                username,
                slug
            }
        };
    });
    return {
        // must be in this format:
        // paths: [
        //   { params: { username, slug }}
        // ],
        paths,
        fallback: 'blocking'
    };
}
function Post(props) {
    const postRef = _lib_firebase__WEBPACK_IMPORTED_MODULE_6__/* .firestore.doc */ .RZ.doc(props.path);
    console.log(props.path);
    const [realtimePost] = (0,react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_8__.useDocumentData)(postRef);
    const post = realtimePost || props.post;
    const { user: currentUser  } = (0,react__WEBPACK_IMPORTED_MODULE_9__.useContext)(_lib_context__WEBPACK_IMPORTED_MODULE_5__/* .UserContext */ .S);
    console.log(props);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
        className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_10___default().container),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Metatags__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                title: post.title,
                description: post.title
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_PostContent__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                    post: post
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("aside", {
                className: "card",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("strong", {
                            children: [
                                post.heartCount || 0,
                                " 🤍"
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_AuthCheck__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        fallback: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_7__["default"], {
                            href: "/enter",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                children: "💗 Sign Up"
                            })
                        }),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_HeartButton__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                            postRef: postRef
                        })
                    }),
                    (currentUser === null || currentUser === void 0 ? void 0 : currentUser.uid) === post.uid && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_7__["default"], {
                        href: `/admin/${post.slug}`,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            className: "btn-blue",
                            children: "Edit Post"
                        })
                    })
                ]
            })
        ]
    }));
};


/***/ }),

/***/ 4324:
/***/ ((module) => {

"use strict";
module.exports = require("firebase/app");

/***/ }),

/***/ 4610:
/***/ ((module) => {

"use strict";
module.exports = require("firebase/auth");

/***/ }),

/***/ 6058:
/***/ ((module) => {

"use strict";
module.exports = require("firebase/firestore");

/***/ }),

/***/ 1668:
/***/ ((module) => {

"use strict";
module.exports = require("firebase/storage");

/***/ }),

/***/ 562:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 8829:
/***/ ((module) => {

"use strict";
module.exports = require("react-firebase-hooks/firestore");

/***/ }),

/***/ 3702:
/***/ ((module) => {

"use strict";
module.exports = require("react-markdown");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,664,925,950,965,268], () => (__webpack_exec__(582)));
module.exports = __webpack_exports__;

})();