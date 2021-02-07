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
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "order-meta",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  children: [countItemsInOrder(order), " items"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 68,
                  columnNumber: 10
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  children: [order.items.length, " Product", order.items.length === 1 ? "" : "s"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 69,
                  columnNumber: 10
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  children: Object(_lib_formatMoney__WEBPACK_IMPORTED_MODULE_9__["default"])(order.total)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 73,
                  columnNumber: 10
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 67,
                columnNumber: 9
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "images",
                children: order.items.map(function (item) {
                  var _item$photo, _item$photo$image;

                  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                    src: (_item$photo = item.photo) === null || _item$photo === void 0 ? void 0 : (_item$photo$image = _item$photo.image) === null || _item$photo$image === void 0 ? void 0 : _item$photo$image.publicUrlTransformed,
                    alt: item.name
                  }, "image-".concat(item.id), false, {
                    fileName: _jsxFileName,
                    lineNumber: 77,
                    columnNumber: 11
                  }, _this);
                })
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 75,
                columnNumber: 9
              }, _this)]
            }, void 0, true)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvb3JkZXJzLmpzIl0sIm5hbWVzIjpbIlVTRVJfT1JERVJfUVVFUlkiLCJncWwiLCJPcmRlclVsIiwic3R5bGVkIiwidWwiLCJjb3VudEl0ZW1zSW5PcmRlciIsIm9yZGVyIiwiaXRlbXMiLCJyZWR1Y2UiLCJ0YWxseSIsIml0ZW0iLCJxdWFudGl0eSIsInVzZVF1ZXJ5IiwiZGF0YSIsImVycm9yIiwibG9hZGluZyIsImFsbE9yZGVycyIsImNvbnNvbGUiLCJsb2ciLCJsZW5ndGgiLCJtYXAiLCJpZCIsImZvcm1hdE1vbmV5IiwidG90YWwiLCJwaG90byIsImltYWdlIiwicHVibGljVXJsVHJhbnNmb3JtZWQiLCJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxnQkFBZ0IsR0FBR0Msa0RBQUgsbUJBQXRCO0FBeUJBLElBQU1DLE9BQU8sR0FBR0MseURBQU0sQ0FBQ0MsRUFBVixvQkFBYjtLQUFNRixPOztBQU1OLFNBQVNHLGlCQUFULENBQTJCQyxLQUEzQixFQUFrQztBQUNqQyxTQUFPQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsTUFBWixDQUFtQixVQUFDQyxLQUFELEVBQVFDLElBQVI7QUFBQSxXQUFpQkQsS0FBSyxHQUFHQyxJQUFJLENBQUNDLFFBQTlCO0FBQUEsR0FBbkIsRUFBMkQsQ0FBM0QsQ0FBUDtBQUNBOztBQUVELFNBQVNMLEtBQVQsR0FBaUI7QUFBQTs7QUFBQTs7QUFBQSxrQkFDaUJNLGdFQUFRLENBQUNaLGdCQUFELENBRHpCO0FBQUEsTUFDUmEsSUFEUSxhQUNSQSxJQURRO0FBQUEsTUFDRkMsS0FERSxhQUNGQSxLQURFO0FBQUEsTUFDS0MsT0FETCxhQUNLQSxPQURMOztBQUVoQixNQUFJQSxPQUFKLEVBQWEsb0JBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUNiLE1BQUlELEtBQUosRUFBVyxvQkFBTyxxRUFBQyxnRUFBRDtBQUFjLFNBQUssRUFBRUE7QUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBSEssTUFLUkUsU0FMUSxHQUtNSCxJQUxOLENBS1JHLFNBTFE7QUFPaEJDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZRixTQUFaO0FBRUEsc0JBQ0M7QUFBQSw0QkFDQyxxRUFBQyxnREFBRDtBQUFBLDZCQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURELGVBS0M7QUFBQSw4QkFBY0EsU0FBUyxDQUFDRyxNQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMRCxlQU1DLHFFQUFDLE9BQUQ7QUFBQSxnQkFDRUgsU0FBUyxDQUFDSSxHQUFWLENBQWMsVUFBQ2QsS0FBRDtBQUFBLDRCQUNkLHFFQUFDLDBFQUFEO0FBQUEsaUNBQ0MscUVBQUMsZ0RBQUQ7QUFBTSxnQkFBSSxtQkFBWUEsS0FBSyxDQUFDZSxFQUFsQixDQUFWO0FBQUEsbUNBQ0M7QUFBQSxzQ0FDQztBQUFLLHlCQUFTLEVBQUMsWUFBZjtBQUFBLHdDQUNDO0FBQUEsNkJBQUloQixpQkFBaUIsQ0FBQ0MsS0FBRCxDQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREQsZUFFQztBQUFBLDZCQUNFQSxLQUFLLENBQUNDLEtBQU4sQ0FBWVksTUFEZCxjQUVFYixLQUFLLENBQUNDLEtBQU4sQ0FBWVksTUFBWixLQUF1QixDQUF2QixHQUEyQixFQUEzQixHQUFnQyxHQUZsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBRkQsZUFNQztBQUFBLDRCQUFJRyxnRUFBVyxDQUFDaEIsS0FBSyxDQUFDaUIsS0FBUDtBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBTkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURELGVBU0M7QUFBSyx5QkFBUyxFQUFDLFFBQWY7QUFBQSwwQkFDRWpCLEtBQUssQ0FBQ0MsS0FBTixDQUFZYSxHQUFaLENBQWdCLFVBQUNWLElBQUQ7QUFBQTs7QUFBQSxzQ0FDaEI7QUFFQyx1QkFBRyxpQkFBRUEsSUFBSSxDQUFDYyxLQUFQLHFFQUFFLFlBQVlDLEtBQWQsc0RBQUUsa0JBQW1CQyxvQkFGekI7QUFHQyx1QkFBRyxFQUFFaEIsSUFBSSxDQUFDaUI7QUFIWCxxQ0FDZWpCLElBQUksQ0FBQ1csRUFEcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFEZ0I7QUFBQSxpQkFBaEI7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQVREO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQsV0FBc0JmLEtBQUssQ0FBQ2UsRUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEYztBQUFBLE9BQWQ7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREQ7QUFvQ0E7O0dBN0NRZixLO1VBQ3lCTSx3RDs7O0FBOENuQk4sb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvb3JkZXJzLjg2NjdmZWUxNzdjNzk3OTA4ZTg0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBncWwgZnJvbSBcImdyYXBocWwtdGFnXCI7XHJcbmltcG9ydCBFcnJvck1lc3NhZ2UgZnJvbSBcIi4uL2NvbXBvbmVudHMvRXJyb3JNZXNzYWdlXCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCBPcmRlckl0ZW1TdHlsZXMgZnJvbSBcIi4uL2NvbXBvbmVudHMvc3R5bGVzL09yZGVySXRlbVN0eWxlc1wiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IGZvcm1hdE1vbmV5IGZyb20gXCIuLi9saWIvZm9ybWF0TW9uZXlcIjtcclxuaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcclxuXHJcbmNvbnN0IFVTRVJfT1JERVJfUVVFUlkgPSBncWxgXHJcblx0cXVlcnkgVVNFUl9PUkRFUl9RVUVSWSB7XHJcblx0XHRhbGxPcmRlcnMge1xyXG5cdFx0XHRpZFxyXG5cdFx0XHRjaGFyZ2VcclxuXHRcdFx0dG90YWxcclxuXHRcdFx0dXNlciB7XHJcblx0XHRcdFx0aWRcclxuXHRcdFx0fVxyXG5cdFx0XHRpdGVtcyB7XHJcblx0XHRcdFx0aWRcclxuXHRcdFx0XHRuYW1lXHJcblx0XHRcdFx0ZGVzY3JpcHRpb25cclxuXHRcdFx0XHRxdWFudGl0eVxyXG5cdFx0XHRcdHByaWNlXHJcblx0XHRcdFx0cGhvdG8ge1xyXG5cdFx0XHRcdFx0aW1hZ2Uge1xyXG5cdFx0XHRcdFx0XHRwdWJsaWNVcmxUcmFuc2Zvcm1lZFxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuYDtcclxuXHJcbmNvbnN0IE9yZGVyVWwgPSBzdHlsZWQudWxgXHJcblx0ZGlzcGxheTogZ3JpZDtcclxuXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDM1MHB4LCAxZnIpKTtcclxuXHRnYXA6IDRyZW07XHJcbmA7XHJcblxyXG5mdW5jdGlvbiBjb3VudEl0ZW1zSW5PcmRlcihvcmRlcikge1xyXG5cdHJldHVybiBvcmRlci5pdGVtcy5yZWR1Y2UoKHRhbGx5LCBpdGVtKSA9PiB0YWxseSArIGl0ZW0ucXVhbnRpdHksIDApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBvcmRlcigpIHtcclxuXHRjb25zdCB7IGRhdGEsIGVycm9yLCBsb2FkaW5nIH0gPSB1c2VRdWVyeShVU0VSX09SREVSX1FVRVJZKTtcclxuXHRpZiAobG9hZGluZykgcmV0dXJuIDxwPkxvYWRpbmcuLi48L3A+O1xyXG5cdGlmIChlcnJvcikgcmV0dXJuIDxFcnJvck1lc3NhZ2UgZXJyb3I9e2Vycm9yfSAvPjtcclxuXHJcblx0Y29uc3QgeyBhbGxPcmRlcnMgfSA9IGRhdGE7XHJcblxyXG5cdGNvbnNvbGUubG9nKGFsbE9yZGVycyk7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2PlxyXG5cdFx0XHQ8SGVhZD5cclxuXHRcdFx0XHQ8dGl0bGU+U2ljayBGaXRzIHwgWW91ciBvcmRlcnMgPC90aXRsZT5cclxuXHRcdFx0PC9IZWFkPlxyXG5cclxuXHRcdFx0PGgyPllvdSBoYXZlIHthbGxPcmRlcnMubGVuZ3RofSBvcmRlcnM8L2gyPlxyXG5cdFx0XHQ8T3JkZXJVbD5cclxuXHRcdFx0XHR7YWxsT3JkZXJzLm1hcCgob3JkZXIpID0+IChcclxuXHRcdFx0XHRcdDxPcmRlckl0ZW1TdHlsZXMga2V5PXtvcmRlci5pZH0+XHJcblx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9e2Avb3JkZXIvJHtvcmRlci5pZH1gfT5cclxuXHRcdFx0XHRcdFx0XHQ8PlxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJvcmRlci1tZXRhXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxwPntjb3VudEl0ZW1zSW5PcmRlcihvcmRlcil9IGl0ZW1zPC9wPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8cD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7b3JkZXIuaXRlbXMubGVuZ3RofSBQcm9kdWN0XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0e29yZGVyLml0ZW1zLmxlbmd0aCA9PT0gMSA/IFwiXCIgOiBcInNcIn1cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9wPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8cD57Zm9ybWF0TW9uZXkob3JkZXIudG90YWwpfTwvcD5cclxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbWFnZXNcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0e29yZGVyLml0ZW1zLm1hcCgoaXRlbSkgPT4gKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxpbWdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGtleT17YGltYWdlLSR7aXRlbS5pZH1gfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3JjPXtpdGVtLnBob3RvPy5pbWFnZT8ucHVibGljVXJsVHJhbnNmb3JtZWR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhbHQ9e2l0ZW0ubmFtZX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQpKX1cclxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDwvPlxyXG5cdFx0XHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdFx0XHQ8L09yZGVySXRlbVN0eWxlcz5cclxuXHRcdFx0XHQpKX1cclxuXHRcdFx0PC9PcmRlclVsPlxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgb3JkZXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=