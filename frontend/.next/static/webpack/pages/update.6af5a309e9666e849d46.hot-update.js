webpackHotUpdate_N_E("pages/update",{

/***/ "./lib/useForm.js":
/*!************************!*\
  !*** ./lib/useForm.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var D_React_Advanced_React_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var D_React_Advanced_React_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



var _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(D_React_Advanced_React_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



function useForm() {
  _s();

  var initial = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  // create a state object for our input
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(initial),
      inputs = _useState[0],
      setInputs = _useState[1];

  var initialValue = Object.values(initial).join("");
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    setInputs(initial);
  }, [initialValue]);

  function handleChange(e) {
    var _e$target = e.target,
        value = _e$target.value,
        name = _e$target.name,
        type = _e$target.type;

    if (type === "number") {
      value = Number(value);
    }

    if (type === "file") {
      var _e$target$files = Object(D_React_Advanced_React_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(e.target.files, 1);

      value = _e$target$files[0];
    }

    setInputs(_objectSpread(_objectSpread({}, inputs), {}, Object(D_React_Advanced_React_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, name, value)));
  }

  function resetForm() {
    setInputs(initial);
  }
  /*
         take the [input] object and turn it into an array with Object.entries()
         then map through the array and destructure the key and value and for each key, we set the value to empty
     */


  function clearForm() {
    var blankState = Object.fromEntries(Object.entries(inputs).map(function (_ref) {
      var _ref2 = Object(D_React_Advanced_React_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, 2),
          key = _ref2[0],
          value = _ref2[1];

      return [key, ""];
    }));
    setInputs(blankState);
  } // return the things we want to surface


  return {
    inputs: inputs,
    handleChange: handleChange,
    resetForm: resetForm,
    clearForm: clearForm
  };
}

_s(useForm, "Ojj4hh6HHOsjtwWnkUaVb5V0o3U=");

/* harmony default export */ __webpack_exports__["default"] = (useForm);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL3VzZUZvcm0uanMiXSwibmFtZXMiOlsidXNlRm9ybSIsImluaXRpYWwiLCJ1c2VTdGF0ZSIsImlucHV0cyIsInNldElucHV0cyIsImluaXRpYWxWYWx1ZSIsIk9iamVjdCIsInZhbHVlcyIsImpvaW4iLCJ1c2VFZmZlY3QiLCJoYW5kbGVDaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJuYW1lIiwidHlwZSIsIk51bWJlciIsImZpbGVzIiwicmVzZXRGb3JtIiwiY2xlYXJGb3JtIiwiYmxhbmtTdGF0ZSIsImZyb21FbnRyaWVzIiwiZW50cmllcyIsIm1hcCIsImtleSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsU0FBU0EsT0FBVCxHQUErQjtBQUFBOztBQUFBLE1BQWRDLE9BQWMsdUVBQUosRUFBSTs7QUFDOUI7QUFEOEIsa0JBRUZDLHNEQUFRLENBQUNELE9BQUQsQ0FGTjtBQUFBLE1BRXZCRSxNQUZ1QjtBQUFBLE1BRWZDLFNBRmU7O0FBRzlCLE1BQU1DLFlBQVksR0FBR0MsTUFBTSxDQUFDQyxNQUFQLENBQWNOLE9BQWQsRUFBdUJPLElBQXZCLENBQTRCLEVBQTVCLENBQXJCO0FBRUFDLHlEQUFTLENBQUMsWUFBTTtBQUNmTCxhQUFTLENBQUNILE9BQUQsQ0FBVDtBQUNBLEdBRlEsRUFFTixDQUFDSSxZQUFELENBRk0sQ0FBVDs7QUFJQSxXQUFTSyxZQUFULENBQXNCQyxDQUF0QixFQUF5QjtBQUFBLG9CQUNJQSxDQUFDLENBQUNDLE1BRE47QUFBQSxRQUNsQkMsS0FEa0IsYUFDbEJBLEtBRGtCO0FBQUEsUUFDWEMsSUFEVyxhQUNYQSxJQURXO0FBQUEsUUFDTEMsSUFESyxhQUNMQSxJQURLOztBQUV4QixRQUFJQSxJQUFJLEtBQUssUUFBYixFQUF1QjtBQUN0QkYsV0FBSyxHQUFHRyxNQUFNLENBQUNILEtBQUQsQ0FBZDtBQUNBOztBQUVELFFBQUlFLElBQUksS0FBSyxNQUFiLEVBQXFCO0FBQUEsNE1BQ1ZKLENBQUMsQ0FBQ0MsTUFBRixDQUFTSyxLQURDOztBQUNuQkosV0FEbUI7QUFFcEI7O0FBQ0RULGFBQVMsaUNBQ0xELE1BREssNExBRVBXLElBRk8sRUFFQUQsS0FGQSxHQUFUO0FBSUE7O0FBRUQsV0FBU0ssU0FBVCxHQUFxQjtBQUNwQmQsYUFBUyxDQUFDSCxPQUFELENBQVQ7QUFDQTtBQUVEO0FBQ0Q7QUFDQTtBQUNBOzs7QUFDQyxXQUFTa0IsU0FBVCxHQUFxQjtBQUNwQixRQUFNQyxVQUFVLEdBQUdkLE1BQU0sQ0FBQ2UsV0FBUCxDQUNsQmYsTUFBTSxDQUFDZ0IsT0FBUCxDQUFlbkIsTUFBZixFQUF1Qm9CLEdBQXZCLENBQTJCO0FBQUE7QUFBQSxVQUFFQyxHQUFGO0FBQUEsVUFBT1gsS0FBUDs7QUFBQSxhQUFrQixDQUFDVyxHQUFELEVBQU0sRUFBTixDQUFsQjtBQUFBLEtBQTNCLENBRGtCLENBQW5CO0FBR0FwQixhQUFTLENBQUNnQixVQUFELENBQVQ7QUFDQSxHQXJDNkIsQ0F1QzlCOzs7QUFDQSxTQUFPO0FBQ05qQixVQUFNLEVBQU5BLE1BRE07QUFFTk8sZ0JBQVksRUFBWkEsWUFGTTtBQUdOUSxhQUFTLEVBQVRBLFNBSE07QUFJTkMsYUFBUyxFQUFUQTtBQUpNLEdBQVA7QUFNQTs7R0E5Q1FuQixPOztBQWdETUEsc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdXBkYXRlLjZhZjVhMzA5ZTk2NjZlODQ5ZDQ2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5mdW5jdGlvbiB1c2VGb3JtKGluaXRpYWwgPSB7fSkge1xyXG5cdC8vIGNyZWF0ZSBhIHN0YXRlIG9iamVjdCBmb3Igb3VyIGlucHV0XHJcblx0Y29uc3QgW2lucHV0cywgc2V0SW5wdXRzXSA9IHVzZVN0YXRlKGluaXRpYWwpO1xyXG5cdGNvbnN0IGluaXRpYWxWYWx1ZSA9IE9iamVjdC52YWx1ZXMoaW5pdGlhbCkuam9pbihcIlwiKTtcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdHNldElucHV0cyhpbml0aWFsKTtcclxuXHR9LCBbaW5pdGlhbFZhbHVlXSk7XHJcblxyXG5cdGZ1bmN0aW9uIGhhbmRsZUNoYW5nZShlKSB7XHJcblx0XHRsZXQgeyB2YWx1ZSwgbmFtZSwgdHlwZSB9ID0gZS50YXJnZXQ7XHJcblx0XHRpZiAodHlwZSA9PT0gXCJudW1iZXJcIikge1xyXG5cdFx0XHR2YWx1ZSA9IE51bWJlcih2YWx1ZSk7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKHR5cGUgPT09IFwiZmlsZVwiKSB7XHJcblx0XHRcdFt2YWx1ZV0gPSBlLnRhcmdldC5maWxlcztcclxuXHRcdH1cclxuXHRcdHNldElucHV0cyh7XHJcblx0XHRcdC4uLmlucHV0cyxcclxuXHRcdFx0W25hbWVdOiB2YWx1ZSxcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gcmVzZXRGb3JtKCkge1xyXG5cdFx0c2V0SW5wdXRzKGluaXRpYWwpO1xyXG5cdH1cclxuXHJcblx0LypcclxuICAgICAgICB0YWtlIHRoZSBbaW5wdXRdIG9iamVjdCBhbmQgdHVybiBpdCBpbnRvIGFuIGFycmF5IHdpdGggT2JqZWN0LmVudHJpZXMoKVxyXG4gICAgICAgIHRoZW4gbWFwIHRocm91Z2ggdGhlIGFycmF5IGFuZCBkZXN0cnVjdHVyZSB0aGUga2V5IGFuZCB2YWx1ZSBhbmQgZm9yIGVhY2gga2V5LCB3ZSBzZXQgdGhlIHZhbHVlIHRvIGVtcHR5XHJcbiAgICAqL1xyXG5cdGZ1bmN0aW9uIGNsZWFyRm9ybSgpIHtcclxuXHRcdGNvbnN0IGJsYW5rU3RhdGUgPSBPYmplY3QuZnJvbUVudHJpZXMoXHJcblx0XHRcdE9iamVjdC5lbnRyaWVzKGlucHV0cykubWFwKChba2V5LCB2YWx1ZV0pID0+IFtrZXksIFwiXCJdKVxyXG5cdFx0KTtcclxuXHRcdHNldElucHV0cyhibGFua1N0YXRlKTtcclxuXHR9XHJcblxyXG5cdC8vIHJldHVybiB0aGUgdGhpbmdzIHdlIHdhbnQgdG8gc3VyZmFjZVxyXG5cdHJldHVybiB7XHJcblx0XHRpbnB1dHMsXHJcblx0XHRoYW5kbGVDaGFuZ2UsXHJcblx0XHRyZXNldEZvcm0sXHJcblx0XHRjbGVhckZvcm0sXHJcblx0fTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXNlRm9ybTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==