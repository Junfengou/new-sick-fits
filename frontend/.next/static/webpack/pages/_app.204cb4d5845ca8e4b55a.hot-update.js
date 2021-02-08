webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/Nav.js":
/*!***************************!*\
  !*** ./components/Nav.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_styles_NavStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/styles/NavStyles */ "./components/styles/NavStyles.js");
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./User */ "./components/User.js");
/* harmony import */ var _SignOut__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SignOut */ "./components/SignOut.js");
/* harmony import */ var _lib_CartState__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/CartState */ "./lib/CartState.js");
/* harmony import */ var _CartCount__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CartCount */ "./components/CartCount.js");



var _jsxFileName = "D:\\React\\Advanced-React\\Advanced-React\\sick-fits\\frontend\\components\\Nav.js",
    _s = $RefreshSig$();









function Nav() {
  _s();

  var user = Object(_User__WEBPACK_IMPORTED_MODULE_4__["default"])();

  var _useCart = Object(_lib_CartState__WEBPACK_IMPORTED_MODULE_6__["useCart"])(),
      cartOpen = _useCart.cartOpen,
      toggleCart = _useCart.toggleCart; // console.log(user);


  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_styles_NavStyles__WEBPACK_IMPORTED_MODULE_3__["default"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/products",
      children: "products "
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 4
    }, this), user && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: "/sell",
        children: "sell "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 6
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: "/orders",
        children: "orders "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 6
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_SignOut__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 6
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        type: "button",
        onClick: toggleCart,
        children: ["Open cart", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_CartCount__WEBPACK_IMPORTED_MODULE_7__["default"], {
          count: user.cart.reduce(function (tally, cartItem) {
            return tally + (cartItem.product ? cartItem.quantity : 0);
          }, 0)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 7
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 6
      }, this)]
    }, void 0, true), !user && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: "/signin",
        children: "Sign In"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 6
      }, this)
    }, void 0, false)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 3
  }, this);
}

_s(Nav, "ik6Ynw1d0Tj0YuGAZ6UCm8/69NQ=", false, function () {
  return [_User__WEBPACK_IMPORTED_MODULE_4__["default"], _lib_CartState__WEBPACK_IMPORTED_MODULE_6__["useCart"]];
});

_c = Nav;
/* harmony default export */ __webpack_exports__["default"] = (Nav);

var _c;

$RefreshReg$(_c, "Nav");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXYuanMiXSwibmFtZXMiOlsiTmF2IiwidXNlciIsInVzZVVzZXIiLCJ1c2VDYXJ0IiwiY2FydE9wZW4iLCJ0b2dnbGVDYXJ0IiwiY2FydCIsInJlZHVjZSIsInRhbGx5IiwiY2FydEl0ZW0iLCJwcm9kdWN0IiwicXVhbnRpdHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxHQUFULEdBQWU7QUFBQTs7QUFDZCxNQUFNQyxJQUFJLEdBQUdDLHFEQUFPLEVBQXBCOztBQURjLGlCQUVtQkMsOERBQU8sRUFGMUI7QUFBQSxNQUVOQyxRQUZNLFlBRU5BLFFBRk07QUFBQSxNQUVJQyxVQUZKLFlBRUlBLFVBRkosRUFHZDs7O0FBQ0Esc0JBQ0MscUVBQUMsb0VBQUQ7QUFBQSw0QkFDQyxxRUFBQyxnREFBRDtBQUFNLFVBQUksRUFBQyxXQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREQsRUFFRUosSUFBSSxpQkFDSjtBQUFBLDhCQUNDLHFFQUFDLGdEQUFEO0FBQU0sWUFBSSxFQUFDLE9BQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERCxlQUVDLHFFQUFDLGdEQUFEO0FBQU0sWUFBSSxFQUFDLFNBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRCxlQUlDLHFFQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKRCxlQUtDO0FBQVEsWUFBSSxFQUFDLFFBQWI7QUFBc0IsZUFBTyxFQUFFSSxVQUEvQjtBQUFBLDZDQUVDLHFFQUFDLGtEQUFEO0FBQ0MsZUFBSyxFQUFFSixJQUFJLENBQUNLLElBQUwsQ0FBVUMsTUFBVixDQUNOLFVBQUNDLEtBQUQsRUFBUUMsUUFBUjtBQUFBLG1CQUNDRCxLQUFLLElBQUlDLFFBQVEsQ0FBQ0MsT0FBVCxHQUFtQkQsUUFBUSxDQUFDRSxRQUE1QixHQUF1QyxDQUEzQyxDQUROO0FBQUEsV0FETSxFQUdOLENBSE07QUFEUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUxEO0FBQUEsb0JBSEYsRUFxQkUsQ0FBQ1YsSUFBRCxpQkFDQTtBQUFBLDZCQUNDLHFFQUFDLGdEQUFEO0FBQU0sWUFBSSxFQUFDLFNBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERCxxQkF0QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREQ7QUErQkE7O0dBbkNRRCxHO1VBQ0tFLDZDLEVBQ29CQyxzRDs7O0tBRnpCSCxHO0FBcUNNQSxrRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjIwNGNiNGQ1ODQ1Y2E4ZTRiNTVhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IE5hdlN0eWxlcyBmcm9tIFwiLi4vY29tcG9uZW50cy9zdHlsZXMvTmF2U3R5bGVzXCI7XHJcbmltcG9ydCB1c2VVc2VyIGZyb20gXCIuL1VzZXJcIjtcclxuaW1wb3J0IFNpZ25PdXQgZnJvbSBcIi4vU2lnbk91dFwiO1xyXG5pbXBvcnQgeyB1c2VDYXJ0IH0gZnJvbSBcIi4uL2xpYi9DYXJ0U3RhdGVcIjtcclxuaW1wb3J0IENhcnRDb3VudCBmcm9tIFwiLi9DYXJ0Q291bnRcIjtcclxuXHJcbmZ1bmN0aW9uIE5hdigpIHtcclxuXHRjb25zdCB1c2VyID0gdXNlVXNlcigpO1xyXG5cdGNvbnN0IHsgY2FydE9wZW4sIHRvZ2dsZUNhcnQgfSA9IHVzZUNhcnQoKTtcclxuXHQvLyBjb25zb2xlLmxvZyh1c2VyKTtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PE5hdlN0eWxlcz5cclxuXHRcdFx0PExpbmsgaHJlZj1cIi9wcm9kdWN0c1wiPnByb2R1Y3RzIDwvTGluaz5cclxuXHRcdFx0e3VzZXIgJiYgKFxyXG5cdFx0XHRcdDw+XHJcblx0XHRcdFx0XHQ8TGluayBocmVmPVwiL3NlbGxcIj5zZWxsIDwvTGluaz5cclxuXHRcdFx0XHRcdDxMaW5rIGhyZWY9XCIvb3JkZXJzXCI+b3JkZXJzIDwvTGluaz5cclxuXHRcdFx0XHRcdHsvKiA8TGluayBocmVmPVwiL2FjY291bnRcIj5hY2NvdW50IDwvTGluaz4gKi99XHJcblx0XHRcdFx0XHQ8U2lnbk91dCAvPlxyXG5cdFx0XHRcdFx0PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17dG9nZ2xlQ2FydH0+XHJcblx0XHRcdFx0XHRcdE9wZW4gY2FydFxyXG5cdFx0XHRcdFx0XHQ8Q2FydENvdW50XHJcblx0XHRcdFx0XHRcdFx0Y291bnQ9e3VzZXIuY2FydC5yZWR1Y2UoXHJcblx0XHRcdFx0XHRcdFx0XHQodGFsbHksIGNhcnRJdGVtKSA9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR0YWxseSArIChjYXJ0SXRlbS5wcm9kdWN0ID8gY2FydEl0ZW0ucXVhbnRpdHkgOiAwKSxcclxuXHRcdFx0XHRcdFx0XHRcdDBcclxuXHRcdFx0XHRcdFx0XHQpfVxyXG5cdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0PC9idXR0b24+XHJcblx0XHRcdFx0PC8+XHJcblx0XHRcdCl9XHJcblxyXG5cdFx0XHR7IXVzZXIgJiYgKFxyXG5cdFx0XHRcdDw+XHJcblx0XHRcdFx0XHQ8TGluayBocmVmPVwiL3NpZ25pblwiPlNpZ24gSW48L0xpbms+XHJcblx0XHRcdFx0PC8+XHJcblx0XHRcdCl9XHJcblxyXG5cdFx0XHR7LyogPExpbmsgaHJlZj1cIi9jYXJ0XCI+Y2FydCA8L0xpbms+ICovfVxyXG5cdFx0PC9OYXZTdHlsZXM+XHJcblx0KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9