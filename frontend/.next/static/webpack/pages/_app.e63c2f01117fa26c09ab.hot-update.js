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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);





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
  var items = (data === null || data === void 0 ? void 0 : data.searchTerm) || [];
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_10__["useRouter"])();

  var _useCombobox = Object(downshift__WEBPACK_IMPORTED_MODULE_6__["useCombobox"])({
    items: items,
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
    onSelectedItemChange: function onSelectedItemChange(_ref) {
      var selectedItem = _ref.selectedItem;
      router.push({
        pathname: "/product/".concat(selectedItem.id)
      });
    }
  }),
      isOpen = _useCombobox.isOpen,
      inputValue = _useCombobox.inputValue,
      getMenuProps = _useCombobox.getMenuProps,
      getInputProps = _useCombobox.getInputProps,
      getComboboxProps = _useCombobox.getComboboxProps,
      getItemProps = _useCombobox.getItemProps,
      highlightedIndex = _useCombobox.highlightedIndex;

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_styles_DropDown__WEBPACK_IMPORTED_MODULE_7__["SearchStyles"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", _objectSpread(_objectSpread({}, getComboboxProps()), {}, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", _objectSpread({}, getInputProps({
        type: "search",
        placeholder: "Search for an item",
        id: "search",
        className: loading ? "loading" : ""
      })), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 5
      }, this)
    }), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_styles_DropDown__WEBPACK_IMPORTED_MODULE_7__["DropDown"], _objectSpread(_objectSpread({}, getMenuProps()), {}, {
      children: [isOpen && items.map(function (item, index) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_styles_DropDown__WEBPACK_IMPORTED_MODULE_7__["DropDownItem"], _objectSpread(_objectSpread({}, getItemProps({
          item: item
        })), {}, {
          highlighted: index === highlightedIndex,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("img", {
            src: item.photo.image.publicUrlTransformed,
            alt: item.name,
            width: "50px"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 107,
            columnNumber: 8
          }, _this), item.name]
        }), item.id, true, {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 7
        }, _this);
      }), isOpen && !items.length && !loading && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_styles_DropDown__WEBPACK_IMPORTED_MODULE_7__["DropDownItem"], {
        children: ["Sorry, no item found for ", inputValue]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 6
      }, this)]
    }), void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 4
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 87,
    columnNumber: 3
  }, this);
}

_s(Search, "oQzvrFAcHaw7HIxg7eUiXLvwWgk=", false, function () {
  return [_apollo_client__WEBPACK_IMPORTED_MODULE_8__["useLazyQuery"], next_router__WEBPACK_IMPORTED_MODULE_10__["useRouter"], downshift__WEBPACK_IMPORTED_MODULE_6__["useCombobox"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TZWFyY2guanMiXSwibmFtZXMiOlsiU0VBUkNIX1BST0RVQ1RfUVVFUlkiLCJncWwiLCJTZWFyY2giLCJ1c2VMYXp5UXVlcnkiLCJmZXRjaFBvbGljeSIsImZpbmRJdGVtcyIsImRhdGEiLCJsb2FkaW5nIiwiZXJyb3IiLCJmaW5kSXRlbUJ1dENoaWxsQnJ1aCIsImRlYm91bmNlIiwicmVzZXRJZENvdW50ZXIiLCJpdGVtcyIsInNlYXJjaFRlcm0iLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VDb21ib2JveCIsIm9uSW5wdXRWYWx1ZUNoYW5nZSIsImNvbnNvbGUiLCJsb2ciLCJ2YXJpYWJsZXMiLCJpbnB1dFZhbHVlIiwib25TZWxlY3RlZEl0ZW1DaGFuZ2UiLCJzZWxlY3RlZEl0ZW0iLCJwdXNoIiwicGF0aG5hbWUiLCJpZCIsImlzT3BlbiIsImdldE1lbnVQcm9wcyIsImdldElucHV0UHJvcHMiLCJnZXRDb21ib2JveFByb3BzIiwiZ2V0SXRlbVByb3BzIiwiaGlnaGxpZ2h0ZWRJbmRleCIsInR5cGUiLCJwbGFjZWhvbGRlciIsImNsYXNzTmFtZSIsIm1hcCIsIml0ZW0iLCJpbmRleCIsInBob3RvIiwiaW1hZ2UiLCJwdWJsaWNVcmxUcmFuc2Zvcm1lZCIsIm5hbWUiLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLG9CQUFvQixHQUFHQyxrREFBSCxtQkFBMUI7O0FBcUJBLFNBQVNDLE1BQVQsR0FBa0I7QUFBQTs7QUFBQTs7QUFDakI7QUFDQTtBQUZpQixzQkFHNkJDLG1FQUFZLENBQ3pESCxvQkFEeUQsRUFFekQ7QUFDQztBQUNBSSxlQUFXLEVBQUU7QUFGZCxHQUZ5RCxDQUh6QztBQUFBO0FBQUEsTUFHVkMsU0FIVTtBQUFBO0FBQUEs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QUFBO0FBQUE7QUFBQTtBQUFBLFVBREQ7QUFtQ0E7O0dBM0ZRbkIsTTtVQUdzQ0MsMkQsRUF1Qi9CWSxzRCxFQVVYQyxxRDs7O0tBcENJZCxNO0FBNkZNQSxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmU2M2MyZjAxMTE3ZmEyNmMwOWFiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBncWwgZnJvbSBcImdyYXBocWwtdGFnXCI7XHJcbmltcG9ydCB7IHJlc2V0SWRDb3VudGVyLCB1c2VDb21ib2JveCB9IGZyb20gXCJkb3duc2hpZnRcIjtcclxuaW1wb3J0IHsgU2VhcmNoU3R5bGVzLCBEcm9wRG93biwgRHJvcERvd25JdGVtIH0gZnJvbSBcIi4vc3R5bGVzL0Ryb3BEb3duXCI7XHJcbmltcG9ydCB7IHVzZUxhenlRdWVyeSB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xyXG5pbXBvcnQgZGVib3VuY2UgZnJvbSBcImxvZGFzaC5kZWJvdW5jZVwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmNvbnN0IFNFQVJDSF9QUk9EVUNUX1FVRVJZID0gZ3FsYFxyXG5cdHF1ZXJ5IFNFQVJDSF9QUk9EVUNUX1FVRVJZKCRzZWFyY2hUZXJtOiBTdHJpbmchKSB7XHJcblx0XHRzZWFyY2hUZXJtOiBhbGxQcm9kdWN0cyhcclxuXHRcdFx0d2hlcmU6IHtcclxuXHRcdFx0XHRPUjogW1xyXG5cdFx0XHRcdFx0eyBuYW1lX2NvbnRhaW5zX2k6ICRzZWFyY2hUZXJtIH1cclxuXHRcdFx0XHRcdHsgZGVzY3JpcHRpb25fY29udGFpbnNfaTogJHNlYXJjaFRlcm0gfVxyXG5cdFx0XHRcdF1cclxuXHRcdFx0fVxyXG5cdFx0KSB7XHJcblx0XHRcdGlkXHJcblx0XHRcdG5hbWVcclxuXHRcdFx0cGhvdG8ge1xyXG5cdFx0XHRcdGltYWdlIHtcclxuXHRcdFx0XHRcdHB1YmxpY1VybFRyYW5zZm9ybWVkXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5gO1xyXG5cclxuZnVuY3Rpb24gU2VhcmNoKCkge1xyXG5cdC8vIEluc3RlYWQgb2YgZG9pbmcgW3VzZVF1ZXJ5XSB0aGF0IGhhcHBlbnMgb24gcGFnZSBsb2FkLCB3ZSB3YW50IHRvIGluc3RhbnRseSBxdWVyeSBpdCBieSBjb21tYW5kXHJcblx0Ly8gQWx3YXlzIGJ5cGFzcyB0aGUgYXBvbGxvIGNhY2hlIGFuZCBnbyBzdHJhaWdodCB0byB0aGUgbmV0d29ya1xyXG5cdGNvbnN0IFtmaW5kSXRlbXMsIHsgZGF0YSwgbG9hZGluZywgZXJyb3IgfV0gPSB1c2VMYXp5UXVlcnkoXHJcblx0XHRTRUFSQ0hfUFJPRFVDVF9RVUVSWSxcclxuXHRcdHtcclxuXHRcdFx0Ly9JTVBPUlRBTlQ6IGlmIHlvdSBkb24ndCBkbyB0aGlzLCBpdCB3aWxsIG9ubHkgcXVlcnkgd2hhdGV2ZXIgaXRlbSBpcyBvbiB0aGUgY3VycmVudCBwYWdpbmF0aW9uIHBhZ2VcclxuXHRcdFx0ZmV0Y2hQb2xpY3k6IFwibm8tY2FjaGVcIixcclxuXHRcdH1cclxuXHQpO1xyXG5cclxuXHQvKlxyXG4gICAgICAgIFRoZSBwdXJwb3NlIG9mIHRoaXMgbGluZSBvZiBjb2RlIGlzIHRvIHByZXZlbnQgdGhlIHNlcnZlciBmcm9tIGNyYXNoaW5nLiBcclxuICAgICAgICBHZW5lcmFsbHkgd2hlbiBhIHVzZXIgdHlwZSBpbiB0aGUgc2VhcmNoLCBlYWNoIGtleSB1cCBldmVudCB3aWxsIHRyaWdnZXIgYSBjYWxsIGJhY2sgdG8gdGhlIHNlcnZlci4gV2hlbiB0aGVyZSdzIGV4Y2Vzc2l2ZVxyXG4gICAgICAgIGFtb3VudCBvZiBjYWxscyBiYWNrIHRvIHRoZSBzZXJ2ZXIgaW4gYSBzaG9ydCBhbW91bnQgb2YgdGltZSwgaXQgd2lsbCBERG9TIHlvdXIgYmFja2VuZC4gXHJcblxyXG4gICAgICAgIE9uZSBnb29kIHdheSB0byBwcmV2ZW50IHRoYXQgZnJvbSBoYXBwZW5pbmcgaXMgdG8gdXNlIFtkZWJvdW5jZSgpXSBhbmQgc2V0IGEgdGltZXIgb24gaG93ZXZlcnkgbWFueSBzZWNvbmRzIHlvdSB3YW5uYSB3YWl0IGJlZm9yZVxyXG4gICAgICAgIHNlbmRpbmcgdGhlIHJlcXVlc3QgYXMgYSBwYWNrYWdlIGJhY2sgdG8gdGhlIHNlcnZlciBpbnN0ZWFkIG9mIHNlbmRpbmcgYSByZXF1ZXN0IGJhY2sgYWZ0ZXIgZXZlcnkga2V5IHVwIGV2ZW50XHJcbiAgICAgKi9cclxuXHRjb25zdCBmaW5kSXRlbUJ1dENoaWxsQnJ1aCA9IGRlYm91bmNlKGZpbmRJdGVtcywgMzUwKTtcclxuXHJcblx0Ly8gVGhpcyB0YWtlcyBjYXJlIGFueSBzZXJ2ZXIgc2lkZSByZW5kZXJpbmcgaXNzdWVzIHlvdSBtYXkgaGF2ZVxyXG5cdHJlc2V0SWRDb3VudGVyKCk7XHJcblxyXG5cdGNvbnN0IGl0ZW1zID0gZGF0YT8uc2VhcmNoVGVybSB8fCBbXTtcclxuXHJcblx0Y29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG5cdGNvbnN0IHtcclxuXHRcdGlzT3BlbixcclxuXHRcdGlucHV0VmFsdWUsXHJcblx0XHRnZXRNZW51UHJvcHMsXHJcblx0XHRnZXRJbnB1dFByb3BzLFxyXG5cdFx0Z2V0Q29tYm9ib3hQcm9wcyxcclxuXHRcdGdldEl0ZW1Qcm9wcyxcclxuXHRcdGhpZ2hsaWdodGVkSW5kZXgsXHJcblx0fSA9IHVzZUNvbWJvYm94KHtcclxuXHRcdGl0ZW1zOiBpdGVtcyxcclxuXHRcdC8vIEZpcmUgd2hlbiBpbnB1dCBkZXRlY3RlZCBpbiB0aGUgc2VhcmNoIGJveFxyXG5cdFx0b25JbnB1dFZhbHVlQ2hhbmdlKCkge1xyXG5cdFx0XHRjb25zb2xlLmxvZyhcIklucHV0IGNoYW5nZWRcIik7XHJcblx0XHRcdGZpbmRJdGVtQnV0Q2hpbGxCcnVoKHtcclxuXHRcdFx0XHR2YXJpYWJsZXM6IHtcclxuXHRcdFx0XHRcdHNlYXJjaFRlcm06IGlucHV0VmFsdWUsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0fSk7XHJcblx0XHR9LFxyXG5cclxuXHRcdC8vIEZpcmUgd2hlbiBzb21lb25lIHNlbGVjdCBhbiBpdGVtIGZyb20gZHJvcGJvd24gYm94XHJcblx0XHRvblNlbGVjdGVkSXRlbUNoYW5nZSh7IHNlbGVjdGVkSXRlbSB9KSB7XHJcblx0XHRcdHJvdXRlci5wdXNoKHtcclxuXHRcdFx0XHRwYXRobmFtZTogYC9wcm9kdWN0LyR7c2VsZWN0ZWRJdGVtLmlkfWAsXHJcblx0XHRcdH0pO1xyXG5cdFx0fSxcclxuXHR9KTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxTZWFyY2hTdHlsZXM+XHJcblx0XHRcdDxkaXYgey4uLmdldENvbWJvYm94UHJvcHMoKX0+XHJcblx0XHRcdFx0PGlucHV0XHJcblx0XHRcdFx0XHR7Li4uZ2V0SW5wdXRQcm9wcyh7XHJcblx0XHRcdFx0XHRcdHR5cGU6IFwic2VhcmNoXCIsXHJcblx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyOiBcIlNlYXJjaCBmb3IgYW4gaXRlbVwiLFxyXG5cdFx0XHRcdFx0XHRpZDogXCJzZWFyY2hcIixcclxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lOiBsb2FkaW5nID8gXCJsb2FkaW5nXCIgOiBcIlwiLFxyXG5cdFx0XHRcdFx0fSl9XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHQ8RHJvcERvd24gey4uLmdldE1lbnVQcm9wcygpfT5cclxuXHRcdFx0XHR7aXNPcGVuICYmXHJcblx0XHRcdFx0XHRpdGVtcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcblx0XHRcdFx0XHRcdDxEcm9wRG93bkl0ZW1cclxuXHRcdFx0XHRcdFx0XHRrZXk9e2l0ZW0uaWR9XHJcblx0XHRcdFx0XHRcdFx0ey4uLmdldEl0ZW1Qcm9wcyh7IGl0ZW0gfSl9XHJcblx0XHRcdFx0XHRcdFx0aGlnaGxpZ2h0ZWQ9e2luZGV4ID09PSBoaWdobGlnaHRlZEluZGV4fVxyXG5cdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0PGltZ1xyXG5cdFx0XHRcdFx0XHRcdFx0c3JjPXtpdGVtLnBob3RvLmltYWdlLnB1YmxpY1VybFRyYW5zZm9ybWVkfVxyXG5cdFx0XHRcdFx0XHRcdFx0YWx0PXtpdGVtLm5hbWV9XHJcblx0XHRcdFx0XHRcdFx0XHR3aWR0aD1cIjUwcHhcIlxyXG5cdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0e2l0ZW0ubmFtZX1cclxuXHRcdFx0XHRcdFx0PC9Ecm9wRG93bkl0ZW0+XHJcblx0XHRcdFx0XHQpKX1cclxuXHRcdFx0XHR7aXNPcGVuICYmICFpdGVtcy5sZW5ndGggJiYgIWxvYWRpbmcgJiYgKFxyXG5cdFx0XHRcdFx0PERyb3BEb3duSXRlbT5Tb3JyeSwgbm8gaXRlbSBmb3VuZCBmb3Ige2lucHV0VmFsdWV9PC9Ecm9wRG93bkl0ZW0+XHJcblx0XHRcdFx0KX1cclxuXHRcdFx0PC9Ecm9wRG93bj5cclxuXHRcdDwvU2VhcmNoU3R5bGVzPlxyXG5cdCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlYXJjaDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==