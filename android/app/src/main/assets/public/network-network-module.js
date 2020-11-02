(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["network-network-module"],{

/***/ "./src/app/network/network.module.ts":
/*!*******************************************!*\
  !*** ./src/app/network/network.module.ts ***!
  \*******************************************/
/*! exports provided: NetworkPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NetworkPageModule", function() { return NetworkPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _network_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./network.page */ "./src/app/network/network.page.ts");







var routes = [
    {
        path: '',
        component: _network_page__WEBPACK_IMPORTED_MODULE_6__["NetworkPage"]
    }
];
var NetworkPageModule = /** @class */ (function () {
    function NetworkPageModule() {
    }
    NetworkPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_network_page__WEBPACK_IMPORTED_MODULE_6__["NetworkPage"]]
        })
    ], NetworkPageModule);
    return NetworkPageModule;
}());



/***/ }),

/***/ "./src/app/network/network.page.html":
/*!*******************************************!*\
  !*** ./src/app/network/network.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar [color]=\"networkStatus && networkStatus.connected ? 'primary' : 'danger'\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>Network</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding>\r\n  <ion-grid>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-label>\r\n              The Network API provides events for monitoring network status changes, \r\n              along with querying the current state of the network.\r\n          </ion-label>\r\n        </ion-col>\r\n        <ion-col>\r\n          <ion-button href=\"https://capacitor.ionicframework.com/docs/apis/network\">\r\n            <ion-icon slot=\"start\" name=\"document\"></ion-icon>\r\n            API Details\r\n          </ion-button>\r\n        </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    \r\n  <ion-item-divider></ion-item-divider>\r\n\r\n  <h1>Connection status: {{ networkStatus && networkStatus.connected ? \"Online\" : \"Offline\"}}</h1>\r\n  <h2>Connection type: {{ networkStatus && networkStatus.connectionType }}</h2>\r\n\r\n  <ion-item-divider></ion-item-divider>\r\n  <p>\r\n    The Network toolbar above changes based on the device's network status. To see this yourself:\r\n  </p>\r\n\r\n  <h2>On Desktop:</h2>\r\n  <p>Open the brower's developer tools, then on the Network tab, toggle the \"Offline\" checkbox:</p>\r\n  <img src=\"assets/api-network-offline.png\"  />\r\n\r\n  <h2>On Mobile Device:</h2>\r\n  <p>Disable Wifi or toggle airplane mode then navigate back to this app.</p>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/network/network.page.scss":
/*!*******************************************!*\
  !*** ./src/app/network/network.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25ldHdvcmsvbmV0d29yay5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/network/network.page.ts":
/*!*****************************************!*\
  !*** ./src/app/network/network.page.ts ***!
  \*****************************************/
/*! exports provided: NetworkPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NetworkPage", function() { return NetworkPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/esm/index.js");



var Network = _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Plugins"].Network;
var NetworkPage = /** @class */ (function () {
    function NetworkPage() {
    }
    NetworkPage.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.networkListener = Network.addListener('networkStatusChange', function (status) {
                            _this.networkStatus = status;
                        });
                        _a = this;
                        return [4 /*yield*/, Network.getStatus()];
                    case 1:
                        _a.networkStatus = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    NetworkPage.prototype.ngOnDestroy = function () {
        this.networkListener.remove();
    };
    NetworkPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-network',
            template: __webpack_require__(/*! ./network.page.html */ "./src/app/network/network.page.html"),
            styles: [__webpack_require__(/*! ./network.page.scss */ "./src/app/network/network.page.scss")]
        })
    ], NetworkPage);
    return NetworkPage;
}());



/***/ })

}]);
//# sourceMappingURL=network-network-module.js.map