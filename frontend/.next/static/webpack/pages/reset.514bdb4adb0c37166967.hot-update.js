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

  var _data$redeemUserPassw;

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
      loading = _useMutation2$.loading;

  var error = data !== null && data !== void 0 && (_data$redeemUserPassw = data.redeemUserPasswordResetToken) !== null && _data$redeemUserPassw !== void 0 && _data$redeemUserPassw.code ? data === null || data === void 0 ? void 0 : data.redeemUserPasswordResetToken : undefined;

  function handleSubmit(_x) {
    return _handleSubmit.apply(this, arguments);
  }

  function _handleSubmit() {
    _handleSubmit = Object(D_React_Advanced_React_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/D_React_Advanced_React_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {
      var res;
      return D_React_Advanced_React_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault();
              console.log(inputs); // Send the email and password to graphql API

              _context.next = 4;
              return redeemUserPasswordResetToken()["catch"](console.error);

            case 4:
              res = _context.sent;
              console.log(res);
              console.log({
                data: data,
                loading: loading,
                error: error
              });
              resetForm();

            case 8:
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
      lineNumber: 58,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_ErrorMessage__WEBPACK_IMPORTED_MODULE_12__["default"], {
      error: error
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("fieldset", {
      children: [(data === null || data === void 0 ? void 0 : data.redeemUserPasswordResetToken) === null && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
        children: "Success! You can now sign in"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
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
          lineNumber: 67,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 65,
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
          lineNumber: 79,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 77,
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
      lineNumber: 60,
      columnNumber: 4
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 57,
    columnNumber: 3
  }, this);
}

_s(Reset, "fRz37p1kXkyUE4DGXODlMJKsK3A=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9SZXNldC5qcyJdLCJuYW1lcyI6WyJSRVNFVF9NVVRBVElPTiIsImdxbCIsIlJlc2V0IiwidXNlRm9ybSIsImVtYWlsIiwicGFzc3dvcmQiLCJ0b2tlbiIsImlucHV0cyIsImhhbmRsZUNoYW5nZSIsInJlc2V0Rm9ybSIsInVzZU11dGF0aW9uIiwidmFyaWFibGVzIiwicmVkZWVtVXNlclBhc3N3b3JkUmVzZXRUb2tlbiIsImRhdGEiLCJsb2FkaW5nIiwiZXJyb3IiLCJjb2RlIiwidW5kZWZpbmVkIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsInJlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLGNBQWMsR0FBR0Msa0RBQUgsbUJBQXBCOztBQWlCQSxTQUFTQyxLQUFULEdBQWlCO0FBQUE7O0FBQUE7O0FBQUEsaUJBQzRCQyw0REFBTyxDQUFDO0FBQ25EQyxTQUFLLEVBQUUsRUFENEM7QUFFbkRDLFlBQVEsRUFBRSxFQUZ5QztBQUduREMsU0FBSyxFQUFFO0FBSDRDLEdBQUQsQ0FEbkM7QUFBQSxNQUNSQyxNQURRLFlBQ1JBLE1BRFE7QUFBQSxNQUNBQyxZQURBLFlBQ0FBLFlBREE7QUFBQSxNQUNjQyxTQURkLFlBQ2NBLFNBRGQ7O0FBQUEscUJBTzBDQyxtRUFBVyxDQUNwRVYsY0FEb0UsRUFFcEU7QUFDQ1csYUFBUyxFQUFFSjtBQURaLEdBRm9FLENBUHJEO0FBQUE7QUFBQSxNQU9USyw0QkFQUztBQUFBO0FBQUEsTUFPdUJDLElBUHZCLGtCQU91QkEsSUFQdkI7QUFBQSxNQU82QkMsT0FQN0Isa0JBTzZCQSxPQVA3Qjs7QUFjaEIsTUFBTUMsS0FBSyxHQUFHRixJQUFJLFNBQUosSUFBQUEsSUFBSSxXQUFKLDZCQUFBQSxJQUFJLENBQUVELDRCQUFOLHdFQUFvQ0ksSUFBcEMsR0FDWEgsSUFEVyxhQUNYQSxJQURXLHVCQUNYQSxJQUFJLENBQUVELDRCQURLLEdBRVhLLFNBRkg7O0FBZGdCLFdBa0JEQyxZQWxCQztBQUFBO0FBQUE7O0FBQUE7QUFBQSxtWEFrQmhCLGlCQUE0QkMsQ0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0NBLGVBQUMsQ0FBQ0MsY0FBRjtBQUNBQyxxQkFBTyxDQUFDQyxHQUFSLENBQVlmLE1BQVosRUFGRCxDQUlDOztBQUpEO0FBQUEscUJBS21CSyw0QkFBNEIsV0FBNUIsQ0FBcUNTLE9BQU8sQ0FBQ04sS0FBN0MsQ0FMbkI7O0FBQUE7QUFLT1EsaUJBTFA7QUFNQ0YscUJBQU8sQ0FBQ0MsR0FBUixDQUFZQyxHQUFaO0FBQ0FGLHFCQUFPLENBQUNDLEdBQVIsQ0FBWTtBQUFFVCxvQkFBSSxFQUFKQSxJQUFGO0FBQVFDLHVCQUFPLEVBQVBBLE9BQVI7QUFBaUJDLHFCQUFLLEVBQUxBO0FBQWpCLGVBQVo7QUFDQU4sdUJBQVM7O0FBUlY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FsQmdCO0FBQUE7QUFBQTs7QUE2QmhCLHNCQUNDLHFFQUFDLG9EQUFEO0FBQU0sVUFBTSxFQUFDLE1BQWI7QUFBb0IsWUFBUSxFQUFFUyxZQUE5QjtBQUFBLDRCQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREQsZUFFQyxxRUFBQyxzREFBRDtBQUFPLFdBQUssRUFBRUg7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkQsZUFHQztBQUFBLGlCQUNFLENBQUFGLElBQUksU0FBSixJQUFBQSxJQUFJLFdBQUosWUFBQUEsSUFBSSxDQUFFRCw0QkFBTixNQUF1QyxJQUF2QyxpQkFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGLGVBS0M7QUFBQSx5Q0FFQztBQUNDLGNBQUksRUFBQyxPQUROO0FBRUMsY0FBSSxFQUFDLE9BRk47QUFHQyxxQkFBVyxFQUFDLE9BSGI7QUFJQyxzQkFBWSxFQUFDLE9BSmQ7QUFLQyxlQUFLLEVBQUVMLE1BQU0sQ0FBQ0gsS0FMZjtBQU1DLGtCQUFRLEVBQUVJO0FBTlg7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FMRCxlQWlCQztBQUFBLDRDQUVDO0FBQ0MsY0FBSSxFQUFDLFVBRE47QUFFQyxjQUFJLEVBQUMsVUFGTjtBQUdDLHFCQUFXLEVBQUMsVUFIYjtBQUlDLGVBQUssRUFBRUQsTUFBTSxDQUFDRixRQUpmO0FBS0Msa0JBQVEsRUFBRUc7QUFMWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWpCRCxlQTRCQztBQUFRLFlBQUksRUFBQyxRQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBNUJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUREO0FBb0NBOztHQWpFUU4sSztVQUNvQ0Msb0QsRUFNY08sMkQ7OztLQVBsRFIsSztBQW1FTUEsb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcmVzZXQuNTE0YmRiNGFkYjBjMzcxNjY5NjcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEZvcm0gZnJvbSBcIi4vc3R5bGVzL0Zvcm1cIjtcclxuaW1wb3J0IHVzZUZvcm0gZnJvbSBcIi4uL2xpYi91c2VGb3JtXCI7XHJcbmltcG9ydCBncWwgZnJvbSBcImdyYXBocWwtdGFnXCI7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IHVzZU11dGF0aW9uIH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XHJcbmltcG9ydCB7IENVUlJFTlRfVVNFUl9RVUVSWSB9IGZyb20gXCIuL1VzZXJcIjtcclxuaW1wb3J0IEVycm9yIGZyb20gXCIuL0Vycm9yTWVzc2FnZVwiO1xyXG5cclxuY29uc3QgUkVTRVRfTVVUQVRJT04gPSBncWxgXHJcblx0bXV0YXRpb24gUkVTRVRfTVVUQVRJT04oXHJcblx0XHQkZW1haWw6IFN0cmluZyFcclxuXHRcdCR0b2tlbjogU3RyaW5nIVxyXG5cdFx0JHBhc3N3b3JkOiBTdHJpbmchXHJcblx0KSB7XHJcblx0XHRyZWRlZW1Vc2VyUGFzc3dvcmRSZXNldFRva2VuKFxyXG5cdFx0XHRlbWFpbDogJGVtYWlsXHJcblx0XHRcdHRva2VuOiAkdG9rZW5cclxuXHRcdFx0cGFzc3dvcmQ6ICRwYXNzd29yZFxyXG5cdFx0KSB7XHJcblx0XHRcdGNvZGVcclxuXHRcdFx0bWVzc2FnZVxyXG5cdFx0fVxyXG5cdH1cclxuYDtcclxuXHJcbmZ1bmN0aW9uIFJlc2V0KCkge1xyXG5cdGNvbnN0IHsgaW5wdXRzLCBoYW5kbGVDaGFuZ2UsIHJlc2V0Rm9ybSB9ID0gdXNlRm9ybSh7XHJcblx0XHRlbWFpbDogXCJcIixcclxuXHRcdHBhc3N3b3JkOiBcIlwiLFxyXG5cdFx0dG9rZW46IFwiXCIsXHJcblx0fSk7XHJcblxyXG5cdGNvbnN0IFtyZWRlZW1Vc2VyUGFzc3dvcmRSZXNldFRva2VuLCB7IGRhdGEsIGxvYWRpbmcgfV0gPSB1c2VNdXRhdGlvbihcclxuXHRcdFJFU0VUX01VVEFUSU9OLFxyXG5cdFx0e1xyXG5cdFx0XHR2YXJpYWJsZXM6IGlucHV0cyxcclxuXHRcdH1cclxuXHQpO1xyXG5cclxuXHRjb25zdCBlcnJvciA9IGRhdGE/LnJlZGVlbVVzZXJQYXNzd29yZFJlc2V0VG9rZW4/LmNvZGVcclxuXHRcdD8gZGF0YT8ucmVkZWVtVXNlclBhc3N3b3JkUmVzZXRUb2tlblxyXG5cdFx0OiB1bmRlZmluZWQ7XHJcblxyXG5cdGFzeW5jIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdChlKSB7XHJcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRjb25zb2xlLmxvZyhpbnB1dHMpO1xyXG5cclxuXHRcdC8vIFNlbmQgdGhlIGVtYWlsIGFuZCBwYXNzd29yZCB0byBncmFwaHFsIEFQSVxyXG5cdFx0Y29uc3QgcmVzID0gYXdhaXQgcmVkZWVtVXNlclBhc3N3b3JkUmVzZXRUb2tlbigpLmNhdGNoKGNvbnNvbGUuZXJyb3IpO1xyXG5cdFx0Y29uc29sZS5sb2cocmVzKTtcclxuXHRcdGNvbnNvbGUubG9nKHsgZGF0YSwgbG9hZGluZywgZXJyb3IgfSk7XHJcblx0XHRyZXNldEZvcm0oKTtcclxuXHR9XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8Rm9ybSBtZXRob2Q9XCJQT1NUXCIgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcblx0XHRcdDxoMj5SZXNldCB5b3VyIHBhc3N3b3JkPC9oMj5cclxuXHRcdFx0PEVycm9yIGVycm9yPXtlcnJvcn0gLz5cclxuXHRcdFx0PGZpZWxkc2V0PlxyXG5cdFx0XHRcdHtkYXRhPy5yZWRlZW1Vc2VyUGFzc3dvcmRSZXNldFRva2VuID09PSBudWxsICYmIChcclxuXHRcdFx0XHRcdDxwPlN1Y2Nlc3MhIFlvdSBjYW4gbm93IHNpZ24gaW48L3A+XHJcblx0XHRcdFx0KX1cclxuXHJcblx0XHRcdFx0PGxhYmVsPlxyXG5cdFx0XHRcdFx0RW1haWxcclxuXHRcdFx0XHRcdDxpbnB1dFxyXG5cdFx0XHRcdFx0XHR0eXBlPVwiZW1haWxcIlxyXG5cdFx0XHRcdFx0XHRuYW1lPVwiZW1haWxcIlxyXG5cdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cImVtYWlsXCJcclxuXHRcdFx0XHRcdFx0YXV0b0NvbXBsZXRlPVwiZW1haWxcIlxyXG5cdFx0XHRcdFx0XHR2YWx1ZT17aW5wdXRzLmVtYWlsfVxyXG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8L2xhYmVsPlxyXG5cclxuXHRcdFx0XHQ8bGFiZWw+XHJcblx0XHRcdFx0XHRQYXNzd29yZFxyXG5cdFx0XHRcdFx0PGlucHV0XHJcblx0XHRcdFx0XHRcdHR5cGU9XCJwYXNzd29yZFwiXHJcblx0XHRcdFx0XHRcdG5hbWU9XCJwYXNzd29yZFwiXHJcblx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwicGFzc3dvcmRcIlxyXG5cdFx0XHRcdFx0XHR2YWx1ZT17aW5wdXRzLnBhc3N3b3JkfVxyXG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8L2xhYmVsPlxyXG5cclxuXHRcdFx0XHQ8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5SZXF1ZXN0IFBhc3N3b3JkIFJlc2V0PC9idXR0b24+XHJcblx0XHRcdDwvZmllbGRzZXQ+XHJcblx0XHQ8L0Zvcm0+XHJcblx0KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVzZXQ7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=