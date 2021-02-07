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
              console.log(paymentMethod); // 4. Handle any errors from stripe

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
              console.log("Finished with the order! Here is the order id: ".concat(order, " ")); // 6. Change the page to view the order
              // 7. Close the cart
              // 8. turn the loader off

              setLoading(false);
              nprogress__WEBPACK_IMPORTED_MODULE_9___default.a.done();

            case 20:
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
      lineNumber: 93,
      columnNumber: 14
    }, this), GraphQLError && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
      style: {
        fontSize: 12
      },
      children: GraphQLError.message
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 21
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_7__["CardElement"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_styles_SickButton__WEBPACK_IMPORTED_MODULE_10__["default"], {
      children: "Check Out Now"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 4
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 92,
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
      lineNumber: 104,
      columnNumber: 4
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 103,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DaGVja291dC5qcyJdLCJuYW1lcyI6WyJDUkVBVEVfT1JERVJfTVVUQVRJT04iLCJncWwiLCJDaGVja291dEZvcm1TdHlsZXMiLCJzdHlsZWQiLCJmb3JtIiwic3RyaXBlTGliIiwibG9hZFN0cmlwZSIsInByb2Nlc3MiLCJDaGVja291dEZvcm0iLCJ1c2VTdGF0ZSIsImVycm9yIiwic2V0RXJyb3IiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInN0cmlwZSIsInVzZVN0cmlwZSIsImVsZW1lbnRzIiwidXNlRWxlbWVudHMiLCJ1c2VNdXRhdGlvbiIsImNoZWNrb3V0IiwiR3JhcGhRTEVycm9yIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsIm5Qcm9ncmVzcyIsInN0YXJ0IiwiY3JlYXRlUGF5bWVudE1ldGhvZCIsInR5cGUiLCJjYXJkIiwiZ2V0RWxlbWVudCIsIkNhcmRFbGVtZW50IiwicGF5bWVudE1ldGhvZCIsImRvbmUiLCJ2YXJpYWJsZXMiLCJ0b2tlbiIsImlkIiwib3JkZXIiLCJmb250U2l6ZSIsIm1lc3NhZ2UiLCJDaGVja291dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEscUJBQXFCLEdBQUdDLG1EQUFILG1CQUEzQjtBQWNBLElBQU1DLGtCQUFrQixHQUFHQyx5REFBTSxDQUFDQyxJQUFWO0FBQUE7QUFBQTtBQUFBLDhJQUF4QjtLQUFNRixrQjtBQVNOLElBQU1HLFNBQVMsR0FBR0Msb0VBQVUsQ0FBQ0MsNkdBQUQsQ0FBNUI7O0FBRUEsU0FBU0MsWUFBVCxHQUF3QjtBQUFBOztBQUFBLGtCQUNHQyxzREFBUSxFQURYO0FBQUEsTUFDaEJDLEtBRGdCO0FBQUEsTUFDVEMsUUFEUzs7QUFBQSxtQkFFT0Ysc0RBQVEsQ0FBQyxLQUFELENBRmY7QUFBQSxNQUVoQkcsT0FGZ0I7QUFBQSxNQUVQQyxVQUZPOztBQUd2QixNQUFNQyxNQUFNLEdBQUdDLHlFQUFTLEVBQXhCO0FBQ0EsTUFBTUMsUUFBUSxHQUFHQywyRUFBVyxFQUE1Qjs7QUFKdUIscUJBTXFCQyxtRUFBVyxDQUN0RGxCLHFCQURzRCxDQU5oQztBQUFBO0FBQUEsTUFNaEJtQixRQU5nQjtBQUFBLE1BTUdDLFlBTkgsb0JBTUpWLEtBTkk7O0FBQUEsV0FVUlcsWUFWUTtBQUFBO0FBQUE7O0FBQUE7QUFBQSxtWEFVdkIsaUJBQTRCQyxDQUE1QjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0M7QUFDQUEsZUFBQyxDQUFDQyxjQUFGO0FBQ0FWLHdCQUFVLENBQUMsSUFBRCxDQUFWO0FBQ0FXLHFCQUFPLENBQUNDLEdBQVIsQ0FBWSx5QkFBWixFQUpELENBTUM7O0FBQ0FDLDhEQUFTLENBQUNDLEtBQVYsR0FQRCxDQVNDOztBQVREO0FBQUEscUJBVXdDYixNQUFNLENBQUNjLG1CQUFQLENBQTJCO0FBQ2pFQyxvQkFBSSxFQUFFLE1BRDJEO0FBRWpFQyxvQkFBSSxFQUFFZCxRQUFRLENBQUNlLFVBQVQsQ0FBb0JDLG1FQUFwQjtBQUYyRCxlQUEzQixDQVZ4Qzs7QUFBQTtBQUFBO0FBVVN0QixtQkFWVCx5QkFVU0EsS0FWVDtBQVVnQnVCLDJCQVZoQix5QkFVZ0JBLGFBVmhCO0FBY0NULHFCQUFPLENBQUNDLEdBQVIsQ0FBWVEsYUFBWixFQWRELENBZ0JDOztBQWhCRCxtQkFpQkt2QixLQWpCTDtBQUFBO0FBQUE7QUFBQTs7QUFrQkVDLHNCQUFRLENBQUNELEtBQUQsQ0FBUjtBQUNBZ0IsOERBQVMsQ0FBQ1EsSUFBVjtBQW5CRjs7QUFBQTtBQUFBO0FBQUEscUJBd0JxQmYsUUFBUSxDQUFDO0FBQzVCZ0IseUJBQVMsRUFBRTtBQUNWQyx1QkFBSyxFQUFFSCxhQUFhLENBQUNJO0FBRFg7QUFEaUIsZUFBRCxDQXhCN0I7O0FBQUE7QUF3Qk9DLG1CQXhCUDtBQThCQ2QscUJBQU8sQ0FBQ0MsR0FBUiwwREFBOERhLEtBQTlELFFBOUJELENBZ0NDO0FBQ0E7QUFFQTs7QUFDQXpCLHdCQUFVLENBQUMsS0FBRCxDQUFWO0FBQ0FhLDhEQUFTLENBQUNRLElBQVY7O0FBckNEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBVnVCO0FBQUE7QUFBQTs7QUFrRHZCLHNCQUNDLHFFQUFDLGtCQUFEO0FBQW9CLFlBQVEsRUFBRWIsWUFBOUI7QUFBQSxlQUNFWCxLQUFLLGlCQUFJO0FBQUcsV0FBSyxFQUFFO0FBQUU2QixnQkFBUSxFQUFFO0FBQVosT0FBVjtBQUFBLGdCQUE2QjdCLEtBQUssQ0FBQzhCO0FBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFEWCxFQUVFcEIsWUFBWSxpQkFBSTtBQUFHLFdBQUssRUFBRTtBQUFFbUIsZ0JBQVEsRUFBRTtBQUFaLE9BQVY7QUFBQSxnQkFBNkJuQixZQUFZLENBQUNvQjtBQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRmxCLGVBR0MscUVBQUMsbUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhELGVBSUMscUVBQUMsMkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERDtBQVFBOztHQTFEUWhDLFk7VUFHT08saUUsRUFDRUUsbUUsRUFFMkJDLDJEOzs7TUFOcENWLFk7O0FBNERULFNBQVNpQyxRQUFULEdBQW9CO0FBQ25CLHNCQUNDLHFFQUFDLGdFQUFEO0FBQVUsVUFBTSxFQUFFcEMsU0FBbEI7QUFBQSwyQkFDQyxxRUFBQyxZQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREQ7QUFLQTs7TUFOUW9DLFE7QUFRVCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjhhYmU2NzZkMzZjZmFiNGIzNWRiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgeyBsb2FkU3RyaXBlIH0gZnJvbSBcIkBzdHJpcGUvc3RyaXBlLWpzXCI7XHJcbmltcG9ydCB7XHJcblx0Q2FyZEVsZW1lbnQsXHJcblx0RWxlbWVudHMsXHJcblx0dXNlRWxlbWVudHMsXHJcblx0dXNlU3RyaXBlLFxyXG59IGZyb20gXCJAc3RyaXBlL3JlYWN0LXN0cmlwZS1qc1wiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgblByb2dyZXNzIGZyb20gXCJucHJvZ3Jlc3NcIjtcclxuaW1wb3J0IFNpY2tCdXR0b24gZnJvbSBcIi4vc3R5bGVzL1NpY2tCdXR0b25cIjtcclxuaW1wb3J0IGdxbCBmcm9tIFwiZ3JhcGhxbC10YWdcIjtcclxuaW1wb3J0IHsgR3JhcGhRTEVycm9yIH0gZnJvbSBcImdyYXBocWxcIjtcclxuaW1wb3J0IHsgdXNlTXV0YXRpb24gfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcclxuXHJcbmNvbnN0IENSRUFURV9PUkRFUl9NVVRBVElPTiA9IGdxbGBcclxuXHRtdXRhdGlvbiBDUkVBVEVfT1JERVJfTVVUQVRJT04oJHRva2VuOiBTdHJpbmchKSB7XHJcblx0XHRjaGVja291dCh0b2tlbjogJHRva2VuKSB7XHJcblx0XHRcdGlkXHJcblx0XHRcdGNoYXJnZVxyXG5cdFx0XHR0b3RhbFxyXG5cdFx0XHRpdGVtcyB7XHJcblx0XHRcdFx0aWRcclxuXHRcdFx0XHRuYW1lXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbmA7XHJcblxyXG5jb25zdCBDaGVja291dEZvcm1TdHlsZXMgPSBzdHlsZWQuZm9ybWBcclxuXHRib3gtc2hhZG93OiAwIDFweCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4wNCk7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjA2KTtcclxuXHRib3JkZXItcmFkaXVzOiA1cHg7XHJcblx0cGFkZGluZzogMXJlbTtcclxuXHRkaXNwbGF5OiBncmlkO1xyXG5cdGdyaWQtZ2FwOiAxcmVtO1xyXG5gO1xyXG5cclxuY29uc3Qgc3RyaXBlTGliID0gbG9hZFN0cmlwZShwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TVFJJUEVfS0VZKTtcclxuXHJcbmZ1bmN0aW9uIENoZWNrb3V0Rm9ybSgpIHtcclxuXHRjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKCk7XHJcblx0Y29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cdGNvbnN0IHN0cmlwZSA9IHVzZVN0cmlwZSgpO1xyXG5cdGNvbnN0IGVsZW1lbnRzID0gdXNlRWxlbWVudHMoKTtcclxuXHJcblx0Y29uc3QgW2NoZWNrb3V0LCB7IGVycm9yOiBHcmFwaFFMRXJyb3IgfV0gPSB1c2VNdXRhdGlvbihcclxuXHRcdENSRUFURV9PUkRFUl9NVVRBVElPTlxyXG5cdCk7XHJcblxyXG5cdGFzeW5jIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdChlKSB7XHJcblx0XHQvLyAxLiBTdG9wIHRoZSBmb3JtIGZyb20gc3VibWl0dGluZyBhbmQgdHVybiB0aGUgbG9hZGVyIG9uZVxyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0c2V0TG9hZGluZyh0cnVlKTtcclxuXHRcdGNvbnNvbGUubG9nKFwiV2UgZ290dGEgZG8gc29tZSB3b3JrLi5cIik7XHJcblxyXG5cdFx0Ly8gMi4gU3RhcnQgdGhlIHBhZ2UgdHJhbnNpdGlvblxyXG5cdFx0blByb2dyZXNzLnN0YXJ0KCk7XHJcblxyXG5cdFx0Ly8gMy4gQ3JlYXRlIHRoZSBwYXltZW50IG1ldGhvZCB2aWEgc3RyaXBlIChUb2tlbiBjb21lcyBiYWNrIGhlcmUgaWYgc3VjY2Vzc2Z1bClcclxuXHRcdGNvbnN0IHsgZXJyb3IsIHBheW1lbnRNZXRob2QgfSA9IGF3YWl0IHN0cmlwZS5jcmVhdGVQYXltZW50TWV0aG9kKHtcclxuXHRcdFx0dHlwZTogXCJjYXJkXCIsXHJcblx0XHRcdGNhcmQ6IGVsZW1lbnRzLmdldEVsZW1lbnQoQ2FyZEVsZW1lbnQpLFxyXG5cdFx0fSk7XHJcblx0XHRjb25zb2xlLmxvZyhwYXltZW50TWV0aG9kKTtcclxuXHJcblx0XHQvLyA0LiBIYW5kbGUgYW55IGVycm9ycyBmcm9tIHN0cmlwZVxyXG5cdFx0aWYgKGVycm9yKSB7XHJcblx0XHRcdHNldEVycm9yKGVycm9yKTtcclxuXHRcdFx0blByb2dyZXNzLmRvbmUoKTtcclxuXHRcdFx0cmV0dXJuOyAvLyBzdG9wIHRoZSBjaGVjayBvdXQgZnJvbSBoYXBwZW5pbmdcclxuXHRcdH1cclxuXHJcblx0XHQvLyA1LiBTZW5kIHRoZSB0b2tlbiBmcm9tIHN0ZXAgMyB0byBvdXIga2V5c3RvbmUgc2VydmVyLCB2aWEgYSBjdXN0b20gbXV0YXRpb24hXHJcblx0XHRjb25zdCBvcmRlciA9IGF3YWl0IGNoZWNrb3V0KHtcclxuXHRcdFx0dmFyaWFibGVzOiB7XHJcblx0XHRcdFx0dG9rZW46IHBheW1lbnRNZXRob2QuaWQsXHJcblx0XHRcdH0sXHJcblx0XHR9KTtcclxuXHJcblx0XHRjb25zb2xlLmxvZyhgRmluaXNoZWQgd2l0aCB0aGUgb3JkZXIhIEhlcmUgaXMgdGhlIG9yZGVyIGlkOiAke29yZGVyfSBgKTtcclxuXHJcblx0XHQvLyA2LiBDaGFuZ2UgdGhlIHBhZ2UgdG8gdmlldyB0aGUgb3JkZXJcclxuXHRcdC8vIDcuIENsb3NlIHRoZSBjYXJ0XHJcblxyXG5cdFx0Ly8gOC4gdHVybiB0aGUgbG9hZGVyIG9mZlxyXG5cdFx0c2V0TG9hZGluZyhmYWxzZSk7XHJcblx0XHRuUHJvZ3Jlc3MuZG9uZSgpO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxDaGVja291dEZvcm1TdHlsZXMgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcblx0XHRcdHtlcnJvciAmJiA8cCBzdHlsZT17eyBmb250U2l6ZTogMTIgfX0+e2Vycm9yLm1lc3NhZ2V9PC9wPn1cclxuXHRcdFx0e0dyYXBoUUxFcnJvciAmJiA8cCBzdHlsZT17eyBmb250U2l6ZTogMTIgfX0+e0dyYXBoUUxFcnJvci5tZXNzYWdlfTwvcD59XHJcblx0XHRcdDxDYXJkRWxlbWVudCAvPlxyXG5cdFx0XHQ8U2lja0J1dHRvbj5DaGVjayBPdXQgTm93PC9TaWNrQnV0dG9uPlxyXG5cdFx0PC9DaGVja291dEZvcm1TdHlsZXM+XHJcblx0KTtcclxufVxyXG5cclxuZnVuY3Rpb24gQ2hlY2tvdXQoKSB7XHJcblx0cmV0dXJuIChcclxuXHRcdDxFbGVtZW50cyBzdHJpcGU9e3N0cmlwZUxpYn0+XHJcblx0XHRcdDxDaGVja291dEZvcm0gLz5cclxuXHRcdDwvRWxlbWVudHM+XHJcblx0KTtcclxufVxyXG5cclxuZXhwb3J0IHsgQ2hlY2tvdXQgfTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==