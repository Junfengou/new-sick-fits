webpackHotUpdate_N_E("pages/index",{

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
/* harmony import */ var _lib_formatMoney__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/formatMoney */ "./lib/formatMoney.js");
/* harmony import */ var _DeleteProduct__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./DeleteProduct */ "./components/DeleteProduct.js");

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
      lineNumber: 13,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_Title__WEBPACK_IMPORTED_MODULE_3__["default"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
        href: "/product/".concat(id),
        children: name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_PriceTag__WEBPACK_IMPORTED_MODULE_4__["default"], {
      children: Object(_lib_formatMoney__WEBPACK_IMPORTED_MODULE_6__["default"])(price)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: description
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "buttonList",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
        href: {
          pathname: "/update",
          query: {
            id: id
          }
        },
        children: "Edit item \uD83D\uDD27\uD83D\uDD28"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 5
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_DeleteProduct__WEBPACK_IMPORTED_MODULE_7__["default"], {
        children: "Delete \uD83D\uDC80"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 4
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 12,
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9kdWN0LmpzIl0sIm5hbWVzIjpbIlByb2R1Y3QiLCJpdGVtIiwiaWQiLCJuYW1lIiwicHJpY2UiLCJkZXNjcmlwdGlvbiIsInBob3RvIiwiaW1hZ2UiLCJwdWJsaWNVcmxUcmFuc2Zvcm1lZCIsImZvcm1hdE1vbmV5IiwicGF0aG5hbWUiLCJxdWVyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsT0FBVCxPQUEyQjtBQUFBOztBQUFBLE1BQVJDLElBQVEsUUFBUkEsSUFBUTtBQUFBLE1BQ2xCQyxFQURrQixHQUNzQkQsSUFEdEIsQ0FDbEJDLEVBRGtCO0FBQUEsTUFDZEMsSUFEYyxHQUNzQkYsSUFEdEIsQ0FDZEUsSUFEYztBQUFBLE1BQ1JDLEtBRFEsR0FDc0JILElBRHRCLENBQ1JHLEtBRFE7QUFBQSxNQUNEQyxXQURDLEdBQ3NCSixJQUR0QixDQUNESSxXQURDO0FBQUEsTUFDWUMsS0FEWixHQUNzQkwsSUFEdEIsQ0FDWUssS0FEWjtBQUUxQixzQkFDQyxxRUFBQywwREFBRDtBQUFBLDRCQUNDO0FBQUssU0FBRyxFQUFFQSxLQUFGLGFBQUVBLEtBQUYsdUNBQUVBLEtBQUssQ0FBRUMsS0FBVCxpREFBRSxhQUFjQyxvQkFBeEI7QUFBOEMsU0FBRyxFQUFFTDtBQUFuRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREQsZUFFQyxxRUFBQyxxREFBRDtBQUFBLDZCQUNDLHFFQUFDLGdEQUFEO0FBQU0sWUFBSSxxQkFBY0QsRUFBZCxDQUFWO0FBQUEsa0JBQStCQztBQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZELGVBS0MscUVBQUMsd0RBQUQ7QUFBQSxnQkFBV00sZ0VBQVcsQ0FBQ0wsS0FBRDtBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEQsZUFNQztBQUFBLGdCQUFJQztBQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFORCxlQVNDO0FBQUssZUFBUyxFQUFDLFlBQWY7QUFBQSw4QkFDQyxxRUFBQyxnREFBRDtBQUNDLFlBQUksRUFBRTtBQUNMSyxrQkFBUSxFQUFFLFNBREw7QUFFTEMsZUFBSyxFQUFFO0FBQ05ULGNBQUUsRUFBRUE7QUFERTtBQUZGLFNBRFA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERCxlQVdDLHFFQUFDLHNEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBWEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBVEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREQ7QUF5QkE7O0tBM0JRRixPO0FBNkJNQSxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC41YzI4OWQyMDIwZmJlNDk5YzJlMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSXRlbVN0eWxlcyBmcm9tIFwiLi9zdHlsZXMvSXRlbVN0eWxlc1wiO1xyXG5pbXBvcnQgVGl0bGUgZnJvbSBcIi4vc3R5bGVzL1RpdGxlXCI7XHJcbmltcG9ydCBQcmljZVRhZyBmcm9tIFwiLi9zdHlsZXMvUHJpY2VUYWdcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgZm9ybWF0TW9uZXkgZnJvbSBcIi4uL2xpYi9mb3JtYXRNb25leVwiO1xyXG5pbXBvcnQgRGVsZXRlUHJvZHVjdCBmcm9tIFwiLi9EZWxldGVQcm9kdWN0XCI7XHJcblxyXG5mdW5jdGlvbiBQcm9kdWN0KHsgaXRlbSB9KSB7XHJcblx0Y29uc3QgeyBpZCwgbmFtZSwgcHJpY2UsIGRlc2NyaXB0aW9uLCBwaG90byB9ID0gaXRlbTtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PEl0ZW1TdHlsZXM+XHJcblx0XHRcdDxpbWcgc3JjPXtwaG90bz8uaW1hZ2U/LnB1YmxpY1VybFRyYW5zZm9ybWVkfSBhbHQ9e25hbWV9IC8+XHJcblx0XHRcdDxUaXRsZT5cclxuXHRcdFx0XHQ8TGluayBocmVmPXtgL3Byb2R1Y3QvJHtpZH1gfT57bmFtZX08L0xpbms+XHJcblx0XHRcdDwvVGl0bGU+XHJcblx0XHRcdDxQcmljZVRhZz57Zm9ybWF0TW9uZXkocHJpY2UpfTwvUHJpY2VUYWc+XHJcblx0XHRcdDxwPntkZXNjcmlwdGlvbn08L3A+XHJcblxyXG5cdFx0XHR7LyogVE9ETzogYWRkIGJ1dHRvbnMgdG8gZWRpdCBhbmQgZGVsZXRlIGl0ZW0gKi99XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uTGlzdFwiPlxyXG5cdFx0XHRcdDxMaW5rXHJcblx0XHRcdFx0XHRocmVmPXt7XHJcblx0XHRcdFx0XHRcdHBhdGhuYW1lOiBcIi91cGRhdGVcIixcclxuXHRcdFx0XHRcdFx0cXVlcnk6IHtcclxuXHRcdFx0XHRcdFx0XHRpZDogaWQsXHJcblx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdD5cclxuXHRcdFx0XHRcdEVkaXQgaXRlbSDwn5Sn8J+UqFxyXG5cdFx0XHRcdDwvTGluaz5cclxuXHRcdFx0XHQ8RGVsZXRlUHJvZHVjdD5EZWxldGUg8J+SgDwvRGVsZXRlUHJvZHVjdD5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L0l0ZW1TdHlsZXM+XHJcblx0KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==