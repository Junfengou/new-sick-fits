webpackHotUpdate_N_E("pages/_app",{

/***/ "./lib/paginationField.js":
/*!********************************!*\
  !*** ./lib/paginationField.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Pagination__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Pagination */ "./components/Pagination.js");



function paginationField() {
  return {
    keyArgs: false,
    // Tells Apollo that I will take care everything
    // args: The skip value that's passed in    cache: Apollo cache
    read: function read() {
      var _data$_allProductsMet;

      var existing = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

      var _ref = arguments.length > 1 ? arguments[1] : undefined,
          args = _ref.args,
          cache = _ref.cache;

      console.log({
        existing: existing,
        args: args,
        cache: cache
      });
      var skip = args.skip,
          first = args.first; //Read the number of items on the page from the cache

      var data = cache.readQuery({
        query: _components_Pagination__WEBPACK_IMPORTED_MODULE_1__["PAGINATION_QUERY"]
      });
      var count = data === null || data === void 0 ? void 0 : (_data$_allProductsMet = data._allProductsMeta) === null || _data$_allProductsMet === void 0 ? void 0 : _data$_allProductsMet.count; // what page we're currently on

      var page = skip / first + 1;
      var pages = Math.ceil(count / first); // Check if we have existing items

      var items = existing.slice(skip, skip + first).filter(function (item) {
        return item;
      }); //If there are items && if there are enough items to satisfy how many are requested && we are on the last page

      if (items.length && items.length !== first && page === pages) {
        return items;
      }

      if (items.length !== first) {
        // We don't have any items, we must go to the network to fetch them
        return false;
      } // If there are items, just return the items from the cache


      if (items.length) {
        console.log("There are ".concat(items.length, " items in the cache! Gonna send them to apollo"));
        return items;
      }

      return false; // fallback to network
      // When Apollo tries to query for all Products, it will first ask the read function for those items
      // Either do 1 of 2 things:
      // 1. Return the items because they are already in the cache
      // OR
      // 2. Return false from here [create a network request]
    },
    merge: function merge(existing, incoming, _ref2) {
      var args = _ref2.args;
      var skip = args.skip,
          first = args.first; // This runs when the Apollo client comes back from the Keystone with the products

      console.log("Merging items from the network ".concat(incoming.length)); // If there are existing items in the cache already, we want to take a copy of all the items

      var merged = existing ? existing.slice(0) : [];

      for (var i = skip; i < skip + incoming.length; ++i) {
        merged[i] = incoming[i - skip];
      }

      console.log(merged);
      return merged;
    }
  };
}

/* harmony default export */ __webpack_exports__["default"] = (paginationField);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL3BhZ2luYXRpb25GaWVsZC5qcyJdLCJuYW1lcyI6WyJwYWdpbmF0aW9uRmllbGQiLCJrZXlBcmdzIiwicmVhZCIsImV4aXN0aW5nIiwiYXJncyIsImNhY2hlIiwiY29uc29sZSIsImxvZyIsInNraXAiLCJmaXJzdCIsImRhdGEiLCJyZWFkUXVlcnkiLCJxdWVyeSIsIlBBR0lOQVRJT05fUVVFUlkiLCJjb3VudCIsIl9hbGxQcm9kdWN0c01ldGEiLCJwYWdlIiwicGFnZXMiLCJNYXRoIiwiY2VpbCIsIml0ZW1zIiwic2xpY2UiLCJmaWx0ZXIiLCJpdGVtIiwibGVuZ3RoIiwibWVyZ2UiLCJpbmNvbWluZyIsIm1lcmdlZCIsImkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7O0FBRUEsU0FBU0EsZUFBVCxHQUEyQjtBQUMxQixTQUFPO0FBQ05DLFdBQU8sRUFBRSxLQURIO0FBQ1U7QUFFaEI7QUFDQUMsUUFKTSxrQkFJK0I7QUFBQTs7QUFBQSxVQUFoQ0MsUUFBZ0MsdUVBQXJCLEVBQXFCOztBQUFBO0FBQUEsVUFBZkMsSUFBZSxRQUFmQSxJQUFlO0FBQUEsVUFBVEMsS0FBUyxRQUFUQSxLQUFTOztBQUNwQ0MsYUFBTyxDQUFDQyxHQUFSLENBQVk7QUFBRUosZ0JBQVEsRUFBUkEsUUFBRjtBQUFZQyxZQUFJLEVBQUpBLElBQVo7QUFBa0JDLGFBQUssRUFBTEE7QUFBbEIsT0FBWjtBQURvQyxVQUU1QkcsSUFGNEIsR0FFWkosSUFGWSxDQUU1QkksSUFGNEI7QUFBQSxVQUV0QkMsS0FGc0IsR0FFWkwsSUFGWSxDQUV0QkssS0FGc0IsRUFJcEM7O0FBQ0EsVUFBTUMsSUFBSSxHQUFHTCxLQUFLLENBQUNNLFNBQU4sQ0FBZ0I7QUFBRUMsYUFBSyxFQUFFQyx1RUFBZ0JBO0FBQXpCLE9BQWhCLENBQWI7QUFDQSxVQUFNQyxLQUFLLEdBQUdKLElBQUgsYUFBR0EsSUFBSCxnREFBR0EsSUFBSSxDQUFFSyxnQkFBVCwwREFBRyxzQkFBd0JELEtBQXRDLENBTm9DLENBUXBDOztBQUNBLFVBQU1FLElBQUksR0FBR1IsSUFBSSxHQUFHQyxLQUFQLEdBQWUsQ0FBNUI7QUFDQSxVQUFNUSxLQUFLLEdBQUdDLElBQUksQ0FBQ0MsSUFBTCxDQUFVTCxLQUFLLEdBQUdMLEtBQWxCLENBQWQsQ0FWb0MsQ0FZcEM7O0FBQ0EsVUFBTVcsS0FBSyxHQUFHakIsUUFBUSxDQUFDa0IsS0FBVCxDQUFlYixJQUFmLEVBQXFCQSxJQUFJLEdBQUdDLEtBQTVCLEVBQW1DYSxNQUFuQyxDQUEwQyxVQUFDQyxJQUFEO0FBQUEsZUFBVUEsSUFBVjtBQUFBLE9BQTFDLENBQWQsQ0Fib0MsQ0FlcEM7O0FBQ0EsVUFBSUgsS0FBSyxDQUFDSSxNQUFOLElBQWdCSixLQUFLLENBQUNJLE1BQU4sS0FBaUJmLEtBQWpDLElBQTBDTyxJQUFJLEtBQUtDLEtBQXZELEVBQThEO0FBQzdELGVBQU9HLEtBQVA7QUFDQTs7QUFFRCxVQUFJQSxLQUFLLENBQUNJLE1BQU4sS0FBaUJmLEtBQXJCLEVBQTRCO0FBQzNCO0FBQ0EsZUFBTyxLQUFQO0FBQ0EsT0F2Qm1DLENBeUJwQzs7O0FBQ0EsVUFBSVcsS0FBSyxDQUFDSSxNQUFWLEVBQWtCO0FBQ2pCbEIsZUFBTyxDQUFDQyxHQUFSLHFCQUNjYSxLQUFLLENBQUNJLE1BRHBCO0FBR0EsZUFBT0osS0FBUDtBQUNBOztBQUVELGFBQU8sS0FBUCxDQWpDb0MsQ0FpQ3RCO0FBRWQ7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUNBLEtBaERLO0FBaUROSyxTQWpETSxpQkFpREF0QixRQWpEQSxFQWlEVXVCLFFBakRWLFNBaUQ4QjtBQUFBLFVBQVJ0QixJQUFRLFNBQVJBLElBQVE7QUFBQSxVQUMzQkksSUFEMkIsR0FDWEosSUFEVyxDQUMzQkksSUFEMkI7QUFBQSxVQUNyQkMsS0FEcUIsR0FDWEwsSUFEVyxDQUNyQkssS0FEcUIsRUFFbkM7O0FBQ0FILGFBQU8sQ0FBQ0MsR0FBUiwwQ0FBOENtQixRQUFRLENBQUNGLE1BQXZELEdBSG1DLENBSW5DOztBQUNBLFVBQU1HLE1BQU0sR0FBR3hCLFFBQVEsR0FBR0EsUUFBUSxDQUFDa0IsS0FBVCxDQUFlLENBQWYsQ0FBSCxHQUF1QixFQUE5Qzs7QUFDQSxXQUFLLElBQUlPLENBQUMsR0FBR3BCLElBQWIsRUFBbUJvQixDQUFDLEdBQUdwQixJQUFJLEdBQUdrQixRQUFRLENBQUNGLE1BQXZDLEVBQStDLEVBQUVJLENBQWpELEVBQW9EO0FBQ25ERCxjQUFNLENBQUNDLENBQUQsQ0FBTixHQUFZRixRQUFRLENBQUNFLENBQUMsR0FBR3BCLElBQUwsQ0FBcEI7QUFDQTs7QUFDREYsYUFBTyxDQUFDQyxHQUFSLENBQVlvQixNQUFaO0FBQ0EsYUFBT0EsTUFBUDtBQUNBO0FBNURLLEdBQVA7QUE4REE7O0FBRWMzQiw4RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmI1NjMwMGYxMmVkN2Y4MDM5YzMwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFBBR0lOQVRJT05fUVVFUlkgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9QYWdpbmF0aW9uXCI7XHJcblxyXG5mdW5jdGlvbiBwYWdpbmF0aW9uRmllbGQoKSB7XHJcblx0cmV0dXJuIHtcclxuXHRcdGtleUFyZ3M6IGZhbHNlLCAvLyBUZWxscyBBcG9sbG8gdGhhdCBJIHdpbGwgdGFrZSBjYXJlIGV2ZXJ5dGhpbmdcclxuXHJcblx0XHQvLyBhcmdzOiBUaGUgc2tpcCB2YWx1ZSB0aGF0J3MgcGFzc2VkIGluICAgIGNhY2hlOiBBcG9sbG8gY2FjaGVcclxuXHRcdHJlYWQoZXhpc3RpbmcgPSBbXSwgeyBhcmdzLCBjYWNoZSB9KSB7XHJcblx0XHRcdGNvbnNvbGUubG9nKHsgZXhpc3RpbmcsIGFyZ3MsIGNhY2hlIH0pO1xyXG5cdFx0XHRjb25zdCB7IHNraXAsIGZpcnN0IH0gPSBhcmdzO1xyXG5cclxuXHRcdFx0Ly9SZWFkIHRoZSBudW1iZXIgb2YgaXRlbXMgb24gdGhlIHBhZ2UgZnJvbSB0aGUgY2FjaGVcclxuXHRcdFx0Y29uc3QgZGF0YSA9IGNhY2hlLnJlYWRRdWVyeSh7IHF1ZXJ5OiBQQUdJTkFUSU9OX1FVRVJZIH0pO1xyXG5cdFx0XHRjb25zdCBjb3VudCA9IGRhdGE/Ll9hbGxQcm9kdWN0c01ldGE/LmNvdW50O1xyXG5cclxuXHRcdFx0Ly8gd2hhdCBwYWdlIHdlJ3JlIGN1cnJlbnRseSBvblxyXG5cdFx0XHRjb25zdCBwYWdlID0gc2tpcCAvIGZpcnN0ICsgMTtcclxuXHRcdFx0Y29uc3QgcGFnZXMgPSBNYXRoLmNlaWwoY291bnQgLyBmaXJzdCk7XHJcblxyXG5cdFx0XHQvLyBDaGVjayBpZiB3ZSBoYXZlIGV4aXN0aW5nIGl0ZW1zXHJcblx0XHRcdGNvbnN0IGl0ZW1zID0gZXhpc3Rpbmcuc2xpY2Uoc2tpcCwgc2tpcCArIGZpcnN0KS5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0pO1xyXG5cclxuXHRcdFx0Ly9JZiB0aGVyZSBhcmUgaXRlbXMgJiYgaWYgdGhlcmUgYXJlIGVub3VnaCBpdGVtcyB0byBzYXRpc2Z5IGhvdyBtYW55IGFyZSByZXF1ZXN0ZWQgJiYgd2UgYXJlIG9uIHRoZSBsYXN0IHBhZ2VcclxuXHRcdFx0aWYgKGl0ZW1zLmxlbmd0aCAmJiBpdGVtcy5sZW5ndGggIT09IGZpcnN0ICYmIHBhZ2UgPT09IHBhZ2VzKSB7XHJcblx0XHRcdFx0cmV0dXJuIGl0ZW1zO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAoaXRlbXMubGVuZ3RoICE9PSBmaXJzdCkge1xyXG5cdFx0XHRcdC8vIFdlIGRvbid0IGhhdmUgYW55IGl0ZW1zLCB3ZSBtdXN0IGdvIHRvIHRoZSBuZXR3b3JrIHRvIGZldGNoIHRoZW1cclxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vIElmIHRoZXJlIGFyZSBpdGVtcywganVzdCByZXR1cm4gdGhlIGl0ZW1zIGZyb20gdGhlIGNhY2hlXHJcblx0XHRcdGlmIChpdGVtcy5sZW5ndGgpIHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhcclxuXHRcdFx0XHRcdGBUaGVyZSBhcmUgJHtpdGVtcy5sZW5ndGh9IGl0ZW1zIGluIHRoZSBjYWNoZSEgR29ubmEgc2VuZCB0aGVtIHRvIGFwb2xsb2BcclxuXHRcdFx0XHQpO1xyXG5cdFx0XHRcdHJldHVybiBpdGVtcztcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0cmV0dXJuIGZhbHNlOyAvLyBmYWxsYmFjayB0byBuZXR3b3JrXHJcblxyXG5cdFx0XHQvLyBXaGVuIEFwb2xsbyB0cmllcyB0byBxdWVyeSBmb3IgYWxsIFByb2R1Y3RzLCBpdCB3aWxsIGZpcnN0IGFzayB0aGUgcmVhZCBmdW5jdGlvbiBmb3IgdGhvc2UgaXRlbXNcclxuXHJcblx0XHRcdC8vIEVpdGhlciBkbyAxIG9mIDIgdGhpbmdzOlxyXG5cclxuXHRcdFx0Ly8gMS4gUmV0dXJuIHRoZSBpdGVtcyBiZWNhdXNlIHRoZXkgYXJlIGFscmVhZHkgaW4gdGhlIGNhY2hlXHJcblxyXG5cdFx0XHQvLyBPUlxyXG5cclxuXHRcdFx0Ly8gMi4gUmV0dXJuIGZhbHNlIGZyb20gaGVyZSBbY3JlYXRlIGEgbmV0d29yayByZXF1ZXN0XVxyXG5cdFx0fSxcclxuXHRcdG1lcmdlKGV4aXN0aW5nLCBpbmNvbWluZywgeyBhcmdzIH0pIHtcclxuXHRcdFx0Y29uc3QgeyBza2lwLCBmaXJzdCB9ID0gYXJncztcclxuXHRcdFx0Ly8gVGhpcyBydW5zIHdoZW4gdGhlIEFwb2xsbyBjbGllbnQgY29tZXMgYmFjayBmcm9tIHRoZSBLZXlzdG9uZSB3aXRoIHRoZSBwcm9kdWN0c1xyXG5cdFx0XHRjb25zb2xlLmxvZyhgTWVyZ2luZyBpdGVtcyBmcm9tIHRoZSBuZXR3b3JrICR7aW5jb21pbmcubGVuZ3RofWApO1xyXG5cdFx0XHQvLyBJZiB0aGVyZSBhcmUgZXhpc3RpbmcgaXRlbXMgaW4gdGhlIGNhY2hlIGFscmVhZHksIHdlIHdhbnQgdG8gdGFrZSBhIGNvcHkgb2YgYWxsIHRoZSBpdGVtc1xyXG5cdFx0XHRjb25zdCBtZXJnZWQgPSBleGlzdGluZyA/IGV4aXN0aW5nLnNsaWNlKDApIDogW107XHJcblx0XHRcdGZvciAobGV0IGkgPSBza2lwOyBpIDwgc2tpcCArIGluY29taW5nLmxlbmd0aDsgKytpKSB7XHJcblx0XHRcdFx0bWVyZ2VkW2ldID0gaW5jb21pbmdbaSAtIHNraXBdO1xyXG5cdFx0XHR9XHJcblx0XHRcdGNvbnNvbGUubG9nKG1lcmdlZCk7XHJcblx0XHRcdHJldHVybiBtZXJnZWQ7XHJcblx0XHR9LFxyXG5cdH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHBhZ2luYXRpb25GaWVsZDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==