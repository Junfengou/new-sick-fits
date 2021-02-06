webpackHotUpdate_N_E("pages/signin",{

/***/ "./components/RequestReset.js":
/*!************************************!*\
  !*** ./components/RequestReset.js ***!
  \************************************/
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






var _jsxFileName = "D:\\React\\Advanced-React\\Advanced-React\\sick-fits\\frontend\\components\\RequestReset.js",
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
    email: ""
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
      createUser = _useMutation2[0],
      _useMutation2$ = _useMutation2[1],
      data = _useMutation2$.data,
      error = _useMutation2$.error,
      loading = _useMutation2$.loading;

  function handleSubmit(_x) {
    return _handleSubmit.apply(this, arguments);
  }
  /*
     const error =
  	data?.authenticateUserWithPassword.__typename ===
  	"UserAuthenticationWithPasswordFailure"
  		? data?.authenticateUserWithPassword
  		: undefined;
     */


  function _handleSubmit() {
    _handleSubmit = Object(D_React_Advanced_React_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/D_React_Advanced_React_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {
      return D_React_Advanced_React_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault(); // console.log(inputs);
              // Send the email and password to graphql API

              _context.next = 3;
              return createUser()["catch"](console.error);

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
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("button", {
        type: "submit",
        children: "Request Password Reset"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
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

_s(RequestReset, "Hey+PLIfNSKj3L2KEtLiUA1J5qs=", false, function () {
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9SZXF1ZXN0UmVzZXQuanMiXSwibmFtZXMiOlsiUkVRVUVTVF9SRVNFVF9NVVRBVElPTiIsImdxbCIsIlJlcXVlc3RSZXNldCIsInVzZUZvcm0iLCJlbWFpbCIsImlucHV0cyIsImhhbmRsZUNoYW5nZSIsInJlc2V0Rm9ybSIsInVzZU11dGF0aW9uIiwidmFyaWFibGVzIiwicmVmZXRjaFF1ZXJpZXMiLCJxdWVyeSIsIkNVUlJFTlRfVVNFUl9RVUVSWSIsImNyZWF0ZVVzZXIiLCJkYXRhIiwiZXJyb3IiLCJsb2FkaW5nIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsInNlbmRVc2VyUGFzc3dvcmRSZXNldExpbmsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxzQkFBc0IsR0FBR0Msa0RBQUgsbUJBQTVCOztBQVNBLFNBQVNDLFlBQVQsR0FBd0I7QUFBQTs7QUFBQSxpQkFDcUJDLDREQUFPLENBQUM7QUFDbkRDLFNBQUssRUFBRTtBQUQ0QyxHQUFELENBRDVCO0FBQUEsTUFDZkMsTUFEZSxZQUNmQSxNQURlO0FBQUEsTUFDUEMsWUFETyxZQUNQQSxZQURPO0FBQUEsTUFDT0MsU0FEUCxZQUNPQSxTQURQOztBQUFBLHFCQUt3QkMsbUVBQVcsQ0FDekRSLHNCQUR5RCxFQUV6RDtBQUNDUyxhQUFTLEVBQUVKLE1BRFo7QUFFQztBQUNBSyxrQkFBYyxFQUFFLENBQUM7QUFBRUMsV0FBSyxFQUFFQyx5REFBa0JBO0FBQTNCLEtBQUQ7QUFIakIsR0FGeUQsQ0FMbkM7QUFBQTtBQUFBLE1BS2hCQyxVQUxnQjtBQUFBO0FBQUEsTUFLRkMsSUFMRSxrQkFLRkEsSUFMRTtBQUFBLE1BS0lDLEtBTEosa0JBS0lBLEtBTEo7QUFBQSxNQUtXQyxPQUxYLGtCQUtXQSxPQUxYOztBQUFBLFdBY1JDLFlBZFE7QUFBQTtBQUFBO0FBdUJ2QjtBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBN0J3QjtBQUFBLG1YQWN2QixpQkFBNEJDLENBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQ0EsZUFBQyxDQUFDQyxjQUFGLEdBREQsQ0FFQztBQUVBOztBQUpEO0FBQUEscUJBS09OLFVBQVUsV0FBVixDQUFtQk8sT0FBTyxDQUFDTCxLQUEzQixDQUxQOztBQUFBO0FBTUNSLHVCQUFTOztBQU5WO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBZHVCO0FBQUE7QUFBQTs7QUErQnZCLHNCQUNDLHFFQUFDLG9EQUFEO0FBQU0sVUFBTSxFQUFDLE1BQWI7QUFBb0IsWUFBUSxFQUFFVSxZQUE5QjtBQUFBLDRCQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREQsZUFFQyxxRUFBQyxzREFBRDtBQUFPLFdBQUssRUFBRUY7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkQsZUFHQztBQUFBLGlCQUNFLENBQUFELElBQUksU0FBSixJQUFBQSxJQUFJLFdBQUosWUFBQUEsSUFBSSxDQUFFTyx5QkFBTixNQUFvQyxJQUFwQyxpQkFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGLGVBS0M7QUFBQSx5Q0FFQztBQUNDLGNBQUksRUFBQyxPQUROO0FBRUMsY0FBSSxFQUFDLE9BRk47QUFHQyxxQkFBVyxFQUFDLE9BSGI7QUFJQyxzQkFBWSxFQUFDLE9BSmQ7QUFLQyxlQUFLLEVBQUVoQixNQUFNLENBQUNELEtBTGY7QUFNQyxrQkFBUSxFQUFFRTtBQU5YO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTEQsZUFpQkM7QUFBUSxZQUFJLEVBQUMsUUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWpCRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFIRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERDtBQXlCQTs7R0F4RFFKLFk7VUFDb0NDLG9ELEVBSUdLLDJEOzs7S0FMdkNOLFk7QUEwRE1BLDJFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NpZ25pbi5jMTNmM2E1YThjZTQxZmRlYzQyZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgRm9ybSBmcm9tIFwiLi9zdHlsZXMvRm9ybVwiO1xyXG5pbXBvcnQgdXNlRm9ybSBmcm9tIFwiLi4vbGliL3VzZUZvcm1cIjtcclxuaW1wb3J0IGdxbCBmcm9tIFwiZ3JhcGhxbC10YWdcIjtcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgdXNlTXV0YXRpb24gfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcclxuaW1wb3J0IHsgQ1VSUkVOVF9VU0VSX1FVRVJZIH0gZnJvbSBcIi4vVXNlclwiO1xyXG5pbXBvcnQgRXJyb3IgZnJvbSBcIi4vRXJyb3JNZXNzYWdlXCI7XHJcblxyXG5jb25zdCBSRVFVRVNUX1JFU0VUX01VVEFUSU9OID0gZ3FsYFxyXG5cdG11dGF0aW9uIFJFUVVFU1RfUkVTRVRfTVVUQVRJT04oJGVtYWlsOiBTdHJpbmchKSB7XHJcblx0XHRzZW5kVXNlclBhc3N3b3JkUmVzZXRMaW5rKGVtYWlsOiAkZW1haWwpIHtcclxuXHRcdFx0Y29kZVxyXG5cdFx0XHRtZXNzYWdlXHJcblx0XHR9XHJcblx0fVxyXG5gO1xyXG5cclxuZnVuY3Rpb24gUmVxdWVzdFJlc2V0KCkge1xyXG5cdGNvbnN0IHsgaW5wdXRzLCBoYW5kbGVDaGFuZ2UsIHJlc2V0Rm9ybSB9ID0gdXNlRm9ybSh7XHJcblx0XHRlbWFpbDogXCJcIixcclxuXHR9KTtcclxuXHJcblx0Y29uc3QgW2NyZWF0ZVVzZXIsIHsgZGF0YSwgZXJyb3IsIGxvYWRpbmcgfV0gPSB1c2VNdXRhdGlvbihcclxuXHRcdFJFUVVFU1RfUkVTRVRfTVVUQVRJT04sXHJcblx0XHR7XHJcblx0XHRcdHZhcmlhYmxlczogaW5wdXRzLFxyXG5cdFx0XHQvLyByZWZldGNoIHRoZSBjdXJyZW50bHkgbG9nZ2VkIGluIHVzZXJcclxuXHRcdFx0cmVmZXRjaFF1ZXJpZXM6IFt7IHF1ZXJ5OiBDVVJSRU5UX1VTRVJfUVVFUlkgfV0sXHJcblx0XHR9XHJcblx0KTtcclxuXHJcblx0YXN5bmMgZnVuY3Rpb24gaGFuZGxlU3VibWl0KGUpIHtcclxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdC8vIGNvbnNvbGUubG9nKGlucHV0cyk7XHJcblxyXG5cdFx0Ly8gU2VuZCB0aGUgZW1haWwgYW5kIHBhc3N3b3JkIHRvIGdyYXBocWwgQVBJXHJcblx0XHRhd2FpdCBjcmVhdGVVc2VyKCkuY2F0Y2goY29uc29sZS5lcnJvcik7XHJcblx0XHRyZXNldEZvcm0oKTtcclxuXHR9XHJcblxyXG5cdC8qXHJcbiAgICBjb25zdCBlcnJvciA9XHJcblx0XHRkYXRhPy5hdXRoZW50aWNhdGVVc2VyV2l0aFBhc3N3b3JkLl9fdHlwZW5hbWUgPT09XHJcblx0XHRcIlVzZXJBdXRoZW50aWNhdGlvbldpdGhQYXNzd29yZEZhaWx1cmVcIlxyXG5cdFx0XHQ/IGRhdGE/LmF1dGhlbnRpY2F0ZVVzZXJXaXRoUGFzc3dvcmRcclxuXHRcdFx0OiB1bmRlZmluZWQ7XHJcbiAgICAqL1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PEZvcm0gbWV0aG9kPVwiUE9TVFwiIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG5cdFx0XHQ8aDI+UmVxdWVzdCBmb3IgcGFzc3dvcmQgcmVzZXQ8L2gyPlxyXG5cdFx0XHQ8RXJyb3IgZXJyb3I9e2Vycm9yfSAvPlxyXG5cdFx0XHQ8ZmllbGRzZXQ+XHJcblx0XHRcdFx0e2RhdGE/LnNlbmRVc2VyUGFzc3dvcmRSZXNldExpbmsgPT09IG51bGwgJiYgKFxyXG5cdFx0XHRcdFx0PHA+U3VjY2VzcyEgQ2hlY2sgeW91ciBlbWFpbCBmb3IgdGhlIGxpbms8L3A+XHJcblx0XHRcdFx0KX1cclxuXHJcblx0XHRcdFx0PGxhYmVsPlxyXG5cdFx0XHRcdFx0RW1haWxcclxuXHRcdFx0XHRcdDxpbnB1dFxyXG5cdFx0XHRcdFx0XHR0eXBlPVwiZW1haWxcIlxyXG5cdFx0XHRcdFx0XHRuYW1lPVwiZW1haWxcIlxyXG5cdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cImVtYWlsXCJcclxuXHRcdFx0XHRcdFx0YXV0b0NvbXBsZXRlPVwiZW1haWxcIlxyXG5cdFx0XHRcdFx0XHR2YWx1ZT17aW5wdXRzLmVtYWlsfVxyXG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8L2xhYmVsPlxyXG5cclxuXHRcdFx0XHQ8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5SZXF1ZXN0IFBhc3N3b3JkIFJlc2V0PC9idXR0b24+XHJcblx0XHRcdDwvZmllbGRzZXQ+XHJcblx0XHQ8L0Zvcm0+XHJcblx0KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVxdWVzdFJlc2V0O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9