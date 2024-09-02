"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/auth/[...nextauth]/route";
exports.ids = ["app/api/auth/[...nextauth]/route"];
exports.modules = {

/***/ "mongoose?ada6":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "../../client/components/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.js&appDir=E%3A%5CCode%20Marketer%5CProjects%5Cfitness-empire%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=E%3A%5CCode%20Marketer%5CProjects%5Cfitness-empire&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.js&appDir=E%3A%5CCode%20Marketer%5CProjects%5Cfitness-empire%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=E%3A%5CCode%20Marketer%5CProjects%5Cfitness-empire&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var E_Code_Marketer_Projects_fitness_empire_app_api_auth_nextauth_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/auth/[...nextauth]/route.js */ \"(rsc)/./app/api/auth/[...nextauth]/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/auth/[...nextauth]/route\",\n        pathname: \"/api/auth/[...nextauth]\",\n        filename: \"route\",\n        bundlePath: \"app/api/auth/[...nextauth]/route\"\n    },\n    resolvedPagePath: \"E:\\\\Code Marketer\\\\Projects\\\\fitness-empire\\\\app\\\\api\\\\auth\\\\[...nextauth]\\\\route.js\",\n    nextConfigOutput,\n    userland: E_Code_Marketer_Projects_fitness_empire_app_api_auth_nextauth_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/auth/[...nextauth]/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZhdXRoJTJGJTVCLi4ubmV4dGF1dGglNUQlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlLmpzJmFwcERpcj1FJTNBJTVDQ29kZSUyME1hcmtldGVyJTVDUHJvamVjdHMlNUNmaXRuZXNzLWVtcGlyZSU1Q2FwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9RSUzQSU1Q0NvZGUlMjBNYXJrZXRlciU1Q1Byb2plY3RzJTVDZml0bmVzcy1lbXBpcmUmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNjO0FBQ29DO0FBQ2pIO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnSEFBbUI7QUFDM0M7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsaUVBQWlFO0FBQ3pFO0FBQ0E7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDdUg7O0FBRXZIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZml0bmVzcy1lbXBpcmUvP2UxMGQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiRTpcXFxcQ29kZSBNYXJrZXRlclxcXFxQcm9qZWN0c1xcXFxmaXRuZXNzLWVtcGlyZVxcXFxhcHBcXFxcYXBpXFxcXGF1dGhcXFxcWy4uLm5leHRhdXRoXVxcXFxyb3V0ZS5qc1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJFOlxcXFxDb2RlIE1hcmtldGVyXFxcXFByb2plY3RzXFxcXGZpdG5lc3MtZW1waXJlXFxcXGFwcFxcXFxhcGlcXFxcYXV0aFxcXFxbLi4ubmV4dGF1dGhdXFxcXHJvdXRlLmpzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuY29uc3Qgb3JpZ2luYWxQYXRobmFtZSA9IFwiL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGVcIjtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgc2VydmVySG9va3MsXG4gICAgICAgIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgb3JpZ2luYWxQYXRobmFtZSwgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.js&appDir=E%3A%5CCode%20Marketer%5CProjects%5Cfitness-empire%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=E%3A%5CCode%20Marketer%5CProjects%5Cfitness-empire&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/auth/[...nextauth]/route.js":
/*!*********************************************!*\
  !*** ./app/api/auth/[...nextauth]/route.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ authOptions),\n/* harmony export */   POST: () => (/* binding */ authOptions),\n/* harmony export */   authOptions: () => (/* binding */ authOptions)\n/* harmony export */ });\n/* harmony import */ var private_next_rsc_server_reference__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! private-next-rsc-server-reference */ \"(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js\");\n/* harmony import */ var private_next_rsc_action_encryption__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! private-next-rsc-action-encryption */ \"(rsc)/./node_modules/next/dist/server/app-render/encryption.js\");\n/* harmony import */ var private_next_rsc_action_encryption__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(private_next_rsc_action_encryption__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _db_connectDB__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/db/connectDB */ \"(rsc)/./db/connectDB.js\");\n/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/models/user */ \"(rsc)/./models/user.js\");\n/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next-auth/providers/github */ \"(rsc)/./node_modules/next-auth/providers/github.js\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next-auth/providers/google */ \"(rsc)/./node_modules/next-auth/providers/google.js\");\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var private_next_rsc_action_validate__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! private-next-rsc-action-validate */ \"(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js\");\n/* __next_internal_action_entry_do_not_use__ {\"013c82ae0779478fc37f4ac2d6ee180f5e80c34b\":\"GET\",\"4e19af6fc3edc3ca6bad569e1360fec52f2c1ddd\":\"POST\",\"4fc72c67b62e0a61f45db205a9a6559439e7a8eb\":\"authOptions\"} */ \n\n\n\n\n\n\n\n\nconst authOptions = next_auth__WEBPACK_IMPORTED_MODULE_2___default()({\n    // Configure one or more authentication providers\n    providers: [\n        (0,next_auth_providers_google__WEBPACK_IMPORTED_MODULE_6__[\"default\"])({\n            clientId: process.env.GOOGLE_CLIENT_ID,\n            clientSecret: process.env.GOOGLE_CLIENT_SECRET\n        })\n    ],\n    callbacks: {\n        async signIn ({ user, account, profile, email, credentials }) {\n            if (account.provider == \"google\") {\n                await (0,_db_connectDB__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n                const currentuser = await _models_user__WEBPACK_IMPORTED_MODULE_4__[\"default\"].findOne({\n                    email: email\n                });\n                if (!currentuser) {\n                    const newUser = new _models_user__WEBPACK_IMPORTED_MODULE_4__[\"default\"]({\n                        email: user.email\n                    });\n                    await newUser.save();\n                }\n                return true;\n            }\n        }\n    },\n    async signOut () {}\n});\n\n\n(0,private_next_rsc_action_validate__WEBPACK_IMPORTED_MODULE_8__.ensureServerEntryExports)([\n    authOptions,\n    authOptions,\n    authOptions\n]);\n(0,private_next_rsc_server_reference__WEBPACK_IMPORTED_MODULE_0__.registerServerReference)(\"4fc72c67b62e0a61f45db205a9a6559439e7a8eb\", authOptions);\n(0,private_next_rsc_server_reference__WEBPACK_IMPORTED_MODULE_0__.registerServerReference)(\"013c82ae0779478fc37f4ac2d6ee180f5e80c34b\", authOptions);\n(0,private_next_rsc_server_reference__WEBPACK_IMPORTED_MODULE_0__.registerServerReference)(\"4e19af6fc3edc3ca6bad569e1360fec52f2c1ddd\", authOptions);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ2dDO0FBQ007QUFDTDtBQUNzQjtBQUNDO0FBQ3ZCO0FBQ1U7QUFDcEMsTUFBTU8sY0FBY1AsZ0RBQVFBLENBQUM7SUFDNUIsaURBQWlEO0lBQ2pEUSxXQUFXO1FBQ1BKLHNFQUFjQSxDQUFDO1lBQ1hLLFVBQVVDLFFBQVFDLEdBQUcsQ0FBQ0MsZ0JBQWdCO1lBQ3RDQyxjQUFjSCxRQUFRQyxHQUFHLENBQUNHLG9CQUFvQjtRQUNoRDtLQUNMO0lBQ0RDLFdBQVc7UUFDUCxNQUFNQyxRQUFPLEVBQUNYLElBQUksRUFBRVksT0FBTyxFQUFFQyxPQUFPLEVBQUVDLEtBQUssRUFBRUMsV0FBVyxFQUFDO1lBQ3JELElBQUlILFFBQVFJLFFBQVEsSUFBSSxVQUFTO2dCQUM3QixNQUFNcEIseURBQVNBO2dCQUNmLE1BQU1xQixjQUFjLE1BQU1wQixvREFBSUEsQ0FBQ3FCLE9BQU8sQ0FBQztvQkFBQ0osT0FBT0E7Z0JBQUs7Z0JBQ3BELElBQUksQ0FBQ0csYUFBWTtvQkFDYixNQUFNRSxVQUFVLElBQUl0QixvREFBSUEsQ0FBQzt3QkFDckJpQixPQUFPZCxLQUFLYyxLQUFLO29CQUNyQjtvQkFDSixNQUFNSyxRQUFRQyxJQUFJO2dCQUNsQjtnQkFDQSxPQUFPO1lBQ1g7UUFDSjtJQUNKO0lBQ0ksTUFBTUMsWUFFVjtBQUVSLEdBQUU7QUFDOEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9maXRuZXNzLWVtcGlyZS8uL2FwcC9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlLmpzP2RhMWEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc2VydmVyXCJcclxuaW1wb3J0IE5leHRBdXRoIGZyb20gXCJuZXh0LWF1dGhcIlxyXG5pbXBvcnQgY29ubmVjdERCIGZyb20gXCJAL2RiL2Nvbm5lY3REQlwiXHJcbmltcG9ydCBVc2VyIGZyb20gXCJAL21vZGVscy91c2VyXCI7XHJcbmltcG9ydCBHaXRodWJQcm92aWRlciBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9naXRodWJcIlxyXG5pbXBvcnQgR29vZ2xlUHJvdmlkZXIgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvZ29vZ2xlXCI7XHJcbmltcG9ydCB1c2VyIGZyb20gXCJAL21vZGVscy91c2VyXCI7XHJcbmltcG9ydCB7IE5leHRSZXNwb25zZSB9IGZyb20gXCJuZXh0L3NlcnZlclwiO1xyXG5leHBvcnQgY29uc3QgYXV0aE9wdGlvbnMgPSBOZXh0QXV0aCh7XHJcbiAgICAgICAgLy8gQ29uZmlndXJlIG9uZSBvciBtb3JlIGF1dGhlbnRpY2F0aW9uIHByb3ZpZGVyc1xyXG4gICAgICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgICAgICBHb29nbGVQcm92aWRlcih7XHJcbiAgICAgICAgICAgICAgICBjbGllbnRJZDogcHJvY2Vzcy5lbnYuR09PR0xFX0NMSUVOVF9JRCxcclxuICAgICAgICAgICAgICAgIGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuR09PR0xFX0NMSUVOVF9TRUNSRVRcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgY2FsbGJhY2tzOiB7XHJcbiAgICAgICAgICAgIGFzeW5jIHNpZ25Jbih7dXNlciwgYWNjb3VudCwgcHJvZmlsZSwgZW1haWwsIGNyZWRlbnRpYWxzfSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGFjY291bnQucHJvdmlkZXIgPT0gXCJnb29nbGVcIil7XHJcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgY29ubmVjdERCKClcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50dXNlciA9IGF3YWl0IFVzZXIuZmluZE9uZSh7ZW1haWw6IGVtYWlsfSlcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWN1cnJlbnR1c2VyKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3VXNlciA9IG5ldyBVc2VyKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVtYWlsOiB1c2VyLmVtYWlsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IG5ld1VzZXIuc2F2ZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgICAgICBhc3luYyBzaWduT3V0KCl7XHJcblxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgICAgIC8vIC4uLmFkZCBtb3JlIHByb3ZpZGVycyBoZXJlXHJcbn0pIFxyXG5leHBvcnQge2F1dGhPcHRpb25zIGFzIEdFVCwgYXV0aE9wdGlvbnMgYXMgUE9TVH0iXSwibmFtZXMiOlsiTmV4dEF1dGgiLCJjb25uZWN0REIiLCJVc2VyIiwiR2l0aHViUHJvdmlkZXIiLCJHb29nbGVQcm92aWRlciIsInVzZXIiLCJOZXh0UmVzcG9uc2UiLCJhdXRoT3B0aW9ucyIsInByb3ZpZGVycyIsImNsaWVudElkIiwicHJvY2VzcyIsImVudiIsIkdPT0dMRV9DTElFTlRfSUQiLCJjbGllbnRTZWNyZXQiLCJHT09HTEVfQ0xJRU5UX1NFQ1JFVCIsImNhbGxiYWNrcyIsInNpZ25JbiIsImFjY291bnQiLCJwcm9maWxlIiwiZW1haWwiLCJjcmVkZW50aWFscyIsInByb3ZpZGVyIiwiY3VycmVudHVzZXIiLCJmaW5kT25lIiwibmV3VXNlciIsInNhdmUiLCJzaWduT3V0IiwiR0VUIiwiUE9TVCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/auth/[...nextauth]/route.js\n");

/***/ }),

/***/ "(rsc)/./db/connectDB.js":
/*!*************************!*\
  !*** ./db/connectDB.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose?ada6\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst connectDB = async ()=>{\n    try {\n        const conn = await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(`mongodb://localhost:27017/empirefitness`, {\n            useNewUrlParser: true\n        });\n        console.log(`MongoDB Connected: ${conn.connection.host}`);\n    } catch (error) {\n        console.error(error.message);\n        process.exit(1);\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connectDB);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9kYi9jb25uZWN0REIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQStCO0FBRS9CLE1BQU1DLFlBQVk7SUFDZCxJQUFHO1FBQ0MsTUFBTUMsT0FBTyxNQUFNRix1REFBZ0IsQ0FBQyxDQUFDLHVDQUF1QyxDQUFDLEVBQUU7WUFBQ0ksaUJBQWlCO1FBQUs7UUFDdEdDLFFBQVFDLEdBQUcsQ0FBQyxDQUFDLG1CQUFtQixFQUFFSixLQUFLSyxVQUFVLENBQUNDLElBQUksQ0FBQyxDQUFDO0lBQzVELEVBQ0EsT0FBT0MsT0FBTTtRQUNUSixRQUFRSSxLQUFLLENBQUNBLE1BQU1DLE9BQU87UUFDM0JDLFFBQVFDLElBQUksQ0FBQztJQUNqQjtBQUNKO0FBQ0EsaUVBQWVYLFNBQVNBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9maXRuZXNzLWVtcGlyZS8uL2RiL2Nvbm5lY3REQi5qcz85M2U0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIlxyXG5cclxuY29uc3QgY29ubmVjdERCID0gYXN5bmMgKCk9PntcclxuICAgIHRyeXtcclxuICAgICAgICBjb25zdCBjb25uID0gYXdhaXQgbW9uZ29vc2UuY29ubmVjdChgbW9uZ29kYjovL2xvY2FsaG9zdDoyNzAxNy9lbXBpcmVmaXRuZXNzYCwge3VzZU5ld1VybFBhcnNlcjogdHJ1ZSx9KVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGBNb25nb0RCIENvbm5lY3RlZDogJHtjb25uLmNvbm5lY3Rpb24uaG9zdH1gKVxyXG4gICAgfSBcclxuICAgIGNhdGNoIChlcnJvcil7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvci5tZXNzYWdlKVxyXG4gICAgICAgIHByb2Nlc3MuZXhpdCgxKVxyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3REQiJdLCJuYW1lcyI6WyJtb25nb29zZSIsImNvbm5lY3REQiIsImNvbm4iLCJjb25uZWN0IiwidXNlTmV3VXJsUGFyc2VyIiwiY29uc29sZSIsImxvZyIsImNvbm5lY3Rpb24iLCJob3N0IiwiZXJyb3IiLCJtZXNzYWdlIiwicHJvY2VzcyIsImV4aXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./db/connectDB.js\n");

/***/ }),

/***/ "(rsc)/./models/user.js":
/*!************************!*\
  !*** ./models/user.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose?ada6\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst { Schema, model } = (mongoose__WEBPACK_IMPORTED_MODULE_0___default());\nconst UserSchema = new Schema({\n    name: {\n        type: String\n    },\n    username: {\n        type: String\n    },\n    gender: {\n        type: String\n    },\n    age: {\n        type: String\n    },\n    email: {\n        type: String,\n        required: true\n    },\n    createdAt: {\n        type: Date,\n        default: Date.now\n    },\n    updatedAt: {\n        type: Date,\n        default: Date.now\n    },\n    razorpayid: {\n        type: String\n    },\n    razorpaysecret: {\n        type: String\n    }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).User || model(\"User\", UserSchema));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9tb2RlbHMvdXNlci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0M7QUFDaEMsTUFBTSxFQUFFQyxNQUFNLEVBQUVDLEtBQUssRUFBRSxHQUFHRixpREFBUUE7QUFFbEMsTUFBTUcsYUFBYSxJQUFJRixPQUFPO0lBQzFCRyxNQUFNO1FBQUNDLE1BQU1DO0lBQU07SUFDbkJDLFVBQVU7UUFBQ0YsTUFBTUM7SUFBTTtJQUN2QkUsUUFBUTtRQUFDSCxNQUFNQztJQUFNO0lBQ3JCRyxLQUFLO1FBQUNKLE1BQU1DO0lBQU07SUFDbEJJLE9BQU87UUFBQ0wsTUFBTUM7UUFBUUssVUFBVTtJQUFJO0lBQ3BDQyxXQUFXO1FBQUNQLE1BQU1RO1FBQU1DLFNBQVNELEtBQUtFLEdBQUc7SUFBQTtJQUN6Q0MsV0FBVztRQUFDWCxNQUFNUTtRQUFNQyxTQUFTRCxLQUFLRSxHQUFHO0lBQUE7SUFDekNFLFlBQVk7UUFBQ1osTUFBTUM7SUFBTTtJQUN6QlksZ0JBQWdCO1FBQUNiLE1BQU1DO0lBQU07QUFDakM7QUFFQSxpRUFBZ0JOLHdEQUFlLENBQUNvQixJQUFJLElBQUlsQixNQUFNLFFBQVFDLFdBQVdBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9maXRuZXNzLWVtcGlyZS8uL21vZGVscy91c2VyLmpzPzY1OTQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xyXG5jb25zdCB7IFNjaGVtYSwgbW9kZWwgfSA9IG1vbmdvb3NlO1xyXG5cclxuY29uc3QgVXNlclNjaGVtYSA9IG5ldyBTY2hlbWEoe1xyXG4gICAgbmFtZToge3R5cGU6IFN0cmluZ30sXHJcbiAgICB1c2VybmFtZToge3R5cGU6IFN0cmluZ30sXHJcbiAgICBnZW5kZXI6IHt0eXBlOiBTdHJpbmd9LFxyXG4gICAgYWdlOiB7dHlwZTogU3RyaW5nfSxcclxuICAgIGVtYWlsOiB7dHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZX0sXHJcbiAgICBjcmVhdGVkQXQ6IHt0eXBlOiBEYXRlLCBkZWZhdWx0OiBEYXRlLm5vd30sXHJcbiAgICB1cGRhdGVkQXQ6IHt0eXBlOiBEYXRlLCBkZWZhdWx0OiBEYXRlLm5vd30sXHJcbiAgICByYXpvcnBheWlkOiB7dHlwZTogU3RyaW5nfSxcclxuICAgIHJhem9ycGF5c2VjcmV0OiB7dHlwZTogU3RyaW5nfSxcclxufSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0ICBtb25nb29zZS5tb2RlbHMuVXNlciB8fCBtb2RlbChcIlVzZXJcIiwgVXNlclNjaGVtYSkiXSwibmFtZXMiOlsibW9uZ29vc2UiLCJTY2hlbWEiLCJtb2RlbCIsIlVzZXJTY2hlbWEiLCJuYW1lIiwidHlwZSIsIlN0cmluZyIsInVzZXJuYW1lIiwiZ2VuZGVyIiwiYWdlIiwiZW1haWwiLCJyZXF1aXJlZCIsImNyZWF0ZWRBdCIsIkRhdGUiLCJkZWZhdWx0Iiwibm93IiwidXBkYXRlZEF0IiwicmF6b3JwYXlpZCIsInJhem9ycGF5c2VjcmV0IiwibW9kZWxzIiwiVXNlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./models/user.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/@babel","vendor-chunks/jose","vendor-chunks/openid-client","vendor-chunks/uuid","vendor-chunks/oauth","vendor-chunks/@panva","vendor-chunks/yallist","vendor-chunks/preact-render-to-string","vendor-chunks/oidc-token-hash","vendor-chunks/preact","vendor-chunks/cookie"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.js&appDir=E%3A%5CCode%20Marketer%5CProjects%5Cfitness-empire%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=E%3A%5CCode%20Marketer%5CProjects%5Cfitness-empire&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();