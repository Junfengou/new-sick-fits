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
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./User */ "./components/User.js");






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

  var _useMutation = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_13__["useMutation"])(CREATE_ORDER_MUTATION, {
    refetchQueries: [{
      query: _User__WEBPACK_IMPORTED_MODULE_16__["CURRENT_USER_QUERY"]
    }]
  }),
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
                pathname: "/order/[id]",
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
      lineNumber: 107,
      columnNumber: 14
    }, this), GraphQLError && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
      style: {
        fontSize: 12
      },
      children: GraphQLError.message
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 21
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_7__["CardElement"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_styles_SickButton__WEBPACK_IMPORTED_MODULE_10__["default"], {
      children: "Check Out Now"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 4
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 106,
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
      lineNumber: 118,
      columnNumber: 4
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 117,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DaGVja291dC5qcyJdLCJuYW1lcyI6WyJDUkVBVEVfT1JERVJfTVVUQVRJT04iLCJncWwiLCJDaGVja291dEZvcm1TdHlsZXMiLCJzdHlsZWQiLCJmb3JtIiwic3RyaXBlTGliIiwibG9hZFN0cmlwZSIsInByb2Nlc3MiLCJDaGVja291dEZvcm0iLCJ1c2VTdGF0ZSIsImVycm9yIiwic2V0RXJyb3IiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInN0cmlwZSIsInVzZVN0cmlwZSIsImVsZW1lbnRzIiwidXNlRWxlbWVudHMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VDYXJ0IiwiY2xvc2VDYXJ0IiwidXNlTXV0YXRpb24iLCJyZWZldGNoUXVlcmllcyIsInF1ZXJ5IiwiQ1VSUkVOVF9VU0VSX1FVRVJZIiwiY2hlY2tvdXQiLCJHcmFwaFFMRXJyb3IiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwiblByb2dyZXNzIiwic3RhcnQiLCJjcmVhdGVQYXltZW50TWV0aG9kIiwidHlwZSIsImNhcmQiLCJnZXRFbGVtZW50IiwiQ2FyZEVsZW1lbnQiLCJwYXltZW50TWV0aG9kIiwiZG9uZSIsInZhcmlhYmxlcyIsInRva2VuIiwiaWQiLCJvcmRlciIsInB1c2giLCJwYXRobmFtZSIsImRhdGEiLCJmb250U2l6ZSIsIm1lc3NhZ2UiLCJDaGVja291dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLHFCQUFxQixHQUFHQyxtREFBSCxtQkFBM0I7QUFjQSxJQUFNQyxrQkFBa0IsR0FBR0MseURBQU0sQ0FBQ0MsSUFBVjtBQUFBO0FBQUE7QUFBQSw4SUFBeEI7S0FB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WUFBWSxpQkFBSTtBQUFHLFdBQUssRUFBRTtBQUFFc0IsZ0JBQVEsRUFBRTtBQUFaLE9BQVY7QUFBQSxnQkFBNkJ0QixZQUFZLENBQUN1QjtBQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRmxCLGVBR0MscUVBQUMsbUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhELGVBSUMscUVBQUMsMkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERDtBQVFBOztHQXJFUTFDLFk7VUFHT08saUUsRUFDRUUsbUUsRUFDRkUsc0QsRUFDT0MsdUQsRUFFc0JFLDJEOzs7TUFScENkLFk7O0FBdUVULFNBQVMyQyxRQUFULEdBQW9CO0FBQ25CLHNCQUNDLHFFQUFDLGdFQUFEO0FBQVUsVUFBTSxFQUFFOUMsU0FBbEI7QUFBQSwyQkFDQyxxRUFBQyxZQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREQ7QUFLQTs7TUFOUThDLFE7QUFRVCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjY0Yzg5YWUxMDY3ODE3MjJlYWZjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgeyBsb2FkU3RyaXBlIH0gZnJvbSBcIkBzdHJpcGUvc3RyaXBlLWpzXCI7XHJcbmltcG9ydCB7XHJcblx0Q2FyZEVsZW1lbnQsXHJcblx0RWxlbWVudHMsXHJcblx0dXNlRWxlbWVudHMsXHJcblx0dXNlU3RyaXBlLFxyXG59IGZyb20gXCJAc3RyaXBlL3JlYWN0LXN0cmlwZS1qc1wiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgblByb2dyZXNzIGZyb20gXCJucHJvZ3Jlc3NcIjtcclxuaW1wb3J0IFNpY2tCdXR0b24gZnJvbSBcIi4vc3R5bGVzL1NpY2tCdXR0b25cIjtcclxuaW1wb3J0IGdxbCBmcm9tIFwiZ3JhcGhxbC10YWdcIjtcclxuaW1wb3J0IHsgR3JhcGhRTEVycm9yIH0gZnJvbSBcImdyYXBocWxcIjtcclxuaW1wb3J0IHsgdXNlTXV0YXRpb24gfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IHVzZUNhcnQgfSBmcm9tIFwiLi4vbGliL0NhcnRTdGF0ZVwiO1xyXG5pbXBvcnQgeyBDVVJSRU5UX1VTRVJfUVVFUlkgfSBmcm9tIFwiLi9Vc2VyXCI7XHJcblxyXG5jb25zdCBDUkVBVEVfT1JERVJfTVVUQVRJT04gPSBncWxgXHJcblx0bXV0YXRpb24gQ1JFQVRFX09SREVSX01VVEFUSU9OKCR0b2tlbjogU3RyaW5nISkge1xyXG5cdFx0Y2hlY2tvdXQodG9rZW46ICR0b2tlbikge1xyXG5cdFx0XHRpZFxyXG5cdFx0XHRjaGFyZ2VcclxuXHRcdFx0dG90YWxcclxuXHRcdFx0aXRlbXMge1xyXG5cdFx0XHRcdGlkXHJcblx0XHRcdFx0bmFtZVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5gO1xyXG5cclxuY29uc3QgQ2hlY2tvdXRGb3JtU3R5bGVzID0gc3R5bGVkLmZvcm1gXHJcblx0Ym94LXNoYWRvdzogMCAxcHggMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMDQpO1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4wNik7XHJcblx0Ym9yZGVyLXJhZGl1czogNXB4O1xyXG5cdHBhZGRpbmc6IDFyZW07XHJcblx0ZGlzcGxheTogZ3JpZDtcclxuXHRncmlkLWdhcDogMXJlbTtcclxuYDtcclxuXHJcbmNvbnN0IHN0cmlwZUxpYiA9IGxvYWRTdHJpcGUocHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU1RSSVBFX0tFWSk7XHJcblxyXG5mdW5jdGlvbiBDaGVja291dEZvcm0oKSB7XHJcblx0Y29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZSgpO1xyXG5cdGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHRjb25zdCBzdHJpcGUgPSB1c2VTdHJpcGUoKTtcclxuXHRjb25zdCBlbGVtZW50cyA9IHVzZUVsZW1lbnRzKCk7XHJcblx0Y29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblx0Y29uc3QgeyBjbG9zZUNhcnQgfSA9IHVzZUNhcnQoKTtcclxuXHJcblx0Y29uc3QgW2NoZWNrb3V0LCB7IGVycm9yOiBHcmFwaFFMRXJyb3IgfV0gPSB1c2VNdXRhdGlvbihcclxuXHRcdENSRUFURV9PUkRFUl9NVVRBVElPTixcclxuXHRcdHtcclxuXHRcdFx0cmVmZXRjaFF1ZXJpZXM6IFt7IHF1ZXJ5OiBDVVJSRU5UX1VTRVJfUVVFUlkgfV0sXHJcblx0XHR9XHJcblx0KTtcclxuXHJcblx0YXN5bmMgZnVuY3Rpb24gaGFuZGxlU3VibWl0KGUpIHtcclxuXHRcdC8vIDEuIFN0b3AgdGhlIGZvcm0gZnJvbSBzdWJtaXR0aW5nIGFuZCB0dXJuIHRoZSBsb2FkZXIgb25lXHJcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRzZXRMb2FkaW5nKHRydWUpO1xyXG5cdFx0Y29uc29sZS5sb2coXCJXZSBnb3R0YSBkbyBzb21lIHdvcmsuLlwiKTtcclxuXHJcblx0XHQvLyAyLiBTdGFydCB0aGUgcGFnZSB0cmFuc2l0aW9uXHJcblx0XHRuUHJvZ3Jlc3Muc3RhcnQoKTtcclxuXHJcblx0XHQvLyAzLiBDcmVhdGUgdGhlIHBheW1lbnQgbWV0aG9kIHZpYSBzdHJpcGUgKFRva2VuIGNvbWVzIGJhY2sgaGVyZSBpZiBzdWNjZXNzZnVsKVxyXG5cdFx0Y29uc3QgeyBlcnJvciwgcGF5bWVudE1ldGhvZCB9ID0gYXdhaXQgc3RyaXBlLmNyZWF0ZVBheW1lbnRNZXRob2Qoe1xyXG5cdFx0XHR0eXBlOiBcImNhcmRcIixcclxuXHRcdFx0Y2FyZDogZWxlbWVudHMuZ2V0RWxlbWVudChDYXJkRWxlbWVudCksXHJcblx0XHR9KTtcclxuXHRcdGNvbnNvbGUubG9nKHsgcGF5bWVudE1ldGhvZCB9KTtcclxuXHJcblx0XHQvLyA0LiBIYW5kbGUgYW55IGVycm9ycyBmcm9tIHN0cmlwZVxyXG5cdFx0aWYgKGVycm9yKSB7XHJcblx0XHRcdHNldEVycm9yKGVycm9yKTtcclxuXHRcdFx0blByb2dyZXNzLmRvbmUoKTtcclxuXHRcdFx0cmV0dXJuOyAvLyBzdG9wIHRoZSBjaGVjayBvdXQgZnJvbSBoYXBwZW5pbmdcclxuXHRcdH1cclxuXHJcblx0XHQvLyA1LiBTZW5kIHRoZSB0b2tlbiBmcm9tIHN0ZXAgMyB0byBvdXIga2V5c3RvbmUgc2VydmVyLCB2aWEgYSBjdXN0b20gbXV0YXRpb24hXHJcblx0XHRjb25zdCBvcmRlciA9IGF3YWl0IGNoZWNrb3V0KHtcclxuXHRcdFx0dmFyaWFibGVzOiB7XHJcblx0XHRcdFx0dG9rZW46IHBheW1lbnRNZXRob2QuaWQsXHJcblx0XHRcdH0sXHJcblx0XHR9KTtcclxuXHJcblx0XHRjb25zb2xlLmxvZyhgRmluaXNoZWQgd2l0aCB0aGUgb3JkZXIhIEhlcmUgaXMgdGhlIG9yZGVyIGlkOiAgYCk7XHJcblx0XHRjb25zb2xlLmxvZyh7IG9yZGVyIH0pO1xyXG5cclxuXHRcdC8vIDYuIENoYW5nZSB0aGUgcGFnZSB0byB2aWV3IHRoZSBvcmRlclxyXG5cdFx0cm91dGVyLnB1c2goe1xyXG5cdFx0XHRwYXRobmFtZTogXCIvb3JkZXIvW2lkXVwiLFxyXG5cdFx0XHRxdWVyeTogeyBpZDogb3JkZXIuZGF0YS5jaGVja291dC5pZCB9LFxyXG5cdFx0fSk7XHJcblx0XHQvLyA3LiBDbG9zZSB0aGUgY2FydFxyXG5cdFx0Y2xvc2VDYXJ0KCk7XHJcblxyXG5cdFx0Ly8gOC4gdHVybiB0aGUgbG9hZGVyIG9mZlxyXG5cdFx0c2V0TG9hZGluZyhmYWxzZSk7XHJcblx0XHRuUHJvZ3Jlc3MuZG9uZSgpO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxDaGVja291dEZvcm1TdHlsZXMgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcblx0XHRcdHtlcnJvciAmJiA8cCBzdHlsZT17eyBmb250U2l6ZTogMTIgfX0+e2Vycm9yLm1lc3NhZ2V9PC9wPn1cclxuXHRcdFx0e0dyYXBoUUxFcnJvciAmJiA8cCBzdHlsZT17eyBmb250U2l6ZTogMTIgfX0+e0dyYXBoUUxFcnJvci5tZXNzYWdlfTwvcD59XHJcblx0XHRcdDxDYXJkRWxlbWVudCAvPlxyXG5cdFx0XHQ8U2lja0J1dHRvbj5DaGVjayBPdXQgTm93PC9TaWNrQnV0dG9uPlxyXG5cdFx0PC9DaGVja291dEZvcm1TdHlsZXM+XHJcblx0KTtcclxufVxyXG5cclxuZnVuY3Rpb24gQ2hlY2tvdXQoKSB7XHJcblx0cmV0dXJuIChcclxuXHRcdDxFbGVtZW50cyBzdHJpcGU9e3N0cmlwZUxpYn0+XHJcblx0XHRcdDxDaGVja291dEZvcm0gLz5cclxuXHRcdDwvRWxlbWVudHM+XHJcblx0KTtcclxufVxyXG5cclxuZXhwb3J0IHsgQ2hlY2tvdXQgfTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==