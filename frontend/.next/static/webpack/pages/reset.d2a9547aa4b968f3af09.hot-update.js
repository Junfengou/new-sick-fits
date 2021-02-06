webpackHotUpdate_N_E("pages/reset",{

/***/ "./components/Reset.js":
/*!*****************************!*\
  !*** ./components/Reset.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var D_React_Advanced_React_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_React_Advanced_React_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(D_React_Advanced_React_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var D_React_Advanced_React_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var D_React_Advanced_React_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var D_React_Advanced_React_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styles_Form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles/Form */ "./components/styles/Form.js");
/* harmony import */ var _lib_useForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lib/useForm */ "./lib/useForm.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./User */ "./components/User.js");
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ErrorMessage */ "./components/ErrorMessage.js");






var _jsxFileName = "D:\\React\\Advanced-React\\Advanced-React\\sick-fits\\frontend\\components\\Reset.js",
    _s = $RefreshSig$();

function _templateObject() {
  var data = Object(D_React_Advanced_React_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_4__["default"])(["\n\tmutation REQUEST_RESET_MUTATION($email: String!) {\n\t\tsendUserPasswordResetLink(email: $email) {\n\t\t\tcode\n\t\t\tmessage\n\t\t}\n\t}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}









var REQUEST_RESET_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_8___default()(_templateObject());

function RequestReset() {
  _s();

  var _useForm = Object(_lib_useForm__WEBPACK_IMPORTED_MODULE_7__["default"])({
    email: "",
    password: "",
    token: ""
  }),
      inputs = _useForm.inputs,
      handleChange = _useForm.handleChange,
      resetForm = _useForm.resetForm;

  var _useMutation = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_10__["useMutation"])(REQUEST_RESET_MUTATION, {
    variables: inputs,
    // refetch the currently logged in user
    refetchQueries: [{
      query: _User__WEBPACK_IMPORTED_MODULE_11__["CURRENT_USER_QUERY"]
    }]
  }),
      _useMutation2 = Object(D_React_Advanced_React_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useMutation, 2),
      sendUserPasswordResetLink = _useMutation2[0],
      _useMutation2$ = _useMutation2[1],
      data = _useMutation2$.data,
      error = _useMutation2$.error,
      loading = _useMutation2$.loading;

  function handleSubmit(_x) {
    return _handleSubmit.apply(this, arguments);
  }

  function _handleSubmit() {
    _handleSubmit = Object(D_React_Advanced_React_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/D_React_Advanced_React_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {
      return D_React_Advanced_React_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault(); // console.log(inputs);
              // Send the email and password to graphql API

              _context.next = 3;
              return sendUserPasswordResetLink()["catch"](console.error);

            case 3:
              resetForm();

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _handleSubmit.apply(this, arguments);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_styles_Form__WEBPACK_IMPORTED_MODULE_6__["default"], {
    method: "POST",
    onSubmit: handleSubmit,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h2", {
      children: "Request for password reset"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_ErrorMessage__WEBPACK_IMPORTED_MODULE_12__["default"], {
      error: error
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("fieldset", {
      children: [(data === null || data === void 0 ? void 0 : data.sendUserPasswordResetLink) === null && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
        children: "Success! Check your email for the link"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 6
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("label", {
        children: ["Email", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
          type: "email",
          name: "email",
          placeholder: "email",
          autoComplete: "email",
          value: inputs.email,
          onChange: handleChange
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 5
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("label", {
        children: ["Password", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
          type: "password",
          name: "password",
          placeholder: "password",
          value: inputs.password,
          onChange: handleChange
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 5
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("label", {
        children: ["Email", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
          type: "email",
          name: "email",
          placeholder: "email",
          autoComplete: "email",
          value: inputs.email,
          onChange: handleChange
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 5
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("button", {
        type: "submit",
        children: "Request Password Reset"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 4
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 45,
    columnNumber: 3
  }, this);
}

_s(RequestReset, "e193DH/BWFG86650dAikxuPZLlg=", false, function () {
  return [_lib_useForm__WEBPACK_IMPORTED_MODULE_7__["default"], _apollo_client__WEBPACK_IMPORTED_MODULE_10__["useMutation"]];
});

_c = RequestReset;
/* harmony default export */ __webpack_exports__["default"] = (RequestReset);

var _c;

$RefreshReg$(_c, "RequestReset");

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

/***/ }),

/***/ "./pages/reset.js":
/*!************************!*\
  !*** ./pages/reset.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_RequestReset__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/RequestReset */ "./components/RequestReset.js");
/* harmony import */ var _components_Reset__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Reset */ "./components/Reset.js");

var _jsxFileName = "D:\\React\\Advanced-React\\Advanced-React\\sick-fits\\frontend\\pages\\reset.js";




function reset(_ref) {
  var query = _ref.query;

  if (!(query !== null && query !== void 0 && query.token)) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: "Sorry! You must supply a token!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 5
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_RequestReset__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 4
    }, this);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: ["Reset your password ", query.token]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Reset__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 4
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 3
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (reset);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9SZXNldC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcmVzZXQuanMiXSwibmFtZXMiOlsiUkVRVUVTVF9SRVNFVF9NVVRBVElPTiIsImdxbCIsIlJlcXVlc3RSZXNldCIsInVzZUZvcm0iLCJlbWFpbCIsInBhc3N3b3JkIiwidG9rZW4iLCJpbnB1dHMiLCJoYW5kbGVDaGFuZ2UiLCJyZXNldEZvcm0iLCJ1c2VNdXRhdGlvbiIsInZhcmlhYmxlcyIsInJlZmV0Y2hRdWVyaWVzIiwicXVlcnkiLCJDVVJSRU5UX1VTRVJfUVVFUlkiLCJzZW5kVXNlclBhc3N3b3JkUmVzZXRMaW5rIiwiZGF0YSIsImVycm9yIiwibG9hZGluZyIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJyZXNldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLHNCQUFzQixHQUFHQyxrREFBSCxtQkFBNUI7O0FBU0EsU0FBU0MsWUFBVCxHQUF3QjtBQUFBOztBQUFBLGlCQUNxQkMsNERBQU8sQ0FBQztBQUNuREMsU0FBSyxFQUFFLEVBRDRDO0FBRW5EQyxZQUFRLEVBQUUsRUFGeUM7QUFHbkRDLFNBQUssRUFBRTtBQUg0QyxHQUFELENBRDVCO0FBQUEsTUFDZkMsTUFEZSxZQUNmQSxNQURlO0FBQUEsTUFDUEMsWUFETyxZQUNQQSxZQURPO0FBQUEsTUFDT0MsU0FEUCxZQUNPQSxTQURQOztBQUFBLHFCQU91Q0MsbUVBQVcsQ0FDeEVWLHNCQUR3RSxFQUV4RTtBQUNDVyxhQUFTLEVBQUVKLE1BRFo7QUFFQztBQUNBSyxrQkFBYyxFQUFFLENBQUM7QUFBRUMsV0FBSyxFQUFFQyx5REFBa0JBO0FBQTNCLEtBQUQ7QUFIakIsR0FGd0UsQ0FQbEQ7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QSxZQUREO0FBTUE7O0FBRUQsc0JBQ0M7QUFBQSw0QkFDQztBQUFBLHlDQUF3Qk8sS0FBSyxDQUFDUCxLQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERCxlQUVDLHFFQUFDLHlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERDtBQU1BOztBQUVjaUIsb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcmVzZXQuZDJhOTU0N2FhNGI5NjhmM2FmMDkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEZvcm0gZnJvbSBcIi4vc3R5bGVzL0Zvcm1cIjtcclxuaW1wb3J0IHVzZUZvcm0gZnJvbSBcIi4uL2xpYi91c2VGb3JtXCI7XHJcbmltcG9ydCBncWwgZnJvbSBcImdyYXBocWwtdGFnXCI7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IHVzZU11dGF0aW9uIH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XHJcbmltcG9ydCB7IENVUlJFTlRfVVNFUl9RVUVSWSB9IGZyb20gXCIuL1VzZXJcIjtcclxuaW1wb3J0IEVycm9yIGZyb20gXCIuL0Vycm9yTWVzc2FnZVwiO1xyXG5cclxuY29uc3QgUkVRVUVTVF9SRVNFVF9NVVRBVElPTiA9IGdxbGBcclxuXHRtdXRhdGlvbiBSRVFVRVNUX1JFU0VUX01VVEFUSU9OKCRlbWFpbDogU3RyaW5nISkge1xyXG5cdFx0c2VuZFVzZXJQYXNzd29yZFJlc2V0TGluayhlbWFpbDogJGVtYWlsKSB7XHJcblx0XHRcdGNvZGVcclxuXHRcdFx0bWVzc2FnZVxyXG5cdFx0fVxyXG5cdH1cclxuYDtcclxuXHJcbmZ1bmN0aW9uIFJlcXVlc3RSZXNldCgpIHtcclxuXHRjb25zdCB7IGlucHV0cywgaGFuZGxlQ2hhbmdlLCByZXNldEZvcm0gfSA9IHVzZUZvcm0oe1xyXG5cdFx0ZW1haWw6IFwiXCIsXHJcblx0XHRwYXNzd29yZDogXCJcIixcclxuXHRcdHRva2VuOiBcIlwiLFxyXG5cdH0pO1xyXG5cclxuXHRjb25zdCBbc2VuZFVzZXJQYXNzd29yZFJlc2V0TGluaywgeyBkYXRhLCBlcnJvciwgbG9hZGluZyB9XSA9IHVzZU11dGF0aW9uKFxyXG5cdFx0UkVRVUVTVF9SRVNFVF9NVVRBVElPTixcclxuXHRcdHtcclxuXHRcdFx0dmFyaWFibGVzOiBpbnB1dHMsXHJcblx0XHRcdC8vIHJlZmV0Y2ggdGhlIGN1cnJlbnRseSBsb2dnZWQgaW4gdXNlclxyXG5cdFx0XHRyZWZldGNoUXVlcmllczogW3sgcXVlcnk6IENVUlJFTlRfVVNFUl9RVUVSWSB9XSxcclxuXHRcdH1cclxuXHQpO1xyXG5cclxuXHRhc3luYyBmdW5jdGlvbiBoYW5kbGVTdWJtaXQoZSkge1xyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0Ly8gY29uc29sZS5sb2coaW5wdXRzKTtcclxuXHJcblx0XHQvLyBTZW5kIHRoZSBlbWFpbCBhbmQgcGFzc3dvcmQgdG8gZ3JhcGhxbCBBUElcclxuXHRcdGF3YWl0IHNlbmRVc2VyUGFzc3dvcmRSZXNldExpbmsoKS5jYXRjaChjb25zb2xlLmVycm9yKTtcclxuXHRcdHJlc2V0Rm9ybSgpO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxGb3JtIG1ldGhvZD1cIlBPU1RcIiBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuXHRcdFx0PGgyPlJlcXVlc3QgZm9yIHBhc3N3b3JkIHJlc2V0PC9oMj5cclxuXHRcdFx0PEVycm9yIGVycm9yPXtlcnJvcn0gLz5cclxuXHRcdFx0PGZpZWxkc2V0PlxyXG5cdFx0XHRcdHtkYXRhPy5zZW5kVXNlclBhc3N3b3JkUmVzZXRMaW5rID09PSBudWxsICYmIChcclxuXHRcdFx0XHRcdDxwPlN1Y2Nlc3MhIENoZWNrIHlvdXIgZW1haWwgZm9yIHRoZSBsaW5rPC9wPlxyXG5cdFx0XHRcdCl9XHJcblxyXG5cdFx0XHRcdDxsYWJlbD5cclxuXHRcdFx0XHRcdEVtYWlsXHJcblx0XHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdFx0dHlwZT1cImVtYWlsXCJcclxuXHRcdFx0XHRcdFx0bmFtZT1cImVtYWlsXCJcclxuXHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJlbWFpbFwiXHJcblx0XHRcdFx0XHRcdGF1dG9Db21wbGV0ZT1cImVtYWlsXCJcclxuXHRcdFx0XHRcdFx0dmFsdWU9e2lucHV0cy5lbWFpbH1cclxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0PC9sYWJlbD5cclxuXHJcblx0XHRcdFx0PGxhYmVsPlxyXG5cdFx0XHRcdFx0UGFzc3dvcmRcclxuXHRcdFx0XHRcdDxpbnB1dFxyXG5cdFx0XHRcdFx0XHR0eXBlPVwicGFzc3dvcmRcIlxyXG5cdFx0XHRcdFx0XHRuYW1lPVwicGFzc3dvcmRcIlxyXG5cdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cInBhc3N3b3JkXCJcclxuXHRcdFx0XHRcdFx0dmFsdWU9e2lucHV0cy5wYXNzd29yZH1cclxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0PC9sYWJlbD5cclxuXHJcblx0XHRcdFx0PGxhYmVsPlxyXG5cdFx0XHRcdFx0RW1haWxcclxuXHRcdFx0XHRcdDxpbnB1dFxyXG5cdFx0XHRcdFx0XHR0eXBlPVwiZW1haWxcIlxyXG5cdFx0XHRcdFx0XHRuYW1lPVwiZW1haWxcIlxyXG5cdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cImVtYWlsXCJcclxuXHRcdFx0XHRcdFx0YXV0b0NvbXBsZXRlPVwiZW1haWxcIlxyXG5cdFx0XHRcdFx0XHR2YWx1ZT17aW5wdXRzLmVtYWlsfVxyXG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8L2xhYmVsPlxyXG5cclxuXHRcdFx0XHQ8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5SZXF1ZXN0IFBhc3N3b3JkIFJlc2V0PC9idXR0b24+XHJcblx0XHRcdDwvZmllbGRzZXQ+XHJcblx0XHQ8L0Zvcm0+XHJcblx0KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVxdWVzdFJlc2V0O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBSZXF1ZXN0UmVzZXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvUmVxdWVzdFJlc2V0XCI7XHJcbmltcG9ydCBSZXNldCBmcm9tIFwiLi4vY29tcG9uZW50cy9SZXNldFwiO1xyXG5cclxuZnVuY3Rpb24gcmVzZXQoeyBxdWVyeSB9KSB7XHJcblx0aWYgKCFxdWVyeT8udG9rZW4pIHtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDxkaXY+XHJcblx0XHRcdFx0PHA+U29ycnkhIFlvdSBtdXN0IHN1cHBseSBhIHRva2VuITwvcD5cclxuXHRcdFx0XHQ8UmVxdWVzdFJlc2V0IC8+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0KTtcclxuXHR9XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2PlxyXG5cdFx0XHQ8cD5SZXNldCB5b3VyIHBhc3N3b3JkIHtxdWVyeS50b2tlbn08L3A+XHJcblx0XHRcdDxSZXNldCAvPlxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVzZXQ7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=