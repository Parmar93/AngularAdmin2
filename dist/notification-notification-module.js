(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["notification-notification-module"],{

/***/ "./src/app/layout/notification/notification-add/notification-add.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/layout/notification/notification-add/notification-add.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-page-header [heading]=\"'Notification'\" [icon]=\"'fa-bell'\">\r\n</app-page-header>\r\n<div class=\"card\">\r\n    <div class=\"card-body\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-3 col-xs-12\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-body\">\r\n                        <div class=\"box box-primary\">\r\n                            <div class=\"box-body box-profile\">\r\n                                <div id=\"profilePic\" class=\"profile-admin-img img-responsive img-circle\">\r\n                                    <span id=\"profilePicSpan\"></span>\r\n                                </div>\r\n                                <p class=\"text-muted text-center\">Select image to upload</p>\r\n                                <input type=\"file\" id=\"upload\" name=\"notification_image\" accept=\"image/*\">\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"col-sm-9 col-xs-12\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-8 col-xs-12\">\r\n                        <mat-form-field class=\"example-full-width\">\r\n                            <input matInput placeholder=\"*Version Name\" value=\"\">\r\n                        </mat-form-field>\r\n                    </div>\r\n                    <div class=\"col-sm-4 col-xs-12\">\r\n                        <mat-form-field class=\"example-full-width\">\r\n                            <input matInput placeholder=\"*Title\" value=\"\">\r\n                        </mat-form-field>\r\n\r\n                    </div>\r\n                    <div class=\"top-margin\"></div>\r\n                    <div class=\"col-sm-8 col-xs-12\">\r\n                        <mat-form-field class=\"example-full-width\">\r\n                            <textarea matInput placeholder=\"Leave a comment\"></textarea>\r\n                        </mat-form-field>\r\n                    </div>\r\n                    <div class=\"col-sm-4 col-xs-12\">\r\n                        <div class=\"top-margin\"></div>\r\n                        <mat-form-field>\r\n                            <mat-select placeholder=\"Platform\">\r\n                                <mat-option *ngFor=\"let platform of platforms\" [value]=\"platform.value\">\r\n                                    {{platform.viewValue}}\r\n                                </mat-option>\r\n                            </mat-select>\r\n                        </mat-form-field>\r\n                    </div>\r\n                    <div class=\"top-margin\"></div>\r\n                    <div class=\"col-sm-4 col-xs-12\">\r\n\r\n                        <mat-form-field class=\"example-full-width\">\r\n                            <input matInput [matDatepickerFilter]=\"myFilter\" [matDatepicker]=\"picker\" placeholder=\"From\">\r\n                            <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n                            <mat-datepicker #picker></mat-datepicker>\r\n                        </mat-form-field>\r\n                    </div>\r\n                    <div class=\"col-sm-4 col-xs-12\">\r\n\r\n\r\n                        <mat-form-field class=\"example-full-width\">\r\n                            <input matInput [matDatepickerFilter]=\"myFilter\" [matDatepicker]=\"picker2\" placeholder=\"To\">\r\n                            <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\r\n                            <mat-datepicker #picker2></mat-datepicker>\r\n                        </mat-form-field>\r\n\r\n                    </div>\r\n                    <div class=\"col-sm-4 col-xs-12\">\r\n                        <mat-form-field>\r\n                            <mat-select placeholder=\"Gender\">\r\n                                <mat-option *ngFor=\"let gender of genders\" [value]=\"gender.value\">\r\n                                    {{gender.viewValue}}\r\n                                </mat-option>\r\n                            </mat-select>\r\n                        </mat-form-field>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-12 col-xs-12\">\r\n\r\n                        <div class=\"btn-lists clearfix\">\r\n                            <ul>\r\n                                <li><button type=\"submit\" class=\"btn btn-default\">Save &amp; Send</button></li>\r\n                                <li><a class=\"btn btn-hide\" href=\"notification\">Cancel</a></li>\r\n                            </ul>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n    </div>"

/***/ }),

/***/ "./src/app/layout/notification/notification-add/notification-add.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/layout/notification/notification-add/notification-add.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-form-field {\n  width: 100%; }\n\n#profilePicSpan {\n  background: url(https://www.shareicon.net/download/2016/04/14/492851_admin.ico);\n  display: block;\n  height: 190px;\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  border-radius: 50%; }\n\n.box {\n  position: relative;\n  border-radius: 3px;\n  background: #fff;\n  margin-bottom: 20px;\n  width: 100%; }\n\n.profile-admin-img {\n  display: block;\n  margin: 0 auto;\n  width: 200px;\n  height: 200px;\n  padding: 3px;\n  border: 3px solid #d2d6de;\n  border-radius: 50%; }\n\ntextarea {\n  height: 60px; }\n"

/***/ }),

/***/ "./src/app/layout/notification/notification-add/notification-add.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/layout/notification/notification-add/notification-add.component.ts ***!
  \************************************************************************************/
/*! exports provided: NotificationAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationAddComponent", function() { return NotificationAddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NotificationAddComponent = /** @class */ (function () {
    function NotificationAddComponent() {
        this.platforms = [
            { value: 'Android', viewValue: 'Android' },
            { value: 'iOS', viewValue: 'iOS' },
            { value: 'All', viewValue: 'All' },
        ];
        this.genders = [
            { value: 'Male', viewValue: 'Male' },
            { value: 'Female', viewValue: 'Female' },
        ];
    }
    NotificationAddComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-notification-add',
            template: __webpack_require__(/*! ./notification-add.component.html */ "./src/app/layout/notification/notification-add/notification-add.component.html"),
            styles: [__webpack_require__(/*! ./notification-add.component.scss */ "./src/app/layout/notification/notification-add/notification-add.component.scss")],
        })
    ], NotificationAddComponent);
    return NotificationAddComponent;
}());



/***/ }),

/***/ "./src/app/layout/notification/notification-listing/notification-listing.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/layout/notification/notification-listing/notification-listing.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-page-header [heading]=\"'Notification'\" [icon]=\"'fa-bell'\">\r\n</app-page-header>\r\n<div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n        <div class=\"card\">\r\n            <div class=\"card-header\">\r\n                <div class=\"pull-right\">\r\n                    <a [routerLink]=\"['./add']\" title=\"Add New Content\" class=\"a-link btn btn-default\"><i class=\"fa fa-plus-circle\"></i> Add</a>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"card-body table-responsive\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-12 col-md-6\">\r\n                        <div class=\"pull-left\">\r\n                            <mat-form-field>\r\n                                <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Search Name, Email, Contact\">\r\n                            </mat-form-field>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm-12 col-md-6\">\r\n                        <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\r\n                    </div>\r\n                </div>\r\n                <!-- DataTable -->\r\n                <div class=\"mat-elevation-z8\">\r\n                    <table mat-table [dataSource]=\"dataSource\" matSort>\r\n\r\n                        <ng-container matColumnDef=\"id\">\r\n                            <th mat-header-cell *matHeaderCellDef mat-sort-header> ID </th>\r\n                            <td mat-cell *matCellDef=\"let row\">{{row.id}}</td>\r\n\r\n                        </ng-container>\r\n\r\n\r\n                        <ng-container matColumnDef=\"progress\">\r\n                            <th mat-header-cell *matHeaderCellDef mat-sort-header> Progress </th>\r\n                            <td mat-cell *matCellDef=\"let row\">{{row.progress}}%</td>\r\n                        </ng-container>\r\n\r\n\r\n                        <ng-container matColumnDef=\"name\">\r\n                            <th mat-header-cell *matHeaderCellDef mat-sort-header> Name </th>\r\n                            <td mat-cell *matCellDef=\"let row\">{{row.name}}</td>\r\n                        </ng-container>\r\n\r\n\r\n                        <ng-container matColumnDef=\"color\">\r\n                            <th mat-header-cell *matHeaderCellDef mat-sort-header> Color </th>\r\n                            <td mat-cell *matCellDef=\"let row\" [style.color]=\"row.color\"> {{row.color}} </td>\r\n                        </ng-container>\r\n\r\n                        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n                        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\">\r\n                        </tr>\r\n                    </table>\r\n\r\n                    <!-- <div class=\"pull-left showing-content\">\r\n                            Showing 1 to 10 of 1,571 entries (filtered from 1,606 total entries)\r\n                        </div> -->\r\n\r\n                    <!-- DataTable -->\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/layout/notification/notification-listing/notification-listing.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/layout/notification/notification-listing/notification-listing.component.scss ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/notification/notification-listing/notification-listing.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/layout/notification/notification-listing/notification-listing.component.ts ***!
  \********************************************************************************************/
/*! exports provided: NotificationListingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationListingComponent", function() { return NotificationListingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/** Constants used to fill up our data base. */
var COLORS = ['maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple',
    'fuchsia', 'lime', 'teal', 'aqua', 'blue', 'navy', 'black', 'gray'];
var NAMES = ['Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack',
    'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',
    'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];
/**
 * @title Data table with sorting, pagination, and filtering.
 */
var NotificationListingComponent = /** @class */ (function () {
    function NotificationListingComponent() {
        this.entries = [
            { value: '10', viewValue: '10' },
            { value: '50', viewValue: '50' },
            { value: '100', viewValue: '100' }
        ];
        this.displayedColumns = ['id', 'name', 'progress', 'color'];
        // Create 100 users
        var users = Array.from({ length: 100 }, function (_, k) { return createNewUser(k + 1); });
        // Assign the data to the data source for the table to render
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](users);
    }
    NotificationListingComponent.prototype.ngOnInit = function () {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    NotificationListingComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], NotificationListingComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], NotificationListingComponent.prototype, "sort", void 0);
    NotificationListingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-notification-listing',
            template: __webpack_require__(/*! ./notification-listing.component.html */ "./src/app/layout/notification/notification-listing/notification-listing.component.html"),
            styles: [__webpack_require__(/*! ./notification-listing.component.scss */ "./src/app/layout/notification/notification-listing/notification-listing.component.scss")],
        }),
        __metadata("design:paramtypes", [])
    ], NotificationListingComponent);
    return NotificationListingComponent;
}());

/** Builds and returns a new User. */
function createNewUser(id) {
    var name = NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
        NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';
    return {
        id: id.toString(),
        name: name,
        progress: Math.round(Math.random() * 100).toString(),
        color: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
    };
}


/***/ }),

/***/ "./src/app/layout/notification/notification.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/layout/notification/notification.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/layout/notification/notification.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/layout/notification/notification.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/notification/notification.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/layout/notification/notification.component.ts ***!
  \***************************************************************/
/*! exports provided: NotificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationComponent", function() { return NotificationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotificationComponent = /** @class */ (function () {
    function NotificationComponent() {
    }
    NotificationComponent.prototype.ngOnInit = function () {
    };
    NotificationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-notification',
            template: __webpack_require__(/*! ./notification.component.html */ "./src/app/layout/notification/notification.component.html"),
            styles: [__webpack_require__(/*! ./notification.component.scss */ "./src/app/layout/notification/notification.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NotificationComponent);
    return NotificationComponent;
}());



/***/ }),

/***/ "./src/app/layout/notification/notification.module.ts":
/*!************************************************************!*\
  !*** ./src/app/layout/notification/notification.module.ts ***!
  \************************************************************/
/*! exports provided: NotificationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationModule", function() { return NotificationModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _notification_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notification.component */ "./src/app/layout/notification/notification.component.ts");
/* harmony import */ var _notification_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notification.router */ "./src/app/layout/notification/notification.router.ts");
/* harmony import */ var _export_file_export_file_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../export-file/export-file.module */ "./src/app/export-file/export-file.module.ts");
/* harmony import */ var _notification_listing_notification_listing_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./notification-listing/notification-listing.component */ "./src/app/layout/notification/notification-listing/notification-listing.component.ts");
/* harmony import */ var _notification_add_notification_add_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./notification-add/notification-add.component */ "./src/app/layout/notification/notification-add/notification-add.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





//------components ----


var NotificationModule = /** @class */ (function () {
    function NotificationModule() {
    }
    NotificationModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _notification_router__WEBPACK_IMPORTED_MODULE_3__["NotificationRouterModule"],
                _export_file_export_file_module__WEBPACK_IMPORTED_MODULE_4__["ExportFileModule"],
            ],
            declarations: [
                _notification_component__WEBPACK_IMPORTED_MODULE_2__["NotificationComponent"],
                _notification_listing_notification_listing_component__WEBPACK_IMPORTED_MODULE_5__["NotificationListingComponent"],
                _notification_add_notification_add_component__WEBPACK_IMPORTED_MODULE_6__["NotificationAddComponent"]
            ]
        })
    ], NotificationModule);
    return NotificationModule;
}());



/***/ }),

/***/ "./src/app/layout/notification/notification.router.ts":
/*!************************************************************!*\
  !*** ./src/app/layout/notification/notification.router.ts ***!
  \************************************************************/
/*! exports provided: NotificationRouterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationRouterModule", function() { return NotificationRouterModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _notification_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notification.component */ "./src/app/layout/notification/notification.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _notification_listing_notification_listing_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notification-listing/notification-listing.component */ "./src/app/layout/notification/notification-listing/notification-listing.component.ts");
/* harmony import */ var _notification_add_notification_add_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./notification-add/notification-add.component */ "./src/app/layout/notification/notification-add/notification-add.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var notificationroutes = [
    {
        path: '', component: _notification_component__WEBPACK_IMPORTED_MODULE_1__["NotificationComponent"],
        children: [
            { path: '', component: _notification_listing_notification_listing_component__WEBPACK_IMPORTED_MODULE_3__["NotificationListingComponent"] },
            { path: 'add', component: _notification_add_notification_add_component__WEBPACK_IMPORTED_MODULE_4__["NotificationAddComponent"] }
        ]
    }
];
var NotificationRouterModule = /** @class */ (function () {
    function NotificationRouterModule() {
    }
    NotificationRouterModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(notificationroutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], NotificationRouterModule);
    return NotificationRouterModule;
}());



/***/ })

}]);
//# sourceMappingURL=notification-notification-module.js.map