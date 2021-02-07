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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _lib_CartState__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../lib/CartState */ "./lib/CartState.js");






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
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_14__["useRouter"])();

  var _useCart = Object(_lib_CartState__WEBPACK_IMPORTED_MODULE_15__["useCart"])(),
      closeCart = _useCart.closeCart;

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

              router.push({
                pathname: "/order",
                query: {
                  id: order.data.checkout.id
                }
              }); // 7. Close the cart

              closeCart(); // 8. turn the loader off

              setLoading(false);
              nprogress__WEBPACK_IMPORTED_MODULE_9___default.a.done();

            case 23:
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
      lineNumber: 102,
      columnNumber: 14
    }, this), GraphQLError && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
      style: {
        fontSize: 12
      },
      children: GraphQLError.message
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 21
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_7__["CardElement"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_styles_SickButton__WEBPACK_IMPORTED_MODULE_10__["default"], {
      children: "Check Out Now"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 4
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 101,
    columnNumber: 3
  }, this);
}

_s(CheckoutForm, "vkkNbEEYj+twHFyE/cGJHSESZiA=", false, function () {
  return [_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_7__["useStripe"], _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_7__["useElements"], next_router__WEBPACK_IMPORTED_MODULE_14__["useRouter"], _lib_CartState__WEBPACK_IMPORTED_MODULE_15__["useCart"], _apollo_client__WEBPACK_IMPORTED_MODULE_13__["useMutation"]];
});

_c2 = CheckoutForm;

function Checkout() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_7__["Elements"], {
    stripe: stripeLib,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(CheckoutForm, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 4
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 112,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DaGVja291dC5qcyJdLCJuYW1lcyI6WyJDUkVBVEVfT1JERVJfTVVUQVRJT04iLCJncWwiLCJDaGVja291dEZvcm1TdHlsZXMiLCJzdHlsZWQiLCJmb3JtIiwic3RyaXBlTGliIiwibG9hZFN0cmlwZSIsInByb2Nlc3MiLCJDaGVja291dEZvcm0iLCJ1c2VTdGF0ZSIsImVycm9yIiwic2V0RXJyb3IiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInN0cmlwZSIsInVzZVN0cmlwZSIsImVsZW1lbnRzIiwidXNlRWxlbWVudHMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VDYXJ0IiwiY2xvc2VDYXJ0IiwidXNlTXV0YXRpb24iLCJjaGVja291dCIsIkdyYXBoUUxFcnJvciIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciLCJuUHJvZ3Jlc3MiLCJzdGFydCIsImNyZWF0ZVBheW1lbnRNZXRob2QiLCJ0eXBlIiwiY2FyZCIsImdldEVsZW1lbnQiLCJDYXJkRWxlbWVudCIsInBheW1lbnRNZXRob2QiLCJkb25lIiwidmFyaWFibGVzIiwidG9rZW4iLCJpZCIsIm9yZGVyIiwicHVzaCIsInBhdGhuYW1lIiwicXVlcnkiLCJkYXRhIiwiZm9udFNpemUiLCJtZXNzYWdlIiwiQ2hlY2tvdXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxxQkFBcUIsR0FBR0MsbURBQUgsbUJBQTNCO0FBY0EsSUFBTUMsa0JBQWtCLEdBQUdDLHlEQUFNLENBQUNDLElBQVY7QUFBQTtBQUFBO0FBQUEsOElBQXhCO0tBQU1GLGtCO0FBU04sSUFBTUcsU0FBUyxHQUFHQyxvRUFBVSxDQUFDQyw2R0FB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RDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSEQsZUFJQyxxRUFBQywyREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUREO0FBUUE7O0dBakVReEMsWTtVQUdPTyxpRSxFQUNFRSxtRSxFQUNGRSxzRCxFQUNPQyx1RCxFQUVzQkUsMkQ7OztNQVJwQ2QsWTs7QUFtRVQsU0FBU3lDLFFBQVQsR0FBb0I7QUFDbkIsc0JBQ0MscUVBQUMsZ0VBQUQ7QUFBVSxVQUFNLEVBQUU1QyxTQUFsQjtBQUFBLDJCQUNDLHFFQUFDLFlBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERDtBQUtBOztNQU5RNEMsUTtBQVFUIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuZTM2MzY0MDg2OTlmNjdmMGMzMjYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7IGxvYWRTdHJpcGUgfSBmcm9tIFwiQHN0cmlwZS9zdHJpcGUtanNcIjtcclxuaW1wb3J0IHtcclxuXHRDYXJkRWxlbWVudCxcclxuXHRFbGVtZW50cyxcclxuXHR1c2VFbGVtZW50cyxcclxuXHR1c2VTdHJpcGUsXHJcbn0gZnJvbSBcIkBzdHJpcGUvcmVhY3Qtc3RyaXBlLWpzXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBuUHJvZ3Jlc3MgZnJvbSBcIm5wcm9ncmVzc1wiO1xyXG5pbXBvcnQgU2lja0J1dHRvbiBmcm9tIFwiLi9zdHlsZXMvU2lja0J1dHRvblwiO1xyXG5pbXBvcnQgZ3FsIGZyb20gXCJncmFwaHFsLXRhZ1wiO1xyXG5pbXBvcnQgeyBHcmFwaFFMRXJyb3IgfSBmcm9tIFwiZ3JhcGhxbFwiO1xyXG5pbXBvcnQgeyB1c2VNdXRhdGlvbiB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgdXNlQ2FydCB9IGZyb20gXCIuLi9saWIvQ2FydFN0YXRlXCI7XHJcblxyXG5jb25zdCBDUkVBVEVfT1JERVJfTVVUQVRJT04gPSBncWxgXHJcblx0bXV0YXRpb24gQ1JFQVRFX09SREVSX01VVEFUSU9OKCR0b2tlbjogU3RyaW5nISkge1xyXG5cdFx0Y2hlY2tvdXQodG9rZW46ICR0b2tlbikge1xyXG5cdFx0XHRpZFxyXG5cdFx0XHRjaGFyZ2VcclxuXHRcdFx0dG90YWxcclxuXHRcdFx0aXRlbXMge1xyXG5cdFx0XHRcdGlkXHJcblx0XHRcdFx0bmFtZVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5gO1xyXG5cclxuY29uc3QgQ2hlY2tvdXRGb3JtU3R5bGVzID0gc3R5bGVkLmZvcm1gXHJcblx0Ym94LXNoYWRvdzogMCAxcHggMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMDQpO1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4wNik7XHJcblx0Ym9yZGVyLXJhZGl1czogNXB4O1xyXG5cdHBhZGRpbmc6IDFyZW07XHJcblx0ZGlzcGxheTogZ3JpZDtcclxuXHRncmlkLWdhcDogMXJlbTtcclxuYDtcclxuXHJcbmNvbnN0IHN0cmlwZUxpYiA9IGxvYWRTdHJpcGUocHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU1RSSVBFX0tFWSk7XHJcblxyXG5mdW5jdGlvbiBDaGVja291dEZvcm0oKSB7XHJcblx0Y29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZSgpO1xyXG5cdGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHRjb25zdCBzdHJpcGUgPSB1c2VTdHJpcGUoKTtcclxuXHRjb25zdCBlbGVtZW50cyA9IHVzZUVsZW1lbnRzKCk7XHJcblx0Y29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblx0Y29uc3QgeyBjbG9zZUNhcnQgfSA9IHVzZUNhcnQoKTtcclxuXHJcblx0Y29uc3QgW2NoZWNrb3V0LCB7IGVycm9yOiBHcmFwaFFMRXJyb3IgfV0gPSB1c2VNdXRhdGlvbihcclxuXHRcdENSRUFURV9PUkRFUl9NVVRBVElPTlxyXG5cdCk7XHJcblxyXG5cdGFzeW5jIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdChlKSB7XHJcblx0XHQvLyAxLiBTdG9wIHRoZSBmb3JtIGZyb20gc3VibWl0dGluZyBhbmQgdHVybiB0aGUgbG9hZGVyIG9uZVxyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0c2V0TG9hZGluZyh0cnVlKTtcclxuXHRcdGNvbnNvbGUubG9nKFwiV2UgZ290dGEgZG8gc29tZSB3b3JrLi5cIik7XHJcblxyXG5cdFx0Ly8gMi4gU3RhcnQgdGhlIHBhZ2UgdHJhbnNpdGlvblxyXG5cdFx0blByb2dyZXNzLnN0YXJ0KCk7XHJcblxyXG5cdFx0Ly8gMy4gQ3JlYXRlIHRoZSBwYXltZW50IG1ldGhvZCB2aWEgc3RyaXBlIChUb2tlbiBjb21lcyBiYWNrIGhlcmUgaWYgc3VjY2Vzc2Z1bClcclxuXHRcdGNvbnN0IHsgZXJyb3IsIHBheW1lbnRNZXRob2QgfSA9IGF3YWl0IHN0cmlwZS5jcmVhdGVQYXltZW50TWV0aG9kKHtcclxuXHRcdFx0dHlwZTogXCJjYXJkXCIsXHJcblx0XHRcdGNhcmQ6IGVsZW1lbnRzLmdldEVsZW1lbnQoQ2FyZEVsZW1lbnQpLFxyXG5cdFx0fSk7XHJcblx0XHRjb25zb2xlLmxvZyh7IHBheW1lbnRNZXRob2QgfSk7XHJcblxyXG5cdFx0Ly8gNC4gSGFuZGxlIGFueSBlcnJvcnMgZnJvbSBzdHJpcGVcclxuXHRcdGlmIChlcnJvcikge1xyXG5cdFx0XHRzZXRFcnJvcihlcnJvcik7XHJcblx0XHRcdG5Qcm9ncmVzcy5kb25lKCk7XHJcblx0XHRcdHJldHVybjsgLy8gc3RvcCB0aGUgY2hlY2sgb3V0IGZyb20gaGFwcGVuaW5nXHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gNS4gU2VuZCB0aGUgdG9rZW4gZnJvbSBzdGVwIDMgdG8gb3VyIGtleXN0b25lIHNlcnZlciwgdmlhIGEgY3VzdG9tIG11dGF0aW9uIVxyXG5cdFx0Y29uc3Qgb3JkZXIgPSBhd2FpdCBjaGVja291dCh7XHJcblx0XHRcdHZhcmlhYmxlczoge1xyXG5cdFx0XHRcdHRva2VuOiBwYXltZW50TWV0aG9kLmlkLFxyXG5cdFx0XHR9LFxyXG5cdFx0fSk7XHJcblxyXG5cdFx0Y29uc29sZS5sb2coYEZpbmlzaGVkIHdpdGggdGhlIG9yZGVyISBIZXJlIGlzIHRoZSBvcmRlciBpZDogIGApO1xyXG5cdFx0Y29uc29sZS5sb2coeyBvcmRlciB9KTtcclxuXHJcblx0XHQvLyA2LiBDaGFuZ2UgdGhlIHBhZ2UgdG8gdmlldyB0aGUgb3JkZXJcclxuXHRcdHJvdXRlci5wdXNoKHtcclxuXHRcdFx0cGF0aG5hbWU6IFwiL29yZGVyXCIsXHJcblx0XHRcdHF1ZXJ5OiB7IGlkOiBvcmRlci5kYXRhLmNoZWNrb3V0LmlkIH0sXHJcblx0XHR9KTtcclxuXHRcdC8vIDcuIENsb3NlIHRoZSBjYXJ0XHJcblx0XHRjbG9zZUNhcnQoKTtcclxuXHRcdC8vIDguIHR1cm4gdGhlIGxvYWRlciBvZmZcclxuXHRcdHNldExvYWRpbmcoZmFsc2UpO1xyXG5cdFx0blByb2dyZXNzLmRvbmUoKTtcclxuXHR9XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8Q2hlY2tvdXRGb3JtU3R5bGVzIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG5cdFx0XHR7ZXJyb3IgJiYgPHAgc3R5bGU9e3sgZm9udFNpemU6IDEyIH19PntlcnJvci5tZXNzYWdlfTwvcD59XHJcblx0XHRcdHtHcmFwaFFMRXJyb3IgJiYgPHAgc3R5bGU9e3sgZm9udFNpemU6IDEyIH19PntHcmFwaFFMRXJyb3IubWVzc2FnZX08L3A+fVxyXG5cdFx0XHQ8Q2FyZEVsZW1lbnQgLz5cclxuXHRcdFx0PFNpY2tCdXR0b24+Q2hlY2sgT3V0IE5vdzwvU2lja0J1dHRvbj5cclxuXHRcdDwvQ2hlY2tvdXRGb3JtU3R5bGVzPlxyXG5cdCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIENoZWNrb3V0KCkge1xyXG5cdHJldHVybiAoXHJcblx0XHQ8RWxlbWVudHMgc3RyaXBlPXtzdHJpcGVMaWJ9PlxyXG5cdFx0XHQ8Q2hlY2tvdXRGb3JtIC8+XHJcblx0XHQ8L0VsZW1lbnRzPlxyXG5cdCk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IENoZWNrb3V0IH07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=