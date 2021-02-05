webpackHotUpdate_N_E("pages/sell",{

/***/ "./components/CreateProduct.js":
/*!*************************************!*\
  !*** ./components/CreateProduct.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var D_React_Advanced_React_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var D_React_Advanced_React_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_useForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/useForm */ "./lib/useForm.js");
/* harmony import */ var _styles_Form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/Form */ "./components/styles/Form.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");




var _jsxFileName = "D:\\React\\Advanced-React\\Advanced-React\\sick-fits\\frontend\\components\\CreateProduct.js",
    _s = $RefreshSig$();

function _templateObject() {
  var data = Object(D_React_Advanced_React_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n\tmutation CREATE_PRODUCT_MUTATION(\n\t\t# Which variables are getting passed in and what type is it\n\t\t$name: String!\n\t\t$description: String!\n\t\t$price: Int!\n\t\t$image: Upload\n\t) {\n\t\tcreateProduct(\n\t\t\tdata: {\n\t\t\t\tname: $name\n\t\t\t\tdescription: $description\n\t\t\t\tprice: $price\n\t\t\t\tstatus: \"AVAILABLE\"\n\t\t\t\tphoto: { create: { image: $image, altText: $name } }\n\t\t\t}\n\t\t) {\n\t\t\tid\n\t\t\tname\n\t\t\tdescription\n\t\t\tprice\n\t\t}\n\t}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}






var CREATE_PRODUCT_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_6___default()(_templateObject());

function CreateProduct() {
  _s();

  var _useForm = Object(_lib_useForm__WEBPACK_IMPORTED_MODULE_4__["default"])({
    image: "",
    name: "",
    price: 0,
    description: ""
  }),
      inputs = _useForm.inputs,
      handleChange = _useForm.handleChange,
      resetForm = _useForm.resetForm,
      clearForm = _useForm.clearForm;

  var _useMutation = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_7__["useMutation"])(CREATE_PRODUCT_MUTATION, {
    variables: inputs
  }),
      _useMutation2 = Object(D_React_Advanced_React_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useMutation, 2),
      createProduct = _useMutation2[0],
      _useMutation2$ = _useMutation2[1],
      loading = _useMutation2$.loading,
      error = _useMutation2$.error,
      data = _useMutation2$.data;

  console.log(createProduct);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_styles_Form__WEBPACK_IMPORTED_MODULE_5__["default"], {
    onSubmit: function onSubmit(e) {
      e.preventDefault();
      console.log(inputs);
    },
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("fieldset", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("label", {
        htmlFor: "image",
        children: "Image"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 5
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
        type: "file",
        id: "image",
        name: "image",
        onChange: handleChange,
        required: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 5
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("label", {
        htmlFor: "name",
        children: "name"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 5
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
        type: "text",
        id: "name",
        name: "name",
        placeholder: "name",
        value: inputs.name,
        onChange: handleChange
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 5
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("label", {
        htmlFor: "name",
        children: "price"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 5
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
        type: "number",
        id: "price",
        name: "price",
        placeholder: "price",
        value: inputs.price,
        onChange: handleChange
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 5
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("label", {
        htmlFor: "name",
        children: "description"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 5
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("textarea", {
        id: "description",
        name: "description",
        placeholder: "description",
        value: inputs.description,
        onChange: handleChange
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 5
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("button", {
        type: "submit",
        children: "Add product"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 4
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 48,
    columnNumber: 3
  }, this);
}

_s(CreateProduct, "zdomDETEej0hyzrxBxXk/YOl0eU=", false, function () {
  return [_lib_useForm__WEBPACK_IMPORTED_MODULE_4__["default"], _apollo_client__WEBPACK_IMPORTED_MODULE_7__["useMutation"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DcmVhdGVQcm9kdWN0LmpzIl0sIm5hbWVzIjpbIkNSRUFURV9QUk9EVUNUX01VVEFUSU9OIiwiZ3FsIiwiQ3JlYXRlUHJvZHVjdCIsInVzZUZvcm0iLCJpbWFnZSIsIm5hbWUiLCJwcmljZSIsImRlc2NyaXB0aW9uIiwiaW5wdXRzIiwiaGFuZGxlQ2hhbmdlIiwicmVzZXRGb3JtIiwiY2xlYXJGb3JtIiwidXNlTXV0YXRpb24iLCJ2YXJpYWJsZXMiLCJjcmVhdGVQcm9kdWN0IiwibG9hZGluZyIsImVycm9yIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJlIiwicHJldmVudERlZmF1bHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSx1QkFBdUIsR0FBR0Msa0RBQUgsbUJBQTdCOztBQXlCQSxTQUFTQyxhQUFULEdBQXlCO0FBQUE7O0FBQUEsaUJBQytCQyw0REFBTyxDQUFDO0FBQzlEQyxTQUFLLEVBQUUsRUFEdUQ7QUFFOURDLFFBQUksRUFBRSxFQUZ3RDtBQUc5REMsU0FBSyxFQUFFLENBSHVEO0FBSTlEQyxlQUFXLEVBQUU7QUFKaUQsR0FBRCxDQUR0QztBQUFBLE1BQ2hCQyxNQURnQixZQUNoQkEsTUFEZ0I7QUFBQSxNQUNSQyxZQURRLFlBQ1JBLFlBRFE7QUFBQSxNQUNNQyxTQUROLFlBQ01BLFNBRE47QUFBQSxNQUNpQkMsU0FEakIsWUFDaUJBLFNBRGpCOztBQUFBLHFCQVEwQkMsa0VBQVcsQ0FDNURaLHVCQUQ0RCxFQUU1RDtBQUNDYSxhQUFTLEVBQUVMO0FBRFosR0FGNEQsQ0FSckM7QUFBQTtBQUFBLE1BUWpCTSxhQVJpQjtBQUFBO0FBQUEsTUFRQUMsT0FSQSxrQkFRQUEsT0FSQTtBQUFBLE1BUVNDLEtBUlQsa0JBUVNBLEtBUlQ7QUFBQSxNQVFnQkMsSUFSaEIsa0JBUWdCQSxJQVJoQjs7QUFjeEJDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZTCxhQUFaO0FBQ0Esc0JBQ0MscUVBQUMsb0RBQUQ7QUFDQyxZQUFRLEVBQUUsa0JBQUNNLENBQUQsRUFBTztBQUNoQkEsT0FBQyxDQUFDQyxjQUFGO0FBQ0FILGFBQU8sQ0FBQ0MsR0FBUixDQUFZWCxNQUFaO0FBQ0EsS0FKRjtBQUFBLDJCQU1DO0FBQUEsOEJBQ0M7QUFBTyxlQUFPLEVBQUMsT0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURELGVBRUM7QUFDQyxZQUFJLEVBQUMsTUFETjtBQUVDLFVBQUUsRUFBQyxPQUZKO0FBR0MsWUFBSSxFQUFDLE9BSE47QUFJQyxnQkFBUSxFQUFFQyxZQUpYO0FBS0MsZ0JBQVE7QUFMVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkQsZUFVQztBQUFPLGVBQU8sRUFBQyxNQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBVkQsZUFXQztBQUNDLFlBQUksRUFBQyxNQUROO0FBRUMsVUFBRSxFQUFDLE1BRko7QUFHQyxZQUFJLEVBQUMsTUFITjtBQUlDLG1CQUFXLEVBQUMsTUFKYjtBQUtDLGFBQUssRUFBRUQsTUFBTSxDQUFDSCxJQUxmO0FBTUMsZ0JBQVEsRUFBRUk7QUFOWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBWEQsZUFvQkM7QUFBTyxlQUFPLEVBQUMsTUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXBCRCxlQXFCQztBQUNDLFlBQUksRUFBQyxRQUROO0FBRUMsVUFBRSxFQUFDLE9BRko7QUFHQyxZQUFJLEVBQUMsT0FITjtBQUlDLG1CQUFXLEVBQUMsT0FKYjtBQUtDLGFBQUssRUFBRUQsTUFBTSxDQUFDRixLQUxmO0FBTUMsZ0JBQVEsRUFBRUc7QUFOWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBckJELGVBOEJDO0FBQU8sZUFBTyxFQUFDLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0E5QkQsZUErQkM7QUFDQyxVQUFFLEVBQUMsYUFESjtBQUVDLFlBQUksRUFBQyxhQUZOO0FBR0MsbUJBQVcsRUFBQyxhQUhiO0FBSUMsYUFBSyxFQUFFRCxNQUFNLENBQUNELFdBSmY7QUFLQyxnQkFBUSxFQUFFRTtBQUxYO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0EvQkQsZUFzQ0M7QUFBUSxZQUFJLEVBQUMsUUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXRDRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFORDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREQ7QUFpREE7O0dBaEVRUCxhO1VBQytDQyxvRCxFQU9MUywwRDs7O0tBUjFDVixhO0FBa0VNQSw0RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zZWxsLmIzMTIyNzlkZmRkYWQ2MjZiMzY0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB1c2VGb3JtIGZyb20gXCIuLi9saWIvdXNlRm9ybVwiO1xyXG5pbXBvcnQgRm9ybSBmcm9tIFwiLi9zdHlsZXMvRm9ybVwiO1xyXG5pbXBvcnQgZ3FsIGZyb20gXCJncmFwaHFsLXRhZ1wiO1xyXG5pbXBvcnQgeyB1c2VNdXRhdGlvbiB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xyXG5cclxuY29uc3QgQ1JFQVRFX1BST0RVQ1RfTVVUQVRJT04gPSBncWxgXHJcblx0bXV0YXRpb24gQ1JFQVRFX1BST0RVQ1RfTVVUQVRJT04oXHJcblx0XHQjIFdoaWNoIHZhcmlhYmxlcyBhcmUgZ2V0dGluZyBwYXNzZWQgaW4gYW5kIHdoYXQgdHlwZSBpcyBpdFxyXG5cdFx0JG5hbWU6IFN0cmluZyFcclxuXHRcdCRkZXNjcmlwdGlvbjogU3RyaW5nIVxyXG5cdFx0JHByaWNlOiBJbnQhXHJcblx0XHQkaW1hZ2U6IFVwbG9hZFxyXG5cdCkge1xyXG5cdFx0Y3JlYXRlUHJvZHVjdChcclxuXHRcdFx0ZGF0YToge1xyXG5cdFx0XHRcdG5hbWU6ICRuYW1lXHJcblx0XHRcdFx0ZGVzY3JpcHRpb246ICRkZXNjcmlwdGlvblxyXG5cdFx0XHRcdHByaWNlOiAkcHJpY2VcclxuXHRcdFx0XHRzdGF0dXM6IFwiQVZBSUxBQkxFXCJcclxuXHRcdFx0XHRwaG90bzogeyBjcmVhdGU6IHsgaW1hZ2U6ICRpbWFnZSwgYWx0VGV4dDogJG5hbWUgfSB9XHJcblx0XHRcdH1cclxuXHRcdCkge1xyXG5cdFx0XHRpZFxyXG5cdFx0XHRuYW1lXHJcblx0XHRcdGRlc2NyaXB0aW9uXHJcblx0XHRcdHByaWNlXHJcblx0XHR9XHJcblx0fVxyXG5gO1xyXG5cclxuZnVuY3Rpb24gQ3JlYXRlUHJvZHVjdCgpIHtcclxuXHRjb25zdCB7IGlucHV0cywgaGFuZGxlQ2hhbmdlLCByZXNldEZvcm0sIGNsZWFyRm9ybSB9ID0gdXNlRm9ybSh7XHJcblx0XHRpbWFnZTogXCJcIixcclxuXHRcdG5hbWU6IFwiXCIsXHJcblx0XHRwcmljZTogMCxcclxuXHRcdGRlc2NyaXB0aW9uOiBcIlwiLFxyXG5cdH0pO1xyXG5cclxuXHRjb25zdCBbY3JlYXRlUHJvZHVjdCwgeyBsb2FkaW5nLCBlcnJvciwgZGF0YSB9XSA9IHVzZU11dGF0aW9uKFxyXG5cdFx0Q1JFQVRFX1BST0RVQ1RfTVVUQVRJT04sXHJcblx0XHR7XHJcblx0XHRcdHZhcmlhYmxlczogaW5wdXRzLFxyXG5cdFx0fVxyXG5cdCk7XHJcblx0Y29uc29sZS5sb2coY3JlYXRlUHJvZHVjdCk7XHJcblx0cmV0dXJuIChcclxuXHRcdDxGb3JtXHJcblx0XHRcdG9uU3VibWl0PXsoZSkgPT4ge1xyXG5cdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhpbnB1dHMpO1xyXG5cdFx0XHR9fVxyXG5cdFx0PlxyXG5cdFx0XHQ8ZmllbGRzZXQ+XHJcblx0XHRcdFx0PGxhYmVsIGh0bWxGb3I9XCJpbWFnZVwiPkltYWdlPC9sYWJlbD5cclxuXHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdHR5cGU9XCJmaWxlXCJcclxuXHRcdFx0XHRcdGlkPVwiaW1hZ2VcIlxyXG5cdFx0XHRcdFx0bmFtZT1cImltYWdlXCJcclxuXHRcdFx0XHRcdG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcblx0XHRcdFx0XHRyZXF1aXJlZFxyXG5cdFx0XHRcdC8+XHJcblxyXG5cdFx0XHRcdDxsYWJlbCBodG1sRm9yPVwibmFtZVwiPm5hbWU8L2xhYmVsPlxyXG5cdFx0XHRcdDxpbnB1dFxyXG5cdFx0XHRcdFx0dHlwZT1cInRleHRcIlxyXG5cdFx0XHRcdFx0aWQ9XCJuYW1lXCJcclxuXHRcdFx0XHRcdG5hbWU9XCJuYW1lXCJcclxuXHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwibmFtZVwiXHJcblx0XHRcdFx0XHR2YWx1ZT17aW5wdXRzLm5hbWV9XHJcblx0XHRcdFx0XHRvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG5cdFx0XHRcdC8+XHJcblxyXG5cdFx0XHRcdDxsYWJlbCBodG1sRm9yPVwibmFtZVwiPnByaWNlPC9sYWJlbD5cclxuXHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdHR5cGU9XCJudW1iZXJcIlxyXG5cdFx0XHRcdFx0aWQ9XCJwcmljZVwiXHJcblx0XHRcdFx0XHRuYW1lPVwicHJpY2VcIlxyXG5cdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJwcmljZVwiXHJcblx0XHRcdFx0XHR2YWx1ZT17aW5wdXRzLnByaWNlfVxyXG5cdFx0XHRcdFx0b25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuXHRcdFx0XHQvPlxyXG5cclxuXHRcdFx0XHQ8bGFiZWwgaHRtbEZvcj1cIm5hbWVcIj5kZXNjcmlwdGlvbjwvbGFiZWw+XHJcblx0XHRcdFx0PHRleHRhcmVhXHJcblx0XHRcdFx0XHRpZD1cImRlc2NyaXB0aW9uXCJcclxuXHRcdFx0XHRcdG5hbWU9XCJkZXNjcmlwdGlvblwiXHJcblx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cImRlc2NyaXB0aW9uXCJcclxuXHRcdFx0XHRcdHZhbHVlPXtpbnB1dHMuZGVzY3JpcHRpb259XHJcblx0XHRcdFx0XHRvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdFx0PGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+QWRkIHByb2R1Y3Q8L2J1dHRvbj5cclxuXHRcdFx0PC9maWVsZHNldD5cclxuXHRcdDwvRm9ybT5cclxuXHQpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDcmVhdGVQcm9kdWN0O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9