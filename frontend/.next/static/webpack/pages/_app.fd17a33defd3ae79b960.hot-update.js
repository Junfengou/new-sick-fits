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

  var _this = this;

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
      findItemButChillBruh({
        variables: {
          searchTerm: inputValue
        }
      });
    },
    // Fire when someone select an item from dropbown box
    onSelectedItemChange: function onSelectedItemChange() {
      console.log("Selected item change");
    }
  }),
      inputValue = _useCombobox.inputValue,
      getMenuProps = _useCombobox.getMenuProps,
      getInputProps = _useCombobox.getInputProps,
      getComboboxProps = _useCombobox.getComboboxProps;

  var items = (data === null || data === void 0 ? void 0 : data.searchTerm) || [];
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_styles_DropDown__WEBPACK_IMPORTED_MODULE_7__["SearchStyles"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", _objectSpread(_objectSpread({}, getComboboxProps()), {}, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", _objectSpread({}, getInputProps({
        type: "search",
        placeholder: "Search for an item",
        id: "search",
        className: "loading"
      })), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 5
      }, this)
    }), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_styles_DropDown__WEBPACK_IMPORTED_MODULE_7__["DropDown"], _objectSpread(_objectSpread({}, getMenuProps()), {}, {
      children: items.map(function (item) {
        /*#__PURE__*/
        Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_styles_DropDown__WEBPACK_IMPORTED_MODULE_7__["DropDownItem"], {
          children: item.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 6
        }, _this);
      })
    }), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 4
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 78,
    columnNumber: 3
  }, this);
}

_s(Search, "xOTxEIYbNYWpTCUp71ZALx6vcGY=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TZWFyY2guanMiXSwibmFtZXMiOlsiU0VBUkNIX1BST0RVQ1RfUVVFUlkiLCJncWwiLCJTZWFyY2giLCJ1c2VMYXp5UXVlcnkiLCJmZXRjaFBvbGljeSIsImZpbmRJdGVtcyIsImRhdGEiLCJsb2FkaW5nIiwiZXJyb3IiLCJmaW5kSXRlbUJ1dENoaWxsQnJ1aCIsImRlYm91bmNlIiwicmVzZXRJZENvdW50ZXIiLCJ1c2VDb21ib2JveCIsIml0ZW1zIiwib25JbnB1dFZhbHVlQ2hhbmdlIiwiY29uc29sZSIsImxvZyIsInZhcmlhYmxlcyIsInNlYXJjaFRlcm0iLCJpbnB1dFZhbHVlIiwib25TZWxlY3RlZEl0ZW1DaGFuZ2UiLCJnZXRNZW51UHJvcHMiLCJnZXRJbnB1dFByb3BzIiwiZ2V0Q29tYm9ib3hQcm9wcyIsInR5cGUiLCJwbGFjZWhvbGRlciIsImlkIiwiY2xhc3NOYW1lIiwibWFwIiwiaXRlbSIsIm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsb0JBQW9CLEdBQUdDLGtEQUFILG1CQUExQjs7QUFxQkEsU0FBU0MsTUFBVCxHQUFrQjtBQUFBOztBQUFBOztBQUNqQjtBQUNBO0FBRmlCLHNCQUc2QkMsbUVBQVksQ0FDekRILG9CQUR5RCxFQUV6RDtBQUNDO0FBQ0FJLGVBQVcsRUFBRTtBQUZkLEdBRnlELENBSHpDO0FBQUE7QUFBQSxNQUdWQyxTQUhVO0FBQUE7QUFBQSxNQUdHQyxJQUhILG1CQUdHQSxJQUhIO0FBQUEsTUFHU0MsT0FIVCxtQkFHU0EsT0FIVDtBQUFBLE1BR2tCQyxLQUhsQixtQkFHa0JBLEtBSGxCO0FBV2pCO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNDLE1BQU1DLG9CQUFvQixHQUFHQyxzREFBUSxDQUFDTCxTQUFELEVBQVksR0FBWixDQUFyQyxDQW5CaUIsQ0FxQmpCOztBQUNBTSxrRUFBYzs7QUF0QkcscUJBNEJiQyw2REFBVyxDQUFDO0FBQ2ZDLFNBQUssRUFBRSxFQURRO0FBRWY7QUFDQUMsc0JBSGUsZ0NBR007QUFDcEJDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLGVBQVo7QUFDQVAsMEJBQW9CLENBQUM7QUFDcEJRLGlCQUFTLEVBQUU7QUFDVkMsb0JBQVUsRUFBRUM7QUFERjtBQURTLE9BQUQsQ0FBcEI7QUFLQSxLQVZjO0FBWWY7QUFDQUMsd0JBYmUsa0NBYVE7QUFDdEJMLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLHNCQUFaO0FBQ0E7QUFmYyxHQUFELENBNUJFO0FBQUEsTUF3QmhCRyxVQXhCZ0IsZ0JBd0JoQkEsVUF4QmdCO0FBQUEsTUF5QmhCRSxZQXpCZ0IsZ0JBeUJoQkEsWUF6QmdCO0FBQUEsTUEwQmhCQyxhQTFCZ0IsZ0JBMEJoQkEsYUExQmdCO0FBQUEsTUEyQmhCQyxnQkEzQmdCLGdCQTJCaEJBLGdCQTNCZ0I7O0FBOENqQixNQUFNVixLQUFLLEdBQUcsQ0FBQVAsSUFBSSxTQUFKLElBQUFBLElBQUksV0FBSixZQUFBQSxJQUFJLENBQUVZLFVBQU4sS0FBb0IsRUFBbEM7QUFFQSxzQkFDQyxxRUFBQyw2REFBRDtBQUFBLDRCQUNDLDRHQUFTSyxnQkFBZ0IsRUFBekI7QUFBQSw2QkFDQyxnR0FDS0QsYUFBYSxDQUFDO0FBQ2pCRSxZQUFJLEVBQUUsUUFEVztBQUVqQkMsbUJBQVcsRUFBRSxvQkFGSTtBQUdqQkMsVUFBRSxFQUFFLFFBSGE7QUFJakJDLGlCQUFTLEVBQUU7QUFKTSxPQUFELENBRGxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREQsZUFZQyxxRUFBQyx5REFBRCxrQ0FBY04sWUFBWSxFQUExQjtBQUFBLGdCQUNFUixLQUFLLENBQUNlLEdBQU4sQ0FBVSxVQUFDQyxJQUFELEVBQVU7QUFDcEI7QUFBQSw2RUFBQyw2REFBRDtBQUFBLG9CQUFlQSxJQUFJLENBQUNDO0FBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQSxPQUZBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUREO0FBb0JBOztHQXBFUTVCLE07VUFHc0NDLDJELEVBeUIxQ1MscUQ7OztLQTVCSVYsTTtBQXNFTUEscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5mZDE3YTMzZGVmZDNhZTc5Yjk2MC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgZ3FsIGZyb20gXCJncmFwaHFsLXRhZ1wiO1xyXG5pbXBvcnQgeyByZXNldElkQ291bnRlciwgdXNlQ29tYm9ib3ggfSBmcm9tIFwiZG93bnNoaWZ0XCI7XHJcbmltcG9ydCB7IFNlYXJjaFN0eWxlcywgRHJvcERvd24sIERyb3BEb3duSXRlbSB9IGZyb20gXCIuL3N0eWxlcy9Ecm9wRG93blwiO1xyXG5pbXBvcnQgeyB1c2VMYXp5UXVlcnkgfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcclxuaW1wb3J0IGRlYm91bmNlIGZyb20gXCJsb2Rhc2guZGVib3VuY2VcIjtcclxuXHJcbmNvbnN0IFNFQVJDSF9QUk9EVUNUX1FVRVJZID0gZ3FsYFxyXG5cdHF1ZXJ5IFNFQVJDSF9QUk9EVUNUX1FVRVJZKCRzZWFyY2hUZXJtOiBTdHJpbmchKSB7XHJcblx0XHRzZWFyY2hUZXJtOiBhbGxQcm9kdWN0cyhcclxuXHRcdFx0d2hlcmU6IHtcclxuXHRcdFx0XHRPUjogW1xyXG5cdFx0XHRcdFx0eyBuYW1lX2NvbnRhaW5zX2k6ICRzZWFyY2hUZXJtIH1cclxuXHRcdFx0XHRcdHsgZGVzY3JpcHRpb25fY29udGFpbnNfaTogJHNlYXJjaFRlcm0gfVxyXG5cdFx0XHRcdF1cclxuXHRcdFx0fVxyXG5cdFx0KSB7XHJcblx0XHRcdGlkXHJcblx0XHRcdG5hbWVcclxuXHRcdFx0cGhvdG8ge1xyXG5cdFx0XHRcdGltYWdlIHtcclxuXHRcdFx0XHRcdHB1YmxpY1VybFRyYW5zZm9ybWVkXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5gO1xyXG5cclxuZnVuY3Rpb24gU2VhcmNoKCkge1xyXG5cdC8vIEluc3RlYWQgb2YgZG9pbmcgW3VzZVF1ZXJ5XSB0aGF0IGhhcHBlbnMgb24gcGFnZSBsb2FkLCB3ZSB3YW50IHRvIGluc3RhbnRseSBxdWVyeSBpdCBieSBjb21tYW5kXHJcblx0Ly8gQWx3YXlzIGJ5cGFzcyB0aGUgYXBvbGxvIGNhY2hlIGFuZCBnbyBzdHJhaWdodCB0byB0aGUgbmV0d29ya1xyXG5cdGNvbnN0IFtmaW5kSXRlbXMsIHsgZGF0YSwgbG9hZGluZywgZXJyb3IgfV0gPSB1c2VMYXp5UXVlcnkoXHJcblx0XHRTRUFSQ0hfUFJPRFVDVF9RVUVSWSxcclxuXHRcdHtcclxuXHRcdFx0Ly9JTVBPUlRBTlQ6IGlmIHlvdSBkb24ndCBkbyB0aGlzLCBpdCB3aWxsIG9ubHkgcXVlcnkgd2hhdGV2ZXIgaXRlbSBpcyBvbiB0aGUgY3VycmVudCBwYWdpbmF0aW9uIHBhZ2VcclxuXHRcdFx0ZmV0Y2hQb2xpY3k6IFwibm8tY2FjaGVcIixcclxuXHRcdH1cclxuXHQpO1xyXG5cclxuXHQvKlxyXG4gICAgICAgIFRoZSBwdXJwb3NlIG9mIHRoaXMgbGluZSBvZiBjb2RlIGlzIHRvIHByZXZlbnQgdGhlIHNlcnZlciBmcm9tIGNyYXNoaW5nLiBcclxuICAgICAgICBHZW5lcmFsbHkgd2hlbiBhIHVzZXIgdHlwZSBpbiB0aGUgc2VhcmNoLCBlYWNoIGtleSB1cCBldmVudCB3aWxsIHRyaWdnZXIgYSBjYWxsIGJhY2sgdG8gdGhlIHNlcnZlci4gV2hlbiB0aGVyZSdzIGV4Y2Vzc2l2ZVxyXG4gICAgICAgIGFtb3VudCBvZiBjYWxscyBiYWNrIHRvIHRoZSBzZXJ2ZXIgaW4gYSBzaG9ydCBhbW91bnQgb2YgdGltZSwgaXQgd2lsbCBERG9TIHlvdXIgYmFja2VuZC4gXHJcblxyXG4gICAgICAgIE9uZSBnb29kIHdheSB0byBwcmV2ZW50IHRoYXQgZnJvbSBoYXBwZW5pbmcgaXMgdG8gdXNlIFtkZWJvdW5jZSgpXSBhbmQgc2V0IGEgdGltZXIgb24gaG93ZXZlcnkgbWFueSBzZWNvbmRzIHlvdSB3YW5uYSB3YWl0IGJlZm9yZVxyXG4gICAgICAgIHNlbmRpbmcgdGhlIHJlcXVlc3QgYXMgYSBwYWNrYWdlIGJhY2sgdG8gdGhlIHNlcnZlciBpbnN0ZWFkIG9mIHNlbmRpbmcgYSByZXF1ZXN0IGJhY2sgYWZ0ZXIgZXZlcnkga2V5IHVwIGV2ZW50XHJcbiAgICAgKi9cclxuXHRjb25zdCBmaW5kSXRlbUJ1dENoaWxsQnJ1aCA9IGRlYm91bmNlKGZpbmRJdGVtcywgMzUwKTtcclxuXHJcblx0Ly8gVGhpcyB0YWtlcyBjYXJlIGFueSBzZXJ2ZXIgc2lkZSByZW5kZXJpbmcgaXNzdWVzIHlvdSBtYXkgaGF2ZVxyXG5cdHJlc2V0SWRDb3VudGVyKCk7XHJcblx0Y29uc3Qge1xyXG5cdFx0aW5wdXRWYWx1ZSxcclxuXHRcdGdldE1lbnVQcm9wcyxcclxuXHRcdGdldElucHV0UHJvcHMsXHJcblx0XHRnZXRDb21ib2JveFByb3BzLFxyXG5cdH0gPSB1c2VDb21ib2JveCh7XHJcblx0XHRpdGVtczogW10sXHJcblx0XHQvLyBGaXJlIHdoZW4gaW5wdXQgZGV0ZWN0ZWQgaW4gdGhlIHNlYXJjaCBib3hcclxuXHRcdG9uSW5wdXRWYWx1ZUNoYW5nZSgpIHtcclxuXHRcdFx0Y29uc29sZS5sb2coXCJJbnB1dCBjaGFuZ2VkXCIpO1xyXG5cdFx0XHRmaW5kSXRlbUJ1dENoaWxsQnJ1aCh7XHJcblx0XHRcdFx0dmFyaWFibGVzOiB7XHJcblx0XHRcdFx0XHRzZWFyY2hUZXJtOiBpbnB1dFZhbHVlLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdH0pO1xyXG5cdFx0fSxcclxuXHJcblx0XHQvLyBGaXJlIHdoZW4gc29tZW9uZSBzZWxlY3QgYW4gaXRlbSBmcm9tIGRyb3Bib3duIGJveFxyXG5cdFx0b25TZWxlY3RlZEl0ZW1DaGFuZ2UoKSB7XHJcblx0XHRcdGNvbnNvbGUubG9nKFwiU2VsZWN0ZWQgaXRlbSBjaGFuZ2VcIik7XHJcblx0XHR9LFxyXG5cdH0pO1xyXG5cclxuXHRjb25zdCBpdGVtcyA9IGRhdGE/LnNlYXJjaFRlcm0gfHwgW107XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8U2VhcmNoU3R5bGVzPlxyXG5cdFx0XHQ8ZGl2IHsuLi5nZXRDb21ib2JveFByb3BzKCl9PlxyXG5cdFx0XHRcdDxpbnB1dFxyXG5cdFx0XHRcdFx0ey4uLmdldElucHV0UHJvcHMoe1xyXG5cdFx0XHRcdFx0XHR0eXBlOiBcInNlYXJjaFwiLFxyXG5cdFx0XHRcdFx0XHRwbGFjZWhvbGRlcjogXCJTZWFyY2ggZm9yIGFuIGl0ZW1cIixcclxuXHRcdFx0XHRcdFx0aWQ6IFwic2VhcmNoXCIsXHJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZTogXCJsb2FkaW5nXCIsXHJcblx0XHRcdFx0XHR9KX1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdDxEcm9wRG93biB7Li4uZ2V0TWVudVByb3BzKCl9PlxyXG5cdFx0XHRcdHtpdGVtcy5tYXAoKGl0ZW0pID0+IHtcclxuXHRcdFx0XHRcdDxEcm9wRG93bkl0ZW0+e2l0ZW0ubmFtZX08L0Ryb3BEb3duSXRlbT47XHJcblx0XHRcdFx0fSl9XHJcblx0XHRcdDwvRHJvcERvd24+XHJcblx0XHQ8L1NlYXJjaFN0eWxlcz5cclxuXHQpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZWFyY2g7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=