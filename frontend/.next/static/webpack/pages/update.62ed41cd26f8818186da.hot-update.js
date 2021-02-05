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

  var initialValue = Object.values(initial);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL3VzZUZvcm0uanMiXSwibmFtZXMiOlsidXNlRm9ybSIsImluaXRpYWwiLCJ1c2VTdGF0ZSIsImlucHV0cyIsInNldElucHV0cyIsImluaXRpYWxWYWx1ZSIsIk9iamVjdCIsInZhbHVlcyIsInVzZUVmZmVjdCIsImhhbmRsZUNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm5hbWUiLCJ0eXBlIiwiTnVtYmVyIiwiZmlsZXMiLCJyZXNldEZvcm0iLCJjbGVhckZvcm0iLCJibGFua1N0YXRlIiwiZnJvbUVudHJpZXMiLCJlbnRyaWVzIiwibWFwIiwia2V5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxTQUFTQSxPQUFULEdBQStCO0FBQUE7O0FBQUEsTUFBZEMsT0FBYyx1RUFBSixFQUFJOztBQUM5QjtBQUQ4QixrQkFFRkMsc0RBQVEsQ0FBQ0QsT0FBRCxDQUZOO0FBQUEsTUFFdkJFLE1BRnVCO0FBQUEsTUFFZkMsU0FGZTs7QUFHOUIsTUFBTUMsWUFBWSxHQUFHQyxNQUFNLENBQUNDLE1BQVAsQ0FBY04sT0FBZCxDQUFyQjtBQUVBTyx5REFBUyxDQUFDLFlBQU07QUFDZkosYUFBUyxDQUFDSCxPQUFELENBQVQ7QUFDQSxHQUZRLEVBRU4sQ0FBQ0ksWUFBRCxDQUZNLENBQVQ7O0FBSUEsV0FBU0ksWUFBVCxDQUFzQkMsQ0FBdEIsRUFBeUI7QUFBQSxvQkFDSUEsQ0FBQyxDQUFDQyxNQUROO0FBQUEsUUFDbEJDLEtBRGtCLGFBQ2xCQSxLQURrQjtBQUFBLFFBQ1hDLElBRFcsYUFDWEEsSUFEVztBQUFBLFFBQ0xDLElBREssYUFDTEEsSUFESzs7QUFFeEIsUUFBSUEsSUFBSSxLQUFLLFFBQWIsRUFBdUI7QUFDdEJGLFdBQUssR0FBR0csTUFBTSxDQUFDSCxLQUFELENBQWQ7QUFDQTs7QUFFRCxRQUFJRSxJQUFJLEtBQUssTUFBYixFQUFxQjtBQUFBLDRNQUNWSixDQUFDLENBQUNDLE1BQUYsQ0FBU0ssS0FEQzs7QUFDbkJKLFdBRG1CO0FBRXBCOztBQUNEUixhQUFTLGlDQUNMRCxNQURLLDRMQUVQVSxJQUZPLEVBRUFELEtBRkEsR0FBVDtBQUlBOztBQUVELFdBQVNLLFNBQVQsR0FBcUI7QUFDcEJiLGFBQVMsQ0FBQ0gsT0FBRCxDQUFUO0FBQ0E7QUFFRDtBQUNEO0FBQ0E7QUFDQTs7O0FBQ0MsV0FBU2lCLFNBQVQsR0FBcUI7QUFDcEIsUUFBTUMsVUFBVSxHQUFHYixNQUFNLENBQUNjLFdBQVAsQ0FDbEJkLE1BQU0sQ0FBQ2UsT0FBUCxDQUFlbEIsTUFBZixFQUF1Qm1CLEdBQXZCLENBQTJCO0FBQUE7QUFBQSxVQUFFQyxHQUFGO0FBQUEsVUFBT1gsS0FBUDs7QUFBQSxhQUFrQixDQUFDVyxHQUFELEVBQU0sRUFBTixDQUFsQjtBQUFBLEtBQTNCLENBRGtCLENBQW5CO0FBR0FuQixhQUFTLENBQUNlLFVBQUQsQ0FBVDtBQUNBLEdBckM2QixDQXVDOUI7OztBQUNBLFNBQU87QUFDTmhCLFVBQU0sRUFBTkEsTUFETTtBQUVOTSxnQkFBWSxFQUFaQSxZQUZNO0FBR05RLGFBQVMsRUFBVEEsU0FITTtBQUlOQyxhQUFTLEVBQVRBO0FBSk0sR0FBUDtBQU1BOztHQTlDUWxCLE87O0FBZ0RNQSxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy91cGRhdGUuNjJlZDQxY2QyNmY4ODE4MTg2ZGEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmZ1bmN0aW9uIHVzZUZvcm0oaW5pdGlhbCA9IHt9KSB7XHJcblx0Ly8gY3JlYXRlIGEgc3RhdGUgb2JqZWN0IGZvciBvdXIgaW5wdXRcclxuXHRjb25zdCBbaW5wdXRzLCBzZXRJbnB1dHNdID0gdXNlU3RhdGUoaW5pdGlhbCk7XHJcblx0Y29uc3QgaW5pdGlhbFZhbHVlID0gT2JqZWN0LnZhbHVlcyhpbml0aWFsKTtcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdHNldElucHV0cyhpbml0aWFsKTtcclxuXHR9LCBbaW5pdGlhbFZhbHVlXSk7XHJcblxyXG5cdGZ1bmN0aW9uIGhhbmRsZUNoYW5nZShlKSB7XHJcblx0XHRsZXQgeyB2YWx1ZSwgbmFtZSwgdHlwZSB9ID0gZS50YXJnZXQ7XHJcblx0XHRpZiAodHlwZSA9PT0gXCJudW1iZXJcIikge1xyXG5cdFx0XHR2YWx1ZSA9IE51bWJlcih2YWx1ZSk7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKHR5cGUgPT09IFwiZmlsZVwiKSB7XHJcblx0XHRcdFt2YWx1ZV0gPSBlLnRhcmdldC5maWxlcztcclxuXHRcdH1cclxuXHRcdHNldElucHV0cyh7XHJcblx0XHRcdC4uLmlucHV0cyxcclxuXHRcdFx0W25hbWVdOiB2YWx1ZSxcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gcmVzZXRGb3JtKCkge1xyXG5cdFx0c2V0SW5wdXRzKGluaXRpYWwpO1xyXG5cdH1cclxuXHJcblx0LypcclxuICAgICAgICB0YWtlIHRoZSBbaW5wdXRdIG9iamVjdCBhbmQgdHVybiBpdCBpbnRvIGFuIGFycmF5IHdpdGggT2JqZWN0LmVudHJpZXMoKVxyXG4gICAgICAgIHRoZW4gbWFwIHRocm91Z2ggdGhlIGFycmF5IGFuZCBkZXN0cnVjdHVyZSB0aGUga2V5IGFuZCB2YWx1ZSBhbmQgZm9yIGVhY2gga2V5LCB3ZSBzZXQgdGhlIHZhbHVlIHRvIGVtcHR5XHJcbiAgICAqL1xyXG5cdGZ1bmN0aW9uIGNsZWFyRm9ybSgpIHtcclxuXHRcdGNvbnN0IGJsYW5rU3RhdGUgPSBPYmplY3QuZnJvbUVudHJpZXMoXHJcblx0XHRcdE9iamVjdC5lbnRyaWVzKGlucHV0cykubWFwKChba2V5LCB2YWx1ZV0pID0+IFtrZXksIFwiXCJdKVxyXG5cdFx0KTtcclxuXHRcdHNldElucHV0cyhibGFua1N0YXRlKTtcclxuXHR9XHJcblxyXG5cdC8vIHJldHVybiB0aGUgdGhpbmdzIHdlIHdhbnQgdG8gc3VyZmFjZVxyXG5cdHJldHVybiB7XHJcblx0XHRpbnB1dHMsXHJcblx0XHRoYW5kbGVDaGFuZ2UsXHJcblx0XHRyZXNldEZvcm0sXHJcblx0XHRjbGVhckZvcm0sXHJcblx0fTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXNlRm9ybTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==