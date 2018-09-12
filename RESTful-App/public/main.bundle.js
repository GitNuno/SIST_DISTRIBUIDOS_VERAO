webpackJsonp([1,4],{

/***/ 145:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 145;


/***/ }),

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(156);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=C:/Users/Nuno/Documents/_MY_PROJECTS/SIST_DISTRIBUIDOS/RESTful-App/angular-src/src/main.js.map

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

// decorador
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(334),
            styles: [__webpack_require__(324)]
        })
    ], AppComponent);
    return AppComponent;
}());

//# sourceMappingURL=C:/Users/Nuno/Documents/_MY_PROJECTS/SIST_DISTRIBUIDOS/RESTful-App/angular-src/src/app.component.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_navbar_navbar_component__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_login_login_component__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_register_register_component__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_home_home_component__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_dashboard_dashboard_component__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_profile_profile_component__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_video_center_video_center_component__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_video_list_video_list_component__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_video_detail_video_detail_component__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_safe_pipe__ = __webpack_require__(163);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// REF: \AUTH\.5\(min.11.30)











// \zVIDEO\.21\(min.1.00)

// MUDAR(se houver tempo): REF:\ANGULAR-2\ANGULAR_COMPLETO\.24(min.4.00)
// REF: \zVIDEO\15(min.02.00)
// ARRAY DE ROTAS
// "app.module" é o modulo principal a ser chamado
// refere qual o componente a renderizar de acordo com a rota
// endç. localhost:3000/xxx: "/xxx" é definido aqui!
var appRoutes = [
    // rotas users
    { path: '', component: __WEBPACK_IMPORTED_MODULE_10__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_9__components_register_register_component__["a" /* RegisterComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_8__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_11__components_dashboard_dashboard_component__["a" /* DashboardComponent */] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_12__components_profile_profile_component__["a" /* ProfileComponent */] },
    // rotas app-video_player
    // exibição de video-detail e video-list sao tb nesta rota !!
    // endç. localhost:3000/videos: "/videos" é definido aqui!
    { path: 'vid', component: __WEBPACK_IMPORTED_MODULE_13__components_video_center_video_center_component__["a" /* VideoCenterComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_video_center_video_center_component__["a" /* VideoCenterComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_video_list_video_list_component__["a" /* VideoListComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_video_detail_video_detail_component__["a" /* VideoDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_safe_pipe__["a" /* SafePipe */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* RouterModule */].forRoot(appRoutes, { useHash: true })
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=C:/Users/Nuno/Documents/_MY_PROJECTS/SIST_DISTRIBUIDOS/RESTful-App/angular-src/src/app.module.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
            selector: 'app-dashboard',
            template: __webpack_require__(335),
            styles: [__webpack_require__(325)]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());

//# sourceMappingURL=C:/Users/Nuno/Documents/_MY_PROJECTS/SIST_DISTRIBUIDOS/RESTful-App/angular-src/src/dashboard.component.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__(336),
            styles: [__webpack_require__(326)]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());

//# sourceMappingURL=C:/Users/Nuno/Documents/_MY_PROJECTS/SIST_DISTRIBUIDOS/RESTful-App/angular-src/src/home.component.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginComponent = (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__(337),
            styles: [__webpack_require__(327)]
        }),
        __metadata("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());

//# sourceMappingURL=C:/Users/Nuno/Documents/_MY_PROJECTS/SIST_DISTRIBUIDOS/RESTful-App/angular-src/src/login.component.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
            selector: 'app-navbar',
            template: __webpack_require__(338),
            styles: [__webpack_require__(328)]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());

//# sourceMappingURL=C:/Users/Nuno/Documents/_MY_PROJECTS/SIST_DISTRIBUIDOS/RESTful-App/angular-src/src/navbar.component.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProfileComponent = (function () {
    function ProfileComponent() {
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
            selector: 'app-profile',
            template: __webpack_require__(339),
            styles: [__webpack_require__(329)]
        }),
        __metadata("design:paramtypes", [])
    ], ProfileComponent);
    return ProfileComponent;
}());

//# sourceMappingURL=C:/Users/Nuno/Documents/_MY_PROJECTS/SIST_DISTRIBUIDOS/RESTful-App/angular-src/src/profile.component.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RegisterComponent = (function () {
    function RegisterComponent() {
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
            selector: 'app-register',
            template: __webpack_require__(340),
            styles: [__webpack_require__(330)]
        }),
        __metadata("design:paramtypes", [])
    ], RegisterComponent);
    return RegisterComponent;
}());

//# sourceMappingURL=C:/Users/Nuno/Documents/_MY_PROJECTS/SIST_DISTRIBUIDOS/RESTful-App/angular-src/src/register.component.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(32);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SafePipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SafePipe = (function () {
    function SafePipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafePipe.prototype.transform = function (url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    SafePipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Pipe */])({
            name: 'safe'
        })
        // \zVIDEO\.21\(min.1.00)
        ,
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]) === "function" && _a || Object])
    ], SafePipe);
    return SafePipe;
    var _a;
}());

//# sourceMappingURL=C:/Users/Nuno/Documents/_MY_PROJECTS/SIST_DISTRIBUIDOS/RESTful-App/angular-src/src/safe.pipe.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__video_service__ = __webpack_require__(167);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoCenterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VideoCenterComponent = (function () {
    function VideoCenterComponent(_videoService) {
        this._videoService = _videoService;
        // esconder form para adicionar novo video
        this.hideNewVideo = true;
    }
    // REF:\zVIDEO\.20\(min.2.30)
    // subscribe ao serviço "video.service.ts" que liga Angular com BD
    // inicializa array(videos) com os videos existentes na BD
    VideoCenterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._videoService.getVideos()
            .subscribe(function (resVideoData) { return _this.arrayVideos = resVideoData; });
    };
    // usado em video-center.component.html
    // captura objeto "video" seleccionado via video-list.component
    VideoCenterComponent.prototype.onSelectedVideo = function (video) {
        this.selectedVideo = video;
        this.hideNewVideo = true;
        console.log(this.selectedVideo);
    };
    // REF:\zVIDEO\.22\(min.5.00)
    // REF:\zVIDEO\.22\(min.10.00) EXPLAIN-ALL!!
    // recebe video submetido
    // adiciona video submetido na BD
    // subscribe para obter data na resposta(resNewVideo)
    // push resNewVideo no array(videos)
    VideoCenterComponent.prototype.onSubmitAddVideo = function (video) {
        var _this = this;
        this._videoService.addVideo(video)
            .subscribe(function (resNewVideo) {
            _this.arrayVideos.push(resNewVideo);
            _this.hideNewVideo = true;
            _this.selectedVideo = resNewVideo;
        });
    };
    // REF:\zVIDEO\.23\(min.3.40, 5.30)
    VideoCenterComponent.prototype.onUpdateVideoEvent = function (video) {
        this._videoService.updateVideo(video)
            .subscribe(function (resUpdatedVideo) { return video = resUpdatedVideo; });
        // para fazer "clear" da view detail
        this.selectedVideo = null;
    };
    ;
    // REF:\zVIDEO\.24\(min.3.20, 6.00)
    VideoCenterComponent.prototype.onDeleteVideoEvent = function (video) {
        // inicializa var(auxArray) com videos da BD
        var auxArray = this.arrayVideos;
        // apaga video da BD
        this._videoService.deleteVideo(video)
            .subscribe(function (resDeletedVideo) {
            // na resposta apaga video do array
            // nota: video já não existe na BD é para atualizar UI
            for (var i = 0; i < auxArray.length; i++) {
                if (auxArray[i]._id === video._id) {
                    auxArray.splice(i, 1); // apaga video na pos.(i, 1) do array
                }
            }
        });
        this.selectedVideo = null;
    };
    ;
    // REF:\zVIDEO\.22\(min.7.00)
    // esconder/revelar form para adicionar novo video
    VideoCenterComponent.prototype.newVideo = function () {
        this.hideNewVideo = false;
    };
    VideoCenterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
            selector: 'app-video-center',
            template: __webpack_require__(341),
            styles: [__webpack_require__(331)],
            providers: [__WEBPACK_IMPORTED_MODULE_1__video_service__["a" /* VideoService */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__video_service__["a" /* VideoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__video_service__["a" /* VideoService */]) === "function" && _a || Object])
    ], VideoCenterComponent);
    return VideoCenterComponent;
    var _a;
}());

//# sourceMappingURL=C:/Users/Nuno/Documents/_MY_PROJECTS/SIST_DISTRIBUIDOS/RESTful-App/angular-src/src/video-center.component.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__video__ = __webpack_require__(168);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// REF:\zVIDEO\.18\(min.7.30) EXPLAIN-ALL!!
// REF:\zVIDEO\.23\(min.1.30, 5.30)
// REF:\zVIDEO\.24\(min.1.30, 6.00)
var VideoDetailComponent = (function () {
    // ORIG. qd "inputs: ['video']""
    // video: Video;
    function VideoDetailComponent() {
        // REF:\zVIDEO\.18\(min.2.30)
        // REF:\zVIDEO\.23+24\(min.1.30, 5.30)
        this.updateVideoEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* EventEmitter */]();
        this.deleteVideoEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* EventEmitter */]();
        this.editTitle = false;
    }
    VideoDetailComponent.prototype.ngOnInit = function () {
    };
    VideoDetailComponent.prototype.ngOnChanges = function () {
        this.editTitle = false;
    };
    VideoDetailComponent.prototype.onTitleClick = function () {
        this.editTitle = true;
    };
    /*
      NOTA: componente video-detail é apenas responsável pela apresentação dos detalhes
            updateVideo() e deleteVideo() vão invocar eventos que vão ser capturados
            em video-center.componente.
            video-center.componente vai chamar video.service.ts que faz o update na BD
    */
    // necessita "outputs:['updateVideoEvent']"
    VideoDetailComponent.prototype.updateVideo = function () {
        this.updateVideoEvent.emit(this.video);
    };
    VideoDetailComponent.prototype.deleteVideo = function () {
        this.deleteVideoEvent.emit(this.video);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Input */])(),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__video__["a" /* Video */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__video__["a" /* Video */]) === "function" && _a || Object)
    ], VideoDetailComponent.prototype, "video", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Output */])(),
        __metadata("design:type", Object)
    ], VideoDetailComponent.prototype, "updateVideoEvent", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Output */])(),
        __metadata("design:type", Object)
    ], VideoDetailComponent.prototype, "deleteVideoEvent", void 0);
    VideoDetailComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
            selector: 'app-video-detail',
            template: __webpack_require__(342),
            styles: [__webpack_require__(332)],
        }),
        __metadata("design:paramtypes", [])
    ], VideoDetailComponent);
    return VideoDetailComponent;
    var _a;
}());

//# sourceMappingURL=C:/Users/Nuno/Documents/_MY_PROJECTS/SIST_DISTRIBUIDOS/RESTful-App/angular-src/src/video-detail.component.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// REF:\zVIDEO\.17\(min.2.30)
var VideoListComponent = (function () {
    function VideoListComponent() {
        // REF:\zVIDEO\.18\(min.7.30) EXPLAIN-ALL!!
        // "outputs: ['Selectvideo']": ("Selectvideo")=("public Selectvideo")
        this.Selectvideo = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* EventEmitter */]();
    }
    VideoListComponent.prototype.ngOnInit = function () {
    };
    // "onSelect(vid: Video)" invoca evento que vai ser capturado em video-center.component
    // necessita outputs: ['Selectvideo']
    VideoListComponent.prototype.onSelect = function (vid) {
        this.Selectvideo.emit(vid);
        // Teste - para ver na consola do browser
        // console.log(JSON.stringify(vid));
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Input */])(),
        __metadata("design:type", Object)
    ], VideoListComponent.prototype, "videos", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Output */])(),
        __metadata("design:type", Object)
    ], VideoListComponent.prototype, "Selectvideo", void 0);
    VideoListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
            selector: 'app-video-list',
            template: __webpack_require__(343),
            styles: [__webpack_require__(333)]
            // ORIG.
            // inputs: ['videos']
            // outputs: ['Selectvideo']
        }),
        __metadata("design:paramtypes", [])
    ], VideoListComponent);
    return VideoListComponent;
}());

//# sourceMappingURL=C:/Users/Nuno/Documents/_MY_PROJECTS/SIST_DISTRIBUIDOS/RESTful-App/angular-src/src/video-list.component.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// Nos serviços crio metodos que fazem os pedidos via objeto Http
// Ex: capturo dados via http.get(/api/videos)
// "/api/videos" é a rota para servidor expressJs: app.js porto:3000
var VideoService = (function () {
    function VideoService(_http) {
        this._http = _http;
        // REF:\zVIDEO\.20\(min.1.00)
        // rotas = \routes\api.js : para chamar servidor expressJs: Ex: http://localhost:3000/api/videos
        // notar que "putUrl = '/api/video/" termina com "/" pq em \routes\api.js temos: "router.put('/videos/:id',..)"
        this._getUrl = '/api/videos';
        // REF:\zVIDEO\.22\(min.2.00)
        this._postUrl = '/api/video';
        // REF:\zVIDEO\.23\(min.1.00,5.30)
        this._putUrl = '/api/video/';
        // REF:\zVIDEO\.24\(min.1.00,6.00)
        this._deleteUrl = '/api/video/';
    }
    VideoService.prototype.getVideos = function () {
        // captura todos os videos no pedido http.get("/api/videos")
        return this._http.get(this._getUrl)
            .map(function (response) { return response.json(); });
    };
    // adicionar video na BD
    VideoService.prototype.addVideo = function (video) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this._http.post(this._postUrl, JSON.stringify(video), options)
            .map(function (response) { return response.json(); });
    };
    // update video na BD
    VideoService.prototype.updateVideo = function (video) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this._http.put(this._putUrl + video._id, JSON.stringify(video), options)
            .map(function (response) { return response.json(); });
    };
    // update video na BD
    VideoService.prototype.deleteVideo = function (video) {
        return this._http.delete(this._deleteUrl + video._id)
            .map(function (response) { return response.json(); });
    };
    VideoService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
    ], VideoService);
    return VideoService;
    var _a;
}());

//# sourceMappingURL=C:/Users/Nuno/Documents/_MY_PROJECTS/SIST_DISTRIBUIDOS/RESTful-App/angular-src/src/video.service.js.map

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Video; });
// REF:\zVIDEO\.17\(min.1.00)
// mimic campos em MongoDB
var Video = (function () {
    function Video() {
    }
    return Video;
}());

//# sourceMappingURL=C:/Users/Nuno/Documents/_MY_PROJECTS/SIST_DISTRIBUIDOS/RESTful-App/angular-src/src/video.js.map

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=C:/Users/Nuno/Documents/_MY_PROJECTS/SIST_DISTRIBUIDOS/RESTful-App/angular-src/src/environment.js.map

/***/ }),

/***/ 324:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 325:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 326:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 327:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 328:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 329:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 330:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 331:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 332:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 333:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 334:
/***/ (function(module, exports) {

module.exports = "<!--\r\nOrig. - ref. app.component.ts\r\n<h1> {{title}} </h1>\r\n-->\r\n\r\n<!-- REF: \\AUTH\\.5\\(min.15.00) -->\r\n<!-- \"selector: 'app-navbar'\" - definido em \\navbar\\navbar.component.ts -->\r\n<app-navbar></app-navbar>\r\n<br>\r\n<br>\r\n<br>\r\n<br>\r\n<div class=\"container\">\r\n    <!--Renderizar as páginas roteadas-->\r\n    <router-outlet></router-outlet>\r\n</div>\r\n\r\n"

/***/ }),

/***/ 335:
/***/ (function(module, exports) {

module.exports = "<p>\n  dashboard works!\n</p>\n"

/***/ }),

/***/ 336:
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\n  <h1>HOME</h1>\n</div>\n"

/***/ }),

/***/ 337:
/***/ (function(module, exports) {

module.exports = "<p>\n  login works!\n</p>\n"

/***/ }),

/***/ 338:
/***/ (function(module, exports) {

module.exports = "<!-- REF: \\AUTH\\.5\\(min.16.00) -->\n<!-- REF: \\zVIDEO\\.15\\(min.03.30) -->\n\n<nav class=\"navbar navbar-expand-md navbar-dark bg-dark fixed-top\">\n  <a class=\"navbar-brand\" href=\"#\">VIDEO player</a> \n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExampleDefault\" aria-controls=\"navbarsExampleDefault\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarsExampleDefault\">\n    <ul class=\"nav navbar-nav navbar-left\">\n        <!-- REF: \\zVIDEO\\.15\\(min.03.30) DIFERENTE - MUDAR(se houver tempo) !! -->\n        <!-- REF: \\ANGULAR-2\\ANGULAR_COMPLETO\\.23(min.10) - EXPLANATION!! -->\n        <!-- (/videos, /login, etc_rotas) = (rotas definidas em app.module.ts) -->\n        <li><a class=\"nav-link\" [routerLink]=\"['/']\">Home <span></span></a></li>\n        <li><a class=\"nav-link\" [routerLink]=\"['/vid']\">Playlist <span></span></a></li>\n    </ul>\n    <ul class=\"navbar-nav ml-auto\">\n        <li><a class=\"nav-link\" [routerLink]=\"['/login']\">Login </a></li>\n      <li><a class=\"nav-link\" [routerLink]=\"['/register']\">Register</a></li>\n    </ul>\n  </div>\n</nav>\n\n\n<!--\n<nav class=\"navbar navbar-expand-md navbar-dark bg-dark fixed-top\">\n  <div class=\"container-fluid\">\n    <div class= \"navbar-header\">\n      <a class=\"navbar-brand\" href=\"#\">VideoPlayer</a>\n    </div>\n    <ul class=\"nav navbar-nav\">\n      <li><a routerLink=\"/home\" routerLinkActive=\"active\">Home</a></li>\n      <li><a routerLink=\"/videos\" routerLinkActive=\"active\">PlayList</a></li>\n    </ul>\n    <ul class=\"navbar-nav ml-auto\">\n        <li><a class=\"nav-link\" [routerLink]=\"['/login']\">Login </a></li>\n      <li><a class=\"nav-link\" [routerLink]=\"['/register']\">Register</a></li>\n    </ul>\n  </div>\n</nav>\n<div class=\"container\">\n  <router-outlet></router-outlet>\n</div>\n-->"

/***/ }),

/***/ 339:
/***/ (function(module, exports) {

module.exports = "<p>\n  profile works!\n</p>\n"

/***/ }),

/***/ 340:
/***/ (function(module, exports) {

module.exports = "<p>\n  register works!\n</p>\n"

/***/ }),

/***/ 341:
/***/ (function(module, exports) {

module.exports = "<!-- REF:\\zVIDEO\\.16\\(min.1.00)-->\r\n<!-- REF:\\zVIDEO\\.18\\(min.7.30) EXPLAIN-ALL!! -->\r\n\r\n<!--\"Anexar\" html de video-list e video-detail em video-center-->\r\n<div class=\"row\">\r\n  <div class=\"col-sm-9\">\r\n    <!-- REF:\\zVIDEO\\.22\\(min.1.00, min.4.00, min.7.15)-->\r\n    <div *ngIf=\"!hideNewVideo\">\r\n      <h2>New Video</h2>\r\n      <form #form=\"ngForm\" (ngSubmit)=\"onSubmitAddVideo(form.value)\" class=\"well\">\r\n        <div class=\"form-group\">\r\n          <label>Title</label>\r\n          <input type=\"text\" class=\"form-control\" required name=\"title\" ngModel>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label>Url</label>\r\n            <input type=\"text\" class=\"form-control\" required name=\"url\" ngModel>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label>Description</label>\r\n            <input type=\"text\" class=\"form-control\" required name=\"description\" ngModel>\r\n        </div>\r\n        <button type=\"submit\" class=\"btn btn-success\" >Save</button>\r\n      </form>\r\n    </div>\r\n\r\n    <!-- REF:\\zVIDEO\\.23+24\\(min.3.00, 5.30)-->\r\n    <!-- \"updateVideoEvent\":video-detail.component.ts - \"onUpdateVideoEvent\":video-center.component.ts -->\r\n    <!-- (\"[*video]\")=(\"@Input() *video: Video;\":video-detail.component) - não tem de ser \"video\" -->\r\n    <!-- \"selectedVideo\":video-center.component.ts(\"selectedVideo: Video;\") -->\r\n    <app-video-detail (updateVideoEvent)=\"onUpdateVideoEvent($event)\"\r\n      (deleteVideoEvent)=\"onDeleteVideoEvent($event)\"\r\n      *ngIf=\"selectedVideo && hideNewVideo\" \r\n      [video]=\"selectedVideo\">\r\n    </app-video-detail>\r\n  </div>\r\n  <div class=\"col-sm-3\">\r\n\r\n  <button (click)=\"newVideo()\" style=\"margin-bottom:2px;\" type=\"button\" class=\"btn btn-success btn-block\" >Add New Video</button>\r\n \r\n <!-- REF:\\zVIDEO\\.17\\(min.2.00)-->\r\n <!-- PROPRETY_DATA_BINDING:\r\n          . (\"[*videos]\")=(\"@Input() *videos\":video-list.component.ts) - não tem de ser \"videos\"\r\n          . \"arrayVideos\":video-center.component.ts(\"arrayVideos:Array<Video>\")\r\n          . (\"*Selectvideo\")=(\"@Output() *Selectvideo\":video-list.component.ts)\") - não tem de ser \"Selectvideo\"\r\n          . \"onSelectedVideo($event)\":video-center.component.ts(\"onSelectedVideo(video:any)\")                                          -->\r\n      <app-video-list (Selectvideo)=\"onSelectedVideo($event)\" [videos]=\"arrayVideos\"></app-video-list>\r\n  </div>\r\n</div>"

/***/ }),

/***/ 342:
/***/ (function(module, exports) {

module.exports = "<!-- REF:\\zVIDEO\\.19\\(min.1.30) -->\n<div>\n    <!-- iframe limita-se a \"reproduzir\" url da BD correspondente ao video seleccionado  -->\n    <!-- url: /uploads/VAN.mp3 é permitido pq é publico: -->\n    <!-- [video]=\"selectedVideo\":videocenter.component.html - data-binding\n                 \"selectedVideo\": metodo que devolve objeto video seleccionado -->\n    <div>\n        <iframe width=\"100%\" height=\"300 px\" [src]=\"video.url | safe\">\n        </iframe>\n    </div>\n    <form>\n        <div *ngIf=\"editTitle\" class=\"form-group\">\n            <input type=\"input\" class=\"form-control\" name=\"title\" required placeholder=\"title\"\n            [(ngModel)]=\"video.title\">\n        </div>\n        <h3 *ngIf=\"!editTitle\" (click)=\"onTitleClick()\">{{video.title}}</h3>\n        <div class=\"form-group\">\n                <input type=\"input\" class=\"form-control\" name=\"url\" required placeholder=\"url\"\n                [(ngModel)]=\"video.url\">\n        </div>\n        <div class=\"form-group\">\n                <textarea class=\"form-control\" rows=\"5\" name=\"desc\" [(ngModel)]=\"video.description\">\n                </textarea>\n        </div>\n        <!-- REF:\\zVIDEO\\.23\\(min.1.30, 5.30) -->\n        <button type=\"button\" (click)=\"updateVideo()\" class=\"btn btn-primary\">Update</button>\n        <!-- REF:\\zVIDEO\\.24\\(min.1.00, 6.00) -->\n        <button type=\"button\" (click)=\"deleteVideo()\" class=\"btn btn-danger\">Delete</button>\n        <!-- espaço -->\n        <div> <br><br><br> </div>\n    </form>\n</div>\n"

/***/ }),

/***/ 343:
/***/ (function(module, exports) {

module.exports = "\n<!-- REF:\\zVIDEO\\.17\\(min.3.00)-->\n<!-- REF:\\zVIDEO\\.18\\(min.7.30) EXPLAIN-ALL!!-->\n<!-- \n. Depois de fazer o binding do array_videos em video-center.component.html faz-se\n  display da lista de videos usando a diretiva *ngFor\n. \"let video of videos\" - por cada \"video\"(var) de \"videos\"(array) faço display de \"video.title\" -->\n<table class=\"table table-hover\">\n  <tbody>\n   <!-- onSelect(video) invoca evento que vai ser capturado em video-center.component -->\n    <tr (click)=\"onSelect(video)\" *ngFor=\"let video of videos\">\n      <td>\n          {{video.title}}\n      </td>\n    </tr>\n  </tbody>\n</table>\n\n\n\n<!-- <ul class=\"nav nav-pills flex-column  \">\n  <li class=\"nav-item\" (click)=\"onSelect(video)\" *ngFor=\"let video of videos\">\n    <a >{{video.title}}</a>\n  </li>\n</ul> -->"

/***/ }),

/***/ 389:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(146);


/***/ })

},[389]);
//# sourceMappingURL=main.bundle.map