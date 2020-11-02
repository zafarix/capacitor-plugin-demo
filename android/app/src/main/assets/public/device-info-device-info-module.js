(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["device-info-device-info-module"],{

/***/ "./src/app/device-info/device-info.module.ts":
/*!***************************************************!*\
  !*** ./src/app/device-info/device-info.module.ts ***!
  \***************************************************/
/*! exports provided: DeviceInfoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceInfoPageModule", function() { return DeviceInfoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _device_info_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./device-info.page */ "./src/app/device-info/device-info.page.ts");







var routes = [
    {
        path: '',
        component: _device_info_page__WEBPACK_IMPORTED_MODULE_6__["DeviceInfoPage"]
    }
];
var DeviceInfoPageModule = /** @class */ (function () {
    function DeviceInfoPageModule() {
    }
    DeviceInfoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_device_info_page__WEBPACK_IMPORTED_MODULE_6__["DeviceInfoPage"]]
        })
    ], DeviceInfoPageModule);
    return DeviceInfoPageModule;
}());



/***/ }),

/***/ "./src/app/device-info/device-info.page.html":
/*!***************************************************!*\
  !*** ./src/app/device-info/device-info.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>Device Information</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-label>\r\n          The Device API exposes internal information about the device, such as the model and operating system version, \r\n          along with user information such as unique ids.\r\n        </ion-label>\r\n      </ion-col>\r\n      <ion-col>\r\n        <ion-button href=\"https://capacitor.ionicframework.com/docs/apis/device\">\r\n          <ion-icon slot=\"start\" name=\"document\"></ion-icon>\r\n          API Details\r\n        </ion-button>\r\n      </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  \r\n  <ion-item-divider></ion-item-divider>\r\n  \r\n  <ion-list>\r\n    <ion-list-header class=\"key\">DEVICE INFO:</ion-list-header>\r\n    <ion-item>\r\n      <ion-label>\r\n        <div class=\"key\">Language Code</div>\r\n        <div class=\"value\">{{ lang?.value }}</div>\r\n      </ion-label>\r\n    </ion-item>\r\n    <ion-item *ngIf=\"info && info.appVersion\">\r\n      <ion-label>\r\n        <div class=\"key\">Application Version</div>\r\n        <div class=\"value\">{{ info.appVersion }}</div>\r\n      </ion-label>\r\n    </ion-item>\r\n    <ion-item *ngIf=\"info && info.batteryLevel\">\r\n      <ion-label>\r\n        <div class=\"key\">Battery Level</div>\r\n        <div class=\"value\">{{ info.batteryLevel | percent }}</div>\r\n      </ion-label>\r\n    </ion-item>\r\n    <ion-item *ngIf=\"info && info.diskFree\">\r\n      <ion-label>\r\n        <div class=\"key\">Disk Free</div>\r\n        <div class=\"value\">{{ info.diskFree | number }}</div>\r\n      </ion-label>\r\n    </ion-item>\r\n    <ion-item *ngIf=\"info && info.diskTotal\">\r\n      <ion-label>\r\n        <div class=\"key\">Disk Total</div>\r\n        <div class=\"value\">{{ info.diskTotal | number }}</div>\r\n      </ion-label>\r\n    </ion-item>\r\n    <ion-item *ngIf=\"info && info.isCharging\">\r\n      <ion-label>\r\n        <div class=\"key\">Is Charging</div>\r\n        <div class=\"value\">{{ info.isCharging }}</div>\r\n      </ion-label>\r\n    </ion-item>\r\n    <ion-item *ngIf=\"info && info.isVirtual\">\r\n      <ion-label>\r\n        <div class=\"key\">Is Virtual</div>\r\n        <div class=\"value\">{{ info.isVirtual }}</div>\r\n      </ion-label>\r\n    </ion-item>\r\n    <ion-item *ngIf=\"info && info.manufacturer\">\r\n      <ion-label>\r\n        <div class=\"key\">Manufacturer</div>\r\n        <div class=\"value\">{{ info.manufacturer }}</div>\r\n      </ion-label>\r\n    </ion-item>\r\n    <ion-item *ngIf=\"info && info.model\">\r\n      <ion-label>\r\n        <div class=\"key\">Model</div>\r\n        <div class=\"value\">{{ info.model }}</div>\r\n      </ion-label>\r\n    </ion-item>\r\n    <ion-item *ngIf=\"info && info.memUsed\">\r\n      <ion-label>\r\n        <div class=\"key\">Memory Used</div>\r\n        <div class=\"value\">{{ info.memUsed | number }}</div>\r\n      </ion-label>\r\n    </ion-item>\r\n    <ion-item *ngIf=\"info && info.osVersion\">\r\n      <ion-label>\r\n        <div class=\"key\">OS Version</div>\r\n        <div class=\"value\">{{ info.osVersion }}</div>\r\n      </ion-label>\r\n    </ion-item>\r\n    <ion-item *ngIf=\"info && info.platform\">\r\n      <ion-label>\r\n        <div class=\"key\">Platform</div>\r\n        <div class=\"value\">{{ info.platform }}</div>\r\n      </ion-label>\r\n    </ion-item>\r\n    <ion-item *ngIf=\"info && info.uuid\">\r\n      <ion-label>\r\n        <div class=\"key\">UUID</div>\r\n        <div class=\"value\">{{ info.uuid }}</div>\r\n      </ion-label>\r\n    </ion-item>\r\n  </ion-list>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/device-info/device-info.page.scss":
/*!***************************************************!*\
  !*** ./src/app/device-info/device-info.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div {\n  display: inline-block; }\n\n.key {\n  width: 11em;\n  font-weight: bold; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGV2aWNlLWluZm8vQzpcXFVzZXJzXFxERUxMXFxjYXBhY2l0b3ItcGx1Z2luLWRlbW8vc3JjXFxhcHBcXGRldmljZS1pbmZvXFxkZXZpY2UtaW5mby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBcUIsRUFBQTs7QUFHdkI7RUFDRSxXQUFXO0VBQ1gsaUJBQWlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9kZXZpY2UtaW5mby9kZXZpY2UtaW5mby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLmtleSB7XHJcbiAgd2lkdGg6IDExZW07XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/device-info/device-info.page.ts":
/*!*************************************************!*\
  !*** ./src/app/device-info/device-info.page.ts ***!
  \*************************************************/
/*! exports provided: DeviceInfoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceInfoPage", function() { return DeviceInfoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/esm/index.js");



var DeviceInfoPage = /** @class */ (function () {
    function DeviceInfoPage() {
    }
    DeviceInfoPage.prototype.ionViewDidEnter = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a, _b;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Plugins"].Device.getInfo()];
                    case 1:
                        _a.info = _c.sent();
                        _b = this;
                        return [4 /*yield*/, _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Plugins"].Device.getLanguageCode()];
                    case 2:
                        _b.lang = _c.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DeviceInfoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-device-info',
            template: __webpack_require__(/*! ./device-info.page.html */ "./src/app/device-info/device-info.page.html"),
            styles: [__webpack_require__(/*! ./device-info.page.scss */ "./src/app/device-info/device-info.page.scss")]
        })
    ], DeviceInfoPage);
    return DeviceInfoPage;
}());



/***/ })

}]);
//# sourceMappingURL=device-info-device-info-module.js.map