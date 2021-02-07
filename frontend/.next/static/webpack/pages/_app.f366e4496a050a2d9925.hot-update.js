webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/RemoveFromCart.js":
/*!**************************************!*\
  !*** ./components/RemoveFromCart.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var D_React_Advanced_React_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var D_React_Advanced_React_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./User */ "./components/User.js");




var _jsxFileName = "D:\\React\\Advanced-React\\Advanced-React\\sick-fits\\frontend\\components\\RemoveFromCart.js",
    _s = $RefreshSig$();

function _templateObject2() {
  var data = Object(D_React_Advanced_React_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n\tmutation REMOVE_FROM_CART($id: ID!) {\n\t\tdeleteCartItem(id: $id) {\n\t\t\tquantity\n\t\t}\n\t}\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(D_React_Advanced_React_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n\tfont-size: 3rem;\n\tbackground: none;\n\tborder: 0;\n\t&:hover {\n\t\tcolor: var(--red);\n\t\tcursor: pointer;\n\t}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}






var BigButton = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].button(_templateObject());
_c = BigButton;
var REMOVE_FROM_CART = graphql_tag__WEBPACK_IMPORTED_MODULE_4___default()(_templateObject2());
/*
function update(cache, payload) {
	cache.evict(cache.identify(payload.data.deleteCartItem));
}
*/

function RemoveFromCart(_ref) {
  _s();

  var id = _ref.id;

  var _useMutation = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_6__["useMutation"])(REMOVE_FROM_CART, {
    variables: {
      id: id
    },
    // refetchQueries: [{ query: CURRENT_USER_QUERY }],
    optimisticResponse: {
      deleteCartItem: {
        __typename: "CartItem",
        id: id
      }
    }
  }),
      _useMutation2 = Object(D_React_Advanced_React_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useMutation, 2),
      deleteCartItem = _useMutation2[0],
      loading = _useMutation2[1].loading;

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(BigButton, {
    disabled: loading,
    type: "button",
    onClick: deleteCartItem,
    title: "Remove This Item from Cart",
    children: "\xD7"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 44,
    columnNumber: 3
  }, this);
}

_s(RemoveFromCart, "LiTpnRTFbqdSKSBYNmGb3YQ3e8g=", false, function () {
  return [_apollo_client__WEBPACK_IMPORTED_MODULE_6__["useMutation"]];
});

_c2 = RemoveFromCart;
/* harmony default export */ __webpack_exports__["default"] = (RemoveFromCart);

var _c, _c2;

$RefreshReg$(_c, "BigButton");
$RefreshReg$(_c2, "RemoveFromCart");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9SZW1vdmVGcm9tQ2FydC5qcyJdLCJuYW1lcyI6WyJCaWdCdXR0b24iLCJzdHlsZWQiLCJidXR0b24iLCJSRU1PVkVfRlJPTV9DQVJUIiwiZ3FsIiwiUmVtb3ZlRnJvbUNhcnQiLCJpZCIsInVzZU11dGF0aW9uIiwidmFyaWFibGVzIiwib3B0aW1pc3RpY1Jlc3BvbnNlIiwiZGVsZXRlQ2FydEl0ZW0iLCJfX3R5cGVuYW1lIiwibG9hZGluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLHlEQUFNLENBQUNDLE1BQVYsbUJBQWY7S0FBTUYsUztBQVVOLElBQU1HLGdCQUFnQixHQUFHQyxrREFBSCxvQkFBdEI7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNDLGNBQVQsT0FBZ0M7QUFBQTs7QUFBQSxNQUFOQyxFQUFNLFFBQU5BLEVBQU07O0FBQUEscUJBQ09DLGtFQUFXLENBQUNKLGdCQUFELEVBQW1CO0FBQ25FSyxhQUFTLEVBQUU7QUFBRUYsUUFBRSxFQUFGQTtBQUFGLEtBRHdEO0FBRW5FO0FBQ0FHLHNCQUFrQixFQUFFO0FBQ25CQyxvQkFBYyxFQUFFO0FBQ2ZDLGtCQUFVLEVBQUUsVUFERztBQUVmTCxVQUFFLEVBQUZBO0FBRmU7QUFERztBQUgrQyxHQUFuQixDQURsQjtBQUFBO0FBQUEsTUFDeEJJLGNBRHdCO0FBQUEsTUFDTkUsT0FETSxvQkFDTkEsT0FETTs7QUFZL0Isc0JBQ0MscUVBQUMsU0FBRDtBQUNDLFlBQVEsRUFBRUEsT0FEWDtBQUVDLFFBQUksRUFBQyxRQUZOO0FBR0MsV0FBTyxFQUFFRixjQUhWO0FBSUMsU0FBSyxFQUFDLDRCQUpQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREQ7QUFVQTs7R0F0QlFMLGM7VUFDOEJFLDBEOzs7TUFEOUJGLGM7QUF3Qk1BLDZFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuZjM2NmU0NDk2YTA1MGEyZDk5MjUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGdxbCBmcm9tIFwiZ3JhcGhxbC10YWdcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHsgdXNlTXV0YXRpb24gfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcclxuaW1wb3J0IHsgQ1VSUkVOVF9VU0VSX1FVRVJZIH0gZnJvbSBcIi4vVXNlclwiO1xyXG5cclxuY29uc3QgQmlnQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcclxuXHRmb250LXNpemU6IDNyZW07XHJcblx0YmFja2dyb3VuZDogbm9uZTtcclxuXHRib3JkZXI6IDA7XHJcblx0Jjpob3ZlciB7XHJcblx0XHRjb2xvcjogdmFyKC0tcmVkKTtcclxuXHRcdGN1cnNvcjogcG9pbnRlcjtcclxuXHR9XHJcbmA7XHJcblxyXG5jb25zdCBSRU1PVkVfRlJPTV9DQVJUID0gZ3FsYFxyXG5cdG11dGF0aW9uIFJFTU9WRV9GUk9NX0NBUlQoJGlkOiBJRCEpIHtcclxuXHRcdGRlbGV0ZUNhcnRJdGVtKGlkOiAkaWQpIHtcclxuXHRcdFx0cXVhbnRpdHlcclxuXHRcdH1cclxuXHR9XHJcbmA7XHJcblxyXG4vKlxyXG5mdW5jdGlvbiB1cGRhdGUoY2FjaGUsIHBheWxvYWQpIHtcclxuXHRjYWNoZS5ldmljdChjYWNoZS5pZGVudGlmeShwYXlsb2FkLmRhdGEuZGVsZXRlQ2FydEl0ZW0pKTtcclxufVxyXG4qL1xyXG5cclxuZnVuY3Rpb24gUmVtb3ZlRnJvbUNhcnQoeyBpZCB9KSB7XHJcblx0Y29uc3QgW2RlbGV0ZUNhcnRJdGVtLCB7IGxvYWRpbmcgfV0gPSB1c2VNdXRhdGlvbihSRU1PVkVfRlJPTV9DQVJULCB7XHJcblx0XHR2YXJpYWJsZXM6IHsgaWQgfSxcclxuXHRcdC8vIHJlZmV0Y2hRdWVyaWVzOiBbeyBxdWVyeTogQ1VSUkVOVF9VU0VSX1FVRVJZIH1dLFxyXG5cdFx0b3B0aW1pc3RpY1Jlc3BvbnNlOiB7XHJcblx0XHRcdGRlbGV0ZUNhcnRJdGVtOiB7XHJcblx0XHRcdFx0X190eXBlbmFtZTogXCJDYXJ0SXRlbVwiLFxyXG5cdFx0XHRcdGlkLFxyXG5cdFx0XHR9LFxyXG5cdFx0fSxcclxuXHR9KTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxCaWdCdXR0b25cclxuXHRcdFx0ZGlzYWJsZWQ9e2xvYWRpbmd9XHJcblx0XHRcdHR5cGU9XCJidXR0b25cIlxyXG5cdFx0XHRvbkNsaWNrPXtkZWxldGVDYXJ0SXRlbX1cclxuXHRcdFx0dGl0bGU9XCJSZW1vdmUgVGhpcyBJdGVtIGZyb20gQ2FydFwiXHJcblx0XHQ+XHJcblx0XHRcdCZ0aW1lcztcclxuXHRcdDwvQmlnQnV0dG9uPlxyXG5cdCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlbW92ZUZyb21DYXJ0O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9