(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"app-component-wrapper\">\n  <div class=\"web-title\">Welcome to Soft UI</div>\n  <div class=\"neumorph-wrapper\">\n    <div class=\"output-section\">\n      <button class=\"demo-button-item flat-btn\"><p>flat</p></button>\n      <button class=\"demo-button-item concave-btn\"><p>concave</p></button>\n      <button class=\"demo-button-item convex-btn\"><p>convex</p></button>\n      <button class=\"demo-button-item pressed-btn\"><p>pressed</p></button>\n      <div class=\"light-source-section\">\n        <div class=\"light-source left-top light-on\">\n          <div class=\"svg-img-block\">\n            <div\n              class=\"svg-img\"\n              inlineSVG=\"../assets/images/flashlight.svg\"\n            ></div>\n          </div>\n        </div>\n        <div class=\"light-source right-top\">\n          <div class=\"svg-img-block\">\n            <div\n              class=\"svg-img\"\n              inlineSVG=\"../assets/images/flashlight.svg\"\n            ></div>\n          </div>\n        </div>\n        <div class=\"light-source left-bottom\">\n          <div class=\"svg-img-block\">\n            <div\n              class=\"svg-img\"\n              inlineSVG=\"../assets/images/flashlight.svg\"\n            ></div>\n          </div>\n        </div>\n        <div class=\"light-source right-bottom\">\n          <div class=\"svg-img-block\">\n            <div\n              class=\"svg-img\"\n              inlineSVG=\"../assets/images/flashlight.svg\"\n            ></div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"input-section\">\n      <div class=\"ui-controls-section\">\n        <div class=\"ui-control-item\">\n          <div class=\"form-group\">\n            <label>Pick a color:</label>\n            <input\n              class=\"color-picker\"\n              [(colorPicker)]=\"color\"\n              (colorPickerChange)=\"changeColor()\"\n              [style.background]=\"color\"\n            />\n          </div>\n          <div class=\"form-group\">\n            <label>Button Size:</label>\n            <input\n              class=\"form-control\"\n              type=\"number\"\n              [value]=\"buttonSize\"\n              #btnSize\n              min=\"100\"\n              max=\"215\"\n              (change)=\"changeSize(btnSize.value)\"\n            />\n          </div>\n          <div class=\"form-group\">\n            <label>Blue Size:</label>\n            <input\n              class=\"form-control\"\n              type=\"number\"\n              [value]=\"blurSize\"\n              #blrSize\n              min=\"0\"\n              max=\"100\"\n              (change)=\"changeBlueSize(blrSize.value)\"\n            />\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- <div class=\"main-wrapper\" *ngIf=\"isFeature\">\n  <div class=\"box-wrapper\">\n    Transform text: <textarea class=\"form-control\" rows=\"4\" cols=\"50\" #inputText></textarea>\n\n    <div class=\"btns\">\n      <button (click)=\"capitalize(inputText.value)\" class=\"action-button\">Capitalize</button>\n      <button (click)=\"clear(inputText)\" class=\"action-button\">Clear</button>\n    </div>\n\n    Result:\n\n    <textarea class=\"result-text\" *ngIf=\"convertedText\" #transformedText [value]=\"convertedText\">\n\n    </textarea>\n    <button (click)=\"copy()\">Copy</button>\n\n    <div class=\"tip-message\" *ngIf=\"showTip\">\n      Done !!!\n    </div>\n  </div>\n</div> -->\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".theme-wrapper {\n  --positionX: 15px;\n  --positionXOpposite: 15px;\n  --positionY: -15px;\n  --positionYOpposite: -15px;\n  --buttonSize: 100px;\n  --blurSize: 50px;\n  --globalColor: #ff9543;\n  --globalColorDark: #ff2311;\n  --globalColorLight: #FF9264;\n  --globalColorDarker: #FF9264;\n  --globalColorLighter: #FF9264;\n}\n\n.app-component-wrapper {\n  background: #ff0303;\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  background: var(--globalColor);\n  color: white;\n  font-family: monospace;\n}\n\n.app-component-wrapper .web-title {\n  text-align: center;\n  padding: 20px 0px;\n  font-size: 2em;\n}\n\n.app-component-wrapper .neumorph-wrapper {\n  display: flex;\n  height: 100%;\n}\n\n.app-component-wrapper .neumorph-wrapper .output-section {\n  flex-basis: 70%;\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.app-component-wrapper .neumorph-wrapper .output-section .light-source-section {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n}\n\n.app-component-wrapper .neumorph-wrapper .output-section .light-source-section .light-source {\n  position: absolute;\n}\n\n.app-component-wrapper .neumorph-wrapper .output-section .light-source-section .light-source .svg-img-block {\n  width: 45px;\n  height: 45px;\n}\n\n.app-component-wrapper .neumorph-wrapper .output-section .light-source-section .light-source .svg-img-block .svg-img {\n  width: 100%;\n  height: 100%;\n}\n\n.app-component-wrapper .neumorph-wrapper .output-section .light-source-section .light-source .svg-img-block .svg-img::ng-deep svg {\n  width: 100%;\n  height: 100%;\n}\n\n.app-component-wrapper .neumorph-wrapper .output-section .light-source-section .light-source .svg-img-block .svg-img::ng-deep svg path {\n  fill: var(--globalColorLighter);\n}\n\n.app-component-wrapper .neumorph-wrapper .output-section .light-source-section .light-source .svg-img-block .svg-img::ng-deep svg path:nth-child(3) {\n  fill: black;\n}\n\n.app-component-wrapper .neumorph-wrapper .output-section .light-source-section .light-source .svg-img-block .svg-img::ng-deep svg path:nth-child(5) {\n  fill: black;\n}\n\n.app-component-wrapper .neumorph-wrapper .output-section .light-source-section .light-source .svg-img-block .svg-img::ng-deep svg path:nth-child(6) {\n  fill: black;\n}\n\n.app-component-wrapper .neumorph-wrapper .output-section .light-source-section .light-on .svg-img-block .svg-img::ng-deep svg path:nth-child(7) {\n  fill: #efedeb;\n}\n\n.app-component-wrapper .neumorph-wrapper .output-section .light-source-section .light-on .svg-img-block .svg-img::ng-deep svg path:nth-child(8) {\n  fill: #dddddd;\n}\n\n.app-component-wrapper .neumorph-wrapper .output-section .light-source-section .left-top {\n  left: 0;\n  top: 0;\n}\n\n.app-component-wrapper .neumorph-wrapper .output-section .light-source-section .left-top .svg-img-block {\n  transform: rotate(90deg);\n}\n\n.app-component-wrapper .neumorph-wrapper .output-section .light-source-section .right-top {\n  right: 0;\n  top: 0;\n}\n\n.app-component-wrapper .neumorph-wrapper .output-section .light-source-section .right-top .svg-img-block {\n  transform: rotate(180deg);\n}\n\n.app-component-wrapper .neumorph-wrapper .output-section .light-source-section .left-bottom {\n  left: 0;\n  bottom: 0;\n}\n\n.app-component-wrapper .neumorph-wrapper .output-section .light-source-section .left-bottom .svg-img-block {\n  transform: rotate(0deg);\n}\n\n.app-component-wrapper .neumorph-wrapper .output-section .light-source-section .right-bottom {\n  right: 0;\n  bottom: 0;\n}\n\n.app-component-wrapper .neumorph-wrapper .output-section .light-source-section .right-bottom .svg-img-block {\n  transform: rotate(270deg);\n}\n\n.app-component-wrapper .neumorph-wrapper .output-section .demo-button-item {\n  z-index: 10;\n  width: var(--buttonSize);\n  height: var(--buttonSize);\n  background: var(--globalColor);\n  border-radius: 10px;\n  margin: 0px 40px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: none;\n  outline: none;\n}\n\n.app-component-wrapper .neumorph-wrapper .output-section .demo-button-item:active {\n  background: linear-gradient(145deg, var(--globalColorDarker), var(--globalColorLighter));\n  box-shadow: var(--positionX) var(--positionY) var(--blurSize) var(--globalColorDark), var(--positionXOpposite) var(--positionYOpposite) var(--blurSize) var(--globalColorLight);\n}\n\n.app-component-wrapper .neumorph-wrapper .output-section .demo-button-item p {\n  margin-top: 200px;\n}\n\n.app-component-wrapper .neumorph-wrapper .output-section .flat-btn {\n  box-shadow: var(--positionX) var(--positionY) var(--blurSize) var(--globalColorDark), var(--positionXOpposite) var(--positionYOpposite) var(--blurSize) var(--globalColorLight);\n}\n\n.app-component-wrapper .neumorph-wrapper .output-section .concave-btn {\n  background: linear-gradient(145deg, var(--globalColorLighter), var(--globalColorDarker));\n  box-shadow: var(--positionX) var(--positionY) var(--blurSize) var(--globalColorDark), var(--positionXOpposite) var(--positionYOpposite) var(--blurSize) var(--globalColorLight);\n}\n\n.app-component-wrapper .neumorph-wrapper .output-section .convex-btn {\n  background: linear-gradient(145deg, var(--globalColorDarker), var(--globalColorLighter));\n  box-shadow: var(--positionX) var(--positionY) var(--blurSize) var(--globalColorDark), var(--positionXOpposite) var(--positionYOpposite) var(--blurSize) var(--globalColorLight);\n}\n\n.app-component-wrapper .neumorph-wrapper .output-section .pressed-btn {\n  background: var(--globalColor);\n  box-shadow: inset var(--positionX) var(--positionY) var(--blurSize) var(--globalColorDark), inset var(--positionXOpposite) var(--positionYOpposite) var(--blurSize) var(--globalColorLight);\n}\n\n.app-component-wrapper .neumorph-wrapper .input-section {\n  flex-basis: 30%;\n  display: flex;\n}\n\n.app-component-wrapper .neumorph-wrapper .input-section .ui-controls-section {\n  margin: 30px;\n  padding: 25px 30px;\n  flex-basis: 100%;\n  border-radius: 40px;\n  font-weight: 600;\n  background: var(--globalColor);\n  box-shadow: var(--positionX) var(--positionY) var(--blurSize) var(--globalColorDark), var(--positionXOpposite) var(--positionYOpposite) var(--blurSize) var(--globalColorLight);\n}\n\n.app-component-wrapper .neumorph-wrapper .input-section .ui-controls-section .ui-control-item .form-group {\n  display: flex;\n  flex-direction: row;\n  flex-basis: 100%;\n  position: relative;\n  align-items: center;\n  margin-bottom: 10px;\n}\n\n.app-component-wrapper .neumorph-wrapper .input-section .ui-controls-section .ui-control-item .form-group label {\n  width: 140px;\n  margin-right: 10px;\n}\n\n.app-component-wrapper .neumorph-wrapper .input-section .ui-controls-section .ui-control-item .form-group .form-control {\n  width: 100px;\n  height: 20px;\n}\n\n.app-component-wrapper .neumorph-wrapper .input-section .ui-controls-section .ui-control-item .form-group .color-picker {\n  width: 20px;\n  height: 20px;\n  border: 1px solid white;\n  position: relative;\n  display: block;\n}\n\n.main-wrapper {\n  width: 100%;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.main-wrapper .box-wrapper {\n  display: flex;\n  flex-direction: column;\n}\n\n.main-wrapper .box-wrapper .form-control {\n  margin: 15px 0px;\n}\n\n.main-wrapper .box-wrapper .btns {\n  display: flex;\n  margin: 15px 0px;\n}\n\n.main-wrapper .box-wrapper .btns .action-button {\n  flex-basis: 50%;\n  padding: 5px 10px;\n}\n\n.main-wrapper .box-wrapper .result-text {\n  margin: 15px 0px;\n  border: 1px solid;\n  border-radius: 5px;\n}\n\n.main-wrapper .box-wrapper .tip-message {\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 150px;\n  height: 56px;\n  background: #d2d2d2;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3BlcmVubmlhbC9CYWNrdXAvUHJvamVjdHMvUHJvamVjdHMvQW5ndWxhci9QcmFjdGljZS9uZXVtb3JwaGlzbS9zcmMvYXBwL3RoZW1lLnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsIi9ob21lL3BlcmVubmlhbC9CYWNrdXAvUHJvamVjdHMvUHJvamVjdHMvQW5ndWxhci9QcmFjdGljZS9uZXVtb3JwaGlzbS9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0VBR0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsMEJBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7QUNGRjs7QUNHQTtFQUNFLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLDhCQVhjO0VBWWQsWUFBQTtFQUNBLHNCQUFBO0FEQUY7O0FDQ0U7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBRENKOztBQ0VFO0VBQ0UsYUFBQTtFQUNBLFlBQUE7QURBSjs7QUNDSTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FEQ047O0FDQ007RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBRENSOztBQ0FRO0VBQ0Usa0JBQUE7QURFVjs7QUNEVTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FER1o7O0FDRlk7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBRElkOztBQ0ZnQjtFQUNFLFdBQUE7RUFDQSxZQUFBO0FESWxCOztBQ0hrQjtFQUNFLCtCQTVDSTtBRGlEeEI7O0FDSG9CO0VBQ0UsV0FBQTtBREt0Qjs7QUNIb0I7RUFDRSxXQUFBO0FES3RCOztBQ0hvQjtFQUNFLFdBQUE7QURLdEI7O0FDU29CO0VBQ0UsYUFBQTtBRFB0Qjs7QUNTb0I7RUFDRSxhQUFBO0FEUHRCOztBQ2VRO0VBQ0UsT0FBQTtFQUNBLE1BQUE7QURiVjs7QUNjVTtFQUNFLHdCQUFBO0FEWlo7O0FDaUJRO0VBQ0UsUUFBQTtFQUNBLE1BQUE7QURmVjs7QUNnQlU7RUFDRSx5QkFBQTtBRGRaOztBQ21CUTtFQUNFLE9BQUE7RUFDQSxTQUFBO0FEakJWOztBQ2tCVTtFQUNFLHVCQUFBO0FEaEJaOztBQ3FCUTtFQUNFLFFBQUE7RUFDQSxTQUFBO0FEbkJWOztBQ29CVTtFQUNFLHlCQUFBO0FEbEJaOztBQ3dCTTtFQUNFLFdBQUE7RUFDQSx3QkE1SE07RUE2SE4seUJBN0hNO0VBOEhOLDhCQTVIUTtFQTZIUixtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFFQSxZQUFBO0VBQ0EsYUFBQTtBRHZCUjs7QUN5QlE7RUFDRSx3RkFBQTtFQUtBLCtLQUFBO0FEM0JWOztBQytCUTtFQUNFLGlCQUFBO0FEN0JWOztBQ2dDTTtFQUNFLCtLQUFBO0FEOUJSOztBQ2lDTTtFQUNFLHdGQUFBO0VBS0EsK0tBQUE7QURuQ1I7O0FDc0NNO0VBQ0Usd0ZBQUE7RUFLQSwrS0FBQTtBRHhDUjs7QUMyQ007RUFDRSw4QkEzS1E7RUE0S1IsMkxBQUE7QUR6Q1I7O0FDOENJO0VBQ0UsZUFBQTtFQUNBLGFBQUE7QUQ1Q047O0FDNkNNO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsOEJBMUxRO0VBMkxSLCtLQUFBO0FEM0NSOztBQzhDVTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FENUNaOztBQzZDWTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtBRDNDZDs7QUM2Q1k7RUFDRSxZQUFBO0VBQ0EsWUFBQTtBRDNDZDs7QUM2Q1k7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FEM0NkOztBQ21EQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QURoREY7O0FDa0RFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0FEaERKOztBQ2lESTtFQUNFLGdCQUFBO0FEL0NOOztBQ2tESTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtBRGhETjs7QUNpRE07RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUQvQ1I7O0FDbURJO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FEakROOztBQ29ESTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QURsRE4iLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBkZWZhdWx0IGNvbG9yc1xuLnRoZW1lLXdyYXBwZXIge1xuICAtLXBvc2l0aW9uWDogMTVweDtcbiAgLS1wb3NpdGlvblhPcHBvc2l0ZTogMTVweDtcbiAgLS1wb3NpdGlvblk6IC0xNXB4O1xuICAtLXBvc2l0aW9uWU9wcG9zaXRlOiAtMTVweDtcblxuXG4gIC0tYnV0dG9uU2l6ZTogMTAwcHg7XG4gIC0tYmx1clNpemU6IDUwcHg7XG4gIC0tZ2xvYmFsQ29sb3I6ICNmZjk1NDM7XG4gIC0tZ2xvYmFsQ29sb3JEYXJrOiAjZmYyMzExO1xuICAtLWdsb2JhbENvbG9yTGlnaHQ6ICNGRjkyNjQ7XG4gIC0tZ2xvYmFsQ29sb3JEYXJrZXI6ICNGRjkyNjQ7XG4gIC0tZ2xvYmFsQ29sb3JMaWdodGVyOiAjRkY5MjY0O1xufVxuXG4kdmFyaWFibGVzOiAoXG4gIC0tcG9zaXRpb25YOiB2YXIoLS1wb3NpdGlvblgpLFxuICAtLXBvc2l0aW9uWE9wcG9zaXRlOiB2YXIoLS1wb3NpdGlvblhPcHBvc2l0ZSksXG4gIC0tcG9zaXRpb25ZOiB2YXIoLS1wb3NpdGlvblkpLFxuICAtLXBvc2l0aW9uWU9wcG9zaXRlOiB2YXIoLS1wb3NpdGlvbllPcHBvc2l0ZSksXG5cbiAgLS1idXR0b25TaXplOiB2YXIoLS1idXR0b25TaXplKSxcbiAgLS1ibHVyU2l6ZTogdmFyKC0tYmx1clNpemUpLFxuICAtLWdsb2JhbENvbG9yOiB2YXIoLS1nbG9iYWxDb2xvciksXG4gIC0tZ2xvYmFsQ29sb3JEYXJrOiB2YXIoLS1nbG9iYWxDb2xvckRhcmspLFxuICAtLWdsb2JhbENvbG9yTGlnaHQ6IHZhcigtLWdsb2JhbENvbG9yTGlnaHQpLFxuICAtLWdsb2JhbENvbG9yRGFya2VyOiB2YXIoLS1nbG9iYWxDb2xvckRhcmtlciksXG4gIC0tZ2xvYmFsQ29sb3JMaWdodGVyOiB2YXIoLS1nbG9iYWxDb2xvckxpZ2h0ZXIpXG4pO1xuIiwiLnRoZW1lLXdyYXBwZXIge1xuICAtLXBvc2l0aW9uWDogMTVweDtcbiAgLS1wb3NpdGlvblhPcHBvc2l0ZTogMTVweDtcbiAgLS1wb3NpdGlvblk6IC0xNXB4O1xuICAtLXBvc2l0aW9uWU9wcG9zaXRlOiAtMTVweDtcbiAgLS1idXR0b25TaXplOiAxMDBweDtcbiAgLS1ibHVyU2l6ZTogNTBweDtcbiAgLS1nbG9iYWxDb2xvcjogI2ZmOTU0MztcbiAgLS1nbG9iYWxDb2xvckRhcms6ICNmZjIzMTE7XG4gIC0tZ2xvYmFsQ29sb3JMaWdodDogI0ZGOTI2NDtcbiAgLS1nbG9iYWxDb2xvckRhcmtlcjogI0ZGOTI2NDtcbiAgLS1nbG9iYWxDb2xvckxpZ2h0ZXI6ICNGRjkyNjQ7XG59XG5cbi5hcHAtY29tcG9uZW50LXdyYXBwZXIge1xuICBiYWNrZ3JvdW5kOiAjZmYwMzAzO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHZhcigtLWdsb2JhbENvbG9yKTtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xufVxuLmFwcC1jb21wb25lbnQtd3JhcHBlciAud2ViLXRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAyMHB4IDBweDtcbiAgZm9udC1zaXplOiAyZW07XG59XG4uYXBwLWNvbXBvbmVudC13cmFwcGVyIC5uZXVtb3JwaC13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmFwcC1jb21wb25lbnQtd3JhcHBlciAubmV1bW9ycGgtd3JhcHBlciAub3V0cHV0LXNlY3Rpb24ge1xuICBmbGV4LWJhc2lzOiA3MCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uYXBwLWNvbXBvbmVudC13cmFwcGVyIC5uZXVtb3JwaC13cmFwcGVyIC5vdXRwdXQtc2VjdGlvbiAubGlnaHQtc291cmNlLXNlY3Rpb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHotaW5kZXg6IDE7XG59XG4uYXBwLWNvbXBvbmVudC13cmFwcGVyIC5uZXVtb3JwaC13cmFwcGVyIC5vdXRwdXQtc2VjdGlvbiAubGlnaHQtc291cmNlLXNlY3Rpb24gLmxpZ2h0LXNvdXJjZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cbi5hcHAtY29tcG9uZW50LXdyYXBwZXIgLm5ldW1vcnBoLXdyYXBwZXIgLm91dHB1dC1zZWN0aW9uIC5saWdodC1zb3VyY2Utc2VjdGlvbiAubGlnaHQtc291cmNlIC5zdmctaW1nLWJsb2NrIHtcbiAgd2lkdGg6IDQ1cHg7XG4gIGhlaWdodDogNDVweDtcbn1cbi5hcHAtY29tcG9uZW50LXdyYXBwZXIgLm5ldW1vcnBoLXdyYXBwZXIgLm91dHB1dC1zZWN0aW9uIC5saWdodC1zb3VyY2Utc2VjdGlvbiAubGlnaHQtc291cmNlIC5zdmctaW1nLWJsb2NrIC5zdmctaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5hcHAtY29tcG9uZW50LXdyYXBwZXIgLm5ldW1vcnBoLXdyYXBwZXIgLm91dHB1dC1zZWN0aW9uIC5saWdodC1zb3VyY2Utc2VjdGlvbiAubGlnaHQtc291cmNlIC5zdmctaW1nLWJsb2NrIC5zdmctaW1nOjpuZy1kZWVwIHN2ZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uYXBwLWNvbXBvbmVudC13cmFwcGVyIC5uZXVtb3JwaC13cmFwcGVyIC5vdXRwdXQtc2VjdGlvbiAubGlnaHQtc291cmNlLXNlY3Rpb24gLmxpZ2h0LXNvdXJjZSAuc3ZnLWltZy1ibG9jayAuc3ZnLWltZzo6bmctZGVlcCBzdmcgcGF0aCB7XG4gIGZpbGw6IHZhcigtLWdsb2JhbENvbG9yTGlnaHRlcik7XG59XG4uYXBwLWNvbXBvbmVudC13cmFwcGVyIC5uZXVtb3JwaC13cmFwcGVyIC5vdXRwdXQtc2VjdGlvbiAubGlnaHQtc291cmNlLXNlY3Rpb24gLmxpZ2h0LXNvdXJjZSAuc3ZnLWltZy1ibG9jayAuc3ZnLWltZzo6bmctZGVlcCBzdmcgcGF0aDpudGgtY2hpbGQoMykge1xuICBmaWxsOiBibGFjaztcbn1cbi5hcHAtY29tcG9uZW50LXdyYXBwZXIgLm5ldW1vcnBoLXdyYXBwZXIgLm91dHB1dC1zZWN0aW9uIC5saWdodC1zb3VyY2Utc2VjdGlvbiAubGlnaHQtc291cmNlIC5zdmctaW1nLWJsb2NrIC5zdmctaW1nOjpuZy1kZWVwIHN2ZyBwYXRoOm50aC1jaGlsZCg1KSB7XG4gIGZpbGw6IGJsYWNrO1xufVxuLmFwcC1jb21wb25lbnQtd3JhcHBlciAubmV1bW9ycGgtd3JhcHBlciAub3V0cHV0LXNlY3Rpb24gLmxpZ2h0LXNvdXJjZS1zZWN0aW9uIC5saWdodC1zb3VyY2UgLnN2Zy1pbWctYmxvY2sgLnN2Zy1pbWc6Om5nLWRlZXAgc3ZnIHBhdGg6bnRoLWNoaWxkKDYpIHtcbiAgZmlsbDogYmxhY2s7XG59XG4uYXBwLWNvbXBvbmVudC13cmFwcGVyIC5uZXVtb3JwaC13cmFwcGVyIC5vdXRwdXQtc2VjdGlvbiAubGlnaHQtc291cmNlLXNlY3Rpb24gLmxpZ2h0LW9uIC5zdmctaW1nLWJsb2NrIC5zdmctaW1nOjpuZy1kZWVwIHN2ZyBwYXRoOm50aC1jaGlsZCg3KSB7XG4gIGZpbGw6ICNlZmVkZWI7XG59XG4uYXBwLWNvbXBvbmVudC13cmFwcGVyIC5uZXVtb3JwaC13cmFwcGVyIC5vdXRwdXQtc2VjdGlvbiAubGlnaHQtc291cmNlLXNlY3Rpb24gLmxpZ2h0LW9uIC5zdmctaW1nLWJsb2NrIC5zdmctaW1nOjpuZy1kZWVwIHN2ZyBwYXRoOm50aC1jaGlsZCg4KSB7XG4gIGZpbGw6ICNkZGRkZGQ7XG59XG4uYXBwLWNvbXBvbmVudC13cmFwcGVyIC5uZXVtb3JwaC13cmFwcGVyIC5vdXRwdXQtc2VjdGlvbiAubGlnaHQtc291cmNlLXNlY3Rpb24gLmxlZnQtdG9wIHtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xufVxuLmFwcC1jb21wb25lbnQtd3JhcHBlciAubmV1bW9ycGgtd3JhcHBlciAub3V0cHV0LXNlY3Rpb24gLmxpZ2h0LXNvdXJjZS1zZWN0aW9uIC5sZWZ0LXRvcCAuc3ZnLWltZy1ibG9jayB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbn1cbi5hcHAtY29tcG9uZW50LXdyYXBwZXIgLm5ldW1vcnBoLXdyYXBwZXIgLm91dHB1dC1zZWN0aW9uIC5saWdodC1zb3VyY2Utc2VjdGlvbiAucmlnaHQtdG9wIHtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbn1cbi5hcHAtY29tcG9uZW50LXdyYXBwZXIgLm5ldW1vcnBoLXdyYXBwZXIgLm91dHB1dC1zZWN0aW9uIC5saWdodC1zb3VyY2Utc2VjdGlvbiAucmlnaHQtdG9wIC5zdmctaW1nLWJsb2NrIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbn1cbi5hcHAtY29tcG9uZW50LXdyYXBwZXIgLm5ldW1vcnBoLXdyYXBwZXIgLm91dHB1dC1zZWN0aW9uIC5saWdodC1zb3VyY2Utc2VjdGlvbiAubGVmdC1ib3R0b20ge1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG59XG4uYXBwLWNvbXBvbmVudC13cmFwcGVyIC5uZXVtb3JwaC13cmFwcGVyIC5vdXRwdXQtc2VjdGlvbiAubGlnaHQtc291cmNlLXNlY3Rpb24gLmxlZnQtYm90dG9tIC5zdmctaW1nLWJsb2NrIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG59XG4uYXBwLWNvbXBvbmVudC13cmFwcGVyIC5uZXVtb3JwaC13cmFwcGVyIC5vdXRwdXQtc2VjdGlvbiAubGlnaHQtc291cmNlLXNlY3Rpb24gLnJpZ2h0LWJvdHRvbSB7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG59XG4uYXBwLWNvbXBvbmVudC13cmFwcGVyIC5uZXVtb3JwaC13cmFwcGVyIC5vdXRwdXQtc2VjdGlvbiAubGlnaHQtc291cmNlLXNlY3Rpb24gLnJpZ2h0LWJvdHRvbSAuc3ZnLWltZy1ibG9jayB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDI3MGRlZyk7XG59XG4uYXBwLWNvbXBvbmVudC13cmFwcGVyIC5uZXVtb3JwaC13cmFwcGVyIC5vdXRwdXQtc2VjdGlvbiAuZGVtby1idXR0b24taXRlbSB7XG4gIHotaW5kZXg6IDEwO1xuICB3aWR0aDogdmFyKC0tYnV0dG9uU2l6ZSk7XG4gIGhlaWdodDogdmFyKC0tYnV0dG9uU2l6ZSk7XG4gIGJhY2tncm91bmQ6IHZhcigtLWdsb2JhbENvbG9yKTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgbWFyZ2luOiAwcHggNDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbn1cbi5hcHAtY29tcG9uZW50LXdyYXBwZXIgLm5ldW1vcnBoLXdyYXBwZXIgLm91dHB1dC1zZWN0aW9uIC5kZW1vLWJ1dHRvbi1pdGVtOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNDVkZWcsIHZhcigtLWdsb2JhbENvbG9yRGFya2VyKSwgdmFyKC0tZ2xvYmFsQ29sb3JMaWdodGVyKSk7XG4gIGJveC1zaGFkb3c6IHZhcigtLXBvc2l0aW9uWCkgdmFyKC0tcG9zaXRpb25ZKSB2YXIoLS1ibHVyU2l6ZSkgdmFyKC0tZ2xvYmFsQ29sb3JEYXJrKSwgdmFyKC0tcG9zaXRpb25YT3Bwb3NpdGUpIHZhcigtLXBvc2l0aW9uWU9wcG9zaXRlKSB2YXIoLS1ibHVyU2l6ZSkgdmFyKC0tZ2xvYmFsQ29sb3JMaWdodCk7XG59XG4uYXBwLWNvbXBvbmVudC13cmFwcGVyIC5uZXVtb3JwaC13cmFwcGVyIC5vdXRwdXQtc2VjdGlvbiAuZGVtby1idXR0b24taXRlbSBwIHtcbiAgbWFyZ2luLXRvcDogMjAwcHg7XG59XG4uYXBwLWNvbXBvbmVudC13cmFwcGVyIC5uZXVtb3JwaC13cmFwcGVyIC5vdXRwdXQtc2VjdGlvbiAuZmxhdC1idG4ge1xuICBib3gtc2hhZG93OiB2YXIoLS1wb3NpdGlvblgpIHZhcigtLXBvc2l0aW9uWSkgdmFyKC0tYmx1clNpemUpIHZhcigtLWdsb2JhbENvbG9yRGFyayksIHZhcigtLXBvc2l0aW9uWE9wcG9zaXRlKSB2YXIoLS1wb3NpdGlvbllPcHBvc2l0ZSkgdmFyKC0tYmx1clNpemUpIHZhcigtLWdsb2JhbENvbG9yTGlnaHQpO1xufVxuLmFwcC1jb21wb25lbnQtd3JhcHBlciAubmV1bW9ycGgtd3JhcHBlciAub3V0cHV0LXNlY3Rpb24gLmNvbmNhdmUtYnRuIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE0NWRlZywgdmFyKC0tZ2xvYmFsQ29sb3JMaWdodGVyKSwgdmFyKC0tZ2xvYmFsQ29sb3JEYXJrZXIpKTtcbiAgYm94LXNoYWRvdzogdmFyKC0tcG9zaXRpb25YKSB2YXIoLS1wb3NpdGlvblkpIHZhcigtLWJsdXJTaXplKSB2YXIoLS1nbG9iYWxDb2xvckRhcmspLCB2YXIoLS1wb3NpdGlvblhPcHBvc2l0ZSkgdmFyKC0tcG9zaXRpb25ZT3Bwb3NpdGUpIHZhcigtLWJsdXJTaXplKSB2YXIoLS1nbG9iYWxDb2xvckxpZ2h0KTtcbn1cbi5hcHAtY29tcG9uZW50LXdyYXBwZXIgLm5ldW1vcnBoLXdyYXBwZXIgLm91dHB1dC1zZWN0aW9uIC5jb252ZXgtYnRuIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE0NWRlZywgdmFyKC0tZ2xvYmFsQ29sb3JEYXJrZXIpLCB2YXIoLS1nbG9iYWxDb2xvckxpZ2h0ZXIpKTtcbiAgYm94LXNoYWRvdzogdmFyKC0tcG9zaXRpb25YKSB2YXIoLS1wb3NpdGlvblkpIHZhcigtLWJsdXJTaXplKSB2YXIoLS1nbG9iYWxDb2xvckRhcmspLCB2YXIoLS1wb3NpdGlvblhPcHBvc2l0ZSkgdmFyKC0tcG9zaXRpb25ZT3Bwb3NpdGUpIHZhcigtLWJsdXJTaXplKSB2YXIoLS1nbG9iYWxDb2xvckxpZ2h0KTtcbn1cbi5hcHAtY29tcG9uZW50LXdyYXBwZXIgLm5ldW1vcnBoLXdyYXBwZXIgLm91dHB1dC1zZWN0aW9uIC5wcmVzc2VkLWJ0biB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWdsb2JhbENvbG9yKTtcbiAgYm94LXNoYWRvdzogaW5zZXQgdmFyKC0tcG9zaXRpb25YKSB2YXIoLS1wb3NpdGlvblkpIHZhcigtLWJsdXJTaXplKSB2YXIoLS1nbG9iYWxDb2xvckRhcmspLCBpbnNldCB2YXIoLS1wb3NpdGlvblhPcHBvc2l0ZSkgdmFyKC0tcG9zaXRpb25ZT3Bwb3NpdGUpIHZhcigtLWJsdXJTaXplKSB2YXIoLS1nbG9iYWxDb2xvckxpZ2h0KTtcbn1cbi5hcHAtY29tcG9uZW50LXdyYXBwZXIgLm5ldW1vcnBoLXdyYXBwZXIgLmlucHV0LXNlY3Rpb24ge1xuICBmbGV4LWJhc2lzOiAzMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uYXBwLWNvbXBvbmVudC13cmFwcGVyIC5uZXVtb3JwaC13cmFwcGVyIC5pbnB1dC1zZWN0aW9uIC51aS1jb250cm9scy1zZWN0aW9uIHtcbiAgbWFyZ2luOiAzMHB4O1xuICBwYWRkaW5nOiAyNXB4IDMwcHg7XG4gIGZsZXgtYmFzaXM6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDQwcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGJhY2tncm91bmQ6IHZhcigtLWdsb2JhbENvbG9yKTtcbiAgYm94LXNoYWRvdzogdmFyKC0tcG9zaXRpb25YKSB2YXIoLS1wb3NpdGlvblkpIHZhcigtLWJsdXJTaXplKSB2YXIoLS1nbG9iYWxDb2xvckRhcmspLCB2YXIoLS1wb3NpdGlvblhPcHBvc2l0ZSkgdmFyKC0tcG9zaXRpb25ZT3Bwb3NpdGUpIHZhcigtLWJsdXJTaXplKSB2YXIoLS1nbG9iYWxDb2xvckxpZ2h0KTtcbn1cbi5hcHAtY29tcG9uZW50LXdyYXBwZXIgLm5ldW1vcnBoLXdyYXBwZXIgLmlucHV0LXNlY3Rpb24gLnVpLWNvbnRyb2xzLXNlY3Rpb24gLnVpLWNvbnRyb2wtaXRlbSAuZm9ybS1ncm91cCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtYmFzaXM6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5hcHAtY29tcG9uZW50LXdyYXBwZXIgLm5ldW1vcnBoLXdyYXBwZXIgLmlucHV0LXNlY3Rpb24gLnVpLWNvbnRyb2xzLXNlY3Rpb24gLnVpLWNvbnRyb2wtaXRlbSAuZm9ybS1ncm91cCBsYWJlbCB7XG4gIHdpZHRoOiAxNDBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuLmFwcC1jb21wb25lbnQtd3JhcHBlciAubmV1bW9ycGgtd3JhcHBlciAuaW5wdXQtc2VjdGlvbiAudWktY29udHJvbHMtc2VjdGlvbiAudWktY29udHJvbC1pdGVtIC5mb3JtLWdyb3VwIC5mb3JtLWNvbnRyb2wge1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMjBweDtcbn1cbi5hcHAtY29tcG9uZW50LXdyYXBwZXIgLm5ldW1vcnBoLXdyYXBwZXIgLmlucHV0LXNlY3Rpb24gLnVpLWNvbnRyb2xzLXNlY3Rpb24gLnVpLWNvbnRyb2wtaXRlbSAuZm9ybS1ncm91cCAuY29sb3ItcGlja2VyIHtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5tYWluLXdyYXBwZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ubWFpbi13cmFwcGVyIC5ib3gtd3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4ubWFpbi13cmFwcGVyIC5ib3gtd3JhcHBlciAuZm9ybS1jb250cm9sIHtcbiAgbWFyZ2luOiAxNXB4IDBweDtcbn1cbi5tYWluLXdyYXBwZXIgLmJveC13cmFwcGVyIC5idG5zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luOiAxNXB4IDBweDtcbn1cbi5tYWluLXdyYXBwZXIgLmJveC13cmFwcGVyIC5idG5zIC5hY3Rpb24tYnV0dG9uIHtcbiAgZmxleC1iYXNpczogNTAlO1xuICBwYWRkaW5nOiA1cHggMTBweDtcbn1cbi5tYWluLXdyYXBwZXIgLmJveC13cmFwcGVyIC5yZXN1bHQtdGV4dCB7XG4gIG1hcmdpbjogMTVweCAwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4ubWFpbi13cmFwcGVyIC5ib3gtd3JhcHBlciAudGlwLW1lc3NhZ2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIHdpZHRoOiAxNTBweDtcbiAgaGVpZ2h0OiA1NnB4O1xuICBiYWNrZ3JvdW5kOiAjZDJkMmQyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn0iLCJAaW1wb3J0IFwidGhlbWVcIjtcblxuJHBvc2l0aW9uWDogdmFyKC0tcG9zaXRpb25YKTtcbiRwb3NpdGlvblhPcHBvc2l0ZTogdmFyKC0tcG9zaXRpb25YT3Bwb3NpdGUpO1xuJHBvc2l0aW9uWTogdmFyKC0tcG9zaXRpb25ZKTtcbiRwb3NpdGlvbllPcHBvc2l0ZTogdmFyKC0tcG9zaXRpb25ZT3Bwb3NpdGUpO1xuXG4kYnV0dG9uLXNpemU6IHZhcigtLWJ1dHRvblNpemUpO1xuJGJsdXItc2l6ZTogdmFyKC0tYmx1clNpemUpO1xuJHByaW1hcnktY29sb3I6IHZhcigtLWdsb2JhbENvbG9yKTtcbiRkYXJrLXByaW1hcnktY29sb3I6IHZhcigtLWdsb2JhbENvbG9yRGFyayk7XG4kbGlnaHQtcHJpbWFyeS1jb2xvcjogdmFyKC0tZ2xvYmFsQ29sb3JMaWdodCk7XG4kZGFya2VyLXByaW1hcnktY29sb3I6IHZhcigtLWdsb2JhbENvbG9yRGFya2VyKTtcbiRsaWdodGVyLXByaW1hcnktY29sb3I6IHZhcigtLWdsb2JhbENvbG9yTGlnaHRlcik7XG5cbi5hcHAtY29tcG9uZW50LXdyYXBwZXIge1xuICBiYWNrZ3JvdW5kOiBsaWdodGVuKHJlZCwgMC41KTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAkcHJpbWFyeS1jb2xvcjtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xuICAud2ViLXRpdGxlIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMjBweCAwcHg7XG4gICAgZm9udC1zaXplOiAyZW07XG4gIH1cblxuICAubmV1bW9ycGgtd3JhcHBlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgLm91dHB1dC1zZWN0aW9uIHtcbiAgICAgIGZsZXgtYmFzaXM6IDcwJTtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgIC5saWdodC1zb3VyY2Utc2VjdGlvbiB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgLmxpZ2h0LXNvdXJjZSB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIC5zdmctaW1nLWJsb2NrIHtcbiAgICAgICAgICAgIHdpZHRoOiA0NXB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA0NXB4O1xuICAgICAgICAgICAgLnN2Zy1pbWcge1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAmOjpuZy1kZWVwIHtcbiAgICAgICAgICAgICAgICBzdmcge1xuICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgICBwYXRoIHtcbiAgICAgICAgICAgICAgICAgICAgZmlsbDogJGxpZ2h0ZXItcHJpbWFyeS1jb2xvcjtcblxuICAgICAgICAgICAgICAgICAgICAmOm50aC1jaGlsZCgzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgZmlsbDogYmxhY2s7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgJjpudGgtY2hpbGQoNSkge1xuICAgICAgICAgICAgICAgICAgICAgIGZpbGw6IGJsYWNrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICY6bnRoLWNoaWxkKDYpIHtcbiAgICAgICAgICAgICAgICAgICAgICBmaWxsOiBibGFjaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAubGlnaHQtb24ge1xuICAgICAgICAgIC5zdmctaW1nLWJsb2NrIHtcbiAgICAgICAgICAgIC5zdmctaW1nIHtcbiAgICAgICAgICAgICAgJjo6bmctZGVlcCB7XG4gICAgICAgICAgICAgICAgc3ZnIHtcbiAgICAgICAgICAgICAgICAgIHBhdGgge1xuICAgICAgICAgICAgICAgICAgICAmOm50aC1jaGlsZCg3KSB7XG4gICAgICAgICAgICAgICAgICAgICAgZmlsbDogI2VmZWRlYjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAmOm50aC1jaGlsZCg4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgZmlsbDogI2RkZGRkZDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAubGVmdC10b3Age1xuICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgIC5zdmctaW1nLWJsb2NrIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgICAgICAgICAgIC5zdmctaW1nIHtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLnJpZ2h0LXRvcCB7XG4gICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgIC5zdmctaW1nLWJsb2NrIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG4gICAgICAgICAgICAuc3ZnLWltZyB7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5sZWZ0LWJvdHRvbSB7XG4gICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgLnN2Zy1pbWctYmxvY2sge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgICAgICAgICAuc3ZnLWltZyB7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5yaWdodC1ib3R0b20ge1xuICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAuc3ZnLWltZy1ibG9jayB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyNzBkZWcpO1xuICAgICAgICAgICAgLnN2Zy1pbWcge1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLmRlbW8tYnV0dG9uLWl0ZW0ge1xuICAgICAgICB6LWluZGV4OiAxMDtcbiAgICAgICAgd2lkdGg6ICRidXR0b24tc2l6ZTtcbiAgICAgICAgaGVpZ2h0OiAkYnV0dG9uLXNpemU7XG4gICAgICAgIGJhY2tncm91bmQ6ICRwcmltYXJ5LWNvbG9yO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICBtYXJnaW46IDBweCA0MHB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgLy9ib3JkZXI6IDFweCBzb2xpZCAkcHJpbWFyeS1jb2xvcjtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBvdXRsaW5lOiBub25lO1xuXG4gICAgICAgICY6YWN0aXZlIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgICAgICAgICAxNDVkZWcsXG4gICAgICAgICAgICAkZGFya2VyLXByaW1hcnktY29sb3IsXG4gICAgICAgICAgICAkbGlnaHRlci1wcmltYXJ5LWNvbG9yXG4gICAgICAgICAgKTtcbiAgICAgICAgICBib3gtc2hhZG93OiAkcG9zaXRpb25YICRwb3NpdGlvblkgJGJsdXItc2l6ZSAkZGFyay1wcmltYXJ5LWNvbG9yLFxuICAgICAgICAgICAgJHBvc2l0aW9uWE9wcG9zaXRlICRwb3NpdGlvbllPcHBvc2l0ZSAkYmx1ci1zaXplXG4gICAgICAgICAgICAgICRsaWdodC1wcmltYXJ5LWNvbG9yO1xuICAgICAgICB9XG4gICAgICAgIHAge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDIwMHB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAuZmxhdC1idG4ge1xuICAgICAgICBib3gtc2hhZG93OiAkcG9zaXRpb25YICRwb3NpdGlvblkgJGJsdXItc2l6ZSAkZGFyay1wcmltYXJ5LWNvbG9yLFxuICAgICAgICAgICRwb3NpdGlvblhPcHBvc2l0ZSAkcG9zaXRpb25ZT3Bwb3NpdGUgJGJsdXItc2l6ZSAkbGlnaHQtcHJpbWFyeS1jb2xvcjtcbiAgICAgIH1cbiAgICAgIC5jb25jYXZlLWJ0biB7XG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcbiAgICAgICAgICAxNDVkZWcsXG4gICAgICAgICAgJGxpZ2h0ZXItcHJpbWFyeS1jb2xvcixcbiAgICAgICAgICAkZGFya2VyLXByaW1hcnktY29sb3JcbiAgICAgICAgKTtcbiAgICAgICAgYm94LXNoYWRvdzogJHBvc2l0aW9uWCAkcG9zaXRpb25ZICRibHVyLXNpemUgJGRhcmstcHJpbWFyeS1jb2xvcixcbiAgICAgICAgICAkcG9zaXRpb25YT3Bwb3NpdGUgJHBvc2l0aW9uWU9wcG9zaXRlICRibHVyLXNpemUgJGxpZ2h0LXByaW1hcnktY29sb3I7XG4gICAgICB9XG4gICAgICAuY29udmV4LWJ0biB7XG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcbiAgICAgICAgICAxNDVkZWcsXG4gICAgICAgICAgJGRhcmtlci1wcmltYXJ5LWNvbG9yLFxuICAgICAgICAgICRsaWdodGVyLXByaW1hcnktY29sb3JcbiAgICAgICAgKTtcbiAgICAgICAgYm94LXNoYWRvdzogJHBvc2l0aW9uWCAkcG9zaXRpb25ZICRibHVyLXNpemUgJGRhcmstcHJpbWFyeS1jb2xvcixcbiAgICAgICAgICAkcG9zaXRpb25YT3Bwb3NpdGUgJHBvc2l0aW9uWU9wcG9zaXRlICRibHVyLXNpemUgJGxpZ2h0LXByaW1hcnktY29sb3I7XG4gICAgICB9XG4gICAgICAucHJlc3NlZC1idG4ge1xuICAgICAgICBiYWNrZ3JvdW5kOiAkcHJpbWFyeS1jb2xvcjtcbiAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgJHBvc2l0aW9uWCAkcG9zaXRpb25ZICRibHVyLXNpemUgJGRhcmstcHJpbWFyeS1jb2xvcixcbiAgICAgICAgICBpbnNldCAkcG9zaXRpb25YT3Bwb3NpdGUgJHBvc2l0aW9uWU9wcG9zaXRlICRibHVyLXNpemVcbiAgICAgICAgICAgICRsaWdodC1wcmltYXJ5LWNvbG9yO1xuICAgICAgfVxuICAgIH1cbiAgICAuaW5wdXQtc2VjdGlvbiB7XG4gICAgICBmbGV4LWJhc2lzOiAzMCU7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgLnVpLWNvbnRyb2xzLXNlY3Rpb24ge1xuICAgICAgICBtYXJnaW46IDMwcHg7XG4gICAgICAgIHBhZGRpbmc6IDI1cHggMzBweDtcbiAgICAgICAgZmxleC1iYXNpczogMTAwJTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNDBweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgYmFja2dyb3VuZDogJHByaW1hcnktY29sb3I7XG4gICAgICAgIGJveC1zaGFkb3c6ICRwb3NpdGlvblggJHBvc2l0aW9uWSAkYmx1ci1zaXplICRkYXJrLXByaW1hcnktY29sb3IsXG4gICAgICAgICAgJHBvc2l0aW9uWE9wcG9zaXRlICRwb3NpdGlvbllPcHBvc2l0ZSAkYmx1ci1zaXplICRsaWdodC1wcmltYXJ5LWNvbG9yO1xuICAgICAgICAudWktY29udHJvbC1pdGVtIHtcbiAgICAgICAgICAuZm9ybS1ncm91cCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgIGZsZXgtYmFzaXM6IDEwMCU7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgIGxhYmVsIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDE0MHB4O1xuICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZm9ybS1jb250cm9sIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuY29sb3ItcGlja2VyIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4ubWFpbi13cmFwcGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gIC5ib3gtd3JhcHBlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIC5mb3JtLWNvbnRyb2wge1xuICAgICAgbWFyZ2luOiAxNXB4IDBweDtcbiAgICB9XG5cbiAgICAuYnRucyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgbWFyZ2luOiAxNXB4IDBweDtcbiAgICAgIC5hY3Rpb24tYnV0dG9uIHtcbiAgICAgICAgZmxleC1iYXNpczogNTAlO1xuICAgICAgICBwYWRkaW5nOiA1cHggMTBweDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAucmVzdWx0LXRleHQge1xuICAgICAgbWFyZ2luOiAxNXB4IDBweDtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkO1xuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIH1cblxuICAgIC50aXAtbWVzc2FnZSB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDA7XG4gICAgICByaWdodDogMDtcbiAgICAgIHdpZHRoOiAxNTBweDtcbiAgICAgIGhlaWdodDogNTZweDtcbiAgICAgIGJhY2tncm91bmQ6ICNkMmQyZDI7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIH1cbiAgfVxufVxuIl19 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let AppComponent = class AppComponent {
    constructor(activatedRoute) {
        this.activatedRoute = activatedRoute;
        this.title = 'neumorphism';
        this.color = '#ba4e4e';
        this.buttonSize = '150';
        this.blurSize = '45';
        this.isFeature = false;
        this.themeWrapper = document.querySelector('body');
        this.showTip = false;
    }
    ngOnInit() {
        this.color = '#a54747';
        this.changeColor();
        this.changeSize(this.buttonSize);
        this.changeBlueSize(this.blurSize);
        // this.activatedRoute.queryParams.subscribe(res => {
        //   if (res) {
        //     this.isFeature = true;
        //   } else {
        //     this.isFeature = false;
        //   }
        // });
    }
    changeColor() {
        this.global(this.color);
    }
    changeSize(size) {
        this.themeWrapper.style.setProperty('--buttonSize', size + 'px');
        this.themeWrapper.style.setProperty('--positionX', (0 + size / 10) + 'px');
        this.themeWrapper.style.setProperty('--positionXOpposite', (0 - size / 10) + 'px');
        this.themeWrapper.style.setProperty('--positionY', (0 + size / 10) + 'px');
        this.themeWrapper.style.setProperty('--positionYOpposite', (0 - size / 10) + 'px');
        this.themeWrapper.style.setProperty('--blurSize', ((0 + size / 10) * 2) + 'px');
        this.blurSize = String((0 + size / 10) * 2);
    }
    changeBlueSize(size) {
        this.themeWrapper.style.setProperty('--blurSize', size + 'px');
    }
    global(color) {
        this.themeWrapper.style.setProperty('--globalColor', color);
        this.themeWrapper.style.setProperty('--globalColorDark', this.ColorLuminance(color, -0.15));
        this.themeWrapper.style.setProperty('--globalColorLight', this.ColorLuminance(color, 0.15));
        this.themeWrapper.style.setProperty('--globalColorDarker', this.ColorLuminance(color, -0.10));
        this.themeWrapper.style.setProperty('--globalColorLighter', this.ColorLuminance(color, 0.07));
    }
    ColorLuminance(hex, lum) {
        // validate hex string
        hex = String(hex).replace(/[^0-9a-f]/gi, '');
        if (hex.length < 6) {
            hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
        }
        lum = lum || 0;
        // convert to decimal and change luminosity
        var rgb = "#", c, i;
        for (i = 0; i < 3; i++) {
            c = parseInt(hex.substr(i * 2, 2), 16);
            c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255)).toString(16);
            rgb += ("00" + c).substr(c.length);
        }
        return rgb;
    }
    capitalize(text) {
        this.convertedText = text.toUpperCase();
    }
    clear(ref) {
        ref.value = '';
        this.convertedText = '';
    }
    copy() {
        this.showTip = true;
        setTimeout(res => {
            this.showTip = false;
        }, 1000);
        let value = this.convertedText;
        const selBox = document.createElement('textarea');
        selBox.style.position = 'fixed';
        selBox.style.left = '0';
        selBox.style.top = '0';
        selBox.style.opacity = '0';
        selBox.value = value;
        document.body.appendChild(selBox);
        selBox.focus();
        selBox.select();
        document.execCommand('copy');
        document.body.removeChild(selBox);
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ng_inline_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-inline-svg */ "./node_modules/ng-inline-svg/lib_esmodule/index.js");
/* harmony import */ var ngx_color_picker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-color-picker */ "./node_modules/ngx-color-picker/fesm2015/ngx-color-picker.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");








let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
            ng_inline_svg__WEBPACK_IMPORTED_MODULE_4__["InlineSVGModule"],
            ngx_color_picker__WEBPACK_IMPORTED_MODULE_5__["ColorPickerModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/perennial/Backup/Projects/Projects/Angular/Practice/neumorphism/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map