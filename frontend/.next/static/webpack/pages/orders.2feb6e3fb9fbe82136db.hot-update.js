webpackHotUpdate_N_E("pages/orders",{

/***/ "./pages/orders.js":
/*!*************************!*\
  !*** ./pages/orders.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var D_React_Advanced_React_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_ErrorMessage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ErrorMessage */ "./components/ErrorMessage.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_styles_OrderItemStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/styles/OrderItemStyles */ "./components/styles/OrderItemStyles.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _lib_formatMoney__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../lib/formatMoney */ "./lib/formatMoney.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");



var _jsxFileName = "D:\\React\\Advanced-React\\Advanced-React\\sick-fits\\frontend\\pages\\orders.js",
    _s = $RefreshSig$();

function _templateObject2() {
  var data = Object(D_React_Advanced_React_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n\tdisplay: grid;\n\tgrid-template-columns: repeat(auto-fit, minmax(350px, 1fr));\n\tgap: 4rem;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(D_React_Advanced_React_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n\tquery USER_ORDER_QUERY {\n\t\tallOrders {\n\t\t\tid\n\t\t\tcharge\n\t\t\ttotal\n\t\t\tuser {\n\t\t\t\tid\n\t\t\t}\n\t\t\titems {\n\t\t\t\tid\n\t\t\t\tname\n\t\t\t\tdescription\n\t\t\t\tquantity\n\t\t\t\tprice\n\t\t\t\tphoto {\n\t\t\t\t\timage {\n\t\t\t\t\t\tpublicUrlTransformed\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}









var USER_ORDER_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(_templateObject());
var OrderUl = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].ul(_templateObject2());
_c = OrderUl;

function order() {
  _s();

  var _this = this;

  var _useQuery = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_9__["useQuery"])(USER_ORDER_QUERY),
      data = _useQuery.data,
      error = _useQuery.error,
      loading = _useQuery.loading;

  if (loading) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
    children: "Loading..."
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 43,
    columnNumber: 22
  }, this);
  if (error) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_ErrorMessage__WEBPACK_IMPORTED_MODULE_4__["default"], {
    error: error
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 44,
    columnNumber: 20
  }, this);
  var allOrders = data.allOrders;
  console.log(allOrders);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
      children: ["You have ", allOrders.length, " orders"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(OrderUl, {
      children: allOrders.map(function (order) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_styles_OrderItemStyles__WEBPACK_IMPORTED_MODULE_6__["default"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
            href: "/order/".concat(order.id),
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "order-meta",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                children: order.total
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 58,
                columnNumber: 9
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 57,
              columnNumber: 8
            }, _this)
          }, order.id, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 7
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 6
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 4
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 51,
    columnNumber: 3
  }, this);
}

_s(order, "eE+cqeCo2lkI//dPlCsO1rICVGU=", false, function () {
  return [_apollo_client__WEBPACK_IMPORTED_MODULE_9__["useQuery"]];
});

/* harmony default export */ __webpack_exports__["default"] = (order);

var _c;

$RefreshReg$(_c, "OrderUl");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvb3JkZXJzLmpzIl0sIm5hbWVzIjpbIlVTRVJfT1JERVJfUVVFUlkiLCJncWwiLCJPcmRlclVsIiwic3R5bGVkIiwidWwiLCJvcmRlciIsInVzZVF1ZXJ5IiwiZGF0YSIsImVycm9yIiwibG9hZGluZyIsImFsbE9yZGVycyIsImNvbnNvbGUiLCJsb2ciLCJsZW5ndGgiLCJtYXAiLCJpZCIsInRvdGFsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsZ0JBQWdCLEdBQUdDLGtEQUFILG1CQUF0QjtBQXlCQSxJQUFNQyxPQUFPLEdBQUdDLHlEQUFNLENBQUNDLEVBQVYsb0JBQWI7S0FBTUYsTzs7QUFNTixTQUFTRyxLQUFULEdBQWlCO0FBQUE7O0FBQUE7O0FBQUEsa0JBQ2lCQywrREFBUSxDQUFDTixnQkFBRCxDQUR6QjtBQUFBLE1BQ1JPLElBRFEsYUFDUkEsSUFEUTtBQUFBLE1BQ0ZDLEtBREUsYUFDRkEsS0FERTtBQUFBLE1BQ0tDLE9BREwsYUFDS0EsT0FETDs7QUFFaEIsTUFBSUEsT0FBSixFQUFhLG9CQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFDYixNQUFJRCxLQUFKLEVBQVcsb0JBQU8scUVBQUMsZ0VBQUQ7QUFBYyxTQUFLLEVBQUVBO0FBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUhLLE1BS1JFLFNBTFEsR0FLTUgsSUFMTixDQUtSRyxTQUxRO0FBT2hCQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUYsU0FBWjtBQUVBLHNCQUNDO0FBQUEsNEJBQ0M7QUFBQSw4QkFBY0EsU0FBUyxDQUFDRyxNQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERCxlQUVDLHFFQUFDLE9BQUQ7QUFBQSxnQkFDRUgsU0FBUyxDQUFDSSxHQUFWLENBQWMsVUFBQ1QsS0FBRDtBQUFBLDRCQUNkLHFFQUFDLDBFQUFEO0FBQUEsaUNBQ0MscUVBQUMsZ0RBQUQ7QUFBcUIsZ0JBQUksbUJBQVlBLEtBQUssQ0FBQ1UsRUFBbEIsQ0FBekI7QUFBQSxtQ0FDQztBQUFLLHVCQUFTLEVBQUMsWUFBZjtBQUFBLHFDQUNDO0FBQUEsMEJBQUlWLEtBQUssQ0FBQ1c7QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURELGFBQVdYLEtBQUssQ0FBQ1UsRUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRGM7QUFBQSxPQUFkO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUREO0FBZ0JBOztHQXpCUVYsSztVQUN5QkMsdUQ7OztBQTBCbkJELG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL29yZGVycy4yZmViNmUzZmI5ZmJlODIxMzZkYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgZ3FsIGZyb20gXCJncmFwaHFsLXRhZ1wiO1xyXG5pbXBvcnQgRXJyb3JNZXNzYWdlIGZyb20gXCIuLi9jb21wb25lbnRzL0Vycm9yTWVzc2FnZVwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgT3JkZXJJdGVtU3R5bGVzIGZyb20gXCIuLi9jb21wb25lbnRzL3N0eWxlcy9PcmRlckl0ZW1TdHlsZXNcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgZm9ybWF0TW9uZXkgZnJvbSBcIi4uL2xpYi9mb3JtYXRNb25leVwiO1xyXG5pbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xyXG5cclxuY29uc3QgVVNFUl9PUkRFUl9RVUVSWSA9IGdxbGBcclxuXHRxdWVyeSBVU0VSX09SREVSX1FVRVJZIHtcclxuXHRcdGFsbE9yZGVycyB7XHJcblx0XHRcdGlkXHJcblx0XHRcdGNoYXJnZVxyXG5cdFx0XHR0b3RhbFxyXG5cdFx0XHR1c2VyIHtcclxuXHRcdFx0XHRpZFxyXG5cdFx0XHR9XHJcblx0XHRcdGl0ZW1zIHtcclxuXHRcdFx0XHRpZFxyXG5cdFx0XHRcdG5hbWVcclxuXHRcdFx0XHRkZXNjcmlwdGlvblxyXG5cdFx0XHRcdHF1YW50aXR5XHJcblx0XHRcdFx0cHJpY2VcclxuXHRcdFx0XHRwaG90byB7XHJcblx0XHRcdFx0XHRpbWFnZSB7XHJcblx0XHRcdFx0XHRcdHB1YmxpY1VybFRyYW5zZm9ybWVkXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5gO1xyXG5cclxuY29uc3QgT3JkZXJVbCA9IHN0eWxlZC51bGBcclxuXHRkaXNwbGF5OiBncmlkO1xyXG5cdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMzUwcHgsIDFmcikpO1xyXG5cdGdhcDogNHJlbTtcclxuYDtcclxuXHJcbmZ1bmN0aW9uIG9yZGVyKCkge1xyXG5cdGNvbnN0IHsgZGF0YSwgZXJyb3IsIGxvYWRpbmcgfSA9IHVzZVF1ZXJ5KFVTRVJfT1JERVJfUVVFUlkpO1xyXG5cdGlmIChsb2FkaW5nKSByZXR1cm4gPHA+TG9hZGluZy4uLjwvcD47XHJcblx0aWYgKGVycm9yKSByZXR1cm4gPEVycm9yTWVzc2FnZSBlcnJvcj17ZXJyb3J9IC8+O1xyXG5cclxuXHRjb25zdCB7IGFsbE9yZGVycyB9ID0gZGF0YTtcclxuXHJcblx0Y29uc29sZS5sb2coYWxsT3JkZXJzKTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXY+XHJcblx0XHRcdDxoMj5Zb3UgaGF2ZSB7YWxsT3JkZXJzLmxlbmd0aH0gb3JkZXJzPC9oMj5cclxuXHRcdFx0PE9yZGVyVWw+XHJcblx0XHRcdFx0e2FsbE9yZGVycy5tYXAoKG9yZGVyKSA9PiAoXHJcblx0XHRcdFx0XHQ8T3JkZXJJdGVtU3R5bGVzPlxyXG5cdFx0XHRcdFx0XHQ8TGluayBrZXk9e29yZGVyLmlkfSBocmVmPXtgL29yZGVyLyR7b3JkZXIuaWR9YH0+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJvcmRlci1tZXRhXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8cD57b3JkZXIudG90YWx9PC9wPlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdFx0XHQ8L09yZGVySXRlbVN0eWxlcz5cclxuXHRcdFx0XHQpKX1cclxuXHRcdFx0PC9PcmRlclVsPlxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgb3JkZXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=