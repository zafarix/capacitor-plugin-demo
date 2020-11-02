(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["toast-toast-module"],{

/***/ "./src/app/toast/toast.module.ts":
/*!***************************************!*\
  !*** ./src/app/toast/toast.module.ts ***!
  \***************************************/
/*! exports provided: ToastPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastPageModule", function() { return ToastPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _toast_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./toast.page */ "./src/app/toast/toast.page.ts");







var ToastPageModule = /** @class */ (function () {
    function ToastPageModule() {
    }
    ToastPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _toast_page__WEBPACK_IMPORTED_MODULE_6__["ToastPage"]
                    }
                ])
            ],
            declarations: [_toast_page__WEBPACK_IMPORTED_MODULE_6__["ToastPage"]]
        })
    ], ToastPageModule);
    return ToastPageModule;
}());



/***/ }),

/***/ "./src/app/toast/toast.page.html":
/*!***************************************!*\
  !*** ./src/app/toast/toast.page.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      Toast\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-label>\r\n            The Toast API provides a notification pop up for displaying important information to a user. Just like real toast!\r\n        </ion-label>\r\n      </ion-col>\r\n      <ion-col>\r\n        <ion-button href=\"https://capacitor.ionicframework.com/docs/apis/toast\">\r\n          <ion-icon slot=\"start\" name=\"document\"></ion-icon>\r\n          API Details\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n        \r\n  <ion-item-divider></ion-item-divider>\r\n\r\n  <ion-list>\r\n    <ion-item>\r\n      <ion-label>\r\n        <ion-button expand=\"full\" (click)=\"showToast()\">Show Toast</ion-button>\r\n      </ion-label>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>\r\n        <ion-button expand=\"full\" (click)=\"showToast('short')\">Show Short Toast</ion-button>\r\n      </ion-label>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>\r\n        <ion-button expand=\"full\" (click)=\"showToast('long')\">Show Long Toast</ion-button>\r\n      </ion-label>\r\n    </ion-item>\r\n  </ion-list>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/toast/toast.page.scss":
/*!***************************************!*\
  !*** ./src/app/toast/toast.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RvYXN0L3RvYXN0LnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/toast/toast.page.ts":
/*!*************************************!*\
  !*** ./src/app/toast/toast.page.ts ***!
  \*************************************/
/*! exports provided: ToastPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastPage", function() { return ToastPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/esm/index.js");



var ToastPage = /** @class */ (function () {
    function ToastPage() {
    }
    ToastPage.prototype.showToast = function (duration) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Plugins"].Toast.show({
                    duration: duration,
                    text: 'Peanut Butter Jelly Time!!'
                });
                return [2 /*return*/];
            });
        });
    };
    ToastPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-toast',
            template: __webpack_require__(/*! ./toast.page.html */ "./src/app/toast/toast.page.html"),
            styles: [__webpack_require__(/*! ./toast.page.scss */ "./src/app/toast/toast.page.scss")]
        })
    ], ToastPage);
    return ToastPage;
}());



/***/ })

}]);
//# sourceMappingURL=toast-toast-module.js.map