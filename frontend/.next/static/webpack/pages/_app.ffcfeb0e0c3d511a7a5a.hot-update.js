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
/* harmony import */ var D_React_Advanced_React_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var D_React_Advanced_React_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var downshift__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! downshift */ "./node_modules/downshift/dist/downshift.esm.js");
/* harmony import */ var _styles_DropDown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles/DropDown */ "./components/styles/DropDown.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash.debounce */ "./node_modules/lodash.debounce/index.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_9__);





var _jsxFileName = "D:\\React\\Advanced-React\\Advanced-React\\sick-fits\\frontend\\components\\Search.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(D_React_Advanced_React_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _templateObject() {
  var data = Object(D_React_Advanced_React_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__["default"])(["\n\tquery SEARCH_PRODUCT_QUERY($searchTerm: String!) {\n\t\tsearchTerm: allProducts(\n\t\t\twhere: {\n\t\t\t\tOR: [\n\t\t\t\t\t{ name_contains_i: $searchTerm }\n\t\t\t\t\t{ description_contains_i: $searchTerm }\n\t\t\t\t]\n\t\t\t}\n\t\t) {\n\t\t\tid\n\t\t\tname\n\t\t\tphoto {\n\t\t\t\timage {\n\t\t\t\t\tpublicUrlTransformed\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}







var SEARCH_PRODUCT_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject());

function Search() {
  _s();

  // Instead of doing [useQuery] that happens on page load, we want to instantly query it by command
  // Always bypass the apollo cache and go straight to the network
  var _useLazyQuery = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_8__["useLazyQuery"])(SEARCH_PRODUCT_QUERY, {
    //IMPORTANT: if you don't do this, it will only query whatever item is on the current pagination page
    fetchPolicy: "no-cache"
  }),
      _useLazyQuery2 = Object(D_React_Advanced_React_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useLazyQuery, 2),
      findItems = _useLazyQuery2[0],
      _useLazyQuery2$ = _useLazyQuery2[1],
      data = _useLazyQuery2$.data,
      loading = _useLazyQuery2$.loading,
      error = _useLazyQuery2$.error;
  /*
         The purpose of this line of code is to prevent the server from crashing. 
         Generally when a user type in the search, each key up event will trigger a call back to the server. When there's excessive
         amount of calls back to the server in a short amount of time, it will DDoS your backend. 
  
         One good way to prevent that from happening is to use [debounce()] and set a timer on howevery many seconds you wanna wait before
         sending the request as a package back to the server instead of sending a request back after every key up event
      */


  var findItemButChillBruh = lodash_debounce__WEBPACK_IMPORTED_MODULE_9___default()(findItems, 350); // This takes care any server side rendering issues you may have

  Object(downshift__WEBPACK_IMPORTED_MODULE_6__["resetIdCounter"])();

  var _useCombobox = Object(downshift__WEBPACK_IMPORTED_MODULE_6__["useCombobox"])({
    items: [],
    // Fire when input detected in the search box
    onInputValueChange: function onInputValueChange() {
      console.log("Input changed");
      findItemButChillBruh();
    },
    // Fire when someone select an item from dropbown box
    onSelectedItemChange: function onSelectedItemChange() {
      console.log("Selected item change");
    }
  }),
      getMenuProps = _useCombobox.getMenuProps,
      getInputProps = _useCombobox.getInputProps,
      getComboboxProps = _useCombobox.getComboboxProps;

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_styles_DropDown__WEBPACK_IMPORTED_MODULE_7__["SearchStyles"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", _objectSpread(_objectSpread({}, getComboboxProps()), {}, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", _objectSpread({}, getInputProps({
        type: "search",
        placeholder: "Search for an item",
        id: "search",
        className: "loading"
      })), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 5
      }, this)
    }), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_styles_DropDown__WEBPACK_IMPORTED_MODULE_7__["DropDown"], _objectSpread(_objectSpread({}, getMenuProps()), {}, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_styles_DropDown__WEBPACK_IMPORTED_MODULE_7__["DropDownItem"], {
        children: "Woah"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 5
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_styles_DropDown__WEBPACK_IMPORTED_MODULE_7__["DropDownItem"], {
        children: "Woah"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 5
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_styles_DropDown__WEBPACK_IMPORTED_MODULE_7__["DropDownItem"], {
        children: "Woah"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 5
      }, this)]
    }), void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 4
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 66,
    columnNumber: 3
  }, this);
}

_s(Search, "htrw7fO1Oe6ESywwczqz6xEgGDk=", false, function () {
  return [_apollo_client__WEBPACK_IMPORTED_MODULE_8__["useLazyQuery"], downshift__WEBPACK_IMPORTED_MODULE_6__["useCombobox"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TZWFyY2guanMiXSwibmFtZXMiOlsiU0VBUkNIX1BST0RVQ1RfUVVFUlkiLCJncWwiLCJTZWFyY2giLCJ1c2VMYXp5UXVlcnkiLCJmZXRjaFBvbGljeSIsImZpbmRJdGVtcyIsImRhdGEiLCJsb2FkaW5nIiwiZXJyb3IiLCJmaW5kSXRlbUJ1dENoaWxsQnJ1aCIsImRlYm91bmNlIiwicmVzZXRJZENvdW50ZXIiLCJ1c2VDb21ib2JveCIsIml0ZW1zIiwib25JbnB1dFZhbHVlQ2hhbmdlIiwiY29uc29sZSIsImxvZyIsIm9uU2VsZWN0ZWRJdGVtQ2hhbmdlIiwiZ2V0TWVudVByb3BzIiwiZ2V0SW5wdXRQcm9wcyIsImdldENvbWJvYm94UHJvcHMiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJpZCIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxvQkFBb0IsR0FBR0Msa0RBQUgsbUJBQTFCOztBQXFCQSxTQUFTQyxNQUFULEdBQWtCO0FBQUE7O0FBQ2pCO0FBQ0E7QUFGaUIsc0JBRzZCQyxtRUFBWSxDQUN6REgsb0JBRHlELEVBRXpEO0FBQ0M7QUFDQUksZUFBVyxFQUFFO0FBRmQsR0FGeUQsQ0FIekM7QUFBQTtBQUFBLE1BR1ZDLFNBSFU7QUFBQTtBQUFBLE1BR0dDLElBSEgsbUJBR0dBLElBSEg7QUFBQSxNQUdTQyxPQUhULG1CQUdTQSxPQUhUO0FBQUEsTUFHa0JDLEtBSGxCLG1CQUdrQkEsS0FIbEI7QUFXakI7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0MsTUFBTUMsb0JBQW9CLEdBQUdDLHNEQUFRLENBQUNMLFNBQUQsRUFBWSxHQUFaLENBQXJDLENBbkJpQixDQXFCakI7O0FBQ0FNLGtFQUFjOztBQXRCRyxxQkF1QnlDQyw2REFBVyxDQUFDO0FBQ3JFQyxTQUFLLEVBQUUsRUFEOEQ7QUFFckU7QUFDQUMsc0JBSHFFLGdDQUdoRDtBQUNwQkMsYUFBTyxDQUFDQyxHQUFSLENBQVksZUFBWjtBQUNBUCwwQkFBb0I7QUFDcEIsS0FOb0U7QUFPckU7QUFDQVEsd0JBUnFFLGtDQVE5QztBQUN0QkYsYUFBTyxDQUFDQyxHQUFSLENBQVksc0JBQVo7QUFDQTtBQVZvRSxHQUFELENBdkJwRDtBQUFBLE1BdUJURSxZQXZCUyxnQkF1QlRBLFlBdkJTO0FBQUEsTUF1QktDLGFBdkJMLGdCQXVCS0EsYUF2Qkw7QUFBQSxNQXVCb0JDLGdCQXZCcEIsZ0JBdUJvQkEsZ0JBdkJwQjs7QUFvQ2pCLHNCQUNDLHFFQUFDLDZEQUFEO0FBQUEsNEJBQ0MsNEdBQVNBLGdCQUFnQixFQUF6QjtBQUFBLDZCQUNDLGdHQUNLRCxhQUFhLENBQUM7QUFDakJFLFlBQUksRUFBRSxRQURXO0FBRWpCQyxtQkFBVyxFQUFFLG9CQUZJO0FBR2pCQyxVQUFFLEVBQUUsUUFIYTtBQUlqQkMsaUJBQVMsRUFBRTtBQUpNLE9BQUQsQ0FEbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERCxlQVlDLHFFQUFDLHlEQUFELGtDQUFjTixZQUFZLEVBQTFCO0FBQUEsOEJBQ0MscUVBQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERCxlQUdDLHFFQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEQsZUFLQyxxRUFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUxEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUREO0FBc0JBOztHQTFEUWhCLE07VUFHc0NDLDJELEVBb0JZUyxxRDs7O0tBdkJsRFYsTTtBQTRETUEscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5mZmNmZWIwZTBjM2Q1MTFhN2E1YS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgZ3FsIGZyb20gXCJncmFwaHFsLXRhZ1wiO1xyXG5pbXBvcnQgeyByZXNldElkQ291bnRlciwgdXNlQ29tYm9ib3ggfSBmcm9tIFwiZG93bnNoaWZ0XCI7XHJcbmltcG9ydCB7IFNlYXJjaFN0eWxlcywgRHJvcERvd24sIERyb3BEb3duSXRlbSB9IGZyb20gXCIuL3N0eWxlcy9Ecm9wRG93blwiO1xyXG5pbXBvcnQgeyB1c2VMYXp5UXVlcnkgfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcclxuaW1wb3J0IGRlYm91bmNlIGZyb20gXCJsb2Rhc2guZGVib3VuY2VcIjtcclxuXHJcbmNvbnN0IFNFQVJDSF9QUk9EVUNUX1FVRVJZID0gZ3FsYFxyXG5cdHF1ZXJ5IFNFQVJDSF9QUk9EVUNUX1FVRVJZKCRzZWFyY2hUZXJtOiBTdHJpbmchKSB7XHJcblx0XHRzZWFyY2hUZXJtOiBhbGxQcm9kdWN0cyhcclxuXHRcdFx0d2hlcmU6IHtcclxuXHRcdFx0XHRPUjogW1xyXG5cdFx0XHRcdFx0eyBuYW1lX2NvbnRhaW5zX2k6ICRzZWFyY2hUZXJtIH1cclxuXHRcdFx0XHRcdHsgZGVzY3JpcHRpb25fY29udGFpbnNfaTogJHNlYXJjaFRlcm0gfVxyXG5cdFx0XHRcdF1cclxuXHRcdFx0fVxyXG5cdFx0KSB7XHJcblx0XHRcdGlkXHJcblx0XHRcdG5hbWVcclxuXHRcdFx0cGhvdG8ge1xyXG5cdFx0XHRcdGltYWdlIHtcclxuXHRcdFx0XHRcdHB1YmxpY1VybFRyYW5zZm9ybWVkXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5gO1xyXG5cclxuZnVuY3Rpb24gU2VhcmNoKCkge1xyXG5cdC8vIEluc3RlYWQgb2YgZG9pbmcgW3VzZVF1ZXJ5XSB0aGF0IGhhcHBlbnMgb24gcGFnZSBsb2FkLCB3ZSB3YW50IHRvIGluc3RhbnRseSBxdWVyeSBpdCBieSBjb21tYW5kXHJcblx0Ly8gQWx3YXlzIGJ5cGFzcyB0aGUgYXBvbGxvIGNhY2hlIGFuZCBnbyBzdHJhaWdodCB0byB0aGUgbmV0d29ya1xyXG5cdGNvbnN0IFtmaW5kSXRlbXMsIHsgZGF0YSwgbG9hZGluZywgZXJyb3IgfV0gPSB1c2VMYXp5UXVlcnkoXHJcblx0XHRTRUFSQ0hfUFJPRFVDVF9RVUVSWSxcclxuXHRcdHtcclxuXHRcdFx0Ly9JTVBPUlRBTlQ6IGlmIHlvdSBkb24ndCBkbyB0aGlzLCBpdCB3aWxsIG9ubHkgcXVlcnkgd2hhdGV2ZXIgaXRlbSBpcyBvbiB0aGUgY3VycmVudCBwYWdpbmF0aW9uIHBhZ2VcclxuXHRcdFx0ZmV0Y2hQb2xpY3k6IFwibm8tY2FjaGVcIixcclxuXHRcdH1cclxuXHQpO1xyXG5cclxuXHQvKlxyXG4gICAgICAgIFRoZSBwdXJwb3NlIG9mIHRoaXMgbGluZSBvZiBjb2RlIGlzIHRvIHByZXZlbnQgdGhlIHNlcnZlciBmcm9tIGNyYXNoaW5nLiBcclxuICAgICAgICBHZW5lcmFsbHkgd2hlbiBhIHVzZXIgdHlwZSBpbiB0aGUgc2VhcmNoLCBlYWNoIGtleSB1cCBldmVudCB3aWxsIHRyaWdnZXIgYSBjYWxsIGJhY2sgdG8gdGhlIHNlcnZlci4gV2hlbiB0aGVyZSdzIGV4Y2Vzc2l2ZVxyXG4gICAgICAgIGFtb3VudCBvZiBjYWxscyBiYWNrIHRvIHRoZSBzZXJ2ZXIgaW4gYSBzaG9ydCBhbW91bnQgb2YgdGltZSwgaXQgd2lsbCBERG9TIHlvdXIgYmFja2VuZC4gXHJcblxyXG4gICAgICAgIE9uZSBnb29kIHdheSB0byBwcmV2ZW50IHRoYXQgZnJvbSBoYXBwZW5pbmcgaXMgdG8gdXNlIFtkZWJvdW5jZSgpXSBhbmQgc2V0IGEgdGltZXIgb24gaG93ZXZlcnkgbWFueSBzZWNvbmRzIHlvdSB3YW5uYSB3YWl0IGJlZm9yZVxyXG4gICAgICAgIHNlbmRpbmcgdGhlIHJlcXVlc3QgYXMgYSBwYWNrYWdlIGJhY2sgdG8gdGhlIHNlcnZlciBpbnN0ZWFkIG9mIHNlbmRpbmcgYSByZXF1ZXN0IGJhY2sgYWZ0ZXIgZXZlcnkga2V5IHVwIGV2ZW50XHJcbiAgICAgKi9cclxuXHRjb25zdCBmaW5kSXRlbUJ1dENoaWxsQnJ1aCA9IGRlYm91bmNlKGZpbmRJdGVtcywgMzUwKTtcclxuXHJcblx0Ly8gVGhpcyB0YWtlcyBjYXJlIGFueSBzZXJ2ZXIgc2lkZSByZW5kZXJpbmcgaXNzdWVzIHlvdSBtYXkgaGF2ZVxyXG5cdHJlc2V0SWRDb3VudGVyKCk7XHJcblx0Y29uc3QgeyBnZXRNZW51UHJvcHMsIGdldElucHV0UHJvcHMsIGdldENvbWJvYm94UHJvcHMgfSA9IHVzZUNvbWJvYm94KHtcclxuXHRcdGl0ZW1zOiBbXSxcclxuXHRcdC8vIEZpcmUgd2hlbiBpbnB1dCBkZXRlY3RlZCBpbiB0aGUgc2VhcmNoIGJveFxyXG5cdFx0b25JbnB1dFZhbHVlQ2hhbmdlKCkge1xyXG5cdFx0XHRjb25zb2xlLmxvZyhcIklucHV0IGNoYW5nZWRcIik7XHJcblx0XHRcdGZpbmRJdGVtQnV0Q2hpbGxCcnVoKCk7XHJcblx0XHR9LFxyXG5cdFx0Ly8gRmlyZSB3aGVuIHNvbWVvbmUgc2VsZWN0IGFuIGl0ZW0gZnJvbSBkcm9wYm93biBib3hcclxuXHRcdG9uU2VsZWN0ZWRJdGVtQ2hhbmdlKCkge1xyXG5cdFx0XHRjb25zb2xlLmxvZyhcIlNlbGVjdGVkIGl0ZW0gY2hhbmdlXCIpO1xyXG5cdFx0fSxcclxuXHR9KTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxTZWFyY2hTdHlsZXM+XHJcblx0XHRcdDxkaXYgey4uLmdldENvbWJvYm94UHJvcHMoKX0+XHJcblx0XHRcdFx0PGlucHV0XHJcblx0XHRcdFx0XHR7Li4uZ2V0SW5wdXRQcm9wcyh7XHJcblx0XHRcdFx0XHRcdHR5cGU6IFwic2VhcmNoXCIsXHJcblx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyOiBcIlNlYXJjaCBmb3IgYW4gaXRlbVwiLFxyXG5cdFx0XHRcdFx0XHRpZDogXCJzZWFyY2hcIixcclxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lOiBcImxvYWRpbmdcIixcclxuXHRcdFx0XHRcdH0pfVxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0PERyb3BEb3duIHsuLi5nZXRNZW51UHJvcHMoKX0+XHJcblx0XHRcdFx0PERyb3BEb3duSXRlbT5Xb2FoPC9Ecm9wRG93bkl0ZW0+XHJcblxyXG5cdFx0XHRcdDxEcm9wRG93bkl0ZW0+V29haDwvRHJvcERvd25JdGVtPlxyXG5cclxuXHRcdFx0XHQ8RHJvcERvd25JdGVtPldvYWg8L0Ryb3BEb3duSXRlbT5cclxuXHRcdFx0PC9Ecm9wRG93bj5cclxuXHRcdDwvU2VhcmNoU3R5bGVzPlxyXG5cdCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlYXJjaDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==