(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./src/app/login/login-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/*! exports provided: LoginRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginRoutingModule", function() { return LoginRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.component */ "./src/app/login/login.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]
    }
];
var LoginRoutingModule = /** @class */ (function () {
    function LoginRoutingModule() {
    }
    LoginRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], LoginRoutingModule);
    return LoginRoutingModule;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-page\" [@routerTransition]>\n\n\n\n\n    <div class=\"form-bg-container\">\n        <div class=\"form-wraper\">\n            <div class=\"logo-wrapper\">\n                <div class=\"verticle-table\">\n                    <div class=\"verticle-table-cell\">\n                        <img src=\"assets/images/logo.png\" alt=\"Logo\" />\n                        <p>RCC is a solution-oriented architectured.</p>\n                    </div>\n                </div>\n            </div>\n            <div class=\"fields-wrapper\">\n                <div class=\"fields-inner-wrapper\">\n\n                    <form class=\"login-form-wrapper\" [@LoginFormAnimation]='state'>\n                        <h1>Login</h1>\n                        <span>Enter your details below to access \n                                     your account.</span>\n                        <div class=\"row\">\n\n                            <div class=\"col-md-12\">\n                                <div class=\"form-group\">\n                                    <mat-form-field class=\"example-full-width\">\n                                        <input matInput placeholder=\"Email address\" type=\"email\">\n                                    </mat-form-field>\n                                </div>\n                            </div>\n                            <div class=\"col-md-12\">\n                                <div class=\"form-group\">\n                                    <mat-form-field class=\"example-full-width\">\n                                        <input matInput placeholder=\"Password\" type=\"password\">\n                                    </mat-form-field>\n                                </div>\n                            </div>\n                            <div class=\"col-md-6\">\n                                <div class=\"form-group\">\n                                    <mat-checkbox class=\"remember\">Remember</mat-checkbox>\n                                </div>\n                            </div>\n                            <div class=\"col-md-6 pull-right\">\n                                <div class=\"form-group\">\n                                    <button type=\"button\" title=\"Forgot Password\" (click)=\"openform()\" class=\"forgot-pass pull-right\" [class.active]=\"isActive\">Forgot Password</button>\n                                </div>\n                            </div>\n                            <div class=\"col-md-6 pull-left\">\n                                <button type=\"submit\" [routerLink]=\"['/dashboard']\" class=\"btn pull-left btn-default\" (click)=\"onLoggedin()\">Log in</button>\n                            </div>\n\n                        </div>\n                    </form>\n\n                    <!-- Forgot password Form starts-->\n                    <form class=\"forgot-form-wrapper\" [@formAnimation]='state'>\n                        <h1>FORGOT PASSWORD</h1>\n                        <span>Forgot your password? Don't Worry. \n                                Send us your registered email address and we will send you steps to reset your password.</span>\n                        <div class=\"row\">\n\n                            <div class=\"col-md-12\">\n                                <div class=\"form-group\">\n                                    <mat-form-field class=\"example-full-width\">\n                                        <input matInput placeholder=\"Email address\" type=\"email\">\n                                    </mat-form-field>\n                                </div>\n                            </div>\n\n                            <div class=\"col-md-12 pull-left\">\n                                <div class=\"btn-lists clearfix\">\n                                    <ul>\n                                        <li><button type=\"submit\" [routerLink]=\"['/dashboard']\" class=\"btn pull-left btn-default\">Log in</button></li>\n                                        <li> <a class=\"btn pull-left btn-hide\" (click)=\"closeform()\"> Back </a></li>\n                                    </ul>\n\n                                </div>\n                            </div>\n                        </div>\n\n\n                    </form>\n                    <!-- Forgot password Form ends-->\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-wraper {\n  position: relative;\n  background: #ffffff;\n  width: 800px;\n  padding: 0 0 0 400px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); }\n\n.form-bg-container {\n  min-height: 100vh;\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n\n.fields-inner-wrapper {\n  width: 100%;\n  height: auto;\n  background: #fff;\n  transition: all 0.3s ease-in-out; }\n\n.fields-inner-wrapper span {\n    display: block;\n    line-height: 20px;\n    padding: 0 0 20px 0;\n    font-size: 14px; }\n\n.fields-inner-wrapper h1 {\n    font-size: 28px;\n    margin: 0 0 20px 0; }\n\n.fields-inner-wrapper form {\n    margin: 0; }\n\n.fields-inner-wrapper .mat-input-ripple {\n    background-color: #2a304a !important; }\n\n.fields-inner-wrapper .mat-focused .mat-input-placeholder {\n    color: #2a304a !important; }\n\n.fields-inner-wrapper .btn {\n    margin: 15px 0 0; }\n\n.common-btn {\n  background: #bd2130;\n  color: #fff; }\n\n.logo-wrapper {\n  width: 400px;\n  float: left;\n  border-right: solid 1px #eaeaea;\n  margin: 40px 0;\n  position: absolute;\n  left: 0;\n  top: 0;\n  text-align: center;\n  bottom: 0;\n  padding: 40px 40px 0 30px; }\n\n.fields-wrapper {\n  position: relative;\n  overflow: hidden;\n  min-height: 450px;\n  width: 400px; }\n\n.verticle-table {\n  display: table;\n  width: 100%;\n  height: 100%; }\n\n.verticle-table-cell {\n  display: table-cell;\n  vertical-align: middle; }\n\ninput:-webkit-autofill {\n  box-shadow: 0 0 0px 1000px white inset; }\n\n.forgot-pass {\n  color: #757575;\n  font-size: 14px;\n  background: none;\n  border: none;\n  cursor: pointer;\n  outline: none; }\n\n.forgot-form-wrapper {\n  position: absolute;\n  top: 50%;\n  width: 400px;\n  height: auto;\n  padding: 40px;\n  background: #fff;\n  transition: all 0.3s ease-in-out;\n  -webkit-transform: translateY(-50%);\n  transform: translateY(-50%);\n  -moz-transform: translateY(-50%); }\n\n.login-form-wrapper {\n  position: absolute;\n  left: 0;\n  top: 50%;\n  width: 100%;\n  height: auto;\n  padding: 40px;\n  background: #fff;\n  -webkit-transform: translateY(-50%);\n  transform: translateY(-50%);\n  -moz-transform: translateY(-50%);\n  transition: all 0.3s ease-in-out; }\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../router.animations */ "./src/app/router.animations.ts");
/* harmony import */ var _node_modules_angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/@angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(router) {
        this.router = router;
        // Form Animation
        this.state = 'small';
    }
    LoginComponent.prototype.openform = function () {
        this.state = (this.state === 'small' ? 'large' : 'small');
    };
    // Form Animation close
    LoginComponent.prototype.closeform = function () {
        this.state = (this.state === 'large' ? 'small' : 'large');
    };
    LoginComponent.prototype.ngOnInit = function () { };
    LoginComponent.prototype.onLoggedin = function () {
        localStorage.setItem('isLoggedin', 'true');
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")],
            // Form Animation
            animations: [[Object(_router_animations__WEBPACK_IMPORTED_MODULE_2__["routerTransition"])()],
                Object(_node_modules_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('formAnimation', [
                    Object(_node_modules_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('small', Object(_node_modules_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
                        right: '-400px',
                    })),
                    Object(_node_modules_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('large', Object(_node_modules_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
                        right: '0',
                    })),
                    Object(_node_modules_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('small => large', Object(_node_modules_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('500ms ease-in')),
                    Object(_node_modules_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('small <=> large', Object(_node_modules_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('500ms ease-in')),
                ]),
                Object(_node_modules_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('LoginFormAnimation', [
                    Object(_node_modules_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('small', Object(_node_modules_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
                        left: '0',
                    })),
                    Object(_node_modules_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('large', Object(_node_modules_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
                        left: '-400px',
                    })),
                    Object(_node_modules_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('small => large', Object(_node_modules_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('500ms ease-in')),
                    Object(_node_modules_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('small <=> large', Object(_node_modules_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('500ms ease-in')),
                ]),
            ]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/login/login-routing.module.ts");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm5/checkbox.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var LoginModule = /** @class */ (function () {
    function LoginModule() {
    }
    LoginModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _login_routing_module__WEBPACK_IMPORTED_MODULE_2__["LoginRoutingModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"]
            ],
            declarations: [_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]]
        })
    ], LoginModule);
    return LoginModule;
}());



/***/ })

}]);
//# sourceMappingURL=login-login-module.js.map