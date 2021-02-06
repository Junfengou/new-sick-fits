webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/SignOut.js":
/*!*******************************!*\
  !*** ./components/SignOut.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var D_React_Advanced_React_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var D_React_Advanced_React_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./User */ "./components/User.js");




var _jsxFileName = "D:\\React\\Advanced-React\\Advanced-React\\sick-fits\\frontend\\components\\SignOut.js",
    _s = $RefreshSig$();

function _templateObject() {
  var data = Object(D_React_Advanced_React_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n\tmutation {\n\t\tendSession\n\t}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}






var SIGNOUT_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_4___default()(_templateObject());

function SignOut() {
  _s();

  var _useMutation = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_6__["useMutation"])(SIGNOUT_MUTATION, {
    refetchQueries: [{
      query: _User__WEBPACK_IMPORTED_MODULE_7__["CURRENT_USER_QUERY"]
    }]
  }),
      _useMutation2 = Object(D_React_Advanced_React_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useMutation, 1),
      signout = _useMutation2[0];

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
    type: "button",
    onClick: signout,
    children: "Sign Out"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 3
  }, this);
}

_s(SignOut, "JcM1gji1x+WxSeVI9a+dBgDxSEA=", false, function () {
  return [_apollo_client__WEBPACK_IMPORTED_MODULE_6__["useMutation"]];
});

_c = SignOut;
/* harmony default export */ __webpack_exports__["default"] = (SignOut);

var _c;

$RefreshReg$(_c, "SignOut");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TaWduT3V0LmpzIl0sIm5hbWVzIjpbIlNJR05PVVRfTVVUQVRJT04iLCJncWwiLCJTaWduT3V0IiwidXNlTXV0YXRpb24iLCJyZWZldGNoUXVlcmllcyIsInF1ZXJ5IiwiQ1VSUkVOVF9VU0VSX1FVRVJZIiwic2lnbm91dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxnQkFBZ0IsR0FBR0Msa0RBQUgsbUJBQXRCOztBQU1BLFNBQVNDLE9BQVQsR0FBbUI7QUFBQTs7QUFBQSxxQkFDQUMsa0VBQVcsQ0FBQ0gsZ0JBQUQsRUFBbUI7QUFDL0NJLGtCQUFjLEVBQUUsQ0FBQztBQUFFQyxXQUFLLEVBQUVDLHdEQUFrQkE7QUFBM0IsS0FBRDtBQUQrQixHQUFuQixDQURYO0FBQUE7QUFBQSxNQUNYQyxPQURXOztBQUtsQixzQkFDQztBQUFRLFFBQUksRUFBQyxRQUFiO0FBQXNCLFdBQU8sRUFBRUEsT0FBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERDtBQUtBOztHQVZRTCxPO1VBQ1VDLDBEOzs7S0FEVkQsTztBQVlNQSxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjkxY2QyNmVlZTJjYzEzYTU1MjlkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBncWwgZnJvbSBcImdyYXBocWwtdGFnXCI7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IHVzZU11dGF0aW9uIH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XHJcbmltcG9ydCB7IENVUlJFTlRfVVNFUl9RVUVSWSB9IGZyb20gXCIuL1VzZXJcIjtcclxuXHJcbmNvbnN0IFNJR05PVVRfTVVUQVRJT04gPSBncWxgXHJcblx0bXV0YXRpb24ge1xyXG5cdFx0ZW5kU2Vzc2lvblxyXG5cdH1cclxuYDtcclxuXHJcbmZ1bmN0aW9uIFNpZ25PdXQoKSB7XHJcblx0Y29uc3QgW3NpZ25vdXRdID0gdXNlTXV0YXRpb24oU0lHTk9VVF9NVVRBVElPTiwge1xyXG5cdFx0cmVmZXRjaFF1ZXJpZXM6IFt7IHF1ZXJ5OiBDVVJSRU5UX1VTRVJfUVVFUlkgfV0sXHJcblx0fSk7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXtzaWdub3V0fT5cclxuXHRcdFx0U2lnbiBPdXRcclxuXHRcdDwvYnV0dG9uPlxyXG5cdCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZ25PdXQ7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=