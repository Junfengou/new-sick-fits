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
      children: "Reset your password"
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
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("button", {
        type: "submit",
        children: "Request Password Reset"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 76,
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

_s(Reset, "e193DH/BWFG86650dAikxuPZLlg=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9SZXNldC5qcyJdLCJuYW1lcyI6WyJSRVFVRVNUX1JFU0VUX01VVEFUSU9OIiwiZ3FsIiwiUmVzZXQiLCJ1c2VGb3JtIiwiZW1haWwiLCJwYXNzd29yZCIsInRva2VuIiwiaW5wdXRzIiwiaGFuZGxlQ2hhbmdlIiwicmVzZXRGb3JtIiwidXNlTXV0YXRpb24iLCJ2YXJpYWJsZXMiLCJyZWZldGNoUXVlcmllcyIsInF1ZXJ5IiwiQ1VSUkVOVF9VU0VSX1FVRVJZIiwic2VuZFVzZXJQYXNzd29yZFJlc2V0TGluayIsImRhdGEiLCJlcnJvciIsImxvYWRpbmciLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsc0JBQXNCLEdBQUdDLGtEQUFILG1CQUE1Qjs7QUFTQSxTQUFTQyxLQUFULEdBQWlCO0FBQUE7O0FBQUEsaUJBQzRCQyw0REFBTyxDQUFDO0FBQ25EQyxTQUFLLEVBQUUsRUFENEM7QUFFbkRDLFlBQVEsRUFBRSxFQUZ5QztBQUduREMsU0FBSyxFQUFFO0FBSDRDLEdBQUQsQ0FEbkM7QUFBQSxNQUNSQyxNQURRLFlBQ1JBLE1BRFE7QUFBQSxNQUNBQyxZQURBLFlBQ0FBLFlBREE7QUFBQSxNQUNjQyxTQURkLFlBQ2NBLFNBRGQ7O0FBQUEscUJBTzhDQyxtRUFBVyxDQUN4RVYsc0JBRHdFLEVBRXhFO0FBQ0NXLGFBQVMsRUFBRUosTUFEWjtBQUVDO0FBQ0FLLGtCQUFjLEVBQUUsQ0FBQztBQUFFQyxXQUFLLEVBQUVDLHlEQUFrQkE7QUFBM0IsS0FBRDtBQUhqQixHQUZ3RSxDQVB6RDtBQUFBO0FBQUEsTUFPVEMseUJBUFM7QUFBQTtBQUFBLE1BT29CQyxJQVBwQixrQkFPb0JBLElBUHBCO0FBQUEsTUFPMEJDLEtBUDFCLGtCQU8wQkEsS0FQMUI7QUFBQSxNQU9pQ0MsT0FQakMsa0JBT2lDQSxPQVBqQzs7QUFBQSxXQWdCREMsWUFoQkM7QUFBQTtBQUFBOztBQUFBO0FBQUEsbVhBZ0JoQixpQkFBNEJDLENBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQ0EsZUFBQyxDQUFDQyxjQUFGLEdBREQsQ0FFQztBQUVBOztBQUpEO0FBQUEscUJBS09OLHlCQUF5QixXQUF6QixDQUFrQ08sT0FBTyxDQUFDTCxLQUExQyxDQUxQOztBQUFBO0FBTUNSLHVCQUFTOztBQU5WO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBaEJnQjtBQUFBO0FBQUE7O0FBeUJoQixzQkFDQyxxRUFBQyxvREFBRDtBQUFNLFVBQU0sRUFBQyxNQUFiO0FBQW9CLFlBQVEsRUFBRVUsWUFBOUI7QUFBQSw0QkFDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURELGVBRUMscUVBQUMsc0RBQUQ7QUFBTyxXQUFLLEVBQUVGO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZELGVBR0M7QUFBQSxpQkFDRSxDQUFBRCxJQUFJLFNBQUosSUFBQUEsSUFBSSxXQUFKLFlBQUFBLElBQUksQ0FBRUQseUJBQU4sTUFBb0MsSUFBcEMsaUJBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRixlQUtDO0FBQUEseUNBRUM7QUFDQyxjQUFJLEVBQUMsT0FETjtBQUVDLGNBQUksRUFBQyxPQUZOO0FBR0MscUJBQVcsRUFBQyxPQUhiO0FBSUMsc0JBQVksRUFBQyxPQUpkO0FBS0MsZUFBSyxFQUFFUixNQUFNLENBQUNILEtBTGY7QUFNQyxrQkFBUSxFQUFFSTtBQU5YO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTEQsZUFpQkM7QUFBQSw0Q0FFQztBQUNDLGNBQUksRUFBQyxVQUROO0FBRUMsY0FBSSxFQUFDLFVBRk47QUFHQyxxQkFBVyxFQUFDLFVBSGI7QUFJQyxlQUFLLEVBQUVELE1BQU0sQ0FBQ0YsUUFKZjtBQUtDLGtCQUFRLEVBQUVHO0FBTFg7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FqQkQsZUE0QkM7QUFBUSxZQUFJLEVBQUMsUUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQTVCRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFIRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERDtBQW9DQTs7R0E3RFFOLEs7VUFDb0NDLG9ELEVBTWtCTywyRDs7O0tBUHREUixLO0FBK0RNQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9yZXNldC5kYjNiZGE1MjNlZDUyZjNhMzA0Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgRm9ybSBmcm9tIFwiLi9zdHlsZXMvRm9ybVwiO1xyXG5pbXBvcnQgdXNlRm9ybSBmcm9tIFwiLi4vbGliL3VzZUZvcm1cIjtcclxuaW1wb3J0IGdxbCBmcm9tIFwiZ3JhcGhxbC10YWdcIjtcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgdXNlTXV0YXRpb24gfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcclxuaW1wb3J0IHsgQ1VSUkVOVF9VU0VSX1FVRVJZIH0gZnJvbSBcIi4vVXNlclwiO1xyXG5pbXBvcnQgRXJyb3IgZnJvbSBcIi4vRXJyb3JNZXNzYWdlXCI7XHJcblxyXG5jb25zdCBSRVFVRVNUX1JFU0VUX01VVEFUSU9OID0gZ3FsYFxyXG5cdG11dGF0aW9uIFJFUVVFU1RfUkVTRVRfTVVUQVRJT04oJGVtYWlsOiBTdHJpbmchKSB7XHJcblx0XHRzZW5kVXNlclBhc3N3b3JkUmVzZXRMaW5rKGVtYWlsOiAkZW1haWwpIHtcclxuXHRcdFx0Y29kZVxyXG5cdFx0XHRtZXNzYWdlXHJcblx0XHR9XHJcblx0fVxyXG5gO1xyXG5cclxuZnVuY3Rpb24gUmVzZXQoKSB7XHJcblx0Y29uc3QgeyBpbnB1dHMsIGhhbmRsZUNoYW5nZSwgcmVzZXRGb3JtIH0gPSB1c2VGb3JtKHtcclxuXHRcdGVtYWlsOiBcIlwiLFxyXG5cdFx0cGFzc3dvcmQ6IFwiXCIsXHJcblx0XHR0b2tlbjogXCJcIixcclxuXHR9KTtcclxuXHJcblx0Y29uc3QgW3NlbmRVc2VyUGFzc3dvcmRSZXNldExpbmssIHsgZGF0YSwgZXJyb3IsIGxvYWRpbmcgfV0gPSB1c2VNdXRhdGlvbihcclxuXHRcdFJFUVVFU1RfUkVTRVRfTVVUQVRJT04sXHJcblx0XHR7XHJcblx0XHRcdHZhcmlhYmxlczogaW5wdXRzLFxyXG5cdFx0XHQvLyByZWZldGNoIHRoZSBjdXJyZW50bHkgbG9nZ2VkIGluIHVzZXJcclxuXHRcdFx0cmVmZXRjaFF1ZXJpZXM6IFt7IHF1ZXJ5OiBDVVJSRU5UX1VTRVJfUVVFUlkgfV0sXHJcblx0XHR9XHJcblx0KTtcclxuXHJcblx0YXN5bmMgZnVuY3Rpb24gaGFuZGxlU3VibWl0KGUpIHtcclxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdC8vIGNvbnNvbGUubG9nKGlucHV0cyk7XHJcblxyXG5cdFx0Ly8gU2VuZCB0aGUgZW1haWwgYW5kIHBhc3N3b3JkIHRvIGdyYXBocWwgQVBJXHJcblx0XHRhd2FpdCBzZW5kVXNlclBhc3N3b3JkUmVzZXRMaW5rKCkuY2F0Y2goY29uc29sZS5lcnJvcik7XHJcblx0XHRyZXNldEZvcm0oKTtcclxuXHR9XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8Rm9ybSBtZXRob2Q9XCJQT1NUXCIgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcblx0XHRcdDxoMj5SZXNldCB5b3VyIHBhc3N3b3JkPC9oMj5cclxuXHRcdFx0PEVycm9yIGVycm9yPXtlcnJvcn0gLz5cclxuXHRcdFx0PGZpZWxkc2V0PlxyXG5cdFx0XHRcdHtkYXRhPy5zZW5kVXNlclBhc3N3b3JkUmVzZXRMaW5rID09PSBudWxsICYmIChcclxuXHRcdFx0XHRcdDxwPlN1Y2Nlc3MhIENoZWNrIHlvdXIgZW1haWwgZm9yIHRoZSBsaW5rPC9wPlxyXG5cdFx0XHRcdCl9XHJcblxyXG5cdFx0XHRcdDxsYWJlbD5cclxuXHRcdFx0XHRcdEVtYWlsXHJcblx0XHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdFx0dHlwZT1cImVtYWlsXCJcclxuXHRcdFx0XHRcdFx0bmFtZT1cImVtYWlsXCJcclxuXHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJlbWFpbFwiXHJcblx0XHRcdFx0XHRcdGF1dG9Db21wbGV0ZT1cImVtYWlsXCJcclxuXHRcdFx0XHRcdFx0dmFsdWU9e2lucHV0cy5lbWFpbH1cclxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0PC9sYWJlbD5cclxuXHJcblx0XHRcdFx0PGxhYmVsPlxyXG5cdFx0XHRcdFx0UGFzc3dvcmRcclxuXHRcdFx0XHRcdDxpbnB1dFxyXG5cdFx0XHRcdFx0XHR0eXBlPVwicGFzc3dvcmRcIlxyXG5cdFx0XHRcdFx0XHRuYW1lPVwicGFzc3dvcmRcIlxyXG5cdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cInBhc3N3b3JkXCJcclxuXHRcdFx0XHRcdFx0dmFsdWU9e2lucHV0cy5wYXNzd29yZH1cclxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0PC9sYWJlbD5cclxuXHJcblx0XHRcdFx0PGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+UmVxdWVzdCBQYXNzd29yZCBSZXNldDwvYnV0dG9uPlxyXG5cdFx0XHQ8L2ZpZWxkc2V0PlxyXG5cdFx0PC9Gb3JtPlxyXG5cdCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlc2V0O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9