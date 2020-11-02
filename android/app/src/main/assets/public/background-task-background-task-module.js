(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["background-task-background-task-module"],{

/***/ "./src/app/background-task/background-task.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/background-task/background-task.module.ts ***!
  \***********************************************************/
/*! exports provided: BackgroundTaskPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackgroundTaskPageModule", function() { return BackgroundTaskPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _background_task_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./background-task.page */ "./src/app/background-task/background-task.page.ts");







var routes = [
    {
        path: '',
        component: _background_task_page__WEBPACK_IMPORTED_MODULE_6__["BackgroundTaskPage"]
    }
];
var BackgroundTaskPageModule = /** @class */ (function () {
    function BackgroundTaskPageModule() {
    }
    BackgroundTaskPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_background_task_page__WEBPACK_IMPORTED_MODULE_6__["BackgroundTaskPage"]]
        })
    ], BackgroundTaskPageModule);
    return BackgroundTaskPageModule;
}());



/***/ }),

/***/ "./src/app/background-task/background-task.page.html":
/*!***********************************************************!*\
  !*** ./src/app/background-task/background-task.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar>\r\n      <ion-buttons slot=\"start\">\r\n        <ion-menu-button></ion-menu-button>\r\n      </ion-buttons>\r\n      <ion-title>Background Task</ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  \r\n  <ion-content>\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-label>\r\n              The Background Task API makes it easy to run background tasks. \r\n              Currently, this plugin supports running a task when the app is backgrounded, \r\n              and soon will support periodic background fetch operations.\r\n          </ion-label>\r\n        </ion-col>\r\n        <ion-col>\r\n          <ion-button href=\"https://capacitor.ionicframework.com/docs/apis/background-task\">\r\n            <ion-icon slot=\"start\" name=\"document\"></ion-icon>\r\n            API Details\r\n          </ion-button>\r\n        </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    \r\n    <ion-item-divider></ion-item-divider>\r\n\r\n    Implementation pending.\r\n  </ion-content>"

/***/ }),

/***/ "./src/app/background-task/background-task.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/background-task/background-task.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JhY2tncm91bmQtdGFzay9iYWNrZ3JvdW5kLXRhc2sucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/background-task/background-task.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/background-task/background-task.page.ts ***!
  \*********************************************************/
/*! exports provided: BackgroundTaskPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackgroundTaskPage", function() { return BackgroundTaskPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BackgroundTaskPage = /** @class */ (function () {
    function BackgroundTaskPage() {
    }
    BackgroundTaskPage.prototype.ngOnInit = function () {
    };
    BackgroundTaskPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-background-task',
            template: __webpack_require__(/*! ./background-task.page.html */ "./src/app/background-task/background-task.page.html"),
            styles: [__webpack_require__(/*! ./background-task.page.scss */ "./src/app/background-task/background-task.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BackgroundTaskPage);
    return BackgroundTaskPage;
}());



/***/ })

}]);
//# sourceMappingURL=background-task-background-task-module.js.map