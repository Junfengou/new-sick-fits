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
    // skip: skip however many items
    // first: give me the first however many items
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL3BhZ2luYXRpb25GaWVsZC5qcyJdLCJuYW1lcyI6WyJwYWdpbmF0aW9uRmllbGQiLCJrZXlBcmdzIiwicmVhZCIsImV4aXN0aW5nIiwiYXJncyIsImNhY2hlIiwiY29uc29sZSIsImxvZyIsInNraXAiLCJmaXJzdCIsImRhdGEiLCJyZWFkUXVlcnkiLCJxdWVyeSIsIlBBR0lOQVRJT05fUVVFUlkiLCJjb3VudCIsIl9hbGxQcm9kdWN0c01ldGEiLCJwYWdlIiwicGFnZXMiLCJNYXRoIiwiY2VpbCIsIml0ZW1zIiwic2xpY2UiLCJmaWx0ZXIiLCJpdGVtIiwibGVuZ3RoIiwibWVyZ2UiLCJpbmNvbWluZyIsIm1lcmdlZCIsImkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUEsU0FBU0EsZUFBVCxHQUEyQjtBQUMxQixTQUFPO0FBQ05DLFdBQU8sRUFBRSxLQURIO0FBQ1U7QUFFaEI7QUFDQTtBQUVBO0FBQ0FDLFFBUE0sa0JBTytCO0FBQUE7O0FBQUEsVUFBaENDLFFBQWdDLHVFQUFyQixFQUFxQjs7QUFBQTtBQUFBLFVBQWZDLElBQWUsUUFBZkEsSUFBZTtBQUFBLFVBQVRDLEtBQVMsUUFBVEEsS0FBUzs7QUFDcENDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZO0FBQUVKLGdCQUFRLEVBQVJBLFFBQUY7QUFBWUMsWUFBSSxFQUFKQSxJQUFaO0FBQWtCQyxhQUFLLEVBQUxBO0FBQWxCLE9BQVo7QUFEb0MsVUFFNUJHLElBRjRCLEdBRVpKLElBRlksQ0FFNUJJLElBRjRCO0FBQUEsVUFFdEJDLEtBRnNCLEdBRVpMLElBRlksQ0FFdEJLLEtBRnNCLEVBSXBDOztBQUNBLFVBQU1DLElBQUksR0FBR0wsS0FBSyxDQUFDTSxTQUFOLENBQWdCO0FBQUVDLGFBQUssRUFBRUMsdUVBQWdCQTtBQUF6QixPQUFoQixDQUFiO0FBQ0EsVUFBTUMsS0FBSyxHQUFHSixJQUFILGFBQUdBLElBQUgsZ0RBQUdBLElBQUksQ0FBRUssZ0JBQVQsMERBQUcsc0JBQXdCRCxLQUF0QyxDQU5vQyxDQVFwQzs7QUFDQSxVQUFNRSxJQUFJLEdBQUdSLElBQUksR0FBR0MsS0FBUCxHQUFlLENBQTVCO0FBQ0EsVUFBTVEsS0FBSyxHQUFHQyxJQUFJLENBQUNDLElBQUwsQ0FBVUwsS0FBSyxHQUFHTCxLQUFsQixDQUFkLENBVm9DLENBWXBDOztBQUNBLFVBQU1XLEtBQUssR0FBR2pCLFFBQVEsQ0FBQ2tCLEtBQVQsQ0FBZWIsSUFBZixFQUFxQkEsSUFBSSxHQUFHQyxLQUE1QixFQUFtQ2EsTUFBbkMsQ0FBMEMsVUFBQ0MsSUFBRDtBQUFBLGVBQVVBLElBQVY7QUFBQSxPQUExQyxDQUFkLENBYm9DLENBZXBDOztBQUNBLFVBQUlILEtBQUssQ0FBQ0ksTUFBTixJQUFnQkosS0FBSyxDQUFDSSxNQUFOLEtBQWlCZixLQUFqQyxJQUEwQ08sSUFBSSxLQUFLQyxLQUF2RCxFQUE4RDtBQUM3RCxlQUFPRyxLQUFQO0FBQ0E7O0FBRUQsVUFBSUEsS0FBSyxDQUFDSSxNQUFOLEtBQWlCZixLQUFyQixFQUE0QjtBQUMzQjtBQUNBLGVBQU8sS0FBUDtBQUNBLE9BdkJtQyxDQXlCcEM7OztBQUNBLFVBQUlXLEtBQUssQ0FBQ0ksTUFBVixFQUFrQjtBQUNqQmxCLGVBQU8sQ0FBQ0MsR0FBUixxQkFDY2EsS0FBSyxDQUFDSSxNQURwQjtBQUdBLGVBQU9KLEtBQVA7QUFDQTs7QUFFRCxhQUFPLEtBQVAsQ0FqQ29DLENBaUN0QjtBQUVkO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFDQSxLQW5ESztBQW9ETkssU0FwRE0saUJBb0RBdEIsUUFwREEsRUFvRFV1QixRQXBEVixTQW9EOEI7QUFBQSxVQUFSdEIsSUFBUSxTQUFSQSxJQUFRO0FBQUEsVUFDM0JJLElBRDJCLEdBQ1hKLElBRFcsQ0FDM0JJLElBRDJCO0FBQUEsVUFDckJDLEtBRHFCLEdBQ1hMLElBRFcsQ0FDckJLLEtBRHFCLEVBRW5DOztBQUNBSCxhQUFPLENBQUNDLEdBQVIsMENBQThDbUIsUUFBUSxDQUFDRixNQUF2RCxHQUhtQyxDQUluQzs7QUFDQSxVQUFNRyxNQUFNLEdBQUd4QixRQUFRLEdBQUdBLFFBQVEsQ0FBQ2tCLEtBQVQsQ0FBZSxDQUFmLENBQUgsR0FBdUIsRUFBOUM7O0FBQ0EsV0FBSyxJQUFJTyxDQUFDLEdBQUdwQixJQUFiLEVBQW1Cb0IsQ0FBQyxHQUFHcEIsSUFBSSxHQUFHa0IsUUFBUSxDQUFDRixNQUF2QyxFQUErQyxFQUFFSSxDQUFqRCxFQUFvRDtBQUNuREQsY0FBTSxDQUFDQyxDQUFELENBQU4sR0FBWUYsUUFBUSxDQUFDRSxDQUFDLEdBQUdwQixJQUFMLENBQXBCO0FBQ0E7O0FBQ0RGLGFBQU8sQ0FBQ0MsR0FBUixDQUFZb0IsTUFBWjtBQUNBLGFBQU9BLE1BQVA7QUFDQTtBQS9ESyxHQUFQO0FBaUVBOztBQUVjM0IsOEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC4yNzc4MGEyMjQ5ZGNjMWE1OTZiNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuICAgIFRoZSB3aG9sZSBwdXJwb3NlIG9mIHRoaXMgZmlsZSBpcyB0byBzb2x2ZSB0aGUgb3JkZXJpbmcgaXNzdWUgd2l0aCBwYWdpbmF0aW9uIHdoZW4gdXNlciBkZWxldGUgYW4gaXRlbVxyXG5cclxuICAgIEVhY2ggcGFnZSBkaXNwbGF5cyA0IGl0ZW1zLiBXaGVuIGFuIGl0ZW0gZ2V0cyBkZWxldGVkLCBpdCBpcyBpZGVhbCB0byBwdXNoIHRoZSBuZXh0IGl0ZW0gb24gdGhlIG5leHQgcGFnZSB0byB0aGUgcHJldmlvdXMgcGFnZVxyXG4gICAgICAgIHRvIGZpbGwgaW4gdGhlIHNwb3QuIFNpbmNlIGluaXRpYWxseSBhbGwgaXRlbXMgaW4gYXBvbGxvIGNhY2hlIGFyZSBjYXRlZ29yaXplZCBpbiBkaWZmZXJlbnQgc2VjdGlvbnMgYnkgcGFnaW5hdGlvbiwgXHJcbiAgICAgICAgd2UgbmVlZCBhIHdheSB0byBjb21iaW5lIGFsbCBvZiB0aGVtIGluIGEgc2luZ2xlIGxpc3QgaW4gb3JkZXIgdG8gZmlsdGVyIG91dCB0aGUgaXRlbXMgd2UgbmVlZC4gXHJcblxyXG4gICAgVGhpcyBpcyBmcm9tIHZpZGVvIDogIzM1XHJcbiAgICBFeGFtcGxlOiBcclxuICAgICAgICAxIDIgMyA0IHwgNSA2IDcgOCB8IDkgMTAgMTEgMTJcclxuICAgICAgICAgICAgVGhpcyBpcyB0aGUgaW5pdGlhbCBpdGVtIGxpc3QsIGVhY2ggbnVtYmVyIHJlcHJlc2VudCBhIHNpbmdsZSBpdGVtLiBFYWNoIGxpbmUgcmVwcmVzZW50IGEgcGFnZSBcclxuICAgICAgICAxIDIgMyA0IHwgNSA2IDcgOSB8IDEwIDExIDEyIFxyXG4gICAgICAgICAgICBXaGVuIGl0ZW0gWyM4XSBnZXRzIGRlbGV0ZWQsIHdlIG5lZWQgdG8gbW92ZSBpdGVtIFsjOV0gdXAgYSBwYWdlIHRvIG1haW50YWluIHRoZSBjb25zaXN0ZW5jeSBvZiA0IGl0ZW1zIHBlciBwYWdlXHJcblxyXG4qL1xyXG5cclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBQQUdJTkFUSU9OX1FVRVJZIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvUGFnaW5hdGlvblwiO1xyXG5cclxuZnVuY3Rpb24gcGFnaW5hdGlvbkZpZWxkKCkge1xyXG5cdHJldHVybiB7XHJcblx0XHRrZXlBcmdzOiBmYWxzZSwgLy8gVGVsbHMgQXBvbGxvIHRoYXQgSSB3aWxsIHRha2UgY2FyZSBldmVyeXRoaW5nXHJcblxyXG5cdFx0Ly8gc2tpcDogc2tpcCBob3dldmVyIG1hbnkgaXRlbXNcclxuXHRcdC8vIGZpcnN0OiBnaXZlIG1lIHRoZSBmaXJzdCBob3dldmVyIG1hbnkgaXRlbXNcclxuXHJcblx0XHQvLyBhcmdzOiBUaGUgc2tpcCB2YWx1ZSB0aGF0J3MgcGFzc2VkIGluICAgIGNhY2hlOiBBcG9sbG8gY2FjaGVcclxuXHRcdHJlYWQoZXhpc3RpbmcgPSBbXSwgeyBhcmdzLCBjYWNoZSB9KSB7XHJcblx0XHRcdGNvbnNvbGUubG9nKHsgZXhpc3RpbmcsIGFyZ3MsIGNhY2hlIH0pO1xyXG5cdFx0XHRjb25zdCB7IHNraXAsIGZpcnN0IH0gPSBhcmdzO1xyXG5cclxuXHRcdFx0Ly9SZWFkIHRoZSBudW1iZXIgb2YgaXRlbXMgb24gdGhlIHBhZ2UgZnJvbSB0aGUgY2FjaGVcclxuXHRcdFx0Y29uc3QgZGF0YSA9IGNhY2hlLnJlYWRRdWVyeSh7IHF1ZXJ5OiBQQUdJTkFUSU9OX1FVRVJZIH0pO1xyXG5cdFx0XHRjb25zdCBjb3VudCA9IGRhdGE/Ll9hbGxQcm9kdWN0c01ldGE/LmNvdW50O1xyXG5cclxuXHRcdFx0Ly8gd2hhdCBwYWdlIHdlJ3JlIGN1cnJlbnRseSBvblxyXG5cdFx0XHRjb25zdCBwYWdlID0gc2tpcCAvIGZpcnN0ICsgMTtcclxuXHRcdFx0Y29uc3QgcGFnZXMgPSBNYXRoLmNlaWwoY291bnQgLyBmaXJzdCk7XHJcblxyXG5cdFx0XHQvLyBDaGVjayBpZiB3ZSBoYXZlIGV4aXN0aW5nIGl0ZW1zLCBzdGFydCBhdCBza2lwIHZhbHVlIGFuZCBnbyB1bnRpbCB5b3UgaGl0IChza2lwICsgNClcclxuXHRcdFx0Y29uc3QgaXRlbXMgPSBleGlzdGluZy5zbGljZShza2lwLCBza2lwICsgZmlyc3QpLmZpbHRlcigoaXRlbSkgPT4gaXRlbSk7XHJcblxyXG5cdFx0XHQvL0lmIHRoZXJlIGFyZSBpdGVtcyAmJiBpZiB0aGVyZSBhcmUgZW5vdWdoIGl0ZW1zIHRvIHNhdGlzZnkgaG93IG1hbnkgYXJlIHJlcXVlc3RlZCAmJiB3ZSBhcmUgb24gdGhlIGxhc3QgcGFnZVxyXG5cdFx0XHRpZiAoaXRlbXMubGVuZ3RoICYmIGl0ZW1zLmxlbmd0aCAhPT0gZmlyc3QgJiYgcGFnZSA9PT0gcGFnZXMpIHtcclxuXHRcdFx0XHRyZXR1cm4gaXRlbXM7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmIChpdGVtcy5sZW5ndGggIT09IGZpcnN0KSB7XHJcblx0XHRcdFx0Ly8gV2UgZG9uJ3QgaGF2ZSBhbnkgaXRlbXMsIHdlIG11c3QgZ28gdG8gdGhlIG5ldHdvcmsgdG8gZmV0Y2ggdGhlbVxyXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8gSWYgdGhlcmUgYXJlIGl0ZW1zLCBqdXN0IHJldHVybiB0aGUgaXRlbXMgZnJvbSB0aGUgY2FjaGVcclxuXHRcdFx0aWYgKGl0ZW1zLmxlbmd0aCkge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKFxyXG5cdFx0XHRcdFx0YFRoZXJlIGFyZSAke2l0ZW1zLmxlbmd0aH0gaXRlbXMgaW4gdGhlIGNhY2hlISBHb25uYSBzZW5kIHRoZW0gdG8gYXBvbGxvYFxyXG5cdFx0XHRcdCk7XHJcblx0XHRcdFx0cmV0dXJuIGl0ZW1zO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRyZXR1cm4gZmFsc2U7IC8vIGZhbGxiYWNrIHRvIG5ldHdvcmtcclxuXHJcblx0XHRcdC8vIFdoZW4gQXBvbGxvIHRyaWVzIHRvIHF1ZXJ5IGZvciBhbGwgUHJvZHVjdHMsIGl0IHdpbGwgZmlyc3QgYXNrIHRoZSByZWFkIGZ1bmN0aW9uIGZvciB0aG9zZSBpdGVtc1xyXG5cclxuXHRcdFx0Ly8gRWl0aGVyIGRvIDEgb2YgMiB0aGluZ3M6XHJcblxyXG5cdFx0XHQvLyAxLiBSZXR1cm4gdGhlIGl0ZW1zIGJlY2F1c2UgdGhleSBhcmUgYWxyZWFkeSBpbiB0aGUgY2FjaGVcclxuXHJcblx0XHRcdC8vIE9SXHJcblxyXG5cdFx0XHQvLyAyLiBSZXR1cm4gZmFsc2UgZnJvbSBoZXJlIFtjcmVhdGUgYSBuZXR3b3JrIHJlcXVlc3RdXHJcblx0XHR9LFxyXG5cdFx0bWVyZ2UoZXhpc3RpbmcsIGluY29taW5nLCB7IGFyZ3MgfSkge1xyXG5cdFx0XHRjb25zdCB7IHNraXAsIGZpcnN0IH0gPSBhcmdzO1xyXG5cdFx0XHQvLyBUaGlzIHJ1bnMgd2hlbiB0aGUgQXBvbGxvIGNsaWVudCBjb21lcyBiYWNrIGZyb20gdGhlIEtleXN0b25lIHdpdGggdGhlIHByb2R1Y3RzXHJcblx0XHRcdGNvbnNvbGUubG9nKGBNZXJnaW5nIGl0ZW1zIGZyb20gdGhlIG5ldHdvcmsgJHtpbmNvbWluZy5sZW5ndGh9YCk7XHJcblx0XHRcdC8vIElmIHRoZXJlIGFyZSBleGlzdGluZyBpdGVtcyBpbiB0aGUgY2FjaGUgYWxyZWFkeSwgd2Ugd2FudCB0byB0YWtlIGEgY29weSBvZiBhbGwgdGhlIGl0ZW1zXHJcblx0XHRcdGNvbnN0IG1lcmdlZCA9IGV4aXN0aW5nID8gZXhpc3Rpbmcuc2xpY2UoMCkgOiBbXTtcclxuXHRcdFx0Zm9yIChsZXQgaSA9IHNraXA7IGkgPCBza2lwICsgaW5jb21pbmcubGVuZ3RoOyArK2kpIHtcclxuXHRcdFx0XHRtZXJnZWRbaV0gPSBpbmNvbWluZ1tpIC0gc2tpcF07XHJcblx0XHRcdH1cclxuXHRcdFx0Y29uc29sZS5sb2cobWVyZ2VkKTtcclxuXHRcdFx0cmV0dXJuIG1lcmdlZDtcclxuXHRcdH0sXHJcblx0fTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcGFnaW5hdGlvbkZpZWxkO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9