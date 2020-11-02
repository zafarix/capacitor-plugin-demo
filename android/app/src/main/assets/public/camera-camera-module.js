(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["camera-camera-module"],{

/***/ "./src/app/camera/camera.module.ts":
/*!*****************************************!*\
  !*** ./src/app/camera/camera.module.ts ***!
  \*****************************************/
/*! exports provided: CameraPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CameraPageModule", function() { return CameraPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _camera_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./camera.page */ "./src/app/camera/camera.page.ts");







var routes = [
    {
        path: '',
        component: _camera_page__WEBPACK_IMPORTED_MODULE_6__["CameraPage"]
    }
];
var CameraPageModule = /** @class */ (function () {
    function CameraPageModule() {
    }
    CameraPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_camera_page__WEBPACK_IMPORTED_MODULE_6__["CameraPage"]]
        })
    ], CameraPageModule);
    return CameraPageModule;
}());



/***/ }),

/***/ "./src/app/camera/camera.page.html":
/*!*****************************************!*\
  !*** ./src/app/camera/camera.page.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>Camera</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col>\r\n      <ion-label>\r\n          The Camera API allows a user to pick a photo from their photo album or take a picture. \r\n        </ion-label>\r\n      </ion-col>\r\n      <ion-col>\r\n          <ion-button (click)=\"takePicture()\" horizontal=\"center\">\r\n              <ion-icon slot=\"start\" name=\"camera\"></ion-icon>\r\n              Take Picture\r\n            </ion-button>\r\n          <ion-button href=\"https://capacitor.ionicframework.com/docs/apis/device\">\r\n            <ion-icon slot=\"start\" name=\"document\"></ion-icon>\r\n            API Details\r\n          </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n  <ion-item-divider></ion-item-divider>\r\n\r\n  \r\n  <img *ngIf=\"photo\" [src]=\"photo\" >\r\n  \r\n  \r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/camera/camera.page.scss":
/*!*****************************************!*\
  !*** ./src/app/camera/camera.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhbWVyYS9jYW1lcmEucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/camera/camera.page.ts":
/*!***************************************!*\
  !*** ./src/app/camera/camera.page.ts ***!
  \***************************************/
/*! exports provided: CameraPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CameraPage", function() { return CameraPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/esm/index.js");




var CameraPage = /** @class */ (function () {
    function CameraPage(sanitizer) {
        this.sanitizer = sanitizer;
    }
    CameraPage.prototype.ngOnInit = function () {
    };
    CameraPage.prototype.takePicture = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var image;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _capacitor_core__WEBPACK_IMPORTED_MODULE_3__["Plugins"].Camera.getPhoto({
                            quality: 100,
                            allowEditing: false,
                            resultType: _capacitor_core__WEBPACK_IMPORTED_MODULE_3__["CameraResultType"].DataUrl,
                            source: _capacitor_core__WEBPACK_IMPORTED_MODULE_3__["CameraSource"].Camera
                        })];
                    case 1:
                        image = _a.sent();
                        this.photo = this.sanitizer.bypassSecurityTrustResourceUrl(image && (image.dataUrl));
                        return [2 /*return*/];
                }
            });
        });
    };
    CameraPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-camera',
            template: __webpack_require__(/*! ./camera.page.html */ "./src/app/camera/camera.page.html"),
            styles: [__webpack_require__(/*! ./camera.page.scss */ "./src/app/camera/camera.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
    ], CameraPage);
    return CameraPage;
}());



/***/ })

}]);
//# sourceMappingURL=camera-camera-module.js.map