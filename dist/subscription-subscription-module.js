(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["subscription-subscription-module"],{

/***/ "./src/app/layout/subscription/subscription-listing/subscription-listing.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/layout/subscription/subscription-listing/subscription-listing.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-page-header [heading]=\"'Subscription'\" [icon]=\"'fa-bell'\">\r\n</app-page-header>\r\n<div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n        <div class=\"card\">\r\n            <div class=\"card-header\">\r\n                <div class=\"pull-right\">\r\n                    <a [routerLink]=\"['./add']\" title=\"Add New Content\" class=\"a-link btn btn-default\"><i class=\"fa fa-plus-circle\"></i> Add</a>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"card-body table-responsive\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-12 col-md-6\">\r\n                        <div class=\"pull-left\">\r\n                            <mat-form-field>\r\n                                <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Search Name, Email, Contact\">\r\n                            </mat-form-field>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm-12 col-md-6\">\r\n                        <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\r\n                    </div>\r\n                </div>\r\n                <!-- DataTable -->\r\n                <div class=\"mat-elevation-z8\">\r\n                    <table mat-table [dataSource]=\"dataSource\" matSort>\r\n\r\n                        <ng-container matColumnDef=\"id\">\r\n                            <th mat-header-cell *matHeaderCellDef mat-sort-header> ID </th>\r\n                            <td mat-cell *matCellDef=\"let row\">{{row.id}}</td>\r\n\r\n                        </ng-container>\r\n\r\n\r\n                        <ng-container matColumnDef=\"progress\">\r\n                            <th mat-header-cell *matHeaderCellDef mat-sort-header> Progress </th>\r\n                            <td mat-cell *matCellDef=\"let row\">{{row.progress}}%</td>\r\n                        </ng-container>\r\n\r\n\r\n                        <ng-container matColumnDef=\"name\">\r\n                            <th mat-header-cell *matHeaderCellDef mat-sort-header> Name </th>\r\n                            <td mat-cell *matCellDef=\"let row\">{{row.name}}</td>\r\n                        </ng-container>\r\n\r\n\r\n                        <ng-container matColumnDef=\"color\">\r\n                            <th mat-header-cell *matHeaderCellDef mat-sort-header> Color </th>\r\n                            <td mat-cell *matCellDef=\"let row\" [style.color]=\"row.color\"> {{row.color}} </td>\r\n                        </ng-container>\r\n\r\n                        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n                        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\">\r\n                        </tr>\r\n                    </table>\r\n\r\n                    <!-- <div class=\"pull-left showing-content\">\r\n                            Showing 1 to 10 of 1,571 entries (filtered from 1,606 total entries)\r\n                        </div> -->\r\n\r\n                    <!-- DataTable -->\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/layout/subscription/subscription-listing/subscription-listing.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/layout/subscription/subscription-listing/subscription-listing.component.scss ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/subscription/subscription-listing/subscription-listing.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/layout/subscription/subscription-listing/subscription-listing.component.ts ***!
  \********************************************************************************************/
/*! exports provided: SubscriptionListingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscriptionListingComponent", function() { return SubscriptionListingComponent; });
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
var SubscriptionListingComponent = /** @class */ (function () {
    function SubscriptionListingComponent() {
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
    SubscriptionListingComponent.prototype.ngOnInit = function () {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    SubscriptionListingComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], SubscriptionListingComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], SubscriptionListingComponent.prototype, "sort", void 0);
    SubscriptionListingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-subscription-listing',
            template: __webpack_require__(/*! ./subscription-listing.component.html */ "./src/app/layout/subscription/subscription-listing/subscription-listing.component.html"),
            styles: [__webpack_require__(/*! ./subscription-listing.component.scss */ "./src/app/layout/subscription/subscription-listing/subscription-listing.component.scss")],
        }),
        __metadata("design:paramtypes", [])
    ], SubscriptionListingComponent);
    return SubscriptionListingComponent;
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

/***/ "./src/app/layout/subscription/subscription.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/layout/subscription/subscription.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/layout/subscription/subscription.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/layout/subscription/subscription.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/subscription/subscription.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/layout/subscription/subscription.component.ts ***!
  \***************************************************************/
/*! exports provided: SubscriptionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscriptionComponent", function() { return SubscriptionComponent; });
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

var SubscriptionComponent = /** @class */ (function () {
    function SubscriptionComponent() {
    }
    SubscriptionComponent.prototype.ngOnInit = function () {
    };
    SubscriptionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-subscription',
            template: __webpack_require__(/*! ./subscription.component.html */ "./src/app/layout/subscription/subscription.component.html"),
            styles: [__webpack_require__(/*! ./subscription.component.scss */ "./src/app/layout/subscription/subscription.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SubscriptionComponent);
    return SubscriptionComponent;
}());



/***/ }),

/***/ "./src/app/layout/subscription/subscription.module.ts":
/*!************************************************************!*\
  !*** ./src/app/layout/subscription/subscription.module.ts ***!
  \************************************************************/
/*! exports provided: SubscriptionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscriptionModule", function() { return SubscriptionModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _subscription_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./subscription.component */ "./src/app/layout/subscription/subscription.component.ts");
/* harmony import */ var _subscription_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./subscription.router */ "./src/app/layout/subscription/subscription.router.ts");
/* harmony import */ var _export_file_export_file_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../export-file/export-file.module */ "./src/app/export-file/export-file.module.ts");
/* harmony import */ var _subscription_listing_subscription_listing_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./subscription-listing/subscription-listing.component */ "./src/app/layout/subscription/subscription-listing/subscription-listing.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





//------components ----

var SubscriptionModule = /** @class */ (function () {
    function SubscriptionModule() {
    }
    SubscriptionModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _subscription_router__WEBPACK_IMPORTED_MODULE_3__["SubscriptionRouterModule"],
                _export_file_export_file_module__WEBPACK_IMPORTED_MODULE_4__["ExportFileModule"],
            ],
            declarations: [
                _subscription_component__WEBPACK_IMPORTED_MODULE_2__["SubscriptionComponent"],
                _subscription_listing_subscription_listing_component__WEBPACK_IMPORTED_MODULE_5__["SubscriptionListingComponent"],
            ]
        })
    ], SubscriptionModule);
    return SubscriptionModule;
}());



/***/ }),

/***/ "./src/app/layout/subscription/subscription.router.ts":
/*!************************************************************!*\
  !*** ./src/app/layout/subscription/subscription.router.ts ***!
  \************************************************************/
/*! exports provided: SubscriptionRouterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscriptionRouterModule", function() { return SubscriptionRouterModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _subscription_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./subscription.component */ "./src/app/layout/subscription/subscription.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _subscription_listing_subscription_listing_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./subscription-listing/subscription-listing.component */ "./src/app/layout/subscription/subscription-listing/subscription-listing.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var subscriptionroutes = [
    {
        path: '', component: _subscription_component__WEBPACK_IMPORTED_MODULE_1__["SubscriptionComponent"],
        children: [
            { path: '', component: _subscription_listing_subscription_listing_component__WEBPACK_IMPORTED_MODULE_3__["SubscriptionListingComponent"] },
        ]
    }
];
var SubscriptionRouterModule = /** @class */ (function () {
    function SubscriptionRouterModule() {
    }
    SubscriptionRouterModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(subscriptionroutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], SubscriptionRouterModule);
    return SubscriptionRouterModule;
}());



/***/ })

}]);
//# sourceMappingURL=subscription-subscription-module.js.map