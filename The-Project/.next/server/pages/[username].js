"use strict";
(() => {
var exports = {};
exports.id = 280;
exports.ids = [280];
exports.modules = {

/***/ 3030:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ UserProfilePage),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./lib/firebase.js
var firebase = __webpack_require__(3925);
;// CONCATENATED MODULE: ./components/UserProfile.js

// UI component for user profile
function UserProfile({ user  }) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "box-center",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                src: user.photoURL || '/hacker.png',
                className: "card-img-center"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("i", {
                    children: [
                        "@",
                        user.username
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                children: user.displayName || 'Anonymous User'
            })
        ]
    }));
};

// EXTERNAL MODULE: ./components/Metatags.js
var Metatags = __webpack_require__(7950);
// EXTERNAL MODULE: ./components/PostFeed.js
var PostFeed = __webpack_require__(8762);
;// CONCATENATED MODULE: ./pages/[username]/index.js





async function getServerSideProps({ query  }) {
    const { username  } = query;
    const userDoc = await (0,firebase/* getUserWithUsername */.Lp)(username);
    // If no user, short circuit to 404 page
    if (!userDoc) {
        return {
            notFound: true
        };
    }
    // JSON serializable data
    let user = null;
    let posts = null;
    if (userDoc) {
        user = userDoc.data();
        const postsQuery = userDoc.ref.collection('posts').where('published', '==', true).orderBy('createdAt', 'desc').limit(5);
        posts = (await postsQuery.get()).docs.map(firebase/* postToJSON */.WS);
    }
    return {
        props: {
            user,
            posts
        }
    };
}
function UserProfilePage({ user , posts  }) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Metatags/* default */.Z, {
                title: user.username,
                description: `${user.username}'s public profile`
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(UserProfile, {
                user: user
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(PostFeed/* default */.Z, {
                posts: posts
            })
        ]
    }));
};


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

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

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
var __webpack_exports__ = __webpack_require__.X(0, [730,664,925,950,762], () => (__webpack_exec__(3030)));
module.exports = __webpack_exports__;

})();