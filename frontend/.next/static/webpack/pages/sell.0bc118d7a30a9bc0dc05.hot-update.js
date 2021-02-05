webpackHotUpdate_N_E("pages/sell",{

/***/ "./components/CreateProduct.js":
/*!*************************************!*\
  !*** ./components/CreateProduct.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var D_React_Advanced_React_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_React_Advanced_React_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(D_React_Advanced_React_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var D_React_Advanced_React_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var D_React_Advanced_React_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var D_React_Advanced_React_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _lib_useForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/useForm */ "./lib/useForm.js");
/* harmony import */ var _styles_Form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles/Form */ "./components/styles/Form.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");






var _jsxFileName = "D:\\React\\Advanced-React\\Advanced-React\\sick-fits\\frontend\\components\\CreateProduct.js",
    _s = $RefreshSig$();

function _templateObject() {
  var data = Object(D_React_Advanced_React_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__["default"])(["\n\tmutation CREATE_PRODUCT_MUTATION(\n\t\t# Which variables are getting passed in and what type is it\n\t\t$name: String!\n\t\t$description: String!\n\t\t$price: Int!\n\t\t$image: Upload\n\t) {\n\t\tcreateProduct(\n\t\t\tdata: {\n\t\t\t\tname: $name\n\t\t\t\tdescription: $description\n\t\t\t\tprice: $price\n\t\t\t\tstatus: \"AVAILABLE\"\n\t\t\t\tphoto: { create: { image: $image, altText: $name } }\n\t\t\t}\n\t\t) {\n\t\t\tid\n\t\t\tname\n\t\t\tdescription\n\t\t\tprice\n\t\t}\n\t}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}






var CREATE_PRODUCT_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_8___default()(_templateObject());

function CreateProduct() {
  _s();

  var _useForm = Object(_lib_useForm__WEBPACK_IMPORTED_MODULE_6__["default"])({
    image: "",
    name: "",
    price: 0,
    description: ""
  }),
      inputs = _useForm.inputs,
      handleChange = _useForm.handleChange,
      resetForm = _useForm.resetForm,
      clearForm = _useForm.clearForm;

  var _useMutation = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_9__["useMutation"])(CREATE_PRODUCT_MUTATION, {
    // Dumping all the variables in here
    variables: inputs
  }),
      _useMutation2 = Object(D_React_Advanced_React_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useMutation, 2),
      createProduct = _useMutation2[0],
      _useMutation2$ = _useMutation2[1],
      loading = _useMutation2$.loading,
      error = _useMutation2$.error,
      data = _useMutation2$.data; // console.log(createProduct);


  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_styles_Form__WEBPACK_IMPORTED_MODULE_7__["default"], {
    onSubmit: /*#__PURE__*/function () {
      var _ref = Object(D_React_Advanced_React_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/D_React_Advanced_React_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {
        var res;
        return D_React_Advanced_React_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                e.preventDefault();
                console.log(inputs);
                _context.next = 4;
                return createProduct();

              case 4:
                res = _context.sent;
                console.log("res", res);

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }(),
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("fieldset", {
      disabled: loading,
      "aria-busy": loading,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("label", {
        htmlFor: "image",
        children: "Image"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 5
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("input", {
        type: "file",
        id: "image",
        name: "image",
        onChange: handleChange,
        required: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 5
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("label", {
        htmlFor: "name",
        children: "name"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 5
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("input", {
        type: "text",
        id: "name",
        name: "name",
        placeholder: "name",
        value: inputs.name,
        onChange: handleChange
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 5
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("label", {
        htmlFor: "name",
        children: "price"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 5
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("input", {
        type: "number",
        id: "price",
        name: "price",
        placeholder: "price",
        value: inputs.price,
        onChange: handleChange
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 5
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("label", {
        htmlFor: "name",
        children: "description"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 5
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("textarea", {
        id: "description",
        name: "description",
        placeholder: "description",
        value: inputs.description,
        onChange: handleChange
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 5
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("button", {
        type: "submit",
        children: "Add product"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 4
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 49,
    columnNumber: 3
  }, this);
}

_s(CreateProduct, "zdomDETEej0hyzrxBxXk/YOl0eU=", false, function () {
  return [_lib_useForm__WEBPACK_IMPORTED_MODULE_6__["default"], _apollo_client__WEBPACK_IMPORTED_MODULE_9__["useMutation"]];
});

_c = CreateProduct;
/* harmony default export */ __webpack_exports__["default"] = (CreateProduct);

var _c;

$RefreshReg$(_c, "CreateProduct");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DcmVhdGVQcm9kdWN0LmpzIl0sIm5hbWVzIjpbIkNSRUFURV9QUk9EVUNUX01VVEFUSU9OIiwiZ3FsIiwiQ3JlYXRlUHJvZHVjdCIsInVzZUZvcm0iLCJpbWFnZSIsIm5hbWUiLCJwcmljZSIsImRlc2NyaXB0aW9uIiwiaW5wdXRzIiwiaGFuZGxlQ2hhbmdlIiwicmVzZXRGb3JtIiwiY2xlYXJGb3JtIiwidXNlTXV0YXRpb24iLCJ2YXJpYWJsZXMiLCJjcmVhdGVQcm9kdWN0IiwibG9hZGluZyIsImVycm9yIiwiZGF0YSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciLCJyZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLHVCQUF1QixHQUFHQyxrREFBSCxtQkFBN0I7O0FBeUJBLFNBQVNDLGFBQVQsR0FBeUI7QUFBQTs7QUFBQSxpQkFDK0JDLDREQUFPLENBQUM7QUFDOURDLFNBQUssRUFBRSxFQUR1RDtBQUU5REMsUUFBSSxFQUFFLEVBRndEO0FBRzlEQyxTQUFLLEVBQUUsQ0FIdUQ7QUFJOURDLGVBQVcsRUFBRTtBQUppRCxHQUFELENBRHRDO0FBQUEsTUFDaEJDLE1BRGdCLFlBQ2hCQSxNQURnQjtBQUFBLE1BQ1JDLFlBRFEsWUFDUkEsWUFEUTtBQUFBLE1BQ01DLFNBRE4sWUFDTUEsU0FETjtBQUFBLE1BQ2lCQyxTQURqQixZQUNpQkEsU0FEakI7O0FBQUEscUJBUTBCQyxrRUFBVyxDQUM1RFosdUJBRDRELEVBRTVEO0FBQ0M7QUFDQWEsYUFBUyxFQUFFTDtBQUZaLEdBRjRELENBUnJDO0FBQUE7QUFBQSxNQVFqQk0sYUFSaUI7QUFBQTtBQUFBLE1BUUFDLE9BUkEsa0JBUUFBLE9BUkE7QUFBQSxNQVFTQyxLQVJULGtCQVFTQSxLQVJUO0FBQUEsTUFRZ0JDLElBUmhCLGtCQVFnQkEsSUFSaEIsRUFleEI7OztBQUNBLHNCQUNDLHFFQUFDLG9EQUFEO0FBQ0MsWUFBUTtBQUFBLGdYQUFFLGlCQUFPQyxDQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNUQSxpQkFBQyxDQUFDQyxjQUFGO0FBQ0FDLHVCQUFPLENBQUNDLEdBQVIsQ0FBWWIsTUFBWjtBQUZTO0FBQUEsdUJBSVNNLGFBQWEsRUFKdEI7O0FBQUE7QUFJSFEsbUJBSkc7QUFLVEYsdUJBQU8sQ0FBQ0MsR0FBUixDQUFZLEtBQVosRUFBbUJDLEdBQW5COztBQUxTO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUY7O0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FEVDtBQUFBLDJCQVNDO0FBQVUsY0FBUSxFQUFFUCxPQUFwQjtBQUE2QixtQkFBV0EsT0FBeEM7QUFBQSw4QkFDQztBQUFPLGVBQU8sRUFBQyxPQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREQsZUFFQztBQUNDLFlBQUksRUFBQyxNQUROO0FBRUMsVUFBRSxFQUFDLE9BRko7QUFHQyxZQUFJLEVBQUMsT0FITjtBQUlDLGdCQUFRLEVBQUVOLFlBSlg7QUFLQyxnQkFBUTtBQUxUO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRCxlQVVDO0FBQU8sZUFBTyxFQUFDLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FWRCxlQVdDO0FBQ0MsWUFBSSxFQUFDLE1BRE47QUFFQyxVQUFFLEVBQUMsTUFGSjtBQUdDLFlBQUksRUFBQyxNQUhOO0FBSUMsbUJBQVcsRUFBQyxNQUpiO0FBS0MsYUFBSyxFQUFFRCxNQUFNLENBQUNILElBTGY7QUFNQyxnQkFBUSxFQUFFSTtBQU5YO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FYRCxlQW9CQztBQUFPLGVBQU8sRUFBQyxNQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBcEJELGVBcUJDO0FBQ0MsWUFBSSxFQUFDLFFBRE47QUFFQyxVQUFFLEVBQUMsT0FGSjtBQUdDLFlBQUksRUFBQyxPQUhOO0FBSUMsbUJBQVcsRUFBQyxPQUpiO0FBS0MsYUFBSyxFQUFFRCxNQUFNLENBQUNGLEtBTGY7QUFNQyxnQkFBUSxFQUFFRztBQU5YO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FyQkQsZUE4QkM7QUFBTyxlQUFPLEVBQUMsTUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQTlCRCxlQStCQztBQUNDLFVBQUUsRUFBQyxhQURKO0FBRUMsWUFBSSxFQUFDLGFBRk47QUFHQyxtQkFBVyxFQUFDLGFBSGI7QUFJQyxhQUFLLEVBQUVELE1BQU0sQ0FBQ0QsV0FKZjtBQUtDLGdCQUFRLEVBQUVFO0FBTFg7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQS9CRCxlQXNDQztBQUFRLFlBQUksRUFBQyxRQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBdENEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVREO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERDtBQW9EQTs7R0FwRVFQLGE7VUFDK0NDLG9ELEVBT0xTLDBEOzs7S0FSMUNWLGE7QUFzRU1BLDRFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NlbGwuMGJjMTE4ZDdhMzBhOWJjMGRjMDUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHVzZUZvcm0gZnJvbSBcIi4uL2xpYi91c2VGb3JtXCI7XHJcbmltcG9ydCBGb3JtIGZyb20gXCIuL3N0eWxlcy9Gb3JtXCI7XHJcbmltcG9ydCBncWwgZnJvbSBcImdyYXBocWwtdGFnXCI7XHJcbmltcG9ydCB7IHVzZU11dGF0aW9uIH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XHJcblxyXG5jb25zdCBDUkVBVEVfUFJPRFVDVF9NVVRBVElPTiA9IGdxbGBcclxuXHRtdXRhdGlvbiBDUkVBVEVfUFJPRFVDVF9NVVRBVElPTihcclxuXHRcdCMgV2hpY2ggdmFyaWFibGVzIGFyZSBnZXR0aW5nIHBhc3NlZCBpbiBhbmQgd2hhdCB0eXBlIGlzIGl0XHJcblx0XHQkbmFtZTogU3RyaW5nIVxyXG5cdFx0JGRlc2NyaXB0aW9uOiBTdHJpbmchXHJcblx0XHQkcHJpY2U6IEludCFcclxuXHRcdCRpbWFnZTogVXBsb2FkXHJcblx0KSB7XHJcblx0XHRjcmVhdGVQcm9kdWN0KFxyXG5cdFx0XHRkYXRhOiB7XHJcblx0XHRcdFx0bmFtZTogJG5hbWVcclxuXHRcdFx0XHRkZXNjcmlwdGlvbjogJGRlc2NyaXB0aW9uXHJcblx0XHRcdFx0cHJpY2U6ICRwcmljZVxyXG5cdFx0XHRcdHN0YXR1czogXCJBVkFJTEFCTEVcIlxyXG5cdFx0XHRcdHBob3RvOiB7IGNyZWF0ZTogeyBpbWFnZTogJGltYWdlLCBhbHRUZXh0OiAkbmFtZSB9IH1cclxuXHRcdFx0fVxyXG5cdFx0KSB7XHJcblx0XHRcdGlkXHJcblx0XHRcdG5hbWVcclxuXHRcdFx0ZGVzY3JpcHRpb25cclxuXHRcdFx0cHJpY2VcclxuXHRcdH1cclxuXHR9XHJcbmA7XHJcblxyXG5mdW5jdGlvbiBDcmVhdGVQcm9kdWN0KCkge1xyXG5cdGNvbnN0IHsgaW5wdXRzLCBoYW5kbGVDaGFuZ2UsIHJlc2V0Rm9ybSwgY2xlYXJGb3JtIH0gPSB1c2VGb3JtKHtcclxuXHRcdGltYWdlOiBcIlwiLFxyXG5cdFx0bmFtZTogXCJcIixcclxuXHRcdHByaWNlOiAwLFxyXG5cdFx0ZGVzY3JpcHRpb246IFwiXCIsXHJcblx0fSk7XHJcblxyXG5cdGNvbnN0IFtjcmVhdGVQcm9kdWN0LCB7IGxvYWRpbmcsIGVycm9yLCBkYXRhIH1dID0gdXNlTXV0YXRpb24oXHJcblx0XHRDUkVBVEVfUFJPRFVDVF9NVVRBVElPTixcclxuXHRcdHtcclxuXHRcdFx0Ly8gRHVtcGluZyBhbGwgdGhlIHZhcmlhYmxlcyBpbiBoZXJlXHJcblx0XHRcdHZhcmlhYmxlczogaW5wdXRzLFxyXG5cdFx0fVxyXG5cdCk7XHJcblx0Ly8gY29uc29sZS5sb2coY3JlYXRlUHJvZHVjdCk7XHJcblx0cmV0dXJuIChcclxuXHRcdDxGb3JtXHJcblx0XHRcdG9uU3VibWl0PXthc3luYyAoZSkgPT4ge1xyXG5cdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhpbnB1dHMpO1xyXG5cclxuXHRcdFx0XHRjb25zdCByZXMgPSBhd2FpdCBjcmVhdGVQcm9kdWN0KCk7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coXCJyZXNcIiwgcmVzKTtcclxuXHRcdFx0fX1cclxuXHRcdD5cclxuXHRcdFx0PGZpZWxkc2V0IGRpc2FibGVkPXtsb2FkaW5nfSBhcmlhLWJ1c3k9e2xvYWRpbmd9PlxyXG5cdFx0XHRcdDxsYWJlbCBodG1sRm9yPVwiaW1hZ2VcIj5JbWFnZTwvbGFiZWw+XHJcblx0XHRcdFx0PGlucHV0XHJcblx0XHRcdFx0XHR0eXBlPVwiZmlsZVwiXHJcblx0XHRcdFx0XHRpZD1cImltYWdlXCJcclxuXHRcdFx0XHRcdG5hbWU9XCJpbWFnZVwiXHJcblx0XHRcdFx0XHRvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG5cdFx0XHRcdFx0cmVxdWlyZWRcclxuXHRcdFx0XHQvPlxyXG5cclxuXHRcdFx0XHQ8bGFiZWwgaHRtbEZvcj1cIm5hbWVcIj5uYW1lPC9sYWJlbD5cclxuXHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcclxuXHRcdFx0XHRcdGlkPVwibmFtZVwiXHJcblx0XHRcdFx0XHRuYW1lPVwibmFtZVwiXHJcblx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIm5hbWVcIlxyXG5cdFx0XHRcdFx0dmFsdWU9e2lucHV0cy5uYW1lfVxyXG5cdFx0XHRcdFx0b25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuXHRcdFx0XHQvPlxyXG5cclxuXHRcdFx0XHQ8bGFiZWwgaHRtbEZvcj1cIm5hbWVcIj5wcmljZTwvbGFiZWw+XHJcblx0XHRcdFx0PGlucHV0XHJcblx0XHRcdFx0XHR0eXBlPVwibnVtYmVyXCJcclxuXHRcdFx0XHRcdGlkPVwicHJpY2VcIlxyXG5cdFx0XHRcdFx0bmFtZT1cInByaWNlXCJcclxuXHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwicHJpY2VcIlxyXG5cdFx0XHRcdFx0dmFsdWU9e2lucHV0cy5wcmljZX1cclxuXHRcdFx0XHRcdG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcblx0XHRcdFx0Lz5cclxuXHJcblx0XHRcdFx0PGxhYmVsIGh0bWxGb3I9XCJuYW1lXCI+ZGVzY3JpcHRpb248L2xhYmVsPlxyXG5cdFx0XHRcdDx0ZXh0YXJlYVxyXG5cdFx0XHRcdFx0aWQ9XCJkZXNjcmlwdGlvblwiXHJcblx0XHRcdFx0XHRuYW1lPVwiZGVzY3JpcHRpb25cIlxyXG5cdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJkZXNjcmlwdGlvblwiXHJcblx0XHRcdFx0XHR2YWx1ZT17aW5wdXRzLmRlc2NyaXB0aW9ufVxyXG5cdFx0XHRcdFx0b25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHRcdDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPkFkZCBwcm9kdWN0PC9idXR0b24+XHJcblx0XHRcdDwvZmllbGRzZXQ+XHJcblx0XHQ8L0Zvcm0+XHJcblx0KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ3JlYXRlUHJvZHVjdDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==