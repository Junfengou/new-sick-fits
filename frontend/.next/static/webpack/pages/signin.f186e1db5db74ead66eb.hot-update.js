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
      sendUserPasswordResetLink = _useMutation2[0],
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9SZXF1ZXN0UmVzZXQuanMiXSwibmFtZXMiOlsiUkVRVUVTVF9SRVNFVF9NVVRBVElPTiIsImdxbCIsIlJlcXVlc3RSZXNldCIsInVzZUZvcm0iLCJlbWFpbCIsImlucHV0cyIsImhhbmRsZUNoYW5nZSIsInJlc2V0Rm9ybSIsInVzZU11dGF0aW9uIiwidmFyaWFibGVzIiwicmVmZXRjaFF1ZXJpZXMiLCJxdWVyeSIsIkNVUlJFTlRfVVNFUl9RVUVSWSIsInNlbmRVc2VyUGFzc3dvcmRSZXNldExpbmsiLCJkYXRhIiwiZXJyb3IiLCJsb2FkaW5nIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLHNCQUFzQixHQUFHQyxrREFBSCxtQkFBNUI7O0FBU0EsU0FBU0MsWUFBVCxHQUF3QjtBQUFBOztBQUFBLGlCQUNxQkMsNERBQU8sQ0FBQztBQUNuREMsU0FBSyxFQUFFO0FBRDRDLEdBQUQsQ0FENUI7QUFBQSxNQUNmQyxNQURlLFlBQ2ZBLE1BRGU7QUFBQSxNQUNQQyxZQURPLFlBQ1BBLFlBRE87QUFBQSxNQUNPQyxTQURQLFlBQ09BLFNBRFA7O0FBQUEscUJBS3VDQyxtRUFBVyxDQUN4RVIsc0JBRHdFLEVBRXhFO0FBQ0NTLGFBQVMsRUFBRUosTUFEWjtBQUVDO0FBQ0FLLGtCQUFjLEVBQUUsQ0FBQztBQUFFQyxXQUFLLEVBQUVDLHlEQUFrQkE7QUFBM0IsS0FBRDtBQUhqQixHQUZ3RSxDQUxsRDtBQUFBO0FBQUEsTUFLaEJDLHlCQUxnQjtBQUFBO0FBQUEsTUFLYUMsSUFMYixrQkFLYUEsSUFMYjtBQUFBLE1BS21CQyxLQUxuQixrQkFLbUJBLEtBTG5CO0FBQUEsTUFLMEJDLE9BTDFCLGtCQUswQkEsT0FMMUI7O0FBQUEsV0FjUkMsWUFkUTtBQUFBO0FBQUE7QUF1QnZCO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUE3QndCO0FBQUEsbVhBY3ZCLGlCQUE0QkMsQ0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNDQSxlQUFDLENBQUNDLGNBQUYsR0FERCxDQUVDO0FBRUE7O0FBSkQ7QUFBQSxxQkFLT04seUJBQXlCLFdBQXpCLENBQWtDTyxPQUFPLENBQUNMLEtBQTFDLENBTFA7O0FBQUE7QUFNQ1IsdUJBQVM7O0FBTlY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FkdUI7QUFBQTtBQUFBOztBQStCdkIsc0JBQ0MscUVBQUMsb0RBQUQ7QUFBTSxVQUFNLEVBQUMsTUFBYjtBQUFvQixZQUFRLEVBQUVVLFlBQTlCO0FBQUEsNEJBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERCxlQUVDLHFFQUFDLHNEQUFEO0FBQU8sV0FBSyxFQUFFRjtBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRCxlQUdDO0FBQUEsaUJBQ0UsQ0FBQUQsSUFBSSxTQUFKLElBQUFBLElBQUksV0FBSixZQUFBQSxJQUFJLENBQUVELHlCQUFOLE1BQW9DLElBQXBDLGlCQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkYsZUFLQztBQUFBLHlDQUVDO0FBQ0MsY0FBSSxFQUFDLE9BRE47QUFFQyxjQUFJLEVBQUMsT0FGTjtBQUdDLHFCQUFXLEVBQUMsT0FIYjtBQUlDLHNCQUFZLEVBQUMsT0FKZDtBQUtDLGVBQUssRUFBRVIsTUFBTSxDQUFDRCxLQUxmO0FBTUMsa0JBQVEsRUFBRUU7QUFOWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUxELGVBaUJDO0FBQVEsWUFBSSxFQUFDLFFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FqQkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREQ7QUF5QkE7O0dBeERRSixZO1VBQ29DQyxvRCxFQUlrQkssMkQ7OztLQUx0RE4sWTtBQTBETUEsMkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2lnbmluLmYxODZlMWRiNWRiNzRlYWQ2NmViLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBGb3JtIGZyb20gXCIuL3N0eWxlcy9Gb3JtXCI7XHJcbmltcG9ydCB1c2VGb3JtIGZyb20gXCIuLi9saWIvdXNlRm9ybVwiO1xyXG5pbXBvcnQgZ3FsIGZyb20gXCJncmFwaHFsLXRhZ1wiO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyB1c2VNdXRhdGlvbiB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xyXG5pbXBvcnQgeyBDVVJSRU5UX1VTRVJfUVVFUlkgfSBmcm9tIFwiLi9Vc2VyXCI7XHJcbmltcG9ydCBFcnJvciBmcm9tIFwiLi9FcnJvck1lc3NhZ2VcIjtcclxuXHJcbmNvbnN0IFJFUVVFU1RfUkVTRVRfTVVUQVRJT04gPSBncWxgXHJcblx0bXV0YXRpb24gUkVRVUVTVF9SRVNFVF9NVVRBVElPTigkZW1haWw6IFN0cmluZyEpIHtcclxuXHRcdHNlbmRVc2VyUGFzc3dvcmRSZXNldExpbmsoZW1haWw6ICRlbWFpbCkge1xyXG5cdFx0XHRjb2RlXHJcblx0XHRcdG1lc3NhZ2VcclxuXHRcdH1cclxuXHR9XHJcbmA7XHJcblxyXG5mdW5jdGlvbiBSZXF1ZXN0UmVzZXQoKSB7XHJcblx0Y29uc3QgeyBpbnB1dHMsIGhhbmRsZUNoYW5nZSwgcmVzZXRGb3JtIH0gPSB1c2VGb3JtKHtcclxuXHRcdGVtYWlsOiBcIlwiLFxyXG5cdH0pO1xyXG5cclxuXHRjb25zdCBbc2VuZFVzZXJQYXNzd29yZFJlc2V0TGluaywgeyBkYXRhLCBlcnJvciwgbG9hZGluZyB9XSA9IHVzZU11dGF0aW9uKFxyXG5cdFx0UkVRVUVTVF9SRVNFVF9NVVRBVElPTixcclxuXHRcdHtcclxuXHRcdFx0dmFyaWFibGVzOiBpbnB1dHMsXHJcblx0XHRcdC8vIHJlZmV0Y2ggdGhlIGN1cnJlbnRseSBsb2dnZWQgaW4gdXNlclxyXG5cdFx0XHRyZWZldGNoUXVlcmllczogW3sgcXVlcnk6IENVUlJFTlRfVVNFUl9RVUVSWSB9XSxcclxuXHRcdH1cclxuXHQpO1xyXG5cclxuXHRhc3luYyBmdW5jdGlvbiBoYW5kbGVTdWJtaXQoZSkge1xyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0Ly8gY29uc29sZS5sb2coaW5wdXRzKTtcclxuXHJcblx0XHQvLyBTZW5kIHRoZSBlbWFpbCBhbmQgcGFzc3dvcmQgdG8gZ3JhcGhxbCBBUElcclxuXHRcdGF3YWl0IHNlbmRVc2VyUGFzc3dvcmRSZXNldExpbmsoKS5jYXRjaChjb25zb2xlLmVycm9yKTtcclxuXHRcdHJlc2V0Rm9ybSgpO1xyXG5cdH1cclxuXHJcblx0LypcclxuICAgIGNvbnN0IGVycm9yID1cclxuXHRcdGRhdGE/LmF1dGhlbnRpY2F0ZVVzZXJXaXRoUGFzc3dvcmQuX190eXBlbmFtZSA9PT1cclxuXHRcdFwiVXNlckF1dGhlbnRpY2F0aW9uV2l0aFBhc3N3b3JkRmFpbHVyZVwiXHJcblx0XHRcdD8gZGF0YT8uYXV0aGVudGljYXRlVXNlcldpdGhQYXNzd29yZFxyXG5cdFx0XHQ6IHVuZGVmaW5lZDtcclxuICAgICovXHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8Rm9ybSBtZXRob2Q9XCJQT1NUXCIgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcblx0XHRcdDxoMj5SZXF1ZXN0IGZvciBwYXNzd29yZCByZXNldDwvaDI+XHJcblx0XHRcdDxFcnJvciBlcnJvcj17ZXJyb3J9IC8+XHJcblx0XHRcdDxmaWVsZHNldD5cclxuXHRcdFx0XHR7ZGF0YT8uc2VuZFVzZXJQYXNzd29yZFJlc2V0TGluayA9PT0gbnVsbCAmJiAoXHJcblx0XHRcdFx0XHQ8cD5TdWNjZXNzISBDaGVjayB5b3VyIGVtYWlsIGZvciB0aGUgbGluazwvcD5cclxuXHRcdFx0XHQpfVxyXG5cclxuXHRcdFx0XHQ8bGFiZWw+XHJcblx0XHRcdFx0XHRFbWFpbFxyXG5cdFx0XHRcdFx0PGlucHV0XHJcblx0XHRcdFx0XHRcdHR5cGU9XCJlbWFpbFwiXHJcblx0XHRcdFx0XHRcdG5hbWU9XCJlbWFpbFwiXHJcblx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiZW1haWxcIlxyXG5cdFx0XHRcdFx0XHRhdXRvQ29tcGxldGU9XCJlbWFpbFwiXHJcblx0XHRcdFx0XHRcdHZhbHVlPXtpbnB1dHMuZW1haWx9XHJcblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdDwvbGFiZWw+XHJcblxyXG5cdFx0XHRcdDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlJlcXVlc3QgUGFzc3dvcmQgUmVzZXQ8L2J1dHRvbj5cclxuXHRcdFx0PC9maWVsZHNldD5cclxuXHRcdDwvRm9ybT5cclxuXHQpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZXF1ZXN0UmVzZXQ7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=