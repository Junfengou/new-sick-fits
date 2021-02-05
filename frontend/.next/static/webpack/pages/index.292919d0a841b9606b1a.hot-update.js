webpackHotUpdate_N_E("pages/index",{

/***/ "./components/DeleteProduct.js":
/*!*************************************!*\
  !*** ./components/DeleteProduct.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var D_React_Advanced_React_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var D_React_Advanced_React_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");




var _jsxFileName = "D:\\React\\Advanced-React\\Advanced-React\\sick-fits\\frontend\\components\\DeleteProduct.js",
    _s = $RefreshSig$();

function _templateObject() {
  var data = Object(D_React_Advanced_React_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n\tmutation DELETE_PRODUCT_MUTATION($id: ID!) {\n\t\tdeleteProduct(id: $id) {\n\t\t\tid\n\t\t\tname\n\t\t}\n\t}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var DELETE_PRODUCT_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_4___default()(_templateObject());
/*
    payload is what gets return 

    Side note: Instead of refetching the data everytime after deleting an item, just delete it from the cache 

*/

function update(cache, payload) {
  console.log(payload);
  console.log("Running the update function after delete");
  cache.evict(cache.identify(payload.data.deleteProduct));
}

function DeleteProduct(_ref) {
  _s();

  var id = _ref.id,
      children = _ref.children;

  var _useMutation = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_5__["useMutation"])(DELETE_PRODUCT_MUTATION, {
    variables: {
      id: id
    },
    update: update
  }),
      _useMutation2 = Object(D_React_Advanced_React_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useMutation, 2),
      deleteProduct = _useMutation2[0],
      loading = _useMutation2[1].loading;

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("button", {
    type: "button",
    disabled: loading,
    onClick: function onClick() {
      if (confirm("You sure?")) {
        // delete it
        console.log("deleting");
        deleteProduct()["catch"](function (err) {
          return alert(err.message);
        });
      }
    },
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 3
  }, this);
}

_s(DeleteProduct, "MAc2BuRR5i/aF3CQ0o0/sj++Nvs=", false, function () {
  return [_apollo_client__WEBPACK_IMPORTED_MODULE_5__["useMutation"]];
});

_c = DeleteProduct;
/* harmony default export */ __webpack_exports__["default"] = (DeleteProduct);

var _c;

$RefreshReg$(_c, "DeleteProduct");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9EZWxldGVQcm9kdWN0LmpzIl0sIm5hbWVzIjpbIkRFTEVURV9QUk9EVUNUX01VVEFUSU9OIiwiZ3FsIiwidXBkYXRlIiwiY2FjaGUiLCJwYXlsb2FkIiwiY29uc29sZSIsImxvZyIsImV2aWN0IiwiaWRlbnRpZnkiLCJkYXRhIiwiZGVsZXRlUHJvZHVjdCIsIkRlbGV0ZVByb2R1Y3QiLCJpZCIsImNoaWxkcmVuIiwidXNlTXV0YXRpb24iLCJ2YXJpYWJsZXMiLCJsb2FkaW5nIiwiY29uZmlybSIsImVyciIsImFsZXJ0IiwibWVzc2FnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLHVCQUF1QixHQUFHQyxrREFBSCxtQkFBN0I7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsU0FBU0MsTUFBVCxDQUFnQkMsS0FBaEIsRUFBdUJDLE9BQXZCLEVBQWdDO0FBQy9CQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUYsT0FBWjtBQUNBQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSwwQ0FBWjtBQUNBSCxPQUFLLENBQUNJLEtBQU4sQ0FBWUosS0FBSyxDQUFDSyxRQUFOLENBQWVKLE9BQU8sQ0FBQ0ssSUFBUixDQUFhQyxhQUE1QixDQUFaO0FBQ0E7O0FBRUQsU0FBU0MsYUFBVCxPQUF5QztBQUFBOztBQUFBLE1BQWhCQyxFQUFnQixRQUFoQkEsRUFBZ0I7QUFBQSxNQUFaQyxRQUFZLFFBQVpBLFFBQVk7O0FBQUEscUJBQ0hDLGtFQUFXLENBQUNkLHVCQUFELEVBQTBCO0FBQ3pFZSxhQUFTLEVBQUU7QUFBRUgsUUFBRSxFQUFGQTtBQUFGLEtBRDhEO0FBRXpFVixVQUFNLEVBQUVBO0FBRmlFLEdBQTFCLENBRFI7QUFBQTtBQUFBLE1BQ2pDUSxhQURpQztBQUFBLE1BQ2hCTSxPQURnQixvQkFDaEJBLE9BRGdCOztBQU14QyxzQkFDQztBQUNDLFFBQUksRUFBQyxRQUROO0FBRUMsWUFBUSxFQUFFQSxPQUZYO0FBR0MsV0FBTyxFQUFFLG1CQUFNO0FBQ2QsVUFBSUMsT0FBTyxDQUFDLFdBQUQsQ0FBWCxFQUEwQjtBQUN6QjtBQUNBWixlQUFPLENBQUNDLEdBQVIsQ0FBWSxVQUFaO0FBQ0FJLHFCQUFhLFdBQWIsQ0FBc0IsVUFBQ1EsR0FBRDtBQUFBLGlCQUFTQyxLQUFLLENBQUNELEdBQUcsQ0FBQ0UsT0FBTCxDQUFkO0FBQUEsU0FBdEI7QUFDQTtBQUNELEtBVEY7QUFBQSxjQVdFUDtBQVhGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERDtBQWVBOztHQXJCUUYsYTtVQUM2QkcsMEQ7OztLQUQ3QkgsYTtBQXVCTUEsNEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMjkyOTE5ZDBhODQxYjk2MDZiMWEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGdxbCBmcm9tIFwiZ3JhcGhxbC10YWdcIjtcclxuaW1wb3J0IHsgdXNlTXV0YXRpb24gfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcclxuXHJcbmNvbnN0IERFTEVURV9QUk9EVUNUX01VVEFUSU9OID0gZ3FsYFxyXG5cdG11dGF0aW9uIERFTEVURV9QUk9EVUNUX01VVEFUSU9OKCRpZDogSUQhKSB7XHJcblx0XHRkZWxldGVQcm9kdWN0KGlkOiAkaWQpIHtcclxuXHRcdFx0aWRcclxuXHRcdFx0bmFtZVxyXG5cdFx0fVxyXG5cdH1cclxuYDtcclxuXHJcbi8qXHJcbiAgICBwYXlsb2FkIGlzIHdoYXQgZ2V0cyByZXR1cm4gXHJcblxyXG4gICAgU2lkZSBub3RlOiBJbnN0ZWFkIG9mIHJlZmV0Y2hpbmcgdGhlIGRhdGEgZXZlcnl0aW1lIGFmdGVyIGRlbGV0aW5nIGFuIGl0ZW0sIGp1c3QgZGVsZXRlIGl0IGZyb20gdGhlIGNhY2hlIFxyXG5cclxuKi9cclxuZnVuY3Rpb24gdXBkYXRlKGNhY2hlLCBwYXlsb2FkKSB7XHJcblx0Y29uc29sZS5sb2cocGF5bG9hZCk7XHJcblx0Y29uc29sZS5sb2coXCJSdW5uaW5nIHRoZSB1cGRhdGUgZnVuY3Rpb24gYWZ0ZXIgZGVsZXRlXCIpO1xyXG5cdGNhY2hlLmV2aWN0KGNhY2hlLmlkZW50aWZ5KHBheWxvYWQuZGF0YS5kZWxldGVQcm9kdWN0KSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIERlbGV0ZVByb2R1Y3QoeyBpZCwgY2hpbGRyZW4gfSkge1xyXG5cdGNvbnN0IFtkZWxldGVQcm9kdWN0LCB7IGxvYWRpbmcgfV0gPSB1c2VNdXRhdGlvbihERUxFVEVfUFJPRFVDVF9NVVRBVElPTiwge1xyXG5cdFx0dmFyaWFibGVzOiB7IGlkIH0sXHJcblx0XHR1cGRhdGU6IHVwZGF0ZSxcclxuXHR9KTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxidXR0b25cclxuXHRcdFx0dHlwZT1cImJ1dHRvblwiXHJcblx0XHRcdGRpc2FibGVkPXtsb2FkaW5nfVxyXG5cdFx0XHRvbkNsaWNrPXsoKSA9PiB7XHJcblx0XHRcdFx0aWYgKGNvbmZpcm0oXCJZb3Ugc3VyZT9cIikpIHtcclxuXHRcdFx0XHRcdC8vIGRlbGV0ZSBpdFxyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coXCJkZWxldGluZ1wiKTtcclxuXHRcdFx0XHRcdGRlbGV0ZVByb2R1Y3QoKS5jYXRjaCgoZXJyKSA9PiBhbGVydChlcnIubWVzc2FnZSkpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fX1cclxuXHRcdD5cclxuXHRcdFx0e2NoaWxkcmVufVxyXG5cdFx0PC9idXR0b24+XHJcblx0KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGVsZXRlUHJvZHVjdDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==