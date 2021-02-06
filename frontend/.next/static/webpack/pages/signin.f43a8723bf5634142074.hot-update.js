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
        children: "Sign Up"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TaWduVXAuanMiXSwibmFtZXMiOlsiU0lHTlVQX01VVEFUSU9OIiwiZ3FsIiwiU2lnblVwIiwidXNlRm9ybSIsImVtYWlsIiwicGFzc3dvcmQiLCJuYW1lIiwiaW5wdXRzIiwiaGFuZGxlQ2hhbmdlIiwicmVzZXRGb3JtIiwidXNlTXV0YXRpb24iLCJ2YXJpYWJsZXMiLCJyZWZldGNoUXVlcmllcyIsInF1ZXJ5IiwiQ1VSUkVOVF9VU0VSX1FVRVJZIiwiY3JlYXRlVXNlciIsImRhdGEiLCJlcnJvciIsImxvYWRpbmciLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsZUFBZSxHQUFHQyxrREFBSCxtQkFBckI7O0FBY0EsU0FBU0MsTUFBVCxHQUFrQjtBQUFBOztBQUFBLGlCQUMyQkMsNERBQU8sQ0FBQztBQUNuREMsU0FBSyxFQUFFLEVBRDRDO0FBRW5EQyxZQUFRLEVBQUUsRUFGeUM7QUFHbkRDLFFBQUksRUFBRTtBQUg2QyxHQUFELENBRGxDO0FBQUEsTUFDVEMsTUFEUyxZQUNUQSxNQURTO0FBQUEsTUFDREMsWUFEQyxZQUNEQSxZQURDO0FBQUEsTUFDYUMsU0FEYixZQUNhQSxTQURiOztBQUFBLHFCQU84QkMsbUVBQVcsQ0FBQ1YsZUFBRCxFQUFrQjtBQUMzRVcsYUFBUyxFQUFFSixNQURnRTtBQUUzRTtBQUNBSyxrQkFBYyxFQUFFLENBQUM7QUFBRUMsV0FBSyxFQUFFQyx5REFBa0JBO0FBQTNCLEtBQUQ7QUFIMkQsR0FBbEIsQ0FQekM7QUFBQTtBQUFBLE1BT1ZDLFVBUFU7QUFBQTtBQUFBLE1BT0lDLElBUEosa0JBT0lBLElBUEo7QUFBQSxNQU9VQyxLQVBWLGtCQU9VQSxLQVBWO0FBQUEsTUFPaUJDLE9BUGpCLGtCQU9pQkEsT0FQakI7O0FBQUEsV0FhRkMsWUFiRTtBQUFBO0FBQUE7QUFzQmpCO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUE1QmtCO0FBQUEsbVhBYWpCLGlCQUE0QkMsQ0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNDQSxlQUFDLENBQUNDLGNBQUYsR0FERCxDQUVDO0FBRUE7O0FBSkQ7QUFBQSxxQkFLT04sVUFBVSxXQUFWLENBQW1CTyxPQUFPLENBQUNMLEtBQTNCLENBTFA7O0FBQUE7QUFNQ1IsdUJBQVM7O0FBTlY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FiaUI7QUFBQTtBQUFBOztBQThCakIsc0JBQ0MscUVBQUMsb0RBQUQ7QUFBTSxVQUFNLEVBQUMsTUFBYjtBQUFvQixZQUFRLEVBQUVVLFlBQTlCO0FBQUEsNEJBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERCxlQUVDLHFFQUFDLHNEQUFEO0FBQU8sV0FBSyxFQUFFRjtBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRCxlQUdDO0FBQUEsaUJBQ0UsQ0FBQUQsSUFBSSxTQUFKLElBQUFBLElBQUksV0FBSixZQUFBQSxJQUFJLENBQUVELFVBQU4sa0JBQ0E7QUFBQSxzQ0FDaUJDLElBQUksQ0FBQ0QsVUFBTCxDQUFnQlgsS0FEakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkYsZUFPQztBQUFBLHdDQUVDO0FBQ0MsY0FBSSxFQUFDLE1BRE47QUFFQyxjQUFJLEVBQUMsTUFGTjtBQUdDLHFCQUFXLEVBQUMsV0FIYjtBQUlDLHNCQUFZLEVBQUMsTUFKZDtBQUtDLGVBQUssRUFBRUcsTUFBTSxDQUFDRCxJQUxmO0FBTUMsa0JBQVEsRUFBRUU7QUFOWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVBELGVBbUJDO0FBQUEseUNBRUM7QUFDQyxjQUFJLEVBQUMsT0FETjtBQUVDLGNBQUksRUFBQyxPQUZOO0FBR0MscUJBQVcsRUFBQyxPQUhiO0FBSUMsc0JBQVksRUFBQyxPQUpkO0FBS0MsZUFBSyxFQUFFRCxNQUFNLENBQUNILEtBTGY7QUFNQyxrQkFBUSxFQUFFSTtBQU5YO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBbkJELGVBK0JDO0FBQUEsNENBRUM7QUFDQyxjQUFJLEVBQUMsVUFETjtBQUVDLGNBQUksRUFBQyxVQUZOO0FBR0MscUJBQVcsRUFBQyxVQUhiO0FBSUMsZUFBSyxFQUFFRCxNQUFNLENBQUNGLFFBSmY7QUFLQyxrQkFBUSxFQUFFRztBQUxYO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBL0JELGVBMENDO0FBQVEsWUFBSSxFQUFDLFFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0ExQ0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREQ7QUFrREE7O0dBaEZRTixNO1VBQ29DQyxvRCxFQU1HTywyRDs7O0tBUHZDUixNO0FBa0ZNQSxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zaWduaW4uZjQzYTg3MjNiZjU2MzQxNDIwNzQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEZvcm0gZnJvbSBcIi4vc3R5bGVzL0Zvcm1cIjtcclxuaW1wb3J0IHVzZUZvcm0gZnJvbSBcIi4uL2xpYi91c2VGb3JtXCI7XHJcbmltcG9ydCBncWwgZnJvbSBcImdyYXBocWwtdGFnXCI7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IHVzZU11dGF0aW9uIH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XHJcbmltcG9ydCB7IENVUlJFTlRfVVNFUl9RVUVSWSB9IGZyb20gXCIuL1VzZXJcIjtcclxuaW1wb3J0IEVycm9yIGZyb20gXCIuL0Vycm9yTWVzc2FnZVwiO1xyXG5cclxuY29uc3QgU0lHTlVQX01VVEFUSU9OID0gZ3FsYFxyXG5cdG11dGF0aW9uIFNJR05VUF9NVVRBVElPTihcclxuXHRcdCRuYW1lOiBTdHJpbmchXHJcblx0XHQkZW1haWw6IFN0cmluZyFcclxuXHRcdCRwYXNzd29yZDogU3RyaW5nIVxyXG5cdCkge1xyXG5cdFx0Y3JlYXRlVXNlcihkYXRhOiB7IG5hbWU6ICRuYW1lLCBlbWFpbDogJGVtYWlsLCBwYXNzd29yZDogJHBhc3N3b3JkIH0pIHtcclxuXHRcdFx0aWRcclxuXHRcdFx0ZW1haWxcclxuXHRcdFx0bmFtZVxyXG5cdFx0fVxyXG5cdH1cclxuYDtcclxuXHJcbmZ1bmN0aW9uIFNpZ25VcCgpIHtcclxuXHRjb25zdCB7IGlucHV0cywgaGFuZGxlQ2hhbmdlLCByZXNldEZvcm0gfSA9IHVzZUZvcm0oe1xyXG5cdFx0ZW1haWw6IFwiXCIsXHJcblx0XHRwYXNzd29yZDogXCJcIixcclxuXHRcdG5hbWU6IFwiXCIsXHJcblx0fSk7XHJcblxyXG5cdGNvbnN0IFtjcmVhdGVVc2VyLCB7IGRhdGEsIGVycm9yLCBsb2FkaW5nIH1dID0gdXNlTXV0YXRpb24oU0lHTlVQX01VVEFUSU9OLCB7XHJcblx0XHR2YXJpYWJsZXM6IGlucHV0cyxcclxuXHRcdC8vIHJlZmV0Y2ggdGhlIGN1cnJlbnRseSBsb2dnZWQgaW4gdXNlclxyXG5cdFx0cmVmZXRjaFF1ZXJpZXM6IFt7IHF1ZXJ5OiBDVVJSRU5UX1VTRVJfUVVFUlkgfV0sXHJcblx0fSk7XHJcblxyXG5cdGFzeW5jIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdChlKSB7XHJcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHQvLyBjb25zb2xlLmxvZyhpbnB1dHMpO1xyXG5cclxuXHRcdC8vIFNlbmQgdGhlIGVtYWlsIGFuZCBwYXNzd29yZCB0byBncmFwaHFsIEFQSVxyXG5cdFx0YXdhaXQgY3JlYXRlVXNlcigpLmNhdGNoKGNvbnNvbGUuZXJyb3IpO1xyXG5cdFx0cmVzZXRGb3JtKCk7XHJcblx0fVxyXG5cclxuXHQvKlxyXG4gICAgY29uc3QgZXJyb3IgPVxyXG5cdFx0ZGF0YT8uYXV0aGVudGljYXRlVXNlcldpdGhQYXNzd29yZC5fX3R5cGVuYW1lID09PVxyXG5cdFx0XCJVc2VyQXV0aGVudGljYXRpb25XaXRoUGFzc3dvcmRGYWlsdXJlXCJcclxuXHRcdFx0PyBkYXRhPy5hdXRoZW50aWNhdGVVc2VyV2l0aFBhc3N3b3JkXHJcblx0XHRcdDogdW5kZWZpbmVkO1xyXG4gICAgKi9cclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxGb3JtIG1ldGhvZD1cIlBPU1RcIiBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuXHRcdFx0PGgyPlNpZ24gdXAgZm9yIGFuIGFjY291bnQ8L2gyPlxyXG5cdFx0XHQ8RXJyb3IgZXJyb3I9e2Vycm9yfSAvPlxyXG5cdFx0XHQ8ZmllbGRzZXQ+XHJcblx0XHRcdFx0e2RhdGE/LmNyZWF0ZVVzZXIgJiYgKFxyXG5cdFx0XHRcdFx0PHA+XHJcblx0XHRcdFx0XHRcdFNpZ25lZCB1cCB3aXRoIHtkYXRhLmNyZWF0ZVVzZXIuZW1haWx9IC0gUGxlYXNlIGdvIGFoZWFkIGFuZCBzaWduXHJcblx0XHRcdFx0XHRcdGluIVxyXG5cdFx0XHRcdFx0PC9wPlxyXG5cdFx0XHRcdCl9XHJcblx0XHRcdFx0PGxhYmVsPlxyXG5cdFx0XHRcdFx0TmFtZVxyXG5cdFx0XHRcdFx0PGlucHV0XHJcblx0XHRcdFx0XHRcdHR5cGU9XCJuYW1lXCJcclxuXHRcdFx0XHRcdFx0bmFtZT1cIm5hbWVcIlxyXG5cdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIllvdXIgTmFtZVwiXHJcblx0XHRcdFx0XHRcdGF1dG9Db21wbGV0ZT1cIm5hbWVcIlxyXG5cdFx0XHRcdFx0XHR2YWx1ZT17aW5wdXRzLm5hbWV9XHJcblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdDwvbGFiZWw+XHJcblxyXG5cdFx0XHRcdDxsYWJlbD5cclxuXHRcdFx0XHRcdEVtYWlsXHJcblx0XHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdFx0dHlwZT1cImVtYWlsXCJcclxuXHRcdFx0XHRcdFx0bmFtZT1cImVtYWlsXCJcclxuXHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJlbWFpbFwiXHJcblx0XHRcdFx0XHRcdGF1dG9Db21wbGV0ZT1cImVtYWlsXCJcclxuXHRcdFx0XHRcdFx0dmFsdWU9e2lucHV0cy5lbWFpbH1cclxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0PC9sYWJlbD5cclxuXHJcblx0XHRcdFx0PGxhYmVsPlxyXG5cdFx0XHRcdFx0UGFzc3dvcmRcclxuXHRcdFx0XHRcdDxpbnB1dFxyXG5cdFx0XHRcdFx0XHR0eXBlPVwicGFzc3dvcmRcIlxyXG5cdFx0XHRcdFx0XHRuYW1lPVwicGFzc3dvcmRcIlxyXG5cdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cInBhc3N3b3JkXCJcclxuXHRcdFx0XHRcdFx0dmFsdWU9e2lucHV0cy5wYXNzd29yZH1cclxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0PC9sYWJlbD5cclxuXHJcblx0XHRcdFx0PGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U2lnbiBVcDwvYnV0dG9uPlxyXG5cdFx0XHQ8L2ZpZWxkc2V0PlxyXG5cdFx0PC9Gb3JtPlxyXG5cdCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZ25VcDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==