webpackHotUpdate_N_E("pages/_app",{

/***/ "./lib/CartState.js":
/*!**************************!*\
  !*** ./lib/CartState.js ***!
  \**************************/
/*! exports provided: CartStateProvider, useCart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartStateProvider", function() { return CartStateProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCart", function() { return useCart; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var _jsxFileName = "D:\\React\\Advanced-React\\Advanced-React\\sick-fits\\frontend\\lib\\CartState.js",
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$();


var LocalStateContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])();
var LocalStateProvider = LocalStateContext.Provider;

function useCart() {
  _s();

  var all = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(LocalStateContext);
  return all;
}

_s(useCart, "k0r6hllA0ZVFTbsvyQUS1AVLOSY=");

function CartStateProvider(_ref) {
  _s2();

  var children = _ref.children;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      cartOpen = _useState[0],
      setCartOpen = _useState[1];

  function toggleCart() {
    setCartOpen(!cartOpen);
  }

  function closeCart() {
    setCartOpen(false);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(LocalStateProvider, {
    value: {
      cartOpen: cartOpen,
      toggleCart: toggleCart,
      closeCart: closeCart
    },
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 3
  }, this);
}

_s2(CartStateProvider, "xe1WncxGrJWPKk54fyWehQszVXg=");

_c = CartStateProvider;


var _c;

$RefreshReg$(_c, "CartStateProvider");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL0NhcnRTdGF0ZS5qcyJdLCJuYW1lcyI6WyJMb2NhbFN0YXRlQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJMb2NhbFN0YXRlUHJvdmlkZXIiLCJQcm92aWRlciIsInVzZUNhcnQiLCJhbGwiLCJ1c2VDb250ZXh0IiwiQ2FydFN0YXRlUHJvdmlkZXIiLCJjaGlsZHJlbiIsInVzZVN0YXRlIiwiY2FydE9wZW4iLCJzZXRDYXJ0T3BlbiIsInRvZ2dsZUNhcnQiLCJjbG9zZUNhcnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQSxJQUFNQSxpQkFBaUIsZ0JBQUdDLDJEQUFhLEVBQXZDO0FBRUEsSUFBTUMsa0JBQWtCLEdBQUdGLGlCQUFpQixDQUFDRyxRQUE3Qzs7QUFFQSxTQUFTQyxPQUFULEdBQW1CO0FBQUE7O0FBQ2xCLE1BQU1DLEdBQUcsR0FBR0Msd0RBQVUsQ0FBQ04saUJBQUQsQ0FBdEI7QUFDQSxTQUFPSyxHQUFQO0FBQ0E7O0dBSFFELE87O0FBS1QsU0FBU0csaUJBQVQsT0FBeUM7QUFBQTs7QUFBQSxNQUFaQyxRQUFZLFFBQVpBLFFBQVk7O0FBQUEsa0JBQ1JDLHNEQUFRLENBQUMsS0FBRCxDQURBO0FBQUEsTUFDakNDLFFBRGlDO0FBQUEsTUFDdkJDLFdBRHVCOztBQUd4QyxXQUFTQyxVQUFULEdBQXNCO0FBQ3JCRCxlQUFXLENBQUMsQ0FBQ0QsUUFBRixDQUFYO0FBQ0E7O0FBRUQsV0FBU0csU0FBVCxHQUFxQjtBQUNwQkYsZUFBVyxDQUFDLEtBQUQsQ0FBWDtBQUNBOztBQUVELHNCQUNDLHFFQUFDLGtCQUFEO0FBQW9CLFNBQUssRUFBRTtBQUFFRCxjQUFRLEVBQVJBLFFBQUY7QUFBWUUsZ0JBQVUsRUFBVkEsVUFBWjtBQUF3QkMsZUFBUyxFQUFUQTtBQUF4QixLQUEzQjtBQUFBLGNBQ0VMO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUREO0FBS0E7O0lBaEJRRCxpQjs7S0FBQUEsaUI7QUFrQlQiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC4wM2FjYTU0NmU2MTdhYTc0YTY5Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUNvbnRleHQsIGNyZWF0ZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IExvY2FsU3RhdGVDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xyXG5cclxuY29uc3QgTG9jYWxTdGF0ZVByb3ZpZGVyID0gTG9jYWxTdGF0ZUNvbnRleHQuUHJvdmlkZXI7XHJcblxyXG5mdW5jdGlvbiB1c2VDYXJ0KCkge1xyXG5cdGNvbnN0IGFsbCA9IHVzZUNvbnRleHQoTG9jYWxTdGF0ZUNvbnRleHQpO1xyXG5cdHJldHVybiBhbGw7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIENhcnRTdGF0ZVByb3ZpZGVyKHsgY2hpbGRyZW4gfSkge1xyXG5cdGNvbnN0IFtjYXJ0T3Blbiwgc2V0Q2FydE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuXHRmdW5jdGlvbiB0b2dnbGVDYXJ0KCkge1xyXG5cdFx0c2V0Q2FydE9wZW4oIWNhcnRPcGVuKTtcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGNsb3NlQ2FydCgpIHtcclxuXHRcdHNldENhcnRPcGVuKGZhbHNlKTtcclxuXHR9XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8TG9jYWxTdGF0ZVByb3ZpZGVyIHZhbHVlPXt7IGNhcnRPcGVuLCB0b2dnbGVDYXJ0LCBjbG9zZUNhcnQgfX0+XHJcblx0XHRcdHtjaGlsZHJlbn1cclxuXHRcdDwvTG9jYWxTdGF0ZVByb3ZpZGVyPlxyXG5cdCk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IENhcnRTdGF0ZVByb3ZpZGVyLCB1c2VDYXJ0IH07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=