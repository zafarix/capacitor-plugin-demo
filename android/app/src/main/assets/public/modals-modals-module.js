(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modals-modals-module"],{

/***/ "./src/app/modals/modals.module.ts":
/*!*****************************************!*\
  !*** ./src/app/modals/modals.module.ts ***!
  \*****************************************/
/*! exports provided: ModalsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalsPageModule", function() { return ModalsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _modals_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modals.page */ "./src/app/modals/modals.page.ts");







var ModalsPageModule = /** @class */ (function () {
    function ModalsPageModule() {
    }
    ModalsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _modals_page__WEBPACK_IMPORTED_MODULE_6__["ModalsPage"]
                    }
                ])
            ],
            declarations: [_modals_page__WEBPACK_IMPORTED_MODULE_6__["ModalsPage"]]
        })
    ], ModalsPageModule);
    return ModalsPageModule;
}());



/***/ }),

/***/ "./src/app/modals/modals.page.html":
/*!*****************************************!*\
  !*** ./src/app/modals/modals.page.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      Modals\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-grid>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-label>\r\n              The Modals API provides methods for triggering native modal windows for alerts, \r\n              confirmations, and input prompts, as well as Action Sheets.\r\n          </ion-label>\r\n        </ion-col>\r\n        <ion-col>\r\n          <ion-button href=\"https://capacitor.ionicframework.com/docs/apis/modals\">\r\n            <ion-icon slot=\"start\" name=\"document\"></ion-icon>\r\n            API Details\r\n          </ion-button>\r\n        </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    \r\n  <ion-item-divider></ion-item-divider>\r\n\r\n  <ion-list>\r\n    <ion-item>\r\n      <ion-label>\r\n        <ion-button expand=\"full\" (click)=\"showAlert()\">Show Alert</ion-button>\r\n      </ion-label>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>\r\n        <ion-button expand=\"full\" (click)=\"showConfirm()\">Confirm Good Taste</ion-button>\r\n      </ion-label>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>\r\n        <ion-button expand=\"full\" (click)=\"showPrompt()\">Get a Parrot</ion-button>\r\n      </ion-label>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>\r\n        <ion-button expand=\"full\" (click)=\"showActions()\">Interact with Cat</ion-button>\r\n      </ion-label>\r\n    </ion-item>\r\n  </ion-list>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/modals/modals.page.scss":
/*!*****************************************!*\
  !*** ./src/app/modals/modals.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card ion-img {\n  max-height: 35vh;\n  overflow: hidden; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kYWxzL0M6XFxVc2Vyc1xcREVMTFxcY2FwYWNpdG9yLXBsdWdpbi1kZW1vL3NyY1xcYXBwXFxtb2RhbHNcXG1vZGFscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tb2RhbHMvbW9kYWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53ZWxjb21lLWNhcmQgaW9uLWltZyB7XHJcbiAgbWF4LWhlaWdodDogMzV2aDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/modals/modals.page.ts":
/*!***************************************!*\
  !*** ./src/app/modals/modals.page.ts ***!
  \***************************************/
/*! exports provided: ModalsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalsPage", function() { return ModalsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/esm/index.js");



var ModalsPage = /** @class */ (function () {
    function ModalsPage() {
    }
    ModalsPage.prototype.showAlert = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Plugins"].Modals.alert({
                            message: 'And I dance, dance, dance',
                            title: 'Kitty Cat'
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ModalsPage.prototype.showConfirm = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var response, opt;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Plugins"].Modals.confirm({
                            title: 'Obtain Pet',
                            message: 'We would like to give you a cat!! Do you accept?'
                        })];
                    case 1:
                        response = _a.sent();
                        opt = response.value
                            ? {
                                message: 'You clearly have good taste!!',
                                title: '😻Kitty Cat😻'
                            }
                            : {
                                message: 'You must be one of those dog people!!',
                                title: '🐶Ewwwww🐶'
                            };
                        return [4 /*yield*/, _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Plugins"].Modals.alert(opt)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ModalsPage.prototype.showPrompt = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var response;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Plugins"].Modals.prompt({
                            title: 'Parrot',
                            message: 'I just echo back whatever you say, so say something!',
                            inputPlaceholder: 'Polly wanna cracker?',
                            okButtonTitle: 'Speak',
                            cancelButtonTitle: 'Hush'
                        })];
                    case 1:
                        response = _a.sent();
                        if (!(response.value && !response.cancelled)) return [3 /*break*/, 3];
                        return [4 /*yield*/, _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Plugins"].Modals.alert({
                                title: 'Polly',
                                message: response.value
                            })];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ModalsPage.prototype.showActions = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var response, opt;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Plugins"].Modals.showActions({
                            title: '😸Actions😽',
                            message: 'What would you like to do with your cat?',
                            options: [
                                {
                                    title: 'Let it Sleep'
                                },
                                {
                                    title: 'Feed it'
                                },
                                {
                                    title: 'Pet it'
                                },
                                {
                                    title: 'Allow it to sit on your lap'
                                },
                                {
                                    title: 'Rub tummy',
                                    style: _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["ActionSheetOptionStyle"].Destructive
                                }
                            ]
                        })];
                    case 1:
                        response = _a.sent();
                        opt = response.index === 4
                            ? {
                                message: 'Grrrrrr!!',
                                title: '😾😾😾'
                            }
                            : {
                                message: 'Purr Purr Purr',
                                title: '😻😻😻'
                            };
                        return [4 /*yield*/, _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Plugins"].Modals.alert(opt)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ModalsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-modals',
            template: __webpack_require__(/*! ./modals.page.html */ "./src/app/modals/modals.page.html"),
            styles: [__webpack_require__(/*! ./modals.page.scss */ "./src/app/modals/modals.page.scss")]
        })
    ], ModalsPage);
    return ModalsPage;
}());



/***/ })

}]);
//# sourceMappingURL=modals-modals-module.js.map