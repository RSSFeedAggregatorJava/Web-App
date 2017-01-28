webpackJsonp([0,3],{182:function(t,e,n){"use strict";var i=n(0),o=n(63),r=n(31),a=(n.n(r),n(270)),d=n(269);n.d(e,"a",function(){return f});var c=this&&this.__decorate||function(t,e,n,i){var o,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,i);else for(var d=t.length-1;d>=0;d--)(o=t[d])&&(a=(r<3?o(a):r>3?o(e,n,a):o(e,n))||a);return r>3&&a&&Object.defineProperty(e,n,a),a},s=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},u=this&&this.__param||function(t,e){return function(n,i){e(n,i,t)}},f=function(){function t(t,e,n){this.http=t,this.basePath="http://localhost:8000",this.defaultHeaders=new o.a,this.configuration=new d.a,e&&(this.basePath=e),n&&(this.configuration=n)}return t.prototype.extendObj=function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t},t.prototype.feedsDelete=function(t,e){return this.feedsDeleteWithHttpInfo(t,e).map(function(t){return 204===t.status?void 0:t.json()})},t.prototype.feedsFeedIdGet=function(t,e){return this.feedsFeedIdGetWithHttpInfo(t,e).map(function(t){return 204===t.status?void 0:t.json()})},t.prototype.feedsGet=function(t){return this.feedsGetWithHttpInfo(t).map(function(t){return 204===t.status?void 0:t.json()})},t.prototype.feedsPost=function(t,e){return this.feedsPostWithHttpInfo(t,e).map(function(t){return 204===t.status?void 0:t.json()})},t.prototype.feedsDeleteWithHttpInfo=function(t,e){var n=this.basePath+"/feeds",i=new o.b,r=new o.a(this.defaultHeaders.toJSON());if(null===t||void 0===t)throw new Error("Required parameter feedId was null or undefined when calling feedsDelete.");void 0!==t&&i.set("feedId",t);var a=new o.c({method:o.d.Delete,headers:r,search:i});return e&&(a=this.extendObj(a,e)),this.http.request(n,a)},t.prototype.feedsFeedIdGetWithHttpInfo=function(t,e){var n=this.basePath+("/feeds/"+t),i=new o.b,r=new o.a(this.defaultHeaders.toJSON());if(null===t||void 0===t)throw new Error("Required parameter feedId was null or undefined when calling feedsFeedIdGet.");this.configuration.apiKey&&r.set("api_key",this.configuration.apiKey);var a=new o.c({method:o.d.Get,headers:r,search:i});return e&&(a=this.extendObj(a,e)),this.http.request(n,a)},t.prototype.feedsGetWithHttpInfo=function(t){var e=this.basePath+"/feeds",n=new o.b,i=new o.a(this.defaultHeaders.toJSON());this.configuration.apiKey&&i.set("api_key",this.configuration.apiKey);var r=new o.c({method:o.d.Get,headers:i,search:n});return t&&(r=this.extendObj(r,t)),this.http.request(e,r)},t.prototype.feedsPostWithHttpInfo=function(t,e){var n=this.basePath+"/feeds",i=new o.b,r=new o.a(this.defaultHeaders.toJSON());if(null===t||void 0===t)throw new Error("Required parameter feedUrl was null or undefined when calling feedsPost.");void 0!==t&&i.set("feedUrl",t);var a=new o.c({method:o.d.Post,headers:r,search:i});return e&&(a=this.extendObj(a,e)),this.http.request(n,a)},t=c([n.i(i.c)(),u(1,n.i(i.d)()),u(1,n.i(i.e)(a.a)),u(2,n.i(i.d)()),s("design:paramtypes",["function"==typeof(e="undefined"!=typeof o.e&&o.e)&&e||Object,String,"function"==typeof(r="undefined"!=typeof d.a&&d.a)&&r||Object])],t);var e,r}()},267:function(t,e,n){"use strict";var i=n(0),o=n(63),r=n(31),a=(n.n(r),n(270)),d=n(269);n.d(e,"a",function(){return f});var c=this&&this.__decorate||function(t,e,n,i){var o,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,i);else for(var d=t.length-1;d>=0;d--)(o=t[d])&&(a=(r<3?o(a):r>3?o(e,n,a):o(e,n))||a);return r>3&&a&&Object.defineProperty(e,n,a),a},s=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},u=this&&this.__param||function(t,e){return function(n,i){e(n,i,t)}},f=function(){function t(t,e,n){this.http=t,this.basePath="http://localhost:8000",this.defaultHeaders=new o.a,this.configuration=new d.a,e&&(this.basePath=e),n&&(this.configuration=n)}return t.prototype.extendObj=function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t},t.prototype.articlesFeedIdArticleIdGet=function(t,e,n){return this.articlesFeedIdArticleIdGetWithHttpInfo(t,e,n).map(function(t){return 204===t.status?void 0:t.json()})},t.prototype.articlesFeedIdGet=function(t,e){return this.articlesFeedIdGetWithHttpInfo(t,e).map(function(t){return 204===t.status?void 0:t.json()})},t.prototype.articlesFeedIdArticleIdGetWithHttpInfo=function(t,e,n){var i=this.basePath+("/articles/"+t+"/"+e),r=new o.b,a=new o.a(this.defaultHeaders.toJSON());if(null===t||void 0===t)throw new Error("Required parameter feedId was null or undefined when calling articlesFeedIdArticleIdGet.");if(null===e||void 0===e)throw new Error("Required parameter articleId was null or undefined when calling articlesFeedIdArticleIdGet.");this.configuration.apiKey&&a.set("api_key",this.configuration.apiKey);var d=new o.c({method:o.d.Get,headers:a,search:r});return n&&(d=this.extendObj(d,n)),this.http.request(i,d)},t.prototype.articlesFeedIdGetWithHttpInfo=function(t,e){var n=this.basePath+("/articles/"+t),i=new o.b,r=new o.a(this.defaultHeaders.toJSON());if(null===t||void 0===t)throw new Error("Required parameter feedId was null or undefined when calling articlesFeedIdGet.");this.configuration.apiKey&&r.set("api_key",this.configuration.apiKey);var a=new o.c({method:o.d.Get,headers:r,search:i});return e&&(a=this.extendObj(a,e)),this.http.request(n,a)},t=c([n.i(i.c)(),u(1,n.i(i.d)()),u(1,n.i(i.e)(a.a)),u(2,n.i(i.d)()),s("design:paramtypes",["function"==typeof(e="undefined"!=typeof o.e&&o.e)&&e||Object,String,"function"==typeof(r="undefined"!=typeof d.a&&d.a)&&r||Object])],t);var e,r}()},268:function(t,e,n){"use strict";var i=n(0),o=n(63),r=n(31),a=(n.n(r),n(270)),d=n(269);n.d(e,"a",function(){return f});var c=this&&this.__decorate||function(t,e,n,i){var o,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,i);else for(var d=t.length-1;d>=0;d--)(o=t[d])&&(a=(r<3?o(a):r>3?o(e,n,a):o(e,n))||a);return r>3&&a&&Object.defineProperty(e,n,a),a},s=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},u=this&&this.__param||function(t,e){return function(n,i){e(n,i,t)}},f=function(){function t(t,e,n){this.http=t,this.basePath="http://localhost:8000",this.defaultHeaders=new o.a,this.configuration=new d.a,e&&(this.basePath=e),n&&(this.configuration=n)}return t.prototype.extendObj=function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t},t.prototype.usersLoginPost=function(t,e){return this.usersLoginPostWithHttpInfo(t,e).map(function(t){return 204===t.status?void 0:t.json()})},t.prototype.usersLogoutGet=function(t){return this.usersLogoutGetWithHttpInfo(t).map(function(t){return 204===t.status?void 0:t.json()})},t.prototype.usersSignupPost=function(t,e){return this.usersSignupPostWithHttpInfo(t,e).map(function(t){return 204===t.status?void 0:t.json()})},t.prototype.usersLoginPostWithHttpInfo=function(t,e){var n=this.basePath+"/users/login",i=new o.b,r=new o.a(this.defaultHeaders.toJSON());if(null===t||void 0===t)throw new Error("Required parameter credentials was null or undefined when calling usersLoginPost.");r.set("Content-Type","application/json");var a=new o.c({method:o.d.Post,headers:r,body:null==t?"":JSON.stringify(t),search:i});return e&&(a=this.extendObj(a,e)),this.http.request(n,a)},t.prototype.usersLogoutGetWithHttpInfo=function(t){var e=this.basePath+"/users/logout",n=new o.b,i=new o.a(this.defaultHeaders.toJSON()),r=new o.c({method:o.d.Get,headers:i,search:n});return t&&(r=this.extendObj(r,t)),this.http.request(e,r)},t.prototype.usersSignupPostWithHttpInfo=function(t,e){var n=this.basePath+"/users/signup",i=new o.b,r=new o.a(this.defaultHeaders.toJSON());if(null===t||void 0===t)throw new Error("Required parameter credentials was null or undefined when calling usersSignupPost.");r.set("Content-Type","application/json");var a=new o.c({method:o.d.Post,headers:r,body:null==t?"":JSON.stringify(t),search:i});return e&&(a=this.extendObj(a,e)),this.http.request(n,a)},t=c([n.i(i.c)(),u(1,n.i(i.d)()),u(1,n.i(i.e)(a.a)),u(2,n.i(i.d)()),s("design:paramtypes",["function"==typeof(e="undefined"!=typeof o.e&&o.e)&&e||Object,String,"function"==typeof(r="undefined"!=typeof d.a&&d.a)&&r||Object])],t);var e,r}()},269:function(t,e,n){"use strict";n.d(e,"a",function(){return i});var i=function(){function t(){}return t}()},270:function(t,e,n){"use strict";var i=n(0);n.d(e,"a",function(){return o});var o=new i.H("basePath")},498:function(t,e){function n(t){throw new Error("Cannot find module '"+t+"'.")}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id=498},499:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=(n(678),n(641)),o=n(0),r=n(677),a=n(670);r.a.production&&n.i(o.a)(),n.i(i.a)().bootstrapModule(a.a)},670:function(t,e,n){"use strict";var i=n(0),o=n(65),r=n(440),a=n(34),d=n(587),c=n(121),s=n(830),u=(n.n(s),n(267)),f=n(182),p=n(268),l=n(671),h=n(672),m=n(673),b=n(674),y=n(675),g=n(676);n.d(e,"a",function(){return j});var v=this&&this.__decorate||function(t,e,n,i){var o,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,i);else for(var d=t.length-1;d>=0;d--)(o=t[d])&&(a=(r<3?o(a):r>3?o(e,n,a):o(e,n))||a);return r>3&&a&&Object.defineProperty(e,n,a),a},w=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},j=function(){function t(){}return t=v([n.i(i.b)({imports:[o.a,a.a,a.b,c.MaterialModule.forRoot(),d.a.forRoot(),r.a.forRoot([{path:"feed/:id/:title",component:m.a},{path:"app-login",component:y.a},{path:"app-signup",component:g.a}])],declarations:[l.a,h.a,m.a,b.a,l.b,y.a,g.a],entryComponents:[l.b],exports:[],providers:[u.a,f.a,p.a],bootstrap:[l.a]}),w("design:paramtypes",[])],t)}()},671:function(t,e,n){"use strict";var i=n(0),o=n(121),r=n(182);n.d(e,"a",function(){return c}),n.d(e,"b",function(){return s});var a=this&&this.__decorate||function(t,e,n,i){var o,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,i);else for(var d=t.length-1;d>=0;d--)(o=t[d])&&(a=(r<3?o(a):r>3?o(e,n,a):o(e,n))||a);return r>3&&a&&Object.defineProperty(e,n,a),a},d=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},c=function(){function t(t,e,n){this.dialog=t,this.FeedApi=e,this.MdSnackBar=n}return t.prototype.openDialog=function(){var t=this,e=this.dialog.open(s);e.afterClosed().subscribe(function(e){e&&t.FeedApi.feedsPost(e).subscribe(function(n){t.MdSnackBar.open("Subscribed to "+e,"ok",{duration:2e3})})})},t=a([n.i(i.Q)({selector:"app-root",template:n(833),styles:[n(832)]}),d("design:paramtypes",["function"==typeof(e="undefined"!=typeof o.MdDialog&&o.MdDialog)&&e||Object,"function"==typeof(c="undefined"!=typeof r.a&&r.a)&&c||Object,"function"==typeof(u="undefined"!=typeof o.MdSnackBar&&o.MdSnackBar)&&u||Object])],t);var e,c,u}(),s=function(){function t(t){this.dialogRef=t}return t=a([n.i(i.Q)({selector:"app-subscribe-dialog",template:n(839)}),d("design:paramtypes",["function"==typeof(e="undefined"!=typeof o.MdDialogRef&&o.MdDialogRef)&&e||Object])],t);var e}()},672:function(t,e,n){"use strict";var i=n(0),o=n(267);n.d(e,"a",function(){return d});var r=this&&this.__decorate||function(t,e,n,i){var o,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,i);else for(var d=t.length-1;d>=0;d--)(o=t[d])&&(a=(r<3?o(a):r>3?o(e,n,a):o(e,n))||a);return r>3&&a&&Object.defineProperty(e,n,a),a},a=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},d=function(){function t(t){this.ArticleApi=t}return t.prototype.ngOnChanges=function(){var t=this;this.ArticleApi.articlesFeedIdArticleIdGet(this.feedId,this.articleId).subscribe(function(e){t.article=e})},r([n.i(i.w)(),a("design:type",String)],t.prototype,"feedId",void 0),r([n.i(i.w)(),a("design:type",String)],t.prototype,"articleId",void 0),t=r([n.i(i.Q)({selector:"app-article",template:n(834)}),a("design:paramtypes",["function"==typeof(e="undefined"!=typeof o.a&&o.a)&&e||Object])],t);var e}()},673:function(t,e,n){"use strict";var i=n(0),o=n(440),r=n(17),a=n(849),d=(n.n(a),n(182)),c=n(267);n.d(e,"a",function(){return f});var s=this&&this.__decorate||function(t,e,n,i){var o,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,i);else for(var d=t.length-1;d>=0;d--)(o=t[d])&&(a=(r<3?o(a):r>3?o(e,n,a):o(e,n))||a);return r>3&&a&&Object.defineProperty(e,n,a),a},u=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},f=function(){function t(t,e,n,i){this.FeedApi=t,this.ArticleApi=e,this.route=n,this.location=i}return t.prototype.ngOnInit=function(){var t=this;this.route.params.subscribe(function(e){t.title=e.title,t.id=e.id}),this.route.params.switchMap(function(e){return t.FeedApi.feedsFeedIdGet(+e.id)}).subscribe(function(e){t.feed=e,console.log(e)}),this.route.params.switchMap(function(e){return t.ArticleApi.articlesFeedIdGet(+e.id)}).subscribe(function(e){return t.articles=e})},t.prototype.openArticle=function(t){this.selectedArticleId=t},t=s([n.i(i.Q)({selector:"app-feed",template:n(835)}),u("design:paramtypes",["function"==typeof(e="undefined"!=typeof d.a&&d.a)&&e||Object,"function"==typeof(a="undefined"!=typeof c.a&&c.a)&&a||Object,"function"==typeof(f="undefined"!=typeof o.b&&o.b)&&f||Object,"function"==typeof(p="undefined"!=typeof r.c&&r.c)&&p||Object])],t);var e,a,f,p}()},674:function(t,e,n){"use strict";var i=n(0),o=n(182),r=n(121);n.d(e,"a",function(){return c});var a=this&&this.__decorate||function(t,e,n,i){var o,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,i);else for(var d=t.length-1;d>=0;d--)(o=t[d])&&(a=(r<3?o(a):r>3?o(e,n,a):o(e,n))||a);return r>3&&a&&Object.defineProperty(e,n,a),a},d=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},c=function(){function t(t,e,n){this.FeedApi=t,this.MdSidenav=e,this.MdSnackBar=n}return t.prototype.ngOnInit=function(){var t=this;this.FeedApi.feedsGet().subscribe(function(e){return t.feeds=e})},t.prototype.unsubscribe=function(t,e){var n=this;this.FeedApi.feedsDelete(t).subscribe(function(t){n.MdSnackBar.open("Unsubscribed from "+e,"ok",{duration:2e3})})},t=a([n.i(i.Q)({selector:"app-feeds",template:n(836)}),d("design:paramtypes",["function"==typeof(e="undefined"!=typeof o.a&&o.a)&&e||Object,"function"==typeof(c="undefined"!=typeof r.MdSidenav&&r.MdSidenav)&&c||Object,"function"==typeof(s="undefined"!=typeof r.MdSnackBar&&r.MdSnackBar)&&s||Object])],t);var e,c,s}()},675:function(t,e,n){"use strict";var i=n(0),o=n(34),r=n(268),a=n(121);n.d(e,"a",function(){return s});var d=this&&this.__decorate||function(t,e,n,i){var o,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,i);else for(var d=t.length-1;d>=0;d--)(o=t[d])&&(a=(r<3?o(a):r>3?o(e,n,a):o(e,n))||a);return r>3&&a&&Object.defineProperty(e,n,a),a},c=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},s=function(){function t(t,e,n){this.fb=t,this.UserApi=e,this.MdSnackBar=n,this.loginForm=this.fb.group({email:["",o.e.required],password:["",o.e.required]})}return t.prototype.doLogin=function(t){var e=this;this.UserApi.usersLoginPost({email:this.loginForm.controls.email.value,password:this.loginForm.controls.password.value}).subscribe(function(t){e.MdSnackBar.open("Login successful","ok",{duration:2e3})})},t=d([n.i(i.Q)({selector:"app-login",template:n(837)}),c("design:paramtypes",["function"==typeof(e="undefined"!=typeof o.f&&o.f)&&e||Object,"function"==typeof(s="undefined"!=typeof r.a&&r.a)&&s||Object,"function"==typeof(u="undefined"!=typeof a.MdSnackBar&&a.MdSnackBar)&&u||Object])],t);var e,s,u}()},676:function(t,e,n){"use strict";var i=n(0),o=n(34),r=n(268),a=n(121);n.d(e,"a",function(){return s});var d=this&&this.__decorate||function(t,e,n,i){var o,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,i);else for(var d=t.length-1;d>=0;d--)(o=t[d])&&(a=(r<3?o(a):r>3?o(e,n,a):o(e,n))||a);return r>3&&a&&Object.defineProperty(e,n,a),a},c=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},s=function(){function t(t,e,n){this.fb=t,this.UserApi=e,this.MdSnackBar=n,this.signupForm=this.fb.group({email:["",o.e.required],password:["",o.e.required]})}return t.prototype.doSignup=function(t){var e=this;this.UserApi.usersSignupPost({email:this.signupForm.controls.email.value,password:this.signupForm.controls.password.value}).subscribe(function(t){e.MdSnackBar.open("Signup successful","ok",{duration:2e3})})},t=d([n.i(i.Q)({selector:"app-signup",template:n(838)}),c("design:paramtypes",["function"==typeof(e="undefined"!=typeof o.f&&o.f)&&e||Object,"function"==typeof(s="undefined"!=typeof r.a&&r.a)&&s||Object,"function"==typeof(u="undefined"!=typeof a.MdSnackBar&&a.MdSnackBar)&&u||Object])],t);var e,s,u}()},677:function(t,e,n){"use strict";n.d(e,"a",function(){return i});var i={production:!0}},678:function(t,e,n){"use strict";var i=n(692),o=(n.n(i),n(685)),r=(n.n(o),n(681)),a=(n.n(r),n(687)),d=(n.n(a),n(686)),c=(n.n(d),n(684)),s=(n.n(c),n(683)),u=(n.n(s),n(691)),f=(n.n(u),n(680)),p=(n.n(f),n(679)),l=(n.n(p),n(689)),h=(n.n(l),n(682)),m=(n.n(h),n(690)),b=(n.n(m),n(688)),y=(n.n(b),n(693)),g=(n.n(y),n(870));n.n(g)},832:function(t,e){t.exports="body{\n  margin:0\n}\napp-root{\n  display:block;\n  height:100vh;\n  width:100%;\n}\n\n.md-sidenav-container{\n  height:100%;\n}\n\n.subscribe-button{\n  margin:20px !important;\n  position:fixed !important;\n  bottom:0;\n  right:0;\n  z-index:21;\n}\n"},833:function(t,e){t.exports='<md-sidenav-container class="example-container">\n  <md-toolbar color="primary">\n    <button md-icon-button (click)="sidenav.open()" mdTooltip="Your feeds">\n      <md-icon>menu</md-icon>\n    </button>\n    <h1 fxFlex style="text-align: center">\n      RSS Feed Aggregator\n    </h1>\n    <button md-icon-button [routerLink]="[\'/login\']" mdTooltip="Login">\n      <md-icon>person</md-icon>\n    </button>\n  </md-toolbar>\n  <md-sidenav #sidenav>\n    <app-feeds></app-feeds>\n  </md-sidenav>\n  <router-outlet></router-outlet>\n  <button md-fab class="subscribe-button" mdTooltip="Subscribe to a Feed" mdTooltipPosition="above" (click)="openDialog()"><md-icon>add</md-icon></button>\n</md-sidenav-container>\n'},834:function(t,e){t.exports='<md-card class="example-card">\n  <md-card-header>\n    <md-card-title>{{article?.title}}</md-card-title>\n    <md-card-subtitle>published: {{article?.pubdate}}</md-card-subtitle>\n  </md-card-header>\n  <!-- <img md-card-image src=""> -->\n  <md-card-content>\n    <p>\n      {{article?.description}}\n    </p>\n  </md-card-content>\n  <md-card-actions>\n    <a md-icon-button href="{{article?.link}}"><md-icon>link</md-icon></a>\n  </md-card-actions>\n</md-card>\n'},835:function(t,e){t.exports='<md-card class="example-card">\n  <md-card-header>\n    <md-card-title>{{feed?.title}}</md-card-title>\n    <md-card-subtitle>{{feed?.description}}</md-card-subtitle>\n  </md-card-header>\n  <md-card-content fxLayout="row">\n    <md-list fxFlex>\n      <a  md-list-item *ngFor="let article of articles">\n        <md-icon md-list-avatar>chrome_reader_mode</md-icon>\n        <h4 md-line>{{article?.title}}</h4>\n        <a md-mini-fab (click)="openArticle(article.id)" mdTooltip="Read Article"><md-icon>import_contacts</md-icon></a>\n      </a>\n    </md-list>\n    <md-divider></md-divider>\n    <app-article fxFlex [feedId]="id" [articleId]="selectedArticleId" *ngIf="selectedArticleId">\n    </app-article>\n  </md-card-content>\n  <md-card-actions fxLayout="row">\n    <a md-icon-button href="{{feed?.link}}"><md-icon>link</md-icon></a>\n    <div fxFlex></div>\n    <div fxShow="feed?.pubDate">last article : {{feed?.pubDate}}</div>\n  </md-card-actions>\n</md-card>\n'},836:function(t,e){t.exports='<md-list>\n  <h3 md-subheader>Feeds</h3>\n  <md-list-item  *ngFor="let feed of feeds">\n    <md-icon md-list-avatar>rss_feed</md-icon>\n    <h4 md-line>{{feed.title}}</h4>\n    <a md-icon-button (click)="unsubscribe(feed.id, feed.title)" mdTooltip="Unsuscribe"><md-icon>delete</md-icon></a>\n    <a md-mini-fab (click)="MdSidenav.close()" [routerLink]="[\'/feed\', feed.id, feed.title]" mdTooltip="View articles"><md-icon>list</md-icon></a>\n  </md-list-item>\n</md-list>\n'},837:function(t,e){t.exports='<form [formGroup]="loginForm" (ngSubmit)="doLogin($event)" fxLayout="column" style="margin: 10px">\n  <md-input-container>\n    <input md-input formControlName="email" type="email" placeholder="Email">\n  </md-input-container>\n  <md-input-container>\n    <input md-input formControlName="password" type="password" placeholder="Password">\n  </md-input-container>\n  <div>\n    <button md-raised-button color="primary" type="submit">Login</button>\n  </div>\n</form>\n<button md-raised-button [routerLink]="[\'/signup\']" style="margin: 10px">Signup</button>\n'},838:function(t,e){t.exports='<form [formGroup]="signupForm" (ngSubmit)="doSignup($event)" fxLayout="column" style="margin: 10px">\n  <md-input-container>\n    <input md-input formControlName="email" type="email" placeholder="Email">\n  </md-input-container>\n  <md-input-container>\n    <input md-input formControlName="password" type="password" placeholder="Password">\n  </md-input-container>\n  <div>\n    <button md-raised-button color="primary" type="submit">Signup</button>\n  </div>\n</form>\n'},839:function(t,e){t.exports='<h1 md-dialog-title>Enter the url of the feed you want to subscribe</h1>\n<div md-dialog-content fxLayout="row">\n  <md-input-container fxFlex>\n    <input md-input type="text" id="url"\n           required\n           [(ngModel)]="url" name="url" placeholder="Feed\'s url">\n  </md-input-container>\n</div>\n<md-dialog-actions>\n  <button md-raised-button (click)="dialogRef.close(url)" color="primary">Subscribe</button>\n  <button md-raised-button md-dialog-close>Cancel</button>\n</md-dialog-actions>\n'},871:function(t,e,n){t.exports=n(499)}},[871]);