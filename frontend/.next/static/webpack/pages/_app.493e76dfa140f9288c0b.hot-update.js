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
      searchTerm = _useLazyQuery2[0],
      _useLazyQuery2$ = _useLazyQuery2[1],
      data = _useLazyQuery2$.data,
      loading = _useLazyQuery2$.loading,
      error = _useLazyQuery2$.error; // This takes care any server side rendering issues you may have


  Object(downshift__WEBPACK_IMPORTED_MODULE_6__["resetIdCounter"])();

  var _useCombobox = Object(downshift__WEBPACK_IMPORTED_MODULE_6__["useCombobox"])({
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

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_styles_DropDown__WEBPACK_IMPORTED_MODULE_7__["SearchStyles"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", _objectSpread(_objectSpread({}, getComboboxProps()), {}, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", _objectSpread({}, getInputProps({
        type: "search",
        placeholder: "Search for an item",
        id: "search",
        className: "loading"
      })), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 5
      }, this)
    }), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_styles_DropDown__WEBPACK_IMPORTED_MODULE_7__["DropDown"], _objectSpread(_objectSpread({}, getMenuProps()), {}, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_styles_DropDown__WEBPACK_IMPORTED_MODULE_7__["DropDownItem"], {
        children: "Woah"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 5
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_styles_DropDown__WEBPACK_IMPORTED_MODULE_7__["DropDownItem"], {
        children: "Woah"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 5
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_styles_DropDown__WEBPACK_IMPORTED_MODULE_7__["DropDownItem"], {
        children: "Woah"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 5
      }, this)]
    }), void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 4
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 54,
    columnNumber: 3
  }, this);
}

_s(Search, "JUdk6B4NRWlg1Or6dQ5AvQoTSFk=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TZWFyY2guanMiXSwibmFtZXMiOlsiU0VBUkNIX1BST0RVQ1RfUVVFUlkiLCJncWwiLCJTZWFyY2giLCJ1c2VMYXp5UXVlcnkiLCJmZXRjaFBvbGljeSIsInNlYXJjaFRlcm0iLCJkYXRhIiwibG9hZGluZyIsImVycm9yIiwicmVzZXRJZENvdW50ZXIiLCJ1c2VDb21ib2JveCIsIml0ZW1zIiwib25JbnB1dFZhbHVlQ2hhbmdlIiwiY29uc29sZSIsImxvZyIsIm9uU2VsZWN0ZWRJdGVtQ2hhbmdlIiwiZ2V0TWVudVByb3BzIiwiZ2V0SW5wdXRQcm9wcyIsImdldENvbWJvYm94UHJvcHMiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJpZCIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLG9CQUFvQixHQUFHQyxrREFBSCxtQkFBMUI7O0FBcUJBLFNBQVNDLE1BQVQsR0FBa0I7QUFBQTs7QUFDakI7QUFDQTtBQUZpQixzQkFHOEJDLG1FQUFZLENBQzFESCxvQkFEMEQsRUFFMUQ7QUFDQztBQUNBSSxlQUFXLEVBQUU7QUFGZCxHQUYwRCxDQUgxQztBQUFBO0FBQUEsTUFHVkMsVUFIVTtBQUFBO0FBQUEsTUFHSUMsSUFISixtQkFHSUEsSUFISjtBQUFBLE1BR1VDLE9BSFYsbUJBR1VBLE9BSFY7QUFBQSxNQUdtQkMsS0FIbkIsbUJBR21CQSxLQUhuQixFQVdqQjs7O0FBQ0FDLGtFQUFjOztBQVpHLHFCQWF5Q0MsNkRBQVcsQ0FBQztBQUNyRUMsU0FBSyxFQUFFLEVBRDhEO0FBRXJFO0FBQ0FDLHNCQUhxRSxnQ0FHaEQ7QUFDcEJDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLGVBQVo7QUFDQSxLQUxvRTtBQU1yRTtBQUNBQyx3QkFQcUUsa0NBTzlDO0FBQ3RCRixhQUFPLENBQUNDLEdBQVIsQ0FBWSxzQkFBWjtBQUNBO0FBVG9FLEdBQUQsQ0FicEQ7QUFBQSxNQWFURSxZQWJTLGdCQWFUQSxZQWJTO0FBQUEsTUFhS0MsYUFiTCxnQkFhS0EsYUFiTDtBQUFBLE1BYW9CQyxnQkFicEIsZ0JBYW9CQSxnQkFicEI7O0FBeUJqQixzQkFDQyxxRUFBQyw2REFBRDtBQUFBLDRCQUNDLDRHQUFTQSxnQkFBZ0IsRUFBekI7QUFBQSw2QkFDQyxnR0FDS0QsYUFBYSxDQUFDO0FBQ2pCRSxZQUFJLEVBQUUsUUFEVztBQUVqQkMsbUJBQVcsRUFBRSxvQkFGSTtBQUdqQkMsVUFBRSxFQUFFLFFBSGE7QUFJakJDLGlCQUFTLEVBQUU7QUFKTSxPQUFELENBRGxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREQsZUFZQyxxRUFBQyx5REFBRCxrQ0FBY04sWUFBWSxFQUExQjtBQUFBLDhCQUNDLHFFQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREQsZUFHQyxxRUFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhELGVBS0MscUVBQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FMRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFaRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERDtBQXNCQTs7R0EvQ1FkLE07VUFHdUNDLDJELEVBVVdPLHFEOzs7S0FibERSLE07QUFpRE1BLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuNDkzZTc2ZGZhMTQwZjkyODhjMGIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGdxbCBmcm9tIFwiZ3JhcGhxbC10YWdcIjtcclxuaW1wb3J0IHsgcmVzZXRJZENvdW50ZXIsIHVzZUNvbWJvYm94IH0gZnJvbSBcImRvd25zaGlmdFwiO1xyXG5pbXBvcnQgeyBTZWFyY2hTdHlsZXMsIERyb3BEb3duLCBEcm9wRG93bkl0ZW0gfSBmcm9tIFwiLi9zdHlsZXMvRHJvcERvd25cIjtcclxuaW1wb3J0IHsgdXNlTGF6eVF1ZXJ5IH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XHJcblxyXG5jb25zdCBTRUFSQ0hfUFJPRFVDVF9RVUVSWSA9IGdxbGBcclxuXHRxdWVyeSBTRUFSQ0hfUFJPRFVDVF9RVUVSWSgkc2VhcmNoVGVybTogU3RyaW5nISkge1xyXG5cdFx0c2VhcmNoVGVybTogYWxsUHJvZHVjdHMoXHJcblx0XHRcdHdoZXJlOiB7XHJcblx0XHRcdFx0T1I6IFtcclxuXHRcdFx0XHRcdHsgbmFtZV9jb250YWluc19pOiAkc2VhcmNoVGVybSB9XHJcblx0XHRcdFx0XHR7IGRlc2NyaXB0aW9uX2NvbnRhaW5zX2k6ICRzZWFyY2hUZXJtIH1cclxuXHRcdFx0XHRdXHJcblx0XHRcdH1cclxuXHRcdCkge1xyXG5cdFx0XHRpZFxyXG5cdFx0XHRuYW1lXHJcblx0XHRcdHBob3RvIHtcclxuXHRcdFx0XHRpbWFnZSB7XHJcblx0XHRcdFx0XHRwdWJsaWNVcmxUcmFuc2Zvcm1lZFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuYDtcclxuXHJcbmZ1bmN0aW9uIFNlYXJjaCgpIHtcclxuXHQvLyBJbnN0ZWFkIG9mIGRvaW5nIFt1c2VRdWVyeV0gdGhhdCBoYXBwZW5zIG9uIHBhZ2UgbG9hZCwgd2Ugd2FudCB0byBpbnN0YW50bHkgcXVlcnkgaXQgYnkgY29tbWFuZFxyXG5cdC8vIEFsd2F5cyBieXBhc3MgdGhlIGFwb2xsbyBjYWNoZSBhbmQgZ28gc3RyYWlnaHQgdG8gdGhlIG5ldHdvcmtcclxuXHRjb25zdCBbc2VhcmNoVGVybSwgeyBkYXRhLCBsb2FkaW5nLCBlcnJvciB9XSA9IHVzZUxhenlRdWVyeShcclxuXHRcdFNFQVJDSF9QUk9EVUNUX1FVRVJZLFxyXG5cdFx0e1xyXG5cdFx0XHQvL0lNUE9SVEFOVDogaWYgeW91IGRvbid0IGRvIHRoaXMsIGl0IHdpbGwgb25seSBxdWVyeSB3aGF0ZXZlciBpdGVtIGlzIG9uIHRoZSBjdXJyZW50IHBhZ2luYXRpb24gcGFnZVxyXG5cdFx0XHRmZXRjaFBvbGljeTogXCJuby1jYWNoZVwiLFxyXG5cdFx0fVxyXG5cdCk7XHJcblxyXG5cdC8vIFRoaXMgdGFrZXMgY2FyZSBhbnkgc2VydmVyIHNpZGUgcmVuZGVyaW5nIGlzc3VlcyB5b3UgbWF5IGhhdmVcclxuXHRyZXNldElkQ291bnRlcigpO1xyXG5cdGNvbnN0IHsgZ2V0TWVudVByb3BzLCBnZXRJbnB1dFByb3BzLCBnZXRDb21ib2JveFByb3BzIH0gPSB1c2VDb21ib2JveCh7XHJcblx0XHRpdGVtczogW10sXHJcblx0XHQvLyBGaXJlIHdoZW4gaW5wdXQgZGV0ZWN0ZWQgaW4gdGhlIHNlYXJjaCBib3hcclxuXHRcdG9uSW5wdXRWYWx1ZUNoYW5nZSgpIHtcclxuXHRcdFx0Y29uc29sZS5sb2coXCJJbnB1dCBjaGFuZ2VkXCIpO1xyXG5cdFx0fSxcclxuXHRcdC8vIEZpcmUgd2hlbiBzb21lb25lIHNlbGVjdCBhbiBpdGVtIGZyb20gZHJvcGJvd24gYm94XHJcblx0XHRvblNlbGVjdGVkSXRlbUNoYW5nZSgpIHtcclxuXHRcdFx0Y29uc29sZS5sb2coXCJTZWxlY3RlZCBpdGVtIGNoYW5nZVwiKTtcclxuXHRcdH0sXHJcblx0fSk7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8U2VhcmNoU3R5bGVzPlxyXG5cdFx0XHQ8ZGl2IHsuLi5nZXRDb21ib2JveFByb3BzKCl9PlxyXG5cdFx0XHRcdDxpbnB1dFxyXG5cdFx0XHRcdFx0ey4uLmdldElucHV0UHJvcHMoe1xyXG5cdFx0XHRcdFx0XHR0eXBlOiBcInNlYXJjaFwiLFxyXG5cdFx0XHRcdFx0XHRwbGFjZWhvbGRlcjogXCJTZWFyY2ggZm9yIGFuIGl0ZW1cIixcclxuXHRcdFx0XHRcdFx0aWQ6IFwic2VhcmNoXCIsXHJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZTogXCJsb2FkaW5nXCIsXHJcblx0XHRcdFx0XHR9KX1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdDxEcm9wRG93biB7Li4uZ2V0TWVudVByb3BzKCl9PlxyXG5cdFx0XHRcdDxEcm9wRG93bkl0ZW0+V29haDwvRHJvcERvd25JdGVtPlxyXG5cclxuXHRcdFx0XHQ8RHJvcERvd25JdGVtPldvYWg8L0Ryb3BEb3duSXRlbT5cclxuXHJcblx0XHRcdFx0PERyb3BEb3duSXRlbT5Xb2FoPC9Ecm9wRG93bkl0ZW0+XHJcblx0XHRcdDwvRHJvcERvd24+XHJcblx0XHQ8L1NlYXJjaFN0eWxlcz5cclxuXHQpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZWFyY2g7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=