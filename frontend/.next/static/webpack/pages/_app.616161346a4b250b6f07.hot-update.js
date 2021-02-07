webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/Search.js":
/*!******************************!*\
  !*** ./components/Search.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var D_React_Advanced_React_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var downshift__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! downshift */ "./node_modules/downshift/dist/downshift.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_DropDown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/DropDown */ "./components/styles/DropDown.js");



var _jsxFileName = "D:\\React\\Advanced-React\\Advanced-React\\sick-fits\\frontend\\components\\Search.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(D_React_Advanced_React_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





function Search() {
  _s();

  // This takes care any server side rendering issues you may have
  Object(downshift__WEBPACK_IMPORTED_MODULE_2__["resetIdCounter"])();

  var _useCombobox = Object(downshift__WEBPACK_IMPORTED_MODULE_2__["useCombobox"])({
    items: [],
    // Fire when input detected in the search box
    onInputValueChange: function onInputValueChange() {
      console.log("Input changed");
    },
    // Fire when someone select an item from dropbown box
    onSelectedItemChange: function onSelectedItemChange() {
      console.log("Selected item change");
    }
  }),
      getMenuProps = _useCombobox.getMenuProps,
      getInputProps = _useCombobox.getInputProps,
      getComboboxProps = _useCombobox.getComboboxProps;

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_styles_DropDown__WEBPACK_IMPORTED_MODULE_4__["SearchStyles"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", _objectSpread(_objectSpread({}, getComboboxProps()), {}, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", _objectSpread({}, getInputProps({
        type: "search",
        placeholder: "Search for an item",
        id: "search",
        className: "loading"
      })), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 5
      }, this)
    }), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_styles_DropDown__WEBPACK_IMPORTED_MODULE_4__["DropDown"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_styles_DropDown__WEBPACK_IMPORTED_MODULE_4__["DropDownItem"], {
        children: "Woah"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 5
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_styles_DropDown__WEBPACK_IMPORTED_MODULE_4__["DropDownItem"], {
        children: "Woah"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 5
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_styles_DropDown__WEBPACK_IMPORTED_MODULE_4__["DropDownItem"], {
        children: "Woah"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 4
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 3
  }, this);
}

_s(Search, "ZKwuOux1SqYhJinrbgrSMfKGmEo=", false, function () {
  return [downshift__WEBPACK_IMPORTED_MODULE_2__["useCombobox"]];
});

_c = Search;
/* harmony default export */ __webpack_exports__["default"] = (Search);

var _c;

$RefreshReg$(_c, "Search");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TZWFyY2guanMiXSwibmFtZXMiOlsiU2VhcmNoIiwicmVzZXRJZENvdW50ZXIiLCJ1c2VDb21ib2JveCIsIml0ZW1zIiwib25JbnB1dFZhbHVlQ2hhbmdlIiwiY29uc29sZSIsImxvZyIsIm9uU2VsZWN0ZWRJdGVtQ2hhbmdlIiwiZ2V0TWVudVByb3BzIiwiZ2V0SW5wdXRQcm9wcyIsImdldENvbWJvYm94UHJvcHMiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJpZCIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxNQUFULEdBQWtCO0FBQUE7O0FBQ2pCO0FBQ0FDLGtFQUFjOztBQUZHLHFCQUd5Q0MsNkRBQVcsQ0FBQztBQUNyRUMsU0FBSyxFQUFFLEVBRDhEO0FBRXJFO0FBQ0FDLHNCQUhxRSxnQ0FHaEQ7QUFDcEJDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLGVBQVo7QUFDQSxLQUxvRTtBQU1yRTtBQUNBQyx3QkFQcUUsa0NBTzlDO0FBQ3RCRixhQUFPLENBQUNDLEdBQVIsQ0FBWSxzQkFBWjtBQUNBO0FBVG9FLEdBQUQsQ0FIcEQ7QUFBQSxNQUdURSxZQUhTLGdCQUdUQSxZQUhTO0FBQUEsTUFHS0MsYUFITCxnQkFHS0EsYUFITDtBQUFBLE1BR29CQyxnQkFIcEIsZ0JBR29CQSxnQkFIcEI7O0FBZWpCLHNCQUNDLHFFQUFDLDZEQUFEO0FBQUEsNEJBQ0MsNEdBQVNBLGdCQUFnQixFQUF6QjtBQUFBLDZCQUNDLGdHQUNLRCxhQUFhLENBQUM7QUFDakJFLFlBQUksRUFBRSxRQURXO0FBRWpCQyxtQkFBVyxFQUFFLG9CQUZJO0FBR2pCQyxVQUFFLEVBQUUsUUFIYTtBQUlqQkMsaUJBQVMsRUFBRTtBQUpNLE9BQUQsQ0FEbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERCxlQVlDLHFFQUFDLHlEQUFEO0FBQUEsOEJBQ0MscUVBQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERCxlQUdDLHFFQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEQsZUFLQyxxRUFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUxEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUREO0FBc0JBOztHQXJDUWQsTTtVQUdrREUscUQ7OztLQUhsREYsTTtBQXVDTUEscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC42MTYxNjEzNDZhNGIyNTBiNmYwNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVzZXRJZENvdW50ZXIsIHVzZUNvbWJvYm94IH0gZnJvbSBcImRvd25zaGlmdFwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFNlYXJjaFN0eWxlcywgRHJvcERvd24sIERyb3BEb3duSXRlbSB9IGZyb20gXCIuL3N0eWxlcy9Ecm9wRG93blwiO1xyXG5cclxuZnVuY3Rpb24gU2VhcmNoKCkge1xyXG5cdC8vIFRoaXMgdGFrZXMgY2FyZSBhbnkgc2VydmVyIHNpZGUgcmVuZGVyaW5nIGlzc3VlcyB5b3UgbWF5IGhhdmVcclxuXHRyZXNldElkQ291bnRlcigpO1xyXG5cdGNvbnN0IHsgZ2V0TWVudVByb3BzLCBnZXRJbnB1dFByb3BzLCBnZXRDb21ib2JveFByb3BzIH0gPSB1c2VDb21ib2JveCh7XHJcblx0XHRpdGVtczogW10sXHJcblx0XHQvLyBGaXJlIHdoZW4gaW5wdXQgZGV0ZWN0ZWQgaW4gdGhlIHNlYXJjaCBib3hcclxuXHRcdG9uSW5wdXRWYWx1ZUNoYW5nZSgpIHtcclxuXHRcdFx0Y29uc29sZS5sb2coXCJJbnB1dCBjaGFuZ2VkXCIpO1xyXG5cdFx0fSxcclxuXHRcdC8vIEZpcmUgd2hlbiBzb21lb25lIHNlbGVjdCBhbiBpdGVtIGZyb20gZHJvcGJvd24gYm94XHJcblx0XHRvblNlbGVjdGVkSXRlbUNoYW5nZSgpIHtcclxuXHRcdFx0Y29uc29sZS5sb2coXCJTZWxlY3RlZCBpdGVtIGNoYW5nZVwiKTtcclxuXHRcdH0sXHJcblx0fSk7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8U2VhcmNoU3R5bGVzPlxyXG5cdFx0XHQ8ZGl2IHsuLi5nZXRDb21ib2JveFByb3BzKCl9PlxyXG5cdFx0XHRcdDxpbnB1dFxyXG5cdFx0XHRcdFx0ey4uLmdldElucHV0UHJvcHMoe1xyXG5cdFx0XHRcdFx0XHR0eXBlOiBcInNlYXJjaFwiLFxyXG5cdFx0XHRcdFx0XHRwbGFjZWhvbGRlcjogXCJTZWFyY2ggZm9yIGFuIGl0ZW1cIixcclxuXHRcdFx0XHRcdFx0aWQ6IFwic2VhcmNoXCIsXHJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZTogXCJsb2FkaW5nXCIsXHJcblx0XHRcdFx0XHR9KX1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdDxEcm9wRG93bj5cclxuXHRcdFx0XHQ8RHJvcERvd25JdGVtPldvYWg8L0Ryb3BEb3duSXRlbT5cclxuXHJcblx0XHRcdFx0PERyb3BEb3duSXRlbT5Xb2FoPC9Ecm9wRG93bkl0ZW0+XHJcblxyXG5cdFx0XHRcdDxEcm9wRG93bkl0ZW0+V29haDwvRHJvcERvd25JdGVtPlxyXG5cdFx0XHQ8L0Ryb3BEb3duPlxyXG5cdFx0PC9TZWFyY2hTdHlsZXM+XHJcblx0KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9