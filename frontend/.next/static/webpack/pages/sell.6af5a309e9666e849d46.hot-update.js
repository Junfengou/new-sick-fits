webpackHotUpdate_N_E("pages/sell",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL3VzZUZvcm0uanMiXSwibmFtZXMiOlsidXNlRm9ybSIsImluaXRpYWwiLCJ1c2VTdGF0ZSIsImlucHV0cyIsInNldElucHV0cyIsImluaXRpYWxWYWx1ZSIsIk9iamVjdCIsInZhbHVlcyIsImpvaW4iLCJ1c2VFZmZlY3QiLCJoYW5kbGVDaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJuYW1lIiwidHlwZSIsIk51bWJlciIsImZpbGVzIiwicmVzZXRGb3JtIiwiY2xlYXJGb3JtIiwiYmxhbmtTdGF0ZSIsImZyb21FbnRyaWVzIiwiZW50cmllcyIsIm1hcCIsImtleSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsU0FBU0EsT0FBVCxHQUErQjtBQUFBOztBQUFBLE1BQWRDLE9BQWMsdUVBQUosRUFBSTs7QUFDOUI7QUFEOEIsa0JBRUZDLHNEQUFRLENBQUNELE9BQUQsQ0FGTjtBQUFBLE1BRXZCRSxNQUZ1QjtBQUFBLE1BRWZDLFNBRmU7O0FBRzlCLE1BQU1DLFlBQVksR0FBR0MsTUFBTSxDQUFDQyxNQUFQLENBQWNOLE9BQWQsRUFBdUJPLElBQXZCLENBQTRCLEVBQTVCLENBQXJCO0FBRUFDLHlEQUFTLENBQUMsWUFBTTtBQUNmTCxhQUFTLENBQUNILE9BQUQsQ0FBVDtBQUNBLEdBRlEsRUFFTixDQUFDSSxZQUFELENBRk0sQ0FBVDs7QUFJQSxXQUFTSyxZQUFULENBQXNCQyxDQUF0QixFQUF5QjtBQUFBLG9CQUNJQSxDQUFDLENBQUNDLE1BRE47QUFBQSxRQUNsQkMsS0FEa0IsYUFDbEJBLEtBRGtCO0FBQUEsUUFDWEMsSUFEVyxhQUNYQSxJQURXO0FBQUEsUUFDTEMsSUFESyxhQUNMQSxJQURLOztBQUV4QixRQUFJQSxJQUFJLEtBQUssUUFBYixFQUF1QjtBQUN0QkYsV0FBSyxHQUFHRyxNQUFNLENBQUNILEtBQUQsQ0FBZDtBQUNBOztBQUVELFFBQUlFLElBQUksS0FBSyxNQUFiLEVBQXFCO0FBQUEsNE1BQ1ZKLENBQUMsQ0FBQ0MsTUFBRixDQUFTSyxLQURDOztBQUNuQkosV0FEbUI7QUFFcEI7O0FBQ0RULGFBQVMsaUNBQ0xELE1BREssNExBRVBXLElBRk8sRUFFQUQsS0FGQSxHQUFUO0FBSUE7O0FBRUQsV0FBU0ssU0FBVCxHQUFxQjtBQUNwQmQsYUFBUyxDQUFDSCxPQUFELENBQVQ7QUFDQTtBQUVEO0FBQ0Q7QUFDQTtBQUNBOzs7QUFDQyxXQUFTa0IsU0FBVCxHQUFxQjtBQUNwQixRQUFNQyxVQUFVLEdBQUdkLE1BQU0sQ0FBQ2UsV0FBUCxDQUNsQmYsTUFBTSxDQUFDZ0IsT0FBUCxDQUFlbkIsTUFBZixFQUF1Qm9CLEdBQXZCLENBQTJCO0FBQUE7QUFBQSxVQUFFQyxHQUFGO0FBQUEsVUFBT1gsS0FBUDs7QUFBQSxhQUFrQixDQUFDVyxHQUFELEVBQU0sRUFBTixDQUFsQjtBQUFBLEtBQTNCLENBRGtCLENBQW5CO0FBR0FwQixhQUFTLENBQUNnQixVQUFELENBQVQ7QUFDQSxHQXJDNkIsQ0F1QzlCOzs7QUFDQSxTQUFPO0FBQ05qQixVQUFNLEVBQU5BLE1BRE07QUFFTk8sZ0JBQVksRUFBWkEsWUFGTTtBQUdOUSxhQUFTLEVBQVRBLFNBSE07QUFJTkMsYUFBUyxFQUFUQTtBQUpNLEdBQVA7QUFNQTs7R0E5Q1FuQixPOztBQWdETUEsc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2VsbC42YWY1YTMwOWU5NjY2ZTg0OWQ0Ni5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZnVuY3Rpb24gdXNlRm9ybShpbml0aWFsID0ge30pIHtcclxuXHQvLyBjcmVhdGUgYSBzdGF0ZSBvYmplY3QgZm9yIG91ciBpbnB1dFxyXG5cdGNvbnN0IFtpbnB1dHMsIHNldElucHV0c10gPSB1c2VTdGF0ZShpbml0aWFsKTtcclxuXHRjb25zdCBpbml0aWFsVmFsdWUgPSBPYmplY3QudmFsdWVzKGluaXRpYWwpLmpvaW4oXCJcIik7XHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRzZXRJbnB1dHMoaW5pdGlhbCk7XHJcblx0fSwgW2luaXRpYWxWYWx1ZV0pO1xyXG5cclxuXHRmdW5jdGlvbiBoYW5kbGVDaGFuZ2UoZSkge1xyXG5cdFx0bGV0IHsgdmFsdWUsIG5hbWUsIHR5cGUgfSA9IGUudGFyZ2V0O1xyXG5cdFx0aWYgKHR5cGUgPT09IFwibnVtYmVyXCIpIHtcclxuXHRcdFx0dmFsdWUgPSBOdW1iZXIodmFsdWUpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmICh0eXBlID09PSBcImZpbGVcIikge1xyXG5cdFx0XHRbdmFsdWVdID0gZS50YXJnZXQuZmlsZXM7XHJcblx0XHR9XHJcblx0XHRzZXRJbnB1dHMoe1xyXG5cdFx0XHQuLi5pbnB1dHMsXHJcblx0XHRcdFtuYW1lXTogdmFsdWUsXHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIHJlc2V0Rm9ybSgpIHtcclxuXHRcdHNldElucHV0cyhpbml0aWFsKTtcclxuXHR9XHJcblxyXG5cdC8qXHJcbiAgICAgICAgdGFrZSB0aGUgW2lucHV0XSBvYmplY3QgYW5kIHR1cm4gaXQgaW50byBhbiBhcnJheSB3aXRoIE9iamVjdC5lbnRyaWVzKClcclxuICAgICAgICB0aGVuIG1hcCB0aHJvdWdoIHRoZSBhcnJheSBhbmQgZGVzdHJ1Y3R1cmUgdGhlIGtleSBhbmQgdmFsdWUgYW5kIGZvciBlYWNoIGtleSwgd2Ugc2V0IHRoZSB2YWx1ZSB0byBlbXB0eVxyXG4gICAgKi9cclxuXHRmdW5jdGlvbiBjbGVhckZvcm0oKSB7XHJcblx0XHRjb25zdCBibGFua1N0YXRlID0gT2JqZWN0LmZyb21FbnRyaWVzKFxyXG5cdFx0XHRPYmplY3QuZW50cmllcyhpbnB1dHMpLm1hcCgoW2tleSwgdmFsdWVdKSA9PiBba2V5LCBcIlwiXSlcclxuXHRcdCk7XHJcblx0XHRzZXRJbnB1dHMoYmxhbmtTdGF0ZSk7XHJcblx0fVxyXG5cclxuXHQvLyByZXR1cm4gdGhlIHRoaW5ncyB3ZSB3YW50IHRvIHN1cmZhY2VcclxuXHRyZXR1cm4ge1xyXG5cdFx0aW5wdXRzLFxyXG5cdFx0aGFuZGxlQ2hhbmdlLFxyXG5cdFx0cmVzZXRGb3JtLFxyXG5cdFx0Y2xlYXJGb3JtLFxyXG5cdH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHVzZUZvcm07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=