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

  console.log({
    data: data
  });
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
        lineNumber: 79,
        columnNumber: 5
      }, this)
    }), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_styles_DropDown__WEBPACK_IMPORTED_MODULE_7__["DropDown"], _objectSpread(_objectSpread({}, getMenuProps()), {}, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_styles_DropDown__WEBPACK_IMPORTED_MODULE_7__["DropDownItem"], {
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
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_styles_DropDown__WEBPACK_IMPORTED_MODULE_7__["DropDownItem"], {
        children: "Woah"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 5
      }, this)]
    }), void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 4
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 77,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TZWFyY2guanMiXSwibmFtZXMiOlsiU0VBUkNIX1BST0RVQ1RfUVVFUlkiLCJncWwiLCJTZWFyY2giLCJ1c2VMYXp5UXVlcnkiLCJmZXRjaFBvbGljeSIsImZpbmRJdGVtcyIsImRhdGEiLCJsb2FkaW5nIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiZmluZEl0ZW1CdXRDaGlsbEJydWgiLCJkZWJvdW5jZSIsInJlc2V0SWRDb3VudGVyIiwidXNlQ29tYm9ib3giLCJpdGVtcyIsIm9uSW5wdXRWYWx1ZUNoYW5nZSIsInZhcmlhYmxlcyIsInNlYXJjaFRlcm0iLCJpbnB1dFZhbHVlIiwib25TZWxlY3RlZEl0ZW1DaGFuZ2UiLCJnZXRNZW51UHJvcHMiLCJnZXRJbnB1dFByb3BzIiwiZ2V0Q29tYm9ib3hQcm9wcyIsInR5cGUiLCJwbGFjZWhvbGRlciIsImlkIiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLG9CQUFvQixHQUFHQyxrREFBSCxtQkFBMUI7O0FBcUJBLFNBQVNDLE1BQVQsR0FBa0I7QUFBQTs7QUFDakI7QUFDQTtBQUZpQixzQkFHNkJDLG1FQUFZLENBQ3pESCxvQkFEeUQsRUFFekQ7QUFDQztBQUNBSSxlQUFXLEVBQUU7QUFGZCxHQUZ5RCxDQUh6QztBQUFBO0FBQUEsTUFHVkMsU0FIVTtBQUFBO0FBQUEsTUFHR0MsSUFISCxtQkFHR0EsSUFISDtBQUFBLE1BR1NDLE9BSFQsbUJBR1NBLE9BSFQ7QUFBQSxNQUdrQkMsS0FIbEIsbUJBR2tCQSxLQUhsQjs7QUFXakJDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZO0FBQUVKLFFBQUksRUFBSkE7QUFBRixHQUFaO0FBQ0E7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQyxNQUFNSyxvQkFBb0IsR0FBR0Msc0RBQVEsQ0FBQ1AsU0FBRCxFQUFZLEdBQVosQ0FBckMsQ0FwQmlCLENBc0JqQjs7QUFDQVEsa0VBQWM7O0FBdkJHLHFCQTZCYkMsNkRBQVcsQ0FBQztBQUNmQyxTQUFLLEVBQUUsRUFEUTtBQUVmO0FBQ0FDLHNCQUhlLGdDQUdNO0FBQ3BCUCxhQUFPLENBQUNDLEdBQVIsQ0FBWSxlQUFaO0FBQ0FDLDBCQUFvQixDQUFDO0FBQ3BCTSxpQkFBUyxFQUFFO0FBQ1ZDLG9CQUFVLEVBQUVDO0FBREY7QUFEUyxPQUFELENBQXBCO0FBS0EsS0FWYztBQVlmO0FBQ0FDLHdCQWJlLGtDQWFRO0FBQ3RCWCxhQUFPLENBQUNDLEdBQVIsQ0FBWSxzQkFBWjtBQUNBO0FBZmMsR0FBRCxDQTdCRTtBQUFBLE1BeUJoQlMsVUF6QmdCLGdCQXlCaEJBLFVBekJnQjtBQUFBLE1BMEJoQkUsWUExQmdCLGdCQTBCaEJBLFlBMUJnQjtBQUFBLE1BMkJoQkMsYUEzQmdCLGdCQTJCaEJBLGFBM0JnQjtBQUFBLE1BNEJoQkMsZ0JBNUJnQixnQkE0QmhCQSxnQkE1QmdCOztBQStDakIsc0JBQ0MscUVBQUMsNkRBQUQ7QUFBQSw0QkFDQyw0R0FBU0EsZ0JBQWdCLEVBQXpCO0FBQUEsNkJBQ0MsZ0dBQ0tELGFBQWEsQ0FBQztBQUNqQkUsWUFBSSxFQUFFLFFBRFc7QUFFakJDLG1CQUFXLEVBQUUsb0JBRkk7QUFHakJDLFVBQUUsRUFBRSxRQUhhO0FBSWpCQyxpQkFBUyxFQUFFO0FBSk0sT0FBRCxDQURsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURELGVBWUMscUVBQUMseURBQUQsa0NBQWNOLFlBQVksRUFBMUI7QUFBQSw4QkFDQyxxRUFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURELGVBR0MscUVBQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FIRCxlQUtDLHFFQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBWkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREQ7QUFzQkE7O0dBckVRbkIsTTtVQUdzQ0MsMkQsRUEwQjFDVyxxRDs7O0tBN0JJWixNO0FBdUVNQSxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmIzYTc4NmQ0ZDk2MzE4ZWNlNDBiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBncWwgZnJvbSBcImdyYXBocWwtdGFnXCI7XHJcbmltcG9ydCB7IHJlc2V0SWRDb3VudGVyLCB1c2VDb21ib2JveCB9IGZyb20gXCJkb3duc2hpZnRcIjtcclxuaW1wb3J0IHsgU2VhcmNoU3R5bGVzLCBEcm9wRG93biwgRHJvcERvd25JdGVtIH0gZnJvbSBcIi4vc3R5bGVzL0Ryb3BEb3duXCI7XHJcbmltcG9ydCB7IHVzZUxhenlRdWVyeSB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xyXG5pbXBvcnQgZGVib3VuY2UgZnJvbSBcImxvZGFzaC5kZWJvdW5jZVwiO1xyXG5cclxuY29uc3QgU0VBUkNIX1BST0RVQ1RfUVVFUlkgPSBncWxgXHJcblx0cXVlcnkgU0VBUkNIX1BST0RVQ1RfUVVFUlkoJHNlYXJjaFRlcm06IFN0cmluZyEpIHtcclxuXHRcdHNlYXJjaFRlcm06IGFsbFByb2R1Y3RzKFxyXG5cdFx0XHR3aGVyZToge1xyXG5cdFx0XHRcdE9SOiBbXHJcblx0XHRcdFx0XHR7IG5hbWVfY29udGFpbnNfaTogJHNlYXJjaFRlcm0gfVxyXG5cdFx0XHRcdFx0eyBkZXNjcmlwdGlvbl9jb250YWluc19pOiAkc2VhcmNoVGVybSB9XHJcblx0XHRcdFx0XVxyXG5cdFx0XHR9XHJcblx0XHQpIHtcclxuXHRcdFx0aWRcclxuXHRcdFx0bmFtZVxyXG5cdFx0XHRwaG90byB7XHJcblx0XHRcdFx0aW1hZ2Uge1xyXG5cdFx0XHRcdFx0cHVibGljVXJsVHJhbnNmb3JtZWRcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbmA7XHJcblxyXG5mdW5jdGlvbiBTZWFyY2goKSB7XHJcblx0Ly8gSW5zdGVhZCBvZiBkb2luZyBbdXNlUXVlcnldIHRoYXQgaGFwcGVucyBvbiBwYWdlIGxvYWQsIHdlIHdhbnQgdG8gaW5zdGFudGx5IHF1ZXJ5IGl0IGJ5IGNvbW1hbmRcclxuXHQvLyBBbHdheXMgYnlwYXNzIHRoZSBhcG9sbG8gY2FjaGUgYW5kIGdvIHN0cmFpZ2h0IHRvIHRoZSBuZXR3b3JrXHJcblx0Y29uc3QgW2ZpbmRJdGVtcywgeyBkYXRhLCBsb2FkaW5nLCBlcnJvciB9XSA9IHVzZUxhenlRdWVyeShcclxuXHRcdFNFQVJDSF9QUk9EVUNUX1FVRVJZLFxyXG5cdFx0e1xyXG5cdFx0XHQvL0lNUE9SVEFOVDogaWYgeW91IGRvbid0IGRvIHRoaXMsIGl0IHdpbGwgb25seSBxdWVyeSB3aGF0ZXZlciBpdGVtIGlzIG9uIHRoZSBjdXJyZW50IHBhZ2luYXRpb24gcGFnZVxyXG5cdFx0XHRmZXRjaFBvbGljeTogXCJuby1jYWNoZVwiLFxyXG5cdFx0fVxyXG5cdCk7XHJcblxyXG5cdGNvbnNvbGUubG9nKHsgZGF0YSB9KTtcclxuXHQvKlxyXG4gICAgICAgIFRoZSBwdXJwb3NlIG9mIHRoaXMgbGluZSBvZiBjb2RlIGlzIHRvIHByZXZlbnQgdGhlIHNlcnZlciBmcm9tIGNyYXNoaW5nLiBcclxuICAgICAgICBHZW5lcmFsbHkgd2hlbiBhIHVzZXIgdHlwZSBpbiB0aGUgc2VhcmNoLCBlYWNoIGtleSB1cCBldmVudCB3aWxsIHRyaWdnZXIgYSBjYWxsIGJhY2sgdG8gdGhlIHNlcnZlci4gV2hlbiB0aGVyZSdzIGV4Y2Vzc2l2ZVxyXG4gICAgICAgIGFtb3VudCBvZiBjYWxscyBiYWNrIHRvIHRoZSBzZXJ2ZXIgaW4gYSBzaG9ydCBhbW91bnQgb2YgdGltZSwgaXQgd2lsbCBERG9TIHlvdXIgYmFja2VuZC4gXHJcblxyXG4gICAgICAgIE9uZSBnb29kIHdheSB0byBwcmV2ZW50IHRoYXQgZnJvbSBoYXBwZW5pbmcgaXMgdG8gdXNlIFtkZWJvdW5jZSgpXSBhbmQgc2V0IGEgdGltZXIgb24gaG93ZXZlcnkgbWFueSBzZWNvbmRzIHlvdSB3YW5uYSB3YWl0IGJlZm9yZVxyXG4gICAgICAgIHNlbmRpbmcgdGhlIHJlcXVlc3QgYXMgYSBwYWNrYWdlIGJhY2sgdG8gdGhlIHNlcnZlciBpbnN0ZWFkIG9mIHNlbmRpbmcgYSByZXF1ZXN0IGJhY2sgYWZ0ZXIgZXZlcnkga2V5IHVwIGV2ZW50XHJcbiAgICAgKi9cclxuXHRjb25zdCBmaW5kSXRlbUJ1dENoaWxsQnJ1aCA9IGRlYm91bmNlKGZpbmRJdGVtcywgMzUwKTtcclxuXHJcblx0Ly8gVGhpcyB0YWtlcyBjYXJlIGFueSBzZXJ2ZXIgc2lkZSByZW5kZXJpbmcgaXNzdWVzIHlvdSBtYXkgaGF2ZVxyXG5cdHJlc2V0SWRDb3VudGVyKCk7XHJcblx0Y29uc3Qge1xyXG5cdFx0aW5wdXRWYWx1ZSxcclxuXHRcdGdldE1lbnVQcm9wcyxcclxuXHRcdGdldElucHV0UHJvcHMsXHJcblx0XHRnZXRDb21ib2JveFByb3BzLFxyXG5cdH0gPSB1c2VDb21ib2JveCh7XHJcblx0XHRpdGVtczogW10sXHJcblx0XHQvLyBGaXJlIHdoZW4gaW5wdXQgZGV0ZWN0ZWQgaW4gdGhlIHNlYXJjaCBib3hcclxuXHRcdG9uSW5wdXRWYWx1ZUNoYW5nZSgpIHtcclxuXHRcdFx0Y29uc29sZS5sb2coXCJJbnB1dCBjaGFuZ2VkXCIpO1xyXG5cdFx0XHRmaW5kSXRlbUJ1dENoaWxsQnJ1aCh7XHJcblx0XHRcdFx0dmFyaWFibGVzOiB7XHJcblx0XHRcdFx0XHRzZWFyY2hUZXJtOiBpbnB1dFZhbHVlLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdH0pO1xyXG5cdFx0fSxcclxuXHJcblx0XHQvLyBGaXJlIHdoZW4gc29tZW9uZSBzZWxlY3QgYW4gaXRlbSBmcm9tIGRyb3Bib3duIGJveFxyXG5cdFx0b25TZWxlY3RlZEl0ZW1DaGFuZ2UoKSB7XHJcblx0XHRcdGNvbnNvbGUubG9nKFwiU2VsZWN0ZWQgaXRlbSBjaGFuZ2VcIik7XHJcblx0XHR9LFxyXG5cdH0pO1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PFNlYXJjaFN0eWxlcz5cclxuXHRcdFx0PGRpdiB7Li4uZ2V0Q29tYm9ib3hQcm9wcygpfT5cclxuXHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdHsuLi5nZXRJbnB1dFByb3BzKHtcclxuXHRcdFx0XHRcdFx0dHlwZTogXCJzZWFyY2hcIixcclxuXHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI6IFwiU2VhcmNoIGZvciBhbiBpdGVtXCIsXHJcblx0XHRcdFx0XHRcdGlkOiBcInNlYXJjaFwiLFxyXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU6IFwibG9hZGluZ1wiLFxyXG5cdFx0XHRcdFx0fSl9XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHQ8RHJvcERvd24gey4uLmdldE1lbnVQcm9wcygpfT5cclxuXHRcdFx0XHQ8RHJvcERvd25JdGVtPldvYWg8L0Ryb3BEb3duSXRlbT5cclxuXHJcblx0XHRcdFx0PERyb3BEb3duSXRlbT5Xb2FoPC9Ecm9wRG93bkl0ZW0+XHJcblxyXG5cdFx0XHRcdDxEcm9wRG93bkl0ZW0+V29haDwvRHJvcERvd25JdGVtPlxyXG5cdFx0XHQ8L0Ryb3BEb3duPlxyXG5cdFx0PC9TZWFyY2hTdHlsZXM+XHJcblx0KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9