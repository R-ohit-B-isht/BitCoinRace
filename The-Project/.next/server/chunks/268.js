"use strict";
exports.id = 268;
exports.ids = [268];
exports.modules = {

/***/ 5691:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Heart)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3925);
/* harmony import */ var react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8829);
/* harmony import */ var react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_2__);



// Allows user to heart or like a post
function Heart({ postRef  }) {
    // Listen to heart document for currently logged in user
    const heartRef = postRef.collection('hearts').doc(_lib_firebase__WEBPACK_IMPORTED_MODULE_1__/* .auth.currentUser.uid */ .I8.currentUser.uid);
    const [heartDoc] = (0,react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_2__.useDocument)(heartRef);
    // Create a user-to-post relationship
    const addHeart = async ()=>{
        const uid = _lib_firebase__WEBPACK_IMPORTED_MODULE_1__/* .auth.currentUser.uid */ .I8.currentUser.uid;
        const batch = _lib_firebase__WEBPACK_IMPORTED_MODULE_1__/* .firestore.batch */ .RZ.batch();
        batch.update(postRef, {
            heartCount: (0,_lib_firebase__WEBPACK_IMPORTED_MODULE_1__/* .increment */ .nP)(1)
        });
        batch.set(heartRef, {
            uid
        });
        await batch.commit();
    };
    // Remove a user-to-post relationship
    const removeHeart = async ()=>{
        const batch = _lib_firebase__WEBPACK_IMPORTED_MODULE_1__/* .firestore.batch */ .RZ.batch();
        batch.update(postRef, {
            heartCount: (0,_lib_firebase__WEBPACK_IMPORTED_MODULE_1__/* .increment */ .nP)(-1)
        });
        batch.delete(heartRef);
        await batch.commit();
    };
    return (heartDoc === null || heartDoc === void 0 ? void 0 : heartDoc.exists) ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        onClick: removeHeart,
        children: "💔 Unheart"
    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        onClick: addHeart,
        children: "💗 Heart"
    });
};


/***/ }),

/***/ 2883:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ PostContent)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3702);
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_2__);



// UI component for main post content
function PostContent({ post  }) {
    const createdAt = typeof (post === null || post === void 0 ? void 0 : post.createdAt) === 'number' ? new Date(post.createdAt) : post.createdAt.toDate();
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "card",
        style: {
            width: "100%"
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                children: post === null || post === void 0 ? void 0 : post.title
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                className: "text-sm",
                children: [
                    "Written by",
                    ' ',
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                        href: `/${post.username}/`,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                            className: "text-info",
                            children: [
                                "@",
                                post.username
                            ]
                        })
                    }),
                    ' ',
                    "on ",
                    createdAt.toISOString()
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_markdown__WEBPACK_IMPORTED_MODULE_2___default()), {
                children: post === null || post === void 0 ? void 0 : post.content
            })
        ]
    }));
};


/***/ })

};
;