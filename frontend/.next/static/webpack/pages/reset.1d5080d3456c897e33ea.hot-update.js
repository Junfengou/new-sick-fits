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
      children: [(data === null || data === void 0 ? void 0 : data.sendUserPasswordResetLink) === null && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
        children: "Success! Check your email for the link"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9SZXNldC5qcyJdLCJuYW1lcyI6WyJSRVNFVF9NVVRBVElPTiIsImdxbCIsIlJlc2V0IiwidXNlRm9ybSIsImVtYWlsIiwicGFzc3dvcmQiLCJ0b2tlbiIsImlucHV0cyIsImhhbmRsZUNoYW5nZSIsInJlc2V0Rm9ybSIsInVzZU11dGF0aW9uIiwidmFyaWFibGVzIiwicmVkZWVtVXNlclBhc3N3b3JkUmVzZXRUb2tlbiIsImRhdGEiLCJlcnJvciIsImxvYWRpbmciLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwic2VuZFVzZXJQYXNzd29yZFJlc2V0TGluayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLGNBQWMsR0FBR0Msa0RBQUgsbUJBQXBCOztBQWlCQSxTQUFTQyxLQUFULEdBQWlCO0FBQUE7O0FBQUEsaUJBQzRCQyw0REFBTyxDQUFDO0FBQ25EQyxTQUFLLEVBQUUsRUFENEM7QUFFbkRDLFlBQVEsRUFBRSxFQUZ5QztBQUduREMsU0FBSyxFQUFFO0FBSDRDLEdBQUQsQ0FEbkM7QUFBQSxNQUNSQyxNQURRLFlBQ1JBLE1BRFE7QUFBQSxNQUNBQyxZQURBLFlBQ0FBLFlBREE7QUFBQSxNQUNjQyxTQURkLFlBQ2NBLFNBRGQ7O0FBQUEscUJBT2lEQyxtRUFBVyxDQUMzRVYsY0FEMkUsRUFFM0U7QUFDQ1csYUFBUyxFQUFFSjtBQURaLEdBRjJFLENBUDVEO0FBQUE7QUFBQSxNQU9USyw0QkFQUztBQUFBO0FBQUEsTUFPdUJDLElBUHZCLGtCQU91QkEsSUFQdkI7QUFBQSxNQU82QkMsS0FQN0Isa0JBTzZCQSxLQVA3QjtBQUFBLE1BT29DQyxPQVBwQyxrQkFPb0NBLE9BUHBDOztBQUFBLFdBY0RDLFlBZEM7QUFBQTtBQUFBOztBQUFBO0FBQUEsbVhBY2hCLGlCQUE0QkMsQ0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNDQSxlQUFDLENBQUNDLGNBQUYsR0FERCxDQUVDO0FBRUE7O0FBSkQ7QUFBQSxxQkFLT04sNEJBQTRCLFdBQTVCLENBQXFDTyxPQUFPLENBQUNMLEtBQTdDLENBTFA7O0FBQUE7QUFNQ0wsdUJBQVM7O0FBTlY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FkZ0I7QUFBQTtBQUFBOztBQXVCaEIsc0JBQ0MscUVBQUMsb0RBQUQ7QUFBTSxVQUFNLEVBQUMsTUFBYjtBQUFvQixZQUFRLEVBQUVPLFlBQTlCO0FBQUEsNEJBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERCxlQUVDLHFFQUFDLHNEQUFEO0FBQU8sV0FBSyxFQUFFRjtBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRCxlQUdDO0FBQUEsaUJBQ0UsQ0FBQUQsSUFBSSxTQUFKLElBQUFBLElBQUksV0FBSixZQUFBQSxJQUFJLENBQUVPLHlCQUFOLE1BQW9DLElBQXBDLGlCQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkYsZUFLQztBQUFBLHlDQUVDO0FBQ0MsY0FBSSxFQUFDLE9BRE47QUFFQyxjQUFJLEVBQUMsT0FGTjtBQUdDLHFCQUFXLEVBQUMsT0FIYjtBQUlDLHNCQUFZLEVBQUMsT0FKZDtBQUtDLGVBQUssRUFBRWIsTUFBTSxDQUFDSCxLQUxmO0FBTUMsa0JBQVEsRUFBRUk7QUFOWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUxELGVBaUJDO0FBQUEsNENBRUM7QUFDQyxjQUFJLEVBQUMsVUFETjtBQUVDLGNBQUksRUFBQyxVQUZOO0FBR0MscUJBQVcsRUFBQyxVQUhiO0FBSUMsZUFBSyxFQUFFRCxNQUFNLENBQUNGLFFBSmY7QUFLQyxrQkFBUSxFQUFFRztBQUxYO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBakJELGVBNEJDO0FBQVEsWUFBSSxFQUFDLFFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0E1QkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREQ7QUFvQ0E7O0dBM0RRTixLO1VBQ29DQyxvRCxFQU1xQk8sMkQ7OztLQVB6RFIsSztBQTZETUEsb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcmVzZXQuMWQ1MDgwZDM0NTZjODk3ZTMzZWEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEZvcm0gZnJvbSBcIi4vc3R5bGVzL0Zvcm1cIjtcclxuaW1wb3J0IHVzZUZvcm0gZnJvbSBcIi4uL2xpYi91c2VGb3JtXCI7XHJcbmltcG9ydCBncWwgZnJvbSBcImdyYXBocWwtdGFnXCI7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IHVzZU11dGF0aW9uIH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XHJcbmltcG9ydCB7IENVUlJFTlRfVVNFUl9RVUVSWSB9IGZyb20gXCIuL1VzZXJcIjtcclxuaW1wb3J0IEVycm9yIGZyb20gXCIuL0Vycm9yTWVzc2FnZVwiO1xyXG5cclxuY29uc3QgUkVTRVRfTVVUQVRJT04gPSBncWxgXHJcblx0bXV0YXRpb24gUkVTRVRfTVVUQVRJT04oXHJcblx0XHQkZW1haWw6IFN0cmluZyFcclxuXHRcdCR0b2tlbjogU3RyaW5nIVxyXG5cdFx0JHBhc3N3b3JkOiBTdHJpbmchXHJcblx0KSB7XHJcblx0XHRyZWRlZW1Vc2VyUGFzc3dvcmRSZXNldFRva2VuKFxyXG5cdFx0XHRlbWFpbDogJGVtYWlsXHJcblx0XHRcdHRva2VuOiAkdG9rZW5cclxuXHRcdFx0cGFzc3dvcmQ6ICRwYXNzd29yZFxyXG5cdFx0KSB7XHJcblx0XHRcdGNvZGVcclxuXHRcdFx0bWVzc2FnZVxyXG5cdFx0fVxyXG5cdH1cclxuYDtcclxuXHJcbmZ1bmN0aW9uIFJlc2V0KCkge1xyXG5cdGNvbnN0IHsgaW5wdXRzLCBoYW5kbGVDaGFuZ2UsIHJlc2V0Rm9ybSB9ID0gdXNlRm9ybSh7XHJcblx0XHRlbWFpbDogXCJcIixcclxuXHRcdHBhc3N3b3JkOiBcIlwiLFxyXG5cdFx0dG9rZW46IFwiXCIsXHJcblx0fSk7XHJcblxyXG5cdGNvbnN0IFtyZWRlZW1Vc2VyUGFzc3dvcmRSZXNldFRva2VuLCB7IGRhdGEsIGVycm9yLCBsb2FkaW5nIH1dID0gdXNlTXV0YXRpb24oXHJcblx0XHRSRVNFVF9NVVRBVElPTixcclxuXHRcdHtcclxuXHRcdFx0dmFyaWFibGVzOiBpbnB1dHMsXHJcblx0XHR9XHJcblx0KTtcclxuXHJcblx0YXN5bmMgZnVuY3Rpb24gaGFuZGxlU3VibWl0KGUpIHtcclxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdC8vIGNvbnNvbGUubG9nKGlucHV0cyk7XHJcblxyXG5cdFx0Ly8gU2VuZCB0aGUgZW1haWwgYW5kIHBhc3N3b3JkIHRvIGdyYXBocWwgQVBJXHJcblx0XHRhd2FpdCByZWRlZW1Vc2VyUGFzc3dvcmRSZXNldFRva2VuKCkuY2F0Y2goY29uc29sZS5lcnJvcik7XHJcblx0XHRyZXNldEZvcm0oKTtcclxuXHR9XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8Rm9ybSBtZXRob2Q9XCJQT1NUXCIgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcblx0XHRcdDxoMj5SZXNldCB5b3VyIHBhc3N3b3JkPC9oMj5cclxuXHRcdFx0PEVycm9yIGVycm9yPXtlcnJvcn0gLz5cclxuXHRcdFx0PGZpZWxkc2V0PlxyXG5cdFx0XHRcdHtkYXRhPy5zZW5kVXNlclBhc3N3b3JkUmVzZXRMaW5rID09PSBudWxsICYmIChcclxuXHRcdFx0XHRcdDxwPlN1Y2Nlc3MhIENoZWNrIHlvdXIgZW1haWwgZm9yIHRoZSBsaW5rPC9wPlxyXG5cdFx0XHRcdCl9XHJcblxyXG5cdFx0XHRcdDxsYWJlbD5cclxuXHRcdFx0XHRcdEVtYWlsXHJcblx0XHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdFx0dHlwZT1cImVtYWlsXCJcclxuXHRcdFx0XHRcdFx0bmFtZT1cImVtYWlsXCJcclxuXHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJlbWFpbFwiXHJcblx0XHRcdFx0XHRcdGF1dG9Db21wbGV0ZT1cImVtYWlsXCJcclxuXHRcdFx0XHRcdFx0dmFsdWU9e2lucHV0cy5lbWFpbH1cclxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0PC9sYWJlbD5cclxuXHJcblx0XHRcdFx0PGxhYmVsPlxyXG5cdFx0XHRcdFx0UGFzc3dvcmRcclxuXHRcdFx0XHRcdDxpbnB1dFxyXG5cdFx0XHRcdFx0XHR0eXBlPVwicGFzc3dvcmRcIlxyXG5cdFx0XHRcdFx0XHRuYW1lPVwicGFzc3dvcmRcIlxyXG5cdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cInBhc3N3b3JkXCJcclxuXHRcdFx0XHRcdFx0dmFsdWU9e2lucHV0cy5wYXNzd29yZH1cclxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0PC9sYWJlbD5cclxuXHJcblx0XHRcdFx0PGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+UmVxdWVzdCBQYXNzd29yZCBSZXNldDwvYnV0dG9uPlxyXG5cdFx0XHQ8L2ZpZWxkc2V0PlxyXG5cdFx0PC9Gb3JtPlxyXG5cdCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlc2V0O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9