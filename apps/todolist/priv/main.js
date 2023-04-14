"use strict";
(self["webpackChunkmy_app"] = self["webpackChunkmy_app"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-page/login-page.component */ 4680);
/* harmony import */ var _registration_page_registration_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./registration-page/registration-page.component */ 6626);
/* harmony import */ var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home-page/home-page.component */ 5079);
/* harmony import */ var _is_logged_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./is-logged.guard */ 4768);
/* harmony import */ var _is_anonymous_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./is-anonymous.guard */ 7166);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);








const routes = [
    { path: '', component: _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_2__.HomePageComponent, canActivate: [_is_logged_guard__WEBPACK_IMPORTED_MODULE_3__.IsLoggedGuard] },
    { path: 'login', component: _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_0__.LoginPageComponent, canActivate: [_is_anonymous_guard__WEBPACK_IMPORTED_MODULE_4__.IsAnonymousGuard] },
    { path: 'registration', component: _registration_page_registration_page_component__WEBPACK_IMPORTED_MODULE_1__.RegistrationPageComponent, canActivate: [_is_anonymous_guard__WEBPACK_IMPORTED_MODULE_4__.IsAnonymousGuard] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 5474);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 3158);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _auth_manager_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth-manager.service */ 4459);
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./message.service */ 4206);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);
/* harmony import */ var _self_closing_alert_self_closing_alert_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./self-closing-alert/self-closing-alert.component */ 3784);










const _c0 = function () { return { exact: true }; };
function AppComponent_li_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 10)(1, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Home ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("active", ctx_r0.router.isActive("/", true));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](3, _c0));
} }
function AppComponent_li_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 10)(1, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Login ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("active", ctx_r1.router.isActive("/login", false));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](3, _c0));
} }
function AppComponent_li_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 10)(1, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Registration ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("active", ctx_r2.router.isActive("/registration", false));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](3, _c0));
} }
function AppComponent_li_11_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 10)(1, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppComponent_li_11_Template_a_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r5.logout($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Logout ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} }
function AppComponent_app_self_closing_alert_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-self-closing-alert", 15);
} if (rf & 2) {
    const message_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("message", message_r7);
} }
class AppComponent {
    constructor(router, authManager, messageService, http) {
        this.router = router;
        this.authManager = authManager;
        this.messageService = messageService;
        this.http = http;
        this.title = 'my-app';
        this.response$ = null;
        this.error = null;
    }
    logout(e) {
        e.preventDefault();
        this.http
            .post('api/logout', {})
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)((resp) => {
            this.authManager.updateSession();
            this.error = resp.error?.error || null;
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(() => new Error('Something bad happened; please try again later.'));
        }))
            .subscribe((response) => {
            this.authManager.updateSession();
            if (response.message) {
                this.messageService.add(response.message);
            }
            this.router.navigate(['/login']);
        });
    }
    trackByFn(i) {
        // this.messageService.delete(i);
        return i;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_auth_manager_service__WEBPACK_IMPORTED_MODULE_0__.AuthManagerService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_message_service__WEBPACK_IMPORTED_MODULE_1__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 15, vars: 5, consts: [[1, "navbar", "navbar-expand-sm", "navbar-dark", "bg-success"], [1, "container-fluid"], ["routerLink", "/", 1, "navbar-brand"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "ms-auto", "mb-2", "mb-lg-0"], ["class", "nav-item", 4, "ngIf"], [1, "container", "py-4"], [3, "message", 4, "ngFor", "ngForOf"], [1, "nav-item"], ["routerLink", "/", "routerLinkActive", "is-active", 1, "nav-link", 3, "routerLinkActiveOptions"], ["routerLink", "/login", "routerLinkActive", "is-active", 1, "nav-link", 3, "routerLinkActiveOptions"], ["routerLink", "/registration", "routerLinkActive", "is-active", 1, "nav-link", 3, "routerLinkActiveOptions"], [1, "nav-link", 2, "cursor", "pointer", 3, "click"], [3, "message"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nav", 0)(1, "div", 1)(2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Todo");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 5)(7, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, AppComponent_li_8_Template, 3, 4, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, AppComponent_li_9_Template, 3, 4, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, AppComponent_li_10_Template, 3, 4, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, AppComponent_li_11_Template, 3, 0, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, AppComponent_app_self_closing_alert_13_Template, 1, 1, "app-self-closing-alert", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.authManager.isLogged());
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.authManager.isLogged());
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.authManager.isLogged());
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.authManager.isLogged());
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.messageService.all());
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLinkActive, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbNavbar, _self_closing_alert_self_closing_alert_component__WEBPACK_IMPORTED_MODULE_2__.SelfClosingAlertComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });
AppComponent.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: AppComponent, factory: AppComponent.ɵfac });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login-page/login-page.component */ 4680);
/* harmony import */ var _registration_page_registration_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./registration-page/registration-page.component */ 6626);
/* harmony import */ var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home-page/home-page.component */ 5079);
/* harmony import */ var _todo_item_form_todo_item_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./todo-item-form/todo-item-form.component */ 6327);
/* harmony import */ var _todo_search_form_todo_search_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./todo-search-form/todo-search-form.component */ 8731);
/* harmony import */ var _date_time_input_group_date_time_input_group_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./date-time-input-group/date-time-input-group.component */ 5865);
/* harmony import */ var _form_control_form_control_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./form-control/form-control.component */ 452);
/* harmony import */ var _self_closing_alert_self_closing_alert_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./self-closing-alert/self-closing-alert.component */ 3784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2560);















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.NgbModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpClientModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_2__.LoginPageComponent,
        _registration_page_registration_page_component__WEBPACK_IMPORTED_MODULE_3__.RegistrationPageComponent,
        _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_4__.HomePageComponent,
        _todo_item_form_todo_item_form_component__WEBPACK_IMPORTED_MODULE_5__.TodoItemFormComponent,
        _todo_search_form_todo_search_form_component__WEBPACK_IMPORTED_MODULE_6__.TodoSearchFormComponent,
        _date_time_input_group_date_time_input_group_component__WEBPACK_IMPORTED_MODULE_7__.DateTimeInputGroupComponent,
        _form_control_form_control_component__WEBPACK_IMPORTED_MODULE_8__.FormControlComponent,
        _self_closing_alert_self_closing_alert_component__WEBPACK_IMPORTED_MODULE_9__.SelfClosingAlertComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.NgbModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpClientModule] }); })();


/***/ }),

/***/ 4459:
/*!*****************************************!*\
  !*** ./src/app/auth-manager.service.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthManagerService": () => (/* binding */ AuthManagerService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 3158);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 5474);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8987);



class AuthManagerService {
    constructor(http) {
        this.http = http;
    }
    updateSession() {
        let match = document.cookie.match(/(?:^|\s)session-expiry=([^;]+)/);
        if (match !== null && match.length > 0) {
            localStorage.setItem('session-expiry', match[1]);
        }
    }
    isLogged() {
        let expiry = localStorage.getItem('session-expiry') || '0';
        return parseInt(expiry) >= (new Date().getTime() / 1000);
    }
    keepSessionAlive() {
        this.http.get('api/keep-alive')
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_0__.catchError)((response) => {
            this.updateSession();
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.throwError)(() => new Error('Something gone wrong.'));
        }))
            .subscribe((response) => {
            this.updateSession();
        });
    }
}
AuthManagerService.ɵfac = function AuthManagerService_Factory(t) { return new (t || AuthManagerService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient)); };
AuthManagerService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: AuthManagerService, factory: AuthManagerService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 5865:
/*!**************************************************************************!*\
  !*** ./src/app/date-time-input-group/date-time-input-group.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DateTimeInputGroupComponent": () => (/* binding */ DateTimeInputGroupComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 2508);




class DateTimeInputGroupComponent {
    constructor() {
        this.propagateChange = (_) => { };
    }
    get date() {
        return this.getDate();
    }
    set date(value) {
        this._date = value;
        this.updateValue();
        this.propagateChange(this.value);
    }
    get time() {
        return this.getTime();
    }
    set time(value) {
        this._time = value;
        this.updateValue();
        this.propagateChange(this.value);
    }
    writeValue(value) {
        if (value !== undefined) {
            this.value = value;
            this._date = this.getDate();
            this._time = this.getTime();
        }
    }
    registerOnChange(fn) {
        this.propagateChange = fn;
    }
    registerOnTouched(fn) { }
    setDisabledState(isDisabled) { }
    updateValue() {
        if (this._date && this._time) {
            this.value = this._date + ' ' + this._time + ':00';
        }
        else if (this._date || this._time) {
            let today = new Date();
            let day = (today.getDate() < 10 ? '0' : '') + today.getDate();
            let month = (today.getMonth() < 9 ? '0' : '') + (today.getMonth() + 1);
            let date = this._date || `${today.getFullYear()}-${month}-${day}`;
            let time = this._time ? (this._time + ':00') : '00:00:00';
            this.value = date + ' ' + time;
        }
        else {
            this.value = null;
        }
    }
    getDate() {
        if (this.value) {
            let [date, _] = this.value.split(' ');
            return date;
        }
        else {
            return null;
        }
    }
    getTime() {
        if (this.value) {
            let [_, time] = this.value.split(' ');
            return time;
        }
        else {
            return null;
        }
    }
}
DateTimeInputGroupComponent.ɵfac = function DateTimeInputGroupComponent_Factory(t) { return new (t || DateTimeInputGroupComponent)(); };
DateTimeInputGroupComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DateTimeInputGroupComponent, selectors: [["app-date-time-input-group"]], inputs: { label: "label", name: "name", value: "value" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALUE_ACCESSOR,
                multi: true,
                useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => DateTimeInputGroupComponent),
            }
        ])], decls: 5, vars: 8, consts: [[1, "input-group", "my-3"], [1, "form-label", "w-100", 3, "for"], ["type", "time", 1, "form-control", 2, "border-radius", "6px 0 0 6px", 3, "ngModel", "id", "name", "ngModelChange"], ["type", "date", 1, "form-control", 2, "border-radius", "0 6px 6px 0", 3, "ngModel", "id", "name", "ngModelChange"]], template: function DateTimeInputGroupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DateTimeInputGroupComponent_Template_input_ngModelChange_3_listener($event) { return ctx.time = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DateTimeInputGroupComponent_Template_input_ngModelChange_4_listener($event) { return ctx.date = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", ctx.name + "From");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.label);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.time)("id", ctx.name + "Time")("name", ctx.name + "_time");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.date)("id", ctx.name + "Date")("name", ctx.name + "_date");
    } }, dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgModel], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXRlLXRpbWUtaW5wdXQtZ3JvdXAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 452:
/*!********************************************************!*\
  !*** ./src/app/form-control/form-control.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormControlComponent": () => (/* binding */ FormControlComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);





function FormControlComponent_input_3_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FormControlComponent_input_3_Template_input_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r3.value = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.value)("type", ctx_r0.type)("name", ctx_r0.name)("id", ctx_r0.name);
} }
function FormControlComponent_textarea_4_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "textarea", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FormControlComponent_textarea_4_Template_textarea_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r5.value = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.value)("name", ctx_r1.name)("id", ctx_r1.name);
} }
function FormControlComponent_small_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.error);
} }
class FormControlComponent {
    constructor() {
        this.name = '';
        this.error = null;
        this.type = 'text';
        this.propagateChange = (_) => { };
    }
    set value(value) {
        this._value = value;
        this.propagateChange(this._value);
        this.removeError();
    }
    get value() {
        return this._value;
    }
    writeValue(value) {
        if (value !== undefined) {
            this._value = value;
        }
    }
    registerOnChange(fn) {
        this.propagateChange = fn;
    }
    registerOnTouched(fn) { }
    setDisabledState(isDisabled) { }
    removeError() {
        this.error = null;
    }
}
FormControlComponent.ɵfac = function FormControlComponent_Factory(t) { return new (t || FormControlComponent)(); };
FormControlComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FormControlComponent, selectors: [["app-form-control"]], inputs: { label: "label", name: "name", error: "error", type: "type" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALUE_ACCESSOR,
                multi: true,
                useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => FormControlComponent),
            }
        ])], decls: 6, vars: 4, consts: [[1, "my-3"], ["for", "statusInput", 1, "form-label"], ["class", "form-control", 3, "ngModel", "type", "name", "id", "ngModelChange", 4, "ngIf"], ["class", "form-control", 3, "ngModel", "name", "id", "ngModelChange", 4, "ngIf"], ["class", "text-danger my-3", 4, "ngIf"], [1, "form-control", 3, "ngModel", "type", "name", "id", "ngModelChange"], [1, "form-control", 3, "ngModel", "name", "id", "ngModelChange"], [1, "text-danger", "my-3"]], template: function FormControlComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FormControlComponent_input_3_Template, 1, 4, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, FormControlComponent_textarea_4_Template, 1, 3, "textarea", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, FormControlComponent_small_5_Template, 2, 1, "small", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.label);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type !== "textarea");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "textarea");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.error);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgModel], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3JtLWNvbnRyb2wuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 5079:
/*!**************************************************!*\
  !*** ./src/app/home-page/home-page.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageComponent": () => (/* binding */ HomePageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _todo_item_manager_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../todo-item-manager.service */ 9482);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _todo_item_form_todo_item_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../todo-item-form/todo-item-form.component */ 6327);
/* harmony import */ var _todo_search_form_todo_search_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../todo-search-form/todo-search-form.component */ 8731);





const _c0 = ["todoItemForm"];
function HomePageComponent_div_7_small_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "small", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Deadline: ", item_r2.deadline, "");
} }
function HomePageComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 5)(1, "div", 6)(2, "div", 7)(3, "h5", 8)(4, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HomePageComponent_div_7_Template_button_click_4_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6); const item_r2 = restoredCtx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r5.editItem(item_r2)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HomePageComponent_div_7_Template_button_click_6_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6); const item_r2 = restoredCtx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r7.deleteItem(item_r2)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "small", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "small", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, HomePageComponent_div_7_small_12_Template, 2, 1, "small", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Created at: ", item_r2.created_at, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Status: ", item_r2.status, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r2.deadline);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r2.text);
} }
class HomePageComponent {
    constructor(todoItemManager) {
        this.todoItemManager = todoItemManager;
        this.currentTodoItem = this.todoItemManager.emptyTodoItem();
    }
    ngOnInit() {
        this.todoItemManager.load();
    }
    editItem(item) {
        this.todoItemForm.open();
        this.currentTodoItem = this.todoItemManager.cloneTodoItem(item);
    }
    deleteItem(item) {
        if (confirm('Are you sure you want to delete this item?')) {
            this.todoItemManager.delete(item);
        }
    }
}
HomePageComponent.ɵfac = function HomePageComponent_Factory(t) { return new (t || HomePageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_todo_item_manager_service__WEBPACK_IMPORTED_MODULE_0__.TodoItemManagerService)); };
HomePageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: HomePageComponent, selectors: [["app-home-page"]], viewQuery: function HomePageComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.todoItemForm = _t.first);
    } }, decls: 8, vars: 2, consts: [[1, "d-block"], [3, "todoItem"], ["todoItemForm", ""], [1, "row"], ["class", "col-12 col-md-6 col-lg-4 mt-3", 4, "ngFor", "ngForOf"], [1, "col-12", "col-md-6", "col-lg-4", "mt-3"], [1, "card"], [1, "card-body"], [1, "card-title"], [1, "btn", "btn-sm", "btn-primary", 3, "click"], [1, "btn", "btn-sm", "btn-danger", 3, "click"], [1, "card-text", "d-block"], ["class", "card-text d-block", 4, "ngIf"], [1, "card-text"]], template: function HomePageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Todo");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "app-todo-item-form", 1, 2)(5, "app-todo-search-form");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, HomePageComponent_div_7_Template, 15, 4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("todoItem", ctx.currentTodoItem);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.todoItemManager.filteredTodoItems);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _todo_item_form_todo_item_form_component__WEBPACK_IMPORTED_MODULE_1__.TodoItemFormComponent, _todo_search_form_todo_search_form_component__WEBPACK_IMPORTED_MODULE_2__.TodoSearchFormComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLXBhZ2UuY29tcG9uZW50LmNzcyJ9 */"] });
HomePageComponent.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: HomePageComponent, factory: HomePageComponent.ɵfac });


/***/ }),

/***/ 7166:
/*!***************************************!*\
  !*** ./src/app/is-anonymous.guard.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IsAnonymousGuard": () => (/* binding */ IsAnonymousGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _auth_manager_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth-manager.service */ 4459);




class IsAnonymousGuard {
    constructor(router, authManager) {
        this.router = router;
        this.authManager = authManager;
    }
    canActivate(route, state) {
        if (this.authManager.isLogged()) {
            return this.router.parseUrl('/');
        }
        else {
            return true;
        }
    }
}
IsAnonymousGuard.ɵfac = function IsAnonymousGuard_Factory(t) { return new (t || IsAnonymousGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_auth_manager_service__WEBPACK_IMPORTED_MODULE_0__.AuthManagerService)); };
IsAnonymousGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: IsAnonymousGuard, factory: IsAnonymousGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 4768:
/*!************************************!*\
  !*** ./src/app/is-logged.guard.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IsLoggedGuard": () => (/* binding */ IsLoggedGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _auth_manager_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth-manager.service */ 4459);




class IsLoggedGuard {
    constructor(router, authManager) {
        this.router = router;
        this.authManager = authManager;
    }
    canActivate(route, state) {
        if (this.authManager.isLogged()) {
            return true;
        }
        else {
            return this.router.parseUrl('/login');
        }
    }
}
IsLoggedGuard.ɵfac = function IsLoggedGuard_Factory(t) { return new (t || IsLoggedGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_auth_manager_service__WEBPACK_IMPORTED_MODULE_0__.AuthManagerService)); };
IsLoggedGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: IsLoggedGuard, factory: IsLoggedGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 4680:
/*!****************************************************!*\
  !*** ./src/app/login-page/login-page.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageComponent": () => (/* binding */ LoginPageComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 5474);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 3158);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _auth_manager_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../auth-manager.service */ 4459);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../message.service */ 4206);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _form_control_form_control_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../form-control/form-control.component */ 452);









class LoginPageComponent {
    constructor(http, authManager, router, messageService) {
        this.http = http;
        this.authManager = authManager;
        this.router = router;
        this.messageService = messageService;
        this.error = null;
    }
    onSubmit(form) {
        this.http
            .post('api/login', form.value)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)((response) => {
            this.authManager.updateSession();
            this.error = response.error.error;
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(() => new Error('Login failed.'));
        }))
            .subscribe((response) => {
            this.authManager.updateSession();
            if (response.message) {
                this.messageService.add(response.message);
            }
            this.router.navigate(['/']);
        });
    }
    removeError() {
        this.error = null;
    }
}
LoginPageComponent.ɵfac = function LoginPageComponent_Factory(t) { return new (t || LoginPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_auth_manager_service__WEBPACK_IMPORTED_MODULE_0__.AuthManagerService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_message_service__WEBPACK_IMPORTED_MODULE_1__.MessageService)); };
LoginPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: LoginPageComponent, selectors: [["app-login-page"]], decls: 10, vars: 1, consts: [[3, "ngSubmit"], ["loginForm", "ngForm"], ["ngModel", "", "label", "Email", "name", "email", "type", "email"], ["emailInput", ""], ["ngModel", "", "label", "Password", "name", "password", "type", "password", 3, "error"], ["passwordInput", ""], ["type", "submit", 1, "btn", "btn-success", "btn-block", "w-100"]], template: function LoginPageComponent_Template(rf, ctx) { if (rf & 1) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "form", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngSubmit", function LoginPageComponent_Template_form_ngSubmit_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx.onSubmit(_r0)); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "app-form-control", 2, 3)(6, "app-form-control", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("error", ctx.error);
    } }, dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgForm, _form_control_form_control_component__WEBPACK_IMPORTED_MODULE_2__.FormControlComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi1wYWdlLmNvbXBvbmVudC5jc3MifQ== */"] });
LoginPageComponent.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: LoginPageComponent, factory: LoginPageComponent.ɵfac });


/***/ }),

/***/ 4206:
/*!************************************!*\
  !*** ./src/app/message.service.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Message": () => (/* binding */ Message),
/* harmony export */   "MessageService": () => (/* binding */ MessageService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class Message {
    constructor(content, type = 'success') {
        this.content = content;
        this.type = type;
    }
}
class MessageService {
    constructor() {
        this.messages = [];
    }
    all() {
        return this.messages;
    }
    add(message, type = 'success') {
        this.messages.push(new Message(message, type));
    }
    delete(message) {
        this.messages.splice(this.messages.indexOf(message), 1);
    }
}
MessageService.ɵfac = function MessageService_Factory(t) { return new (t || MessageService)(); };
MessageService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MessageService, factory: MessageService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 6626:
/*!******************************************************************!*\
  !*** ./src/app/registration-page/registration-page.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistrationPageComponent": () => (/* binding */ RegistrationPageComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 5474);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 3158);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../message.service */ 4206);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _form_control_form_control_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../form-control/form-control.component */ 452);








class RegistrationPageComponent {
    constructor(http, router, messageService) {
        this.http = http;
        this.router = router;
        this.messageService = messageService;
        this.errors = {};
    }
    onSubmit(form) {
        this.http
            .post('api/registration', form.value)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)((response) => {
            if (response.error.errors) {
                this.errors = response.error.errors;
            }
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(() => new Error('Registration failed.'));
        }))
            .subscribe((response) => {
            if (response.message) {
                this.messageService.add(response.message);
            }
            this.router.navigate(['/']);
        });
    }
    removeError(field) {
        this.errors[field] = null;
    }
}
RegistrationPageComponent.ɵfac = function RegistrationPageComponent_Factory(t) { return new (t || RegistrationPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_message_service__WEBPACK_IMPORTED_MODULE_0__.MessageService)); };
RegistrationPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: RegistrationPageComponent, selectors: [["app-registration-page"]], decls: 12, vars: 2, consts: [[3, "ngSubmit"], ["registrationForm", "ngForm"], ["ngModel", "", "label", "Email", "name", "email", "type", "email", 3, "error"], ["emailInput", ""], ["ngModel", "", "label", "Password", "name", "password", "type", "password", 3, "error"], ["passwordInput", ""], ["ngModel", "", "label", "Repeat password", "name", "repeat_password", "type", "password"], ["repeatPasswordInput", ""], ["type", "submit", 1, "btn", "btn-success", "btn-block", "w-100"]], template: function RegistrationPageComponent_Template(rf, ctx) { if (rf & 1) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "form", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function RegistrationPageComponent_Template_form_ngSubmit_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx.onSubmit(_r0)); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "app-form-control", 2, 3)(6, "app-form-control", 4, 5)(8, "app-form-control", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("error", ctx.errors["email"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("error", ctx.errors["password"]);
    } }, dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgForm, _form_control_form_control_component__WEBPACK_IMPORTED_MODULE_1__.FormControlComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWdpc3RyYXRpb24tcGFnZS5jb21wb25lbnQuY3NzIn0= */"] });
RegistrationPageComponent.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: RegistrationPageComponent, factory: RegistrationPageComponent.ɵfac });


/***/ }),

/***/ 3784:
/*!********************************************************************!*\
  !*** ./src/app/self-closing-alert/self-closing-alert.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelfClosingAlertComponent": () => (/* binding */ SelfClosingAlertComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../message.service */ 4206);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);



class SelfClosingAlertComponent {
    constructor(messageService) {
        this.messageService = messageService;
        this.delay = 10;
    }
    ngOnInit() {
        setTimeout(() => this.messageService.delete(this.message), this.delay * 1000);
    }
}
SelfClosingAlertComponent.ɵfac = function SelfClosingAlertComponent_Factory(t) { return new (t || SelfClosingAlertComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_message_service__WEBPACK_IMPORTED_MODULE_0__.MessageService)); };
SelfClosingAlertComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SelfClosingAlertComponent, selectors: [["app-self-closing-alert"]], inputs: { message: "message", delay: "delay" }, decls: 3, vars: 3, consts: [[3, "dismissible", "type", "closed"], ["selfClosingAlert", ""]], template: function SelfClosingAlertComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngb-alert", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("closed", function SelfClosingAlertComponent_Template_ngb_alert_closed_0_listener() { return ctx.messageService.delete(ctx.message); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dismissible", true)("type", ctx.message.type);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.message.content, "\n");
    } }, dependencies: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbAlert], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZWxmLWNsb3NpbmctYWxlcnQuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 6327:
/*!************************************************************!*\
  !*** ./src/app/todo-item-form/todo-item-form.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TodoItemFormComponent": () => (/* binding */ TodoItemFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _todo_item_manager_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../todo-item-manager.service */ 9482);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _date_time_input_group_date_time_input_group_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../date-time-input-group/date-time-input-group.component */ 5865);
/* harmony import */ var _form_control_form_control_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../form-control/form-control.component */ 452);






const _c0 = ["todoFormModal"];
function TodoItemFormComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 2)(1, "h4", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Todo item");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TodoItemFormComponent_ng_template_2_Template_button_click_3_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r8); const modal_r2 = restoredCtx.$implicit; return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](modal_r2.dismiss("Cross click")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 5)(5, "form", 6, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function TodoItemFormComponent_ng_template_2_Template_form_ngSubmit_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r8); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r9.onSubmit()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "app-form-control", 8, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function TodoItemFormComponent_ng_template_2_Template_app_form_control_ngModelChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r8); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r10.todoItem.text = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "app-form-control", 10, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function TodoItemFormComponent_ng_template_2_Template_app_form_control_ngModelChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r8); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r11.todoItem.status = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "app-date-time-input-group", 12, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function TodoItemFormComponent_ng_template_2_Template_app_date_time_input_group_ngModelChange_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r8); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r12.todoItem.deadline = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r1.todoItem.text)("error", ctx_r1.errors["text"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r1.todoItem.status)("error", ctx_r1.errors["status"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r1.todoItem.deadline);
} }
class TodoItemFormComponent {
    constructor(todoItemManager, modalService) {
        this.todoItemManager = todoItemManager;
        this.modalService = modalService;
        this.errors = {};
        this.emptyTodoItem = this.todoItemManager.emptyTodoItem;
    }
    open() {
        this.modalService.open(this.todoFormModal, { ariaLabelledBy: 'modal-basic-title' }).result.then(() => { }, () => { });
    }
    onSubmit() {
        let data = {};
        if (this.todoItem.deadline) {
            data = {
                text: this.todoItem.text,
                status: this.todoItem.status,
                deadline: this.todoItem.deadline
            };
        }
        else {
            data = {
                text: this.todoItem.text,
                status: this.todoItem.status
            };
        }
        let successCallback = (response) => {
            this.modalService.dismissAll();
        };
        let failureCallback = (response) => {
            if (response.error.errors) {
                this.errors = response.error.errors;
            }
        };
        if (this.todoItem.id) {
            this.todoItemManager.update(this.todoItem, data, successCallback, failureCallback);
        }
        else {
            this.todoItemManager.create(this.todoItem, data, successCallback, failureCallback);
        }
    }
}
TodoItemFormComponent.ɵfac = function TodoItemFormComponent_Factory(t) { return new (t || TodoItemFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_todo_item_manager_service__WEBPACK_IMPORTED_MODULE_0__.TodoItemManagerService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbModal)); };
TodoItemFormComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: TodoItemFormComponent, selectors: [["app-todo-item-form"]], viewQuery: function TodoItemFormComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.todoFormModal = _t.first);
    } }, inputs: { todoItem: "todoItem", todoItems: "todoItems" }, decls: 4, vars: 0, consts: [[1, "btn", "btn-success", "mr-3", 3, "click"], ["todoFormModal", ""], [1, "modal-header"], ["id", "modal-title", 1, "modal-title"], ["type", "button", "aria-describedby", "modal-title", 1, "btn-close", 3, "click"], [1, "modal-body"], [3, "ngSubmit"], ["todoItemForm", "ngForm"], ["label", "Text", "name", "text", "type", "textarea", 3, "ngModel", "error", "ngModelChange"], ["textInput", ""], ["label", "Status", "name", "status", 3, "ngModel", "error", "ngModelChange"], ["statusInput", ""], ["label", "Deadline", "name", "deadline", 3, "ngModel", "ngModelChange"], ["deadlineInput", ""], ["type", "submit", 1, "btn", "btn-success", "btn-block", "w-100"]], template: function TodoItemFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TodoItemFormComponent_Template_button_click_0_listener() { ctx.todoItem = ctx.emptyTodoItem(); return ctx.open(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Create todo\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, TodoItemFormComponent_ng_template_2_Template, 15, 5, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    } }, dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgForm, _date_time_input_group_date_time_input_group_component__WEBPACK_IMPORTED_MODULE_1__.DateTimeInputGroupComponent, _form_control_form_control_component__WEBPACK_IMPORTED_MODULE_2__.FormControlComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0b2RvLWl0ZW0tZm9ybS5jb21wb25lbnQuY3NzIn0= */"] });
TodoItemFormComponent.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: TodoItemFormComponent, factory: TodoItemFormComponent.ɵfac });


/***/ }),

/***/ 9482:
/*!**********************************************!*\
  !*** ./src/app/todo-item-manager.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TodoItemManagerService": () => (/* binding */ TodoItemManagerService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 3158);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 5474);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _auth_manager_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth-manager.service */ 4459);
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./message.service */ 4206);





class TodoItemManagerService {
    constructor(http, authManager, messageService) {
        this.http = http;
        this.authManager = authManager;
        this.messageService = messageService;
        this.todoItems = [];
        this.filteredTodoItems = [];
    }
    emptyTodoItem() {
        return {
            id: null,
            text: '',
            status: '',
            deadline: null,
            created_at: null,
            user_id: null
        };
    }
    getFiltered() {
        return this.filteredTodoItems;
    }
    find(id) {
        let items = this.todoItems.filter(i => i.id === id);
        return items.length ? items[0] : null;
    }
    cloneTodoItem(item) {
        // let newItem: TodoItem;
        // for (let key in item) {
        //   newItem[key as keyof TodoItem] = item[key as keyof TodoItem];
        // }
        // return newItem;
        return {
            id: item.id,
            text: item.text,
            status: item.status,
            deadline: item.deadline,
            created_at: item.created_at,
            user_id: item.user_id,
        };
    }
    load(successCallback = null, failureCallback = null) {
        this.http.get('api/todo')
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.catchError)((response) => {
            this.afterFailureResponse(response, failureCallback);
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(() => new Error('Todo items fetch failed.'));
        }))
            .subscribe((response) => {
            this.todoItems = response.data;
            this.filteredTodoItems = response.data;
            this.afterSuccessResponse(response, successCallback);
        });
    }
    create(item, data, successCallback = null, failureCallback = null) {
        this.http.post('api/todo', data)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.catchError)((response) => {
            this.afterFailureResponse(response, failureCallback);
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(() => new Error('Todo creation failed.'));
        }))
            .subscribe((response) => {
            this.todoItems.push(response.data);
            this.afterSuccessResponse(response, successCallback);
        });
    }
    update(item, data, successCallback = null, failureCallback = null) {
        this.http.put('api/todo/' + item.id, data)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.catchError)((response) => {
            this.afterFailureResponse(response, failureCallback);
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(() => new Error('Todo edition failed.'));
        }))
            .subscribe((response) => {
            let todoItem = response.data;
            for (let i in this.todoItems) {
                if (this.todoItems[i].id === todoItem.id) {
                    this.todoItems[i] = todoItem;
                    break;
                }
            }
            this.afterSuccessResponse(response, successCallback);
        });
    }
    delete(item, successCallback = null, failureCallback = null) {
        this.http.delete('api/todo/' + item.id)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.catchError)((response) => {
            this.afterFailureResponse(response, failureCallback);
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(() => new Error('Todo deletion failed.'));
        }))
            .subscribe((response) => {
            this.todoItems.splice(this.todoItems.indexOf(item), 1);
            this.afterSuccessResponse(response, successCallback);
        });
    }
    afterSuccessResponse(response, successCallback = null) {
        this.authManager.updateSession();
        if (response.message) {
            this.messageService.add(response.message);
        }
        if (successCallback) {
            successCallback(response);
        }
    }
    afterFailureResponse(response, failureCallback = null) {
        this.authManager.updateSession();
        if (response.error.error) {
            this.messageService.add(response.error.error, 'danger');
        }
        if (failureCallback) {
            failureCallback(response);
        }
    }
}
TodoItemManagerService.ɵfac = function TodoItemManagerService_Factory(t) { return new (t || TodoItemManagerService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_auth_manager_service__WEBPACK_IMPORTED_MODULE_0__.AuthManagerService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_message_service__WEBPACK_IMPORTED_MODULE_1__.MessageService)); };
TodoItemManagerService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: TodoItemManagerService, factory: TodoItemManagerService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 8731:
/*!****************************************************************!*\
  !*** ./src/app/todo-search-form/todo-search-form.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TodoSearchFormComponent": () => (/* binding */ TodoSearchFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _todo_item_manager_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../todo-item-manager.service */ 9482);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);
/* harmony import */ var _auth_manager_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth-manager.service */ 4459);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _date_time_input_group_date_time_input_group_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../date-time-input-group/date-time-input-group.component */ 5865);
/* harmony import */ var _form_control_form_control_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../form-control/form-control.component */ 452);








function TodoSearchFormComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 2)(1, "h4", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Search todos");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TodoSearchFormComponent_ng_template_2_Template_button_click_3_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7); const modal_r2 = restoredCtx.$implicit; return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](modal_r2.dismiss("Cross click")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 5)(5, "form", 6, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function TodoSearchFormComponent_ng_template_2_Template_form_ngSubmit_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r8.onSearch()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "app-form-control", 8, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function TodoSearchFormComponent_ng_template_2_Template_app_form_control_ngModelChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r9.textSearch = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "app-form-control", 10, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function TodoSearchFormComponent_ng_template_2_Template_app_form_control_ngModelChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r10.statusSearch = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "app-date-time-input-group", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function TodoSearchFormComponent_ng_template_2_Template_app_date_time_input_group_ngModelChange_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r11.createdFrom = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "app-date-time-input-group", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function TodoSearchFormComponent_ng_template_2_Template_app_date_time_input_group_ngModelChange_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r12.createdTo = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "app-date-time-input-group", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function TodoSearchFormComponent_ng_template_2_Template_app_date_time_input_group_ngModelChange_13_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r13.deadlineFrom = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "app-date-time-input-group", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function TodoSearchFormComponent_ng_template_2_Template_app_date_time_input_group_ngModelChange_14_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r14.deadlineTo = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 16)(16, "label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "Sort by");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "select", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function TodoSearchFormComponent_ng_template_2_Template_select_ngModelChange_18_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r15.sortBy = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "None");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, "Text");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, "Deadline");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, "Created at");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "div", 24)(30, "label", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31, "Sort ascending");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function TodoSearchFormComponent_ng_template_2_Template_input_ngModelChange_32_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r16.sortDirection = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "div", 27)(34, "label", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35, "Sort descending");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function TodoSearchFormComponent_ng_template_2_Template_input_ngModelChange_36_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r17.sortDirection = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](38, "Reset");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](40, "Search");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r1.textSearch);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r1.statusSearch);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r1.createdFrom);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r1.createdTo);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r1.deadlineFrom);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r1.deadlineTo);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r1.sortBy);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r1.sortDirection);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r1.sortDirection);
} }
class TodoSearchFormComponent {
    constructor(todoItemManager, modalService, authManager) {
        this.todoItemManager = todoItemManager;
        this.modalService = modalService;
        this.authManager = authManager;
        this.ASC = 'ASC';
        this.DESC = 'DESC';
        this.textSearch = '';
        this.statusSearch = '';
        this.deadlineFrom = '';
        this.deadlineTo = '';
        this.createdFrom = '';
        this.createdTo = '';
        this.sortBy = '';
        this.sortDirection = this.ASC;
    }
    onSearch() {
        this.todoItemManager.filteredTodoItems = this.todoItemManager.todoItems
            .filter(t => this.textSearch ? t.text.includes(this.textSearch) : true)
            .filter(t => this.statusSearch ? t.status.includes(this.statusSearch) : true)
            .filter(t => this.deadlineFrom ? (t.deadline && (t.deadline >= this.deadlineFrom)) : true)
            .filter(t => this.deadlineTo ? (t.deadline && (t.deadline <= this.deadlineTo)) : true)
            .filter(t => this.createdFrom ? (t.created_at && (t.created_at >= this.createdFrom)) : true)
            .filter(t => this.createdTo ? (t.created_at && (t.created_at <= this.createdTo)) : true);
        if (this.sortBy) {
            let key = this.sortBy;
            this.todoItemManager.filteredTodoItems = this.todoItemManager.filteredTodoItems
                .filter(t => t[key] !== null)
                .sort((a, b) => {
                let first = a[key];
                let second = b[key];
                if (first === second) {
                    return 0;
                }
                else if ((this.sortDirection === this.ASC) ? (first < second) : (first > second)) {
                    return -1;
                }
                else {
                    return 1;
                }
            });
        }
        this.modalService.dismissAll();
        this.authManager.keepSessionAlive();
    }
    open(content) {
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(() => { }, () => { });
    }
}
TodoSearchFormComponent.ɵfac = function TodoSearchFormComponent_Factory(t) { return new (t || TodoSearchFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_todo_item_manager_service__WEBPACK_IMPORTED_MODULE_0__.TodoItemManagerService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_auth_manager_service__WEBPACK_IMPORTED_MODULE_1__.AuthManagerService)); };
TodoSearchFormComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: TodoSearchFormComponent, selectors: [["app-todo-search-form"]], decls: 4, vars: 0, consts: [[1, "btn", "btn-primary", "mr-3", 3, "click"], ["todoSearchModal", ""], [1, "modal-header"], ["id", "modal-title", 1, "modal-title"], ["type", "button", "aria-describedby", "modal-title", 1, "btn-close", 3, "click"], [1, "modal-body"], [3, "ngSubmit"], ["todoSearchForm", "ngForm"], ["label", "Text", "name", "text", 3, "ngModel", "ngModelChange"], ["textSearchInput", ""], ["label", "Status", "name", "status", 3, "ngModel", "ngModelChange"], ["statusSearchInput", ""], ["label", "Created from", "name", "createdFrom", 3, "ngModel", "ngModelChange"], ["label", "Created to", "name", "createdTo", 3, "ngModel", "ngModelChange"], ["label", "Deadline from", "name", "deadlineFrom", 3, "ngModel", "ngModelChange"], ["label", "Deadline to", "name", "deadlineFrom", 3, "ngModel", "ngModelChange"], [1, "my-3"], ["for", "statusInput", 1, "form-label"], ["name", "sort_by", 1, "form-select", 3, "ngModel", "ngModelChange"], ["ngValue", "", "selected", ""], ["ngValue", "text"], ["ngValue", "status"], ["ngValue", "deadline"], ["ngValue", "createed_at"], [1, "form-check", "mt-3"], ["for", "sortDirectionAsc", 1, "form-label"], ["type", "radio", "name", "sort_direction", "id", "sortDirectionAsc", "value", "ASC", "checked", "", 1, "form-check-input", 3, "ngModel", "ngModelChange"], [1, "form-check", "mb-3"], ["for", "sortDirectionDesc", 1, "form-label"], ["type", "radio", "name", "sort_direction", "id", "sortDirectionDesc", "value", "DESC", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["type", "reset", 1, "btn", "btn-danger", "btn-block", "w-100", "mb-3"], ["type", "submit", 1, "btn", "btn-success", "btn-block", "w-100"]], template: function TodoSearchFormComponent_Template(rf, ctx) { if (rf & 1) {
        const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TodoSearchFormComponent_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r18); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx.open(_r0)); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Filter todos\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, TodoSearchFormComponent_ng_template_2_Template, 41, 9, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    } }, dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgForm, _date_time_input_group_date_time_input_group_component__WEBPACK_IMPORTED_MODULE_2__.DateTimeInputGroupComponent, _form_control_form_control_component__WEBPACK_IMPORTED_MODULE_3__.FormControlComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0b2RvLXNlYXJjaC1mb3JtLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map