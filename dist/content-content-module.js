(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["content-content-module"],{

/***/ "./node_modules/ng2-ckeditor/lib/ng2-ckeditor.js":
/*!*******************************************************!*\
  !*** ./node_modules/ng2-ckeditor/lib/ng2-ckeditor.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ckeditor_module_1 = __webpack_require__(/*! ./src/ckeditor.module */ "./node_modules/ng2-ckeditor/lib/src/ckeditor.module.js");
exports.CKEditorModule = ckeditor_module_1.CKEditorModule;
var ckeditor_component_1 = __webpack_require__(/*! ./src/ckeditor.component */ "./node_modules/ng2-ckeditor/lib/src/ckeditor.component.js");
exports.CKEditorComponent = ckeditor_component_1.CKEditorComponent;
var ckbutton_directive_1 = __webpack_require__(/*! ./src/ckbutton.directive */ "./node_modules/ng2-ckeditor/lib/src/ckbutton.directive.js");
exports.CKButtonDirective = ckbutton_directive_1.CKButtonDirective;
var ckgroup_directive_1 = __webpack_require__(/*! ./src/ckgroup.directive */ "./node_modules/ng2-ckeditor/lib/src/ckgroup.directive.js");
exports.CKGroupDirective = ckgroup_directive_1.CKGroupDirective;
//# sourceMappingURL=ng2-ckeditor.js.map

/***/ }),

/***/ "./node_modules/ng2-ckeditor/lib/src/ckbutton.directive.js":
/*!*****************************************************************!*\
  !*** ./node_modules/ng2-ckeditor/lib/src/ckbutton.directive.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/**
 * CKGroup component
 * Usage :
 *  <ckeditor [(ngModel)]="data" [config]="{...}" debounce="500">
 *      <ckbutton [name]="'SaveButton'" [command]="'saveCommand'" (click)="save($event)"
 *                [icon]="'/save.png'" [toolbar]="'customGroup,1'" [label]="'Save'">
 *      </ckbutton>
 *   </ckeditor>
 */
var CKButtonDirective = /** @class */ (function () {
    function CKButtonDirective() {
        this.click = new core_1.EventEmitter();
    }
    CKButtonDirective.prototype.initialize = function (editor) {
        var _this = this;
        editor.instance.addCommand(this.command, {
            exec: function (evt) {
                _this.click.emit(evt);
            },
        });
        editor.instance.ui.addButton(this.name, {
            label: this.label,
            command: this.command,
            toolbar: this.toolbar,
            icon: this.icon,
        });
    };
    CKButtonDirective.prototype.ngOnInit = function () {
        if (!this.name)
            throw new Error('Attribute "name" is required on <ckbutton>');
        if (!this.command)
            throw new Error('Attribute "command" is required on <ckbutton>');
    };
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], CKButtonDirective.prototype, "click", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], CKButtonDirective.prototype, "label", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], CKButtonDirective.prototype, "command", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], CKButtonDirective.prototype, "toolbar", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], CKButtonDirective.prototype, "name", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], CKButtonDirective.prototype, "icon", void 0);
    CKButtonDirective = __decorate([
        core_1.Directive({
            selector: 'ckbutton',
        })
    ], CKButtonDirective);
    return CKButtonDirective;
}());
exports.CKButtonDirective = CKButtonDirective;
//# sourceMappingURL=ckbutton.directive.js.map

/***/ }),

/***/ "./node_modules/ng2-ckeditor/lib/src/ckeditor.component.js":
/*!*****************************************************************!*\
  !*** ./node_modules/ng2-ckeditor/lib/src/ckeditor.component.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
// Imports
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var ckbutton_directive_1 = __webpack_require__(/*! ./ckbutton.directive */ "./node_modules/ng2-ckeditor/lib/src/ckbutton.directive.js");
var ckgroup_directive_1 = __webpack_require__(/*! ./ckgroup.directive */ "./node_modules/ng2-ckeditor/lib/src/ckgroup.directive.js");
/**
 * CKEditor component
 * Usage :
 *  <ckeditor [(ngModel)]="data" [config]="{...}" debounce="500"></ckeditor>
 */
var CKEditorComponent = /** @class */ (function () {
    /**
     * Constructor
     */
    function CKEditorComponent(zone) {
        this.zone = zone;
        this.change = new core_1.EventEmitter();
        this.editorChange = new core_1.EventEmitter();
        this.ready = new core_1.EventEmitter();
        this.blur = new core_1.EventEmitter();
        this.focus = new core_1.EventEmitter();
        this.contentDom = new core_1.EventEmitter();
        this.fileUploadRequest = new core_1.EventEmitter();
        this.fileUploadResponse = new core_1.EventEmitter();
        this.paste = new core_1.EventEmitter();
        this.drop = new core_1.EventEmitter();
        this._value = '';
    }
    CKEditorComponent_1 = CKEditorComponent;
    Object.defineProperty(CKEditorComponent.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (v) {
            if (v !== this._value) {
                this._value = v;
                this.onChange(v);
            }
        },
        enumerable: true,
        configurable: true
    });
    CKEditorComponent.prototype.ngOnChanges = function (changes) {
        if (changes.readonly && this.instance) {
            this.instance.setReadOnly(changes.readonly.currentValue);
        }
    };
    /**
     * On component destroy
     */
    CKEditorComponent.prototype.ngOnDestroy = function () {
        var _this = this;
        if (this.instance) {
            setTimeout(function () {
                _this.instance.removeAllListeners();
                CKEDITOR.instances[_this.instance.name].destroy();
                _this.instance.destroy();
                _this.instance = null;
            });
        }
    };
    /**
     * On component view init
     */
    CKEditorComponent.prototype.ngAfterViewInit = function () {
        this.ckeditorInit(this.config || {});
    };
    /**
     * On component view checked
     */
    CKEditorComponent.prototype.ngAfterViewChecked = function () {
        this.ckeditorInit(this.config || {});
    };
    /**
     * Value update process
     */
    CKEditorComponent.prototype.updateValue = function (value) {
        var _this = this;
        this.zone.run(function () {
            _this.value = value;
            _this.onChange(value);
            _this.onTouched();
            _this.change.emit(value);
        });
    };
    /**
     * CKEditor init
     */
    CKEditorComponent.prototype.ckeditorInit = function (config) {
        var _this = this;
        if (typeof CKEDITOR === 'undefined') {
            console.warn('CKEditor 4.x is missing (http://ckeditor.com/)');
        }
        else {
            // Check textarea exists
            if (this.instance || !this.documentContains(this.host.nativeElement)) {
                return;
            }
            if (this.readonly) {
                config.readOnly = this.readonly;
            }
            // CKEditor replace textarea
            this.instance = CKEDITOR.replace(this.host.nativeElement, config);
            // Set initial value
            this.instance.setData(this.value);
            // listen for instanceReady event
            this.instance.on('instanceReady', function (evt) {
                // if value has changed while instance loading
                // update instance with current component value
                if (_this.instance.getData() !== _this.value) {
                    _this.instance.setData(_this.value);
                }
                // send the evt to the EventEmitter
                _this.ready.emit(evt);
            });
            // CKEditor change event
            this.instance.on('change', function (evt) {
                _this.onTouched();
                var value = _this.instance.getData();
                if (_this.value !== value) {
                    // Debounce update
                    if (_this.debounce) {
                        if (_this.debounceTimeout)
                            clearTimeout(_this.debounceTimeout);
                        _this.debounceTimeout = setTimeout(function () {
                            _this.updateValue(value);
                            _this.debounceTimeout = null;
                        }, parseInt(_this.debounce));
                        // Live update
                    }
                    else {
                        _this.updateValue(value);
                    }
                }
                // Original ckeditor event dispatch
                _this.editorChange.emit(evt);
            });
            // CKEditor blur event
            this.instance.on('blur', function (evt) {
                _this.blur.emit(evt);
            });
            // CKEditor focus event
            this.instance.on('focus', function (evt) {
                _this.focus.emit(evt);
            });
            // CKEditor contentDom event
            this.instance.on('contentDom', function (evt) {
                _this.contentDom.emit(evt);
            });
            // CKEditor fileUploadRequest event
            this.instance.on('fileUploadRequest', function (evt) {
                _this.fileUploadRequest.emit(evt);
            });
            // CKEditor fileUploadResponse event
            this.instance.on('fileUploadResponse', function (evt) {
                _this.fileUploadResponse.emit(evt);
            });
            // CKEditor paste event
            this.instance.on('paste', function (evt) {
                _this.paste.emit(evt);
            });
            // CKEditor drop event
            this.instance.on('drop', function (evt) {
                _this.drop.emit(evt);
            });
            // Add Toolbar Groups to Editor. This will also add Buttons within groups.
            this.toolbarGroups.forEach(function (group) {
                group.initialize(_this);
            });
            // Add Toolbar Buttons to Editor.
            this.toolbarButtons.forEach(function (button) {
                button.initialize(_this);
            });
        }
    };
    /**
     * Implements ControlValueAccessor
     */
    CKEditorComponent.prototype.writeValue = function (value) {
        this._value = value;
        if (this.instance)
            this.instance.setData(value);
    };
    CKEditorComponent.prototype.onChange = function (_) { };
    CKEditorComponent.prototype.onTouched = function () { };
    CKEditorComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    CKEditorComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    CKEditorComponent.prototype.documentContains = function (node) {
        return document.contains ? document.contains(node) : document.body.contains(node);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], CKEditorComponent.prototype, "config", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], CKEditorComponent.prototype, "readonly", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], CKEditorComponent.prototype, "debounce", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], CKEditorComponent.prototype, "change", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], CKEditorComponent.prototype, "editorChange", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], CKEditorComponent.prototype, "ready", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], CKEditorComponent.prototype, "blur", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], CKEditorComponent.prototype, "focus", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], CKEditorComponent.prototype, "contentDom", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], CKEditorComponent.prototype, "fileUploadRequest", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], CKEditorComponent.prototype, "fileUploadResponse", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], CKEditorComponent.prototype, "paste", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], CKEditorComponent.prototype, "drop", void 0);
    __decorate([
        core_1.ViewChild('host'),
        __metadata("design:type", Object)
    ], CKEditorComponent.prototype, "host", void 0);
    __decorate([
        core_1.ContentChildren(ckbutton_directive_1.CKButtonDirective),
        __metadata("design:type", core_1.QueryList)
    ], CKEditorComponent.prototype, "toolbarButtons", void 0);
    __decorate([
        core_1.ContentChildren(ckgroup_directive_1.CKGroupDirective),
        __metadata("design:type", core_1.QueryList)
    ], CKEditorComponent.prototype, "toolbarGroups", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], CKEditorComponent.prototype, "value", null);
    CKEditorComponent = CKEditorComponent_1 = __decorate([
        core_1.Component({
            selector: 'ckeditor',
            providers: [
                {
                    provide: forms_1.NG_VALUE_ACCESSOR,
                    useExisting: core_1.forwardRef(function () { return CKEditorComponent_1; }),
                    multi: true,
                },
            ],
            template: "<textarea #host></textarea>",
        }),
        __metadata("design:paramtypes", [core_1.NgZone])
    ], CKEditorComponent);
    return CKEditorComponent;
    var CKEditorComponent_1;
}());
exports.CKEditorComponent = CKEditorComponent;
//# sourceMappingURL=ckeditor.component.js.map

/***/ }),

/***/ "./node_modules/ng2-ckeditor/lib/src/ckeditor.module.js":
/*!**************************************************************!*\
  !*** ./node_modules/ng2-ckeditor/lib/src/ckeditor.module.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var ckeditor_component_1 = __webpack_require__(/*! ./ckeditor.component */ "./node_modules/ng2-ckeditor/lib/src/ckeditor.component.js");
var ckbutton_directive_1 = __webpack_require__(/*! ./ckbutton.directive */ "./node_modules/ng2-ckeditor/lib/src/ckbutton.directive.js");
var ckgroup_directive_1 = __webpack_require__(/*! ./ckgroup.directive */ "./node_modules/ng2-ckeditor/lib/src/ckgroup.directive.js");
/**
 * CKEditorModule
 */
var CKEditorModule = /** @class */ (function () {
    function CKEditorModule() {
    }
    CKEditorModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule],
            declarations: [ckeditor_component_1.CKEditorComponent, ckbutton_directive_1.CKButtonDirective, ckgroup_directive_1.CKGroupDirective],
            exports: [ckeditor_component_1.CKEditorComponent, ckbutton_directive_1.CKButtonDirective, ckgroup_directive_1.CKGroupDirective],
        })
    ], CKEditorModule);
    return CKEditorModule;
}());
exports.CKEditorModule = CKEditorModule;
//# sourceMappingURL=ckeditor.module.js.map

/***/ }),

/***/ "./node_modules/ng2-ckeditor/lib/src/ckgroup.directive.js":
/*!****************************************************************!*\
  !*** ./node_modules/ng2-ckeditor/lib/src/ckgroup.directive.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var ckbutton_directive_1 = __webpack_require__(/*! ./ckbutton.directive */ "./node_modules/ng2-ckeditor/lib/src/ckbutton.directive.js");
/**
 * CKGroup component
 * Usage :
 *  <ckeditor [(ngModel)]="data" [config]="{...}" debounce="500">
 *      <ckgroup [name]="'exampleGroup2'" [previous]="'1'" [subgroupOf]="'exampleGroup1'">
 *          .
 *          .
 *      </ckgroup>
 *   </ckeditor>
 */
var CKGroupDirective = /** @class */ (function () {
    function CKGroupDirective() {
    }
    CKGroupDirective.prototype.ngAfterContentInit = function () {
        var _this = this;
        // Reconfigure each button's toolbar property within ckgroup to hold its parent's name
        this.toolbarButtons.forEach(function (button) { return (button.toolbar = _this.name); });
    };
    CKGroupDirective.prototype.initialize = function (editor) {
        editor.instance.ui.addToolbarGroup(this.name, this.previous, this.subgroupOf);
        // Initialize each button within ckgroup
        this.toolbarButtons.forEach(function (button) {
            button.initialize(editor);
        });
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], CKGroupDirective.prototype, "name", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], CKGroupDirective.prototype, "previous", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], CKGroupDirective.prototype, "subgroupOf", void 0);
    __decorate([
        core_1.ContentChildren(ckbutton_directive_1.CKButtonDirective),
        __metadata("design:type", core_1.QueryList)
    ], CKGroupDirective.prototype, "toolbarButtons", void 0);
    CKGroupDirective = __decorate([
        core_1.Directive({
            selector: 'ckgroup',
        })
    ], CKGroupDirective);
    return CKGroupDirective;
}());
exports.CKGroupDirective = CKGroupDirective;
//# sourceMappingURL=ckgroup.directive.js.map

/***/ }),

/***/ "./src/app/layout/content/content-add/content-add.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/layout/content/content-add/content-add.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-page-header [heading]=\"'Content'\" [icon]=\"'fa-file'\">\r\n</app-page-header>\r\n<div class=\"card\">\r\n    <div class=\"card-body\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-8 col-xs-12\">\r\n                <mat-form-field class=\"example-full-width\">\r\n                    <input matInput placeholder=\"*Enter the title\" value=\"\">\r\n                </mat-form-field>\r\n            </div>\r\n            <div class=\"col-sm-4 col-xs-12\">\r\n\r\n                <mat-form-field>\r\n                    <mat-select placeholder=\"status\">\r\n                        <mat-option *ngFor=\"let status of statuses\" [value]=\"status.value\">\r\n                            {{status.viewValue}}\r\n                        </mat-option>\r\n                    </mat-select>\r\n                </mat-form-field>\r\n            </div>\r\n            <div class=\"top-margin\"></div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-12 col-xs-12\">\r\n                <ckeditor [(ngModel)]=\"mycontent\" #myckeditor [config]=\"ckeConfig\" debounce=\"500\" (change)=\"onChange($event)\">\r\n                </ckeditor>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-12 col-xs-12\">\r\n                <div class=\"btn-lists clearfix\">\r\n                    <ul>\r\n                        <li><button type=\"submit\" class=\"btn btn-default\">Save</button></li>\r\n                        <li><a class=\"btn btn-hide\" href=\"versions\">Cancel</a></li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/layout/content/content-add/content-add.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/layout/content/content-add/content-add.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-form-field {\n  width: 100%; }\n"

/***/ }),

/***/ "./src/app/layout/content/content-add/content-add.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/layout/content/content-add/content-add.component.ts ***!
  \*********************************************************************/
/*! exports provided: ContentAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentAddComponent", function() { return ContentAddComponent; });
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

var ContentAddComponent = /** @class */ (function () {
    function ContentAddComponent() {
        // SelectBox
        this.statuses = [
            { value: 'Active', viewValue: 'Active' },
            { value: 'Inactive', viewValue: 'Inactive' },
        ];
        // CkEditor
        this.name = 'ng2-ckeditor';
        this.log = '';
    }
    ContentAddComponent.prototype.ngOnInit = function () {
        this.ckeConfig = {
            allowedContent: false,
            extraPlugins: 'divarea',
            forcePasteAsPlainText: true
        };
    };
    ContentAddComponent.prototype.onChange = function ($event) {
        console.log("onChange");
    };
    ContentAddComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-content-add',
            template: __webpack_require__(/*! ./content-add.component.html */ "./src/app/layout/content/content-add/content-add.component.html"),
            styles: [__webpack_require__(/*! ./content-add.component.scss */ "./src/app/layout/content/content-add/content-add.component.scss")],
        }),
        __metadata("design:paramtypes", [])
    ], ContentAddComponent);
    return ContentAddComponent;
}());



/***/ }),

/***/ "./src/app/layout/content/content-listing/content-listing.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/layout/content/content-listing/content-listing.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-page-header [heading]=\"'Content'\" [icon]=\"'fa-file'\">\r\n</app-page-header>\r\n<div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n        <div class=\"card\">\r\n            <div class=\"card-header\">\r\n                <div class=\"pull-right\">\r\n                    <a [routerLink]=\"['./add']\" title=\"Add New Content\" class=\"a-link btn btn-default\"><i class=\"fa fa-plus-circle\"></i> Add</a>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"card-body table-responsive\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-12 col-md-6\">\r\n                        <div class=\"pull-left\">\r\n                            <mat-form-field>\r\n                                <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Search Name, Email, Contact\">\r\n                            </mat-form-field>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm-12 col-md-6\">\r\n                        <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\r\n                    </div>\r\n                </div>\r\n                <!-- DataTable -->\r\n                <div class=\"mat-elevation-z8\">\r\n                    <table mat-table [dataSource]=\"dataSource\" matSort>\r\n\r\n                        <ng-container matColumnDef=\"id\">\r\n                            <th mat-header-cell *matHeaderCellDef mat-sort-header> ID </th>\r\n                            <td mat-cell *matCellDef=\"let row\">{{row.id}}</td>\r\n\r\n                        </ng-container>\r\n\r\n\r\n                        <ng-container matColumnDef=\"progress\">\r\n                            <th mat-header-cell *matHeaderCellDef mat-sort-header> Progress </th>\r\n                            <td mat-cell *matCellDef=\"let row\">{{row.progress}}%</td>\r\n                        </ng-container>\r\n\r\n\r\n                        <ng-container matColumnDef=\"name\">\r\n                            <th mat-header-cell *matHeaderCellDef mat-sort-header> Name </th>\r\n                            <td mat-cell *matCellDef=\"let row\">{{row.name}}</td>\r\n                        </ng-container>\r\n\r\n\r\n                        <ng-container matColumnDef=\"color\">\r\n                            <th mat-header-cell *matHeaderCellDef mat-sort-header> Color </th>\r\n                            <td mat-cell *matCellDef=\"let row\" [style.color]=\"row.color\"> {{row.color}} </td>\r\n                        </ng-container>\r\n\r\n                        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n                        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\">\r\n                        </tr>\r\n                    </table>\r\n\r\n                    <!-- <div class=\"pull-left showing-content\">\r\n                        Showing 1 to 10 of 1,571 entries (filtered from 1,606 total entries)\r\n                    </div> -->\r\n\r\n                    <!-- DataTable -->\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/layout/content/content-listing/content-listing.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/layout/content/content-listing/content-listing.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".a-link {\n  color: #fff; }\n"

/***/ }),

/***/ "./src/app/layout/content/content-listing/content-listing.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/layout/content/content-listing/content-listing.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ContentListingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentListingComponent", function() { return ContentListingComponent; });
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
var ContentListingComponent = /** @class */ (function () {
    function ContentListingComponent() {
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
    ContentListingComponent.prototype.ngOnInit = function () {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    ContentListingComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], ContentListingComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], ContentListingComponent.prototype, "sort", void 0);
    ContentListingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-content-listing',
            template: __webpack_require__(/*! ./content-listing.component.html */ "./src/app/layout/content/content-listing/content-listing.component.html"),
            styles: [__webpack_require__(/*! ./content-listing.component.scss */ "./src/app/layout/content/content-listing/content-listing.component.scss")],
        }),
        __metadata("design:paramtypes", [])
    ], ContentListingComponent);
    return ContentListingComponent;
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

/***/ "./src/app/layout/content/content.component.html":
/*!*******************************************************!*\
  !*** ./src/app/layout/content/content.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/layout/content/content.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/layout/content/content.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/content/content.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/layout/content/content.component.ts ***!
  \*****************************************************/
/*! exports provided: ContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentComponent", function() { return ContentComponent; });
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

var ContentComponent = /** @class */ (function () {
    function ContentComponent() {
    }
    ContentComponent.prototype.ngOnInit = function () {
    };
    ContentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-content',
            template: __webpack_require__(/*! ./content.component.html */ "./src/app/layout/content/content.component.html"),
            styles: [__webpack_require__(/*! ./content.component.scss */ "./src/app/layout/content/content.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ContentComponent);
    return ContentComponent;
}());



/***/ }),

/***/ "./src/app/layout/content/content.module.ts":
/*!**************************************************!*\
  !*** ./src/app/layout/content/content.module.ts ***!
  \**************************************************/
/*! exports provided: ContentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentModule", function() { return ContentModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _content_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./content.component */ "./src/app/layout/content/content.component.ts");
/* harmony import */ var _content_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./content.router */ "./src/app/layout/content/content.router.ts");
/* harmony import */ var _export_file_export_file_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../export-file/export-file.module */ "./src/app/export-file/export-file.module.ts");
/* harmony import */ var ng2_ckeditor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-ckeditor */ "./node_modules/ng2-ckeditor/lib/ng2-ckeditor.js");
/* harmony import */ var ng2_ckeditor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ng2_ckeditor__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _content_listing_content_listing_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./content-listing/content-listing.component */ "./src/app/layout/content/content-listing/content-listing.component.ts");
/* harmony import */ var _content_add_content_add_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./content-add/content-add.component */ "./src/app/layout/content/content-add/content-add.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






//------components ----


var ContentModule = /** @class */ (function () {
    function ContentModule() {
    }
    ContentModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _content_router__WEBPACK_IMPORTED_MODULE_3__["ContentRouterModule"],
                _export_file_export_file_module__WEBPACK_IMPORTED_MODULE_4__["ExportFileModule"],
                ng2_ckeditor__WEBPACK_IMPORTED_MODULE_5__["CKEditorModule"]
            ],
            declarations: [
                _content_component__WEBPACK_IMPORTED_MODULE_2__["ContentComponent"],
                _content_listing_content_listing_component__WEBPACK_IMPORTED_MODULE_6__["ContentListingComponent"],
                _content_add_content_add_component__WEBPACK_IMPORTED_MODULE_7__["ContentAddComponent"]
            ]
        })
    ], ContentModule);
    return ContentModule;
}());



/***/ }),

/***/ "./src/app/layout/content/content.router.ts":
/*!**************************************************!*\
  !*** ./src/app/layout/content/content.router.ts ***!
  \**************************************************/
/*! exports provided: ContentRouterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentRouterModule", function() { return ContentRouterModule; });
/* harmony import */ var _content_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./content.component */ "./src/app/layout/content/content.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _content_listing_content_listing_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./content-listing/content-listing.component */ "./src/app/layout/content/content-listing/content-listing.component.ts");
/* harmony import */ var _content_add_content_add_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./content-add/content-add.component */ "./src/app/layout/content/content-add/content-add.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var contentroutes = [
    {
        path: '', component: _content_component__WEBPACK_IMPORTED_MODULE_0__["ContentComponent"],
        children: [
            { path: '', component: _content_listing_content_listing_component__WEBPACK_IMPORTED_MODULE_3__["ContentListingComponent"] },
            { path: 'add', component: _content_add_content_add_component__WEBPACK_IMPORTED_MODULE_4__["ContentAddComponent"] }
        ]
    }
];
var ContentRouterModule = /** @class */ (function () {
    function ContentRouterModule() {
    }
    ContentRouterModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(contentroutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ContentRouterModule);
    return ContentRouterModule;
}());



/***/ })

}]);
//# sourceMappingURL=content-content-module.js.map