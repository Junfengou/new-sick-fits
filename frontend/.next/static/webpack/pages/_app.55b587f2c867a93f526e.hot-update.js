webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/Checkout.js":
/*!********************************!*\
  !*** ./components/Checkout.js ***!
  \********************************/
/*! exports provided: Checkout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Checkout", function() { return Checkout; });
/* harmony import */ var D_React_Advanced_React_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_React_Advanced_React_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(D_React_Advanced_React_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var D_React_Advanced_React_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _stripe_stripe_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @stripe/stripe-js */ "./node_modules/@stripe/stripe-js/dist/stripe.esm.js");
/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @stripe/react-stripe-js */ "./node_modules/@stripe/react-stripe-js/dist/react-stripe.umd.js");
/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! nprogress */ "./node_modules/nprogress/nprogress.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _styles_SickButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styles/SickButton */ "./components/styles/SickButton.js");




var _jsxFileName = "D:\\React\\Advanced-React\\Advanced-React\\sick-fits\\frontend\\components\\Checkout.js",
    _s = $RefreshSig$();







var CheckoutFormStyles = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].form.withConfig({
  displayName: "Checkout__CheckoutFormStyles",
  componentId: "sc-10mtoy5-0"
})(["box-shadow:0 1px 2px 2px rgba(0,0,0,0.04);border:1px solid rgba(0,0,0,0.06);border-radius:5px;padding:1rem;display:grid;grid-gap:1rem;"]);
_c = CheckoutFormStyles;
var stripeLib = Object(_stripe_stripe_js__WEBPACK_IMPORTED_MODULE_4__["loadStripe"])("pk_test_51IIEnoC9b90NHAQl9SJgKbyLztaYsm99cOYtLtrf0hd7TUotx631MdkH7Vow31JKa2jmNkyYI3X8XA16NGMBnmlG00wkv6soGB");

function CheckoutForm() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(),
      error = _useState[0],
      setError = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(false),
      loading = _useState2[0],
      setLoading = _useState2[1];

  var stripe = Object(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_5__["useStripe"])();
  var elements = Object(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_5__["useElements"])();

  function handleSubmit(_x) {
    return _handleSubmit.apply(this, arguments);
  }

  function _handleSubmit() {
    _handleSubmit = Object(D_React_Advanced_React_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/D_React_Advanced_React_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {
      var _yield$stripe$createP, error, paymentMethod;

      return D_React_Advanced_React_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              // 1. Stop the form from submitting and turn the loader one
              e.preventDefault();
              setLoading(true);
              console.log("We gotta do some work.."); // 2. Start the page transition

              nprogress__WEBPACK_IMPORTED_MODULE_7___default.a.start(); // 3. Create the payment method via stripe (Token comes back here if successful)

              _context.next = 6;
              return stripe.createPaymentMethod({
                type: "card",
                card: elements.getElement(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_5__["CardElement"])
              });

            case 6:
              _yield$stripe$createP = _context.sent;
              error = _yield$stripe$createP.error;
              paymentMethod = _yield$stripe$createP.paymentMethod;
              console.log(paymentMethod); // 4. Handle any errors from stripe

              if (error) {
                setError(error);
              } // 5. Send the token from step 3 to our keystone server, via a custom mutation!
              // 6. Change the page to view the order
              // 7. Close the cart
              // 8. turn the loader off


              setLoading(false);
              nprogress__WEBPACK_IMPORTED_MODULE_7___default.a.done();

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _handleSubmit.apply(this, arguments);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(CheckoutFormStyles, {
    onSubmit: handleSubmit,
    children: [error && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
      style: {
        fontSize: 12
      },
      children: error.message
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 14
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_5__["CardElement"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_styles_SickButton__WEBPACK_IMPORTED_MODULE_8__["default"], {
      children: "Check Out Now"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 4
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 56,
    columnNumber: 3
  }, this);
}

_s(CheckoutForm, "/GTcQkkNlUgykvoAY6A4l3RHUP4=", false, function () {
  return [_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_5__["useStripe"], _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_5__["useElements"]];
});

_c2 = CheckoutForm;

function Checkout() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_5__["Elements"], {
    stripe: stripeLib,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(CheckoutForm, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 4
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 66,
    columnNumber: 3
  }, this);
}

_c3 = Checkout;


var _c, _c2, _c3;

$RefreshReg$(_c, "CheckoutFormStyles");
$RefreshReg$(_c2, "CheckoutForm");
$RefreshReg$(_c3, "Checkout");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DaGVja291dC5qcyJdLCJuYW1lcyI6WyJDaGVja291dEZvcm1TdHlsZXMiLCJzdHlsZWQiLCJmb3JtIiwic3RyaXBlTGliIiwibG9hZFN0cmlwZSIsInByb2Nlc3MiLCJDaGVja291dEZvcm0iLCJ1c2VTdGF0ZSIsImVycm9yIiwic2V0RXJyb3IiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInN0cmlwZSIsInVzZVN0cmlwZSIsImVsZW1lbnRzIiwidXNlRWxlbWVudHMiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwiblByb2dyZXNzIiwic3RhcnQiLCJjcmVhdGVQYXltZW50TWV0aG9kIiwidHlwZSIsImNhcmQiLCJnZXRFbGVtZW50IiwiQ2FyZEVsZW1lbnQiLCJwYXltZW50TWV0aG9kIiwiZG9uZSIsImZvbnRTaXplIiwibWVzc2FnZSIsIkNoZWNrb3V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxrQkFBa0IsR0FBR0MseURBQU0sQ0FBQ0MsSUFBVjtBQUFBO0FBQUE7QUFBQSw4SUFBeEI7S0FBTUYsa0I7QUFTTixJQUFNRyxTQUFTLEdBQUdDLG9FQUFVLENBQUNDLDZHQUFELENBQTVCOztBQUVBLFNBQVNDLFlBQVQsR0FBd0I7QUFBQTs7QUFBQSxrQkFDR0Msc0RBQVEsRUFEWDtBQUFBLE1BQ2hCQyxLQURnQjtBQUFBLE1BQ1RDLFFBRFM7O0FBQUEsbUJBRU9GLHNEQUFRLENBQUMsS0FBRCxDQUZmO0FBQUEsTUFFaEJHLE9BRmdCO0FBQUEsTUFFUEMsVUFGTzs7QUFHdkIsTUFBTUMsTUFBTSxHQUFHQyx5RUFBUyxFQUF4QjtBQUNBLE1BQU1DLFFBQVEsR0FBR0MsMkVBQVcsRUFBNUI7O0FBSnVCLFdBS1JDLFlBTFE7QUFBQTtBQUFBOztBQUFBO0FBQUEsbVhBS3ZCLGlCQUE0QkMsQ0FBNUI7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNDO0FBQ0FBLGVBQUMsQ0FBQ0MsY0FBRjtBQUNBUCx3QkFBVSxDQUFDLElBQUQsQ0FBVjtBQUNBUSxxQkFBTyxDQUFDQyxHQUFSLENBQVkseUJBQVosRUFKRCxDQUtDOztBQUNBQyw4REFBUyxDQUFDQyxLQUFWLEdBTkQsQ0FPQzs7QUFQRDtBQUFBLHFCQVF3Q1YsTUFBTSxDQUFDVyxtQkFBUCxDQUEyQjtBQUNqRUMsb0JBQUksRUFBRSxNQUQyRDtBQUVqRUMsb0JBQUksRUFBRVgsUUFBUSxDQUFDWSxVQUFULENBQW9CQyxtRUFBcEI7QUFGMkQsZUFBM0IsQ0FSeEM7O0FBQUE7QUFBQTtBQVFTbkIsbUJBUlQseUJBUVNBLEtBUlQ7QUFRZ0JvQiwyQkFSaEIseUJBUWdCQSxhQVJoQjtBQVlDVCxxQkFBTyxDQUFDQyxHQUFSLENBQVlRLGFBQVosRUFaRCxDQWFDOztBQUNBLGtCQUFJcEIsS0FBSixFQUFXO0FBQ1ZDLHdCQUFRLENBQUNELEtBQUQsQ0FBUjtBQUNBLGVBaEJGLENBaUJDO0FBQ0E7QUFDQTtBQUVBOzs7QUFDQUcsd0JBQVUsQ0FBQyxLQUFELENBQVY7QUFDQVUsOERBQVMsQ0FBQ1EsSUFBVjs7QUF2QkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FMdUI7QUFBQTtBQUFBOztBQStCdkIsc0JBQ0MscUVBQUMsa0JBQUQ7QUFBb0IsWUFBUSxFQUFFYixZQUE5QjtBQUFBLGVBQ0VSLEtBQUssaUJBQUk7QUFBRyxXQUFLLEVBQUU7QUFBRXNCLGdCQUFRLEVBQUU7QUFBWixPQUFWO0FBQUEsZ0JBQTZCdEIsS0FBSyxDQUFDdUI7QUFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURYLGVBRUMscUVBQUMsbUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZELGVBR0MscUVBQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFIRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERDtBQU9BOztHQXRDUXpCLFk7VUFHT08saUUsRUFDRUUsbUU7OztNQUpUVCxZOztBQXdDVCxTQUFTMEIsUUFBVCxHQUFvQjtBQUNuQixzQkFDQyxxRUFBQyxnRUFBRDtBQUFVLFVBQU0sRUFBRTdCLFNBQWxCO0FBQUEsMkJBQ0MscUVBQUMsWUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUREO0FBS0E7O01BTlE2QixRO0FBUVQiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC41NWI1ODdmMmM4NjdhOTNmNTI2ZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHsgbG9hZFN0cmlwZSB9IGZyb20gXCJAc3RyaXBlL3N0cmlwZS1qc1wiO1xyXG5pbXBvcnQge1xyXG5cdENhcmRFbGVtZW50LFxyXG5cdEVsZW1lbnRzLFxyXG5cdHVzZUVsZW1lbnRzLFxyXG5cdHVzZVN0cmlwZSxcclxufSBmcm9tIFwiQHN0cmlwZS9yZWFjdC1zdHJpcGUtanNcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IG5Qcm9ncmVzcyBmcm9tIFwibnByb2dyZXNzXCI7XHJcbmltcG9ydCBTaWNrQnV0dG9uIGZyb20gXCIuL3N0eWxlcy9TaWNrQnV0dG9uXCI7XHJcblxyXG5jb25zdCBDaGVja291dEZvcm1TdHlsZXMgPSBzdHlsZWQuZm9ybWBcclxuXHRib3gtc2hhZG93OiAwIDFweCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4wNCk7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjA2KTtcclxuXHRib3JkZXItcmFkaXVzOiA1cHg7XHJcblx0cGFkZGluZzogMXJlbTtcclxuXHRkaXNwbGF5OiBncmlkO1xyXG5cdGdyaWQtZ2FwOiAxcmVtO1xyXG5gO1xyXG5cclxuY29uc3Qgc3RyaXBlTGliID0gbG9hZFN0cmlwZShwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TVFJJUEVfS0VZKTtcclxuXHJcbmZ1bmN0aW9uIENoZWNrb3V0Rm9ybSgpIHtcclxuXHRjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKCk7XHJcblx0Y29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cdGNvbnN0IHN0cmlwZSA9IHVzZVN0cmlwZSgpO1xyXG5cdGNvbnN0IGVsZW1lbnRzID0gdXNlRWxlbWVudHMoKTtcclxuXHRhc3luYyBmdW5jdGlvbiBoYW5kbGVTdWJtaXQoZSkge1xyXG5cdFx0Ly8gMS4gU3RvcCB0aGUgZm9ybSBmcm9tIHN1Ym1pdHRpbmcgYW5kIHR1cm4gdGhlIGxvYWRlciBvbmVcclxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdHNldExvYWRpbmcodHJ1ZSk7XHJcblx0XHRjb25zb2xlLmxvZyhcIldlIGdvdHRhIGRvIHNvbWUgd29yay4uXCIpO1xyXG5cdFx0Ly8gMi4gU3RhcnQgdGhlIHBhZ2UgdHJhbnNpdGlvblxyXG5cdFx0blByb2dyZXNzLnN0YXJ0KCk7XHJcblx0XHQvLyAzLiBDcmVhdGUgdGhlIHBheW1lbnQgbWV0aG9kIHZpYSBzdHJpcGUgKFRva2VuIGNvbWVzIGJhY2sgaGVyZSBpZiBzdWNjZXNzZnVsKVxyXG5cdFx0Y29uc3QgeyBlcnJvciwgcGF5bWVudE1ldGhvZCB9ID0gYXdhaXQgc3RyaXBlLmNyZWF0ZVBheW1lbnRNZXRob2Qoe1xyXG5cdFx0XHR0eXBlOiBcImNhcmRcIixcclxuXHRcdFx0Y2FyZDogZWxlbWVudHMuZ2V0RWxlbWVudChDYXJkRWxlbWVudCksXHJcblx0XHR9KTtcclxuXHRcdGNvbnNvbGUubG9nKHBheW1lbnRNZXRob2QpO1xyXG5cdFx0Ly8gNC4gSGFuZGxlIGFueSBlcnJvcnMgZnJvbSBzdHJpcGVcclxuXHRcdGlmIChlcnJvcikge1xyXG5cdFx0XHRzZXRFcnJvcihlcnJvcik7XHJcblx0XHR9XHJcblx0XHQvLyA1LiBTZW5kIHRoZSB0b2tlbiBmcm9tIHN0ZXAgMyB0byBvdXIga2V5c3RvbmUgc2VydmVyLCB2aWEgYSBjdXN0b20gbXV0YXRpb24hXHJcblx0XHQvLyA2LiBDaGFuZ2UgdGhlIHBhZ2UgdG8gdmlldyB0aGUgb3JkZXJcclxuXHRcdC8vIDcuIENsb3NlIHRoZSBjYXJ0XHJcblxyXG5cdFx0Ly8gOC4gdHVybiB0aGUgbG9hZGVyIG9mZlxyXG5cdFx0c2V0TG9hZGluZyhmYWxzZSk7XHJcblx0XHRuUHJvZ3Jlc3MuZG9uZSgpO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxDaGVja291dEZvcm1TdHlsZXMgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcblx0XHRcdHtlcnJvciAmJiA8cCBzdHlsZT17eyBmb250U2l6ZTogMTIgfX0+e2Vycm9yLm1lc3NhZ2V9PC9wPn1cclxuXHRcdFx0PENhcmRFbGVtZW50IC8+XHJcblx0XHRcdDxTaWNrQnV0dG9uPkNoZWNrIE91dCBOb3c8L1NpY2tCdXR0b24+XHJcblx0XHQ8L0NoZWNrb3V0Rm9ybVN0eWxlcz5cclxuXHQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBDaGVja291dCgpIHtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PEVsZW1lbnRzIHN0cmlwZT17c3RyaXBlTGlifT5cclxuXHRcdFx0PENoZWNrb3V0Rm9ybSAvPlxyXG5cdFx0PC9FbGVtZW50cz5cclxuXHQpO1xyXG59XHJcblxyXG5leHBvcnQgeyBDaGVja291dCB9O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9