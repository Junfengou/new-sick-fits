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

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_styles_DropDown__WEBPACK_IMPORTED_MODULE_7__["SearchStyles"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", _objectSpread(_objectSpread({}, getComboboxProps()), {}, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", _objectSpread({}, getInputProps({
        type: "search",
        placeholder: "Search for an item",
        id: "search",
        className: "loading"
      })), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 5
      }, this)
    }), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_styles_DropDown__WEBPACK_IMPORTED_MODULE_7__["DropDown"], _objectSpread(_objectSpread({}, getMenuProps()), {}, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_styles_DropDown__WEBPACK_IMPORTED_MODULE_7__["DropDownItem"], {
        children: "Woah"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 5
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_styles_DropDown__WEBPACK_IMPORTED_MODULE_7__["DropDownItem"], {
        children: "Woah"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 5
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_styles_DropDown__WEBPACK_IMPORTED_MODULE_7__["DropDownItem"], {
        children: "Woah"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 5
      }, this)]
    }), void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 4
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 75,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TZWFyY2guanMiXSwibmFtZXMiOlsiU0VBUkNIX1BST0RVQ1RfUVVFUlkiLCJncWwiLCJTZWFyY2giLCJ1c2VMYXp5UXVlcnkiLCJmZXRjaFBvbGljeSIsImZpbmRJdGVtcyIsImRhdGEiLCJsb2FkaW5nIiwiZXJyb3IiLCJmaW5kSXRlbUJ1dENoaWxsQnJ1aCIsImRlYm91bmNlIiwicmVzZXRJZENvdW50ZXIiLCJ1c2VDb21ib2JveCIsIml0ZW1zIiwib25JbnB1dFZhbHVlQ2hhbmdlIiwiY29uc29sZSIsImxvZyIsInZhcmlhYmxlcyIsInNlYXJjaFRlcm0iLCJpbnB1dFZhbHVlIiwib25TZWxlY3RlZEl0ZW1DaGFuZ2UiLCJnZXRNZW51UHJvcHMiLCJnZXRJbnB1dFByb3BzIiwiZ2V0Q29tYm9ib3hQcm9wcyIsInR5cGUiLCJwbGFjZWhvbGRlciIsImlkIiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLG9CQUFvQixHQUFHQyxrREFBSCxtQkFBMUI7O0FBcUJBLFNBQVNDLE1BQVQsR0FBa0I7QUFBQTs7QUFDakI7QUFDQTtBQUZpQixzQkFHNkJDLG1FQUFZLENBQ3pESCxvQkFEeUQsRUFFekQ7QUFDQztBQUNBSSxlQUFXLEVBQUU7QUFGZCxHQUZ5RCxDQUh6QztBQUFBO0FBQUEsTUFHVkMsU0FIVTtBQUFBO0FBQUEsTUFHR0MsSUFISCxtQkFHR0EsSUFISDtBQUFBLE1BR1NDLE9BSFQsbUJBR1NBLE9BSFQ7QUFBQSxNQUdrQkMsS0FIbEIsbUJBR2tCQSxLQUhsQjtBQVdqQjtBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQyxNQUFNQyxvQkFBb0IsR0FBR0Msc0RBQVEsQ0FBQ0wsU0FBRCxFQUFZLEdBQVosQ0FBckMsQ0FuQmlCLENBcUJqQjs7QUFDQU0sa0VBQWM7O0FBdEJHLHFCQTRCYkMsNkRBQVcsQ0FBQztBQUNmQyxTQUFLLEVBQUUsRUFEUTtBQUVmO0FBQ0FDLHNCQUhlLGdDQUdNO0FBQ3BCQyxhQUFPLENBQUNDLEdBQVIsQ0FBWSxlQUFaO0FBQ0FQLDBCQUFvQixDQUFDO0FBQ3BCUSxpQkFBUyxFQUFFO0FBQ1ZDLG9CQUFVLEVBQUVDO0FBREY7QUFEUyxPQUFELENBQXBCO0FBS0EsS0FWYztBQVdmO0FBQ0FDLHdCQVplLGtDQVlRO0FBQ3RCTCxhQUFPLENBQUNDLEdBQVIsQ0FBWSxzQkFBWjtBQUNBO0FBZGMsR0FBRCxDQTVCRTtBQUFBLE1Bd0JoQkcsVUF4QmdCLGdCQXdCaEJBLFVBeEJnQjtBQUFBLE1BeUJoQkUsWUF6QmdCLGdCQXlCaEJBLFlBekJnQjtBQUFBLE1BMEJoQkMsYUExQmdCLGdCQTBCaEJBLGFBMUJnQjtBQUFBLE1BMkJoQkMsZ0JBM0JnQixnQkEyQmhCQSxnQkEzQmdCOztBQTZDakIsc0JBQ0MscUVBQUMsNkRBQUQ7QUFBQSw0QkFDQyw0R0FBU0EsZ0JBQWdCLEVBQXpCO0FBQUEsNkJBQ0MsZ0dBQ0tELGFBQWEsQ0FBQztBQUNqQkUsWUFBSSxFQUFFLFFBRFc7QUFFakJDLG1CQUFXLEVBQUUsb0JBRkk7QUFHakJDLFVBQUUsRUFBRSxRQUhhO0FBSWpCQyxpQkFBUyxFQUFFO0FBSk0sT0FBRCxDQURsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURELGVBWUMscUVBQUMseURBQUQsa0NBQWNOLFlBQVksRUFBMUI7QUFBQSw4QkFDQyxxRUFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURELGVBR0MscUVBQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FIRCxlQUtDLHFFQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBWkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREQ7QUFzQkE7O0dBbkVRbkIsTTtVQUdzQ0MsMkQsRUF5QjFDUyxxRDs7O0tBNUJJVixNO0FBcUVNQSxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjhiYWM0MWFkY2IyMGU3NGRlYTdmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBncWwgZnJvbSBcImdyYXBocWwtdGFnXCI7XHJcbmltcG9ydCB7IHJlc2V0SWRDb3VudGVyLCB1c2VDb21ib2JveCB9IGZyb20gXCJkb3duc2hpZnRcIjtcclxuaW1wb3J0IHsgU2VhcmNoU3R5bGVzLCBEcm9wRG93biwgRHJvcERvd25JdGVtIH0gZnJvbSBcIi4vc3R5bGVzL0Ryb3BEb3duXCI7XHJcbmltcG9ydCB7IHVzZUxhenlRdWVyeSB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xyXG5pbXBvcnQgZGVib3VuY2UgZnJvbSBcImxvZGFzaC5kZWJvdW5jZVwiO1xyXG5cclxuY29uc3QgU0VBUkNIX1BST0RVQ1RfUVVFUlkgPSBncWxgXHJcblx0cXVlcnkgU0VBUkNIX1BST0RVQ1RfUVVFUlkoJHNlYXJjaFRlcm06IFN0cmluZyEpIHtcclxuXHRcdHNlYXJjaFRlcm06IGFsbFByb2R1Y3RzKFxyXG5cdFx0XHR3aGVyZToge1xyXG5cdFx0XHRcdE9SOiBbXHJcblx0XHRcdFx0XHR7IG5hbWVfY29udGFpbnNfaTogJHNlYXJjaFRlcm0gfVxyXG5cdFx0XHRcdFx0eyBkZXNjcmlwdGlvbl9jb250YWluc19pOiAkc2VhcmNoVGVybSB9XHJcblx0XHRcdFx0XVxyXG5cdFx0XHR9XHJcblx0XHQpIHtcclxuXHRcdFx0aWRcclxuXHRcdFx0bmFtZVxyXG5cdFx0XHRwaG90byB7XHJcblx0XHRcdFx0aW1hZ2Uge1xyXG5cdFx0XHRcdFx0cHVibGljVXJsVHJhbnNmb3JtZWRcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbmA7XHJcblxyXG5mdW5jdGlvbiBTZWFyY2goKSB7XHJcblx0Ly8gSW5zdGVhZCBvZiBkb2luZyBbdXNlUXVlcnldIHRoYXQgaGFwcGVucyBvbiBwYWdlIGxvYWQsIHdlIHdhbnQgdG8gaW5zdGFudGx5IHF1ZXJ5IGl0IGJ5IGNvbW1hbmRcclxuXHQvLyBBbHdheXMgYnlwYXNzIHRoZSBhcG9sbG8gY2FjaGUgYW5kIGdvIHN0cmFpZ2h0IHRvIHRoZSBuZXR3b3JrXHJcblx0Y29uc3QgW2ZpbmRJdGVtcywgeyBkYXRhLCBsb2FkaW5nLCBlcnJvciB9XSA9IHVzZUxhenlRdWVyeShcclxuXHRcdFNFQVJDSF9QUk9EVUNUX1FVRVJZLFxyXG5cdFx0e1xyXG5cdFx0XHQvL0lNUE9SVEFOVDogaWYgeW91IGRvbid0IGRvIHRoaXMsIGl0IHdpbGwgb25seSBxdWVyeSB3aGF0ZXZlciBpdGVtIGlzIG9uIHRoZSBjdXJyZW50IHBhZ2luYXRpb24gcGFnZVxyXG5cdFx0XHRmZXRjaFBvbGljeTogXCJuby1jYWNoZVwiLFxyXG5cdFx0fVxyXG5cdCk7XHJcblxyXG5cdC8qXHJcbiAgICAgICAgVGhlIHB1cnBvc2Ugb2YgdGhpcyBsaW5lIG9mIGNvZGUgaXMgdG8gcHJldmVudCB0aGUgc2VydmVyIGZyb20gY3Jhc2hpbmcuIFxyXG4gICAgICAgIEdlbmVyYWxseSB3aGVuIGEgdXNlciB0eXBlIGluIHRoZSBzZWFyY2gsIGVhY2gga2V5IHVwIGV2ZW50IHdpbGwgdHJpZ2dlciBhIGNhbGwgYmFjayB0byB0aGUgc2VydmVyLiBXaGVuIHRoZXJlJ3MgZXhjZXNzaXZlXHJcbiAgICAgICAgYW1vdW50IG9mIGNhbGxzIGJhY2sgdG8gdGhlIHNlcnZlciBpbiBhIHNob3J0IGFtb3VudCBvZiB0aW1lLCBpdCB3aWxsIEREb1MgeW91ciBiYWNrZW5kLiBcclxuXHJcbiAgICAgICAgT25lIGdvb2Qgd2F5IHRvIHByZXZlbnQgdGhhdCBmcm9tIGhhcHBlbmluZyBpcyB0byB1c2UgW2RlYm91bmNlKCldIGFuZCBzZXQgYSB0aW1lciBvbiBob3dldmVyeSBtYW55IHNlY29uZHMgeW91IHdhbm5hIHdhaXQgYmVmb3JlXHJcbiAgICAgICAgc2VuZGluZyB0aGUgcmVxdWVzdCBhcyBhIHBhY2thZ2UgYmFjayB0byB0aGUgc2VydmVyIGluc3RlYWQgb2Ygc2VuZGluZyBhIHJlcXVlc3QgYmFjayBhZnRlciBldmVyeSBrZXkgdXAgZXZlbnRcclxuICAgICAqL1xyXG5cdGNvbnN0IGZpbmRJdGVtQnV0Q2hpbGxCcnVoID0gZGVib3VuY2UoZmluZEl0ZW1zLCAzNTApO1xyXG5cclxuXHQvLyBUaGlzIHRha2VzIGNhcmUgYW55IHNlcnZlciBzaWRlIHJlbmRlcmluZyBpc3N1ZXMgeW91IG1heSBoYXZlXHJcblx0cmVzZXRJZENvdW50ZXIoKTtcclxuXHRjb25zdCB7XHJcblx0XHRpbnB1dFZhbHVlLFxyXG5cdFx0Z2V0TWVudVByb3BzLFxyXG5cdFx0Z2V0SW5wdXRQcm9wcyxcclxuXHRcdGdldENvbWJvYm94UHJvcHMsXHJcblx0fSA9IHVzZUNvbWJvYm94KHtcclxuXHRcdGl0ZW1zOiBbXSxcclxuXHRcdC8vIEZpcmUgd2hlbiBpbnB1dCBkZXRlY3RlZCBpbiB0aGUgc2VhcmNoIGJveFxyXG5cdFx0b25JbnB1dFZhbHVlQ2hhbmdlKCkge1xyXG5cdFx0XHRjb25zb2xlLmxvZyhcIklucHV0IGNoYW5nZWRcIik7XHJcblx0XHRcdGZpbmRJdGVtQnV0Q2hpbGxCcnVoKHtcclxuXHRcdFx0XHR2YXJpYWJsZXM6IHtcclxuXHRcdFx0XHRcdHNlYXJjaFRlcm06IGlucHV0VmFsdWUsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0fSk7XHJcblx0XHR9LFxyXG5cdFx0Ly8gRmlyZSB3aGVuIHNvbWVvbmUgc2VsZWN0IGFuIGl0ZW0gZnJvbSBkcm9wYm93biBib3hcclxuXHRcdG9uU2VsZWN0ZWRJdGVtQ2hhbmdlKCkge1xyXG5cdFx0XHRjb25zb2xlLmxvZyhcIlNlbGVjdGVkIGl0ZW0gY2hhbmdlXCIpO1xyXG5cdFx0fSxcclxuXHR9KTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxTZWFyY2hTdHlsZXM+XHJcblx0XHRcdDxkaXYgey4uLmdldENvbWJvYm94UHJvcHMoKX0+XHJcblx0XHRcdFx0PGlucHV0XHJcblx0XHRcdFx0XHR7Li4uZ2V0SW5wdXRQcm9wcyh7XHJcblx0XHRcdFx0XHRcdHR5cGU6IFwic2VhcmNoXCIsXHJcblx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyOiBcIlNlYXJjaCBmb3IgYW4gaXRlbVwiLFxyXG5cdFx0XHRcdFx0XHRpZDogXCJzZWFyY2hcIixcclxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lOiBcImxvYWRpbmdcIixcclxuXHRcdFx0XHRcdH0pfVxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0PERyb3BEb3duIHsuLi5nZXRNZW51UHJvcHMoKX0+XHJcblx0XHRcdFx0PERyb3BEb3duSXRlbT5Xb2FoPC9Ecm9wRG93bkl0ZW0+XHJcblxyXG5cdFx0XHRcdDxEcm9wRG93bkl0ZW0+V29haDwvRHJvcERvd25JdGVtPlxyXG5cclxuXHRcdFx0XHQ8RHJvcERvd25JdGVtPldvYWg8L0Ryb3BEb3duSXRlbT5cclxuXHRcdFx0PC9Ecm9wRG93bj5cclxuXHRcdDwvU2VhcmNoU3R5bGVzPlxyXG5cdCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlYXJjaDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==