(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["storage-storage-module"],{

/***/ "./src/app/storage/storage.module.ts":
/*!*******************************************!*\
  !*** ./src/app/storage/storage.module.ts ***!
  \*******************************************/
/*! exports provided: StoragePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoragePageModule", function() { return StoragePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _storage_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./storage.page */ "./src/app/storage/storage.page.ts");







var routes = [
    {
        path: '',
        component: _storage_page__WEBPACK_IMPORTED_MODULE_6__["StoragePage"]
    }
];
var StoragePageModule = /** @class */ (function () {
    function StoragePageModule() {
    }
    StoragePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_storage_page__WEBPACK_IMPORTED_MODULE_6__["StoragePage"]]
        })
    ], StoragePageModule);
    return StoragePageModule;
}());



/***/ }),

/***/ "./src/app/storage/storage.page.html":
/*!*******************************************!*\
  !*** ./src/app/storage/storage.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar>\r\n      <ion-buttons slot=\"start\">\r\n        <ion-menu-button></ion-menu-button>\r\n      </ion-buttons>\r\n      <ion-title>Storage</ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  \r\n  <ion-content>\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-label>\r\n              The Storage API provides a key-value store for simple data. \r\n              Mobile OS's may periodically clear data set in window.localStorage, \r\n              so this API should be used instead of window.localStorage. This \r\n              API will fall back to using localStorage when running as a \r\n              Progressive Web App. Note: this API is not meant for high-performance \r\n              data storage applications. Take a look at using SQLite or a separate \r\n              data engine if your application will store a lot of items, \r\n              have high read/write load, or require complex querying.\r\n          </ion-label>\r\n        </ion-col>\r\n        <ion-col>\r\n          <ion-button href=\"https://capacitor.ionicframework.com/docs/apis/storage\">\r\n            <ion-icon slot=\"start\" name=\"document\"></ion-icon>\r\n            API Details\r\n          </ion-button>\r\n        </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    \r\n    <ion-item-divider></ion-item-divider>\r\n\r\n    Implementation pending.\r\n  </ion-content>"

/***/ }),

/***/ "./src/app/storage/storage.page.scss":
/*!*******************************************!*\
  !*** ./src/app/storage/storage.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0b3JhZ2Uvc3RvcmFnZS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/storage/storage.page.ts":
/*!*****************************************!*\
  !*** ./src/app/storage/storage.page.ts ***!
  \*****************************************/
/*! exports provided: StoragePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoragePage", function() { return StoragePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var StoragePage = /** @class */ (function () {
    function StoragePage() {
    }
    StoragePage.prototype.ngOnInit = function () {
    };
    StoragePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-storage',
            template: __webpack_require__(/*! ./storage.page.html */ "./src/app/storage/storage.page.html"),
            styles: [__webpack_require__(/*! ./storage.page.scss */ "./src/app/storage/storage.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], StoragePage);
    return StoragePage;
}());



/***/ })

}]);
//# sourceMappingURL=storage-storage-module.js.map