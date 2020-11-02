(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["filesystem-filesystem-module"],{

/***/ "./src/app/filesystem/filesystem.module.ts":
/*!*************************************************!*\
  !*** ./src/app/filesystem/filesystem.module.ts ***!
  \*************************************************/
/*! exports provided: FilesystemPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilesystemPageModule", function() { return FilesystemPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _filesystem_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./filesystem.page */ "./src/app/filesystem/filesystem.page.ts");







var routes = [
    {
        path: '',
        component: _filesystem_page__WEBPACK_IMPORTED_MODULE_6__["FilesystemPage"]
    }
];
var FilesystemPageModule = /** @class */ (function () {
    function FilesystemPageModule() {
    }
    FilesystemPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_filesystem_page__WEBPACK_IMPORTED_MODULE_6__["FilesystemPage"]]
        })
    ], FilesystemPageModule);
    return FilesystemPageModule;
}());



/***/ }),

/***/ "./src/app/filesystem/filesystem.page.html":
/*!*************************************************!*\
  !*** ./src/app/filesystem/filesystem.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar>\r\n      <ion-buttons slot=\"start\">\r\n        <ion-menu-button></ion-menu-button>\r\n      </ion-buttons>\r\n      <ion-title>Filesystem</ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  \r\n  <ion-content>\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-label>\r\n              The Filesystem API provides a NodeJS-like API for working \r\n              with files on the device.\r\n          </ion-label>\r\n        </ion-col>\r\n        <ion-col>\r\n          <ion-button href=\"https://capacitor.ionicframework.com/docs/apis/filesystem\">\r\n            <ion-icon slot=\"start\" name=\"document\"></ion-icon>\r\n            API Details\r\n          </ion-button>\r\n        </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    \r\n    <ion-item-divider></ion-item-divider>\r\n\r\n    Implementation pending.\r\n  </ion-content>"

/***/ }),

/***/ "./src/app/filesystem/filesystem.page.scss":
/*!*************************************************!*\
  !*** ./src/app/filesystem/filesystem.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZpbGVzeXN0ZW0vZmlsZXN5c3RlbS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/filesystem/filesystem.page.ts":
/*!***********************************************!*\
  !*** ./src/app/filesystem/filesystem.page.ts ***!
  \***********************************************/
/*! exports provided: FilesystemPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilesystemPage", function() { return FilesystemPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FilesystemPage = /** @class */ (function () {
    function FilesystemPage() {
    }
    FilesystemPage.prototype.ngOnInit = function () {
    };
    FilesystemPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-filesystem',
            template: __webpack_require__(/*! ./filesystem.page.html */ "./src/app/filesystem/filesystem.page.html"),
            styles: [__webpack_require__(/*! ./filesystem.page.scss */ "./src/app/filesystem/filesystem.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FilesystemPage);
    return FilesystemPage;
}());



/***/ })

}]);
//# sourceMappingURL=filesystem-filesystem-module.js.map