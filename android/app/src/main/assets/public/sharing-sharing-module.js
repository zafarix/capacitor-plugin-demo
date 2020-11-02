(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sharing-sharing-module"],{

/***/ "./src/app/sharing/sharing.module.ts":
/*!*******************************************!*\
  !*** ./src/app/sharing/sharing.module.ts ***!
  \*******************************************/
/*! exports provided: SharingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharingPageModule", function() { return SharingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _sharing_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sharing.page */ "./src/app/sharing/sharing.page.ts");







var routes = [
    {
        path: '',
        component: _sharing_page__WEBPACK_IMPORTED_MODULE_6__["SharingPage"]
    }
];
var SharingPageModule = /** @class */ (function () {
    function SharingPageModule() {
    }
    SharingPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_sharing_page__WEBPACK_IMPORTED_MODULE_6__["SharingPage"]]
        })
    ], SharingPageModule);
    return SharingPageModule;
}());



/***/ }),

/***/ "./src/app/sharing/sharing.page.html":
/*!*******************************************!*\
  !*** ./src/app/sharing/sharing.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>Sharing</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-label>\r\n            The Share API provides methods for sharing content \r\n            in any sharing-enabled apps the user may have installed.\r\n        </ion-label>\r\n        <ion-label color=\"danger\">Note:</ion-label>\r\n        <ion-label> The Share API works on iOS, Android, and the Web (using the new Web Share API), though web support is currently spotty.</ion-label>\r\n      </ion-col>\r\n      <ion-col>\r\n        <ion-button href=\"https://capacitor.ionicframework.com/docs/apis/share\">\r\n          <ion-icon slot=\"start\" name=\"document\"></ion-icon>\r\n          API Details\r\n        </ion-button>\r\n      </ion-col>\r\n      </ion-row>\r\n  </ion-grid>\r\n    \r\n  <ion-item-divider></ion-item-divider>\r\n\r\n  <ion-list>\r\n    <ion-item>\r\n      <ion-label>\r\n        <ion-button expand=\"full\" (click)=\"shareCats()\"\r\n          >Share Important Cat Information</ion-button\r\n        >\r\n      </ion-label>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>\r\n        <ion-button expand=\"full\" (click)=\"shareDogs()\"\r\n          >Share Dog Data</ion-button\r\n        >\r\n      </ion-label>\r\n    </ion-item>\r\n  </ion-list>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/sharing/sharing.page.scss":
/*!*******************************************!*\
  !*** ./src/app/sharing/sharing.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJpbmcvc2hhcmluZy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/sharing/sharing.page.ts":
/*!*****************************************!*\
  !*** ./src/app/sharing/sharing.page.ts ***!
  \*****************************************/
/*! exports provided: SharingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharingPage", function() { return SharingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/esm/index.js");



var SharingPage = /** @class */ (function () {
    function SharingPage() {
    }
    SharingPage.prototype.shareCats = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var err_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Plugins"].Share.share({
                                title: 'Treat Your Cat Right',
                                text: 'Really important information you need to read right meow 😻!',
                                url: 'http://www.vetstreet.com/cats/',
                                dialogTitle: 'Share with cool cat lovers'
                            })];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        err_1 = _a.sent();
                        console.log('caught error:', err_1.name);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    SharingPage.prototype.shareDogs = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Plugins"].Share.share({
                            title: 'Treat Your Dog',
                            text: 'Dogs need love too, I guess... 🐶',
                            url: 'http://www.vetstreet.com/dogs/',
                            dialogTitle: 'Share with those dog people'
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SharingPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sharing',
            template: __webpack_require__(/*! ./sharing.page.html */ "./src/app/sharing/sharing.page.html"),
            styles: [__webpack_require__(/*! ./sharing.page.scss */ "./src/app/sharing/sharing.page.scss")]
        })
    ], SharingPage);
    return SharingPage;
}());



/***/ })

}]);
//# sourceMappingURL=sharing-sharing-module.js.map