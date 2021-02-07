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
    },
    itemToString: function itemToString(item) {
      return (item === null || item === void 0 ? void 0 : item.name) || "";
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
        lineNumber: 90,
        columnNumber: 5
      }, this)
    }), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 89,
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
            lineNumber: 108,
            columnNumber: 8
          }, _this), item.name]
        }), item.id, true, {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 7
        }, _this);
      }), isOpen && !items.length && !loading && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_styles_DropDown__WEBPACK_IMPORTED_MODULE_7__["DropDownItem"], {
        children: ["Sorry, no item found for ", inputValue]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 6
      }, this)]
    }), void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 4
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 88,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TZWFyY2guanMiXSwibmFtZXMiOlsiU0VBUkNIX1BST0RVQ1RfUVVFUlkiLCJncWwiLCJTZWFyY2giLCJ1c2VMYXp5UXVlcnkiLCJmZXRjaFBvbGljeSIsImZpbmRJdGVtcyIsImRhdGEiLCJsb2FkaW5nIiwiZXJyb3IiLCJmaW5kSXRlbUJ1dENoaWxsQnJ1aCIsImRlYm91bmNlIiwicmVzZXRJZENvdW50ZXIiLCJpdGVtcyIsInNlYXJjaFRlcm0iLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VDb21ib2JveCIsIm9uSW5wdXRWYWx1ZUNoYW5nZSIsImNvbnNvbGUiLCJsb2ciLCJ2YXJpYWJsZXMiLCJpbnB1dFZhbHVlIiwib25TZWxlY3RlZEl0ZW1DaGFuZ2UiLCJzZWxlY3RlZEl0ZW0iLCJwdXNoIiwicGF0aG5hbWUiLCJpZCIsIml0ZW1Ub1N0cmluZyIsIml0ZW0iLCJuYW1lIiwiaXNPcGVuIiwiZ2V0TWVudVByb3BzIiwiZ2V0SW5wdXRQcm9wcyIsImdldENvbWJvYm94UHJvcHMiLCJnZXRJdGVtUHJvcHMiLCJoaWdobGlnaHRlZEluZGV4IiwidHlwZSIsInBsYWNlaG9sZGVyIiwiY2xhc3NOYW1lIiwibWFwIiwiaW5kZXgiLCJwaG90byIsImltYWdlIiwicHVibGljVXJsVHJhbnNmb3JtZWQiLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLG9CQUFvQixHQUFHQyxrREFBSCxtQkFBMUI7O0FBcUJBLFNBQVNDLE1BQVQsR0FBa0I7QUFBQTs7QUFBQTs7QUFDakI7QUFDQTtBQUZpQixzQkFHNkJDLG1FQUFZLENBQ3pESCxvQkFEeUQsRUFFekQ7QUFDQztBQUNBSSxlQUFXLEVBQUU7QUFGZCxHQUZ5RCxDQUh6QztBQUFBO0FBQUEsTUFHVkMs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Q2dDLE1BQWpCLElBQTJCLENBQUNyQyxPQUE1QixpQkFDQSxxRUFBQyw2REFBRDtBQUFBLGdEQUF3Q2MsVUFBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBakJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUREO0FBbUNBOztHQTVGUW5CLE07VUFHc0NDLDJELEVBdUIvQlksc0QsRUFVWEMscUQ7OztLQXBDSWQsTTtBQThGTUEscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5jOTcxMmI0ZTBjMmM2ZTk5MTA2YS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgZ3FsIGZyb20gXCJncmFwaHFsLXRhZ1wiO1xyXG5pbXBvcnQgeyByZXNldElkQ291bnRlciwgdXNlQ29tYm9ib3ggfSBmcm9tIFwiZG93bnNoaWZ0XCI7XHJcbmltcG9ydCB7IFNlYXJjaFN0eWxlcywgRHJvcERvd24sIERyb3BEb3duSXRlbSB9IGZyb20gXCIuL3N0eWxlcy9Ecm9wRG93blwiO1xyXG5pbXBvcnQgeyB1c2VMYXp5UXVlcnkgfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcclxuaW1wb3J0IGRlYm91bmNlIGZyb20gXCJsb2Rhc2guZGVib3VuY2VcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5jb25zdCBTRUFSQ0hfUFJPRFVDVF9RVUVSWSA9IGdxbGBcclxuXHRxdWVyeSBTRUFSQ0hfUFJPRFVDVF9RVUVSWSgkc2VhcmNoVGVybTogU3RyaW5nISkge1xyXG5cdFx0c2VhcmNoVGVybTogYWxsUHJvZHVjdHMoXHJcblx0XHRcdHdoZXJlOiB7XHJcblx0XHRcdFx0T1I6IFtcclxuXHRcdFx0XHRcdHsgbmFtZV9jb250YWluc19pOiAkc2VhcmNoVGVybSB9XHJcblx0XHRcdFx0XHR7IGRlc2NyaXB0aW9uX2NvbnRhaW5zX2k6ICRzZWFyY2hUZXJtIH1cclxuXHRcdFx0XHRdXHJcblx0XHRcdH1cclxuXHRcdCkge1xyXG5cdFx0XHRpZFxyXG5cdFx0XHRuYW1lXHJcblx0XHRcdHBob3RvIHtcclxuXHRcdFx0XHRpbWFnZSB7XHJcblx0XHRcdFx0XHRwdWJsaWNVcmxUcmFuc2Zvcm1lZFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuYDtcclxuXHJcbmZ1bmN0aW9uIFNlYXJjaCgpIHtcclxuXHQvLyBJbnN0ZWFkIG9mIGRvaW5nIFt1c2VRdWVyeV0gdGhhdCBoYXBwZW5zIG9uIHBhZ2UgbG9hZCwgd2Ugd2FudCB0byBpbnN0YW50bHkgcXVlcnkgaXQgYnkgY29tbWFuZFxyXG5cdC8vIEFsd2F5cyBieXBhc3MgdGhlIGFwb2xsbyBjYWNoZSBhbmQgZ28gc3RyYWlnaHQgdG8gdGhlIG5ldHdvcmtcclxuXHRjb25zdCBbZmluZEl0ZW1zLCB7IGRhdGEsIGxvYWRpbmcsIGVycm9yIH1dID0gdXNlTGF6eVF1ZXJ5KFxyXG5cdFx0U0VBUkNIX1BST0RVQ1RfUVVFUlksXHJcblx0XHR7XHJcblx0XHRcdC8vSU1QT1JUQU5UOiBpZiB5b3UgZG9uJ3QgZG8gdGhpcywgaXQgd2lsbCBvbmx5IHF1ZXJ5IHdoYXRldmVyIGl0ZW0gaXMgb24gdGhlIGN1cnJlbnQgcGFnaW5hdGlvbiBwYWdlXHJcblx0XHRcdGZldGNoUG9saWN5OiBcIm5vLWNhY2hlXCIsXHJcblx0XHR9XHJcblx0KTtcclxuXHJcblx0LypcclxuICAgICAgICBUaGUgcHVycG9zZSBvZiB0aGlzIGxpbmUgb2YgY29kZSBpcyB0byBwcmV2ZW50IHRoZSBzZXJ2ZXIgZnJvbSBjcmFzaGluZy4gXHJcbiAgICAgICAgR2VuZXJhbGx5IHdoZW4gYSB1c2VyIHR5cGUgaW4gdGhlIHNlYXJjaCwgZWFjaCBrZXkgdXAgZXZlbnQgd2lsbCB0cmlnZ2VyIGEgY2FsbCBiYWNrIHRvIHRoZSBzZXJ2ZXIuIFdoZW4gdGhlcmUncyBleGNlc3NpdmVcclxuICAgICAgICBhbW91bnQgb2YgY2FsbHMgYmFjayB0byB0aGUgc2VydmVyIGluIGEgc2hvcnQgYW1vdW50IG9mIHRpbWUsIGl0IHdpbGwgRERvUyB5b3VyIGJhY2tlbmQuIFxyXG5cclxuICAgICAgICBPbmUgZ29vZCB3YXkgdG8gcHJldmVudCB0aGF0IGZyb20gaGFwcGVuaW5nIGlzIHRvIHVzZSBbZGVib3VuY2UoKV0gYW5kIHNldCBhIHRpbWVyIG9uIGhvd2V2ZXJ5IG1hbnkgc2Vjb25kcyB5b3Ugd2FubmEgd2FpdCBiZWZvcmVcclxuICAgICAgICBzZW5kaW5nIHRoZSByZXF1ZXN0IGFzIGEgcGFja2FnZSBiYWNrIHRvIHRoZSBzZXJ2ZXIgaW5zdGVhZCBvZiBzZW5kaW5nIGEgcmVxdWVzdCBiYWNrIGFmdGVyIGV2ZXJ5IGtleSB1cCBldmVudFxyXG4gICAgICovXHJcblx0Y29uc3QgZmluZEl0ZW1CdXRDaGlsbEJydWggPSBkZWJvdW5jZShmaW5kSXRlbXMsIDM1MCk7XHJcblxyXG5cdC8vIFRoaXMgdGFrZXMgY2FyZSBhbnkgc2VydmVyIHNpZGUgcmVuZGVyaW5nIGlzc3VlcyB5b3UgbWF5IGhhdmVcclxuXHRyZXNldElkQ291bnRlcigpO1xyXG5cclxuXHRjb25zdCBpdGVtcyA9IGRhdGE/LnNlYXJjaFRlcm0gfHwgW107XHJcblxyXG5cdGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuXHRjb25zdCB7XHJcblx0XHRpc09wZW4sXHJcblx0XHRpbnB1dFZhbHVlLFxyXG5cdFx0Z2V0TWVudVByb3BzLFxyXG5cdFx0Z2V0SW5wdXRQcm9wcyxcclxuXHRcdGdldENvbWJvYm94UHJvcHMsXHJcblx0XHRnZXRJdGVtUHJvcHMsXHJcblx0XHRoaWdobGlnaHRlZEluZGV4LFxyXG5cdH0gPSB1c2VDb21ib2JveCh7XHJcblx0XHRpdGVtczogaXRlbXMsXHJcblx0XHQvLyBGaXJlIHdoZW4gaW5wdXQgZGV0ZWN0ZWQgaW4gdGhlIHNlYXJjaCBib3hcclxuXHRcdG9uSW5wdXRWYWx1ZUNoYW5nZSgpIHtcclxuXHRcdFx0Y29uc29sZS5sb2coXCJJbnB1dCBjaGFuZ2VkXCIpO1xyXG5cdFx0XHRmaW5kSXRlbUJ1dENoaWxsQnJ1aCh7XHJcblx0XHRcdFx0dmFyaWFibGVzOiB7XHJcblx0XHRcdFx0XHRzZWFyY2hUZXJtOiBpbnB1dFZhbHVlLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdH0pO1xyXG5cdFx0fSxcclxuXHJcblx0XHQvLyBGaXJlIHdoZW4gc29tZW9uZSBzZWxlY3QgYW4gaXRlbSBmcm9tIGRyb3Bib3duIGJveFxyXG5cdFx0b25TZWxlY3RlZEl0ZW1DaGFuZ2UoeyBzZWxlY3RlZEl0ZW0gfSkge1xyXG5cdFx0XHRyb3V0ZXIucHVzaCh7XHJcblx0XHRcdFx0cGF0aG5hbWU6IGAvcHJvZHVjdC8ke3NlbGVjdGVkSXRlbS5pZH1gLFxyXG5cdFx0XHR9KTtcclxuXHRcdH0sXHJcblx0XHRpdGVtVG9TdHJpbmc6IChpdGVtKSA9PiBpdGVtPy5uYW1lIHx8IFwiXCIsXHJcblx0fSk7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8U2VhcmNoU3R5bGVzPlxyXG5cdFx0XHQ8ZGl2IHsuLi5nZXRDb21ib2JveFByb3BzKCl9PlxyXG5cdFx0XHRcdDxpbnB1dFxyXG5cdFx0XHRcdFx0ey4uLmdldElucHV0UHJvcHMoe1xyXG5cdFx0XHRcdFx0XHR0eXBlOiBcInNlYXJjaFwiLFxyXG5cdFx0XHRcdFx0XHRwbGFjZWhvbGRlcjogXCJTZWFyY2ggZm9yIGFuIGl0ZW1cIixcclxuXHRcdFx0XHRcdFx0aWQ6IFwic2VhcmNoXCIsXHJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZTogbG9hZGluZyA/IFwibG9hZGluZ1wiIDogXCJcIixcclxuXHRcdFx0XHRcdH0pfVxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0PERyb3BEb3duIHsuLi5nZXRNZW51UHJvcHMoKX0+XHJcblx0XHRcdFx0e2lzT3BlbiAmJlxyXG5cdFx0XHRcdFx0aXRlbXMubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG5cdFx0XHRcdFx0XHQ8RHJvcERvd25JdGVtXHJcblx0XHRcdFx0XHRcdFx0a2V5PXtpdGVtLmlkfVxyXG5cdFx0XHRcdFx0XHRcdHsuLi5nZXRJdGVtUHJvcHMoeyBpdGVtIH0pfVxyXG5cdFx0XHRcdFx0XHRcdGhpZ2hsaWdodGVkPXtpbmRleCA9PT0gaGlnaGxpZ2h0ZWRJbmRleH1cclxuXHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdDxpbWdcclxuXHRcdFx0XHRcdFx0XHRcdHNyYz17aXRlbS5waG90by5pbWFnZS5wdWJsaWNVcmxUcmFuc2Zvcm1lZH1cclxuXHRcdFx0XHRcdFx0XHRcdGFsdD17aXRlbS5uYW1lfVxyXG5cdFx0XHRcdFx0XHRcdFx0d2lkdGg9XCI1MHB4XCJcclxuXHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdHtpdGVtLm5hbWV9XHJcblx0XHRcdFx0XHRcdDwvRHJvcERvd25JdGVtPlxyXG5cdFx0XHRcdFx0KSl9XHJcblx0XHRcdFx0e2lzT3BlbiAmJiAhaXRlbXMubGVuZ3RoICYmICFsb2FkaW5nICYmIChcclxuXHRcdFx0XHRcdDxEcm9wRG93bkl0ZW0+U29ycnksIG5vIGl0ZW0gZm91bmQgZm9yIHtpbnB1dFZhbHVlfTwvRHJvcERvd25JdGVtPlxyXG5cdFx0XHRcdCl9XHJcblx0XHRcdDwvRHJvcERvd24+XHJcblx0XHQ8L1NlYXJjaFN0eWxlcz5cclxuXHQpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZWFyY2g7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=