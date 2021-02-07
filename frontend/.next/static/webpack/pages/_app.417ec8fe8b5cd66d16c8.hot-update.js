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
        children: [Object(_lib_formatMoney__WEBPACK_IMPORTED_MODULE_6__["default"])(product.price), " "]
      }, void 0, true, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXJ0LmpzIl0sIm5hbWVzIjpbIkNhcnRJdGVtU3R5bGVzIiwic3R5bGVkIiwibGkiLCJDYXJ0SXRlbSIsIml0ZW0iLCJpZCIsInByb2R1Y3QiLCJuYW1lIiwicXVhbnRpdHkiLCJwaG90byIsImltYWdlIiwicHVibGljVXJsVHJhbnNmb3JtZWQiLCJmb3JtYXRNb25leSIsInByaWNlIiwiQ2FydCIsIm1lIiwidXNlVXNlciIsInVzZUNhcnQiLCJjYXJ0T3BlbiIsInRvZ2dsZUNhcnQiLCJjYXJ0IiwibWFwIiwiaSIsImNhbGNUb3RhbFByaWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FHQTs7QUFFQSxJQUFNQSxjQUFjLEdBQUdDLHlEQUFNLENBQUNDLEVBQVY7QUFBQTtBQUFBO0FBQUEsdUpBQXBCO0tBQU1GLGM7O0FBZU4sSUFBTUcsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsSUFBRCxFQUFVO0FBQUEsbUJBQ2NBLElBQUksQ0FBQ0EsSUFEbkI7QUFBQSxNQUNsQkMsRUFEa0IsY0FDbEJBLEVBRGtCO0FBQUEsTUFDZEMsT0FEYyxjQUNkQSxPQURjO0FBQUEsTUFDTEMsSUFESyxjQUNMQSxJQURLO0FBQUEsTUFDQ0MsUUFERCxjQUNDQSxRQUREO0FBRTFCLE1BQUksQ0FBQ0YsT0FBTCxFQUFjLE9BQU8sSUFBUDtBQUNkLHNCQUNDLHFFQUFDLGNBQUQ7QUFBQSw0QkFDQztBQUNDLFdBQUssRUFBQyxLQURQO0FBRUMsU0FBRyxFQUFFQSxPQUFPLENBQUNHLEtBQVIsQ0FBY0MsS0FBZCxDQUFvQkMsb0JBRjFCO0FBR0MsU0FBRyxFQUFFSjtBQUhOO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERCxlQU1DO0FBQUEsZ0JBQUtELE9BQU8sQ0FBQ0M7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTkQsZUFPQztBQUFBLGdCQUFJSyxnRUFBVyxDQUFDTixPQUFPLENBQUNPLEtBQVIsR0FBZ0JMLFFBQWpCO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVBELGVBUUM7QUFBQSwrQkFDWUEsUUFEWixzQkFDd0I7QUFBQSxtQkFBS0ksZ0VBQVcsQ0FBQ04sT0FBTyxDQUFDTyxLQUFULENBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUR4QixlQUVDLHFFQUFDLHdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFSRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERDtBQWVBLENBbEJEOztNQUFNVixROztBQW9CTixTQUFTVyxJQUFULEdBQWdCO0FBQUE7O0FBQUE7O0FBQ2Y7QUFDQSxNQUFNQyxFQUFFLEdBQUdDLHFEQUFPLEVBQWxCLENBRmUsQ0FJZjs7QUFKZSxpQkFLa0JDLDhEQUFPLEVBTHpCO0FBQUEsTUFLUEMsUUFMTyxZQUtQQSxRQUxPO0FBQUEsTUFLR0MsVUFMSCxZQUtHQSxVQUxIOztBQU9mLE1BQUksQ0FBQ0osRUFBTCxFQUFTLE9BQU8sSUFBUDtBQUNULHNCQUNDLHFFQUFDLDBEQUFEO0FBQVksUUFBSSxFQUFFRyxRQUFsQjtBQUFBLDRCQUNDO0FBQUEsOEJBQ0MscUVBQUMsdURBQUQ7QUFBQSxrQkFBVUgsRUFBRSxDQUFDUjtBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERCxlQUVDLHFFQUFDLDJEQUFEO0FBQWEsZUFBTyxFQUFFWSxVQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURELGVBS0M7QUFBQSxnQkFDRUosRUFBRSxDQUFDSyxJQUFILENBQVFDLEdBQVIsQ0FBWSxVQUFDakIsSUFBRCxFQUFPa0IsQ0FBUDtBQUFBLDRCQUNaLHFFQUFDLFFBQUQ7QUFBa0IsY0FBSSxFQUFFbEI7QUFBeEIsV0FBZWtCLENBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFEWTtBQUFBLE9BQVo7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEQsZUFVQztBQUFBLDRCQUFnQlYsZ0VBQVcsQ0FBQ1csbUVBQWMsQ0FBQ1IsRUFBRSxDQUFDSyxJQUFKLENBQWYsQ0FBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBVkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREQ7QUFjQTs7R0F0QlFOLEk7VUFFR0UsNkMsRUFHc0JDLHNEOzs7TUFMekJILEk7QUF3Qk1BLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuNDE3ZWM4ZmU4YjVjZDY2ZDE2YzguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IENhcnRTdHlsZXMgZnJvbSBcIi4vc3R5bGVzL0NhcnRTdHlsZXNcIjtcclxuaW1wb3J0IHVzZVVzZXIgZnJvbSBcIi4vVXNlclwiO1xyXG5pbXBvcnQgU3VwcmVtZSBmcm9tIFwiLi9zdHlsZXMvU3VwcmVtZVwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgZm9ybWF0TW9uZXkgZnJvbSBcIi4uL2xpYi9mb3JtYXRNb25leVwiO1xyXG5pbXBvcnQgY2FsY1RvdGFsUHJpY2UgZnJvbSBcIi4uL2xpYi9jYWxjVG90YWxQcmljZVwiO1xyXG5pbXBvcnQgQ2xvc2VCdXR0b24gZnJvbSBcIi4vc3R5bGVzL0Nsb3NlQnV0dG9uXCI7XHJcbmltcG9ydCB7IHVzZUNhcnQgfSBmcm9tIFwiLi4vbGliL0NhcnRTdGF0ZVwiO1xyXG5pbXBvcnQgUmVtb3ZlRnJvbUNhcnQgZnJvbSBcIi4vUmVtb3ZlRnJvbUNhcnRcIjtcclxuXHJcbi8vIENhcnRTdHlsZXMgPT4gdmlkZW86ICM0NFxyXG5cclxuY29uc3QgQ2FydEl0ZW1TdHlsZXMgPSBzdHlsZWQubGlgXHJcblx0cGFkZGluZzogMXJlbSAwO1xyXG5cdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1saWdodEdyZXkpO1xyXG5cdGRpc3BsYXk6IGdyaWQ7XHJcblx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmciBhdXRvO1xyXG5cdGltZyB7XHJcblx0XHRtYXJnaW4tcmlnaHQ6IDFyZW07XHJcblx0fVxyXG5cclxuXHRoMyxcclxuXHRwIHtcclxuXHRcdG1hcmdpbjogMDtcclxuXHR9XHJcbmA7XHJcblxyXG5jb25zdCBDYXJ0SXRlbSA9IChpdGVtKSA9PiB7XHJcblx0Y29uc3QgeyBpZCwgcHJvZHVjdCwgbmFtZSwgcXVhbnRpdHkgfSA9IGl0ZW0uaXRlbTtcclxuXHRpZiAoIXByb2R1Y3QpIHJldHVybiBudWxsO1xyXG5cdHJldHVybiAoXHJcblx0XHQ8Q2FydEl0ZW1TdHlsZXM+XHJcblx0XHRcdDxpbWdcclxuXHRcdFx0XHR3aWR0aD1cIjEwMFwiXHJcblx0XHRcdFx0c3JjPXtwcm9kdWN0LnBob3RvLmltYWdlLnB1YmxpY1VybFRyYW5zZm9ybWVkfVxyXG5cdFx0XHRcdGFsdD17bmFtZX1cclxuXHRcdFx0Lz5cclxuXHRcdFx0PGgzPntwcm9kdWN0Lm5hbWV9PC9oMz5cclxuXHRcdFx0PHA+e2Zvcm1hdE1vbmV5KHByb2R1Y3QucHJpY2UgKiBxdWFudGl0eSl9PC9wPlxyXG5cdFx0XHQ8cD5cclxuXHRcdFx0XHRRdWFudGl0eToge3F1YW50aXR5fSAtIDxlbT57Zm9ybWF0TW9uZXkocHJvZHVjdC5wcmljZSl9IDwvZW0+XHJcblx0XHRcdFx0PFJlbW92ZUZyb21DYXJ0IC8+XHJcblx0XHRcdDwvcD5cclxuXHRcdDwvQ2FydEl0ZW1TdHlsZXM+XHJcblx0KTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIENhcnQoKSB7XHJcblx0Ly8gSnVzdCBhIHF1ZXJ5IGZvciBjdXJyZW50IGxvZ2dlZCBpbiB1c2VyXHJcblx0Y29uc3QgbWUgPSB1c2VVc2VyKCk7XHJcblxyXG5cdC8vIENvbnRleHQgQVBJXHJcblx0Y29uc3QgeyBjYXJ0T3BlbiwgdG9nZ2xlQ2FydCB9ID0gdXNlQ2FydCgpO1xyXG5cclxuXHRpZiAoIW1lKSByZXR1cm4gbnVsbDtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PENhcnRTdHlsZXMgb3Blbj17Y2FydE9wZW59PlxyXG5cdFx0XHQ8aGVhZGVyPlxyXG5cdFx0XHRcdDxTdXByZW1lPnttZS5uYW1lfTwvU3VwcmVtZT5cclxuXHRcdFx0XHQ8Q2xvc2VCdXR0b24gb25DbGljaz17dG9nZ2xlQ2FydH0+JnRpbWVzOzwvQ2xvc2VCdXR0b24+XHJcblx0XHRcdDwvaGVhZGVyPlxyXG5cdFx0XHQ8dWw+XHJcblx0XHRcdFx0e21lLmNhcnQubWFwKChpdGVtLCBpKSA9PiAoXHJcblx0XHRcdFx0XHQ8Q2FydEl0ZW0ga2V5PXtpfSBpdGVtPXtpdGVtfSAvPlxyXG5cdFx0XHRcdCkpfVxyXG5cdFx0XHQ8L3VsPlxyXG5cdFx0XHQ8Zm9vdGVyPlRvdGFsOiB7Zm9ybWF0TW9uZXkoY2FsY1RvdGFsUHJpY2UobWUuY2FydCkpfTwvZm9vdGVyPlxyXG5cdFx0PC9DYXJ0U3R5bGVzPlxyXG5cdCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcnQ7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=