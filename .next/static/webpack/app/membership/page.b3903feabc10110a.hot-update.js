"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/membership/page",{

/***/ "(app-pages-browser)/./app/membership/page.js":
/*!********************************!*\
  !*** ./app/membership/page.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"(app-pages-browser)/./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _actions_useractions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/actions/useractions */ \"(app-pages-browser)/./actions/useractions.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst page = ()=>{\n    _s();\n    const { data: session } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession)();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const [status, setStatus] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    if (session) {\n        const getdata1 = async ()=>{\n            let x = await (0,_actions_useractions__WEBPACK_IMPORTED_MODULE_3__.membershipstatus)(session.user.email);\n            setStatus(x);\n            console.log(x);\n            console.log(status);\n        };\n    } else {\n        console.log(\"session not there\");\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        getdata();\n        fn();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n            className: \"h-[100vh] w-full gymbgu\",\n            children: [\n                (status === null || status === void 0 ? void 0 : status.length) == 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col items-center pb-10\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"mb-1 text-5xl font-medium text-gray-900 dark:text-white\",\n                            children: \"No Active Membership!!\"\n                        }, void 0, false, {\n                            fileName: \"E:\\\\Code Marketer\\\\Projects\\\\fitness-empire\\\\app\\\\membership\\\\page.js\",\n                            lineNumber: 38,\n                            columnNumber: 9\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Code Marketer\\\\Projects\\\\fitness-empire\\\\app\\\\membership\\\\page.js\",\n                        lineNumber: 37,\n                        columnNumber: 5\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"E:\\\\Code Marketer\\\\Projects\\\\fitness-empire\\\\app\\\\membership\\\\page.js\",\n                    lineNumber: 36,\n                    columnNumber: 25\n                }, undefined),\n                status === null || status === void 0 ? void 0 : status.map((v, i)=>{\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-col items-center pb-10\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    className: \"w-24 h-24 mb-3 rounded-full shadow-lg\",\n                                    src: \"/docs/images/people/profile-picture-3.jpg\",\n                                    alt: \"Bonnie image\"\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\Code Marketer\\\\Projects\\\\fitness-empire\\\\app\\\\membership\\\\page.js\",\n                                    lineNumber: 44,\n                                    columnNumber: 9\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                    className: \"mb-1 text-xl font-medium text-gray-900 dark:text-white\",\n                                    children: v.name\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\Code Marketer\\\\Projects\\\\fitness-empire\\\\app\\\\membership\\\\page.js\",\n                                    lineNumber: 45,\n                                    columnNumber: 9\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"text-sm text-gray-500 dark:text-gray-400\",\n                                    children: v.email\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\Code Marketer\\\\Projects\\\\fitness-empire\\\\app\\\\membership\\\\page.js\",\n                                    lineNumber: 46,\n                                    columnNumber: 9\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"E:\\\\Code Marketer\\\\Projects\\\\fitness-empire\\\\app\\\\membership\\\\page.js\",\n                            lineNumber: 43,\n                            columnNumber: 5\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Code Marketer\\\\Projects\\\\fitness-empire\\\\app\\\\membership\\\\page.js\",\n                        lineNumber: 42,\n                        columnNumber: 1\n                    }, undefined);\n                })\n            ]\n        }, void 0, true, {\n            fileName: \"E:\\\\Code Marketer\\\\Projects\\\\fitness-empire\\\\app\\\\membership\\\\page.js\",\n            lineNumber: 35,\n            columnNumber: 5\n        }, undefined)\n    }, void 0, false);\n};\n_s(page, \"AylIjYBqhbaIID5gQKME+/45p9w=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession,\n        next_navigation__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (page);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9tZW1iZXJzaGlwL3BhZ2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUN5QjtBQUNtQjtBQUNYO0FBQ3VCO0FBQ2I7QUFDWDtBQUVoQyxNQUFNTSxPQUFPOztJQUNULE1BQU0sRUFBQ0MsTUFBTUMsT0FBTyxFQUFDLEdBQUdQLDJEQUFVQTtJQUVsQyxNQUFNUSxTQUFTTCwwREFBU0E7SUFDeEIsTUFBTSxDQUFDTSxRQUFRQyxVQUFVLEdBQUdOLCtDQUFRQSxDQUFDLEVBQUU7SUFDdkMsSUFBSUcsU0FBUztRQUNMLE1BQU1JLFdBQVU7WUFDWixJQUFJQyxJQUFJLE1BQU1WLHNFQUFnQkEsQ0FBQ0ssUUFBUU0sSUFBSSxDQUFDQyxLQUFLO1lBQ2pESixVQUFVRTtZQUNWRyxRQUFRQyxHQUFHLENBQUNKO1lBQ1pHLFFBQVFDLEdBQUcsQ0FBQ1A7UUFDaEI7SUFDSixPQUNLO1FBQ0RNLFFBQVFDLEdBQUcsQ0FBQztJQUNoQjtJQUdBZixnREFBU0EsQ0FBQztRQUNSVTtRQUNBTTtJQUNDLEdBQUcsRUFBRTtJQUdkLHFCQUNFO2tCQUNBLDRFQUFDQztZQUFRQyxXQUFVOztnQkFDdEJWLENBQUFBLG1CQUFBQSw2QkFBQUEsT0FBUVcsTUFBTSxLQUFJLG1CQUFLLDhEQUFDQztvQkFBSUYsV0FBVTs4QkFDbkMsNEVBQUNFO3dCQUFJRixXQUFVO2tDQUNYLDRFQUFDRzs0QkFBR0gsV0FBVTtzQ0FBMEQ7Ozs7Ozs7Ozs7Ozs7Ozs7Z0JBRy9FVixtQkFBQUEsNkJBQUFBLE9BQVFjLEdBQUcsQ0FBQyxDQUFDQyxHQUFFQztrQ0FDaEIsOERBQUNKO3dCQUFJRixXQUFVO2tDQUNYLDRFQUFDRTs0QkFBSUYsV0FBVTs7OENBQ1gsOERBQUNPO29DQUFJUCxXQUFVO29DQUF3Q1EsS0FBSTtvQ0FBNENDLEtBQUk7Ozs7Ozs4Q0FDM0csOERBQUNDO29DQUFHVixXQUFVOzhDQUEwREssRUFBRU0sSUFBSTs7Ozs7OzhDQUM5RSw4REFBQ0M7b0NBQUtaLFdBQVU7OENBQTRDSyxFQUFFVixLQUFLOzs7Ozs7Ozs7Ozs7Ozs7OztnQkFJM0U7Ozs7Ozs7O0FBS0E7R0E5Q01UOztRQUNzQkwsdURBQVVBO1FBRW5CRyxzREFBU0E7OztBQTZDNUIsK0RBQWVFLElBQUlBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL21lbWJlcnNoaXAvcGFnZS5qcz9jZDU1Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlU2Vzc2lvbiB9IGZyb20gJ25leHQtYXV0aC9yZWFjdCdcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IG1lbWJlcnNoaXBzdGF0dXMgfSBmcm9tICdAL2FjdGlvbnMvdXNlcmFjdGlvbnMnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvbmF2aWdhdGlvbidcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuXHJcbmNvbnN0IHBhZ2UgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB7ZGF0YTogc2Vzc2lvbn0gPSB1c2VTZXNzaW9uKClcclxuICAgIFxyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICAgIGNvbnN0IFtzdGF0dXMsIHNldFN0YXR1c10gPSB1c2VTdGF0ZShbXSlcclxuICAgIGlmIChzZXNzaW9uKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGdldGRhdGEgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgeCA9IGF3YWl0IG1lbWJlcnNoaXBzdGF0dXMoc2Vzc2lvbi51c2VyLmVtYWlsKVxyXG4gICAgICAgICAgICAgICAgc2V0U3RhdHVzKHgpXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh4KVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coc3RhdHVzKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInNlc3Npb24gbm90IHRoZXJlXCIpXHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICAgIGdldGRhdGEoKVxyXG4gICAgICAgICAgZm4oKVxyXG4gICAgICAgICAgIH0sIFtdKVxyXG5cclxuICAgICAgXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9J2gtWzEwMHZoXSB3LWZ1bGwgZ3ltYmd1Jz5cclxue3N0YXR1cz8ubGVuZ3RoID09IDAgJiYgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbWF4LXctc20gYmctd2hpdGUgYm9yZGVyIGJvcmRlci1ncmF5LTIwMCByb3VuZGVkLWxnIHNoYWRvdyBkYXJrOmJnLWdyYXktODAwIGRhcms6Ym9yZGVyLWdyYXktNzAwXCI+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIHBiLTEwXCI+XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cIm1iLTEgdGV4dC01eGwgZm9udC1tZWRpdW0gdGV4dC1ncmF5LTkwMCBkYXJrOnRleHQtd2hpdGVcIj5ObyBBY3RpdmUgTWVtYmVyc2hpcCEhPC9oMT5cclxuICAgIDwvZGl2PlxyXG48L2Rpdj4gfVxyXG57c3RhdHVzPy5tYXAoKHYsaSk9PntcclxuPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbWF4LXctc20gYmctd2hpdGUgYm9yZGVyIGJvcmRlci1ncmF5LTIwMCByb3VuZGVkLWxnIHNoYWRvdyBkYXJrOmJnLWdyYXktODAwIGRhcms6Ym9yZGVyLWdyYXktNzAwXCI+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIHBiLTEwXCI+XHJcbiAgICAgICAgPGltZyBjbGFzc05hbWU9XCJ3LTI0IGgtMjQgbWItMyByb3VuZGVkLWZ1bGwgc2hhZG93LWxnXCIgc3JjPVwiL2RvY3MvaW1hZ2VzL3Blb3BsZS9wcm9maWxlLXBpY3R1cmUtMy5qcGdcIiBhbHQ9XCJCb25uaWUgaW1hZ2VcIi8+XHJcbiAgICAgICAgPGg1IGNsYXNzTmFtZT1cIm1iLTEgdGV4dC14bCBmb250LW1lZGl1bSB0ZXh0LWdyYXktOTAwIGRhcms6dGV4dC13aGl0ZVwiPnt2Lm5hbWV9PC9oNT5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZ3JheS01MDAgZGFyazp0ZXh0LWdyYXktNDAwXCI+e3YuZW1haWx9PC9zcGFuPlxyXG4gICAgICAgIFxyXG4gICAgPC9kaXY+XHJcbjwvZGl2PlxyXG59KX1cclxuXHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHBhZ2VcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU2Vzc2lvbiIsInVzZUVmZmVjdCIsIm1lbWJlcnNoaXBzdGF0dXMiLCJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZSIsInBhZ2UiLCJkYXRhIiwic2Vzc2lvbiIsInJvdXRlciIsInN0YXR1cyIsInNldFN0YXR1cyIsImdldGRhdGEiLCJ4IiwidXNlciIsImVtYWlsIiwiY29uc29sZSIsImxvZyIsImZuIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsImxlbmd0aCIsImRpdiIsImgxIiwibWFwIiwidiIsImkiLCJpbWciLCJzcmMiLCJhbHQiLCJoNSIsIm5hbWUiLCJzcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/membership/page.js\n"));

/***/ })

});