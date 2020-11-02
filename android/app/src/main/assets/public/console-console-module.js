(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["console-console-module"],{

/***/ "./src/app/console/console.module.ts":
/*!*******************************************!*\
  !*** ./src/app/console/console.module.ts ***!
  \*******************************************/
/*! exports provided: ConsolePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsolePageModule", function() { return ConsolePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _console_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./console.page */ "./src/app/console/console.page.ts");







var routes = [
    {
        path: '',
        component: _console_page__WEBPACK_IMPORTED_MODULE_6__["ConsolePage"]
    }
];
var ConsolePageModule = /** @class */ (function () {
    function ConsolePageModule() {
    }
    ConsolePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_console_page__WEBPACK_IMPORTED_MODULE_6__["ConsolePage"]]
        })
    ], ConsolePageModule);
    return ConsolePageModule;
}());



/***/ }),

/***/ "./src/app/console/console.page.html":
/*!*******************************************!*\
  !*** ./src/app/console/console.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar>\r\n      <ion-buttons slot=\"start\">\r\n        <ion-menu-button></ion-menu-button>\r\n      </ion-buttons>\r\n      <ion-title>Console</ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  \r\n  <ion-content>\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-label>\r\n              The Console API automatically sends console.debug, console.error, console.info, \r\n              console.log, console.trace and console.warn calls to the native log system \r\n              on each respective platform. This enables, for example, console.log calls to \r\n              be rendered in the Xcode and Android Studio log windows.\r\n          </ion-label>\r\n        </ion-col>\r\n        <ion-col>\r\n          <ion-button href=\"https://capacitor.ionicframework.com/docs/apis/console\">\r\n            <ion-icon slot=\"start\" name=\"document\"></ion-icon>\r\n            API Details\r\n          </ion-button>\r\n        </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    \r\n    <ion-item-divider></ion-item-divider>\r\n\r\n    Implementation pending.\r\n  </ion-content>"

/***/ }),

/***/ "./src/app/console/console.page.scss":
/*!*******************************************!*\
  !*** ./src/app/console/console.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnNvbGUvY29uc29sZS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/console/console.page.ts":
/*!*****************************************!*\
  !*** ./src/app/console/console.page.ts ***!
  \*****************************************/
/*! exports provided: ConsolePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsolePage", function() { return ConsolePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ConsolePage = /** @class */ (function () {
    function ConsolePage() {
    }
    ConsolePage.prototype.ngOnInit = function () {
    };
    ConsolePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-console',
            template: __webpack_require__(/*! ./console.page.html */ "./src/app/console/console.page.html"),
            styles: [__webpack_require__(/*! ./console.page.scss */ "./src/app/console/console.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ConsolePage);
    return ConsolePage;
}());



/***/ })

}]);
//# sourceMappingURL=console-console-module.js.map