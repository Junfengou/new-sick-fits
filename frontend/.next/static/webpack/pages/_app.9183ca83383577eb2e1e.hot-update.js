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
        className: loading ? "loading" : ""
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
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_styles_DropDown__WEBPACK_IMPORTED_MODULE_7__["DropDownItem"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("img", {
            src: item.photo.image.publicUrlTransformed,
            alt: item.name,
            width: "50px"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 93,
            columnNumber: 7
          }, _this), item.name]
        }, void 0, true, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TZWFyY2guanMiXSwibmFtZXMiOlsiU0VBUkNIX1BST0RVQ1RfUVVFUlkiLCJncWwiLCJTZWFyY2giLCJ1c2VMYXp5UXVlcnkiLCJmZXRjaFBvbGljeSIsImZpbmRJdGVtcyIsImRhdGEiLCJsb2FkaW5nIiwiZXJyb3IiLCJmaW5kSXRlbUJ1dENoaWxsQnJ1aCIsImRlYm91bmNlIiwicmVzZXRJZENvdW50ZXIiLCJ1c2VDb21ib2JveCIsIml0ZW1zIiwib25JbnB1dFZhbHVlQ2hhbmdlIiwiY29uc29sZSIsImxvZyIsInZhcmlhYmxlcyIsInNlYXJjaFRlcm0iLCJpbnB1dFZhbHVlIiwib25TZWxlY3RlZEl0ZW1DaGFuZ2UiLCJnZXRNZW51UHJvcHMiLCJnZXRJbnB1dFByb3BzIiwiZ2V0Q29tYm9ib3hQcm9wcyIsInR5cGUiLCJwbGFjZWhvbGRlciIsImlkIiwiY2xhc3NOYW1lIiwibWFwIiwiaXRlbSIsInBob3RvIiwiaW1hZ2UiLCJwdWJsaWNVcmxUcmFuc2Zvcm1lZCIsIm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsb0JBQW9CLEdBQUdDLGtEQUFILG1CQUExQjs7QUFxQkEsU0FBU0MsTUFBVCxHQUFrQjtBQUFBOztBQUFBOztBQUNqQjtBQUNBO0FBRmlCLHNCQUc2QkMsbUVBQVksQ0FDekRILG9CQUR5RCxFQUV6RDtBQUNDO0FBQ0FJLGVBQVcsRUFBRTtBQUZkLEdBRnlELENBSHpDO0FBQUE7QUFBQSxNQUdWQyxTQUhVO0FBQUE7QUFBQSxNQUdHQyxJQUhILG1CQUdHQSxJQUhIO0FBQUEsTUFHU0MsT0FIVCxtQkFHU0EsT0FIVDtBQUFBLE1BR2tCQyxLQUhsQixtQkFHa0JBLEtBSGxCO0FBV2pCO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNDLE1BQU1DLG9CQUFvQixHQUFHQyxzREFBUSxDQUFDTCxTQUFELEVBQVksR0FBWixDQUFyQyxDQW5CaUIsQ0FxQmpCOztBQUNBTSxrRUFBYzs7QUF0QkcscUJBNEJiQyw2REFBVyxDQUFDO0FBQ2ZDLFNBQUssRUFBRSxFQURRO0FBRWY7QUFDQUMsc0JBSGUsZ0NBR007QUFDcEJDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLGVBQVo7QUFDQVAsMEJBQW9CLENBQUM7QUFDcEJRLGlCQUFTLEVBQUU7QUFDVkMsb0JBQVUsRUFBRUM7QUFERjtBQURTLE9BQUQsQ0FBcEI7QUFLQSxLQVZjO0FBWWY7QUFDQUMsd0JBYmUsa0NBYVE7QUFDdEJMLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLHNCQUFaO0FBQ0E7QUFmYyxHQUFELENBNUJFO0FBQUEsTUF3QmhCRyxVQXhCZ0IsZ0JBd0JoQkEsVUF4QmdCO0FBQUEsTUF5QmhCRSxZQXpCZ0IsZ0JBeUJoQkEsWUF6QmdCO0FBQUEsTUEwQmhCQyxhQTFCZ0IsZ0JBMEJoQkEsYUExQmdCO0FBQUEsTUEyQmhCQyxnQkEzQmdCLGdCQTJCaEJBLGdCQTNCZ0I7O0FBOENqQixNQUFNVixLQUFLLEdBQUcsQ0FBQVAsSUFBSSxTQUFKLElBQUFBLElBQUksV0FBSixZQUFBQSxJQUFJLENBQUVZLFVBQU4sS0FBb0IsRUFBbEM7QUFFQSxzQkFDQyxxRUFBQyw2REFBRDtBQUFBLDRCQUNDLDRHQUFTSyxnQkFBZ0IsRUFBekI7QUFBQSw2QkFDQyxnR0FDS0QsYUFBYSxDQUFDO0FBQ2pCRSxZQUFJLEVBQUUsUUFEVztBQUVqQkMsbUJBQVcsRUFBRSxvQkFGSTtBQUdqQkMsVUFBRSxFQUFFLFFBSGE7QUFJakJDLGlCQUFTLEVBQUVwQixPQUFPLEdBQUcsU0FBSCxHQUFlO0FBSmhCLE9BQUQsQ0FEbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERCxlQVlDLHFFQUFDLHlEQUFELGtDQUFjYyxZQUFZLEVBQTFCO0FBQUEsZ0JBQ0VSLEtBQUssQ0FBQ2UsR0FBTixDQUFVLFVBQUNDLElBQUQ7QUFBQSw0QkFDVixxRUFBQyw2REFBRDtBQUFBLGtDQUNDO0FBQ0MsZUFBRyxFQUFFQSxJQUFJLENBQUNDLEtBQUwsQ0FBV0MsS0FBWCxDQUFpQkMsb0JBRHZCO0FBRUMsZUFBRyxFQUFFSCxJQUFJLENBQUNJLElBRlg7QUFHQyxpQkFBSyxFQUFDO0FBSFA7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERCxFQU1FSixJQUFJLENBQUNJLElBTlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURVO0FBQUEsT0FBVjtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFaRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERDtBQTJCQTs7R0EzRVEvQixNO1VBR3NDQywyRCxFQXlCMUNTLHFEOzs7S0E1QklWLE07QUE2RU1BLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuOTE4M2NhODMzODM1NzdlYjJlMWUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGdxbCBmcm9tIFwiZ3JhcGhxbC10YWdcIjtcclxuaW1wb3J0IHsgcmVzZXRJZENvdW50ZXIsIHVzZUNvbWJvYm94IH0gZnJvbSBcImRvd25zaGlmdFwiO1xyXG5pbXBvcnQgeyBTZWFyY2hTdHlsZXMsIERyb3BEb3duLCBEcm9wRG93bkl0ZW0gfSBmcm9tIFwiLi9zdHlsZXMvRHJvcERvd25cIjtcclxuaW1wb3J0IHsgdXNlTGF6eVF1ZXJ5IH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XHJcbmltcG9ydCBkZWJvdW5jZSBmcm9tIFwibG9kYXNoLmRlYm91bmNlXCI7XHJcblxyXG5jb25zdCBTRUFSQ0hfUFJPRFVDVF9RVUVSWSA9IGdxbGBcclxuXHRxdWVyeSBTRUFSQ0hfUFJPRFVDVF9RVUVSWSgkc2VhcmNoVGVybTogU3RyaW5nISkge1xyXG5cdFx0c2VhcmNoVGVybTogYWxsUHJvZHVjdHMoXHJcblx0XHRcdHdoZXJlOiB7XHJcblx0XHRcdFx0T1I6IFtcclxuXHRcdFx0XHRcdHsgbmFtZV9jb250YWluc19pOiAkc2VhcmNoVGVybSB9XHJcblx0XHRcdFx0XHR7IGRlc2NyaXB0aW9uX2NvbnRhaW5zX2k6ICRzZWFyY2hUZXJtIH1cclxuXHRcdFx0XHRdXHJcblx0XHRcdH1cclxuXHRcdCkge1xyXG5cdFx0XHRpZFxyXG5cdFx0XHRuYW1lXHJcblx0XHRcdHBob3RvIHtcclxuXHRcdFx0XHRpbWFnZSB7XHJcblx0XHRcdFx0XHRwdWJsaWNVcmxUcmFuc2Zvcm1lZFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuYDtcclxuXHJcbmZ1bmN0aW9uIFNlYXJjaCgpIHtcclxuXHQvLyBJbnN0ZWFkIG9mIGRvaW5nIFt1c2VRdWVyeV0gdGhhdCBoYXBwZW5zIG9uIHBhZ2UgbG9hZCwgd2Ugd2FudCB0byBpbnN0YW50bHkgcXVlcnkgaXQgYnkgY29tbWFuZFxyXG5cdC8vIEFsd2F5cyBieXBhc3MgdGhlIGFwb2xsbyBjYWNoZSBhbmQgZ28gc3RyYWlnaHQgdG8gdGhlIG5ldHdvcmtcclxuXHRjb25zdCBbZmluZEl0ZW1zLCB7IGRhdGEsIGxvYWRpbmcsIGVycm9yIH1dID0gdXNlTGF6eVF1ZXJ5KFxyXG5cdFx0U0VBUkNIX1BST0RVQ1RfUVVFUlksXHJcblx0XHR7XHJcblx0XHRcdC8vSU1QT1JUQU5UOiBpZiB5b3UgZG9uJ3QgZG8gdGhpcywgaXQgd2lsbCBvbmx5IHF1ZXJ5IHdoYXRldmVyIGl0ZW0gaXMgb24gdGhlIGN1cnJlbnQgcGFnaW5hdGlvbiBwYWdlXHJcblx0XHRcdGZldGNoUG9saWN5OiBcIm5vLWNhY2hlXCIsXHJcblx0XHR9XHJcblx0KTtcclxuXHJcblx0LypcclxuICAgICAgICBUaGUgcHVycG9zZSBvZiB0aGlzIGxpbmUgb2YgY29kZSBpcyB0byBwcmV2ZW50IHRoZSBzZXJ2ZXIgZnJvbSBjcmFzaGluZy4gXHJcbiAgICAgICAgR2VuZXJhbGx5IHdoZW4gYSB1c2VyIHR5cGUgaW4gdGhlIHNlYXJjaCwgZWFjaCBrZXkgdXAgZXZlbnQgd2lsbCB0cmlnZ2VyIGEgY2FsbCBiYWNrIHRvIHRoZSBzZXJ2ZXIuIFdoZW4gdGhlcmUncyBleGNlc3NpdmVcclxuICAgICAgICBhbW91bnQgb2YgY2FsbHMgYmFjayB0byB0aGUgc2VydmVyIGluIGEgc2hvcnQgYW1vdW50IG9mIHRpbWUsIGl0IHdpbGwgRERvUyB5b3VyIGJhY2tlbmQuIFxyXG5cclxuICAgICAgICBPbmUgZ29vZCB3YXkgdG8gcHJldmVudCB0aGF0IGZyb20gaGFwcGVuaW5nIGlzIHRvIHVzZSBbZGVib3VuY2UoKV0gYW5kIHNldCBhIHRpbWVyIG9uIGhvd2V2ZXJ5IG1hbnkgc2Vjb25kcyB5b3Ugd2FubmEgd2FpdCBiZWZvcmVcclxuICAgICAgICBzZW5kaW5nIHRoZSByZXF1ZXN0IGFzIGEgcGFja2FnZSBiYWNrIHRvIHRoZSBzZXJ2ZXIgaW5zdGVhZCBvZiBzZW5kaW5nIGEgcmVxdWVzdCBiYWNrIGFmdGVyIGV2ZXJ5IGtleSB1cCBldmVudFxyXG4gICAgICovXHJcblx0Y29uc3QgZmluZEl0ZW1CdXRDaGlsbEJydWggPSBkZWJvdW5jZShmaW5kSXRlbXMsIDM1MCk7XHJcblxyXG5cdC8vIFRoaXMgdGFrZXMgY2FyZSBhbnkgc2VydmVyIHNpZGUgcmVuZGVyaW5nIGlzc3VlcyB5b3UgbWF5IGhhdmVcclxuXHRyZXNldElkQ291bnRlcigpO1xyXG5cdGNvbnN0IHtcclxuXHRcdGlucHV0VmFsdWUsXHJcblx0XHRnZXRNZW51UHJvcHMsXHJcblx0XHRnZXRJbnB1dFByb3BzLFxyXG5cdFx0Z2V0Q29tYm9ib3hQcm9wcyxcclxuXHR9ID0gdXNlQ29tYm9ib3goe1xyXG5cdFx0aXRlbXM6IFtdLFxyXG5cdFx0Ly8gRmlyZSB3aGVuIGlucHV0IGRldGVjdGVkIGluIHRoZSBzZWFyY2ggYm94XHJcblx0XHRvbklucHV0VmFsdWVDaGFuZ2UoKSB7XHJcblx0XHRcdGNvbnNvbGUubG9nKFwiSW5wdXQgY2hhbmdlZFwiKTtcclxuXHRcdFx0ZmluZEl0ZW1CdXRDaGlsbEJydWgoe1xyXG5cdFx0XHRcdHZhcmlhYmxlczoge1xyXG5cdFx0XHRcdFx0c2VhcmNoVGVybTogaW5wdXRWYWx1ZSxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHR9KTtcclxuXHRcdH0sXHJcblxyXG5cdFx0Ly8gRmlyZSB3aGVuIHNvbWVvbmUgc2VsZWN0IGFuIGl0ZW0gZnJvbSBkcm9wYm93biBib3hcclxuXHRcdG9uU2VsZWN0ZWRJdGVtQ2hhbmdlKCkge1xyXG5cdFx0XHRjb25zb2xlLmxvZyhcIlNlbGVjdGVkIGl0ZW0gY2hhbmdlXCIpO1xyXG5cdFx0fSxcclxuXHR9KTtcclxuXHJcblx0Y29uc3QgaXRlbXMgPSBkYXRhPy5zZWFyY2hUZXJtIHx8IFtdO1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PFNlYXJjaFN0eWxlcz5cclxuXHRcdFx0PGRpdiB7Li4uZ2V0Q29tYm9ib3hQcm9wcygpfT5cclxuXHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdHsuLi5nZXRJbnB1dFByb3BzKHtcclxuXHRcdFx0XHRcdFx0dHlwZTogXCJzZWFyY2hcIixcclxuXHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI6IFwiU2VhcmNoIGZvciBhbiBpdGVtXCIsXHJcblx0XHRcdFx0XHRcdGlkOiBcInNlYXJjaFwiLFxyXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU6IGxvYWRpbmcgPyBcImxvYWRpbmdcIiA6IFwiXCIsXHJcblx0XHRcdFx0XHR9KX1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdDxEcm9wRG93biB7Li4uZ2V0TWVudVByb3BzKCl9PlxyXG5cdFx0XHRcdHtpdGVtcy5tYXAoKGl0ZW0pID0+IChcclxuXHRcdFx0XHRcdDxEcm9wRG93bkl0ZW0+XHJcblx0XHRcdFx0XHRcdDxpbWdcclxuXHRcdFx0XHRcdFx0XHRzcmM9e2l0ZW0ucGhvdG8uaW1hZ2UucHVibGljVXJsVHJhbnNmb3JtZWR9XHJcblx0XHRcdFx0XHRcdFx0YWx0PXtpdGVtLm5hbWV9XHJcblx0XHRcdFx0XHRcdFx0d2lkdGg9XCI1MHB4XCJcclxuXHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0e2l0ZW0ubmFtZX1cclxuXHRcdFx0XHRcdDwvRHJvcERvd25JdGVtPlxyXG5cdFx0XHRcdCkpfVxyXG5cdFx0XHQ8L0Ryb3BEb3duPlxyXG5cdFx0PC9TZWFyY2hTdHlsZXM+XHJcblx0KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9