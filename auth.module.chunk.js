webpackJsonp(["auth.module"],{

/***/ "../../../../../src/app/pages/auth/auth.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".login-page {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n\n.login-page .panel {\n  width: 320px;\n}\n\n.login-content {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n\n.page:before {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: -1;\n  width: 100%;\n  height: 100%;\n  content: \"\";\n  background: #3e8ef7;\n  /* Old browsers */\n  /* IE9 SVG, needs conditional override of 'filter' to 'none' */\n  background-image: -webkit-gradient(linear, left top, left bottom, from(#a7b4ff), to(#a49cf5));\n  background-image: linear-gradient(to bottom, #a7b4ff 0%, #a49cf5 100%);\n  background-repeat: repeat-x;\n  background-position: center top;\n  background-size: cover;\n}\n\n.page-login-v3 .panel {\n  width: 400px;\n  margin-bottom: 45px;\n  background: #fff;\n  border-radius: .286rem;\n}\n\n.page-login-v3 .panel .panel-body {\n  padding: 50px 40px 40px;\n}\n\n.page-login-v3 .panel .brand-text {\n  margin-top: 8px;\n}\n\n.page-login-v3 form {\n  margin: 45px 0 30px;\n}\n\n.page-login-v3 form a {\n  margin-left: 20px;\n}\n\n.page-login-v3 form .form-material.floating + .page-login-v3 form .form-material.floating {\n  margin-top: 30px;\n}\n\n.page-login-v3 form .form-material label {\n  font-weight: 300;\n  color: #a3afb7;\n}\n\n@media (max-width: 479px) {\n  .page-login-v3 .page-content {\n    padding: 30px 20px;\n  }\n\n  .page-login-v3 .panel {\n    width: auto;\n    padding: 10px;\n  }\n\n  .page-login-v3 .panel .panel-body {\n    padding: 35px 25px;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/auth/auth.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page vertical-align text-center login-page\">\n  <div class=\"login-content page-content vertical-align-middle animation-slide-top animation-duration-1\">\n    <div class=\"panel\">\n      <div class=\"panel-body\">\n        <div class=\"brand\">\n          <img class=\"brand-img mb-2\" src=\"../../../assets/images/duck.png\" alt=\"RecursiViz Logo\" style=\"height: 200px;\">\n        </div>\n        <router-outlet></router-outlet>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/auth/auth.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AuthComponent = /** @class */ (function () {
    function AuthComponent() {
    }
    AuthComponent.prototype.ngOnInit = function () {
    };
    AuthComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-auth',
            template: __webpack_require__("../../../../../src/app/pages/auth/auth.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/auth/auth.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AuthComponent);
    return AuthComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/auth/auth.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login_component__ = __webpack_require__("../../../../../src/app/pages/auth/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__register_register_component__ = __webpack_require__("../../../../../src/app/pages/auth/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__auth_component__ = __webpack_require__("../../../../../src/app/pages/auth/auth.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__auth_routes__ = __webpack_require__("../../../../../src/app/pages/auth/auth.routes.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_7__auth_routes__["a" /* routes */])
            ],
            providers: [],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__auth_component__["a" /* AuthComponent */],
                __WEBPACK_IMPORTED_MODULE_3__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_4__register_register_component__["a" /* RegisterComponent */]
            ]
        })
    ], AuthModule);
    return AuthModule;
}());



/***/ }),

/***/ "../../../../../src/app/pages/auth/auth.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_login_component__ = __webpack_require__("../../../../../src/app/pages/auth/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__register_register_component__ = __webpack_require__("../../../../../src/app/pages/auth/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_component__ = __webpack_require__("../../../../../src/app/pages/auth/auth.component.ts");



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__auth_component__["a" /* AuthComponent */],
        children: [
            {
                path: 'login',
                component: __WEBPACK_IMPORTED_MODULE_0__login_login_component__["a" /* LoginComponent */]
            },
            {
                path: 'register',
                component: __WEBPACK_IMPORTED_MODULE_1__register_register_component__["a" /* RegisterComponent */]
            }
        ]
    }
];


/***/ }),

/***/ "../../../../../src/app/pages/auth/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <form #loginForm=\"ngForm\" (ngSubmit)=\"login()\">\n\n\n    <!-- EMAIL INPUT\n    ==================== -->\n    <div class=\"form-group form-material floating\" >\n      <input type=\"email\" class=\"form-control\" required\n             [(ngModel)]=\"formModel.email\" name=\"email\" #name=\"ngModel\"/>\n      <label class=\"floating-label\">Email</label>\n    </div>\n    <div [hidden]=\"name.valid || name.pristine\" style=\"padding: 2px\"\n         class=\"alert alert-danger\">\n      Email is required\n    </div>\n\n    <!-- PASSWORD INPUT\n    ======================== -->\n    <div class=\"form-group form-material floating\">\n      <input type=\"password\" class=\"form-control\" required\n             [(ngModel)]=\"formModel.password\" name=\"password\" #password=\"ngModel\"\n             minlength=\"5\" />\n      <label class=\"floating-label\">Password</label>\n    </div>\n    <div [hidden]=\"password.valid || password.pristine\" style=\"padding: 2px\" class=\"alert alert-danger\">\n      <ul style=\"list-style: none\">\n        <li [hidden]=\"!password.errors?.minlength\">\n          {{password?.errors?.minlength?.actualLength}} out of {{password?.errors?.minlength?.requiredLength}} characters</li>\n        <li [hidden]=\"!password.errors?.required\">Password is Required</li>\n      </ul>\n    </div>\n    <div class=\"form-group clearfix\">\n      <div class=\"checkbox-custom checkbox-inline checkbox-primary checkbox-lg float-left\">\n        <input type=\"checkbox\" id=\"inputCheckbox\"\n               [(ngModel)]=\"formModel.rememberMe\" name=\"remember\">\n        <label for=\"inputCheckbox\">Remember me</label>\n      </div>\n      <!--<a class=\"float-right\" href=\"forgot-password.html\">Forgot password?</a>-->\n    </div>\n\n\n\n    <!-- LOGIN BUTTON\n    ======================= -->\n    <button type=\"submit\" class=\"btn btn-primary btn-block btn-lg mt-40\"\n            [disabled]=\"!loginForm.form.valid\">Login</button>\n\n\n\n  </form>\n  <p class=\"mt-1\">Still no account? Please go to <a [routerLink]=\"'/auth/register'\">Register</a></p>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/auth/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_auth_auth_service__ = __webpack_require__("../../../../../src/app/core/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_auth_redirect_service__ = __webpack_require__("../../../../../src/app/core/auth/redirect.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router, reDirService) {
        this.authService = authService;
        this.router = router;
        this.reDirService = reDirService;
    }
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.authService.login({
            email: this.formModel.email,
            password: this.formModel.password
        }).subscribe(function (res) {
            _this.router.navigateByUrl(_this.reDirService.getRedirect() || '/welcome');
        }, function (err) {
            alert("Invalid Login!");
        });
    };
    LoginComponent.prototype.setupFormModel = function () {
        this.formModel = {
            email: '',
            password: ''
        };
    };
    LoginComponent.prototype.ngOnInit = function () {
        document.body.classList.add('page-login-v3', 'layout-full');
        this.setupFormModel();
    };
    LoginComponent.prototype.ngOnDestroy = function () {
        document.body.classList.remove('page-login-v3', 'layout-full');
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/pages/auth/login/login.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__core_auth_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__core_auth_redirect_service__["a" /* RedirectService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/auth/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <form #loginForm=\"ngForm\" (ngSubmit)=\"onSubmit()\">\n    <div class=\"form-group form-material floating\" >\n      <input class=\"form-control\" required\n             [(ngModel)]=\"model.name\" name=\"name\" #name=\"ngModel\"/>\n      <label class=\"floating-label\">Name</label>\n    </div>\n    <div class=\"form-group form-material floating\" >\n      <input type=\"email\" class=\"form-control\" required\n             [(ngModel)]=\"model.email\" name=\"email\" #email=\"ngModel\"/>\n      <label class=\"floating-label\">Email</label>\n    </div>\n    <div [hidden]=\"email.valid || email.pristine\" style=\"padding: 2px\"\n         class=\"alert alert-danger\">\n      Email is required\n    </div>\n    <div class=\"form-group form-material floating\">\n      <input type=\"password\" class=\"form-control\" required\n             [(ngModel)]=\"model.password\" name=\"password\" #password=\"ngModel\"\n             minlength=\"5\" />\n      <label class=\"floating-label\">Password</label>\n    </div>\n    <div class=\"form-group form-material floating\">\n      <input type=\"password\" class=\"form-control\" required\n             [(ngModel)]=\"model.passwordConfirm\" name=\"passwordConfirm\" #passwordConfirm=\"ngModel\"\n             minlength=\"5\" />\n      <label class=\"floating-label\">Confirm Password</label>\n    </div>\n    <div [hidden]=\"password.valid || password.pristine\" style=\"padding: 2px\" class=\"alert alert-danger\">\n      <ul style=\"list-style: none\">\n        <li [hidden]=\"!password.errors?.minlength\">\n          {{password.errors?.minlength?.actualLength}} out of {{password.errors?.minlength?.requiredLength}} characters</li>\n        <li [hidden]=\"!password.errors?.required\">Password is Required</li>\n      </ul>\n    </div>\n    <div [hidden]=\"password.value===passwordConfirm.value\" style=\"padding: 2px\" class=\"alert alert-danger\">\n      <span>passwords do not match</span>\n    </div>\n    <div class=\"form-group clearfix\">\n      <div class=\"checkbox-custom checkbox-inline checkbox-primary checkbox-lg float-left\">\n        <input type=\"checkbox\" name=\"remember\">\n        <label>Remember me</label>\n      </div>\n      <!--<a class=\"float-right\" href=\"javascript:void(0)\">Forgot password?</a>-->\n    </div>\n    <button type=\"submit\" class=\"btn btn-primary btn-block btn-lg mt-40\"\n            [disabled]=\"!loginForm.form.valid\">Register</button>\n  </form>\n  <p class=\"mt-1\">Already have an account? Please go to <a [routerLink]=\"'/auth/login'\">Login</a></p>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/auth/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RegisterFormModel = /** @class */ (function () {
    function RegisterFormModel(name, email, password, passwordConfirm) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.passwordConfirm = passwordConfirm;
    }
    return RegisterFormModel;
}());
var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(router) {
        this.router = router;
        this.model = new RegisterFormModel('', '', '', '');
    }
    RegisterComponent.prototype.ngOnInit = function () {
        document.body.classList.add('page-login-v3', 'layout-full');
    };
    RegisterComponent.prototype.ngOnDestroy = function () {
        document.body.classList.remove('page-login-v3', 'layout-full');
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-register',
            template: __webpack_require__("../../../../../src/app/pages/auth/register/register.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ })

});
//# sourceMappingURL=auth.module.chunk.js.map