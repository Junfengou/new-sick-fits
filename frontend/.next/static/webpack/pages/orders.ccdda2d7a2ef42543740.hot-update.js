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
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _lib_formatMoney__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../lib/formatMoney */ "./lib/formatMoney.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");



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

function countItemsInOrder(order) {
  return order.items.reduce(function (tally, item) {
    return tally + item.quantity;
  }, 0);
}

function order() {
  _s();

  var _this = this;

  var _useQuery = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_10__["useQuery"])(USER_ORDER_QUERY),
      data = _useQuery.data,
      error = _useQuery.error,
      loading = _useQuery.loading;

  if (loading) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
    children: "Loading..."
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 48,
    columnNumber: 22
  }, this);
  if (error) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_ErrorMessage__WEBPACK_IMPORTED_MODULE_4__["default"], {
    error: error
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 49,
    columnNumber: 20
  }, this);
  var allOrders = data.allOrders;
  console.log(allOrders);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_8___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "Sick Fits | Your orders "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
      children: ["You have ", allOrders.length, " orders"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(OrderUl, {
      children: allOrders.map(function (order) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_styles_OrderItemStyles__WEBPACK_IMPORTED_MODULE_6__["default"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
            href: "/order/".concat(order.id),
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "order-meta",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                children: [countItemsInOrder(order), " items"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 67,
                columnNumber: 9
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                children: [order.items.length, " Product", " ", order.items.length === 1 ? "" : "s", " Products"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 68,
                columnNumber: 9
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                children: Object(_lib_formatMoney__WEBPACK_IMPORTED_MODULE_9__["default"])(order.total)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 72,
                columnNumber: 9
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 66,
              columnNumber: 8
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 7
          }, _this)
        }, order.id, false, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 6
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 4
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 56,
    columnNumber: 3
  }, this);
}

_s(order, "eE+cqeCo2lkI//dPlCsO1rICVGU=", false, function () {
  return [_apollo_client__WEBPACK_IMPORTED_MODULE_10__["useQuery"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvb3JkZXJzLmpzIl0sIm5hbWVzIjpbIlVTRVJfT1JERVJfUVVFUlkiLCJncWwiLCJPcmRlclVsIiwic3R5bGVkIiwidWwiLCJjb3VudEl0ZW1zSW5PcmRlciIsIm9yZGVyIiwiaXRlbXMiLCJyZWR1Y2UiLCJ0YWxseSIsIml0ZW0iLCJxdWFudGl0eSIsInVzZVF1ZXJ5IiwiZGF0YSIsImVycm9yIiwibG9hZGluZyIsImFsbE9yZGVycyIsImNvbnNvbGUiLCJsb2ciLCJsZW5ndGgiLCJtYXAiLCJpZCIsImZvcm1hdE1vbmV5IiwidG90YWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsZ0JBQWdCLEdBQUdDLGtEQUFILG1CQUF0QjtBQXlCQSxJQUFNQyxPQUFPLEdBQUdDLHlEQUFNLENBQUNDLEVBQVYsb0JBQWI7S0FBTUYsTzs7QUFNTixTQUFTRyxpQkFBVCxDQUEyQkMsS0FBM0IsRUFBa0M7QUFDakMsU0FBT0EsS0FBSyxDQUFDQyxLQUFOLENBQVlDLE1BQVosQ0FBbUIsVUFBQ0MsS0FBRCxFQUFRQyxJQUFSO0FBQUEsV0FBaUJELEtBQUssR0FBR0MsSUFBSSxDQUFDQyxRQUE5QjtBQUFBLEdBQW5CLEVBQTJELENBQTNELENBQVA7QUFDQTs7QUFFRCxTQUFTTCxLQUFULEdBQWlCO0FBQUE7O0FBQUE7O0FBQUEsa0JBQ2lCTSxnRUFBUSxDQUFDWixnQkFBRCxDQUR6QjtBQUFBLE1BQ1JhLElBRFEsYUFDUkEsSUFEUTtBQUFBLE1BQ0ZDLEtBREUsYUFDRkEsS0FERTtBQUFBLE1BQ0tDLE9BREwsYUFDS0EsT0FETDs7QUFFaEIsTUFBSUEsT0FBSixFQUFhLG9CQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFDYixNQUFJRCxLQUFKLEVBQVcsb0JBQU8scUVBQUMsZ0VBQUQ7QUFBYyxTQUFLLEVBQUVBO0FBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUhLLE1BS1JFLFNBTFEsR0FLTUgsSUFMTixDQUtSRyxTQUxRO0FBT2hCQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUYsU0FBWjtBQUVBLHNCQUNDO0FBQUEsNEJBQ0MscUVBQUMsZ0RBQUQ7QUFBQSw2QkFDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERCxlQUtDO0FBQUEsOEJBQWNBLFNBQVMsQ0FBQ0csTUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEQsZUFNQyxxRUFBQyxPQUFEO0FBQUEsZ0JBQ0VILFNBQVMsQ0FBQ0ksR0FBVixDQUFjLFVBQUNkLEtBQUQ7QUFBQSw0QkFDZCxxRUFBQywwRUFBRDtBQUFBLGlDQUNDLHFFQUFDLGdEQUFEO0FBQU0sZ0JBQUksbUJBQVlBLEtBQUssQ0FBQ2UsRUFBbEIsQ0FBVjtBQUFBLG1DQUNDO0FBQUssdUJBQVMsRUFBQyxZQUFmO0FBQUEsc0NBQ0M7QUFBQSwyQkFBSWhCLGlCQUFpQixDQUFDQyxLQUFELENBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERCxlQUVDO0FBQUEsMkJBQ0VBLEtBQUssQ0FBQ0MsS0FBTixDQUFZWSxNQURkLGNBQzhCLEdBRDlCLEVBRUViLEtBQUssQ0FBQ0MsS0FBTixDQUFZWSxNQUFaLEtBQXVCLENBQXZCLEdBQTJCLEVBQTNCLEdBQWdDLEdBRmxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFGRCxlQU1DO0FBQUEsMEJBQUlHLGdFQUFXLENBQUNoQixLQUFLLENBQUNpQixLQUFQO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFORDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQsV0FBc0JqQixLQUFLLENBQUNlLEVBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRGM7QUFBQSxPQUFkO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU5EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUREO0FBeUJBOztHQWxDUWYsSztVQUN5Qk0sd0Q7OztBQW1DbkJOLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL29yZGVycy5jY2RkYTJkN2EyZWY0MjU0Mzc0MC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgZ3FsIGZyb20gXCJncmFwaHFsLXRhZ1wiO1xyXG5pbXBvcnQgRXJyb3JNZXNzYWdlIGZyb20gXCIuLi9jb21wb25lbnRzL0Vycm9yTWVzc2FnZVwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgT3JkZXJJdGVtU3R5bGVzIGZyb20gXCIuLi9jb21wb25lbnRzL3N0eWxlcy9PcmRlckl0ZW1TdHlsZXNcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBmb3JtYXRNb25leSBmcm9tIFwiLi4vbGliL2Zvcm1hdE1vbmV5XCI7XHJcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XHJcblxyXG5jb25zdCBVU0VSX09SREVSX1FVRVJZID0gZ3FsYFxyXG5cdHF1ZXJ5IFVTRVJfT1JERVJfUVVFUlkge1xyXG5cdFx0YWxsT3JkZXJzIHtcclxuXHRcdFx0aWRcclxuXHRcdFx0Y2hhcmdlXHJcblx0XHRcdHRvdGFsXHJcblx0XHRcdHVzZXIge1xyXG5cdFx0XHRcdGlkXHJcblx0XHRcdH1cclxuXHRcdFx0aXRlbXMge1xyXG5cdFx0XHRcdGlkXHJcblx0XHRcdFx0bmFtZVxyXG5cdFx0XHRcdGRlc2NyaXB0aW9uXHJcblx0XHRcdFx0cXVhbnRpdHlcclxuXHRcdFx0XHRwcmljZVxyXG5cdFx0XHRcdHBob3RvIHtcclxuXHRcdFx0XHRcdGltYWdlIHtcclxuXHRcdFx0XHRcdFx0cHVibGljVXJsVHJhbnNmb3JtZWRcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbmA7XHJcblxyXG5jb25zdCBPcmRlclVsID0gc3R5bGVkLnVsYFxyXG5cdGRpc3BsYXk6IGdyaWQ7XHJcblx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgzNTBweCwgMWZyKSk7XHJcblx0Z2FwOiA0cmVtO1xyXG5gO1xyXG5cclxuZnVuY3Rpb24gY291bnRJdGVtc0luT3JkZXIob3JkZXIpIHtcclxuXHRyZXR1cm4gb3JkZXIuaXRlbXMucmVkdWNlKCh0YWxseSwgaXRlbSkgPT4gdGFsbHkgKyBpdGVtLnF1YW50aXR5LCAwKTtcclxufVxyXG5cclxuZnVuY3Rpb24gb3JkZXIoKSB7XHJcblx0Y29uc3QgeyBkYXRhLCBlcnJvciwgbG9hZGluZyB9ID0gdXNlUXVlcnkoVVNFUl9PUkRFUl9RVUVSWSk7XHJcblx0aWYgKGxvYWRpbmcpIHJldHVybiA8cD5Mb2FkaW5nLi4uPC9wPjtcclxuXHRpZiAoZXJyb3IpIHJldHVybiA8RXJyb3JNZXNzYWdlIGVycm9yPXtlcnJvcn0gLz47XHJcblxyXG5cdGNvbnN0IHsgYWxsT3JkZXJzIH0gPSBkYXRhO1xyXG5cclxuXHRjb25zb2xlLmxvZyhhbGxPcmRlcnMpO1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdj5cclxuXHRcdFx0PEhlYWQ+XHJcblx0XHRcdFx0PHRpdGxlPlNpY2sgRml0cyB8IFlvdXIgb3JkZXJzIDwvdGl0bGU+XHJcblx0XHRcdDwvSGVhZD5cclxuXHJcblx0XHRcdDxoMj5Zb3UgaGF2ZSB7YWxsT3JkZXJzLmxlbmd0aH0gb3JkZXJzPC9oMj5cclxuXHRcdFx0PE9yZGVyVWw+XHJcblx0XHRcdFx0e2FsbE9yZGVycy5tYXAoKG9yZGVyKSA9PiAoXHJcblx0XHRcdFx0XHQ8T3JkZXJJdGVtU3R5bGVzIGtleT17b3JkZXIuaWR9PlxyXG5cdFx0XHRcdFx0XHQ8TGluayBocmVmPXtgL29yZGVyLyR7b3JkZXIuaWR9YH0+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJvcmRlci1tZXRhXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8cD57Y291bnRJdGVtc0luT3JkZXIob3JkZXIpfSBpdGVtczwvcD5cclxuXHRcdFx0XHRcdFx0XHRcdDxwPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7b3JkZXIuaXRlbXMubGVuZ3RofSBQcm9kdWN0e1wiIFwifVxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7b3JkZXIuaXRlbXMubGVuZ3RoID09PSAxID8gXCJcIiA6IFwic1wifSBQcm9kdWN0c1xyXG5cdFx0XHRcdFx0XHRcdFx0PC9wPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHA+e2Zvcm1hdE1vbmV5KG9yZGVyLnRvdGFsKX08L3A+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDwvTGluaz5cclxuXHRcdFx0XHRcdDwvT3JkZXJJdGVtU3R5bGVzPlxyXG5cdFx0XHRcdCkpfVxyXG5cdFx0XHQ8L09yZGVyVWw+XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBvcmRlcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==