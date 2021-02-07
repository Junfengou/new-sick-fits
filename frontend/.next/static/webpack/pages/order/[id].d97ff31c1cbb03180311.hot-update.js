webpackHotUpdate_N_E("pages/order/[id]",{

/***/ "./pages/order/[id].js":
/*!*****************************!*\
  !*** ./pages/order/[id].js ***!
  \*****************************/
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
/* harmony import */ var _components_ErrorMessage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/ErrorMessage */ "./components/ErrorMessage.js");
/* harmony import */ var _components_styles_OrderStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/styles/OrderStyles */ "./components/styles/OrderStyles.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _lib_formatMoney__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../lib/formatMoney */ "./lib/formatMoney.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");



var _jsxFileName = "D:\\React\\Advanced-React\\Advanced-React\\sick-fits\\frontend\\pages\\order\\[id].js",
    _s = $RefreshSig$();

function _templateObject() {
  var data = Object(D_React_Advanced_React_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n\tquery SINGLE_ORDER_QUERY($id: ID!) {\n\t\torder: Order(where: { id: $id }) {\n\t\t\tid\n\t\t\tcharge\n\t\t\ttotal\n\t\t\tuser {\n\t\t\t\tid\n\t\t\t}\n\t\t\titems {\n\t\t\t\tid\n\t\t\t\tname\n\t\t\t\tdescription\n\t\t\t\tquantity\n\t\t\t\tprice\n\t\t\t\tphoto {\n\t\t\t\t\timage {\n\t\t\t\t\t\tpublicUrlTransformed\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}








var SINGLE_ORDER_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(_templateObject());

function SingleOrder(_ref) {
  _s();

  var _this = this;

  var query = _ref.query;

  var _useQuery = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_8__["useQuery"])(SINGLE_ORDER_QUERY, {
    variables: {
      id: query.id
    }
  }),
      data = _useQuery.data,
      error = _useQuery.error,
      loading = _useQuery.loading;

  if (loading) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
    children: "Loading..."
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 38,
    columnNumber: 22
  }, this);
  if (error) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_ErrorMessage__WEBPACK_IMPORTED_MODULE_4__["default"], {
    error: error
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 39,
    columnNumber: 20
  }, this);
  var order = data.order;
  console.log(order);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_styles_OrderStyles__WEBPACK_IMPORTED_MODULE_5__["default"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_6___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: ["Sick Fits - ", order.id]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        children: "Order ID:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 5
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        children: order.id
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        children: "Charge:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 5
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        children: order.charge
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        children: "Order Total:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 5
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        children: Object(_lib_formatMoney__WEBPACK_IMPORTED_MODULE_7__["default"])(order.total)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        children: "Order count:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 5
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        children: order.items.length
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "items",
      children: order.items.map(function (item) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "order-item",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: item.photo.image.publicUrlTransformed,
            alt: item.title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 7
          }, _this)
        }, item.id, false, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 6
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 4
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 45,
    columnNumber: 3
  }, this);
}

_s(SingleOrder, "eE+cqeCo2lkI//dPlCsO1rICVGU=", false, function () {
  return [_apollo_client__WEBPACK_IMPORTED_MODULE_8__["useQuery"]];
});

_c = SingleOrder;
/* harmony default export */ __webpack_exports__["default"] = (SingleOrder);

var _c;

$RefreshReg$(_c, "SingleOrder");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvb3JkZXIvLmpzIl0sIm5hbWVzIjpbIlNJTkdMRV9PUkRFUl9RVUVSWSIsImdxbCIsIlNpbmdsZU9yZGVyIiwicXVlcnkiLCJ1c2VRdWVyeSIsInZhcmlhYmxlcyIsImlkIiwiZGF0YSIsImVycm9yIiwibG9hZGluZyIsIm9yZGVyIiwiY29uc29sZSIsImxvZyIsImNoYXJnZSIsImZvcm1hdE1vbmV5IiwidG90YWwiLCJpdGVtcyIsImxlbmd0aCIsIm1hcCIsIml0ZW0iLCJwaG90byIsImltYWdlIiwicHVibGljVXJsVHJhbnNmb3JtZWQiLCJ0aXRsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsa0JBQWtCLEdBQUdDLGtEQUFILG1CQUF4Qjs7QUF5QkEsU0FBU0MsV0FBVCxPQUFnQztBQUFBOztBQUFBOztBQUFBLE1BQVRDLEtBQVMsUUFBVEEsS0FBUzs7QUFBQSxrQkFDRUMsK0RBQVEsQ0FBQ0osa0JBQUQsRUFBcUI7QUFDN0RLLGFBQVMsRUFBRTtBQUFFQyxRQUFFLEVBQUVILEtBQUssQ0FBQ0c7QUFBWjtBQURrRCxHQUFyQixDQURWO0FBQUEsTUFDdkJDLElBRHVCLGFBQ3ZCQSxJQUR1QjtBQUFBLE1BQ2pCQyxLQURpQixhQUNqQkEsS0FEaUI7QUFBQSxNQUNWQyxPQURVLGFBQ1ZBLE9BRFU7O0FBSS9CLE1BQUlBLE9BQUosRUFBYSxvQkFBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBQ2IsTUFBSUQsS0FBSixFQUFXLG9CQUFPLHFFQUFDLGdFQUFEO0FBQWMsU0FBSyxFQUFFQTtBQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFMb0IsTUFPdkJFLEtBUHVCLEdBT2JILElBUGEsQ0FPdkJHLEtBUHVCO0FBUS9CQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBWjtBQUVBLHNCQUNDLHFFQUFDLHNFQUFEO0FBQUEsNEJBQ0MscUVBQUMsZ0RBQUQ7QUFBQSw2QkFDQztBQUFBLG1DQUFvQkEsS0FBSyxDQUFDSixFQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREQsZUFJQztBQUFBLDhCQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREQsZUFFQztBQUFBLGtCQUFPSSxLQUFLLENBQUNKO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpELGVBU0M7QUFBQSw4QkFDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURELGVBRUM7QUFBQSxrQkFBT0ksS0FBSyxDQUFDRztBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFURCxlQWNDO0FBQUEsOEJBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERCxlQUVDO0FBQUEsa0JBQU9DLGdFQUFXLENBQUNKLEtBQUssQ0FBQ0ssS0FBUDtBQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBZEQsZUFtQkM7QUFBQSw4QkFDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURELGVBRUM7QUFBQSxrQkFBT0wsS0FBSyxDQUFDTSxLQUFOLENBQVlDO0FBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFuQkQsZUF3QkM7QUFBSyxlQUFTLEVBQUMsT0FBZjtBQUFBLGdCQUNFUCxLQUFLLENBQUNNLEtBQU4sQ0FBWUUsR0FBWixDQUFnQixVQUFDQyxJQUFEO0FBQUEsNEJBQ2hCO0FBQUssbUJBQVMsRUFBQyxZQUFmO0FBQUEsaUNBQ0M7QUFBSyxlQUFHLEVBQUVBLElBQUksQ0FBQ0MsS0FBTCxDQUFXQyxLQUFYLENBQWlCQyxvQkFBM0I7QUFBaUQsZUFBRyxFQUFFSCxJQUFJLENBQUNJO0FBQTNEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERCxXQUFpQ0osSUFBSSxDQUFDYixFQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURnQjtBQUFBLE9BQWhCO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXhCRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERDtBQWtDQTs7R0E1Q1FKLFc7VUFDeUJFLHVEOzs7S0FEekJGLFc7QUE4Q01BLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL29yZGVyL1tpZF0uZDk3ZmYzMWMxY2JiMDMxODAzMTEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGdxbCBmcm9tIFwiZ3JhcGhxbC10YWdcIjtcclxuaW1wb3J0IEVycm9yTWVzc2FnZSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9FcnJvck1lc3NhZ2VcIjtcclxuaW1wb3J0IE9yZGVyU3R5bGVzIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3N0eWxlcy9PcmRlclN0eWxlc1wiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBmb3JtYXRNb25leSBmcm9tIFwiLi4vLi4vbGliL2Zvcm1hdE1vbmV5XCI7XHJcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XHJcblxyXG5jb25zdCBTSU5HTEVfT1JERVJfUVVFUlkgPSBncWxgXHJcblx0cXVlcnkgU0lOR0xFX09SREVSX1FVRVJZKCRpZDogSUQhKSB7XHJcblx0XHRvcmRlcjogT3JkZXIod2hlcmU6IHsgaWQ6ICRpZCB9KSB7XHJcblx0XHRcdGlkXHJcblx0XHRcdGNoYXJnZVxyXG5cdFx0XHR0b3RhbFxyXG5cdFx0XHR1c2VyIHtcclxuXHRcdFx0XHRpZFxyXG5cdFx0XHR9XHJcblx0XHRcdGl0ZW1zIHtcclxuXHRcdFx0XHRpZFxyXG5cdFx0XHRcdG5hbWVcclxuXHRcdFx0XHRkZXNjcmlwdGlvblxyXG5cdFx0XHRcdHF1YW50aXR5XHJcblx0XHRcdFx0cHJpY2VcclxuXHRcdFx0XHRwaG90byB7XHJcblx0XHRcdFx0XHRpbWFnZSB7XHJcblx0XHRcdFx0XHRcdHB1YmxpY1VybFRyYW5zZm9ybWVkXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5gO1xyXG5cclxuZnVuY3Rpb24gU2luZ2xlT3JkZXIoeyBxdWVyeSB9KSB7XHJcblx0Y29uc3QgeyBkYXRhLCBlcnJvciwgbG9hZGluZyB9ID0gdXNlUXVlcnkoU0lOR0xFX09SREVSX1FVRVJZLCB7XHJcblx0XHR2YXJpYWJsZXM6IHsgaWQ6IHF1ZXJ5LmlkIH0sXHJcblx0fSk7XHJcblx0aWYgKGxvYWRpbmcpIHJldHVybiA8cD5Mb2FkaW5nLi4uPC9wPjtcclxuXHRpZiAoZXJyb3IpIHJldHVybiA8RXJyb3JNZXNzYWdlIGVycm9yPXtlcnJvcn0gLz47XHJcblxyXG5cdGNvbnN0IHsgb3JkZXIgfSA9IGRhdGE7XHJcblx0Y29uc29sZS5sb2cob3JkZXIpO1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PE9yZGVyU3R5bGVzPlxyXG5cdFx0XHQ8SGVhZD5cclxuXHRcdFx0XHQ8dGl0bGU+U2ljayBGaXRzIC0ge29yZGVyLmlkfTwvdGl0bGU+XHJcblx0XHRcdDwvSGVhZD5cclxuXHRcdFx0PHA+XHJcblx0XHRcdFx0PHNwYW4+T3JkZXIgSUQ6PC9zcGFuPlxyXG5cdFx0XHRcdDxzcGFuPntvcmRlci5pZH08L3NwYW4+XHJcblx0XHRcdDwvcD5cclxuXHJcblx0XHRcdDxwPlxyXG5cdFx0XHRcdDxzcGFuPkNoYXJnZTo8L3NwYW4+XHJcblx0XHRcdFx0PHNwYW4+e29yZGVyLmNoYXJnZX08L3NwYW4+XHJcblx0XHRcdDwvcD5cclxuXHJcblx0XHRcdDxwPlxyXG5cdFx0XHRcdDxzcGFuPk9yZGVyIFRvdGFsOjwvc3Bhbj5cclxuXHRcdFx0XHQ8c3Bhbj57Zm9ybWF0TW9uZXkob3JkZXIudG90YWwpfTwvc3Bhbj5cclxuXHRcdFx0PC9wPlxyXG5cclxuXHRcdFx0PHA+XHJcblx0XHRcdFx0PHNwYW4+T3JkZXIgY291bnQ6PC9zcGFuPlxyXG5cdFx0XHRcdDxzcGFuPntvcmRlci5pdGVtcy5sZW5ndGh9PC9zcGFuPlxyXG5cdFx0XHQ8L3A+XHJcblxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIml0ZW1zXCI+XHJcblx0XHRcdFx0e29yZGVyLml0ZW1zLm1hcCgoaXRlbSkgPT4gKFxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJvcmRlci1pdGVtXCIga2V5PXtpdGVtLmlkfT5cclxuXHRcdFx0XHRcdFx0PGltZyBzcmM9e2l0ZW0ucGhvdG8uaW1hZ2UucHVibGljVXJsVHJhbnNmb3JtZWR9IGFsdD17aXRlbS50aXRsZX0gLz5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdCkpfVxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvT3JkZXJTdHlsZXM+XHJcblx0KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2luZ2xlT3JkZXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=