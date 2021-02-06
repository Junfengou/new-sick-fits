webpackHotUpdate_N_E("pages/signin",{

/***/ "./components/SignUp.js":
/*!******************************!*\
  !*** ./components/SignUp.js ***!
  \******************************/
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






var _jsxFileName = "D:\\React\\Advanced-React\\Advanced-React\\sick-fits\\frontend\\components\\SignUp.js",
    _s = $RefreshSig$();

function _templateObject() {
  var data = Object(D_React_Advanced_React_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_4__["default"])(["\n\tmutation SIGNUP_MUTATION(\n\t\t$name: String!\n\t\t$email: String!\n\t\t$password: String!\n\t) {\n\t\tcreateUser(data: { name: $name, email: $email, password: $password }) {\n\t\t\tid\n\t\t\temail\n\t\t\tname\n\t\t}\n\t}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}









var SIGNUP_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_8___default()(_templateObject());

function SignUp() {
  _s();

  var _useForm = Object(_lib_useForm__WEBPACK_IMPORTED_MODULE_7__["default"])({
    email: "",
    password: "",
    name: ""
  }),
      inputs = _useForm.inputs,
      handleChange = _useForm.handleChange,
      resetForm = _useForm.resetForm;

  var _useMutation = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_10__["useMutation"])(SIGNUP_MUTATION, {
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
              return createUser();

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
      children: "Sign up for an account"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_ErrorMessage__WEBPACK_IMPORTED_MODULE_12__["default"], {
      error: error
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("fieldset", {
      children: [(data === null || data === void 0 ? void 0 : data.createUser) && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
        children: ["Signed up with ", data.createUser.email, " - Please go ahead and sign in!"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 6
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("label", {
        children: ["Name", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
          type: "name",
          name: "name",
          placeholder: "Your Name",
          autoComplete: "name",
          value: inputs.name,
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
          lineNumber: 79,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 77,
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
          lineNumber: 91,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 5
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("button", {
        type: "submit",
        children: "Sign In"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 4
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 55,
    columnNumber: 3
  }, this);
}

_s(SignUp, "Hey+PLIfNSKj3L2KEtLiUA1J5qs=", false, function () {
  return [_lib_useForm__WEBPACK_IMPORTED_MODULE_7__["default"], _apollo_client__WEBPACK_IMPORTED_MODULE_10__["useMutation"]];
});

_c = SignUp;
/* harmony default export */ __webpack_exports__["default"] = (SignUp);

var _c;

$RefreshReg$(_c, "SignUp");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TaWduVXAuanMiXSwibmFtZXMiOlsiU0lHTlVQX01VVEFUSU9OIiwiZ3FsIiwiU2lnblVwIiwidXNlRm9ybSIsImVtYWlsIiwicGFzc3dvcmQiLCJuYW1lIiwiaW5wdXRzIiwiaGFuZGxlQ2hhbmdlIiwicmVzZXRGb3JtIiwidXNlTXV0YXRpb24iLCJ2YXJpYWJsZXMiLCJyZWZldGNoUXVlcmllcyIsInF1ZXJ5IiwiQ1VSUkVOVF9VU0VSX1FVRVJZIiwiY3JlYXRlVXNlciIsImRhdGEiLCJlcnJvciIsImxvYWRpbmciLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxlQUFlLEdBQUdDLGtEQUFILG1CQUFyQjs7QUFjQSxTQUFTQyxNQUFULEdBQWtCO0FBQUE7O0FBQUEsaUJBQzJCQyw0REFBTyxDQUFDO0FBQ25EQyxTQUFLLEVBQUUsRUFENEM7QUFFbkRDLFlBQVEsRUFBRSxFQUZ5QztBQUduREMsUUFBSSxFQUFFO0FBSDZDLEdBQUQsQ0FEbEM7QUFBQSxNQUNUQyxNQURTLFlBQ1RBLE1BRFM7QUFBQSxNQUNEQyxZQURDLFlBQ0RBLFlBREM7QUFBQSxNQUNhQyxTQURiLFlBQ2FBLFNBRGI7O0FBQUEscUJBTzhCQyxtRUFBVyxDQUFDVixlQUFELEVBQWtCO0FBQzNFVyxhQUFTLEVBQUVKLE1BRGdFO0FBRTNFO0FBQ0FLLGtCQUFjLEVBQUUsQ0FBQztBQUFFQyxXQUFLLEVBQUVDLHlEQUFrQkE7QUFBM0IsS0FBRDtBQUgyRCxHQUFsQixDQVB6QztBQUFBO0FBQUEsTUFPVkMsVUFQVTtBQUFBO0FBQUEsTUFPSUMsSUFQSixrQkFPSUEsSUFQSjtBQUFBLE1BT1VDLEtBUFYsa0JBT1VBLEtBUFY7QUFBQSxNQU9pQkMsT0FQakIsa0JBT2lCQSxPQVBqQjs7QUFBQSxXQWFGQyxZQWJFO0FBQUE7QUFBQTtBQXNCakI7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQTVCa0I7QUFBQSxtWEFhakIsaUJBQTRCQyxDQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0NBLGVBQUMsQ0FBQ0MsY0FBRixHQURELENBRUM7QUFFQTs7QUFKRDtBQUFBLHFCQUtPTixVQUFVLEVBTGpCOztBQUFBO0FBTUNOLHVCQUFTOztBQU5WO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBYmlCO0FBQUE7QUFBQTs7QUE4QmpCLHNCQUNDLHFFQUFDLG9EQUFEO0FBQU0sVUFBTSxFQUFDLE1BQWI7QUFBb0IsWUFBUSxFQUFFVSxZQUE5QjtBQUFBLDRCQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREQsZUFFQyxxRUFBQyxzREFBRDtBQUFPLFdBQUssRUFBRUY7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkQsZUFHQztBQUFBLGlCQUNFLENBQUFELElBQUksU0FBSixJQUFBQSxJQUFJLFdBQUosWUFBQUEsSUFBSSxDQUFFRCxVQUFOLGtCQUNBO0FBQUEsc0NBQ2lCQyxJQUFJLENBQUNELFVBQUwsQ0FBZ0JYLEtBRGpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGLGVBT0M7QUFBQSx3Q0FFQztBQUNDLGNBQUksRUFBQyxNQUROO0FBRUMsY0FBSSxFQUFDLE1BRk47QUFHQyxxQkFBVyxFQUFDLFdBSGI7QUFJQyxzQkFBWSxFQUFDLE1BSmQ7QUFLQyxlQUFLLEVBQUVHLE1BQU0sQ0FBQ0QsSUFMZjtBQU1DLGtCQUFRLEVBQUVFO0FBTlg7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FQRCxlQW1CQztBQUFBLHlDQUVDO0FBQ0MsY0FBSSxFQUFDLE9BRE47QUFFQyxjQUFJLEVBQUMsT0FGTjtBQUdDLHFCQUFXLEVBQUMsT0FIYjtBQUlDLHNCQUFZLEVBQUMsT0FKZDtBQUtDLGVBQUssRUFBRUQsTUFBTSxDQUFDSCxLQUxmO0FBTUMsa0JBQVEsRUFBRUk7QUFOWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQW5CRCxlQStCQztBQUFBLDRDQUVDO0FBQ0MsY0FBSSxFQUFDLFVBRE47QUFFQyxjQUFJLEVBQUMsVUFGTjtBQUdDLHFCQUFXLEVBQUMsVUFIYjtBQUlDLGVBQUssRUFBRUQsTUFBTSxDQUFDRixRQUpmO0FBS0Msa0JBQVEsRUFBRUc7QUFMWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQS9CRCxlQTBDQztBQUFRLFlBQUksRUFBQyxRQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBMUNEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUREO0FBa0RBOztHQWhGUU4sTTtVQUNvQ0Msb0QsRUFNR08sMkQ7OztLQVB2Q1IsTTtBQWtGTUEscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2lnbmluLjc5MjJmMWRhMjNiODM4MmUwNDgzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBGb3JtIGZyb20gXCIuL3N0eWxlcy9Gb3JtXCI7XHJcbmltcG9ydCB1c2VGb3JtIGZyb20gXCIuLi9saWIvdXNlRm9ybVwiO1xyXG5pbXBvcnQgZ3FsIGZyb20gXCJncmFwaHFsLXRhZ1wiO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyB1c2VNdXRhdGlvbiB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xyXG5pbXBvcnQgeyBDVVJSRU5UX1VTRVJfUVVFUlkgfSBmcm9tIFwiLi9Vc2VyXCI7XHJcbmltcG9ydCBFcnJvciBmcm9tIFwiLi9FcnJvck1lc3NhZ2VcIjtcclxuXHJcbmNvbnN0IFNJR05VUF9NVVRBVElPTiA9IGdxbGBcclxuXHRtdXRhdGlvbiBTSUdOVVBfTVVUQVRJT04oXHJcblx0XHQkbmFtZTogU3RyaW5nIVxyXG5cdFx0JGVtYWlsOiBTdHJpbmchXHJcblx0XHQkcGFzc3dvcmQ6IFN0cmluZyFcclxuXHQpIHtcclxuXHRcdGNyZWF0ZVVzZXIoZGF0YTogeyBuYW1lOiAkbmFtZSwgZW1haWw6ICRlbWFpbCwgcGFzc3dvcmQ6ICRwYXNzd29yZCB9KSB7XHJcblx0XHRcdGlkXHJcblx0XHRcdGVtYWlsXHJcblx0XHRcdG5hbWVcclxuXHRcdH1cclxuXHR9XHJcbmA7XHJcblxyXG5mdW5jdGlvbiBTaWduVXAoKSB7XHJcblx0Y29uc3QgeyBpbnB1dHMsIGhhbmRsZUNoYW5nZSwgcmVzZXRGb3JtIH0gPSB1c2VGb3JtKHtcclxuXHRcdGVtYWlsOiBcIlwiLFxyXG5cdFx0cGFzc3dvcmQ6IFwiXCIsXHJcblx0XHRuYW1lOiBcIlwiLFxyXG5cdH0pO1xyXG5cclxuXHRjb25zdCBbY3JlYXRlVXNlciwgeyBkYXRhLCBlcnJvciwgbG9hZGluZyB9XSA9IHVzZU11dGF0aW9uKFNJR05VUF9NVVRBVElPTiwge1xyXG5cdFx0dmFyaWFibGVzOiBpbnB1dHMsXHJcblx0XHQvLyByZWZldGNoIHRoZSBjdXJyZW50bHkgbG9nZ2VkIGluIHVzZXJcclxuXHRcdHJlZmV0Y2hRdWVyaWVzOiBbeyBxdWVyeTogQ1VSUkVOVF9VU0VSX1FVRVJZIH1dLFxyXG5cdH0pO1xyXG5cclxuXHRhc3luYyBmdW5jdGlvbiBoYW5kbGVTdWJtaXQoZSkge1xyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0Ly8gY29uc29sZS5sb2coaW5wdXRzKTtcclxuXHJcblx0XHQvLyBTZW5kIHRoZSBlbWFpbCBhbmQgcGFzc3dvcmQgdG8gZ3JhcGhxbCBBUElcclxuXHRcdGF3YWl0IGNyZWF0ZVVzZXIoKTtcclxuXHRcdHJlc2V0Rm9ybSgpO1xyXG5cdH1cclxuXHJcblx0LypcclxuICAgIGNvbnN0IGVycm9yID1cclxuXHRcdGRhdGE/LmF1dGhlbnRpY2F0ZVVzZXJXaXRoUGFzc3dvcmQuX190eXBlbmFtZSA9PT1cclxuXHRcdFwiVXNlckF1dGhlbnRpY2F0aW9uV2l0aFBhc3N3b3JkRmFpbHVyZVwiXHJcblx0XHRcdD8gZGF0YT8uYXV0aGVudGljYXRlVXNlcldpdGhQYXNzd29yZFxyXG5cdFx0XHQ6IHVuZGVmaW5lZDtcclxuICAgICovXHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8Rm9ybSBtZXRob2Q9XCJQT1NUXCIgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcblx0XHRcdDxoMj5TaWduIHVwIGZvciBhbiBhY2NvdW50PC9oMj5cclxuXHRcdFx0PEVycm9yIGVycm9yPXtlcnJvcn0gLz5cclxuXHRcdFx0PGZpZWxkc2V0PlxyXG5cdFx0XHRcdHtkYXRhPy5jcmVhdGVVc2VyICYmIChcclxuXHRcdFx0XHRcdDxwPlxyXG5cdFx0XHRcdFx0XHRTaWduZWQgdXAgd2l0aCB7ZGF0YS5jcmVhdGVVc2VyLmVtYWlsfSAtIFBsZWFzZSBnbyBhaGVhZCBhbmQgc2lnblxyXG5cdFx0XHRcdFx0XHRpbiFcclxuXHRcdFx0XHRcdDwvcD5cclxuXHRcdFx0XHQpfVxyXG5cdFx0XHRcdDxsYWJlbD5cclxuXHRcdFx0XHRcdE5hbWVcclxuXHRcdFx0XHRcdDxpbnB1dFxyXG5cdFx0XHRcdFx0XHR0eXBlPVwibmFtZVwiXHJcblx0XHRcdFx0XHRcdG5hbWU9XCJuYW1lXCJcclxuXHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJZb3VyIE5hbWVcIlxyXG5cdFx0XHRcdFx0XHRhdXRvQ29tcGxldGU9XCJuYW1lXCJcclxuXHRcdFx0XHRcdFx0dmFsdWU9e2lucHV0cy5uYW1lfVxyXG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8L2xhYmVsPlxyXG5cclxuXHRcdFx0XHQ8bGFiZWw+XHJcblx0XHRcdFx0XHRFbWFpbFxyXG5cdFx0XHRcdFx0PGlucHV0XHJcblx0XHRcdFx0XHRcdHR5cGU9XCJlbWFpbFwiXHJcblx0XHRcdFx0XHRcdG5hbWU9XCJlbWFpbFwiXHJcblx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiZW1haWxcIlxyXG5cdFx0XHRcdFx0XHRhdXRvQ29tcGxldGU9XCJlbWFpbFwiXHJcblx0XHRcdFx0XHRcdHZhbHVlPXtpbnB1dHMuZW1haWx9XHJcblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdDwvbGFiZWw+XHJcblxyXG5cdFx0XHRcdDxsYWJlbD5cclxuXHRcdFx0XHRcdFBhc3N3b3JkXHJcblx0XHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdFx0dHlwZT1cInBhc3N3b3JkXCJcclxuXHRcdFx0XHRcdFx0bmFtZT1cInBhc3N3b3JkXCJcclxuXHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJwYXNzd29yZFwiXHJcblx0XHRcdFx0XHRcdHZhbHVlPXtpbnB1dHMucGFzc3dvcmR9XHJcblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdDwvbGFiZWw+XHJcblxyXG5cdFx0XHRcdDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlNpZ24gSW48L2J1dHRvbj5cclxuXHRcdFx0PC9maWVsZHNldD5cclxuXHRcdDwvRm9ybT5cclxuXHQpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaWduVXA7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=