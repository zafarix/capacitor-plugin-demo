(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["push-notifications-push-notifications-module"],{

/***/ "./src/app/push-notifications/push-notifications.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/push-notifications/push-notifications.module.ts ***!
  \*****************************************************************/
/*! exports provided: PushNotificationsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PushNotificationsPageModule", function() { return PushNotificationsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _push_notifications_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./push-notifications.page */ "./src/app/push-notifications/push-notifications.page.ts");







var routes = [
    {
        path: '',
        component: _push_notifications_page__WEBPACK_IMPORTED_MODULE_6__["PushNotificationsPage"]
    }
];
var PushNotificationsPageModule = /** @class */ (function () {
    function PushNotificationsPageModule() {
    }
    PushNotificationsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_push_notifications_page__WEBPACK_IMPORTED_MODULE_6__["PushNotificationsPage"]]
        })
    ], PushNotificationsPageModule);
    return PushNotificationsPageModule;
}());



/***/ }),

/***/ "./src/app/push-notifications/push-notifications.page.html":
/*!*****************************************************************!*\
  !*** ./src/app/push-notifications/push-notifications.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar>\r\n      <ion-buttons slot=\"start\">\r\n        <ion-menu-button></ion-menu-button>\r\n      </ion-buttons>\r\n      <ion-title>Push Notifications</ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  \r\n  <ion-content>\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-label>\r\n              The Push Notifications API provides methods for registering \r\n              a device to receive notifications from a server, along with \r\n              processing received notifications and responding to them. \r\n              In contrast, the Local Notifications API provides means \r\n              for offline, local notification scheduling and processing.\r\n          </ion-label>\r\n        </ion-col>\r\n        <ion-col>\r\n          <ion-button href=\"https://capacitor.ionicframework.com/docs/apis/push-notifications\">\r\n            <ion-icon slot=\"start\" name=\"document\"></ion-icon>\r\n            API Details\r\n          </ion-button>\r\n        </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    \r\n    <ion-item-divider></ion-item-divider>\r\n\r\n    Implementation pending.\r\n  </ion-content>"

/***/ }),

/***/ "./src/app/push-notifications/push-notifications.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/push-notifications/push-notifications.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3B1c2gtbm90aWZpY2F0aW9ucy9wdXNoLW5vdGlmaWNhdGlvbnMucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/push-notifications/push-notifications.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/push-notifications/push-notifications.page.ts ***!
  \***************************************************************/
/*! exports provided: PushNotificationsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PushNotificationsPage", function() { return PushNotificationsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PushNotificationsPage = /** @class */ (function () {
    function PushNotificationsPage() {
    }
    PushNotificationsPage.prototype.ngOnInit = function () {
    };
    PushNotificationsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-push-notifications',
            template: __webpack_require__(/*! ./push-notifications.page.html */ "./src/app/push-notifications/push-notifications.page.html"),
            styles: [__webpack_require__(/*! ./push-notifications.page.scss */ "./src/app/push-notifications/push-notifications.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PushNotificationsPage);
    return PushNotificationsPage;
}());



/***/ })

}]);
//# sourceMappingURL=push-notifications-push-notifications-module.js.map