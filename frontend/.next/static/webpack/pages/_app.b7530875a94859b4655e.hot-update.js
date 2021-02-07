webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/Cart.js":
/*!****************************!*\
  !*** ./components/Cart.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_CartStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/CartStyles */ "./components/styles/CartStyles.js");
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./User */ "./components/User.js");
/* harmony import */ var _styles_Supreme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/Supreme */ "./components/styles/Supreme.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _lib_formatMoney__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/formatMoney */ "./lib/formatMoney.js");
/* harmony import */ var _lib_calcTotalPrice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lib/calcTotalPrice */ "./lib/calcTotalPrice.js");
/* harmony import */ var _styles_CloseButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styles/CloseButton */ "./components/styles/CloseButton.js");
/* harmony import */ var _lib_CartState__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../lib/CartState */ "./lib/CartState.js");
/* harmony import */ var _RemoveFromCart__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./RemoveFromCart */ "./components/RemoveFromCart.js");


var _jsxFileName = "D:\\React\\Advanced-React\\Advanced-React\\sick-fits\\frontend\\components\\Cart.js",
    _this = undefined,
    _s = $RefreshSig$();










 // CartStyles => video: #44

var CartItemStyles = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].li.withConfig({
  displayName: "Cart__CartItemStyles",
  componentId: "sc-19s6z00-0"
})(["padding:1rem 0;border-bottom:1px solid var(--lightGrey);display:grid;grid-template-columns:auto 1fr auto;img{margin-right:1rem;}h3,p{margin:0;}"]);
_c = CartItemStyles;

var CartItem = function CartItem(item) {
  var _item$item = item.item,
      id = _item$item.id,
      product = _item$item.product,
      name = _item$item.name,
      quantity = _item$item.quantity;
  if (!product) return null;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(CartItemStyles, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
      width: "100",
      src: product.photo.image.publicUrlTransformed,
      alt: name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
      children: product.name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: Object(_lib_formatMoney__WEBPACK_IMPORTED_MODULE_6__["default"])(product.price * quantity)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: ["Quantity: ", quantity, " - ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("em", {
        children: Object(_lib_formatMoney__WEBPACK_IMPORTED_MODULE_6__["default"])(product.price)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 28
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_RemoveFromCart__WEBPACK_IMPORTED_MODULE_10__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 4
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 3
  }, _this);
};

_c2 = CartItem;

function Cart() {
  _s();

  var _this2 = this;

  // Just a query for current logged in user
  var me = Object(_User__WEBPACK_IMPORTED_MODULE_3__["default"])(); // Context API

  var _useCart = Object(_lib_CartState__WEBPACK_IMPORTED_MODULE_9__["useCart"])(),
      cartOpen = _useCart.cartOpen,
      toggleCart = _useCart.toggleCart;

  if (!me) return null;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_CartStyles__WEBPACK_IMPORTED_MODULE_2__["default"], {
    open: cartOpen,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("header", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_Supreme__WEBPACK_IMPORTED_MODULE_4__["default"], {
        children: me.name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 5
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_CloseButton__WEBPACK_IMPORTED_MODULE_8__["default"], {
        onClick: toggleCart,
        children: "\xD7"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
      children: me.cart.map(function (item, i) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(CartItem, {
          item: item
        }, i, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 6
        }, _this2);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("footer", {
      children: ["Total: ", Object(_lib_formatMoney__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_lib_calcTotalPrice__WEBPACK_IMPORTED_MODULE_7__["default"])(me.cart))]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 4
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 58,
    columnNumber: 3
  }, this);
}

_s(Cart, "J62gRyoFdWQL/HA2aCoMywSP4Gc=", false, function () {
  return [_User__WEBPACK_IMPORTED_MODULE_3__["default"], _lib_CartState__WEBPACK_IMPORTED_MODULE_9__["useCart"]];
});

_c3 = Cart;
/* harmony default export */ __webpack_exports__["default"] = (Cart);

var _c, _c2, _c3;

$RefreshReg$(_c, "CartItemStyles");
$RefreshReg$(_c2, "CartItem");
$RefreshReg$(_c3, "Cart");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXJ0LmpzIl0sIm5hbWVzIjpbIkNhcnRJdGVtU3R5bGVzIiwic3R5bGVkIiwibGkiLCJDYXJ0SXRlbSIsIml0ZW0iLCJpZCIsInByb2R1Y3QiLCJuYW1lIiwicXVhbnRpdHkiLCJwaG90byIsImltYWdlIiwicHVibGljVXJsVHJhbnNmb3JtZWQiLCJmb3JtYXRNb25leSIsInByaWNlIiwiQ2FydCIsIm1lIiwidXNlVXNlciIsInVzZUNhcnQiLCJjYXJ0T3BlbiIsInRvZ2dsZUNhcnQiLCJjYXJ0IiwibWFwIiwiaSIsImNhbGNUb3RhbFByaWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FHQTs7QUFFQSxJQUFNQSxjQUFjLEdBQUdDLHlEQUFNLENBQUNDLEVBQVY7QUFBQTtBQUFBO0FBQUEsdUpBQXBCO0tBQU1GLGM7O0FBZU4sSUFBTUcsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsSUFBRCxFQUFVO0FBQUEsbUJBQ2NBLElBQUksQ0FBQ0EsSUFEbkI7QUFBQSxNQUNsQkMsRUFEa0IsY0FDbEJBLEVBRGtCO0FBQUEsTUFDZEMsT0FEYyxjQUNkQSxPQURjO0FBQUEsTUFDTEMsSUFESyxjQUNMQSxJQURLO0FBQUEsTUFDQ0MsUUFERCxjQUNDQSxRQUREO0FBRTFCLE1BQUksQ0FBQ0YsT0FBTCxFQUFjLE9BQU8sSUFBUDtBQUNkLHNCQUNDLHFFQUFDLGNBQUQ7QUFBQSw0QkFDQztBQUNDLFdBQUssRUFBQyxLQURQO0FBRUMsU0FBRyxFQUFFQSxPQUFPLENBQUNHLEtBQVIsQ0FBY0MsS0FBZCxDQUFvQkMsb0JBRjFCO0FBR0MsU0FBRyxFQUFFSjtBQUhOO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERCxlQU1DO0FBQUEsZ0JBQUtELE9BQU8sQ0FBQ0M7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTkQsZUFPQztBQUFBLGdCQUFJSyxnRUFBVyxDQUFDTixPQUFPLENBQUNPLEtBQVIsR0FBZ0JMLFFBQWpCO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVBELGVBUUM7QUFBQSwrQkFDWUEsUUFEWixzQkFDd0I7QUFBQSxrQkFBS0ksZ0VBQVcsQ0FBQ04sT0FBTyxDQUFDTyxLQUFUO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEeEIsZUFFQyxxRUFBQyx3REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBUkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREQ7QUFlQSxDQWxCRDs7TUFBTVYsUTs7QUFvQk4sU0FBU1csSUFBVCxHQUFnQjtBQUFBOztBQUFBOztBQUNmO0FBQ0EsTUFBTUMsRUFBRSxHQUFHQyxxREFBTyxFQUFsQixDQUZlLENBSWY7O0FBSmUsaUJBS2tCQyw4REFBTyxFQUx6QjtBQUFBLE1BS1BDLFFBTE8sWUFLUEEsUUFMTztBQUFBLE1BS0dDLFVBTEgsWUFLR0EsVUFMSDs7QUFPZixNQUFJLENBQUNKLEVBQUwsRUFBUyxPQUFPLElBQVA7QUFDVCxzQkFDQyxxRUFBQywwREFBRDtBQUFZLFFBQUksRUFBRUcsUUFBbEI7QUFBQSw0QkFDQztBQUFBLDhCQUNDLHFFQUFDLHVEQUFEO0FBQUEsa0JBQVVILEVBQUUsQ0FBQ1I7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREQsZUFFQyxxRUFBQywyREFBRDtBQUFhLGVBQU8sRUFBRVksVUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERCxlQUtDO0FBQUEsZ0JBQ0VKLEVBQUUsQ0FBQ0ssSUFBSCxDQUFRQyxHQUFSLENBQVksVUFBQ2pCLElBQUQsRUFBT2tCLENBQVA7QUFBQSw0QkFDWixxRUFBQyxRQUFEO0FBQWtCLGNBQUksRUFBRWxCO0FBQXhCLFdBQWVrQixDQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRFk7QUFBQSxPQUFaO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxELGVBVUM7QUFBQSw0QkFBZ0JWLGdFQUFXLENBQUNXLG1FQUFjLENBQUNSLEVBQUUsQ0FBQ0ssSUFBSixDQUFmLENBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUREO0FBY0E7O0dBdEJRTixJO1VBRUdFLDZDLEVBR3NCQyxzRDs7O01BTHpCSCxJO0FBd0JNQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmI3NTMwODc1YTk0ODU5YjQ2NTVlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBDYXJ0U3R5bGVzIGZyb20gXCIuL3N0eWxlcy9DYXJ0U3R5bGVzXCI7XHJcbmltcG9ydCB1c2VVc2VyIGZyb20gXCIuL1VzZXJcIjtcclxuaW1wb3J0IFN1cHJlbWUgZnJvbSBcIi4vc3R5bGVzL1N1cHJlbWVcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IGZvcm1hdE1vbmV5IGZyb20gXCIuLi9saWIvZm9ybWF0TW9uZXlcIjtcclxuaW1wb3J0IGNhbGNUb3RhbFByaWNlIGZyb20gXCIuLi9saWIvY2FsY1RvdGFsUHJpY2VcIjtcclxuaW1wb3J0IENsb3NlQnV0dG9uIGZyb20gXCIuL3N0eWxlcy9DbG9zZUJ1dHRvblwiO1xyXG5pbXBvcnQgeyB1c2VDYXJ0IH0gZnJvbSBcIi4uL2xpYi9DYXJ0U3RhdGVcIjtcclxuaW1wb3J0IFJlbW92ZUZyb21DYXJ0IGZyb20gXCIuL1JlbW92ZUZyb21DYXJ0XCI7XHJcblxyXG4vLyBDYXJ0U3R5bGVzID0+IHZpZGVvOiAjNDRcclxuXHJcbmNvbnN0IENhcnRJdGVtU3R5bGVzID0gc3R5bGVkLmxpYFxyXG5cdHBhZGRpbmc6IDFyZW0gMDtcclxuXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tbGlnaHRHcmV5KTtcclxuXHRkaXNwbGF5OiBncmlkO1xyXG5cdGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnIgYXV0bztcclxuXHRpbWcge1xyXG5cdFx0bWFyZ2luLXJpZ2h0OiAxcmVtO1xyXG5cdH1cclxuXHJcblx0aDMsXHJcblx0cCB7XHJcblx0XHRtYXJnaW46IDA7XHJcblx0fVxyXG5gO1xyXG5cclxuY29uc3QgQ2FydEl0ZW0gPSAoaXRlbSkgPT4ge1xyXG5cdGNvbnN0IHsgaWQsIHByb2R1Y3QsIG5hbWUsIHF1YW50aXR5IH0gPSBpdGVtLml0ZW07XHJcblx0aWYgKCFwcm9kdWN0KSByZXR1cm4gbnVsbDtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PENhcnRJdGVtU3R5bGVzPlxyXG5cdFx0XHQ8aW1nXHJcblx0XHRcdFx0d2lkdGg9XCIxMDBcIlxyXG5cdFx0XHRcdHNyYz17cHJvZHVjdC5waG90by5pbWFnZS5wdWJsaWNVcmxUcmFuc2Zvcm1lZH1cclxuXHRcdFx0XHRhbHQ9e25hbWV9XHJcblx0XHRcdC8+XHJcblx0XHRcdDxoMz57cHJvZHVjdC5uYW1lfTwvaDM+XHJcblx0XHRcdDxwPntmb3JtYXRNb25leShwcm9kdWN0LnByaWNlICogcXVhbnRpdHkpfTwvcD5cclxuXHRcdFx0PHA+XHJcblx0XHRcdFx0UXVhbnRpdHk6IHtxdWFudGl0eX0gLSA8ZW0+e2Zvcm1hdE1vbmV5KHByb2R1Y3QucHJpY2UpfTwvZW0+XHJcblx0XHRcdFx0PFJlbW92ZUZyb21DYXJ0IC8+XHJcblx0XHRcdDwvcD5cclxuXHRcdDwvQ2FydEl0ZW1TdHlsZXM+XHJcblx0KTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIENhcnQoKSB7XHJcblx0Ly8gSnVzdCBhIHF1ZXJ5IGZvciBjdXJyZW50IGxvZ2dlZCBpbiB1c2VyXHJcblx0Y29uc3QgbWUgPSB1c2VVc2VyKCk7XHJcblxyXG5cdC8vIENvbnRleHQgQVBJXHJcblx0Y29uc3QgeyBjYXJ0T3BlbiwgdG9nZ2xlQ2FydCB9ID0gdXNlQ2FydCgpO1xyXG5cclxuXHRpZiAoIW1lKSByZXR1cm4gbnVsbDtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PENhcnRTdHlsZXMgb3Blbj17Y2FydE9wZW59PlxyXG5cdFx0XHQ8aGVhZGVyPlxyXG5cdFx0XHRcdDxTdXByZW1lPnttZS5uYW1lfTwvU3VwcmVtZT5cclxuXHRcdFx0XHQ8Q2xvc2VCdXR0b24gb25DbGljaz17dG9nZ2xlQ2FydH0+JnRpbWVzOzwvQ2xvc2VCdXR0b24+XHJcblx0XHRcdDwvaGVhZGVyPlxyXG5cdFx0XHQ8dWw+XHJcblx0XHRcdFx0e21lLmNhcnQubWFwKChpdGVtLCBpKSA9PiAoXHJcblx0XHRcdFx0XHQ8Q2FydEl0ZW0ga2V5PXtpfSBpdGVtPXtpdGVtfSAvPlxyXG5cdFx0XHRcdCkpfVxyXG5cdFx0XHQ8L3VsPlxyXG5cdFx0XHQ8Zm9vdGVyPlRvdGFsOiB7Zm9ybWF0TW9uZXkoY2FsY1RvdGFsUHJpY2UobWUuY2FydCkpfTwvZm9vdGVyPlxyXG5cdFx0PC9DYXJ0U3R5bGVzPlxyXG5cdCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcnQ7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=