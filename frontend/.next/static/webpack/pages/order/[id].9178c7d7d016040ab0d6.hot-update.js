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
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: item.photo.image.publicUrlTransformed,
            alt: item.title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "item-details",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
              children: item.name
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 74,
              columnNumber: 8
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: ["Qty: ", item.quantity]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 75,
              columnNumber: 8
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: ["Each: ", Object(_lib_formatMoney__WEBPACK_IMPORTED_MODULE_7__["default"])(item.price)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 76,
              columnNumber: 8
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: ["Sub total: ", Object(_lib_formatMoney__WEBPACK_IMPORTED_MODULE_7__["default"])(item.price * item.quantity)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 77,
              columnNumber: 8
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: item.description
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 78,
              columnNumber: 8
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 7
          }, _this)]
        }, item.id, true, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvb3JkZXIvLmpzIl0sIm5hbWVzIjpbIlNJTkdMRV9PUkRFUl9RVUVSWSIsImdxbCIsIlNpbmdsZU9yZGVyIiwicXVlcnkiLCJ1c2VRdWVyeSIsInZhcmlhYmxlcyIsImlkIiwiZGF0YSIsImVycm9yIiwibG9hZGluZyIsIm9yZGVyIiwiY29uc29sZSIsImxvZyIsImNoYXJnZSIsImZvcm1hdE1vbmV5IiwidG90YWwiLCJpdGVtcyIsImxlbmd0aCIsIm1hcCIsIml0ZW0iLCJwaG90byIsImltYWdlIiwicHVibGljVXJsVHJhbnNmb3JtZWQiLCJ0aXRsZSIsIm5hbWUiLCJxdWFudGl0eSIsInByaWNlIiwiZGVzY3JpcHRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLGtCQUFrQixHQUFHQyxrREFBSCxtQkFBeEI7O0FBeUJBLFNBQVNDLFdBQVQsT0FBZ0M7QUFBQTs7QUFBQTs7QUFBQSxNQUFUQyxLQUFTLFFBQVRBLEtBQVM7O0FBQUEsa0JBQ0VDLCtEQUFRLENBQUNKLGtCQUFELEVBQXFCO0FBQzdESyxhQUFTLEVBQUU7QUFBRUMsUUFBRSxFQUFFSCxLQUFLLENBQUNHO0FBQVo7QUFEa0QsR0FBckIsQ0FEVjtBQUFBLE1BQ3ZCQyxJQUR1QixhQUN2QkEsSUFEdUI7QUFBQSxNQUNqQkMsS0FEaUIsYUFDakJBLEtBRGlCO0FBQUEsTUFDVkMsT0FEVSxhQUNWQSxPQURVOztBQUkvQixNQUFJQSxPQUFKLEVBQWEsb0JBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUNiLE1BQUlELEtBQUosRUFBVyxvQkFBTyxxRUFBQyxnRUFBRDtBQUFjLFNBQUssRUFBRUE7QUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBTG9CLE1BT3ZCRSxLQVB1QixHQU9iSCxJQVBhLENBT3ZCRyxLQVB1QjtBQVEvQkMsU0FBTyxDQUFDQyxHQUFSLENBQVlGLEtBQVo7QUFFQSxzQkFDQyxxRUFBQyxzRUFBRDtBQUFBLDRCQUNDLHFFQUFDLGdEQUFEO0FBQUEsNkJBQ0M7QUFBQSxtQ0FBb0JBLEtBQUssQ0FBQ0osRUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURELGVBSUM7QUFBQSw4QkFDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURELGVBRUM7QUFBQSxrQkFBT0ksS0FBSyxDQUFDSjtBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKRCxlQVNDO0FBQUEsOEJBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERCxlQUVDO0FBQUEsa0JBQU9JLEtBQUssQ0FBQ0c7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBVEQsZUFjQztBQUFBLDhCQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREQsZUFFQztBQUFBLGtCQUFPQyxnRUFBVyxDQUFDSixLQUFLLENBQUNLLEtBQVA7QUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWRELGVBbUJDO0FBQUEsOEJBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERCxlQUVDO0FBQUEsa0JBQU9MLEtBQUssQ0FBQ00sS0FBTixDQUFZQztBQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBbkJELGVBd0JDO0FBQUssZUFBUyxFQUFDLE9BQWY7QUFBQSxnQkFDRVAsS0FBSyxDQUFDTSxLQUFOLENBQVlFLEdBQVosQ0FBZ0IsVUFBQ0MsSUFBRDtBQUFBLDRCQUNoQjtBQUFLLG1CQUFTLEVBQUMsWUFBZjtBQUFBLGtDQUNDO0FBQUssZUFBRyxFQUFFQSxJQUFJLENBQUNDLEtBQUwsQ0FBV0MsS0FBWCxDQUFpQkMsb0JBQTNCO0FBQWlELGVBQUcsRUFBRUgsSUFBSSxDQUFDSTtBQUEzRDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURELGVBRUM7QUFBSyxxQkFBUyxFQUFDLGNBQWY7QUFBQSxvQ0FDQztBQUFBLHdCQUFLSixJQUFJLENBQUNLO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERCxlQUVDO0FBQUEsa0NBQVNMLElBQUksQ0FBQ00sUUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkQsZUFHQztBQUFBLG1DQUFVWCxnRUFBVyxDQUFDSyxJQUFJLENBQUNPLEtBQU4sQ0FBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUhELGVBSUM7QUFBQSx3Q0FBZVosZ0VBQVcsQ0FBQ0ssSUFBSSxDQUFDTyxLQUFMLEdBQWFQLElBQUksQ0FBQ00sUUFBbkIsQ0FBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUpELGVBS0M7QUFBQSx3QkFBSU4sSUFBSSxDQUFDUTtBQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBTEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZEO0FBQUEsV0FBaUNSLElBQUksQ0FBQ2IsRUFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEZ0I7QUFBQSxPQUFoQjtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF4QkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREQ7QUF5Q0E7O0dBbkRRSixXO1VBQ3lCRSx1RDs7O0tBRHpCRixXO0FBcURNQSwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9vcmRlci9baWRdLjkxNzhjN2Q3ZDAxNjA0MGFiMGQ2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBncWwgZnJvbSBcImdyYXBocWwtdGFnXCI7XHJcbmltcG9ydCBFcnJvck1lc3NhZ2UgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvRXJyb3JNZXNzYWdlXCI7XHJcbmltcG9ydCBPcmRlclN0eWxlcyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9zdHlsZXMvT3JkZXJTdHlsZXNcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgZm9ybWF0TW9uZXkgZnJvbSBcIi4uLy4uL2xpYi9mb3JtYXRNb25leVwiO1xyXG5pbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xyXG5cclxuY29uc3QgU0lOR0xFX09SREVSX1FVRVJZID0gZ3FsYFxyXG5cdHF1ZXJ5IFNJTkdMRV9PUkRFUl9RVUVSWSgkaWQ6IElEISkge1xyXG5cdFx0b3JkZXI6IE9yZGVyKHdoZXJlOiB7IGlkOiAkaWQgfSkge1xyXG5cdFx0XHRpZFxyXG5cdFx0XHRjaGFyZ2VcclxuXHRcdFx0dG90YWxcclxuXHRcdFx0dXNlciB7XHJcblx0XHRcdFx0aWRcclxuXHRcdFx0fVxyXG5cdFx0XHRpdGVtcyB7XHJcblx0XHRcdFx0aWRcclxuXHRcdFx0XHRuYW1lXHJcblx0XHRcdFx0ZGVzY3JpcHRpb25cclxuXHRcdFx0XHRxdWFudGl0eVxyXG5cdFx0XHRcdHByaWNlXHJcblx0XHRcdFx0cGhvdG8ge1xyXG5cdFx0XHRcdFx0aW1hZ2Uge1xyXG5cdFx0XHRcdFx0XHRwdWJsaWNVcmxUcmFuc2Zvcm1lZFxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuYDtcclxuXHJcbmZ1bmN0aW9uIFNpbmdsZU9yZGVyKHsgcXVlcnkgfSkge1xyXG5cdGNvbnN0IHsgZGF0YSwgZXJyb3IsIGxvYWRpbmcgfSA9IHVzZVF1ZXJ5KFNJTkdMRV9PUkRFUl9RVUVSWSwge1xyXG5cdFx0dmFyaWFibGVzOiB7IGlkOiBxdWVyeS5pZCB9LFxyXG5cdH0pO1xyXG5cdGlmIChsb2FkaW5nKSByZXR1cm4gPHA+TG9hZGluZy4uLjwvcD47XHJcblx0aWYgKGVycm9yKSByZXR1cm4gPEVycm9yTWVzc2FnZSBlcnJvcj17ZXJyb3J9IC8+O1xyXG5cclxuXHRjb25zdCB7IG9yZGVyIH0gPSBkYXRhO1xyXG5cdGNvbnNvbGUubG9nKG9yZGVyKTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxPcmRlclN0eWxlcz5cclxuXHRcdFx0PEhlYWQ+XHJcblx0XHRcdFx0PHRpdGxlPlNpY2sgRml0cyAtIHtvcmRlci5pZH08L3RpdGxlPlxyXG5cdFx0XHQ8L0hlYWQ+XHJcblx0XHRcdDxwPlxyXG5cdFx0XHRcdDxzcGFuPk9yZGVyIElEOjwvc3Bhbj5cclxuXHRcdFx0XHQ8c3Bhbj57b3JkZXIuaWR9PC9zcGFuPlxyXG5cdFx0XHQ8L3A+XHJcblxyXG5cdFx0XHQ8cD5cclxuXHRcdFx0XHQ8c3Bhbj5DaGFyZ2U6PC9zcGFuPlxyXG5cdFx0XHRcdDxzcGFuPntvcmRlci5jaGFyZ2V9PC9zcGFuPlxyXG5cdFx0XHQ8L3A+XHJcblxyXG5cdFx0XHQ8cD5cclxuXHRcdFx0XHQ8c3Bhbj5PcmRlciBUb3RhbDo8L3NwYW4+XHJcblx0XHRcdFx0PHNwYW4+e2Zvcm1hdE1vbmV5KG9yZGVyLnRvdGFsKX08L3NwYW4+XHJcblx0XHRcdDwvcD5cclxuXHJcblx0XHRcdDxwPlxyXG5cdFx0XHRcdDxzcGFuPk9yZGVyIGNvdW50Ojwvc3Bhbj5cclxuXHRcdFx0XHQ8c3Bhbj57b3JkZXIuaXRlbXMubGVuZ3RofTwvc3Bhbj5cclxuXHRcdFx0PC9wPlxyXG5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpdGVtc1wiPlxyXG5cdFx0XHRcdHtvcmRlci5pdGVtcy5tYXAoKGl0ZW0pID0+IChcclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwib3JkZXItaXRlbVwiIGtleT17aXRlbS5pZH0+XHJcblx0XHRcdFx0XHRcdDxpbWcgc3JjPXtpdGVtLnBob3RvLmltYWdlLnB1YmxpY1VybFRyYW5zZm9ybWVkfSBhbHQ9e2l0ZW0udGl0bGV9IC8+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaXRlbS1kZXRhaWxzXCI+XHJcblx0XHRcdFx0XHRcdFx0PGgyPntpdGVtLm5hbWV9PC9oMj5cclxuXHRcdFx0XHRcdFx0XHQ8cD5RdHk6IHtpdGVtLnF1YW50aXR5fTwvcD5cclxuXHRcdFx0XHRcdFx0XHQ8cD5FYWNoOiB7Zm9ybWF0TW9uZXkoaXRlbS5wcmljZSl9PC9wPlxyXG5cdFx0XHRcdFx0XHRcdDxwPlN1YiB0b3RhbDoge2Zvcm1hdE1vbmV5KGl0ZW0ucHJpY2UgKiBpdGVtLnF1YW50aXR5KX08L3A+XHJcblx0XHRcdFx0XHRcdFx0PHA+e2l0ZW0uZGVzY3JpcHRpb259PC9wPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdCkpfVxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvT3JkZXJTdHlsZXM+XHJcblx0KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2luZ2xlT3JkZXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=