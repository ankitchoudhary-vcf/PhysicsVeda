(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Ankit\Documents\GitHub\PhysicsVeda\src\main.ts */"zUnb");


/***/ }),

/***/ "0z2C":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "A3xY":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
const environment = {
    production: true
};


/***/ }),

/***/ "BuFo":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_home_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./home.component.html */ "tXZI");
/* harmony import */ var _home_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.component.css */ "0z2C");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let HomeComponent = class HomeComponent {
    constructor() {
        this.typewriter_text = "Welcome To The Official Website Of PhysicsVeda.";
        this.typewriter_display = "";
    }
    ngOnInit() {
        this.typingCallback(this);
    }
    typingCallback(that) {
        let total_length = that.typewriter_text.length;
        let current_length = that.typewriter_display.length;
        if (current_length < total_length) {
            that.typewriter_display += that.typewriter_text[current_length];
            setTimeout(that.typingCallback, 200, that);
        }
        else {
            that.typewriter_display = "";
            that.typingCallback(that);
        }
    }
};
HomeComponent.ctorParameters = () => [];
HomeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-home',
        template: _raw_loader_home_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_home_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], HomeComponent);



/***/ }),

/***/ "DIg/":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuYXZiYXIuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "FvIq":
/*!*******************************************************!*\
  !*** ./src/app/components/videos/videos.component.ts ***!
  \*******************************************************/
/*! exports provided: VideosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideosComponent", function() { return VideosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_videos_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./videos.component.html */ "cipo");
/* harmony import */ var _videos_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./videos.component.css */ "ZBOX");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_youtube_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/youtube.service */ "j9sA");





let VideosComponent = class VideosComponent {
    constructor(API) {
        this.API = API;
    }
    ngOnInit() {
        this.API.getData('/playlists?part=snippet&channelId=UCvFUbROutPnoIgfZrpJ6gNw&maxResults=50&key=AIzaSyBlKSy2HuQVA5RsjHFxJ3hXSnLTSsGlRPA').then((value) => {
            this.data = value;
            let length = this.data.items.length;
            this.data.items.splice(length - 1, 1);
            this.data = this.data.items;
        });
    }
};
VideosComponent.ctorParameters = () => [
    { type: src_app_services_youtube_service__WEBPACK_IMPORTED_MODULE_4__["YoutubeService"] }
];
VideosComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-videos',
        template: _raw_loader_videos_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_videos_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], VideosComponent);



/***/ }),

/***/ "G2Gn":
/*!*********************************************************!*\
  !*** ./src/app/components/contact/contact.component.ts ***!
  \*********************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_contact_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./contact.component.html */ "jmJk");
/* harmony import */ var _contact_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.component.css */ "WE7b");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let ContactComponent = class ContactComponent {
    constructor() { }
    ngOnInit() {
    }
};
ContactComponent.ctorParameters = () => [];
ContactComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-contact',
        template: _raw_loader_contact_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_contact_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ContactComponent);



/***/ }),

/***/ "G4NA":
/*!*****************************************************!*\
  !*** ./src/app/components/video/video.component.ts ***!
  \*****************************************************/
/*! exports provided: VideoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoComponent", function() { return VideoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_video_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./video.component.html */ "vqfB");
/* harmony import */ var _video_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./video.component.css */ "Or+5");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_youtube_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/youtube.service */ "j9sA");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");







let VideoComponent = class VideoComponent {
    constructor(route, API, sanitizer) {
        this.route = route;
        this.API = API;
        this.sanitizer = sanitizer;
    }
    ngOnInit() {
        this.route.paramMap.subscribe((params) => {
            this.playlist = params.get('id');
            this.playlist = this.playlist.slice(4);
        });
        this.APIRoute = '/playlistItems?playlistId=' + this.playlist + '&maxResults=50&part=snippet&key=AIzaSyBlKSy2HuQVA5RsjHFxJ3hXSnLTSsGlRPA';
        this.API.getData(this.APIRoute).then((value) => {
            this.data = value;
            let j = 0;
            for (let i = 0; i < this.data.items.length; i++) {
                if (this.data.items[i].snippet.title === "Deleted video") {
                    // console.log(i)
                    this.data.items.splice(i, 1);
                    break;
                }
            }
            let iframe = this.data.items[0].snippet.resourceId.videoId;
            iframe = 'https://www.youtube.com/embed/' + iframe;
            this.url = this.sanitizer.bypassSecurityTrustResourceUrl(iframe);
        });
    }
    SetURL(id) {
        console.log(id);
        let iframe = 'https://www.youtube.com/embed/' + id;
        console.log(iframe);
        this.url = this.sanitizer.bypassSecurityTrustResourceUrl(iframe);
    }
};
VideoComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: src_app_services_youtube_service__WEBPACK_IMPORTED_MODULE_5__["YoutubeService"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"] }
];
VideoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-video',
        template: _raw_loader_video_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_video_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], VideoComponent);



/***/ }),

/***/ "GpEA":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".footer{\r\n    background-color: #000000;\r\n    color: #ffffff;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0lBQ3pCLGNBQWM7QUFDbEIiLCJmaWxlIjoiZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdGVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG59Il19 */");

/***/ }),

/***/ "LmEr":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./footer.component.html */ "WwN9");
/* harmony import */ var _footer_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer.component.css */ "GpEA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent.ctorParameters = () => [];
FooterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-footer',
        template: _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_footer_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], FooterComponent);



/***/ }),

/***/ "Or+5":
/*!******************************************************!*\
  !*** ./src/app/components/video/video.component.css ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card-content{\r\n    max-height: 550px;\r\n    overflow-y: scroll;\r\n}\r\niframe{\r\n    width:100%;\r\n    height:360px\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZGVvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxVQUFVO0lBQ1Y7QUFDSiIsImZpbGUiOiJ2aWRlby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQtY29udGVudHtcclxuICAgIG1heC1oZWlnaHQ6IDU1MHB4O1xyXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG59XHJcbmlmcmFtZXtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBoZWlnaHQ6MzYwcHhcclxufSJdfQ== */");

/***/ }),

/***/ "S6iF":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar notifications is-primary\" role=\"navigation\" aria-label=\"main navigation\">\n    <div class=\"navbar-brand\">\n        <a class=\"navbar-item\" [routerLink]=\"['']\">\n            <img src=\"./assets/PhysicsVeda.ico\">\n            <p class=\"title is-3 mx-2\">PhysicsVeda</p>\n        </a>\n\n        <a role=\"button\" class=\"navbar-burger\" aria-label=\"menu\" aria-expanded=\"false\" [class.is-active]=\"isActive\" (click)=\"isActive = !isActive\"\n            data-target=\"navbarBasicExample\">\n            <span aria-hidden=\"true\"></span>\n            <span aria-hidden=\"true\"></span>\n            <span aria-hidden=\"true\"></span>\n        </a>\n    </div>\n\n    <div id=\"navbarBasicExample\" class=\"navbar-menu\" [class.is-active]=\"isActive\">\n        <div class=\"navbar-start has-text-weight-bold\">\n            <a class=\"navbar-item\" [routerLink]=\"['']\">\n                Home\n            </a>\n\n            <a class=\"navbar-item\" [routerLink]=\"['videos']\">\n                Videos\n            </a>\n\n            <!-- <a class=\"navbar-item\" [routerLink]=\"['']\">\n                Blogs\n            </a> -->\n\n            <a class=\"navbar-item\" [routerLink]=\"['contact']\">\n                Contact Me\n            </a>\n        </div>\n\n        <!-- <div class=\"navbar-end\" *ngIf=\"!isLogin\">\n            <div class=\"buttons has-addons mx-2\">\n                <a [routerLink]=\"['login']\" class=\"button is-rounded \">Login</a>\n                <a [routerLink]=\"['join']\" class=\"button is-danger is-rounded\">Join Now</a>\n            </div>\n        </div>\n        <div class=\"navbar-end\" *ngIf=\"isLogin\">\n          <div class=\"buttons has-addons mx-2\">\n              <a [routerLink]=\"['profile']\" class=\"button is-rounded \">Profile</a>\n          </div>\n        </div> -->\n        \n    </div>\n</nav>");

/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.css */ "A3xY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_youtube_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/youtube.service */ "j9sA");





let AppComponent = class AppComponent {
    constructor() {
        this.title = 'PhysicsVeda';
    }
};
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        providers: [_services_youtube_service__WEBPACK_IMPORTED_MODULE_4__["YoutubeService"]],
        styles: [_app_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AppComponent);



/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n<app-navbar></app-navbar>\r\n<router-outlet></router-outlet>\r\n<app-footer></app-footer>\r\n");

/***/ }),

/***/ "WE7b":
/*!**********************************************************!*\
  !*** ./src/app/components/contact/contact.component.css ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb250YWN0LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "WwN9":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<footer class=\"footer\">\r\n    <div class=\"content has-text-centered\">\r\n        <p>\r\n            Design And Developed By VCF Developers || For PhysicsVeda\r\n        </p>\r\n        <hr>\r\n        <p class=\"copyright\" style=\"font-family: Arial, Helvetica, sans-serif;font-size:14px;\">Copyright © 2020-2021 PhysicsVeda</p>\r\n    </div>\r\n</footer>");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "hrlM");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/footer/footer.component */ "LmEr");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/home/home.component */ "BuFo");
/* harmony import */ var _components_videos_videos_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/videos/videos.component */ "FvIq");
/* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/contact/contact.component */ "G2Gn");
/* harmony import */ var _services_youtube_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/youtube.service */ "j9sA");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _components_video_video_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/video/video.component */ "G4NA");













let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"],
            _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
            _components_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
            _components_videos_videos_component__WEBPACK_IMPORTED_MODULE_8__["VideosComponent"],
            _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_9__["ContactComponent"],
            _components_video_video_component__WEBPACK_IMPORTED_MODULE_12__["VideoComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"]
        ],
        providers: [_services_youtube_service__WEBPACK_IMPORTED_MODULE_10__["YoutubeService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "ZBOX":
/*!********************************************************!*\
  !*** ./src/app/components/videos/videos.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aWRlb3MuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "cipo":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/videos/videos.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section style=\"background-color: rgb(243, 243, 243);\">\n  <section class=\"hero\">\n    <div class=\"hero-body\" style=\"padding-top: 3rem;\">\n      <div class=\"container\">\n        <div class=\"columns notification is-centered is-multipleline\">\n\n          <div class=\"column is-one-third-desktop is-one-third-tablet\" *ngFor=\"let data of data;\">\n            <div class=\"card\">\n              <div class=\"card-image\">\n                <figure class=\"image\">\n                  <img src= \"{{ data.snippet.thumbnails.medium.url }}\" alt=\"Placeholder image\">\n                </figure>\n              </div>\n              <div class=\"card-content has-text-centered\">\n                <div class=\"content\">\n                  <p class=\"title has-text-centered is-4 py-5\">{{ data.snippet.title }}</p>\n                </div>\n                <a class=\"button is-primary is-outlined\" routerLink=\"/video/?id={{data.id}}\" >Start Courses >> </a>\n              </div>\n            </div>\n          </div>\n\n        </div>\n      </div>\n    </div>\n  </section>\n</section>");

/***/ }),

/***/ "hrlM":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_navbar_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./navbar.component.html */ "S6iF");
/* harmony import */ var _navbar_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navbar.component.css */ "DIg/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let NavbarComponent = class NavbarComponent {
    constructor() {
        this.isActive = false;
        this.isLogin = false;
    }
    ngOnInit() {
    }
};
NavbarComponent.ctorParameters = () => [];
NavbarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-navbar',
        template: _raw_loader_navbar_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_navbar_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], NavbarComponent);



/***/ }),

/***/ "j9sA":
/*!*********************************************!*\
  !*** ./src/app/services/youtube.service.ts ***!
  \*********************************************/
/*! exports provided: YoutubeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YoutubeService", function() { return YoutubeService; });
/* harmony import */ var C_Users_Ankit_Documents_GitHub_PhysicsVeda_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "HaE+");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let YoutubeService = class YoutubeService {
  constructor(http) {
    this.http = http;
    this.baseUrl = "https://youtube.googleapis.com/youtube/v3";
  }

  getBaseUrl(route) {
    if (route) {
      return this.baseUrl + route;
    }

    return this.baseUrl;
  }

  postForm(route, token) {
    var _this = this;

    return Object(C_Users_Ankit_Documents_GitHub_PhysicsVeda_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return yield _this.http.post(_this.getBaseUrl(route), token).toPromise();
    })();
  }

  getData(route) {
    var _this2 = this;

    return Object(C_Users_Ankit_Documents_GitHub_PhysicsVeda_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return yield _this2.http.get(_this2.getBaseUrl(route)).toPromise();
    })();
  }

};

YoutubeService.ctorParameters = () => [{
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
}];

YoutubeService = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
  providedIn: 'root'
})], YoutubeService);


/***/ }),

/***/ "jmJk":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/contact/contact.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section style=\"background-color: rgb(243, 243, 243);\">\n    <section class=\"hero\">\n      <div class=\"hero-body\" style=\"padding-top: 3rem;\">\n        <div class=\"container\">\n          <div class=\"content\">\n              <p class=\"title\">Contact me!</p>\n              <form class=\"notification box\">\n                <div class=\"field\">\n                    <label class=\"label\">Your Name</label>\n                    <div class=\"control\">\n                      <input class=\"input\" type=\"text\" placeholder=\"Enter Your Name\" required>\n                    </div>\n                  </div>\n                  \n                  <div class=\"field\">\n                    <label class=\"label\">Your Email</label>\n                    <div class=\"control \">\n                      <input class=\"input\" type=\"email\" placeholder=\"Enter Your Email Address\" required>\n                    </div>\n                  </div>\n\n                  <div class=\"field\">\n                    <label class=\"label\">Your Phone Number</label>\n                    <div class=\"control\">\n                      <input class=\"input\" type=\"text\" placeholder=\"Enter Your Phone Number\" required>\n                    </div>\n                  </div>\n                  \n                  <div class=\"field\">\n                    <label class=\"label\">Describe what you want to contact me for here</label>\n                    <div class=\"control\">\n                      <textarea class=\"textarea\" placeholder=\"Your message\" required></textarea>\n                    </div>\n                  </div>\n                  \n                  <div class=\"field is-grouped\">\n                    <div class=\"control\">\n                      <button class=\"button is-primary\">Submit</button>\n                    </div>\n                  </div>\n              </form>\n          </div>\n        </div>\n      </div>\n    </section>\n  </section>");

/***/ }),

/***/ "tXZI":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section style=\"background-color: rgb(243, 243, 243);\">\n  <section class=\"hero\">\n    <div class=\"hero-body\" style=\"padding-top: 3rem;\">\n      <div class=\"container\">\n        <div class=\"columns box is-vcentered is-centered has-text-weight-bold\">\n          <div class=\"column is-half\">\n            <div class=\"media\">\n              <div class=\"columns\">\n                <div class=\"column\">\n                  <figure class=\"image is-64x64 center\">\n                    <img src=\"assets/PhysicsVeda.ico\" alt=\"\">\n                  </figure>\n                </div>\n                <div class=\"column is-11\">\n                  <p class=\"title py-3 has-text-centered\" id=\"heading\">PhysicsVeda</p>\n                </div>\n              </div>\n            </div>\n            <p class=\"subtitle py-5\" id=\"typedtext\">{{typewriter_display }}</p>\n            <div class=\"column\">\n              <!-- <button class=\"button is-primary m-2\">Browse Blog</button> -->\n              <button class=\"button is-danger m-2\" [routerLink]=\"['videos']\">Browse Video Tutorial</button>\n              <button class=\"button is-success m-2\" [routerLink]=\"['contact']\">Contact Me</button>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"columns notification is-centered is-multipleline\">\n          <div class=\"column is-one-third-desktop is-one-third-tablet\">\n            <div class=\"card\">\n              <div class=\"card-image\">\n                <figure class=\"image\">\n                  <img src=\"./assets/Videos.jpg\" alt=\"Placeholder image\">\n                </figure>\n              </div>\n              <div class=\"card-content has-text-centered\">\n                <div class=\"content\">\n                  <p class=\"title has-text-centered is-4 py-5\">Free Video Courses</p>\n                  Get your career started with these free video courses. Notes are available with all\n                  the videos for amazing learning experience.\n                </div>\n                <button class=\"button is-primary m-2 has-text-centered\" [routerLink]=\"['videos']\">Browse Video Courses</button>\n              </div>\n            </div>\n          </div>\n\n          <!-- <div class=\"column is-one-third-desktop is-one-third-tablet\">\n            <div class=\"card\">\n              <div class=\"card-image\">\n                <figure class=\"image\">\n                  <img src=\"./assets/Articles.jpg\" alt=\"Placeholder image\">\n                </figure>\n              </div>\n              <div class=\"card-content has-text-centered\">\n                <div class=\"content\">\n                  <p class=\"title has-text-centered is-4 py-5\">Physics Articles</p>\n                  Some of the latest Physics information and innovations compiled in the form of Physics articles. Keep\n                  your knowledge up to date with these articles.\n                </div>\n                <button class=\"button is-primary m-2 has-text-centered\">Go to Blog</button>\n              </div>\n            </div>\n          </div> -->\n\n          <div class=\"column is-one-third-desktop is-one-third-tablet\">\n            <div class=\"card\">\n              <div class=\"card-image\">\n                <figure class=\"image is-480x480\">\n                  <img src=\"./assets/Contact_me.jpg\" alt=\"Placeholder image\">\n                </figure>\n              </div>\n              <div class=\"card-content has-text-centered\">\n                <div class=\"content\">\n                  <p class=\"title has-text-centered is-4 py-5\">Contact Me</p>\n                  Learn physics free courses. Examples are available with these tutorials. You can\n                  contact me for any doubt and I will get back to you!\n                </div>\n                <button class=\"button is-primary m-2 has-text-centered\" [routerLink]=\"['contact']\">Contact Me</button>\n              </div>\n            </div>\n          </div>\n        </div>\n\n      </div>\n    </div>\n  </section>\n</section>");

/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/contact/contact.component */ "G2Gn");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/home/home.component */ "BuFo");
/* harmony import */ var _components_video_video_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/video/video.component */ "G4NA");
/* harmony import */ var _components_videos_videos_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/videos/videos.component */ "FvIq");







const routes = [
    { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
    { path: 'videos', component: _components_videos_videos_component__WEBPACK_IMPORTED_MODULE_6__["VideosComponent"] },
    { path: 'video/:id', component: _components_video_video_component__WEBPACK_IMPORTED_MODULE_5__["VideoComponent"] },
    { path: 'contact', component: _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_3__["ContactComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "vqfB":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/video/video.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section style=\"background-color: rgb(243, 243, 243);\">\n    <section class=\"hero\">\n        <div class=\"hero-body\" style=\"padding-top: 3rem;\">\n            <div class=\"container\">\n                <div class=\"columns notification is-centered is-multipleline\">\n\n                    <div class=\"column is-8\">\n                        <div class=\"media\">\n                            <iframe [src]=\"url\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n                        </div>\n                    </div>\n                    <div class=\"column is-5 has-text-centered\">\n                        <div class=\"card\">\n                            <header class=\"card-header\">\n                                <p class=\"card-header-title\">\n                                    Playlist\n                                </p>\n                            </header>\n\n                            <div class=\"card-content\">\n                                <a class=\"media\" *ngFor = 'let data of data.items;' (click)=\"SetURL(data.snippet.resourceId.videoId)\">\n                                    <div class=\"media-left\">\n                                        <figure class=\"image is-64x64\">\n                                            <img src=\"{{data.snippet.thumbnails.medium.url}}\"\n                                                alt=\"Placeholder image\">\n                                        </figure>\n                                    </div>\n                                    <div class=\"media-contant\">\n                                        <p class=\"title is-6\">{{data.snippet.title}}</p>\n                                    </div>\n                                </a>\n                            </div>\n                        </div>\n                    </div>\n\n                </div>\n            </div>\n        </div>\n    </section>\n</section>");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.0f46f67c8a3da8eea960.js.map