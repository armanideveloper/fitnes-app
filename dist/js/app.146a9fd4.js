(function(){var t={4692:function(t,e,s){"use strict";s.d(e,{Z:function(){return u}});var n=function(){var t=this,e=t._self._c;return e("button",[t._t("default")],2)},i=[],r={name:"BaseButton"},a=r,o=s(1001),c=(0,o.Z)(a,n,i,!1,null,null,null),u=c.exports},8649:function(t,e,s){"use strict";var n=s(6369),i=s(679),r=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("router-view",{staticClass:"flex-1"}),t.$route.meta.hideFooter?t._e():e("the-footer")],1)},a=[],o=function(){var t=this,e=t._self._c;return e("footer",{staticClass:"footer"},[e("div",{staticClass:"container"},[e("nav",{staticClass:"footer__nav"},[e("ul",{staticClass:"footer-menu"},t._l(t.footerLinks,(function(n,i){return e("li",{key:`footer-item_${i}`,staticClass:"footer-menu__item"},[e("router-link",{staticClass:"footer-menu__link footer-link",attrs:{to:{name:n.to}}},[e("div",{staticClass:"footer-link__icon-wrapper"},[e("img",{staticClass:"footer-link__icon",attrs:{src:s(866)(`./${n.icon}.svg`),alt:n.icon}})]),t._v(" "+t._s(n.name)+" ")])],1)})),0)])])])},c=[],u={name:"TheFooter",data:()=>({footerLinks:[{to:"Home",name:"Home",icon:"home"},{to:"Activities",name:"Activities",icon:"calendar-heart"},{to:"Store",name:"Store",icon:"shopping-cart"},{to:"Club",name:"Club",icon:"building"},{to:"Instructors",name:"Instructors",icon:"users"}]})},l=u,d=s(1001),g=(0,d.Z)(l,o,c,!1,null,"6b5a808a",null),p=g.exports,m={components:{TheFooter:p}},f=m,v=(0,d.Z)(f,r,a,!1,null,null,null),h=v.exports,_=s(2631),b=function(){var t=this,e=t._self._c;return e("article",{staticClass:"home"},[e("div",{staticClass:"container"},[e("header",{staticClass:"home__header"},[e("button",{staticClass:"header-btn",on:{click:function(e){return e.stopPropagation(),t.showSettingsMenu.apply(null,arguments)}}},[e("img",{attrs:{src:s(808),alt:"profile icon"}})]),e("div",{staticClass:"header-btn-wrapper"},[e("button",{staticClass:"header-btn"},[e("img",{attrs:{src:s(204),alt:"bell icon"}})]),e("router-link",{staticClass:"header-btn",attrs:{tag:"button",to:{name:"History"}}},[e("img",{attrs:{src:s(3888),alt:"calendar icon"}})])],1)]),e("settings-menu",{class:{opened:t.showSettings},on:{"close-settings":t.closeSettingsMenu}}),e("section",{staticClass:"home__top"},[e("h1",{staticClass:"home__greeting"},[t._v("Hello "+t._s(t.username))]),e("span",{staticClass:"home__level-title"},[t._v("Level")]),e("div",{staticClass:"home__level-img"},[e("img",{attrs:{src:s(1768),alt:"star icon"}})])]),e("section",{staticClass:"home__stats"},t._l(t.stats,(function(t,s){return e("info-card",{key:`stat-item_${s}`,class:t.colorClass?`info-card--${t.colorClass}`:"",attrs:{text:t.text,value:t.value,time:t.time,img:t.img}})})),1),e("section",{staticClass:"home__next-booking"},[e("div",{staticClass:"card next-booking-card"},[e("p",{staticClass:"card__subtitle"},[t._v("Next booking")]),e("h2",{staticClass:"card__title"},[t._v("Personal training")]),e("p",{staticClass:"card__time"},[t._v("20:00")]),e("base-button",{staticClass:"small-blue-btn"},[t._v("Cancel")])],1),e("div",{staticClass:"card checkin-card"},[t.bookingCheckedIn?[e("h2",{staticClass:"checkin-card__title"},[t._v("Checked-in")]),e("button",{staticClass:"checkin-card__btn checkin-card__btn--checked"},[e("img",{attrs:{src:s(8085),alt:""}})]),e("p",{staticClass:"checkin-card__time"},[t._v("check in at "+t._s(t.checkedInTime))])]:[e("h2",{staticClass:"checkin-card__title"},[t._v("Check-in")]),e("button",{staticClass:"checkin-card__btn",on:{click:t.checkIn}},[e("img",{attrs:{src:s(1451),alt:""}})])]],2)]),e("section",{staticClass:"home__info"},[t._m(0),t._m(1),e("div",{staticClass:"card dates-card"},[e("div",{staticClass:"dates-card__dates"},[t._m(2),e("div",{staticClass:"dates-card__buttons"},[e("button",{staticClass:"dates-card__btn active"},[e("svg",{attrs:{width:"10",height:"11",viewBox:"0 0 10 11",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M9.00023 3.76858C10.3335 4.53846 10.3334 6.46296 9.00004 7.23268L3.74988 10.2635C2.4165 11.0332 0.749888 10.0709 0.749972 8.53127L0.750302 2.46909C0.750386 0.929492 2.41711 -0.0326659 3.7504 0.737207L9.00023 3.76858Z",fill:"#B8E1FF"}})])]),e("button",{staticClass:"dates-card__btn"},[e("svg",{attrs:{width:"10",height:"11",viewBox:"0 0 10 11",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M9.00023 3.76858C10.3335 4.53846 10.3334 6.46296 9.00004 7.23268L3.74988 10.2635C2.4165 11.0332 0.749888 10.0709 0.749972 8.53127L0.750302 2.46909C0.750386 0.929492 2.41711 -0.0326659 3.7504 0.737207L9.00023 3.76858Z",fill:"#B8E1FF"}})])])]),t._m(3)]),e("p",{staticClass:"dates-card__days-left"},[t._v("28 days left")]),e("progress",{staticClass:"dates-card__progress",attrs:{max:"100"},domProps:{value:t.progress}})])])],1)])},C=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"card membership-card"},[e("p",{staticClass:"card__subtitle"},[t._v("Membership")]),e("h2",{staticClass:"card__title"},[t._v("Standard")]),e("p",{staticClass:"card__value"},[t._v("150 "),e("span",[t._v("RON")])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"card bookings-card"},[e("h2",{staticClass:"card__title"},[t._v("Bookings left")]),e("p",{staticClass:"card__value"},[t._v("150")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"dates-card__date"},[e("p",{staticClass:"dates-card__date-title"},[t._v("Start date")]),e("p",{staticClass:"dates-card__date-value"},[t._v("01 September")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"dates-card__date"},[e("p",{staticClass:"dates-card__date-title"},[t._v("End date")]),e("p",{staticClass:"dates-card__date-value"},[t._v("30 September")])])}],x=s(4692),k=function(){var t=this,e=t._self._c;return e("aside",{directives:[{name:"click-outside",rawName:"v-click-outside",value:t.closeMenu,expression:"closeMenu"}],staticClass:"settings-menu"},[e("div",{staticClass:"settings-menu__header"},[e("h2",{staticClass:"settings-menu__title"},[t._v("Settings")]),e("button",{staticClass:"settings-menu__close-btn",on:{click:t.closeMenu}},[e("img",{attrs:{src:s(2769),alt:"Close"}})])]),e("div",{staticClass:"settings-menu__user user"},[e("img",{staticClass:"user__avatar",attrs:{src:s(8987),alt:""}}),e("p",{staticClass:"user__name"},[t._v("Victor Lemme")]),e("p",{staticClass:"user__email"},[t._v("victorlemme@gmail.com")])]),e("nav",{staticClass:"settings-menu__nav"},[e("ul",{staticClass:"settings-menu__menu"},t._l(t.settingsMenuItems,(function(t,s){return e("settings-menu-item",{key:`setting-menu-item_${s}`,attrs:{text:t.text,icon:t.icon,to:t.to,"text-color":t.textColor,"icon-wrapper-bg":t.iconWrapperBg}})})),1)])])},w=[],y=function(){var t=this,e=t._self._c;return e("li",{staticClass:"settings-menu-item"},[e("router-link",{staticClass:"settings-menu-item__link",attrs:{to:{name:t.to}}},[e("div",{staticClass:"settings-menu-item__icon-wrapper",style:{backgroundColor:t.iconWrapperBg}},[e("img",{attrs:{src:s(866)(`./${t.icon}.svg`),alt:t.icon}})]),e("p",{staticClass:"setting-menu-item__name",class:t.nameColor,style:{color:t.textColor}},[t._v(" "+t._s(t.text)+" ")]),e("svg",{attrs:{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M8.5 5C8.5 5 15.5 9.144 15.5 12C15.5 14.855 8.5 19 8.5 19",stroke:t.textColor?t.textColor:"#607080","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}})])])],1)},S=[],E={name:"SettingsMenuItem",props:{to:{type:String,required:!0,default:""},icon:{type:String,required:!0,default:""},iconWrapperBg:{type:String},text:{type:String,required:!0,default:""},textColor:{type:String}},computed:{nameColor(){if(this.textColor)return`setting-menu-item__name--${this.textColor}`}}},F=E,P=(0,d.Z)(F,y,S,!1,null,"4f8ac962",null),L=P.exports,M={name:"SettingsMenu",components:{SettingsMenuItem:L},data:()=>({settingsMenuItems:[{to:"Profile",text:"Edit Profile",icon:"profile-2",iconWrapperBg:"#FFEEE4"},{to:"Settings",text:"Settings",icon:"settings",iconWrapperBg:"#E3F5FF"},{to:"Payments",text:"Payments history",icon:"wallet",iconWrapperBg:"#E7FFF9"},{to:"ChangePassword",text:"Change Password",icon:"outline-check",iconWrapperBg:"#FFE3E3"},{to:"Legal",text:"Legal",icon:"outline-exclamation-circle",iconWrapperBg:"#E7E3FF"},{to:"Logout",text:"Logout",icon:"outline-logout",iconWrapperBg:"#FFE6E6",textColor:"red"}]}),methods:{closeMenu(){this.$emit("close-settings")}}},B=M,I=(0,d.Z)(B,k,w,!1,null,"1f6c6889",null),O=I.exports,Z=function(){var t=this,e=t._self._c;return e("article",{staticClass:"info-card"},[e("div",{staticClass:"info-card__img-wrapper"},[e("img",{staticClass:"info-card__img",attrs:{src:s(866)(`./${t.img}.svg`),alt:""}})]),e("h2",{staticClass:"info-card__value"},[t._v(t._s(t.value))]),e("p",{staticClass:"info-card__text"},[t._v(t._s(t.text))]),t.time?e("span",{staticClass:"info-card__time"},[t._v(t._s(t.time))]):t._e()])},T=[],j={name:"InfoCard",props:{img:{type:String,required:!0,default:""},value:{type:String,required:!0,default:""},text:{type:String,required:!0,default:""},time:{type:String}}},A=j,N=(0,d.Z)(A,Z,T,!1,null,"e0bfe712",null),q=N.exports,$={name:"HomeView",components:{BaseButton:x.Z,SettingsMenu:O,InfoCard:q},metaInfo:{title:"Home Page"},data(){return{username:"John",showSettings:!1,stats:[{img:"coins",value:"24",text:"points",colorClass:"dark-blue"},{img:"right-square",value:"20",text:"Entries",time:"last 30 days",colorClass:"blue"},{img:"target",value:"5 / 5",text:"Weekly Goal"}],bookingCheckedIn:!1,checkedInTime:null,progress:76}},methods:{showSettingsMenu(){this.showSettings=!0},closeSettingsMenu(){this.showSettings=!1},checkIn(){function t(t){return String(t).padStart(2,"0")}const e=new Date,s=t(e.getHours())+":"+t(e.getMinutes());this.bookingCheckedIn=!0,this.checkedInTime=s}}},H=$,W=(0,d.Z)(H,b,C,!1,null,"f5e1ce1c",null),D=W.exports;n.ZP.use(_.ZP);const U=[{path:"/",name:"Home",component:D},{path:"/history",name:"History",component:()=>s.e(908).then(s.bind(s,3298))},{path:"/club",name:"Club",component:()=>s.e(329).then(s.bind(s,4507))},{path:"/activities",name:"Activities",component:()=>s.e(755).then(s.bind(s,5543))},{path:"/store",name:"Store",component:()=>s.e(119).then(s.bind(s,8051))},{path:"/instructors",name:"Instructors",component:()=>s.e(592).then(s.bind(s,5909))},{path:"/profile",name:"Profile",component:()=>s.e(845).then(s.bind(s,217)),meta:{hideFooter:!0}},{path:"/payments",name:"Payments",component:()=>s.e(983).then(s.bind(s,6849)),meta:{hideFooter:!0}},{path:"/settings",name:"Settings",component:()=>s.e(571).then(s.bind(s,8976)),meta:{hideFooter:!0}},{path:"/change-password",name:"ChangePassword",component:()=>s.e(21).then(s.bind(s,1497)),meta:{hideFooter:!0}},{path:"/change-password/success",name:"ChangePasswordSuccess",component:()=>s.e(338).then(s.bind(s,4291)),meta:{hideFooter:!0}}],V=new _.ZP({mode:"history",base:"/fitnes-app/",routes:U});var G=V;s(7658);let J=[];function K(t,e,s){let{target:n}=t;e===n||e.contains(n)||s(t)}var R={bind(t,e){t.dataset.outsideClickIndex=J.length;const s=e.value,n=function(e){K(e,t,s)};document.addEventListener("click",n),document.addEventListener("touchstart",n),J.push(n)},unbind(t){const e=t.dataset.outsideClickIndex,s=J[e];document.removeEventListener("click",s),document.removeEventListener("touchstart",s),J.splice(e,1)}};n.ZP.use(i.Z),n.ZP.directive("click-outside",R),n.ZP.config.productionTip=!1,new n.ZP({router:G,render:t=>t(h)}).$mount("#app")},866:function(t,e,s){var n={"./arrow-up.svg":1451,"./bell.svg":204,"./building.svg":5953,"./calendar-check.svg":3888,"./calendar-heart.svg":2452,"./camera.svg":2360,"./checkmark-white.svg":8085,"./checkmark.svg":9229,"./coins.svg":6677,"./email.svg":208,"./fb.svg":8620,"./home.svg":9182,"./instagram.svg":7448,"./location.svg":834,"./outline-check-big.svg":5470,"./outline-check.svg":5102,"./outline-exclamation-circle.svg":1912,"./outline-logout.svg":2510,"./outline-x.svg":2769,"./phone.svg":3980,"./profile-2.svg":5203,"./profile.svg":808,"./right-square.svg":1348,"./settings.svg":9530,"./shopping-cart.svg":5302,"./star-2.svg":6511,"./star-level.svg":1768,"./target.svg":8614,"./user.svg":9643,"./users.svg":8523,"./verified-tick.svg":7607,"./wallet.svg":3219,"./website.svg":3938};function i(t){var e=r(t);return s(e)}function r(t){if(!s.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}i.keys=function(){return Object.keys(n)},i.resolve=r,t.exports=i,i.id=866},1451:function(t,e,s){"use strict";t.exports=s.p+"img/arrow-up.dd8dced9.svg"},204:function(t,e,s){"use strict";t.exports=s.p+"img/bell.a61d310b.svg"},5953:function(t,e,s){"use strict";t.exports=s.p+"img/building.564b9482.svg"},3888:function(t,e,s){"use strict";t.exports=s.p+"img/calendar-check.7b3055e8.svg"},2452:function(t,e,s){"use strict";t.exports=s.p+"img/calendar-heart.17202e73.svg"},2360:function(t,e,s){"use strict";t.exports=s.p+"img/camera.3fb70f6c.svg"},8085:function(t,e,s){"use strict";t.exports=s.p+"img/checkmark-white.f46dfb84.svg"},9229:function(t,e,s){"use strict";t.exports=s.p+"img/checkmark.edbca763.svg"},6677:function(t,e,s){"use strict";t.exports=s.p+"img/coins.99184a08.svg"},208:function(t,e,s){"use strict";t.exports=s.p+"img/email.34441b44.svg"},8620:function(t,e,s){"use strict";t.exports=s.p+"img/fb.fb96c58c.svg"},9182:function(t,e,s){"use strict";t.exports=s.p+"img/home.117bb4f8.svg"},7448:function(t,e,s){"use strict";t.exports=s.p+"img/instagram.ac034be5.svg"},834:function(t,e,s){"use strict";t.exports=s.p+"img/location.49d621d1.svg"},5470:function(t,e,s){"use strict";t.exports=s.p+"img/outline-check-big.b93f94a8.svg"},5102:function(t,e,s){"use strict";t.exports=s.p+"img/outline-check.6243c395.svg"},1912:function(t,e,s){"use strict";t.exports=s.p+"img/outline-exclamation-circle.e011d249.svg"},2510:function(t,e,s){"use strict";t.exports=s.p+"img/outline-logout.295c0b3b.svg"},2769:function(t,e,s){"use strict";t.exports=s.p+"img/outline-x.22b0a5ff.svg"},3980:function(t,e,s){"use strict";t.exports=s.p+"img/phone.30d93e5b.svg"},5203:function(t,e,s){"use strict";t.exports=s.p+"img/profile-2.8e9ae761.svg"},808:function(t,e,s){"use strict";t.exports=s.p+"img/profile.5d78cd5d.svg"},1348:function(t,e,s){"use strict";t.exports=s.p+"img/right-square.6b9ac638.svg"},9530:function(t,e,s){"use strict";t.exports=s.p+"img/settings.9f0aabb8.svg"},5302:function(t,e,s){"use strict";t.exports=s.p+"img/shopping-cart.c8d1d5ca.svg"},6511:function(t,e,s){"use strict";t.exports=s.p+"img/star-2.5397aab1.svg"},1768:function(t,e,s){"use strict";t.exports=s.p+"img/star-level.330b0cbf.svg"},8614:function(t,e,s){"use strict";t.exports=s.p+"img/target.0774a261.svg"},9643:function(t,e,s){"use strict";t.exports=s.p+"img/user.13fdaf6f.svg"},8523:function(t,e,s){"use strict";t.exports=s.p+"img/users.5eec881d.svg"},7607:function(t,e,s){"use strict";t.exports=s.p+"img/verified-tick.a1b4d4a0.svg"},3219:function(t,e,s){"use strict";t.exports=s.p+"img/wallet.637f57fe.svg"},3938:function(t,e,s){"use strict";t.exports=s.p+"img/website.8218fdd9.svg"},8987:function(t,e,s){"use strict";t.exports=s.p+"img/avatar.c363fd38.png"}},e={};function s(n){var i=e[n];if(void 0!==i)return i.exports;var r=e[n]={exports:{}};return t[n](r,r.exports,s),r.exports}s.m=t,function(){var t=[];s.O=function(e,n,i,r){if(!n){var a=1/0;for(l=0;l<t.length;l++){n=t[l][0],i=t[l][1],r=t[l][2];for(var o=!0,c=0;c<n.length;c++)(!1&r||a>=r)&&Object.keys(s.O).every((function(t){return s.O[t](n[c])}))?n.splice(c--,1):(o=!1,r<a&&(a=r));if(o){t.splice(l--,1);var u=i();void 0!==u&&(e=u)}}return e}r=r||0;for(var l=t.length;l>0&&t[l-1][2]>r;l--)t[l]=t[l-1];t[l]=[n,i,r]}}(),function(){s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,{a:e}),e}}(),function(){s.d=function(t,e){for(var n in e)s.o(e,n)&&!s.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){s.f={},s.e=function(t){return Promise.all(Object.keys(s.f).reduce((function(e,n){return s.f[n](t,e),e}),[]))}}(),function(){s.u=function(t){return"js/"+{21:"change-password",119:"store",329:"club",338:"change-password-success",571:"settings",592:"instructors",755:"activities",845:"profile",908:"history",983:"payments"}[t]+"."+{21:"86a55730",119:"71656ce5",329:"1f4db620",338:"5f22bace",571:"68a6ec68",592:"94f5411f",755:"9f4a9ce8",845:"de6cdfa5",908:"ccee6992",983:"ca281426"}[t]+".js"}}(),function(){s.miniCssF=function(t){return"css/"+{21:"change-password",329:"club",338:"change-password-success",571:"settings",755:"activities",845:"profile",908:"history",983:"payments"}[t]+"."+{21:"5812d53a",329:"44b43e55",338:"1367d571",571:"845f218b",755:"a3cc25d6",845:"75e09e9e",908:"23b25e2d",983:"3c9c214b"}[t]+".css"}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="fitness-app:";s.l=function(n,i,r,a){if(t[n])t[n].push(i);else{var o,c;if(void 0!==r)for(var u=document.getElementsByTagName("script"),l=0;l<u.length;l++){var d=u[l];if(d.getAttribute("src")==n||d.getAttribute("data-webpack")==e+r){o=d;break}}o||(c=!0,o=document.createElement("script"),o.charset="utf-8",o.timeout=120,s.nc&&o.setAttribute("nonce",s.nc),o.setAttribute("data-webpack",e+r),o.src=n),t[n]=[i];var g=function(e,s){o.onerror=o.onload=null,clearTimeout(p);var i=t[n];if(delete t[n],o.parentNode&&o.parentNode.removeChild(o),i&&i.forEach((function(t){return t(s)})),e)return e(s)},p=setTimeout(g.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=g.bind(null,o.onerror),o.onload=g.bind(null,o.onload),c&&document.head.appendChild(o)}}}(),function(){s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){s.p="/fitnes-app/"}(),function(){var t=function(t,e,s,n){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css";var r=function(r){if(i.onerror=i.onload=null,"load"===r.type)s();else{var a=r&&("load"===r.type?"missing":r.type),o=r&&r.target&&r.target.href||e,c=new Error("Loading CSS chunk "+t+" failed.\n("+o+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=a,c.request=o,i.parentNode.removeChild(i),n(c)}};return i.onerror=i.onload=r,i.href=e,document.head.appendChild(i),i},e=function(t,e){for(var s=document.getElementsByTagName("link"),n=0;n<s.length;n++){var i=s[n],r=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(r===t||r===e))return i}var a=document.getElementsByTagName("style");for(n=0;n<a.length;n++){i=a[n],r=i.getAttribute("data-href");if(r===t||r===e)return i}},n=function(n){return new Promise((function(i,r){var a=s.miniCssF(n),o=s.p+a;if(e(a,o))return i();t(n,o,i,r)}))},i={143:0};s.f.miniCss=function(t,e){var s={21:1,329:1,338:1,571:1,755:1,845:1,908:1,983:1};i[t]?e.push(i[t]):0!==i[t]&&s[t]&&e.push(i[t]=n(t).then((function(){i[t]=0}),(function(e){throw delete i[t],e})))}}(),function(){var t={143:0};s.f.j=function(e,n){var i=s.o(t,e)?t[e]:void 0;if(0!==i)if(i)n.push(i[2]);else{var r=new Promise((function(s,n){i=t[e]=[s,n]}));n.push(i[2]=r);var a=s.p+s.u(e),o=new Error,c=function(n){if(s.o(t,e)&&(i=t[e],0!==i&&(t[e]=void 0),i)){var r=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;o.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",o.name="ChunkLoadError",o.type=r,o.request=a,i[1](o)}};s.l(a,c,"chunk-"+e,e)}},s.O.j=function(e){return 0===t[e]};var e=function(e,n){var i,r,a=n[0],o=n[1],c=n[2],u=0;if(a.some((function(e){return 0!==t[e]}))){for(i in o)s.o(o,i)&&(s.m[i]=o[i]);if(c)var l=c(s)}for(e&&e(n);u<a.length;u++)r=a[u],s.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return s.O(l)},n=self["webpackChunkfitness_app"]=self["webpackChunkfitness_app"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=s.O(void 0,[998],(function(){return s(8649)}));n=s.O(n)})();
//# sourceMappingURL=app.146a9fd4.js.map