webpackHotUpdate_N_E("pages/update",{

/***/ "./components/UpdateProduct.js":
/*!*************************************!*\
  !*** ./components/UpdateProduct.js ***!
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
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styles_Form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles/Form */ "./components/styles/Form.js");
/* harmony import */ var _SingleProduct__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./SingleProduct */ "./components/SingleProduct.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ErrorMessage */ "./components/ErrorMessage.js");
/* harmony import */ var _lib_useForm__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../lib/useForm */ "./lib/useForm.js");






var _jsxFileName = "D:\\React\\Advanced-React\\Advanced-React\\sick-fits\\frontend\\components\\UpdateProduct.js",
    _s = $RefreshSig$();

function _templateObject() {
  var data = Object(D_React_Advanced_React_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__["default"])(["\n\tmutation UPDATE_PRODUCT_MUTATION(\n\t\t$id: ID!\n\t\t$name: String\n\t\t$description: String\n\t\t$price: Int\n\t) {\n\t\tupdateProduct(\n\t\t\tid: $id\n\t\t\tdata: { id: $id, name: $name, description: $description, price: $price }\n\t\t) {\n\t\t\tid\n\t\t\tname\n\t\t\tdescription\n\t\t\tprice\n\t\t}\n\t}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}








var UPDATE_PRODUCT_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_6___default()(_templateObject());

function UpdateProduct(_ref) {
  _s();

  var id = _ref.id;

  // 1. Get the existing product
  var _useQuery = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_9__["useQuery"])(_SingleProduct__WEBPACK_IMPORTED_MODULE_8__["SINGLE_ITEM_QUERY"], {
    variables: {
      id: id
    }
  }),
      data = _useQuery.data,
      loading = _useQuery.loading,
      error = _useQuery.error; // 2. Get the mutation to update the product


  var _useMutation = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_9__["useMutation"])(UPDATE_PRODUCT_MUTATION, {
    variables: {
      id: id // TODO: pass in updates to products here

    }
  }),
      _useMutation2 = Object(D_React_Advanced_React_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useMutation, 2),
      updateProduct = _useMutation2[0],
      _useMutation2$ = _useMutation2[1],
      updateData = _useMutation2$.data,
      updateError = _useMutation2$.error,
      updateLoading = _useMutation2$.loading; // 3. Get the form to handle the updates


  var _useForm = Object(_lib_useForm__WEBPACK_IMPORTED_MODULE_11__["default"])(data),
      inputs = _useForm.inputs,
      handleChange = _useForm.handleChange,
      resetForm = _useForm.resetForm,
      clearForm = _useForm.clearForm;

  console.log(inputs);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_styles_Form__WEBPACK_IMPORTED_MODULE_7__["default"], {
    onSubmit: /*#__PURE__*/function () {
      var _ref2 = Object(D_React_Advanced_React_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/D_React_Advanced_React_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {
        return D_React_Advanced_React_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                e.preventDefault(); // Handle submit

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(),
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_ErrorMessage__WEBPACK_IMPORTED_MODULE_10__["default"], {
      error: error || updateError
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("fieldset", {
      disabled: updateLoading,
      "aria-busy": updateLoading,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("label", {
        htmlFor: "name",
        children: "name"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
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
        lineNumber: 61,
        columnNumber: 5
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("label", {
        htmlFor: "name",
        children: "price"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
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
        lineNumber: 71,
        columnNumber: 5
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("label", {
        htmlFor: "name",
        children: "description"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 5
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("textarea", {
        id: "description",
        name: "description",
        placeholder: "description",
        value: inputs.description,
        onChange: handleChange
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 5
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("button", {
        type: "submit",
        children: "Update product"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 4
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 52,
    columnNumber: 3
  }, this);
}

_s(UpdateProduct, "2A0FCKJEMytSwg/kxGPjv2BGu3w=", false, function () {
  return [_apollo_client__WEBPACK_IMPORTED_MODULE_9__["useQuery"], _apollo_client__WEBPACK_IMPORTED_MODULE_9__["useMutation"], _lib_useForm__WEBPACK_IMPORTED_MODULE_11__["default"]];
});

_c = UpdateProduct;
/* harmony default export */ __webpack_exports__["default"] = (UpdateProduct);

var _c;

$RefreshReg$(_c, "UpdateProduct");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9VcGRhdGVQcm9kdWN0LmpzIl0sIm5hbWVzIjpbIlVQREFURV9QUk9EVUNUX01VVEFUSU9OIiwiZ3FsIiwiVXBkYXRlUHJvZHVjdCIsImlkIiwidXNlUXVlcnkiLCJTSU5HTEVfSVRFTV9RVUVSWSIsInZhcmlhYmxlcyIsImRhdGEiLCJsb2FkaW5nIiwiZXJyb3IiLCJ1c2VNdXRhdGlvbiIsInVwZGF0ZVByb2R1Y3QiLCJ1cGRhdGVEYXRhIiwidXBkYXRlRXJyb3IiLCJ1cGRhdGVMb2FkaW5nIiwidXNlRm9ybSIsImlucHV0cyIsImhhbmRsZUNoYW5nZSIsInJlc2V0Rm9ybSIsImNsZWFyRm9ybSIsImNvbnNvbGUiLCJsb2ciLCJlIiwicHJldmVudERlZmF1bHQiLCJuYW1lIiwicHJpY2UiLCJkZXNjcmlwdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsdUJBQXVCLEdBQUdDLGtEQUFILG1CQUE3Qjs7QUFtQkEsU0FBU0MsYUFBVCxPQUErQjtBQUFBOztBQUFBLE1BQU5DLEVBQU0sUUFBTkEsRUFBTTs7QUFDOUI7QUFEOEIsa0JBRUdDLCtEQUFRLENBQUNDLGdFQUFELEVBQW9CO0FBQzVEQyxhQUFTLEVBQUU7QUFDVkgsUUFBRSxFQUFGQTtBQURVO0FBRGlELEdBQXBCLENBRlg7QUFBQSxNQUV0QkksSUFGc0IsYUFFdEJBLElBRnNCO0FBQUEsTUFFaEJDLE9BRmdCLGFBRWhCQSxPQUZnQjtBQUFBLE1BRVBDLEtBRk8sYUFFUEEsS0FGTyxFQVE5Qjs7O0FBUjhCLHFCQVkxQkMsa0VBQVcsQ0FBQ1YsdUJBQUQsRUFBMEI7QUFDeENNLGFBQVMsRUFBRTtBQUNWSCxRQUFFLEVBQUZBLEVBRFUsQ0FFVjs7QUFGVTtBQUQ2QixHQUExQixDQVplO0FBQUE7QUFBQSxNQVU3QlEsYUFWNkI7QUFBQTtBQUFBLE1BV3JCQyxVQVhxQixrQkFXM0JMLElBWDJCO0FBQUEsTUFXRk0sV0FYRSxrQkFXVEosS0FYUztBQUFBLE1BV29CSyxhQVhwQixrQkFXV04sT0FYWCxFQW1COUI7OztBQW5COEIsaUJBb0J5Qk8sNkRBQU8sQ0FBQ1IsSUFBRCxDQXBCaEM7QUFBQSxNQW9CdEJTLE1BcEJzQixZQW9CdEJBLE1BcEJzQjtBQUFBLE1Bb0JkQyxZQXBCYyxZQW9CZEEsWUFwQmM7QUFBQSxNQW9CQUMsU0FwQkEsWUFvQkFBLFNBcEJBO0FBQUEsTUFvQldDLFNBcEJYLFlBb0JXQSxTQXBCWDs7QUFxQjlCQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUwsTUFBWjtBQUVBLHNCQUNDLHFFQUFDLG9EQUFEO0FBQ0MsWUFBUTtBQUFBLGlYQUFFLGlCQUFPTSxDQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDVEEsaUJBQUMsQ0FBQ0MsY0FBRixHQURTLENBRVQ7O0FBRlM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBRjs7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQURUO0FBQUEsNEJBTUMscUVBQUMsc0RBQUQ7QUFBYyxXQUFLLEVBQUVkLEtBQUssSUFBSUk7QUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU5ELGVBT0M7QUFBVSxjQUFRLEVBQUVDLGFBQXBCO0FBQW1DLG1CQUFXQSxhQUE5QztBQUFBLDhCQUNDO0FBQU8sZUFBTyxFQUFDLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERCxlQUVDO0FBQ0MsWUFBSSxFQUFDLE1BRE47QUFFQyxVQUFFLEVBQUMsTUFGSjtBQUdDLFlBQUksRUFBQyxNQUhOO0FBSUMsbUJBQVcsRUFBQyxNQUpiO0FBS0MsYUFBSyxFQUFFRSxNQUFNLENBQUNRLElBTGY7QUFNQyxnQkFBUSxFQUFFUDtBQU5YO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRCxlQVdDO0FBQU8sZUFBTyxFQUFDLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FYRCxlQVlDO0FBQ0MsWUFBSSxFQUFDLFFBRE47QUFFQyxVQUFFLEVBQUMsT0FGSjtBQUdDLFlBQUksRUFBQyxPQUhOO0FBSUMsbUJBQVcsRUFBQyxPQUpiO0FBS0MsYUFBSyxFQUFFRCxNQUFNLENBQUNTLEtBTGY7QUFNQyxnQkFBUSxFQUFFUjtBQU5YO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FaRCxlQXFCQztBQUFPLGVBQU8sRUFBQyxNQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBckJELGVBc0JDO0FBQ0MsVUFBRSxFQUFDLGFBREo7QUFFQyxZQUFJLEVBQUMsYUFGTjtBQUdDLG1CQUFXLEVBQUMsYUFIYjtBQUlDLGFBQUssRUFBRUQsTUFBTSxDQUFDVSxXQUpmO0FBS0MsZ0JBQVEsRUFBRVQ7QUFMWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBdEJELGVBNkJDO0FBQVEsWUFBSSxFQUFDLFFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0E3QkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREQ7QUF5Q0E7O0dBaEVRZixhO1VBRXlCRSx1RCxFQVU3Qk0sMEQsRUFRbURLLHFEOzs7S0FwQi9DYixhO0FBa0VNQSw0RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy91cGRhdGUuYzljNjAwM2MzNGI1MmQwMmI1NjkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGdxbCBmcm9tIFwiZ3JhcGhxbC10YWdcIjtcclxuaW1wb3J0IEZvcm0gZnJvbSBcIi4vc3R5bGVzL0Zvcm1cIjtcclxuaW1wb3J0IHsgU0lOR0xFX0lURU1fUVVFUlkgfSBmcm9tIFwiLi9TaW5nbGVQcm9kdWN0XCI7XHJcbmltcG9ydCB7IHVzZU11dGF0aW9uLCB1c2VRdWVyeSB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xyXG5pbXBvcnQgRGlzcGxheUVycm9yIGZyb20gXCIuL0Vycm9yTWVzc2FnZVwiO1xyXG5pbXBvcnQgdXNlRm9ybSBmcm9tIFwiLi4vbGliL3VzZUZvcm1cIjtcclxuXHJcbmNvbnN0IFVQREFURV9QUk9EVUNUX01VVEFUSU9OID0gZ3FsYFxyXG5cdG11dGF0aW9uIFVQREFURV9QUk9EVUNUX01VVEFUSU9OKFxyXG5cdFx0JGlkOiBJRCFcclxuXHRcdCRuYW1lOiBTdHJpbmdcclxuXHRcdCRkZXNjcmlwdGlvbjogU3RyaW5nXHJcblx0XHQkcHJpY2U6IEludFxyXG5cdCkge1xyXG5cdFx0dXBkYXRlUHJvZHVjdChcclxuXHRcdFx0aWQ6ICRpZFxyXG5cdFx0XHRkYXRhOiB7IGlkOiAkaWQsIG5hbWU6ICRuYW1lLCBkZXNjcmlwdGlvbjogJGRlc2NyaXB0aW9uLCBwcmljZTogJHByaWNlIH1cclxuXHRcdCkge1xyXG5cdFx0XHRpZFxyXG5cdFx0XHRuYW1lXHJcblx0XHRcdGRlc2NyaXB0aW9uXHJcblx0XHRcdHByaWNlXHJcblx0XHR9XHJcblx0fVxyXG5gO1xyXG5cclxuZnVuY3Rpb24gVXBkYXRlUHJvZHVjdCh7IGlkIH0pIHtcclxuXHQvLyAxLiBHZXQgdGhlIGV4aXN0aW5nIHByb2R1Y3RcclxuXHRjb25zdCB7IGRhdGEsIGxvYWRpbmcsIGVycm9yIH0gPSB1c2VRdWVyeShTSU5HTEVfSVRFTV9RVUVSWSwge1xyXG5cdFx0dmFyaWFibGVzOiB7XHJcblx0XHRcdGlkLFxyXG5cdFx0fSxcclxuXHR9KTtcclxuXHJcblx0Ly8gMi4gR2V0IHRoZSBtdXRhdGlvbiB0byB1cGRhdGUgdGhlIHByb2R1Y3RcclxuXHRjb25zdCBbXHJcblx0XHR1cGRhdGVQcm9kdWN0LFxyXG5cdFx0eyBkYXRhOiB1cGRhdGVEYXRhLCBlcnJvcjogdXBkYXRlRXJyb3IsIGxvYWRpbmc6IHVwZGF0ZUxvYWRpbmcgfSxcclxuXHRdID0gdXNlTXV0YXRpb24oVVBEQVRFX1BST0RVQ1RfTVVUQVRJT04sIHtcclxuXHRcdHZhcmlhYmxlczoge1xyXG5cdFx0XHRpZCxcclxuXHRcdFx0Ly8gVE9ETzogcGFzcyBpbiB1cGRhdGVzIHRvIHByb2R1Y3RzIGhlcmVcclxuXHRcdH0sXHJcblx0fSk7XHJcblxyXG5cdC8vIDMuIEdldCB0aGUgZm9ybSB0byBoYW5kbGUgdGhlIHVwZGF0ZXNcclxuXHRjb25zdCB7IGlucHV0cywgaGFuZGxlQ2hhbmdlLCByZXNldEZvcm0sIGNsZWFyRm9ybSB9ID0gdXNlRm9ybShkYXRhKTtcclxuXHRjb25zb2xlLmxvZyhpbnB1dHMpO1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PEZvcm1cclxuXHRcdFx0b25TdWJtaXQ9e2FzeW5jIChlKSA9PiB7XHJcblx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHRcdC8vIEhhbmRsZSBzdWJtaXRcclxuXHRcdFx0fX1cclxuXHRcdD5cclxuXHRcdFx0PERpc3BsYXlFcnJvciBlcnJvcj17ZXJyb3IgfHwgdXBkYXRlRXJyb3J9IC8+XHJcblx0XHRcdDxmaWVsZHNldCBkaXNhYmxlZD17dXBkYXRlTG9hZGluZ30gYXJpYS1idXN5PXt1cGRhdGVMb2FkaW5nfT5cclxuXHRcdFx0XHQ8bGFiZWwgaHRtbEZvcj1cIm5hbWVcIj5uYW1lPC9sYWJlbD5cclxuXHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcclxuXHRcdFx0XHRcdGlkPVwibmFtZVwiXHJcblx0XHRcdFx0XHRuYW1lPVwibmFtZVwiXHJcblx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIm5hbWVcIlxyXG5cdFx0XHRcdFx0dmFsdWU9e2lucHV0cy5uYW1lfVxyXG5cdFx0XHRcdFx0b25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuXHRcdFx0XHQvPlxyXG5cclxuXHRcdFx0XHQ8bGFiZWwgaHRtbEZvcj1cIm5hbWVcIj5wcmljZTwvbGFiZWw+XHJcblx0XHRcdFx0PGlucHV0XHJcblx0XHRcdFx0XHR0eXBlPVwibnVtYmVyXCJcclxuXHRcdFx0XHRcdGlkPVwicHJpY2VcIlxyXG5cdFx0XHRcdFx0bmFtZT1cInByaWNlXCJcclxuXHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwicHJpY2VcIlxyXG5cdFx0XHRcdFx0dmFsdWU9e2lucHV0cy5wcmljZX1cclxuXHRcdFx0XHRcdG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcblx0XHRcdFx0Lz5cclxuXHJcblx0XHRcdFx0PGxhYmVsIGh0bWxGb3I9XCJuYW1lXCI+ZGVzY3JpcHRpb248L2xhYmVsPlxyXG5cdFx0XHRcdDx0ZXh0YXJlYVxyXG5cdFx0XHRcdFx0aWQ9XCJkZXNjcmlwdGlvblwiXHJcblx0XHRcdFx0XHRuYW1lPVwiZGVzY3JpcHRpb25cIlxyXG5cdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJkZXNjcmlwdGlvblwiXHJcblx0XHRcdFx0XHR2YWx1ZT17aW5wdXRzLmRlc2NyaXB0aW9ufVxyXG5cdFx0XHRcdFx0b25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHRcdDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlVwZGF0ZSBwcm9kdWN0PC9idXR0b24+XHJcblx0XHRcdDwvZmllbGRzZXQ+XHJcblx0XHQ8L0Zvcm0+XHJcblx0KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXBkYXRlUHJvZHVjdDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==