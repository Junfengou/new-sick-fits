webpackHotUpdate_N_E("pages/products",{

/***/ "./components/Product.js":
/*!*******************************!*\
  !*** ./components/Product.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_ItemStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/ItemStyles */ "./components/styles/ItemStyles.js");
/* harmony import */ var _styles_Title__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/Title */ "./components/styles/Title.js");
/* harmony import */ var _styles_PriceTag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/PriceTag */ "./components/styles/PriceTag.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _lib_formatMoney__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lib/formatMoney */ "./lib/formatMoney.js");

var _jsxFileName = "D:\\React\\Advanced-React\\Advanced-React\\sick-fits\\frontend\\components\\Product.js";







function Product(_ref) {
  var _photo$image;

  var item = _ref.item;
  var id = item.id,
      name = item.name,
      price = item.price,
      description = item.description,
      photo = item.photo;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_ItemStyles__WEBPACK_IMPORTED_MODULE_2__["default"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
      src: photo === null || photo === void 0 ? void 0 : (_photo$image = photo.image) === null || _photo$image === void 0 ? void 0 : _photo$image.publicUrlTransformed,
      alt: name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_Title__WEBPACK_IMPORTED_MODULE_3__["default"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
        href: "/product/".concat(id),
        children: name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_PriceTag__WEBPACK_IMPORTED_MODULE_4__["default"], {
      children: Object(_lib_formatMoney__WEBPACK_IMPORTED_MODULE_7__["default"])(price)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: description
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 4
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 3
  }, this);
}

_c = Product;
/* harmony default export */ __webpack_exports__["default"] = (Product);

var _c;

$RefreshReg$(_c, "Product");

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

/***/ }),

/***/ "./lib/formatMoney.js":
/*!****************************!*\
  !*** ./lib/formatMoney.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {function formatMoney() {
  var amount = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var options = {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2
  }; // Check if there's no decimal in price

  if (amount % 100 === 0) {
    options.minimumFractionDigits = 0;
  }

  var formatter = Intl.NumberFormat("en-US", options);
  return formatter.format(amount / 100);
}

/* harmony default export */ __webpack_exports__["default"] = (formatMoney);

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

/***/ }),

/***/ "./lib/fortmatMoney.js":
false

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9kdWN0LmpzIiwid2VicGFjazovL19OX0UvLi9saWIvZm9ybWF0TW9uZXkuanMiXSwibmFtZXMiOlsiUHJvZHVjdCIsIml0ZW0iLCJpZCIsIm5hbWUiLCJwcmljZSIsImRlc2NyaXB0aW9uIiwicGhvdG8iLCJpbWFnZSIsInB1YmxpY1VybFRyYW5zZm9ybWVkIiwiZm9ybWF0TW9uZXkiLCJhbW91bnQiLCJvcHRpb25zIiwic3R5bGUiLCJjdXJyZW5jeSIsIm1pbmltdW1GcmFjdGlvbkRpZ2l0cyIsImZvcm1hdHRlciIsIkludGwiLCJOdW1iZXJGb3JtYXQiLCJmb3JtYXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLE9BQVQsT0FBMkI7QUFBQTs7QUFBQSxNQUFSQyxJQUFRLFFBQVJBLElBQVE7QUFBQSxNQUNsQkMsRUFEa0IsR0FDc0JELElBRHRCLENBQ2xCQyxFQURrQjtBQUFBLE1BQ2RDLElBRGMsR0FDc0JGLElBRHRCLENBQ2RFLElBRGM7QUFBQSxNQUNSQyxLQURRLEdBQ3NCSCxJQUR0QixDQUNSRyxLQURRO0FBQUEsTUFDREMsV0FEQyxHQUNzQkosSUFEdEIsQ0FDREksV0FEQztBQUFBLE1BQ1lDLEtBRFosR0FDc0JMLElBRHRCLENBQ1lLLEtBRFo7QUFFMUIsc0JBQ0MscUVBQUMsMERBQUQ7QUFBQSw0QkFDQztBQUFLLFNBQUcsRUFBRUEsS0FBRixhQUFFQSxLQUFGLHVDQUFFQSxLQUFLLENBQUVDLEtBQVQsaURBQUUsYUFBY0Msb0JBQXhCO0FBQThDLFNBQUcsRUFBRUw7QUFBbkQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURELGVBRUMscUVBQUMscURBQUQ7QUFBQSw2QkFDQyxxRUFBQyxnREFBRDtBQUFNLFlBQUkscUJBQWNELEVBQWQsQ0FBVjtBQUFBLGtCQUErQkM7QUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRCxlQUtDLHFFQUFDLHdEQUFEO0FBQUEsZ0JBQVdNLGdFQUFXLENBQUNMLEtBQUQ7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxELGVBTUM7QUFBQSxnQkFBSUM7QUFBSjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREQ7QUFZQTs7S0FkUUwsTztBQWdCTUEsc0VBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2QkE7QUFBQSx1REFBU1MsV0FBVCxHQUFpQztBQUFBLE1BQVpDLE1BQVksdUVBQUgsQ0FBRztBQUNoQyxNQUFNQyxPQUFPLEdBQUc7QUFDZkMsU0FBSyxFQUFFLFVBRFE7QUFFZkMsWUFBUSxFQUFFLEtBRks7QUFHZkMseUJBQXFCLEVBQUU7QUFIUixHQUFoQixDQURnQyxDQU9oQzs7QUFDQSxNQUFJSixNQUFNLEdBQUcsR0FBVCxLQUFpQixDQUFyQixFQUF3QjtBQUN2QkMsV0FBTyxDQUFDRyxxQkFBUixHQUFnQyxDQUFoQztBQUNBOztBQUVELE1BQU1DLFNBQVMsR0FBR0MsSUFBSSxDQUFDQyxZQUFMLENBQWtCLE9BQWxCLEVBQTJCTixPQUEzQixDQUFsQjtBQUVBLFNBQU9JLFNBQVMsQ0FBQ0csTUFBVixDQUFpQlIsTUFBTSxHQUFHLEdBQTFCLENBQVA7QUFDQTs7QUFFY0QsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZHVjdHMuZWE2NGMzZmYxZjI5NWIyZmRlMTAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEl0ZW1TdHlsZXMgZnJvbSBcIi4vc3R5bGVzL0l0ZW1TdHlsZXNcIjtcclxuaW1wb3J0IFRpdGxlIGZyb20gXCIuL3N0eWxlcy9UaXRsZVwiO1xyXG5pbXBvcnQgUHJpY2VUYWcgZnJvbSBcIi4vc3R5bGVzL1ByaWNlVGFnXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IGZvcm1hdE1vbmV5IGZyb20gXCIuLi9saWIvZm9ybWF0TW9uZXlcIjtcclxuXHJcbmZ1bmN0aW9uIFByb2R1Y3QoeyBpdGVtIH0pIHtcclxuXHRjb25zdCB7IGlkLCBuYW1lLCBwcmljZSwgZGVzY3JpcHRpb24sIHBob3RvIH0gPSBpdGVtO1xyXG5cdHJldHVybiAoXHJcblx0XHQ8SXRlbVN0eWxlcz5cclxuXHRcdFx0PGltZyBzcmM9e3Bob3RvPy5pbWFnZT8ucHVibGljVXJsVHJhbnNmb3JtZWR9IGFsdD17bmFtZX0gLz5cclxuXHRcdFx0PFRpdGxlPlxyXG5cdFx0XHRcdDxMaW5rIGhyZWY9e2AvcHJvZHVjdC8ke2lkfWB9PntuYW1lfTwvTGluaz5cclxuXHRcdFx0PC9UaXRsZT5cclxuXHRcdFx0PFByaWNlVGFnPntmb3JtYXRNb25leShwcmljZSl9PC9QcmljZVRhZz5cclxuXHRcdFx0PHA+e2Rlc2NyaXB0aW9ufTwvcD5cclxuXHJcblx0XHRcdHsvKiBUT0RPOiBhZGQgYnV0dG9ucyB0byBlZGl0IGFuZCBkZWxldGUgaXRlbSAqL31cclxuXHRcdDwvSXRlbVN0eWxlcz5cclxuXHQpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0O1xyXG4iLCJmdW5jdGlvbiBmb3JtYXRNb25leShhbW91bnQgPSAwKSB7XHJcblx0Y29uc3Qgb3B0aW9ucyA9IHtcclxuXHRcdHN0eWxlOiBcImN1cnJlbmN5XCIsXHJcblx0XHRjdXJyZW5jeTogXCJVU0RcIixcclxuXHRcdG1pbmltdW1GcmFjdGlvbkRpZ2l0czogMixcclxuXHR9O1xyXG5cclxuXHQvLyBDaGVjayBpZiB0aGVyZSdzIG5vIGRlY2ltYWwgaW4gcHJpY2VcclxuXHRpZiAoYW1vdW50ICUgMTAwID09PSAwKSB7XHJcblx0XHRvcHRpb25zLm1pbmltdW1GcmFjdGlvbkRpZ2l0cyA9IDA7XHJcblx0fVxyXG5cclxuXHRjb25zdCBmb3JtYXR0ZXIgPSBJbnRsLk51bWJlckZvcm1hdChcImVuLVVTXCIsIG9wdGlvbnMpO1xyXG5cclxuXHRyZXR1cm4gZm9ybWF0dGVyLmZvcm1hdChhbW91bnQgLyAxMDApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmb3JtYXRNb25leTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==