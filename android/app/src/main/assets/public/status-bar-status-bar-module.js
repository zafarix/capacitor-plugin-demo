(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["status-bar-status-bar-module"],{

/***/ "./src/app/status-bar/status-bar.module.ts":
/*!*************************************************!*\
  !*** ./src/app/status-bar/status-bar.module.ts ***!
  \*************************************************/
/*! exports provided: StatusBarPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusBarPageModule", function() { return StatusBarPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _status_bar_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./status-bar.page */ "./src/app/status-bar/status-bar.page.ts");







var routes = [
    {
        path: '',
        component: _status_bar_page__WEBPACK_IMPORTED_MODULE_6__["StatusBarPage"]
    }
];
var StatusBarPageModule = /** @class */ (function () {
    function StatusBarPageModule() {
    }
    StatusBarPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_status_bar_page__WEBPACK_IMPORTED_MODULE_6__["StatusBarPage"]]
        })
    ], StatusBarPageModule);
    return StatusBarPageModule;
}());



/***/ }),

/***/ "./src/app/status-bar/status-bar.page.html":
/*!*************************************************!*\
  !*** ./src/app/status-bar/status-bar.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar>\r\n      <ion-buttons slot=\"start\">\r\n        <ion-menu-button></ion-menu-button>\r\n      </ion-buttons>\r\n      <ion-title>Status Bar</ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  \r\n  <ion-content>\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-label>\r\n              The StatusBar API Provides methods for configuring the style \r\n              of the Status Bar, along with showing or hiding it.\r\n          </ion-label>\r\n        </ion-col>\r\n        <ion-col>\r\n          <ion-button href=\"https://capacitor.ionicframework.com/docs/apis/status-bar\">\r\n            <ion-icon slot=\"start\" name=\"document\"></ion-icon>\r\n            API Details\r\n          </ion-button>\r\n        </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    \r\n    <ion-item-divider></ion-item-divider>\r\n\r\n    Implementation pending.\r\n  </ion-content>"

/***/ }),

/***/ "./src/app/status-bar/status-bar.page.scss":
/*!*************************************************!*\
  !*** ./src/app/status-bar/status-bar.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0YXR1cy1iYXIvc3RhdHVzLWJhci5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/status-bar/status-bar.page.ts":
/*!***********************************************!*\
  !*** ./src/app/status-bar/status-bar.page.ts ***!
  \***********************************************/
/*! exports provided: StatusBarPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusBarPage", function() { return StatusBarPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var StatusBarPage = /** @class */ (function () {
    function StatusBarPage() {
    }
    StatusBarPage.prototype.ngOnInit = function () {
    };
    StatusBarPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-status-bar',
            template: __webpack_require__(/*! ./status-bar.page.html */ "./src/app/status-bar/status-bar.page.html"),
            styles: [__webpack_require__(/*! ./status-bar.page.scss */ "./src/app/status-bar/status-bar.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], StatusBarPage);
    return StatusBarPage;
}());



/***/ })

}]);
//# sourceMappingURL=status-bar-status-bar-module.js.map