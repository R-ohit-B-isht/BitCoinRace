(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 6131:
/***/ ((module) => {

// Exports
module.exports = {
	"alone": "Board_alone__3PAOG",
	"crown": "Board_crown__26c0M",
	"crown-animation": "Board_crown-animation__1_A1j",
	"revenue": "Board_revenue__2DAEO"
};


/***/ }),

/***/ 6494:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Loader)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

// Loading Spinner
function Loader({ show  }) {
    return show ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "loader"
    }) : null;
};


/***/ }),

/***/ 7926:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./components/PostFeed.js
var PostFeed = __webpack_require__(8762);
// EXTERNAL MODULE: ./components/Metatags.js
var Metatags = __webpack_require__(7950);
// EXTERNAL MODULE: ./components/Loader.js
var Loader = __webpack_require__(6494);
// EXTERNAL MODULE: ./lib/firebase.js
var firebase = __webpack_require__(3925);
// EXTERNAL MODULE: ./styles/Board.module.css
var Board_module = __webpack_require__(6131);
var Board_module_default = /*#__PURE__*/__webpack_require__.n(Board_module);
// EXTERNAL MODULE: ./components/HeartButton.js
var HeartButton = __webpack_require__(5691);
// EXTERNAL MODULE: ./components/PostContent.js
var PostContent = __webpack_require__(2883);
// EXTERNAL MODULE: ./components/AuthCheck.js
var AuthCheck = __webpack_require__(8965);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./lib/context.js
var context = __webpack_require__(9863);
// EXTERNAL MODULE: external "react-firebase-hooks/firestore"
var firestore_ = __webpack_require__(8829);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./components/leaders.js










function Leader(post) {
    const postRef = firebase/* firestore.doc */.RZ.doc(`users/${post.post.uid}/posts/${post.post.slug}`);
    const [realtimePost] = (0,firestore_.useDocumentData)(postRef);
    const post2 = realtimePost || post.post;
    const { user: currentUser  } = (0,external_react_.useContext)(context/* UserContext */.S);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (Board_module_default()).alone,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        id: "crown",
                        src: "/crown.svg",
                        alt: "coroa",
                        style: {
                            width: "3rem",
                            height: "3rem",
                            border: "unset",
                            padding: "unset",
                            animation: "crown-animation 2s cubic-bezier(0.250, 0.460, 0.450, 0.940) both"
                        }
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        src: "/hacker.png",
                        alt: ""
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: `Top Post: $${post2.amount}`
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: (Board_module_default()).revenue,
                        children: `@${post2.username}`
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(PostContent/* default */.Z, {
                post: post2
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("aside", {
                className: "card",
                style: {
                    display: "flex",
                    justifyContent: "space-around"
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("strong", {
                            children: [
                                post2.heartCount || 0,
                                " 🤍"
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        style: {
                            display: "flex",
                            justifyContent: "space-evenly",
                            alignItems: "flex-end"
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(AuthCheck/* default */.Z, {
                                fallback: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                    href: "/enter",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                        children: "💗 Sign Up"
                                    })
                                }),
                                children: /*#__PURE__*/ jsx_runtime_.jsx(HeartButton/* default */.Z, {
                                    postRef: postRef
                                })
                            }),
                            (currentUser === null || currentUser === void 0 ? void 0 : currentUser.uid) === post2.uid && /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                href: `/admin/${post2.slug}`,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    className: "btn-blue",
                                    children: "Edit Post"
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    }));
};

;// CONCATENATED MODULE: ./pages/index.js







// Max post to query per page
const LIMIT = 10;
async function getServerSideProps(context) {
    const postsQuery = firebase/* firestore.collectionGroup */.RZ.collectionGroup('posts').where('published', '==', true).orderBy('createdAt', 'desc').limit(LIMIT);
    const posts = (await postsQuery.get()).docs.map(firebase/* postToJSON */.WS);
    return {
        props: {
            posts
        }
    };
}
function Home(props) {
    const { 0: posts , 1: setPosts  } = (0,external_react_.useState)(props.posts);
    const { 0: loading , 1: setLoading  } = (0,external_react_.useState)(false);
    const { 0: postsEnd , 1: setPostsEnd  } = (0,external_react_.useState)(false);
    // Get next page in pagination query
    const getMorePosts = async ()=>{
        setLoading(true);
        const last = posts[posts.length - 1];
        const cursor = typeof last.createdAt === 'number' ? (0,firebase/* fromMillis */.Lg)(last.createdAt) : last.createdAt;
        const query = firebase/* firestore.collectionGroup */.RZ.collectionGroup('posts').where('published', '==', true).orderBy('createdAt', 'desc').startAfter(cursor).limit(LIMIT);
        const newPosts = (await query.get()).docs.map((doc)=>doc.data()
        );
        setPosts(posts.concat(newPosts));
        setLoading(false);
        if (newPosts.length < LIMIT) {
            setPostsEnd(true);
        }
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Metatags/* default */.Z, {
                title: "Home Page",
                description: "Get the latest posts on our site"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Leader, {
                post: posts[0]
            }),
            !loading && !postsEnd && /*#__PURE__*/ jsx_runtime_.jsx("button", {
                onClick: getMorePosts,
                children: "Refresh"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Loader/* default */.Z, {
                show: loading
            }),
            postsEnd && 'Already Up-to-date'
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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,664,925,950,965,762,268], () => (__webpack_exec__(7926)));
module.exports = __webpack_exports__;

})();