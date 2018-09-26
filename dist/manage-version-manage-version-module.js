(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["manage-version-manage-version-module"],{

/***/ "./src/app/layout/manage-version/manage-version-add/manage-version-add.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/layout/manage-version/manage-version-add/manage-version-add.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-page-header [heading]=\"'Manage Version'\" [icon]=\"'fa-file'\">\r\n</app-page-header>\r\n<div class=\"card\">\r\n    <div class=\"card-body\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-8 col-xs-12\">\r\n                <mat-form-field class=\"example-full-width\">\r\n                    <input matInput placeholder=\"*Version Name\" value=\"\">\r\n                </mat-form-field>\r\n            </div>\r\n            <div class=\"col-sm-4 col-xs-12\">\r\n                <mat-form-field class=\"example-full-width\">\r\n                    <input matInput placeholder=\"*Title\" value=\"\">\r\n                </mat-form-field>\r\n\r\n            </div>\r\n            <div class=\"top-margin\"></div>\r\n            <div class=\"col-sm-12 col-xs-12\">\r\n                <mat-form-field class=\"example-full-width\">\r\n                    <textarea matInput placeholder=\"Leave a comment\"></textarea>\r\n                </mat-form-field>\r\n            </div>\r\n            <div class=\"top-margin\"></div>\r\n            <div class=\"col-sm-4 col-xs-12\">\r\n                <mat-form-field>\r\n                    <mat-select placeholder=\"Platform\">\r\n                        <mat-option *ngFor=\"let platform of platforms\" [value]=\"platform.value\">\r\n                            {{platform.viewValue}}\r\n                        </mat-option>\r\n                    </mat-select>\r\n                </mat-form-field>\r\n            </div>\r\n            <div class=\"col-sm-4 col-xs-12\">\r\n                <mat-form-field>\r\n                    <mat-select placeholder=\"update\">\r\n                        <mat-option *ngFor=\"let update of updates\" [value]=\"update.value\">\r\n                            {{update.viewValue}}\r\n                        </mat-option>\r\n                    </mat-select>\r\n                </mat-form-field>\r\n            </div>\r\n            <div class=\"col-sm-4 col-xs-12\">\r\n                <mat-form-field>\r\n                    <mat-select placeholder=\"Is current Version\">\r\n                        <mat-option *ngFor=\"let version of versions\" [value]=\"version.value\">\r\n                            {{version.viewValue}}\r\n                        </mat-option>\r\n                    </mat-select>\r\n                </mat-form-field>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-12 col-xs-12\">\r\n                <div class=\"btn-lists clearfix\">\r\n                    <ul>\r\n                        <li><button type=\"submit\" class=\"btn btn-default\">Save</button></li>\r\n                        <li><a class=\"btn btn-hide\" href=\"#\">Cancel</a></li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/layout/manage-version/manage-version-add/manage-version-add.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/layout/manage-version/manage-version-add/manage-version-add.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-form-field {\n  width: 100%; }\n\ntextarea {\n  height: 150px; }\n"

/***/ }),

/***/ "./src/app/layout/manage-version/manage-version-add/manage-version-add.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/layout/manage-version/manage-version-add/manage-version-add.component.ts ***!
  \******************************************************************************************/
/*! exports provided: ManageVersionAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageVersionAddComponent", function() { return ManageVersionAddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ManageVersionAddComponent = /** @class */ (function () {
    function ManageVersionAddComponent() {
        this.platforms = [
            { value: 'Android', viewValue: 'Android' },
            { value: 'iOS', viewValue: 'iOS' },
            { value: 'All', viewValue: 'All' },
        ];
        this.updates = [
            { value: 'Normal', viewValue: 'Normal' },
            { value: 'Skippable', viewValue: 'Skippable' },
            { value: 'Forcefully', viewValue: 'Forcefully' },
        ];
        this.versions = [
            { value: 'Yes', viewValue: 'Yes' },
            { value: 'No', viewValue: 'No' },
        ];
    }
    ManageVersionAddComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-manage-version-add',
            template: __webpack_require__(/*! ./manage-version-add.component.html */ "./src/app/layout/manage-version/manage-version-add/manage-version-add.component.html"),
            styles: [__webpack_require__(/*! ./manage-version-add.component.scss */ "./src/app/layout/manage-version/manage-version-add/manage-version-add.component.scss")],
        })
    ], ManageVersionAddComponent);
    return ManageVersionAddComponent;
}());



/***/ }),

/***/ "./src/app/layout/manage-version/manage-version-listing/manage-version-listing.component.html":
/*!****************************************************************************************************!*\
  !*** ./src/app/layout/manage-version/manage-version-listing/manage-version-listing.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-page-header [heading]=\"'Manage Version'\" [icon]=\"'fa-file'\">\r\n</app-page-header>\r\n<div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n        <div class=\"card\">\r\n            <div class=\"card-header\">\r\n                <div class=\"pull-right\">\r\n                    <a [routerLink]=\"['./add']\" title=\"Add New Content\" class=\"a-link btn btn-default\"><i class=\"fa fa-plus-circle\"></i> Add</a>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"card-body table-responsive\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-12 col-md-6\">\r\n                        <mat-form-field>\r\n                            <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Search Name, Email, Contact\">\r\n                        </mat-form-field>\r\n                    </div>\r\n                    <div class=\"col-sm-12 col-md-6\">\r\n                        <div class=\"pull-right\">\r\n\r\n                            <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"mat-elevation-z8\">\r\n                    <table mat-table [dataSource]=\"dataSource\" matSort>\r\n\r\n                        <!-- ID Column -->\r\n                        <ng-container matColumnDef=\"id\">\r\n                            <th mat-header-cell *matHeaderCellDef mat-sort-header> ID </th>\r\n                            <td mat-cell *matCellDef=\"let row\">{{row.id}}</td>\r\n\r\n                        </ng-container>\r\n\r\n                        <!-- Progress Column -->\r\n                        <ng-container matColumnDef=\"progress\">\r\n                            <th mat-header-cell *matHeaderCellDef mat-sort-header> Progress </th>\r\n                            <td mat-cell *matCellDef=\"let row\">{{row.progress}}%</td>\r\n                        </ng-container>\r\n\r\n                        <!-- Name Column -->\r\n                        <ng-container matColumnDef=\"name\">\r\n                            <th mat-header-cell *matHeaderCellDef mat-sort-header> Name </th>\r\n                            <td mat-cell *matCellDef=\"let row\">{{row.name}}</td>\r\n                        </ng-container>\r\n\r\n                        <!-- Color Column -->\r\n                        <ng-container matColumnDef=\"color\">\r\n                            <th mat-header-cell *matHeaderCellDef mat-sort-header> Color </th>\r\n                            <td mat-cell *matCellDef=\"let row\" [style.color]=\"row.color\"> {{row.color}} </td>\r\n                        </ng-container>\r\n\r\n                        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n                        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\">\r\n                        </tr>\r\n                    </table>\r\n\r\n                    <!-- <div class=\"pull-left showing-content\">\r\n                        Showing 1 to 10 of 1,571 entries (filtered from 1,606 total entries)\r\n                    </div> -->\r\n\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/layout/manage-version/manage-version-listing/manage-version-listing.component.scss":
/*!****************************************************************************************************!*\
  !*** ./src/app/layout/manage-version/manage-version-listing/manage-version-listing.component.scss ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/manage-version/manage-version-listing/manage-version-listing.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/layout/manage-version/manage-version-listing/manage-version-listing.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: ManageVersionListingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageVersionListingComponent", function() { return ManageVersionListingComponent; });
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
var ManageVersionListingComponent = /** @class */ (function () {
    function ManageVersionListingComponent() {
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
    ManageVersionListingComponent.prototype.ngOnInit = function () {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    ManageVersionListingComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], ManageVersionListingComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], ManageVersionListingComponent.prototype, "sort", void 0);
    ManageVersionListingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-manage-version-listing',
            template: __webpack_require__(/*! ./manage-version-listing.component.html */ "./src/app/layout/manage-version/manage-version-listing/manage-version-listing.component.html"),
            styles: [__webpack_require__(/*! ./manage-version-listing.component.scss */ "./src/app/layout/manage-version/manage-version-listing/manage-version-listing.component.scss")],
        }),
        __metadata("design:paramtypes", [])
    ], ManageVersionListingComponent);
    return ManageVersionListingComponent;
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

/***/ "./src/app/layout/manage-version/manage-version.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/layout/manage-version/manage-version.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/layout/manage-version/manage-version.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/layout/manage-version/manage-version.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/manage-version/manage-version.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/layout/manage-version/manage-version.component.ts ***!
  \*******************************************************************/
/*! exports provided: ManageVersionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageVersionComponent", function() { return ManageVersionComponent; });
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

var ManageVersionComponent = /** @class */ (function () {
    function ManageVersionComponent() {
    }
    ManageVersionComponent.prototype.ngOnInit = function () {
    };
    ManageVersionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-manage-version',
            template: __webpack_require__(/*! ./manage-version.component.html */ "./src/app/layout/manage-version/manage-version.component.html"),
            styles: [__webpack_require__(/*! ./manage-version.component.scss */ "./src/app/layout/manage-version/manage-version.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ManageVersionComponent);
    return ManageVersionComponent;
}());



/***/ }),

/***/ "./src/app/layout/manage-version/manage-version.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/layout/manage-version/manage-version.module.ts ***!
  \****************************************************************/
/*! exports provided: ManageVersionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageVersionModule", function() { return ManageVersionModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _manage_version_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./manage-version.component */ "./src/app/layout/manage-version/manage-version.component.ts");
/* harmony import */ var _manage_version_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./manage-version.router */ "./src/app/layout/manage-version/manage-version.router.ts");
/* harmony import */ var _export_file_export_file_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../export-file/export-file.module */ "./src/app/export-file/export-file.module.ts");
/* harmony import */ var _manage_version_listing_manage_version_listing_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./manage-version-listing/manage-version-listing.component */ "./src/app/layout/manage-version/manage-version-listing/manage-version-listing.component.ts");
/* harmony import */ var _manage_version_add_manage_version_add_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./manage-version-add/manage-version-add.component */ "./src/app/layout/manage-version/manage-version-add/manage-version-add.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





//------components ----


var ManageVersionModule = /** @class */ (function () {
    function ManageVersionModule() {
    }
    ManageVersionModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _manage_version_router__WEBPACK_IMPORTED_MODULE_3__["ManageVersionRouterModule"],
                _export_file_export_file_module__WEBPACK_IMPORTED_MODULE_4__["ExportFileModule"],
            ],
            declarations: [
                _manage_version_component__WEBPACK_IMPORTED_MODULE_2__["ManageVersionComponent"],
                _manage_version_listing_manage_version_listing_component__WEBPACK_IMPORTED_MODULE_5__["ManageVersionListingComponent"],
                _manage_version_add_manage_version_add_component__WEBPACK_IMPORTED_MODULE_6__["ManageVersionAddComponent"],
                _manage_version_listing_manage_version_listing_component__WEBPACK_IMPORTED_MODULE_5__["ManageVersionListingComponent"],
                _manage_version_add_manage_version_add_component__WEBPACK_IMPORTED_MODULE_6__["ManageVersionAddComponent"]
            ]
        })
    ], ManageVersionModule);
    return ManageVersionModule;
}());



/***/ }),

/***/ "./src/app/layout/manage-version/manage-version.router.ts":
/*!****************************************************************!*\
  !*** ./src/app/layout/manage-version/manage-version.router.ts ***!
  \****************************************************************/
/*! exports provided: ManageVersionRouterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageVersionRouterModule", function() { return ManageVersionRouterModule; });
/* harmony import */ var _manage_version_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./manage-version.component */ "./src/app/layout/manage-version/manage-version.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _manage_version_listing_manage_version_listing_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./manage-version-listing/manage-version-listing.component */ "./src/app/layout/manage-version/manage-version-listing/manage-version-listing.component.ts");
/* harmony import */ var _manage_version_add_manage_version_add_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./manage-version-add/manage-version-add.component */ "./src/app/layout/manage-version/manage-version-add/manage-version-add.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var contentroutes = [
    {
        path: '', component: _manage_version_component__WEBPACK_IMPORTED_MODULE_0__["ManageVersionComponent"],
        children: [
            { path: '', component: _manage_version_listing_manage_version_listing_component__WEBPACK_IMPORTED_MODULE_3__["ManageVersionListingComponent"] },
            { path: 'add', component: _manage_version_add_manage_version_add_component__WEBPACK_IMPORTED_MODULE_4__["ManageVersionAddComponent"] }
        ]
    }
];
var ManageVersionRouterModule = /** @class */ (function () {
    function ManageVersionRouterModule() {
    }
    ManageVersionRouterModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(contentroutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ManageVersionRouterModule);
    return ManageVersionRouterModule;
}());



/***/ })

}]);
//# sourceMappingURL=manage-version-manage-version-module.js.map