(window["webpackJsonpreact-is-just"]=window["webpackJsonpreact-is-just"]||[]).push([[1],{134:function(e,t,n){e.exports=n(224)},14:function(e,t,n){e.exports={appNav:"Navbar_appNav__Kz3rW",appNavImage:"Navbar_appNavImage__1-s2C",appNavLink:"Navbar_appNavLink__2Ckv6"}},222:function(e,t,n){},223:function(e,t,n){},224:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),u=n(45),s=n.n(u),c=n(32),o=n(33),i=n(35),l=n(34),p=n(36),f=n(16),d=n(22),g=n(18),m=n(20),h=n(78),v=(n(142),n(31)),b=n(79),P=n(5);function E(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?E(n,!0).forEach(function(t){Object(b.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):E(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var w={app:{initialized:!1},auth:{userId:null,email:null,login:null,isAuth:!1},profilePage:{posts:[{id:1,message:"\u041c\u043e\u0439 \u043f\u0435\u0440\u0432\u044b\u0439 \u043f\u043e\u0441\u0442!",likes:12}],profile:{},status:""},messagesPage:{dialogs:[{id:1,name:"\u0423\u043b\u044f"},{id:2,name:"\u0410\u043d\u043d\u0430"},{id:3,name:"\u0412\u043b\u0430\u0434"},{id:4,name:"\u0422\u0438\u043c\u0443\u0440"},{id:5,name:"\u0410\u043d\u0434\u0440\u0435\u0439"}],messages:[{id:1,content:"\u041f\u0440\u0438\u0432\u0435\u0442"},{id:2,content:"\u041a\u0430\u043a \u0434\u0435\u043b\u0430?"},{id:3,content:":3"}]},sidebar:{},usersPage:{pageSize:30,pagePeriod:{usePage:1,control:10},totalUsersCount:0,currentPage:1,users:[],loading:!1,followingInProgress:[]}},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case P.e:return O({},e,{profilePage:O({},e.profilePage,{profile:O({},e.profilePage.profile,{photos:t.photos})})});case P.h:return O({},e,{usersPage:O({},e.usersPage,{pagePeriod:O({},e.usersPage.pagePeriod,{usePage:t.usePage})})});case P.f:var n={id:Date.now(),content:t.content};return O({},e,{messagesPage:O({},e.messagesPage,{messages:[].concat(Object(v.a)(e.messagesPage.messages),[n])})});case P.a:var r={id:Date.now(),message:t.postMessage,likes:0};return O({},e,{profilePage:O({},e.profilePage,{posts:[r].concat(Object(v.a)(e.profilePage.posts))})});case P.c:return O({},e,{usersPage:O({},e.usersPage,{users:e.usersPage.users.map(function(e){return e.id===t.id?O({},e,{followed:!0}):e})})});case P.p:return O({},e,{usersPage:O({},e.usersPage,{users:e.usersPage.users.map(function(e){return e.id===t.id?O({},e,{followed:!1}):e})})});case P.j:return O({},e,{usersPage:O({},e.usersPage,{users:Object(v.a)(t.users)})});case P.g:return O({},e,{usersPage:O({},e.usersPage,{currentPage:t.page})});case P.i:return O({},e,{usersPage:O({},e.usersPage,{totalUsersCount:t.count})});case P.o:return O({},e,{usersPage:O({},e.usersPage,{loading:t.loadingStatus})});case P.l:return O({},e,{profilePage:O({},e.profilePage,{profile:O({},t.profile)})});case P.k:return O({},e,{auth:O({},e.auth,{userId:t.userId,email:t.email,login:t.login,isAuth:t.isAuth})});case P.n:return O({},e,{usersPage:O({},e.usersPage,{followingInProgress:t.status?[].concat(Object(v.a)(e.usersPage.followingInProgress),[t.userId]):e.usersPage.followingInProgress.filter(function(e){return e!==t.userId})})});case P.m:return O({},e,{profilePage:O({},e.profilePage,{status:t.status})});case P.d:return O({},e,{app:O({},e.app,{initialized:!0})});case P.b:return O({},e,{profilePage:O({},e.profilePage,{posts:e.profilePage.posts.filter(function(e){return e.id!==t.id})})});default:return e}},j=n(76),N=Object(m.c)({global:y,form:j.a}),S=Object(m.e)(N,Object(m.a)(h.a));window.store=S;var k=n(30),x=n.n(k),I=function(e){var t=e.isAuth,n=e.login,r=e.logoutTC;return a.a.createElement("header",{className:x.a.appHeader},a.a.createElement("div",{className:x.a.appHeaderLoginBlock},a.a.createElement(f.b,{className:x.a.appHeaderLogIn,to:"/login"},a.a.createElement("span",null,t?"".concat(n):"\u0412\u043e\u0439\u0442\u0438")),a.a.createElement("span",{onClick:function(){return r()},className:x.a.appHeaderLogOut},t?"\u0412\u044b\u0439\u0442\u0438":null)))},C=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return a.a.createElement(I,this.props)}}]),t}(r.Component),L=Object(g.b)(function(e){var t=e.global;return{isAuth:t.auth.isAuth,login:t.auth.login}},{logoutTC:P.y})(C),A=n(83),T=n.n(A),_=n(84),U=n.n(_),D=n(85),z=n.n(D),R=n(86),H=n.n(R),G=n(14),W=n.n(G),F=Object(g.b)(function(e){return{isAuth:e.global.auth.isAuth}},null)(function(e){var t=e.isAuth;return a.a.createElement("nav",{className:W.a.appNav},t&&a.a.createElement(f.b,{to:"/profile",className:W.a.appNavLink},a.a.createElement("img",{alt:"profile-icon",src:z.a,className:W.a.appNavImage}),"\u041f\u0440\u043e\u0444\u0438\u043b\u044c"),t&&a.a.createElement(f.b,{to:"/dialogs",className:W.a.appNavLink},a.a.createElement("img",{alt:"message-icon",src:T.a,className:W.a.appNavImage}),"\u0421\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f"),a.a.createElement(f.b,{to:"/users",className:W.a.appNavLink},a.a.createElement("img",{alt:"friends-icon",src:H.a,className:W.a.appNavImage}),"\u041d\u0430\u0439\u0442\u0438 \u0434\u0440\u0443\u0437\u0435\u0439"),t&&a.a.createElement(f.b,{to:"/music",className:W.a.appNavLink},a.a.createElement("img",{alt:"music-icon",src:U.a,className:W.a.appNavImage}),"\u041c\u0443\u0437\u044b\u043a\u0430"))}),M=n(24),B=function(e,t){return function(n){var u=t?a.a.createElement(t,null):null;return a.a.createElement(r.Suspense,{fallback:u},a.a.createElement(e,n))}},J=n(55),q=n.n(J),K=a.a.lazy(function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,325))}),Q=a.a.lazy(function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,323))}),V=a.a.lazy(function(){return n.e(9).then(n.bind(null,319))}),Y=a.a.lazy(function(){return n.e(8).then(n.bind(null,320))}),Z=a.a.lazy(function(){return n.e(10).then(n.bind(null,321))}),X=a.a.lazy(function(){return n.e(6).then(n.bind(null,324))}),$=a.a.lazy(function(){return Promise.all([n.e(0),n.e(7)]).then(n.bind(null,322))}),ee=function(){return a.a.createElement(g.a,{store:S},a.a.createElement(f.a,{basename:"/SamuraiJS"}," ",a.a.createElement(ne,null))," ")},te=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){(0,this.props.initializeAppTC)()}},{key:"render",value:function(){return this.props.initialized?a.a.createElement("div",{className:q.a.appWrapper},a.a.createElement(L,null),a.a.createElement(F,null),a.a.createElement("div",{className:q.a.appReference},a.a.createElement(d.b,{path:"/profile/:userId?",render:B(Q,null)}),a.a.createElement(d.b,{path:"/dialogs",render:B(K,M.a)}),a.a.createElement(d.b,{path:"/news",render:B(V,M.a)}),a.a.createElement(d.b,{path:"/music",render:B(Y,M.a)}),a.a.createElement(d.b,{path:"/settings",render:B(Z,M.a)}),a.a.createElement(d.b,{path:"/users",render:B(X,null)}),a.a.createElement(d.b,{path:"/login",render:B($,M.a)}))):a.a.createElement(M.a,null)}}]),t}(r.Component),ne=Object(m.d)(d.f,Object(g.b)(function(e){return{initialized:e.global.app.initialized}},{getMeTC:P.s,initializeAppTC:P.w}))(te);n(223);s.a.render(a.a.createElement(ee,null),document.getElementById("root"))},24:function(e,t,n){"use strict";var r=n(0),a=n.n(r);n(222);t.a=function(){return a.a.createElement("div",{className:"lds-css ng-scope"},a.a.createElement("div",{className:"lds-rolling"},a.a.createElement("div",null)))}},30:function(e,t,n){e.exports={appHeader:"Header_appHeader__1Q_ia",appHeaderLoginBlock:"Header_appHeaderLoginBlock__1b7s3",appHeaderLogOut:"Header_appHeaderLogOut__2cEqw"}},5:function(e,t,n){"use strict";var r=n(4),a=n.n(r),u=n(9),s=n(80).create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"9c4c0b67-afad-4fc5-8099-60e295f78a94"}}),c={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return s.get("users?page=".concat(e,"&count=").concat(t)).then(function(e){return e.data})},getDeleteUser:function(e){return s.delete("follow/".concat(e)).then(function(e){return e.data})},getPostUser:function(e){return s.post("follow/".concat(e)).then(function(e){return e.data})}},o=function(e){return s.get("profile/".concat(e)).then(function(e){return e.data})},i=function(e){return s.get("profile/status/".concat(e)).then(function(e){return e.data})},l=function(e){return s.put("profile/status",{status:e}).then(function(e){return e.data})},p=function(e){var t=new FormData;return t.append("image",e),s.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}}).then(function(e){return e.data})},f=function(e){return s.put("profile",e).then(function(e){return e.data})},d=function(){return s.get("auth/me").then(function(e){return e.data})},g=function(e,t,n){return s.post("auth/login",{email:e,password:t,rememberMe:n}).then(function(e){return e.data})},m=function(){return s.delete("auth/login")},h=n(46);n.d(t,"f",function(){return v}),n.d(t,"a",function(){return b}),n.d(t,"c",function(){return P}),n.d(t,"p",function(){return E}),n.d(t,"j",function(){return O}),n.d(t,"g",function(){return w}),n.d(t,"i",function(){return y}),n.d(t,"o",function(){return j}),n.d(t,"l",function(){return N}),n.d(t,"k",function(){return S}),n.d(t,"n",function(){return k}),n.d(t,"m",function(){return x}),n.d(t,"b",function(){return I}),n.d(t,"d",function(){return C}),n.d(t,"e",function(){return L}),n.d(t,"h",function(){return A}),n.d(t,"B",function(){return T}),n.d(t,"q",function(){return _}),n.d(t,"C",function(){return z}),n.d(t,"D",function(){return F}),n.d(t,"E",function(){return J}),n.d(t,"r",function(){return q}),n.d(t,"v",function(){return K}),n.d(t,"t",function(){return Q}),n.d(t,"u",function(){return V}),n.d(t,"F",function(){return Y}),n.d(t,"s",function(){return Z}),n.d(t,"x",function(){return X}),n.d(t,"y",function(){return $}),n.d(t,"w",function(){return ee}),n.d(t,"A",function(){return te}),n.d(t,"z",function(){return ne});var v="SEND-MESSAGE",b="ADD-POST",P="FOLLOW",E="UNFOLLOW",O="SET-USERS",w="SET-CURRENT-PAGE",y="SET-TOTAL-USERS-COUNT",j="TOGGLE-IS-LOADING",N="SET-USER-PROFILE",S="network/auth/SET-USER-DATA",k="TOGGLE-IS-FOLLOWING-PROGRESS",x="SET-USER-STATUS",I="DELETE-POST",C="INITIALIZED-SUCCESS",L="SAVE-PHOTO-SUCCESS",A="SET-PAGE-PERIOD",T=function(e){return{type:v,content:e}},_=function(e){return{type:b,postMessage:e}},U=function(e){return{type:P,id:e}},D=function(e){return{type:E,id:e}},z=function(e){return{type:w,page:e}},R=function(e){return{type:j,loadingStatus:e}},H=function(e,t,n,r){return{type:S,userId:e,email:t,login:n,isAuth:r}},G=function(e,t){return{type:k,status:e,userId:t}},W=function(e){return{type:x,status:e}},F=function(e){return{type:A,usePage:e}},M=function(){return{type:C}},B=function(){var e=Object(u.a)(a.a.mark(function e(t,n,r,u){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t(G(!0,n)),e.next=3,r(n);case 3:0===e.sent.resultCode&&t(u(n)),t(G(!1,n));case 6:case"end":return e.stop()}},e)}));return function(t,n,r,a){return e.apply(this,arguments)}}(),J=function(e){return function(){var t=Object(u.a)(a.a.mark(function t(n){var r;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:r=c.getDeleteUser.bind(c),B(n,e,r,D);case 2:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},q=function(e){return function(){var t=Object(u.a)(a.a.mark(function t(n){var r;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:r=c.getPostUser.bind(c),B(n,e,r,U);case 2:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},K=function(e,t){return function(){var n=Object(u.a)(a.a.mark(function n(r){var u;return a.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return r(R(!0)),n.next=3,c.getUsers(e,t);case 3:u=n.sent,r(R(!1)),r((s=u.items,{type:O,users:s})),r((a=u.totalCount,{type:y,count:a}));case 7:case"end":return n.stop()}var a,s},n)}));return function(e){return n.apply(this,arguments)}}()},Q=function(e){return function(){var t=Object(u.a)(a.a.mark(function t(n){var r;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o(e);case 2:r=t.sent,n({type:N,profile:r});case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},V=function(e){return function(){var t=Object(u.a)(a.a.mark(function t(n){var r;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i(e);case 2:r=t.sent,n(W(r));case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},Y=function(e){return function(){var t=Object(u.a)(a.a.mark(function t(n){return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l(e);case 2:0===t.sent.resultCode&&n(W(e));case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},Z=function(){return function(){var e=Object(u.a)(a.a.mark(function e(t){var n,r,u,s,c;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d();case 2:0===(n=e.sent).resultCode&&(r=n.data,u=r.id,s=r.email,c=r.login,t(H(u,s,c,!0)));case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},X=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return function(){var r=Object(u.a)(a.a.mark(function r(u){var s,c,o;return a.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,g(e,t,n);case 2:0===(s=r.sent).resultCode?u(Z()):(c=s.messages.length>0?s.messages[0]:"Something wrong",o=Object(h.a)("login",{_error:"".concat(c)}),u(o));case 4:case"end":return r.stop()}},r)}));return function(e){return r.apply(this,arguments)}}()},$=function(){return function(){var e=Object(u.a)(a.a.mark(function e(t){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m();case 2:0===e.sent.data.resultCode&&t(H(null,null,null,!1));case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},ee=function(){return function(e){var t=e(Z());t.then(function(){e(M())}),Promise.all([t]).then(function(){e(M())})}},te=function(e,t,n){return function(){var r=Object(u.a)(a.a.mark(function r(u){return a.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,f(e);case 2:if(0!==r.sent.resultCode){r.next=7;break}return r.next=6,u(Q(t));case 6:n();case 7:case"end":return r.stop()}},r)}));return function(e){return r.apply(this,arguments)}}()},ne=function(e){return function(){var t=Object(u.a)(a.a.mark(function t(n){var r;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p(e);case 2:0===(r=t.sent).resultCode&&n((a=r.data.photos,{type:L,photos:a}));case 4:case"end":return t.stop()}var a},t)}));return function(e){return t.apply(this,arguments)}}()}},55:function(e,t,n){e.exports={appWrapper:"App_appWrapper__2OQGW",appReference:"App_appReference__m_F0L"}},83:function(e,t,n){e.exports=n.p+"static/media/message.bda0f5d5.svg"},84:function(e,t,n){e.exports=n.p+"static/media/music.7925fc4b.svg"},85:function(e,t,n){e.exports=n.p+"static/media/profile.de2d9e02.svg"},86:function(e,t,n){e.exports=n.p+"static/media/friends.d556ee07.svg"}},[[134,2,3]]]);
//# sourceMappingURL=main.9ea4636a.chunk.js.map