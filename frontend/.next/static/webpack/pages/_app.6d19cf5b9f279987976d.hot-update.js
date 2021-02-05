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
/*
    The whole purpose of this file is to solve the ordering issue with pagination when user delete an item

    Each page displays 4 items. When an item gets deleted, it is ideal to push the next item on the next page to the previous page
        to fill in the spot. Since initially all items in apollo cache are categorized in different sections by pagination, 
        we need a way to combine all of them in a single list in order to filter out the items we need. 

    This is from video : #35
    Example: 
        1 2 3 4 | 5 6 7 8 | 9 10 11 12
            This is the initial item list, each number represent a single item. Each line represent a page 
        1 2 3 4 | 5 6 7 9 | 10 11 12 
            When item [#8] gets deleted, we need to move item [#9] up a page to maintain the consistency of 4 items per page

*/



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
      var pages = Math.ceil(count / first); // Check if we have existing items, start at skip value and go until you hit (skip + 4)

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL3BhZ2luYXRpb25GaWVsZC5qcyJdLCJuYW1lcyI6WyJwYWdpbmF0aW9uRmllbGQiLCJrZXlBcmdzIiwicmVhZCIsImV4aXN0aW5nIiwiYXJncyIsImNhY2hlIiwiY29uc29sZSIsImxvZyIsInNraXAiLCJmaXJzdCIsImRhdGEiLCJyZWFkUXVlcnkiLCJxdWVyeSIsIlBBR0lOQVRJT05fUVVFUlkiLCJjb3VudCIsIl9hbGxQcm9kdWN0c01ldGEiLCJwYWdlIiwicGFnZXMiLCJNYXRoIiwiY2VpbCIsIml0ZW1zIiwic2xpY2UiLCJmaWx0ZXIiLCJpdGVtIiwibGVuZ3RoIiwibWVyZ2UiLCJpbmNvbWluZyIsIm1lcmdlZCIsImkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUEsU0FBU0EsZUFBVCxHQUEyQjtBQUMxQixTQUFPO0FBQ05DLFdBQU8sRUFBRSxLQURIO0FBQ1U7QUFFaEI7QUFDQUMsUUFKTSxrQkFJK0I7QUFBQTs7QUFBQSxVQUFoQ0MsUUFBZ0MsdUVBQXJCLEVBQXFCOztBQUFBO0FBQUEsVUFBZkMsSUFBZSxRQUFmQSxJQUFlO0FBQUEsVUFBVEMsS0FBUyxRQUFUQSxLQUFTOztBQUNwQ0MsYUFBTyxDQUFDQyxHQUFSLENBQVk7QUFBRUosZ0JBQVEsRUFBUkEsUUFBRjtBQUFZQyxZQUFJLEVBQUpBLElBQVo7QUFBa0JDLGFBQUssRUFBTEE7QUFBbEIsT0FBWjtBQURvQyxVQUU1QkcsSUFGNEIsR0FFWkosSUFGWSxDQUU1QkksSUFGNEI7QUFBQSxVQUV0QkMsS0FGc0IsR0FFWkwsSUFGWSxDQUV0QkssS0FGc0IsRUFJcEM7O0FBQ0EsVUFBTUMsSUFBSSxHQUFHTCxLQUFLLENBQUNNLFNBQU4sQ0FBZ0I7QUFBRUMsYUFBSyxFQUFFQyx1RUFBZ0JBO0FBQXpCLE9BQWhCLENBQWI7QUFDQSxVQUFNQyxLQUFLLEdBQUdKLElBQUgsYUFBR0EsSUFBSCxnREFBR0EsSUFBSSxDQUFFSyxnQkFBVCwwREFBRyxzQkFBd0JELEtBQXRDLENBTm9DLENBUXBDOztBQUNBLFVBQU1FLElBQUksR0FBR1IsSUFBSSxHQUFHQyxLQUFQLEdBQWUsQ0FBNUI7QUFDQSxVQUFNUSxLQUFLLEdBQUdDLElBQUksQ0FBQ0MsSUFBTCxDQUFVTCxLQUFLLEdBQUdMLEtBQWxCLENBQWQsQ0FWb0MsQ0FZcEM7O0FBQ0EsVUFBTVcsS0FBSyxHQUFHakIsUUFBUSxDQUFDa0IsS0FBVCxDQUFlYixJQUFmLEVBQXFCQSxJQUFJLEdBQUdDLEtBQTVCLEVBQW1DYSxNQUFuQyxDQUEwQyxVQUFDQyxJQUFEO0FBQUEsZUFBVUEsSUFBVjtBQUFBLE9BQTFDLENBQWQsQ0Fib0MsQ0FlcEM7O0FBQ0EsVUFBSUgsS0FBSyxDQUFDSSxNQUFOLElBQWdCSixLQUFLLENBQUNJLE1BQU4sS0FBaUJmLEtBQWpDLElBQTBDTyxJQUFJLEtBQUtDLEtBQXZELEVBQThEO0FBQzdELGVBQU9HLEtBQVA7QUFDQTs7QUFFRCxVQUFJQSxLQUFLLENBQUNJLE1BQU4sS0FBaUJmLEtBQXJCLEVBQTRCO0FBQzNCO0FBQ0EsZUFBTyxLQUFQO0FBQ0EsT0F2Qm1DLENBeUJwQzs7O0FBQ0EsVUFBSVcsS0FBSyxDQUFDSSxNQUFWLEVBQWtCO0FBQ2pCbEIsZUFBTyxDQUFDQyxHQUFSLHFCQUNjYSxLQUFLLENBQUNJLE1BRHBCO0FBR0EsZUFBT0osS0FBUDtBQUNBOztBQUVELGFBQU8sS0FBUCxDQWpDb0MsQ0FpQ3RCO0FBRWQ7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUNBLEtBaERLO0FBaUROSyxTQWpETSxpQkFpREF0QixRQWpEQSxFQWlEVXVCLFFBakRWLFNBaUQ4QjtBQUFBLFVBQVJ0QixJQUFRLFNBQVJBLElBQVE7QUFBQSxVQUMzQkksSUFEMkIsR0FDWEosSUFEVyxDQUMzQkksSUFEMkI7QUFBQSxVQUNyQkMsS0FEcUIsR0FDWEwsSUFEVyxDQUNyQkssS0FEcUIsRUFFbkM7O0FBQ0FILGFBQU8sQ0FBQ0MsR0FBUiwwQ0FBOENtQixRQUFRLENBQUNGLE1BQXZELEdBSG1DLENBSW5DOztBQUNBLFVBQU1HLE1BQU0sR0FBR3hCLFFBQVEsR0FBR0EsUUFBUSxDQUFDa0IsS0FBVCxDQUFlLENBQWYsQ0FBSCxHQUF1QixFQUE5Qzs7QUFDQSxXQUFLLElBQUlPLENBQUMsR0FBR3BCLElBQWIsRUFBbUJvQixDQUFDLEdBQUdwQixJQUFJLEdBQUdrQixRQUFRLENBQUNGLE1BQXZDLEVBQStDLEVBQUVJLENBQWpELEVBQW9EO0FBQ25ERCxjQUFNLENBQUNDLENBQUQsQ0FBTixHQUFZRixRQUFRLENBQUNFLENBQUMsR0FBR3BCLElBQUwsQ0FBcEI7QUFDQTs7QUFDREYsYUFBTyxDQUFDQyxHQUFSLENBQVlvQixNQUFaO0FBQ0EsYUFBT0EsTUFBUDtBQUNBO0FBNURLLEdBQVA7QUE4REE7O0FBRWMzQiw4RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjZkMTljZjViOWYyNzk5ODc5NzZkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4gICAgVGhlIHdob2xlIHB1cnBvc2Ugb2YgdGhpcyBmaWxlIGlzIHRvIHNvbHZlIHRoZSBvcmRlcmluZyBpc3N1ZSB3aXRoIHBhZ2luYXRpb24gd2hlbiB1c2VyIGRlbGV0ZSBhbiBpdGVtXHJcblxyXG4gICAgRWFjaCBwYWdlIGRpc3BsYXlzIDQgaXRlbXMuIFdoZW4gYW4gaXRlbSBnZXRzIGRlbGV0ZWQsIGl0IGlzIGlkZWFsIHRvIHB1c2ggdGhlIG5leHQgaXRlbSBvbiB0aGUgbmV4dCBwYWdlIHRvIHRoZSBwcmV2aW91cyBwYWdlXHJcbiAgICAgICAgdG8gZmlsbCBpbiB0aGUgc3BvdC4gU2luY2UgaW5pdGlhbGx5IGFsbCBpdGVtcyBpbiBhcG9sbG8gY2FjaGUgYXJlIGNhdGVnb3JpemVkIGluIGRpZmZlcmVudCBzZWN0aW9ucyBieSBwYWdpbmF0aW9uLCBcclxuICAgICAgICB3ZSBuZWVkIGEgd2F5IHRvIGNvbWJpbmUgYWxsIG9mIHRoZW0gaW4gYSBzaW5nbGUgbGlzdCBpbiBvcmRlciB0byBmaWx0ZXIgb3V0IHRoZSBpdGVtcyB3ZSBuZWVkLiBcclxuXHJcbiAgICBUaGlzIGlzIGZyb20gdmlkZW8gOiAjMzVcclxuICAgIEV4YW1wbGU6IFxyXG4gICAgICAgIDEgMiAzIDQgfCA1IDYgNyA4IHwgOSAxMCAxMSAxMlxyXG4gICAgICAgICAgICBUaGlzIGlzIHRoZSBpbml0aWFsIGl0ZW0gbGlzdCwgZWFjaCBudW1iZXIgcmVwcmVzZW50IGEgc2luZ2xlIGl0ZW0uIEVhY2ggbGluZSByZXByZXNlbnQgYSBwYWdlIFxyXG4gICAgICAgIDEgMiAzIDQgfCA1IDYgNyA5IHwgMTAgMTEgMTIgXHJcbiAgICAgICAgICAgIFdoZW4gaXRlbSBbIzhdIGdldHMgZGVsZXRlZCwgd2UgbmVlZCB0byBtb3ZlIGl0ZW0gWyM5XSB1cCBhIHBhZ2UgdG8gbWFpbnRhaW4gdGhlIGNvbnNpc3RlbmN5IG9mIDQgaXRlbXMgcGVyIHBhZ2VcclxuXHJcbiovXHJcblxyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFBBR0lOQVRJT05fUVVFUlkgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9QYWdpbmF0aW9uXCI7XHJcblxyXG5mdW5jdGlvbiBwYWdpbmF0aW9uRmllbGQoKSB7XHJcblx0cmV0dXJuIHtcclxuXHRcdGtleUFyZ3M6IGZhbHNlLCAvLyBUZWxscyBBcG9sbG8gdGhhdCBJIHdpbGwgdGFrZSBjYXJlIGV2ZXJ5dGhpbmdcclxuXHJcblx0XHQvLyBhcmdzOiBUaGUgc2tpcCB2YWx1ZSB0aGF0J3MgcGFzc2VkIGluICAgIGNhY2hlOiBBcG9sbG8gY2FjaGVcclxuXHRcdHJlYWQoZXhpc3RpbmcgPSBbXSwgeyBhcmdzLCBjYWNoZSB9KSB7XHJcblx0XHRcdGNvbnNvbGUubG9nKHsgZXhpc3RpbmcsIGFyZ3MsIGNhY2hlIH0pO1xyXG5cdFx0XHRjb25zdCB7IHNraXAsIGZpcnN0IH0gPSBhcmdzO1xyXG5cclxuXHRcdFx0Ly9SZWFkIHRoZSBudW1iZXIgb2YgaXRlbXMgb24gdGhlIHBhZ2UgZnJvbSB0aGUgY2FjaGVcclxuXHRcdFx0Y29uc3QgZGF0YSA9IGNhY2hlLnJlYWRRdWVyeSh7IHF1ZXJ5OiBQQUdJTkFUSU9OX1FVRVJZIH0pO1xyXG5cdFx0XHRjb25zdCBjb3VudCA9IGRhdGE/Ll9hbGxQcm9kdWN0c01ldGE/LmNvdW50O1xyXG5cclxuXHRcdFx0Ly8gd2hhdCBwYWdlIHdlJ3JlIGN1cnJlbnRseSBvblxyXG5cdFx0XHRjb25zdCBwYWdlID0gc2tpcCAvIGZpcnN0ICsgMTtcclxuXHRcdFx0Y29uc3QgcGFnZXMgPSBNYXRoLmNlaWwoY291bnQgLyBmaXJzdCk7XHJcblxyXG5cdFx0XHQvLyBDaGVjayBpZiB3ZSBoYXZlIGV4aXN0aW5nIGl0ZW1zLCBzdGFydCBhdCBza2lwIHZhbHVlIGFuZCBnbyB1bnRpbCB5b3UgaGl0IChza2lwICsgNClcclxuXHRcdFx0Y29uc3QgaXRlbXMgPSBleGlzdGluZy5zbGljZShza2lwLCBza2lwICsgZmlyc3QpLmZpbHRlcigoaXRlbSkgPT4gaXRlbSk7XHJcblxyXG5cdFx0XHQvL0lmIHRoZXJlIGFyZSBpdGVtcyAmJiBpZiB0aGVyZSBhcmUgZW5vdWdoIGl0ZW1zIHRvIHNhdGlzZnkgaG93IG1hbnkgYXJlIHJlcXVlc3RlZCAmJiB3ZSBhcmUgb24gdGhlIGxhc3QgcGFnZVxyXG5cdFx0XHRpZiAoaXRlbXMubGVuZ3RoICYmIGl0ZW1zLmxlbmd0aCAhPT0gZmlyc3QgJiYgcGFnZSA9PT0gcGFnZXMpIHtcclxuXHRcdFx0XHRyZXR1cm4gaXRlbXM7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmIChpdGVtcy5sZW5ndGggIT09IGZpcnN0KSB7XHJcblx0XHRcdFx0Ly8gV2UgZG9uJ3QgaGF2ZSBhbnkgaXRlbXMsIHdlIG11c3QgZ28gdG8gdGhlIG5ldHdvcmsgdG8gZmV0Y2ggdGhlbVxyXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8gSWYgdGhlcmUgYXJlIGl0ZW1zLCBqdXN0IHJldHVybiB0aGUgaXRlbXMgZnJvbSB0aGUgY2FjaGVcclxuXHRcdFx0aWYgKGl0ZW1zLmxlbmd0aCkge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKFxyXG5cdFx0XHRcdFx0YFRoZXJlIGFyZSAke2l0ZW1zLmxlbmd0aH0gaXRlbXMgaW4gdGhlIGNhY2hlISBHb25uYSBzZW5kIHRoZW0gdG8gYXBvbGxvYFxyXG5cdFx0XHRcdCk7XHJcblx0XHRcdFx0cmV0dXJuIGl0ZW1zO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRyZXR1cm4gZmFsc2U7IC8vIGZhbGxiYWNrIHRvIG5ldHdvcmtcclxuXHJcblx0XHRcdC8vIFdoZW4gQXBvbGxvIHRyaWVzIHRvIHF1ZXJ5IGZvciBhbGwgUHJvZHVjdHMsIGl0IHdpbGwgZmlyc3QgYXNrIHRoZSByZWFkIGZ1bmN0aW9uIGZvciB0aG9zZSBpdGVtc1xyXG5cclxuXHRcdFx0Ly8gRWl0aGVyIGRvIDEgb2YgMiB0aGluZ3M6XHJcblxyXG5cdFx0XHQvLyAxLiBSZXR1cm4gdGhlIGl0ZW1zIGJlY2F1c2UgdGhleSBhcmUgYWxyZWFkeSBpbiB0aGUgY2FjaGVcclxuXHJcblx0XHRcdC8vIE9SXHJcblxyXG5cdFx0XHQvLyAyLiBSZXR1cm4gZmFsc2UgZnJvbSBoZXJlIFtjcmVhdGUgYSBuZXR3b3JrIHJlcXVlc3RdXHJcblx0XHR9LFxyXG5cdFx0bWVyZ2UoZXhpc3RpbmcsIGluY29taW5nLCB7IGFyZ3MgfSkge1xyXG5cdFx0XHRjb25zdCB7IHNraXAsIGZpcnN0IH0gPSBhcmdzO1xyXG5cdFx0XHQvLyBUaGlzIHJ1bnMgd2hlbiB0aGUgQXBvbGxvIGNsaWVudCBjb21lcyBiYWNrIGZyb20gdGhlIEtleXN0b25lIHdpdGggdGhlIHByb2R1Y3RzXHJcblx0XHRcdGNvbnNvbGUubG9nKGBNZXJnaW5nIGl0ZW1zIGZyb20gdGhlIG5ldHdvcmsgJHtpbmNvbWluZy5sZW5ndGh9YCk7XHJcblx0XHRcdC8vIElmIHRoZXJlIGFyZSBleGlzdGluZyBpdGVtcyBpbiB0aGUgY2FjaGUgYWxyZWFkeSwgd2Ugd2FudCB0byB0YWtlIGEgY29weSBvZiBhbGwgdGhlIGl0ZW1zXHJcblx0XHRcdGNvbnN0IG1lcmdlZCA9IGV4aXN0aW5nID8gZXhpc3Rpbmcuc2xpY2UoMCkgOiBbXTtcclxuXHRcdFx0Zm9yIChsZXQgaSA9IHNraXA7IGkgPCBza2lwICsgaW5jb21pbmcubGVuZ3RoOyArK2kpIHtcclxuXHRcdFx0XHRtZXJnZWRbaV0gPSBpbmNvbWluZ1tpIC0gc2tpcF07XHJcblx0XHRcdH1cclxuXHRcdFx0Y29uc29sZS5sb2cobWVyZ2VkKTtcclxuXHRcdFx0cmV0dXJuIG1lcmdlZDtcclxuXHRcdH0sXHJcblx0fTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcGFnaW5hdGlvbkZpZWxkO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9