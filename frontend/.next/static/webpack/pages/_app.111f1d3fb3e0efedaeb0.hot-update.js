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
      getComboboxProps = _useCombobox.getComboboxProps,
      getItemProps = _useCombobox.getItemProps;

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
        lineNumber: 81,
        columnNumber: 5
      }, this)
    }), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_styles_DropDown__WEBPACK_IMPORTED_MODULE_7__["DropDown"], _objectSpread(_objectSpread({}, getMenuProps()), {}, {
      children: items.map(function (item) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_styles_DropDown__WEBPACK_IMPORTED_MODULE_7__["DropDownItem"], _objectSpread(_objectSpread({}, getInputProps({
          item: item
        })), {}, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("img", {
            src: item.photo.image.publicUrlTransformed,
            alt: item.name,
            width: "50px"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 7
          }, _this), item.name]
        }), void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 6
        }, _this);
      })
    }), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 4
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 79,
    columnNumber: 3
  }, this);
}

_s(Search, "inNeAQ34Hc40Roff+SLgMeb7xzg=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TZWFyY2guanMiXSwibmFtZXMiOlsiU0VBUkNIX1BST0RVQ1RfUVVFUlkiLCJncWwiLCJTZWFyY2giLCJ1c2VMYXp5UXVlcnkiLCJmZXRjaFBvbGljeSIsImZpbmRJdGVtcyIsImRhdGEiLCJsb2FkaW5nIiwiZXJyb3IiLCJmaW5kSXRlbUJ1dENoaWxsQnJ1aCIsImRlYm91bmNlIiwicmVzZXRJZENvdW50ZXIiLCJ1c2VDb21ib2JveCIsIml0ZW1zIiwib25JbnB1dFZhbHVlQ2hhbmdlIiwiY29uc29sZSIsImxvZyIsInZhcmlhYmxlcyIsInNlYXJjaFRlcm0iLCJpbnB1dFZhbHVlIiwib25TZWxlY3RlZEl0ZW1DaGFuZ2UiLCJnZXRNZW51UHJvcHMiLCJnZXRJbnB1dFByb3BzIiwiZ2V0Q29tYm9ib3hQcm9wcyIsImdldEl0ZW1Qcm9wcyIsInR5cGUiLCJwbGFjZWhvbGRlciIsImlkIiwiY2xhc3NOYW1lIiwibWFwIiwiaXRlbSIsInBob3RvIiwiaW1hZ2UiLCJwdWJsaWNVcmxUcmFuc2Zvcm1lZCIsIm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsb0JBQW9CLEdBQUdDLGtEQUFILG1CQUExQjs7QUFxQkEsU0FBU0MsTUFBVCxHQUFrQjtBQUFBOztBQUFBOztBQUNqQjtBQUNBO0FBRmlCLHNCQUc2QkMsbUVBQVksQ0FDekRILG9CQUR5RCxFQUV6RDtBQUNDO0FBQ0FJLGVBQVcsRUFBRTtBQUZkLEdBRnlELENBSHpDO0FBQUE7QUFBQSxNQUdWQyxTQUhVO0FBQUE7QUFBQSxNQUdHQyxJQUhILG1CQUdHQSxJQUhIO0FBQUEsTUFHU0MsT0FIVCxtQkFHU0EsT0FIVDtBQUFBLE1BR2tCQyxLQUhsQixtQkFHa0JBLEtBSGxCO0FBV2pCO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNDLE1BQU1DLG9CQUFvQixHQUFHQyxzREFBUSxDQUFDTCxTQUFELEVBQVksR0FBWixDQUFyQyxDQW5CaUIsQ0FxQmpCOztBQUNBTSxrRUFBYzs7QUF0QkcscUJBNkJiQyw2REFBVyxDQUFDO0FBQ2ZDLFNBQUssRUFBRSxFQURRO0FBRWY7QUFDQUMsc0JBSGUsZ0NBR007QUFDcEJDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLGVBQVo7QUFDQVAsMEJBQW9CLENBQUM7QUFDcEJRLGlCQUFTLEVBQUU7QUFDVkMsb0JBQVUsRUFBRUM7QUFERjtBQURTLE9BQUQsQ0FBcEI7QUFLQSxLQVZjO0FBWWY7QUFDQUMsd0JBYmUsa0NBYVE7QUFDdEJMLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLHNCQUFaO0FBQ0E7QUFmYyxHQUFELENBN0JFO0FBQUEsTUF3QmhCRyxVQXhCZ0IsZ0JBd0JoQkEsVUF4QmdCO0FBQUEsTUF5QmhCRSxZQXpCZ0IsZ0JBeUJoQkEsWUF6QmdCO0FBQUEsTUEwQmhCQyxhQTFCZ0IsZ0JBMEJoQkEsYUExQmdCO0FBQUEsTUEyQmhCQyxnQkEzQmdCLGdCQTJCaEJBLGdCQTNCZ0I7QUFBQSxNQTRCaEJDLFlBNUJnQixnQkE0QmhCQSxZQTVCZ0I7O0FBK0NqQixNQUFNWCxLQUFLLEdBQUcsQ0FBQVAsSUFBSSxTQUFKLElBQUFBLElBQUksV0FBSixZQUFBQSxJQUFJLENBQUVZLFVBQU4sS0FBb0IsRUFBbEM7QUFFQSxzQkFDQyxxRUFBQyw2REFBRDtBQUFBLDRCQUNDLDRHQUFTSyxnQkFBZ0IsRUFBekI7QUFBQSw2QkFDQyxnR0FDS0QsYUFBYSxDQUFDO0FBQ2pCRyxZQUFJLEVBQUUsUUFEVztBQUVqQkMsbUJBQVcsRUFBRSxvQkFGSTtBQUdqQkMsVUFBRSxFQUFFLFFBSGE7QUFJakJDLGlCQUFTLEVBQUVyQixPQUFPLEdBQUcsU0FBSCxHQUFlO0FBSmhCLE9BQUQsQ0FEbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERCxlQVlDLHFFQUFDLHlEQUFELGtDQUFjYyxZQUFZLEVBQTFCO0FBQUEsZ0JBQ0VSLEtBQUssQ0FBQ2dCLEdBQU4sQ0FBVSxVQUFDQyxJQUFEO0FBQUEsNEJBQ1YscUVBQUMsNkRBQUQsa0NBQWtCUixhQUFhLENBQUM7QUFBRVEsY0FBSSxFQUFKQTtBQUFGLFNBQUQsQ0FBL0I7QUFBQSxrQ0FDQztBQUNDLGVBQUcsRUFBRUEsSUFBSSxDQUFDQyxLQUFMLENBQVdDLEtBQVgsQ0FBaUJDLG9CQUR2QjtBQUVDLGVBQUcsRUFBRUgsSUFBSSxDQUFDSSxJQUZYO0FBR0MsaUJBQUssRUFBQztBQUhQO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREQsRUFNRUosSUFBSSxDQUFDSSxJQU5QO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEVTtBQUFBLE9BQVY7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBWkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREQ7QUEyQkE7O0dBNUVRaEMsTTtVQUdzQ0MsMkQsRUEwQjFDUyxxRDs7O0tBN0JJVixNO0FBOEVNQSxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjExMWYxZDNmYjNlMGVmZWRhZWIwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBncWwgZnJvbSBcImdyYXBocWwtdGFnXCI7XHJcbmltcG9ydCB7IHJlc2V0SWRDb3VudGVyLCB1c2VDb21ib2JveCB9IGZyb20gXCJkb3duc2hpZnRcIjtcclxuaW1wb3J0IHsgU2VhcmNoU3R5bGVzLCBEcm9wRG93biwgRHJvcERvd25JdGVtIH0gZnJvbSBcIi4vc3R5bGVzL0Ryb3BEb3duXCI7XHJcbmltcG9ydCB7IHVzZUxhenlRdWVyeSB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xyXG5pbXBvcnQgZGVib3VuY2UgZnJvbSBcImxvZGFzaC5kZWJvdW5jZVwiO1xyXG5cclxuY29uc3QgU0VBUkNIX1BST0RVQ1RfUVVFUlkgPSBncWxgXHJcblx0cXVlcnkgU0VBUkNIX1BST0RVQ1RfUVVFUlkoJHNlYXJjaFRlcm06IFN0cmluZyEpIHtcclxuXHRcdHNlYXJjaFRlcm06IGFsbFByb2R1Y3RzKFxyXG5cdFx0XHR3aGVyZToge1xyXG5cdFx0XHRcdE9SOiBbXHJcblx0XHRcdFx0XHR7IG5hbWVfY29udGFpbnNfaTogJHNlYXJjaFRlcm0gfVxyXG5cdFx0XHRcdFx0eyBkZXNjcmlwdGlvbl9jb250YWluc19pOiAkc2VhcmNoVGVybSB9XHJcblx0XHRcdFx0XVxyXG5cdFx0XHR9XHJcblx0XHQpIHtcclxuXHRcdFx0aWRcclxuXHRcdFx0bmFtZVxyXG5cdFx0XHRwaG90byB7XHJcblx0XHRcdFx0aW1hZ2Uge1xyXG5cdFx0XHRcdFx0cHVibGljVXJsVHJhbnNmb3JtZWRcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbmA7XHJcblxyXG5mdW5jdGlvbiBTZWFyY2goKSB7XHJcblx0Ly8gSW5zdGVhZCBvZiBkb2luZyBbdXNlUXVlcnldIHRoYXQgaGFwcGVucyBvbiBwYWdlIGxvYWQsIHdlIHdhbnQgdG8gaW5zdGFudGx5IHF1ZXJ5IGl0IGJ5IGNvbW1hbmRcclxuXHQvLyBBbHdheXMgYnlwYXNzIHRoZSBhcG9sbG8gY2FjaGUgYW5kIGdvIHN0cmFpZ2h0IHRvIHRoZSBuZXR3b3JrXHJcblx0Y29uc3QgW2ZpbmRJdGVtcywgeyBkYXRhLCBsb2FkaW5nLCBlcnJvciB9XSA9IHVzZUxhenlRdWVyeShcclxuXHRcdFNFQVJDSF9QUk9EVUNUX1FVRVJZLFxyXG5cdFx0e1xyXG5cdFx0XHQvL0lNUE9SVEFOVDogaWYgeW91IGRvbid0IGRvIHRoaXMsIGl0IHdpbGwgb25seSBxdWVyeSB3aGF0ZXZlciBpdGVtIGlzIG9uIHRoZSBjdXJyZW50IHBhZ2luYXRpb24gcGFnZVxyXG5cdFx0XHRmZXRjaFBvbGljeTogXCJuby1jYWNoZVwiLFxyXG5cdFx0fVxyXG5cdCk7XHJcblxyXG5cdC8qXHJcbiAgICAgICAgVGhlIHB1cnBvc2Ugb2YgdGhpcyBsaW5lIG9mIGNvZGUgaXMgdG8gcHJldmVudCB0aGUgc2VydmVyIGZyb20gY3Jhc2hpbmcuIFxyXG4gICAgICAgIEdlbmVyYWxseSB3aGVuIGEgdXNlciB0eXBlIGluIHRoZSBzZWFyY2gsIGVhY2gga2V5IHVwIGV2ZW50IHdpbGwgdHJpZ2dlciBhIGNhbGwgYmFjayB0byB0aGUgc2VydmVyLiBXaGVuIHRoZXJlJ3MgZXhjZXNzaXZlXHJcbiAgICAgICAgYW1vdW50IG9mIGNhbGxzIGJhY2sgdG8gdGhlIHNlcnZlciBpbiBhIHNob3J0IGFtb3VudCBvZiB0aW1lLCBpdCB3aWxsIEREb1MgeW91ciBiYWNrZW5kLiBcclxuXHJcbiAgICAgICAgT25lIGdvb2Qgd2F5IHRvIHByZXZlbnQgdGhhdCBmcm9tIGhhcHBlbmluZyBpcyB0byB1c2UgW2RlYm91bmNlKCldIGFuZCBzZXQgYSB0aW1lciBvbiBob3dldmVyeSBtYW55IHNlY29uZHMgeW91IHdhbm5hIHdhaXQgYmVmb3JlXHJcbiAgICAgICAgc2VuZGluZyB0aGUgcmVxdWVzdCBhcyBhIHBhY2thZ2UgYmFjayB0byB0aGUgc2VydmVyIGluc3RlYWQgb2Ygc2VuZGluZyBhIHJlcXVlc3QgYmFjayBhZnRlciBldmVyeSBrZXkgdXAgZXZlbnRcclxuICAgICAqL1xyXG5cdGNvbnN0IGZpbmRJdGVtQnV0Q2hpbGxCcnVoID0gZGVib3VuY2UoZmluZEl0ZW1zLCAzNTApO1xyXG5cclxuXHQvLyBUaGlzIHRha2VzIGNhcmUgYW55IHNlcnZlciBzaWRlIHJlbmRlcmluZyBpc3N1ZXMgeW91IG1heSBoYXZlXHJcblx0cmVzZXRJZENvdW50ZXIoKTtcclxuXHRjb25zdCB7XHJcblx0XHRpbnB1dFZhbHVlLFxyXG5cdFx0Z2V0TWVudVByb3BzLFxyXG5cdFx0Z2V0SW5wdXRQcm9wcyxcclxuXHRcdGdldENvbWJvYm94UHJvcHMsXHJcblx0XHRnZXRJdGVtUHJvcHMsXHJcblx0fSA9IHVzZUNvbWJvYm94KHtcclxuXHRcdGl0ZW1zOiBbXSxcclxuXHRcdC8vIEZpcmUgd2hlbiBpbnB1dCBkZXRlY3RlZCBpbiB0aGUgc2VhcmNoIGJveFxyXG5cdFx0b25JbnB1dFZhbHVlQ2hhbmdlKCkge1xyXG5cdFx0XHRjb25zb2xlLmxvZyhcIklucHV0IGNoYW5nZWRcIik7XHJcblx0XHRcdGZpbmRJdGVtQnV0Q2hpbGxCcnVoKHtcclxuXHRcdFx0XHR2YXJpYWJsZXM6IHtcclxuXHRcdFx0XHRcdHNlYXJjaFRlcm06IGlucHV0VmFsdWUsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0fSk7XHJcblx0XHR9LFxyXG5cclxuXHRcdC8vIEZpcmUgd2hlbiBzb21lb25lIHNlbGVjdCBhbiBpdGVtIGZyb20gZHJvcGJvd24gYm94XHJcblx0XHRvblNlbGVjdGVkSXRlbUNoYW5nZSgpIHtcclxuXHRcdFx0Y29uc29sZS5sb2coXCJTZWxlY3RlZCBpdGVtIGNoYW5nZVwiKTtcclxuXHRcdH0sXHJcblx0fSk7XHJcblxyXG5cdGNvbnN0IGl0ZW1zID0gZGF0YT8uc2VhcmNoVGVybSB8fCBbXTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxTZWFyY2hTdHlsZXM+XHJcblx0XHRcdDxkaXYgey4uLmdldENvbWJvYm94UHJvcHMoKX0+XHJcblx0XHRcdFx0PGlucHV0XHJcblx0XHRcdFx0XHR7Li4uZ2V0SW5wdXRQcm9wcyh7XHJcblx0XHRcdFx0XHRcdHR5cGU6IFwic2VhcmNoXCIsXHJcblx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyOiBcIlNlYXJjaCBmb3IgYW4gaXRlbVwiLFxyXG5cdFx0XHRcdFx0XHRpZDogXCJzZWFyY2hcIixcclxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lOiBsb2FkaW5nID8gXCJsb2FkaW5nXCIgOiBcIlwiLFxyXG5cdFx0XHRcdFx0fSl9XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHQ8RHJvcERvd24gey4uLmdldE1lbnVQcm9wcygpfT5cclxuXHRcdFx0XHR7aXRlbXMubWFwKChpdGVtKSA9PiAoXHJcblx0XHRcdFx0XHQ8RHJvcERvd25JdGVtIHsuLi5nZXRJbnB1dFByb3BzKHsgaXRlbSB9KX0+XHJcblx0XHRcdFx0XHRcdDxpbWdcclxuXHRcdFx0XHRcdFx0XHRzcmM9e2l0ZW0ucGhvdG8uaW1hZ2UucHVibGljVXJsVHJhbnNmb3JtZWR9XHJcblx0XHRcdFx0XHRcdFx0YWx0PXtpdGVtLm5hbWV9XHJcblx0XHRcdFx0XHRcdFx0d2lkdGg9XCI1MHB4XCJcclxuXHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0e2l0ZW0ubmFtZX1cclxuXHRcdFx0XHRcdDwvRHJvcERvd25JdGVtPlxyXG5cdFx0XHRcdCkpfVxyXG5cdFx0XHQ8L0Ryb3BEb3duPlxyXG5cdFx0PC9TZWFyY2hTdHlsZXM+XHJcblx0KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9