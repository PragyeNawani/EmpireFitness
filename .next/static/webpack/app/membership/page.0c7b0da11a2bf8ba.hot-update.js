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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"(app-pages-browser)/./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _actions_useractions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/actions/useractions */ \"(app-pages-browser)/./actions/useractions.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst page = ()=>{\n    _s();\n    const { data: session } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession)();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const [status, setStatus] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const fn = ()=>{\n        if (session) {\n            console.log(\"session Exists\");\n        } else {\n            console.log(\"session not there\");\n        }\n    };\n    const getdata = async ()=>{\n        let x = await (0,_actions_useractions__WEBPACK_IMPORTED_MODULE_3__.membershipstatus)(session.user.email);\n        setStatus(x);\n        console.log(x);\n        console.log(status);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        getdata();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n            className: \"h-[100vh] w-full gymbgu\",\n            children: [\n                (status === null || status === void 0 ? void 0 : status.length) == 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col items-center pb-10\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"mb-1 text-5xl font-medium text-gray-900 dark:text-white\",\n                            children: \"No Active Membership!!\"\n                        }, void 0, false, {\n                            fileName: \"E:\\\\Code Marketer\\\\Projects\\\\fitness-empire\\\\app\\\\membership\\\\page.js\",\n                            lineNumber: 40,\n                            columnNumber: 9\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Code Marketer\\\\Projects\\\\fitness-empire\\\\app\\\\membership\\\\page.js\",\n                        lineNumber: 39,\n                        columnNumber: 5\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"E:\\\\Code Marketer\\\\Projects\\\\fitness-empire\\\\app\\\\membership\\\\page.js\",\n                    lineNumber: 38,\n                    columnNumber: 25\n                }, undefined),\n                status === null || status === void 0 ? void 0 : status.map((v, i)=>{\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-col items-center pb-10\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    className: \"w-24 h-24 mb-3 rounded-full shadow-lg\",\n                                    src: \"/docs/images/people/profile-picture-3.jpg\",\n                                    alt: \"Bonnie image\"\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\Code Marketer\\\\Projects\\\\fitness-empire\\\\app\\\\membership\\\\page.js\",\n                                    lineNumber: 46,\n                                    columnNumber: 9\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                    className: \"mb-1 text-xl font-medium text-gray-900 dark:text-white\",\n                                    children: v.name\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\Code Marketer\\\\Projects\\\\fitness-empire\\\\app\\\\membership\\\\page.js\",\n                                    lineNumber: 47,\n                                    columnNumber: 9\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"text-sm text-gray-500 dark:text-gray-400\",\n                                    children: v.email\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\Code Marketer\\\\Projects\\\\fitness-empire\\\\app\\\\membership\\\\page.js\",\n                                    lineNumber: 48,\n                                    columnNumber: 9\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"E:\\\\Code Marketer\\\\Projects\\\\fitness-empire\\\\app\\\\membership\\\\page.js\",\n                            lineNumber: 45,\n                            columnNumber: 5\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Code Marketer\\\\Projects\\\\fitness-empire\\\\app\\\\membership\\\\page.js\",\n                        lineNumber: 44,\n                        columnNumber: 1\n                    }, undefined);\n                })\n            ]\n        }, void 0, true, {\n            fileName: \"E:\\\\Code Marketer\\\\Projects\\\\fitness-empire\\\\app\\\\membership\\\\page.js\",\n            lineNumber: 37,\n            columnNumber: 5\n        }, undefined)\n    }, void 0, false);\n};\n_s(page, \"AylIjYBqhbaIID5gQKME+/45p9w=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession,\n        next_navigation__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (page);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9tZW1iZXJzaGlwL3BhZ2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUN5QjtBQUNtQjtBQUNYO0FBQ3VCO0FBQ2I7QUFDWDtBQUVoQyxNQUFNTSxPQUFPOztJQUNULE1BQU0sRUFBQ0MsTUFBTUMsT0FBTyxFQUFDLEdBQUdQLDJEQUFVQTtJQUVsQyxNQUFNUSxTQUFTTCwwREFBU0E7SUFDeEIsTUFBTSxDQUFDTSxRQUFRQyxVQUFVLEdBQUdOLCtDQUFRQSxDQUFDLEVBQUU7SUFDdkMsTUFBTU8sS0FBSztRQUVQLElBQUlKLFNBQVM7WUFDVEssUUFBUUMsR0FBRyxDQUFDO1FBQ2hCLE9BQ0s7WUFDREQsUUFBUUMsR0FBRyxDQUFDO1FBQ2hCO0lBQ0g7SUFDRCxNQUFNQyxVQUFVO1FBQ1IsSUFBSUMsSUFBSSxNQUFNYixzRUFBZ0JBLENBQUNLLFFBQVFTLElBQUksQ0FBQ0MsS0FBSztRQUNqRFAsVUFBVUs7UUFDVkgsUUFBUUMsR0FBRyxDQUFDRTtRQUNaSCxRQUFRQyxHQUFHLENBQUNKO0lBQ2hCO0lBRUFSLGdEQUFTQSxDQUFDO1FBQ1JhO0lBQ0MsR0FBRyxFQUFFO0lBR2QscUJBQ0U7a0JBQ0EsNEVBQUNJO1lBQVFDLFdBQVU7O2dCQUN0QlYsQ0FBQUEsbUJBQUFBLDZCQUFBQSxPQUFRVyxNQUFNLEtBQUksbUJBQUssOERBQUNDO29CQUFJRixXQUFVOzhCQUNuQyw0RUFBQ0U7d0JBQUlGLFdBQVU7a0NBQ1gsNEVBQUNHOzRCQUFHSCxXQUFVO3NDQUEwRDs7Ozs7Ozs7Ozs7Ozs7OztnQkFHL0VWLG1CQUFBQSw2QkFBQUEsT0FBUWMsR0FBRyxDQUFDLENBQUNDLEdBQUVDO2tDQUNoQiw4REFBQ0o7d0JBQUlGLFdBQVU7a0NBQ1gsNEVBQUNFOzRCQUFJRixXQUFVOzs4Q0FDWCw4REFBQ087b0NBQUlQLFdBQVU7b0NBQXdDUSxLQUFJO29DQUE0Q0MsS0FBSTs7Ozs7OzhDQUMzRyw4REFBQ0M7b0NBQUdWLFdBQVU7OENBQTBESyxFQUFFTSxJQUFJOzs7Ozs7OENBQzlFLDhEQUFDQztvQ0FBS1osV0FBVTs4Q0FBNENLLEVBQUVQLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dCQUkzRTs7Ozs7Ozs7QUFLQTtHQWhETVo7O1FBQ3NCTCx1REFBVUE7UUFFbkJHLHNEQUFTQTs7O0FBK0M1QiwrREFBZUUsSUFBSUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvbWVtYmVyc2hpcC9wYWdlLmpzP2NkNTUiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VTZXNzaW9uIH0gZnJvbSAnbmV4dC1hdXRoL3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgbWVtYmVyc2hpcHN0YXR1cyB9IGZyb20gJ0AvYWN0aW9ucy91c2VyYWN0aW9ucydcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9uYXZpZ2F0aW9uJ1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgcGFnZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IHtkYXRhOiBzZXNzaW9ufSA9IHVzZVNlc3Npb24oKVxyXG4gICAgXHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gICAgY29uc3QgW3N0YXR1cywgc2V0U3RhdHVzXSA9IHVzZVN0YXRlKFtdKVxyXG4gICAgY29uc3QgZm4gPSAoKSA9PiB7IFxyXG5cclxuICAgICAgICBpZiAoc2Vzc2lvbikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInNlc3Npb24gRXhpc3RzXCIpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInNlc3Npb24gbm90IHRoZXJlXCIpXHJcbiAgICAgICAgfVxyXG4gICAgIH1cclxuICAgIGNvbnN0IGdldGRhdGEgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCB4ID0gYXdhaXQgbWVtYmVyc2hpcHN0YXR1cyhzZXNzaW9uLnVzZXIuZW1haWwpXHJcbiAgICAgICAgICAgIHNldFN0YXR1cyh4KVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh4KVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhzdGF0dXMpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgICBnZXRkYXRhKClcclxuICAgICAgICAgICB9LCBbXSlcclxuXHJcbiAgICAgIFxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPSdoLVsxMDB2aF0gdy1mdWxsIGd5bWJndSc+XHJcbntzdGF0dXM/Lmxlbmd0aCA9PSAwICYmIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIG1heC13LXNtIGJnLXdoaXRlIGJvcmRlciBib3JkZXItZ3JheS0yMDAgcm91bmRlZC1sZyBzaGFkb3cgZGFyazpiZy1ncmF5LTgwMCBkYXJrOmJvcmRlci1ncmF5LTcwMFwiPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBwYi0xMFwiPlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJtYi0xIHRleHQtNXhsIGZvbnQtbWVkaXVtIHRleHQtZ3JheS05MDAgZGFyazp0ZXh0LXdoaXRlXCI+Tm8gQWN0aXZlIE1lbWJlcnNoaXAhITwvaDE+XHJcbiAgICA8L2Rpdj5cclxuPC9kaXY+IH1cclxue3N0YXR1cz8ubWFwKCh2LGkpPT57XHJcbjxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIG1heC13LXNtIGJnLXdoaXRlIGJvcmRlciBib3JkZXItZ3JheS0yMDAgcm91bmRlZC1sZyBzaGFkb3cgZGFyazpiZy1ncmF5LTgwMCBkYXJrOmJvcmRlci1ncmF5LTcwMFwiPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBwYi0xMFwiPlxyXG4gICAgICAgIDxpbWcgY2xhc3NOYW1lPVwidy0yNCBoLTI0IG1iLTMgcm91bmRlZC1mdWxsIHNoYWRvdy1sZ1wiIHNyYz1cIi9kb2NzL2ltYWdlcy9wZW9wbGUvcHJvZmlsZS1waWN0dXJlLTMuanBnXCIgYWx0PVwiQm9ubmllIGltYWdlXCIvPlxyXG4gICAgICAgIDxoNSBjbGFzc05hbWU9XCJtYi0xIHRleHQteGwgZm9udC1tZWRpdW0gdGV4dC1ncmF5LTkwMCBkYXJrOnRleHQtd2hpdGVcIj57di5uYW1lfTwvaDU+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktNTAwIGRhcms6dGV4dC1ncmF5LTQwMFwiPnt2LmVtYWlsfTwvc3Bhbj5cclxuICAgICAgICBcclxuICAgIDwvZGl2PlxyXG48L2Rpdj5cclxufSl9XHJcblxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBwYWdlXHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVNlc3Npb24iLCJ1c2VFZmZlY3QiLCJtZW1iZXJzaGlwc3RhdHVzIiwidXNlUm91dGVyIiwidXNlU3RhdGUiLCJwYWdlIiwiZGF0YSIsInNlc3Npb24iLCJyb3V0ZXIiLCJzdGF0dXMiLCJzZXRTdGF0dXMiLCJmbiIsImNvbnNvbGUiLCJsb2ciLCJnZXRkYXRhIiwieCIsInVzZXIiLCJlbWFpbCIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJsZW5ndGgiLCJkaXYiLCJoMSIsIm1hcCIsInYiLCJpIiwiaW1nIiwic3JjIiwiYWx0IiwiaDUiLCJuYW1lIiwic3BhbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/membership/page.js\n"));

/***/ })

});