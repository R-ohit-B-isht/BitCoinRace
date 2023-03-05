"use strict";
exports.id = 925;
exports.ids = [925];
exports.modules = {

/***/ 3925:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I8": () => (/* binding */ auth),
/* harmony export */   "qV": () => (/* binding */ googleAuthProvider),
/* harmony export */   "RZ": () => (/* binding */ firestore),
/* harmony export */   "Bt": () => (/* binding */ serverTimestamp),
/* harmony export */   "Lg": () => (/* binding */ fromMillis),
/* harmony export */   "nP": () => (/* binding */ increment),
/* harmony export */   "tO": () => (/* binding */ storage),
/* harmony export */   "mC": () => (/* binding */ STATE_CHANGED),
/* harmony export */   "Lp": () => (/* binding */ getUserWithUsername),
/* harmony export */   "WS": () => (/* binding */ postToJSON)
/* harmony export */ });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4324);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4610);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_auth__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6058);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_firestore__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1668);
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase_storage__WEBPACK_IMPORTED_MODULE_3__);




const firebaseConfig = {
    apiKey: "AIzaSyDRbuRDNRvnrV0JsyMifvP36zt0wfq2UYk",
    authDomain: "nextadminglobe.firebaseapp.com",
    projectId: "nextadminglobe",
    storageBucket: "nextadminglobe.appspot.com",
    messagingSenderId: "54987627753",
    appId: "1:54987627753:web:205fae9348277c1b37e478",
    measurementId: "G-TV63T0ZKSH"
};
if (!(firebase_app__WEBPACK_IMPORTED_MODULE_0___default().apps.length)) {
    firebase_app__WEBPACK_IMPORTED_MODULE_0___default().initializeApp(firebaseConfig);
}
// Auth exports
const auth = firebase_app__WEBPACK_IMPORTED_MODULE_0___default().auth();
const googleAuthProvider = new (firebase_app__WEBPACK_IMPORTED_MODULE_0___default().auth.GoogleAuthProvider)();
// Firestore exports
const firestore = firebase_app__WEBPACK_IMPORTED_MODULE_0___default().firestore();
const serverTimestamp = (firebase_app__WEBPACK_IMPORTED_MODULE_0___default().firestore.FieldValue.serverTimestamp);
const fromMillis = (firebase_app__WEBPACK_IMPORTED_MODULE_0___default().firestore.Timestamp.fromMillis);
const increment = (firebase_app__WEBPACK_IMPORTED_MODULE_0___default().firestore.FieldValue.increment);
// Storage exports
const storage = firebase_app__WEBPACK_IMPORTED_MODULE_0___default().storage();
const STATE_CHANGED = (firebase_app__WEBPACK_IMPORTED_MODULE_0___default().storage.TaskEvent.STATE_CHANGED);
/// Helper functions
/**`
 * Gets a users/{uid} document with username
 * @param  {string} username
 */ async function getUserWithUsername(username) {
    const usersRef = firestore.collection('users');
    const query = usersRef.where('username', '==', username).limit(1);
    const userDoc = (await query.get()).docs[0];
    return userDoc;
}
/**`
 * Converts a firestore document to JSON
 * @param  {DocumentSnapshot} doc
 */ function postToJSON(doc) {
    const data = doc.data();
    return {
        ...data,
        // Gotcha! firestore timestamp NOT serializable to JSON. Must convert to milliseconds
        createdAt: (data === null || data === void 0 ? void 0 : data.createdAt.toMillis()) || 0,
        updatedAt: (data === null || data === void 0 ? void 0 : data.updatedAt.toMillis()) || 0
    };
}


/***/ })

};
;