(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["accessibility-accessibility-module"],{

/***/ "./src/app/accessibility/accessibility.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/accessibility/accessibility.module.ts ***!
  \*******************************************************/
/*! exports provided: AccessibilityPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccessibilityPageModule", function() { return AccessibilityPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _accessibility_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./accessibility.page */ "./src/app/accessibility/accessibility.page.ts");







var routes = [
    {
        path: '',
        component: _accessibility_page__WEBPACK_IMPORTED_MODULE_6__["AccessibilityPage"]
    }
];
var AccessibilityPageModule = /** @class */ (function () {
    function AccessibilityPageModule() {
    }
    AccessibilityPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_accessibility_page__WEBPACK_IMPORTED_MODULE_6__["AccessibilityPage"]]
        })
    ], AccessibilityPageModule);
    return AccessibilityPageModule;
}());



/***/ }),

/***/ "./src/app/accessibility/accessibility.page.html":
/*!*******************************************************!*\
  !*** ./src/app/accessibility/accessibility.page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar>\r\n      <ion-buttons slot=\"start\">\r\n        <ion-menu-button></ion-menu-button>\r\n      </ion-buttons>\r\n      <ion-title>\r\n        Accessibility\r\n      </ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  \r\n  <ion-content>\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-label>\r\n              The Accessibility API makes it easy to know when a user has a screen reader enabled, as well as programmatically \r\n              speaking labels through the connected screen reader.\r\n          </ion-label>\r\n          <ion-label color=\"danger\">Note:</ion-label>\r\n        <ion-label> Currently no web implementation.</ion-label>\r\n        </ion-col>\r\n        <ion-col>\r\n          <ion-button href=\"https://capacitor.ionicframework.com/docs/apis/accessibility\">\r\n            <ion-icon slot=\"start\" name=\"document\"></ion-icon>\r\n            API Details\r\n          </ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n          \r\n  <ion-item-divider></ion-item-divider>\r\n\r\n  <ion-item>\r\n      <ion-label>\r\n        Is screenreader enabled? <ion-note color=\"secondary\">{{ isVoiceOverEnabled }}</ion-note>\r\n      </ion-label>\r\n    </ion-item>\r\n    <ion-item>  \r\n      <ion-label>Enter some text to speak:</ion-label>\r\n      <ion-input placeholder=\"What's on your mind?\" [(ngModel)]=\"textToSpeak\"></ion-input>    \r\n      <ion-button (click)=\"speak()\">\r\n        <ion-icon slot=\"start\" name=\"document\"></ion-icon>\r\n        Speak!\r\n      </ion-button>\r\n    </ion-item>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/accessibility/accessibility.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/accessibility/accessibility.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjY2Vzc2liaWxpdHkvYWNjZXNzaWJpbGl0eS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/accessibility/accessibility.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/accessibility/accessibility.page.ts ***!
  \*****************************************************/
/*! exports provided: AccessibilityPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccessibilityPage", function() { return AccessibilityPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/esm/index.js");



var AccessibilityPage = /** @class */ (function () {
    function AccessibilityPage() {
    }
    AccessibilityPage.prototype.ngOnInit = function () {
        this.checkVoiceOverEnabled();
    };
    AccessibilityPage.prototype.checkVoiceOverEnabled = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var voResult;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!_capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Capacitor"].isPluginAvailable('Accessibility')) return [3 /*break*/, 2];
                        return [4 /*yield*/, _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Plugins"].Accessibility.isScreenReaderEnabled()];
                    case 1:
                        voResult = _a.sent();
                        this.isVoiceOverEnabled = voResult.value;
                        return [3 /*break*/, 3];
                    case 2:
                        this.isVoiceOverEnabled = false;
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    AccessibilityPage.prototype.speak = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                if (_capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Capacitor"].isPluginAvailable('Accessibility')) {
                    _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Plugins"].Accessibility.speak({ value: this.textToSpeak });
                }
                else {
                    alert("I'm afraid I can't do that, Dave... because this API isn't available on this platform.");
                }
                return [2 /*return*/];
            });
        });
    };
    AccessibilityPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-accessibility',
            template: __webpack_require__(/*! ./accessibility.page.html */ "./src/app/accessibility/accessibility.page.html"),
            styles: [__webpack_require__(/*! ./accessibility.page.scss */ "./src/app/accessibility/accessibility.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AccessibilityPage);
    return AccessibilityPage;
}());



/***/ })

}]);
//# sourceMappingURL=accessibility-accessibility-module.js.map