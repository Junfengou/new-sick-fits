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
/* harmony import */ var D_React_Advanced_React_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var D_React_Advanced_React_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _stripe_stripe_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @stripe/stripe-js */ "./node_modules/@stripe/stripe-js/dist/stripe.esm.js");
/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @stripe/react-stripe-js */ "./node_modules/@stripe/react-stripe-js/dist/react-stripe.umd.js");
/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! nprogress */ "./node_modules/nprogress/nprogress.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _styles_SickButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./styles/SickButton */ "./components/styles/SickButton.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! graphql */ "./node_modules/graphql/index.mjs");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");






var _jsxFileName = "D:\\React\\Advanced-React\\Advanced-React\\sick-fits\\frontend\\components\\Checkout.js",
    _s = $RefreshSig$();

function _templateObject() {
  var data = Object(D_React_Advanced_React_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_4__["default"])(["\n\tmutation CREATE_ORDER_MUTATION($token: String!) {\n\t\tcheckout(token: $token) {\n\t\t\tid\n\t\t\tcharge\n\t\t\ttotal\n\t\t\titems {\n\t\t\t\tid\n\t\t\t\tname\n\t\t\t}\n\t\t}\n\t}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}










var CREATE_ORDER_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_11___default()(_templateObject());
var CheckoutFormStyles = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].form.withConfig({
  displayName: "Checkout__CheckoutFormStyles",
  componentId: "sc-10mtoy5-0"
})(["box-shadow:0 1px 2px 2px rgba(0,0,0,0.04);border:1px solid rgba(0,0,0,0.06);border-radius:5px;padding:1rem;display:grid;grid-gap:1rem;"]);
_c = CheckoutFormStyles;
var stripeLib = Object(_stripe_stripe_js__WEBPACK_IMPORTED_MODULE_6__["loadStripe"])("pk_test_51IIEnoC9b90NHAQl9SJgKbyLztaYsm99cOYtLtrf0hd7TUotx631MdkH7Vow31JKa2jmNkyYI3X8XA16NGMBnmlG00wkv6soGB");

function CheckoutForm() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])(),
      error = _useState[0],
      setError = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])(false),
      loading = _useState2[0],
      setLoading = _useState2[1];

  var stripe = Object(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_7__["useStripe"])();
  var elements = Object(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_7__["useElements"])();

  var _useMutation = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_13__["useMutation"])(CREATE_ORDER_MUTATION),
      _useMutation2 = Object(D_React_Advanced_React_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useMutation, 2),
      checkout = _useMutation2[0],
      GraphQLError = _useMutation2[1].error;

  function handleSubmit(_x) {
    return _handleSubmit.apply(this, arguments);
  }

  function _handleSubmit() {
    _handleSubmit = Object(D_React_Advanced_React_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/D_React_Advanced_React_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {
      var _yield$stripe$createP, error, paymentMethod, order;

      return D_React_Advanced_React_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              // 1. Stop the form from submitting and turn the loader one
              e.preventDefault();
              setLoading(true);
              console.log("We gotta do some work.."); // 2. Start the page transition

              nprogress__WEBPACK_IMPORTED_MODULE_9___default.a.start(); // 3. Create the payment method via stripe (Token comes back here if successful)

              _context.next = 6;
              return stripe.createPaymentMethod({
                type: "card",
                card: elements.getElement(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_7__["CardElement"])
              });

            case 6:
              _yield$stripe$createP = _context.sent;
              error = _yield$stripe$createP.error;
              paymentMethod = _yield$stripe$createP.paymentMethod;
              console.log({
                paymentMethod: paymentMethod
              }); // 4. Handle any errors from stripe

              if (!error) {
                _context.next = 14;
                break;
              }

              setError(error);
              nprogress__WEBPACK_IMPORTED_MODULE_9___default.a.done();
              return _context.abrupt("return");

            case 14:
              _context.next = 16;
              return checkout({
                variables: {
                  token: paymentMethod.id
                }
              });

            case 16:
              order = _context.sent;
              console.log("Finished with the order! Here is the order id:  ");
              console.log({
                order: order
              }); // 6. Change the page to view the order
              // 7. Close the cart
              // 8. turn the loader off

              setLoading(false);
              nprogress__WEBPACK_IMPORTED_MODULE_9___default.a.done();

            case 21:
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
      lineNumber: 94,
      columnNumber: 14
    }, this), GraphQLError && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
      style: {
        fontSize: 12
      },
      children: GraphQLError.message
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 21
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_7__["CardElement"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_styles_SickButton__WEBPACK_IMPORTED_MODULE_10__["default"], {
      children: "Check Out Now"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 4
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 93,
    columnNumber: 3
  }, this);
}

_s(CheckoutForm, "okdnxbB383OES/+KJ1zMj7Ajde0=", false, function () {
  return [_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_7__["useStripe"], _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_7__["useElements"], _apollo_client__WEBPACK_IMPORTED_MODULE_13__["useMutation"]];
});

_c2 = CheckoutForm;

function Checkout() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_7__["Elements"], {
    stripe: stripeLib,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(CheckoutForm, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 4
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 104,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DaGVja291dC5qcyJdLCJuYW1lcyI6WyJDUkVBVEVfT1JERVJfTVVUQVRJT04iLCJncWwiLCJDaGVja291dEZvcm1TdHlsZXMiLCJzdHlsZWQiLCJmb3JtIiwic3RyaXBlTGliIiwibG9hZFN0cmlwZSIsInByb2Nlc3MiLCJDaGVja291dEZvcm0iLCJ1c2VTdGF0ZSIsImVycm9yIiwic2V0RXJyb3IiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInN0cmlwZSIsInVzZVN0cmlwZSIsImVsZW1lbnRzIiwidXNlRWxlbWVudHMiLCJ1c2VNdXRhdGlvbiIsImNoZWNrb3V0IiwiR3JhcGhRTEVycm9yIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsIm5Qcm9ncmVzcyIsInN0YXJ0IiwiY3JlYXRlUGF5bWVudE1ldGhvZCIsInR5cGUiLCJjYXJkIiwiZ2V0RWxlbWVudCIsIkNhcmRFbGVtZW50IiwicGF5bWVudE1ldGhvZCIsImRvbmUiLCJ2YXJpYWJsZXMiLCJ0b2tlbiIsImlkIiwib3JkZXIiLCJmb250U2l6ZSIsIm1lc3NhZ2UiLCJDaGVja291dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEscUJBQXFCLEdBQUdDLG1EQUFILG1CQUEzQjtBQWNBLElBQU1DLGtCQUFrQixHQUFHQyx5REFBTSxDQUFDQyxJQUFWO0FBQUE7QUFBQTtBQUFBLDhJQUF4QjtLQUFNRixrQjtBQVNOLElBQU1HLFNBQVMsR0FBR0Msb0VBQVUsQ0FBQ0MsNkdBQUQsQ0FBNUI7O0FBRUEsU0FBU0MsWUFBVCxHQUF3QjtBQUFBOztBQUFBLGtCQUNHQyxzREFBUSxFQURYO0FBQUEsTUFDaEJDLEtBRGdCO0FBQUEsTUFDVEMs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YnBhY2svcGFnZXMvX2FwcC5jYTU1YWExODg5MjdlMjQ0MGQ1ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHsgbG9hZFN0cmlwZSB9IGZyb20gXCJAc3RyaXBlL3N0cmlwZS1qc1wiO1xyXG5pbXBvcnQge1xyXG5cdENhcmRFbGVtZW50LFxyXG5cdEVsZW1lbnRzLFxyXG5cdHVzZUVsZW1lbnRzLFxyXG5cdHVzZVN0cmlwZSxcclxufSBmcm9tIFwiQHN0cmlwZS9yZWFjdC1zdHJpcGUtanNcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IG5Qcm9ncmVzcyBmcm9tIFwibnByb2dyZXNzXCI7XHJcbmltcG9ydCBTaWNrQnV0dG9uIGZyb20gXCIuL3N0eWxlcy9TaWNrQnV0dG9uXCI7XHJcbmltcG9ydCBncWwgZnJvbSBcImdyYXBocWwtdGFnXCI7XHJcbmltcG9ydCB7IEdyYXBoUUxFcnJvciB9IGZyb20gXCJncmFwaHFsXCI7XHJcbmltcG9ydCB7IHVzZU11dGF0aW9uIH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XHJcblxyXG5jb25zdCBDUkVBVEVfT1JERVJfTVVUQVRJT04gPSBncWxgXHJcblx0bXV0YXRpb24gQ1JFQVRFX09SREVSX01VVEFUSU9OKCR0b2tlbjogU3RyaW5nISkge1xyXG5cdFx0Y2hlY2tvdXQodG9rZW46ICR0b2tlbikge1xyXG5cdFx0XHRpZFxyXG5cdFx0XHRjaGFyZ2VcclxuXHRcdFx0dG90YWxcclxuXHRcdFx0aXRlbXMge1xyXG5cdFx0XHRcdGlkXHJcblx0XHRcdFx0bmFtZVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5gO1xyXG5cclxuY29uc3QgQ2hlY2tvdXRGb3JtU3R5bGVzID0gc3R5bGVkLmZvcm1gXHJcblx0Ym94LXNoYWRvdzogMCAxcHggMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMDQpO1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4wNik7XHJcblx0Ym9yZGVyLXJhZGl1czogNXB4O1xyXG5cdHBhZGRpbmc6IDFyZW07XHJcblx0ZGlzcGxheTogZ3JpZDtcclxuXHRncmlkLWdhcDogMXJlbTtcclxuYDtcclxuXHJcbmNvbnN0IHN0cmlwZUxpYiA9IGxvYWRTdHJpcGUocHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU1RSSVBFX0tFWSk7XHJcblxyXG5mdW5jdGlvbiBDaGVja291dEZvcm0oKSB7XHJcblx0Y29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZSgpO1xyXG5cdGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHRjb25zdCBzdHJpcGUgPSB1c2VTdHJpcGUoKTtcclxuXHRjb25zdCBlbGVtZW50cyA9IHVzZUVsZW1lbnRzKCk7XHJcblxyXG5cdGNvbnN0IFtjaGVja291dCwgeyBlcnJvcjogR3JhcGhRTEVycm9yIH1dID0gdXNlTXV0YXRpb24oXHJcblx0XHRDUkVBVEVfT1JERVJfTVVUQVRJT05cclxuXHQpO1xyXG5cclxuXHRhc3luYyBmdW5jdGlvbiBoYW5kbGVTdWJtaXQoZSkge1xyXG5cdFx0Ly8gMS4gU3RvcCB0aGUgZm9ybSBmcm9tIHN1Ym1pdHRpbmcgYW5kIHR1cm4gdGhlIGxvYWRlciBvbmVcclxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdHNldExvYWRpbmcodHJ1ZSk7XHJcblx0XHRjb25zb2xlLmxvZyhcIldlIGdvdHRhIGRvIHNvbWUgd29yay4uXCIpO1xyXG5cclxuXHRcdC8vIDIuIFN0YXJ0IHRoZSBwYWdlIHRyYW5zaXRpb25cclxuXHRcdG5Qcm9ncmVzcy5zdGFydCgpO1xyXG5cclxuXHRcdC8vIDMuIENyZWF0ZSB0aGUgcGF5bWVudCBtZXRob2QgdmlhIHN0cmlwZSAoVG9rZW4gY29tZXMgYmFjayBoZXJlIGlmIHN1Y2Nlc3NmdWwpXHJcblx0XHRjb25zdCB7IGVycm9yLCBwYXltZW50TWV0aG9kIH0gPSBhd2FpdCBzdHJpcGUuY3JlYXRlUGF5bWVudE1ldGhvZCh7XHJcblx0XHRcdHR5cGU6IFwiY2FyZFwiLFxyXG5cdFx0XHRjYXJkOiBlbGVtZW50cy5nZXRFbGVtZW50KENhcmRFbGVtZW50KSxcclxuXHRcdH0pO1xyXG5cdFx0Y29uc29sZS5sb2coeyBwYXltZW50TWV0aG9kIH0pO1xyXG5cclxuXHRcdC8vIDQuIEhhbmRsZSBhbnkgZXJyb3JzIGZyb20gc3RyaXBlXHJcblx0XHRpZiAoZXJyb3IpIHtcclxuXHRcdFx0c2V0RXJyb3IoZXJyb3IpO1xyXG5cdFx0XHRuUHJvZ3Jlc3MuZG9uZSgpO1xyXG5cdFx0XHRyZXR1cm47IC8vIHN0b3AgdGhlIGNoZWNrIG91dCBmcm9tIGhhcHBlbmluZ1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIDUuIFNlbmQgdGhlIHRva2VuIGZyb20gc3RlcCAzIHRvIG91ciBrZXlzdG9uZSBzZXJ2ZXIsIHZpYSBhIGN1c3RvbSBtdXRhdGlvbiFcclxuXHRcdGNvbnN0IG9yZGVyID0gYXdhaXQgY2hlY2tvdXQoe1xyXG5cdFx0XHR2YXJpYWJsZXM6IHtcclxuXHRcdFx0XHR0b2tlbjogcGF5bWVudE1ldGhvZC5pZCxcclxuXHRcdFx0fSxcclxuXHRcdH0pO1xyXG5cclxuXHRcdGNvbnNvbGUubG9nKGBGaW5pc2hlZCB3aXRoIHRoZSBvcmRlciEgSGVyZSBpcyB0aGUgb3JkZXIgaWQ6ICBgKTtcclxuXHRcdGNvbnNvbGUubG9nKHsgb3JkZXIgfSk7XHJcblxyXG5cdFx0Ly8gNi4gQ2hhbmdlIHRoZSBwYWdlIHRvIHZpZXcgdGhlIG9yZGVyXHJcblx0XHQvLyA3LiBDbG9zZSB0aGUgY2FydFxyXG5cclxuXHRcdC8vIDguIHR1cm4gdGhlIGxvYWRlciBvZmZcclxuXHRcdHNldExvYWRpbmcoZmFsc2UpO1xyXG5cdFx0blByb2dyZXNzLmRvbmUoKTtcclxuXHR9XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8Q2hlY2tvdXRGb3JtU3R5bGVzIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG5cdFx0XHR7ZXJyb3IgJiYgPHAgc3R5bGU9e3sgZm9udFNpemU6IDEyIH19PntlcnJvci5tZXNzYWdlfTwvcD59XHJcblx0XHRcdHtHcmFwaFFMRXJyb3IgJiYgPHAgc3R5bGU9e3sgZm9udFNpemU6IDEyIH19PntHcmFwaFFMRXJyb3IubWVzc2FnZX08L3A+fVxyXG5cdFx0XHQ8Q2FyZEVsZW1lbnQgLz5cclxuXHRcdFx0PFNpY2tCdXR0b24+Q2hlY2sgT3V0IE5vdzwvU2lja0J1dHRvbj5cclxuXHRcdDwvQ2hlY2tvdXRGb3JtU3R5bGVzPlxyXG5cdCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIENoZWNrb3V0KCkge1xyXG5cdHJldHVybiAoXHJcblx0XHQ8RWxlbWVudHMgc3RyaXBlPXtzdHJpcGVMaWJ9PlxyXG5cdFx0XHQ8Q2hlY2tvdXRGb3JtIC8+XHJcblx0XHQ8L0VsZW1lbnRzPlxyXG5cdCk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IENoZWNrb3V0IH07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=