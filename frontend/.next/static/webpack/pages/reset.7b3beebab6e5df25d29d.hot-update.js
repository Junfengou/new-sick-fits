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
  var data = Object(D_React_Advanced_React_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_4__["default"])(["\n\tmutation RESET_MUTATION(\n\t\t$email: String!\n\t\t$token: String!\n\t\t$password: String!\n\t) {\n\t\tredeemUserPasswordResetToken(\n\t\t\temail: $email\n\t\t\ttoken: $token\n\t\t\tpassword: $password\n\t\t) {\n\t\t\tcode\n\t\t\tmessage\n\t\t}\n\t}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}









var RESET_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_8___default()(_templateObject());

function Reset() {
  _s();

  var _useForm = Object(_lib_useForm__WEBPACK_IMPORTED_MODULE_7__["default"])({
    email: "",
    password: "",
    token: ""
  }),
      inputs = _useForm.inputs,
      handleChange = _useForm.handleChange,
      resetForm = _useForm.resetForm;

  var _useMutation = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_10__["useMutation"])(RESET_MUTATION, {
    variables: inputs
  }),
      _useMutation2 = Object(D_React_Advanced_React_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useMutation, 2),
      redeemUserPasswordResetToken = _useMutation2[0],
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
              return redeemUserPasswordResetToken()["catch"](console.error);

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
      children: "Reset your password"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_ErrorMessage__WEBPACK_IMPORTED_MODULE_12__["default"], {
      error: error
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("fieldset", {
      children: [(data === null || data === void 0 ? void 0 : data.redeemUserPasswordResetToken) === null && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
        children: "Success! You can now sign in"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
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
          lineNumber: 61,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 59,
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
          lineNumber: 73,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 5
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("button", {
        type: "submit",
        children: "Request Password Reset"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 4
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 51,
    columnNumber: 3
  }, this);
}

_s(Reset, "FfrgVKfAUJ1/VEPGiEDA7MuKrNw=", false, function () {
  return [_lib_useForm__WEBPACK_IMPORTED_MODULE_7__["default"], _apollo_client__WEBPACK_IMPORTED_MODULE_10__["useMutation"]];
});

_c = Reset;
/* harmony default export */ __webpack_exports__["default"] = (Reset);

var _c;

$RefreshReg$(_c, "Reset");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9SZXNldC5qcyJdLCJuYW1lcyI6WyJSRVNFVF9NVVRBVElPTiIsImdxbCIsIlJlc2V0IiwidXNlRm9ybSIsImVtYWlsIiwicGFzc3dvcmQiLCJ0b2tlbiIsImlucHV0cyIsImhhbmRsZUNoYW5nZSIsInJlc2V0Rm9ybSIsInVzZU11dGF0aW9uIiwidmFyaWFibGVzIiwicmVkZWVtVXNlclBhc3N3b3JkUmVzZXRUb2tlbiIsImRhdGEiLCJlcnJvciIsImxvYWRpbmciLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsY0FBYyxHQUFHQyxrREFBSCxtQkFBcEI7O0FBaUJBLFNBQVNDLEtBQVQsR0FBaUI7QUFBQTs7QUFBQSxpQkFDNEJDLDREQUFPLENBQUM7QUFDbkRDLFNBQUssRUFBRSxFQUQ0QztBQUVuREMsWUFBUSxFQUFFLEVBRnlDO0FBR25EQyxTQUFLLEVBQUU7QUFINEMsR0FBRCxDQURuQztBQUFBLE1BQ1JDLE1BRFEsWUFDUkEsTUFEUTtBQUFBLE1BQ0FDLFlBREEsWUFDQUEsWUFEQTtBQUFBLE1BQ2NDLFNBRGQsWUFDY0EsU0FEZDs7QUFBQSxxQkFPaURDLG1FQUFXLENBQzNFVixjQUQyRSxFQUUzRTtBQUNDVyxhQUFTLEVBQUVKO0FBRFosR0FGMkUsQ0FQNUQ7QUFBQTtBQUFBLE1BT1RLLDRCQVBTO0FBQUE7QUFBQSxNQU91QkMsSUFQdkIsa0JBT3VCQSxJQVB2QjtBQUFBLE1BTzZCQyxLQVA3QixrQkFPNkJBLEtBUDdCO0FBQUEsTUFPb0NDLE9BUHBDLGtCQU9vQ0EsT0FQcEM7O0FBQUEsV0FjREMsWUFkQztBQUFBO0FBQUE7O0FBQUE7QUFBQSxtWEFjaEIsaUJBQTRCQyxDQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0NBLGVBQUMsQ0FBQ0MsY0FBRixHQURELENBRUM7QUFFQTs7QUFKRDtBQUFBLHFCQUtPTiw0QkFBNEIsV0FBNUIsQ0FBcUNPLE9BQU8sQ0FBQ0wsS0FBN0MsQ0FMUDs7QUFBQTtBQU1DTCx1QkFBUzs7QUFOVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQWRnQjtBQUFBO0FBQUE7O0FBdUJoQixzQkFDQyxxRUFBQyxvREFBRDtBQUFNLFVBQU0sRUFBQyxNQUFiO0FBQW9CLFlBQVEsRUFBRU8sWUFBOUI7QUFBQSw0QkFDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURELGVBRUMscUVBQUMsc0RBQUQ7QUFBTyxXQUFLLEVBQUVGO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZELGVBR0M7QUFBQSxpQkFDRSxDQUFBRCxJQUFJLFNBQUosSUFBQUEsSUFBSSxXQUFKLFlBQUFBLElBQUksQ0FBRUQsNEJBQU4sTUFBdUMsSUFBdkMsaUJBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRixlQUtDO0FBQUEseUNBRUM7QUFDQyxjQUFJLEVBQUMsT0FETjtBQUVDLGNBQUksRUFBQyxPQUZOO0FBR0MscUJBQVcsRUFBQyxPQUhiO0FBSUMsc0JBQVksRUFBQyxPQUpkO0FBS0MsZUFBSyxFQUFFTCxNQUFNLENBQUNILEtBTGY7QUFNQyxrQkFBUSxFQUFFSTtBQU5YO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTEQsZUFpQkM7QUFBQSw0Q0FFQztBQUNDLGNBQUksRUFBQyxVQUROO0FBRUMsY0FBSSxFQUFDLFVBRk47QUFHQyxxQkFBVyxFQUFDLFVBSGI7QUFJQyxlQUFLLEVBQUVELE1BQU0sQ0FBQ0YsUUFKZjtBQUtDLGtCQUFRLEVBQUVHO0FBTFg7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FqQkQsZUE0QkM7QUFBUSxZQUFJLEVBQUMsUUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQTVCRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFIRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERDtBQW9DQTs7R0EzRFFOLEs7VUFDb0NDLG9ELEVBTXFCTywyRDs7O0tBUHpEUixLO0FBNkRNQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9yZXNldC43YjNiZWViYWI2ZTVkZjI1ZDI5ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgRm9ybSBmcm9tIFwiLi9zdHlsZXMvRm9ybVwiO1xyXG5pbXBvcnQgdXNlRm9ybSBmcm9tIFwiLi4vbGliL3VzZUZvcm1cIjtcclxuaW1wb3J0IGdxbCBmcm9tIFwiZ3JhcGhxbC10YWdcIjtcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgdXNlTXV0YXRpb24gfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcclxuaW1wb3J0IHsgQ1VSUkVOVF9VU0VSX1FVRVJZIH0gZnJvbSBcIi4vVXNlclwiO1xyXG5pbXBvcnQgRXJyb3IgZnJvbSBcIi4vRXJyb3JNZXNzYWdlXCI7XHJcblxyXG5jb25zdCBSRVNFVF9NVVRBVElPTiA9IGdxbGBcclxuXHRtdXRhdGlvbiBSRVNFVF9NVVRBVElPTihcclxuXHRcdCRlbWFpbDogU3RyaW5nIVxyXG5cdFx0JHRva2VuOiBTdHJpbmchXHJcblx0XHQkcGFzc3dvcmQ6IFN0cmluZyFcclxuXHQpIHtcclxuXHRcdHJlZGVlbVVzZXJQYXNzd29yZFJlc2V0VG9rZW4oXHJcblx0XHRcdGVtYWlsOiAkZW1haWxcclxuXHRcdFx0dG9rZW46ICR0b2tlblxyXG5cdFx0XHRwYXNzd29yZDogJHBhc3N3b3JkXHJcblx0XHQpIHtcclxuXHRcdFx0Y29kZVxyXG5cdFx0XHRtZXNzYWdlXHJcblx0XHR9XHJcblx0fVxyXG5gO1xyXG5cclxuZnVuY3Rpb24gUmVzZXQoKSB7XHJcblx0Y29uc3QgeyBpbnB1dHMsIGhhbmRsZUNoYW5nZSwgcmVzZXRGb3JtIH0gPSB1c2VGb3JtKHtcclxuXHRcdGVtYWlsOiBcIlwiLFxyXG5cdFx0cGFzc3dvcmQ6IFwiXCIsXHJcblx0XHR0b2tlbjogXCJcIixcclxuXHR9KTtcclxuXHJcblx0Y29uc3QgW3JlZGVlbVVzZXJQYXNzd29yZFJlc2V0VG9rZW4sIHsgZGF0YSwgZXJyb3IsIGxvYWRpbmcgfV0gPSB1c2VNdXRhdGlvbihcclxuXHRcdFJFU0VUX01VVEFUSU9OLFxyXG5cdFx0e1xyXG5cdFx0XHR2YXJpYWJsZXM6IGlucHV0cyxcclxuXHRcdH1cclxuXHQpO1xyXG5cclxuXHRhc3luYyBmdW5jdGlvbiBoYW5kbGVTdWJtaXQoZSkge1xyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0Ly8gY29uc29sZS5sb2coaW5wdXRzKTtcclxuXHJcblx0XHQvLyBTZW5kIHRoZSBlbWFpbCBhbmQgcGFzc3dvcmQgdG8gZ3JhcGhxbCBBUElcclxuXHRcdGF3YWl0IHJlZGVlbVVzZXJQYXNzd29yZFJlc2V0VG9rZW4oKS5jYXRjaChjb25zb2xlLmVycm9yKTtcclxuXHRcdHJlc2V0Rm9ybSgpO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxGb3JtIG1ldGhvZD1cIlBPU1RcIiBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuXHRcdFx0PGgyPlJlc2V0IHlvdXIgcGFzc3dvcmQ8L2gyPlxyXG5cdFx0XHQ8RXJyb3IgZXJyb3I9e2Vycm9yfSAvPlxyXG5cdFx0XHQ8ZmllbGRzZXQ+XHJcblx0XHRcdFx0e2RhdGE/LnJlZGVlbVVzZXJQYXNzd29yZFJlc2V0VG9rZW4gPT09IG51bGwgJiYgKFxyXG5cdFx0XHRcdFx0PHA+U3VjY2VzcyEgWW91IGNhbiBub3cgc2lnbiBpbjwvcD5cclxuXHRcdFx0XHQpfVxyXG5cclxuXHRcdFx0XHQ8bGFiZWw+XHJcblx0XHRcdFx0XHRFbWFpbFxyXG5cdFx0XHRcdFx0PGlucHV0XHJcblx0XHRcdFx0XHRcdHR5cGU9XCJlbWFpbFwiXHJcblx0XHRcdFx0XHRcdG5hbWU9XCJlbWFpbFwiXHJcblx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiZW1haWxcIlxyXG5cdFx0XHRcdFx0XHRhdXRvQ29tcGxldGU9XCJlbWFpbFwiXHJcblx0XHRcdFx0XHRcdHZhbHVlPXtpbnB1dHMuZW1haWx9XHJcblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdDwvbGFiZWw+XHJcblxyXG5cdFx0XHRcdDxsYWJlbD5cclxuXHRcdFx0XHRcdFBhc3N3b3JkXHJcblx0XHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdFx0dHlwZT1cInBhc3N3b3JkXCJcclxuXHRcdFx0XHRcdFx0bmFtZT1cInBhc3N3b3JkXCJcclxuXHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJwYXNzd29yZFwiXHJcblx0XHRcdFx0XHRcdHZhbHVlPXtpbnB1dHMucGFzc3dvcmR9XHJcblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdDwvbGFiZWw+XHJcblxyXG5cdFx0XHRcdDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlJlcXVlc3QgUGFzc3dvcmQgUmVzZXQ8L2J1dHRvbj5cclxuXHRcdFx0PC9maWVsZHNldD5cclxuXHRcdDwvRm9ybT5cclxuXHQpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZXNldDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==