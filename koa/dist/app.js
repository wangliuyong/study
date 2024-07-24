/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/api/a.js":
/*!**********************!*\
  !*** ./src/api/a.js ***!
  \**********************/
/***/ ((module) => {

eval("module.exports = function (ctx) {\n  ctx.body = {\n    message: \"success a-aaa\"\n  };\n};\n\n//# sourceURL=webpack://koa/./src/api/a.js?");

/***/ }),

/***/ "./src/api/b.js":
/*!**********************!*\
  !*** ./src/api/b.js ***!
  \**********************/
/***/ ((module) => {

eval("module.exports = function (ctx) {\n  ctx.body = {\n    message: \"success b\"\n  };\n};\n\n//# sourceURL=webpack://koa/./src/api/b.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const Koa = __webpack_require__(/*! koa */ \"koa\");\nconst koaBody = __webpack_require__(/*! koa-body */ \"koa-body\");\nconst cors = __webpack_require__(/*! @koa/cors */ \"@koa/cors\");\nconst helmet = __webpack_require__(/*! koa-helmet */ \"koa-helmet\");\nconst statics = __webpack_require__(/*! koa-static */ \"koa-static\");\nconst path = __webpack_require__(/*! path */ \"path\");\nconst router = __webpack_require__(/*! ./routes */ \"./src/routes/index.js\");\nconst app = new Koa();\n\n// 加入安全的请求头配置\napp.use(helmet());\napp.use(statics(path.join(__dirname, \"../public\")));\n\n// 注册路由\napp.use(router());\napp.use(cors({\n  origin: \"*\",\n  // 前端地址\n  credentials: true\n}));\napp.use(koaBody());\napp.listen(3000);\nconsole.log(\"server is running on port 3000\");\n\n//# sourceURL=webpack://koa/./src/index.js?");

/***/ }),

/***/ "./src/routes/a-route.js":
/*!*******************************!*\
  !*** ./src/routes/a-route.js ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Router = __webpack_require__(/*! koa-router */ \"koa-router\");\nconst a = __webpack_require__(/*! ../api/a */ \"./src/api/a.js\");\nconst router = new Router();\nrouter.prefix(\"/api\");\nrouter.get(\"/a\", a);\nmodule.exports = router;\n\n//# sourceURL=webpack://koa/./src/routes/a-route.js?");

/***/ }),

/***/ "./src/routes/b-route.js":
/*!*******************************!*\
  !*** ./src/routes/b-route.js ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Router = __webpack_require__(/*! koa-router */ \"koa-router\");\nconst b = __webpack_require__(/*! ../api/b */ \"./src/api/b.js\");\nconst router = new Router();\nrouter.prefix(\"/api\");\nrouter.get(\"/b\", b);\nmodule.exports = router;\n\n//# sourceURL=webpack://koa/./src/routes/b-route.js?");

/***/ }),

/***/ "./src/routes/index.js":
/*!*****************************!*\
  !*** ./src/routes/index.js ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const combineRouters = __webpack_require__(/*! koa-combine-routers */ \"koa-combine-routers\");\nconst aRoutes = __webpack_require__(/*! ./a-route */ \"./src/routes/a-route.js\");\nconst bRoutes = __webpack_require__(/*! ./b-route */ \"./src/routes/b-route.js\");\nmodule.exports = combineRouters(aRoutes, bRoutes);\n\n//# sourceURL=webpack://koa/./src/routes/index.js?");

/***/ }),

/***/ "@koa/cors":
/*!****************************!*\
  !*** external "@koa/cors" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("@koa/cors");

/***/ }),

/***/ "koa":
/*!**********************!*\
  !*** external "koa" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("koa");

/***/ }),

/***/ "koa-body":
/*!***************************!*\
  !*** external "koa-body" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("koa-body");

/***/ }),

/***/ "koa-combine-routers":
/*!**************************************!*\
  !*** external "koa-combine-routers" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = require("koa-combine-routers");

/***/ }),

/***/ "koa-helmet":
/*!*****************************!*\
  !*** external "koa-helmet" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("koa-helmet");

/***/ }),

/***/ "koa-router":
/*!*****************************!*\
  !*** external "koa-router" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("koa-router");

/***/ }),

/***/ "koa-static":
/*!*****************************!*\
  !*** external "koa-static" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("koa-static");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;