(window["webpackJsonpreact-is-just"]=window["webpackJsonpreact-is-just"]||[]).push([[1],{134:function(e,t,n){e.exports=n(223)},14:function(e,t,n){e.exports={appNav:"Navbar_appNav__Kz3rW",appNavImage:"Navbar_appNavImage__1-s2C",appNavLink:"Navbar_appNavLink__2Ckv6"}},221:function(e,t,n){},222:function(e,t,n){},223:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),u=n(44),c=n.n(u),s=n(32),o=n(33),i=n(35),l=n(34),p=n(36),f=n(16),d=n(21),g=n(22),m=n(17),h=n(78),v=n(76),b=n(31),E=n(79),O=n(5);function P(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?P(n,!0).forEach(function(t){Object(E.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):P(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var y={app:{initialized:!1},auth:{userId:null,email:null,login:null,isAuth:!1,captchaUrl:null},profilePage:{posts:[{id:1,message:"Default",likes:12}],profile:{},status:""},messagesPage:{dialogs:[{id:1,name:"\u0423\u043b\u044f"},{id:2,name:"\u0410\u043d\u043d\u0430"},{id:3,name:"\u0412\u043b\u0430\u0434"},{id:4,name:"\u0422\u0438\u043c\u0443\u0440"},{id:5,name:"\u0410\u043d\u0434\u0440\u0435\u0439"}],messages:[{id:1,content:"\u041f\u0440\u0438\u0432\u0435\u0442"},{id:2,content:"\u041a\u0430\u043a \u0434\u0435\u043b\u0430?"},{id:3,content:":3"}]},sidebar:{},usersPage:{pageSize:30,pagePeriod:{usePage:1,control:10},totalUsersCount:0,currentPage:1,users:[],loading:!1,followingInProgress:[]}},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O.d:return w({},e,{auth:w({},e.auth,{captchaUrl:t.url})});case O.f:return w({},e,{profilePage:w({},e.profilePage,{profile:w({},e.profilePage.profile,{photos:t.photos})})});case O.i:return w({},e,{usersPage:w({},e.usersPage,{pagePeriod:w({},e.usersPage.pagePeriod,{usePage:t.usePage})})});case O.g:var n={id:Date.now(),content:t.content};return w({},e,{messagesPage:w({},e.messagesPage,{messages:[].concat(Object(b.a)(e.messagesPage.messages),[n])})});case O.a:var r={id:Date.now(),message:t.postMessage,likes:0};return w({},e,{profilePage:w({},e.profilePage,{posts:[r].concat(Object(b.a)(e.profilePage.posts))})});case O.c:return w({},e,{usersPage:w({},e.usersPage,{users:e.usersPage.users.map(function(e){return e.id===t.id?w({},e,{followed:!0}):e})})});case O.q:return w({},e,{usersPage:w({},e.usersPage,{users:e.usersPage.users.map(function(e){return e.id===t.id?w({},e,{followed:!1}):e})})});case O.k:return w({},e,{usersPage:w({},e.usersPage,{users:Object(b.a)(t.users)})});case O.h:return w({},e,{usersPage:w({},e.usersPage,{currentPage:t.page})});case O.j:return w({},e,{usersPage:w({},e.usersPage,{totalUsersCount:t.count})});case O.p:return w({},e,{usersPage:w({},e.usersPage,{loading:t.loadingStatus})});case O.m:return w({},e,{profilePage:w({},e.profilePage,{profile:w({},t.profile)})});case O.l:return w({},e,{auth:w({},e.auth,{userId:t.userId,email:t.email,login:t.login,isAuth:t.isAuth})});case O.o:return w({},e,{usersPage:w({},e.usersPage,{followingInProgress:t.status?[].concat(Object(b.a)(e.usersPage.followingInProgress),[t.userId]):e.usersPage.followingInProgress.filter(function(e){return e!==t.userId})})});case O.n:return w({},e,{profilePage:w({},e.profilePage,{status:t.status})});case O.e:return w({},e,{app:w({},e.app,{initialized:!0})});case O.b:return w({},e,{profilePage:w({},e.profilePage,{posts:e.profilePage.posts.filter(function(e){return e.id!==t.id})})});default:return e}},N=Object(m.c)({global:j,form:v.a}),S=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||m.d,k=Object(m.e)(N,S(Object(m.a)(h.a)));window.store=k;var x=n(30),C=n.n(x),_=function(e){var t=e.isAuth,n=e.login,r=e.logoutTC;return a.a.createElement("header",{className:C.a.appHeader},a.a.createElement("div",{className:C.a.appHeaderLoginBlock},a.a.createElement(f.b,{className:C.a.appHeaderLogIn,to:"/login"},a.a.createElement("span",null,t?"".concat(n):"\u0412\u043e\u0439\u0442\u0438")),a.a.createElement("span",{onClick:function(){return r()},className:C.a.appHeaderLogOut},t?"\u0412\u044b\u0439\u0442\u0438":null)))},I=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return a.a.createElement(_,this.props)}}]),t}(r.Component),T=Object(g.b)(function(e){var t=e.global;return{isAuth:t.auth.isAuth,login:t.auth.login}},{logoutTC:O.z})(I),L=n(83),A=n.n(L),U=n(84),D=n.n(U),z=n(85),R=n.n(z),H=n(86),G=n.n(H),F=n(14),W=n.n(F),M=Object(g.b)(function(e){return{isAuth:e.global.auth.isAuth}},null)(function(e){var t=e.isAuth;return a.a.createElement("nav",{className:W.a.appNav},t&&a.a.createElement(f.b,{to:"/profile",className:W.a.appNavLink},a.a.createElement("img",{alt:"profile-icon",src:R.a,className:W.a.appNavImage}),"\u041f\u0440\u043e\u0444\u0438\u043b\u044c"),t&&a.a.createElement(f.b,{to:"/dialogs",className:W.a.appNavLink},a.a.createElement("img",{alt:"message-icon",src:A.a,className:W.a.appNavImage}),"\u0421\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f"),a.a.createElement(f.b,{to:"/users",className:W.a.appNavLink},a.a.createElement("img",{alt:"friends-icon",src:G.a,className:W.a.appNavImage}),"\u041d\u0430\u0439\u0442\u0438 \u0434\u0440\u0443\u0437\u0435\u0439"),t&&a.a.createElement(f.b,{to:"/music",className:W.a.appNavLink},a.a.createElement("img",{alt:"music-icon",src:D.a,className:W.a.appNavImage}),"\u041c\u0443\u0437\u044b\u043a\u0430"))}),B=n(25),q=function(e,t){return function(n){var u=t?a.a.createElement(t,null):null;return a.a.createElement(r.Suspense,{fallback:u},a.a.createElement(e,n))}},J=n(55),K=n.n(J),Q=a.a.lazy(function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,322))}),V=a.a.lazy(function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,320))}),X=a.a.lazy(function(){return n.e(8).then(n.bind(null,317))}),Y=a.a.lazy(function(){return n.e(9).then(n.bind(null,318))}),Z=a.a.lazy(function(){return n.e(6).then(n.bind(null,321))}),$=a.a.lazy(function(){return Promise.all([n.e(0),n.e(7)]).then(n.bind(null,319))}),ee=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){(0,this.props.initializeAppTC)()}},{key:"render",value:function(){return this.props.initialized?a.a.createElement("div",{className:K.a.appWrapper},a.a.createElement(T,null),a.a.createElement(M,null),a.a.createElement("div",{className:K.a.appReference},a.a.createElement(d.d,null,a.a.createElement(d.b,{exact:!0,path:"/",render:function(){return a.a.createElement(d.a,{from:"/",to:"/profile"})}}),a.a.createElement(d.b,{path:"/dialogs",render:q(Q,B.a)}),a.a.createElement(d.b,{path:"/music",render:q(X,B.a)}),a.a.createElement(d.b,{path:"/settings",render:q(Y,B.a)}),a.a.createElement(d.b,{path:"/users",render:q(Z,null)}),a.a.createElement(d.b,{path:"/profile/:userId?",render:q(V,null)}),a.a.createElement(d.b,{path:"/login",render:q($,B.a)}),a.a.createElement(d.b,{path:"*",render:function(){return a.a.createElement("div",null,"404 NOT FOUND")}})))):a.a.createElement(B.a,null)}}]),t}(r.Component),te=Object(m.d)(d.g,Object(g.b)(function(e){return{initialized:e.global.app.initialized}},{getMeTC:O.t,initializeAppTC:O.x}))(ee),ne=function(){return a.a.createElement(g.a,{store:k},a.a.createElement(f.a,null,a.a.createElement(te,null)))};n(222);c.a.render(a.a.createElement(ne,null),document.getElementById("root"))},25:function(e,t,n){"use strict";var r=n(0),a=n.n(r);n(221);t.a=function(){return a.a.createElement("div",{className:"lds-css ng-scope"},a.a.createElement("div",{className:"lds-rolling"},a.a.createElement("div",null)))}},30:function(e,t,n){e.exports={appHeader:"Header_appHeader__1Q_ia",appHeaderLoginBlock:"Header_appHeaderLoginBlock__1b7s3",appHeaderLogOut:"Header_appHeaderLogOut__2cEqw"}},5:function(e,t,n){"use strict";var r=n(4),a=n.n(r),u=n(6),c=n(80).create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"9c4c0b67-afad-4fc5-8099-60e295f78a94"}}),s={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return c.get("users?page=".concat(e,"&count=").concat(t)).then(function(e){return e.data})},getDeleteUser:function(e){return c.delete("follow/".concat(e)).then(function(e){return e.data})},getPostUser:function(e){return c.post("follow/".concat(e)).then(function(e){return e.data})}},o=function(e){return c.get("profile/".concat(e)).then(function(e){return e.data})},i=function(e){return c.get("profile/status/".concat(e)).then(function(e){return e.data})},l=function(e){return c.put("profile/status",{status:e}).then(function(e){return e.data})},p=function(e){var t=new FormData;return t.append("image",e),c.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}}).then(function(e){return e.data})},f=function(e){return c.put("profile",e).then(function(e){return e.data})},d=function(){return c.get("auth/me").then(function(e){return e.data})},g=function(e,t,n){return c.post("auth/login",{email:e,password:t,rememberMe:n}).then(function(e){return e.data})},m=function(){return c.delete("auth/login")},h=function(){return c.get("security/get-captcha-url").then(function(e){return e.data})},v=n(45);n.d(t,"g",function(){return b}),n.d(t,"a",function(){return E}),n.d(t,"c",function(){return O}),n.d(t,"q",function(){return P}),n.d(t,"k",function(){return w}),n.d(t,"h",function(){return y}),n.d(t,"j",function(){return j}),n.d(t,"p",function(){return N}),n.d(t,"m",function(){return S}),n.d(t,"l",function(){return k}),n.d(t,"o",function(){return x}),n.d(t,"n",function(){return C}),n.d(t,"b",function(){return _}),n.d(t,"e",function(){return I}),n.d(t,"f",function(){return T}),n.d(t,"d",function(){return L}),n.d(t,"i",function(){return A}),n.d(t,"C",function(){return U}),n.d(t,"r",function(){return D}),n.d(t,"D",function(){return H}),n.d(t,"E",function(){return B}),n.d(t,"F",function(){return K}),n.d(t,"s",function(){return Q}),n.d(t,"w",function(){return V}),n.d(t,"u",function(){return X}),n.d(t,"v",function(){return Y}),n.d(t,"G",function(){return Z}),n.d(t,"t",function(){return $}),n.d(t,"y",function(){return te}),n.d(t,"z",function(){return ne}),n.d(t,"x",function(){return re}),n.d(t,"B",function(){return ae}),n.d(t,"A",function(){return ue});var b="SEND-MESSAGE",E="ADD-POST",O="FOLLOW",P="UNFOLLOW",w="SET-USERS",y="SET-CURRENT-PAGE",j="SET-TOTAL-USERS-COUNT",N="TOGGLE-IS-LOADING",S="SET-USER-PROFILE",k="network/auth/SET-USER-DATA",x="TOGGLE-IS-FOLLOWING-PROGRESS",C="SET-USER-STATUS",_="DELETE-POST",I="INITIALIZED-SUCCESS",T="SAVE-PHOTO-SUCCESS",L="GET-CAPTCHA-URL-SUCCESS",A="SET-PAGE-PERIOD",U=function(e){return{type:b,content:e}},D=function(e){return{type:E,postMessage:e}},z=function(e){return{type:O,id:e}},R=function(e){return{type:P,id:e}},H=function(e){return{type:y,page:e}},G=function(e){return{type:N,loadingStatus:e}},F=function(e,t,n,r){return{type:k,userId:e,email:t,login:n,isAuth:r}},W=function(e,t){return{type:x,status:e,userId:t}},M=function(e){return{type:C,status:e}},B=function(e){return{type:A,usePage:e}},q=function(){return{type:I}},J=function(){var e=Object(u.a)(a.a.mark(function e(t,n,r,u){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t(W(!0,n)),e.next=3,r(n);case 3:0===e.sent.resultCode&&t(u(n)),t(W(!1,n));case 6:case"end":return e.stop()}},e)}));return function(t,n,r,a){return e.apply(this,arguments)}}(),K=function(e){return function(){var t=Object(u.a)(a.a.mark(function t(n){var r;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:r=s.getDeleteUser.bind(s),J(n,e,r,R);case 2:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},Q=function(e){return function(){var t=Object(u.a)(a.a.mark(function t(n){var r;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:r=s.getPostUser.bind(s),J(n,e,r,z);case 2:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},V=function(e,t){return function(){var n=Object(u.a)(a.a.mark(function n(r){var u;return a.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return r(G(!0)),n.next=3,s.getUsers(e,t);case 3:u=n.sent,r(G(!1)),r((c=u.items,{type:w,users:c})),r((a=u.totalCount,{type:j,count:a}));case 7:case"end":return n.stop()}var a,c},n)}));return function(e){return n.apply(this,arguments)}}()},X=function(e){return function(){var t=Object(u.a)(a.a.mark(function t(n){var r;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o(e);case 2:r=t.sent,n({type:S,profile:r});case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},Y=function(e){return function(){var t=Object(u.a)(a.a.mark(function t(n){var r;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i(e);case 2:r=t.sent,n(M(r));case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},Z=function(e){return function(){var t=Object(u.a)(a.a.mark(function t(n){return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l(e);case 2:0===t.sent.resultCode&&n(M(e));case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},$=function(){return function(){var e=Object(u.a)(a.a.mark(function e(t){var n,r,u,c,s;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d();case 2:0===(n=e.sent).resultCode&&(r=n.data,u=r.id,c=r.email,s=r.login,t(F(u,c,s,!0)));case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},ee=function(){return function(){var e=Object(u.a)(a.a.mark(function e(t){var n;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h();case 2:n=e.sent,t({type:L,url:n});case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},te=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return function(){var c=Object(u.a)(a.a.mark(function u(c){var s,o,i;return a.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,g(e,t,n,r);case 2:0===(s=a.sent).resultCode?c($()):(10===s.resultCode&&c(ee()),o=s.messages.length>0?s.messages[0]:"Something wrong",i=Object(v.a)("login",{_error:"".concat(o)}),c(i));case 4:case"end":return a.stop()}},u)}));return function(e){return c.apply(this,arguments)}}()},ne=function(){return function(){var e=Object(u.a)(a.a.mark(function e(t){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m();case 2:0===e.sent.data.resultCode&&t(F(null,null,null,!1));case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},re=function(){return function(e){var t=e($());t.then(function(){e(q())}),Promise.all([t]).then(function(){e(q())})}},ae=function(e,t,n){return function(){var r=Object(u.a)(a.a.mark(function r(u){return a.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,f(e);case 2:if(0!==r.sent.resultCode){r.next=7;break}return r.next=6,u(X(t));case 6:n();case 7:case"end":return r.stop()}},r)}));return function(e){return r.apply(this,arguments)}}()},ue=function(e){return function(){var t=Object(u.a)(a.a.mark(function t(n){var r;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p(e);case 2:0===(r=t.sent).resultCode&&n((a=r.data.photos,{type:T,photos:a}));case 4:case"end":return t.stop()}var a},t)}));return function(e){return t.apply(this,arguments)}}()}},55:function(e,t,n){e.exports={appWrapper:"App_appWrapper__2OQGW",appReference:"App_appReference__m_F0L"}},83:function(e,t,n){e.exports=n.p+"static/media/message.bda0f5d5.svg"},84:function(e,t,n){e.exports=n.p+"static/media/music.7925fc4b.svg"},85:function(e,t,n){e.exports=n.p+"static/media/profile.de2d9e02.svg"},86:function(e,t,n){e.exports=n.p+"static/media/friends.d556ee07.svg"}},[[134,2,3]]]);
//# sourceMappingURL=main.afcb9507.chunk.js.map