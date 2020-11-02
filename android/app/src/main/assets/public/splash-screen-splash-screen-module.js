(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["splash-screen-splash-screen-module"],{

/***/ "./src/app/splash-screen/splash-screen.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/splash-screen/splash-screen.module.ts ***!
  \*******************************************************/
/*! exports provided: SplashScreenPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SplashScreenPageModule", function() { return SplashScreenPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _splash_screen_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./splash-screen.page */ "./src/app/splash-screen/splash-screen.page.ts");







var routes = [
    {
        path: '',
        component: _splash_screen_page__WEBPACK_IMPORTED_MODULE_6__["SplashScreenPage"]
    }
];
var SplashScreenPageModule = /** @class */ (function () {
    function SplashScreenPageModule() {
    }
    SplashScreenPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_splash_screen_page__WEBPACK_IMPORTED_MODULE_6__["SplashScreenPage"]]
        })
    ], SplashScreenPageModule);
    return SplashScreenPageModule;
}());



/***/ }),

/***/ "./src/app/splash-screen/splash-screen.page.html":
/*!*******************************************************!*\
  !*** ./src/app/splash-screen/splash-screen.page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar>\r\n      <ion-buttons slot=\"start\">\r\n        <ion-menu-button></ion-menu-button>\r\n      </ion-buttons>\r\n      <ion-title>Splash Screen</ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  \r\n  <ion-content>\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-label>\r\n              The Splash Screen API provides methods for showing or hiding a Splash image.\r\n          </ion-label>\r\n        </ion-col>\r\n        <ion-col>\r\n          <ion-button href=\"https://capacitor.ionicframework.com/docs/apis/splash-screen\">\r\n            <ion-icon slot=\"start\" name=\"document\"></ion-icon>\r\n            API Details\r\n          </ion-button>\r\n        </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    \r\n    <ion-item-divider></ion-item-divider>\r\n\r\n    Implementation pending.\r\n  </ion-content>"

/***/ }),

/***/ "./src/app/splash-screen/splash-screen.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/splash-screen/splash-screen.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NwbGFzaC1zY3JlZW4vc3BsYXNoLXNjcmVlbi5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/splash-screen/splash-screen.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/splash-screen/splash-screen.page.ts ***!
  \*****************************************************/
/*! exports provided: SplashScreenPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SplashScreenPage", function() { return SplashScreenPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SplashScreenPage = /** @class */ (function () {
    function SplashScreenPage() {
    }
    SplashScreenPage.prototype.ngOnInit = function () {
    };
    SplashScreenPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-splash-screen',
            template: __webpack_require__(/*! ./splash-screen.page.html */ "./src/app/splash-screen/splash-screen.page.html"),
            styles: [__webpack_require__(/*! ./splash-screen.page.scss */ "./src/app/splash-screen/splash-screen.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SplashScreenPage);
    return SplashScreenPage;
}());



/***/ })

}]);
//# sourceMappingURL=splash-screen-splash-screen-module.js.map