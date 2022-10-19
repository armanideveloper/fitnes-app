(function(){var t={7744:function(t,e,s){"use strict";s.d(e,{Z:function(){return u}});var n=function(){var t=this,e=t._self._c;return e("button",[t._t("default")],2)},i=[],r={name:"BaseButton"},a=r,o=s(1001),c=(0,o.Z)(a,n,i,!1,null,null,null),u=c.exports},7290:function(t,e,s){"use strict";var n=s(6369),i=s(679),r=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("router-view",{staticClass:"flex-1"}),t.$route.meta.hideFooter?t._e():e("the-footer")],1)},a=[],o=function(){var t=this,e=t._self._c;return e("footer",{staticClass:"footer"},[e("div",{staticClass:"container"},[e("nav",{staticClass:"footer__nav"},[e("ul",{staticClass:"footer-menu"},t._l(t.footerLinks,(function(n,i){return e("li",{key:`footer-item_${i}`,staticClass:"footer-menu__item"},[e("router-link",{staticClass:"footer-menu__link footer-link",attrs:{to:{path:n.path},exact:"Home"===n.name&&"Home"!==t.$route.name&&"History"!==t.$route.name}},[e("div",{staticClass:"footer-link__icon-wrapper"},[e("img",{staticClass:"footer-link__icon",attrs:{src:s(866)(`./${n.icon}.svg`),alt:n.icon}})]),t._v(" "+t._s(n.name)+" ")])],1)})),0)])])])},c=[],u={name:"TheFooter",data:()=>({footerLinks:[{path:"/",name:"Home",icon:"home",children:["History"]},{path:"/activities",name:"Activities",icon:"calendar-heart"},{path:"/store",name:"Store",icon:"shopping-cart"},{path:"/club",name:"Club",icon:"building"},{path:"/instructors",name:"Instructors",icon:"users"}]})},l=u,d=s(1001),p=(0,d.Z)(l,o,c,!1,null,"76d2aaaa",null),m=p.exports,g={components:{TheFooter:m}},f=g,v=(0,d.Z)(f,r,a,!1,null,null,null),h=v.exports,_=s(2631),b=function(){var t=this,e=t._self._c;return e("article",{staticClass:"home"},[e("div",{staticClass:"container"},[e("header",{staticClass:"home__header"},[e("button",{staticClass:"header-btn",on:{click:function(e){return e.stopPropagation(),t.showSettingsMenu.apply(null,arguments)}}},[e("img",{attrs:{src:s(808),alt:"profile icon"}})]),e("div",{staticClass:"header-btn-wrapper"},[e("button",{staticClass:"header-btn"},[e("img",{attrs:{src:s(204),alt:"bell icon"}})]),e("router-link",{staticClass:"header-btn",attrs:{to:{name:"History"},custom:""},scopedSlots:t._u([{key:"default",fn:function({navigate:t}){return[e("button",{staticClass:"header-btn",on:{click:t}},[e("img",{attrs:{src:s(3888),alt:"calendar icon"}})])]}}])})],1)]),e("settings-menu",{class:{opened:t.showSettings},on:{"close-settings":t.closeSettingsMenu}}),e("section",{staticClass:"home__top"},[e("h1",{staticClass:"home__greeting"},[t._v("Hello "+t._s(t.username))]),e("span",{staticClass:"home__level-title"},[t._v("Level")]),e("div",{staticClass:"home__level-img"},[e("img",{attrs:{src:s(1768),alt:"star icon"}})])]),e("section",{staticClass:"home__stats"},t._l(t.stats,(function(t,s){return e("info-card",{key:`stat-item_${s}`,class:t.colorClass?`info-card--${t.colorClass}`:"",attrs:{text:t.text,value:t.value,time:t.time,img:t.img,"link-to":t.linkTo}})})),1),e("section",{staticClass:"home__next-booking"},[e("div",{staticClass:"card next-booking-card"},[e("p",{staticClass:"card__subtitle"},[t._v("Next booking")]),e("h2",{staticClass:"card__title"},[t._v("Personal training")]),e("p",{staticClass:"card__time"},[t._v("20:00")]),e("base-button",{staticClass:"small-btn"},[t._v("Cancel")])],1),e("div",{staticClass:"card checkin-card"},[t.bookingCheckedIn?[e("h2",{staticClass:"checkin-card__title"},[t._v("Checked-in")]),e("button",{staticClass:"checkin-card__btn checkin-card__btn--checked"},[e("img",{attrs:{src:s(8085),alt:""}})]),e("p",{staticClass:"checkin-card__time"},[t._v("check in at "+t._s(t.checkedInTime))])]:[e("h2",{staticClass:"checkin-card__title"},[t._v("Check-in")]),e("button",{staticClass:"checkin-card__btn",on:{click:t.checkIn}},[e("img",{attrs:{src:s(1451),alt:""}})])]],2)]),e("section",{staticClass:"home__info"},[e("router-link",{attrs:{to:{name:"Store",params:{currentComponent:"StoreMemberships"}}},scopedSlots:t._u([{key:"default",fn:function({navigate:s}){return[e("div",{staticClass:"card membership-card",on:{click:s}},[e("p",{staticClass:"card__subtitle"},[t._v("Membership")]),e("h2",{staticClass:"card__title"},[t._v("Standard")]),e("p",{staticClass:"card__value"},[t._v("150 "),e("span",[t._v("RON")])])])]}}])}),e("router-link",{attrs:{to:{name:"History"}},scopedSlots:t._u([{key:"default",fn:function({navigate:s}){return[e("div",{staticClass:"card bookings-card",on:{click:s}},[e("h2",{staticClass:"card__title"},[t._v("Bookings left")]),e("p",{staticClass:"card__value"},[t._v("150")])])]}}])}),e("div",{staticClass:"card dates-card"},[e("router-link",{attrs:{to:{name:"Store",params:{currentComponent:"StoreMemberships"}}}},[e("div",{staticClass:"dates-card__dates"},[e("div",{staticClass:"dates-card__date"},[e("p",{staticClass:"dates-card__date-title"},[t._v("Start date")]),e("p",{staticClass:"dates-card__date-value"},[t._v("01 September")])]),e("div",{staticClass:"dates-card__buttons"},[e("button",{staticClass:"dates-card__btn active"},[e("svg",{attrs:{width:"10",height:"11",viewBox:"0 0 10 11",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M9.00023 3.76858C10.3335 4.53846 10.3334 6.46296 9.00004 7.23268L3.74988 10.2635C2.4165 11.0332 0.749888 10.0709 0.749972 8.53127L0.750302 2.46909C0.750386 0.929492 2.41711 -0.0326659 3.7504 0.737207L9.00023 3.76858Z",fill:"#B8E1FF"}})])]),e("button",{staticClass:"dates-card__btn"},[e("svg",{attrs:{width:"10",height:"11",viewBox:"0 0 10 11",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M9.00023 3.76858C10.3335 4.53846 10.3334 6.46296 9.00004 7.23268L3.74988 10.2635C2.4165 11.0332 0.749888 10.0709 0.749972 8.53127L0.750302 2.46909C0.750386 0.929492 2.41711 -0.0326659 3.7504 0.737207L9.00023 3.76858Z",fill:"#B8E1FF"}})])])]),e("div",{staticClass:"dates-card__date"},[e("p",{staticClass:"dates-card__date-title"},[t._v("End date")]),e("p",{staticClass:"dates-card__date-value"},[t._v("30 September")])])])]),e("p",{staticClass:"dates-card__days-left"},[t._v("28 days left")]),e("progress",{staticClass:"dates-card__progress",attrs:{max:"100"},domProps:{value:t.progress}})],1)],1)],1)])},C=[],k=s(7744),x=function(){var t=this,e=t._self._c;return e("aside",{directives:[{name:"click-outside",rawName:"v-click-outside",value:t.closeMenu,expression:"closeMenu"}],staticClass:"settings-menu"},[e("div",{staticClass:"settings-menu__header"},[e("h2",{staticClass:"settings-menu__title"},[t._v("Settings")]),e("button",{staticClass:"settings-menu__close-btn",on:{click:t.closeMenu}},[e("img",{attrs:{src:s(2769),alt:"Close"}})])]),e("div",{staticClass:"settings-menu__user user"},[e("img",{staticClass:"user__avatar",attrs:{src:s(8987),alt:""}}),e("p",{staticClass:"user__name"},[t._v("Victor Lemme")]),e("p",{staticClass:"user__email"},[t._v("victorlemme@gmail.com")])]),e("nav",{staticClass:"settings-menu__nav"},[e("ul",{staticClass:"settings-menu__menu"},t._l(t.settingsMenuItems,(function(t,s){return e("settings-menu-item",{key:`setting-menu-item_${s}`,attrs:{text:t.text,icon:t.icon,to:t.to,"text-color":t.textColor,"icon-wrapper-bg":t.iconWrapperBg}})})),1)])])},y=[],w=function(){var t=this,e=t._self._c;return e("li",{staticClass:"settings-menu-item"},[e("router-link",{staticClass:"settings-menu-item__link",attrs:{to:{name:t.to}}},[e("div",{staticClass:"settings-menu-item__icon-wrapper",style:{backgroundColor:t.iconWrapperBg}},[e("img",{attrs:{src:s(866)(`./${t.icon}.svg`),alt:t.icon}})]),e("p",{staticClass:"settings-menu-item__name",class:t.nameColor,style:{color:t.textColor}},[t._v(" "+t._s(t.text)+" ")]),e("svg",{attrs:{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M8.5 5C8.5 5 15.5 9.144 15.5 12C15.5 14.855 8.5 19 8.5 19",stroke:t.textColor?t.textColor:"#607080","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}})])])],1)},S=[],F={name:"SettingsMenuItem",props:{to:{type:String,required:!0,default:""},icon:{type:String,required:!0,default:""},iconWrapperBg:{type:String},text:{type:String,required:!0,default:""},textColor:{type:String}},computed:{nameColor(){if(this.textColor)return`setting-menu-item__name--${this.textColor}`}}},E=F,L=(0,d.Z)(E,w,S,!1,null,"13ea1fe0",null),P=L.exports,M={name:"SettingsMenu",components:{SettingsMenuItem:P},data:()=>({settingsMenuItems:[{to:"Profile",text:"Edit Profile",icon:"profile-2",iconWrapperBg:"#FFEEE4"},{to:"Settings",text:"Settings",icon:"settings",iconWrapperBg:"#E3F5FF"},{to:"Payments",text:"Payments history",icon:"wallet",iconWrapperBg:"#E7FFF9"},{to:"ChangePassword",text:"Change Password",icon:"outline-check",iconWrapperBg:"#FFE3E3"},{to:"Legal",text:"Legal",icon:"outline-exclamation-circle",iconWrapperBg:"#E7E3FF"},{to:"Logout",text:"Logout",icon:"outline-logout",iconWrapperBg:"#FFE6E6",textColor:"red"}]}),methods:{closeMenu(){this.$emit("close-settings")}}},B=M,I=(0,d.Z)(B,x,y,!1,null,"863a0e06",null),T=I.exports,O=function(){var t=this,e=t._self._c;return e("article",{staticClass:"info-card"},[t.linkTo?e("router-link",{attrs:{to:{name:t.linkTo}}},[e("div",{staticClass:"info-card__img-wrapper"},[e("img",{staticClass:"info-card__img",attrs:{src:s(866)(`./${t.img}.svg`),alt:""}})]),e("h2",{staticClass:"info-card__value"},[t._v(t._s(t.value))]),e("p",{staticClass:"info-card__text"},[t._v(t._s(t.text))]),t.time?e("span",{staticClass:"info-card__time"},[t._v(t._s(t.time))]):t._e()]):[e("div",{staticClass:"info-card__img-wrapper"},[e("img",{staticClass:"info-card__img",attrs:{src:s(866)(`./${t.img}.svg`),alt:""}})]),e("h2",{staticClass:"info-card__value"},[t._v(t._s(t.value))]),e("p",{staticClass:"info-card__text"},[t._v(t._s(t.text))]),t.time?e("span",{staticClass:"info-card__time"},[t._v(t._s(t.time))]):t._e()]],2)},H=[],Z={name:"InfoCard",props:{img:{type:String,required:!0,default:""},value:{type:String,required:!0,default:""},text:{type:String,required:!0,default:""},time:{type:String},linkTo:{type:String,default:""}}},j=Z,$=(0,d.Z)(j,O,H,!1,null,"3f25d289",null),N=$.exports,q={name:"HomeView",components:{BaseButton:k.Z,SettingsMenu:T,InfoCard:N},metaInfo:{title:"Home Page"},data(){return{username:"John",showSettings:!1,stats:[{img:"coins",value:"24",text:"points",colorClass:"dark-blue",linkTo:"History"},{img:"right-square",value:"20",text:"Entries",time:"last 30 days",colorClass:"blue",linkTo:"History"},{img:"target",value:"5 / 5",text:"Weekly Goal"}],bookingCheckedIn:!1,checkedInTime:null,progress:76}},methods:{showSettingsMenu(){this.showSettings=!0,document.body.classList.add("scroll-lock")},closeSettingsMenu(){this.showSettings=!1,document.body.classList.remove("scroll-lock")},checkIn(){function t(t){return String(t).padStart(2,"0")}const e=new Date,s=t(e.getHours())+":"+t(e.getMinutes());this.bookingCheckedIn=!0,this.checkedInTime=s}},destroyed(){document.body.classList.contains("scroll-lock")&&document.body.classList.remove("scroll-lock")}},A=q,W=(0,d.Z)(A,b,C,!1,null,"33bac6d9",null),D=W.exports,U=function(){var t=this,e=t._self._c;return e("router-view")},V=[],G={name:"MainView"},J=G,K=(0,d.Z)(J,U,V,!1,null,"25cf0fab",null),R=K.exports;n["default"].use(_.ZP);const z=[{path:"/",component:R,children:[{path:"",name:"Home",component:D},{path:"/history",name:"History",component:()=>s.e(908).then(s.bind(s,8696))}]},{path:"/club",name:"Club",component:()=>s.e(329).then(s.bind(s,3075))},{path:"/activities",name:"Activities",component:()=>s.e(755).then(s.bind(s,2148))},{path:"/activities/bookings",name:"Bookings",component:()=>s.e(837).then(s.bind(s,8622))},{path:"/store",name:"Store",component:()=>s.e(119).then(s.bind(s,5257))},{path:"/instructors",name:"Instructors",component:()=>s.e(592).then(s.bind(s,2861))},{path:"/instructors/:id",name:"Instructor",component:()=>s.e(593).then(s.bind(s,6813))},{path:"/instructors/:id/packages",name:"InstructorPackages",component:()=>s.e(782).then(s.bind(s,9896))},{path:"/instructors/:id/schedule",name:"InstructorSchedule",component:()=>s.e(782).then(s.bind(s,3513))},{path:"/profile",name:"Profile",component:()=>s.e(845).then(s.bind(s,2536)),meta:{hideFooter:!0}},{path:"/payments",name:"Payments",component:()=>s.e(983).then(s.bind(s,533)),meta:{hideFooter:!0}},{path:"/settings",name:"Settings",component:()=>s.e(571).then(s.bind(s,9666)),meta:{hideFooter:!0}},{path:"/change-password",name:"ChangePassword",component:()=>s.e(21).then(s.bind(s,6653)),meta:{hideFooter:!0}},{path:"/change-password/success",name:"ChangePasswordSuccess",component:()=>s.e(338).then(s.bind(s,8076)),meta:{hideFooter:!0}},{path:"/payment",name:"StorePayment",component:()=>s.e(464).then(s.bind(s,3578)),meta:{hideFooter:!0}},{path:"/payment/card",name:"StorePaymentCard",component:()=>s.e(639).then(s.bind(s,2555)),meta:{hideFooter:!0}},{path:"/payment/success",name:"StorePaymentSuccess",component:()=>s.e(939).then(s.bind(s,7654)),meta:{hideFooter:!0}}],Q=new _.ZP({mode:"history",base:"/fitnes-app/",routes:z});var X=Q,Y=s(759),tt=s.n(Y);s(7658);let et=[];function st(t,e,s){let{target:n}=t;e===n||e.contains(n)||s(t)}var nt={bind(t,e){t.dataset.outsideClickIndex=et.length;const s=e.value,n=function(e){st(e,t,s)};document.addEventListener("click",n),document.addEventListener("touchstart",n),et.push(n)},unbind(t){const e=t.dataset.outsideClickIndex,s=et[e];document.removeEventListener("click",s),document.removeEventListener("touchstart",s),et.splice(e,1)}};n["default"].use(i.Z),n["default"].use(tt()),n["default"].directive("click-outside",nt),n["default"].config.productionTip=!1,new n["default"]({router:X,render:t=>t(h)}).$mount("#app")},866:function(t,e,s){var n={"./arrow-down.svg":5011,"./arrow-up.svg":1451,"./bell.svg":204,"./book.svg":2515,"./building.svg":5953,"./calendar-check.svg":3888,"./calendar-heart.svg":2452,"./camera.svg":2360,"./checkmark-white-sm.svg":9875,"./checkmark-white.svg":8085,"./checkmark.svg":9229,"./clock-sm.svg":6123,"./coins.svg":6677,"./email.svg":208,"./fb.svg":8620,"./home.svg":9182,"./instagram.svg":7448,"./level.svg":1405,"./location.svg":834,"./marker-pin-sm.svg":6705,"./outline-check-big.svg":5470,"./outline-check.svg":5102,"./outline-exclamation-circle.svg":1912,"./outline-logout.svg":2510,"./outline-x.svg":2769,"./phone.svg":3980,"./profile-2.svg":5203,"./profile.svg":808,"./right-square.svg":1348,"./search.svg":6962,"./settings.svg":9530,"./shopping-cart.svg":5302,"./small-arrow-down.svg":3521,"./star-2.svg":6511,"./star-level.svg":1768,"./target.svg":8614,"./user-01.svg":3875,"./user-sm.svg":9140,"./user.svg":9643,"./users.svg":8523,"./verified-tick.svg":7607,"./wallet.svg":3219,"./website.svg":3938};function i(t){var e=r(t);return s(e)}function r(t){if(!s.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}i.keys=function(){return Object.keys(n)},i.resolve=r,t.exports=i,i.id=866},5011:function(t,e,s){"use strict";t.exports=s.p+"img/arrow-down.45d5f929.svg"},1451:function(t,e,s){"use strict";t.exports=s.p+"img/arrow-up.4073d747.svg"},204:function(t,e,s){"use strict";t.exports=s.p+"img/bell.3e6625e6.svg"},2515:function(t,e,s){"use strict";t.exports=s.p+"img/book.3a635e69.svg"},5953:function(t,e,s){"use strict";t.exports=s.p+"img/building.51b30bce.svg"},3888:function(t,e,s){"use strict";t.exports=s.p+"img/calendar-check.22599ead.svg"},2452:function(t,e,s){"use strict";t.exports=s.p+"img/calendar-heart.dc786cbc.svg"},2360:function(t,e,s){"use strict";t.exports=s.p+"img/camera.33cf7f63.svg"},9875:function(t,e,s){"use strict";t.exports=s.p+"img/checkmark-white-sm.5c70f569.svg"},8085:function(t,e,s){"use strict";t.exports=s.p+"img/checkmark-white.68adf69b.svg"},9229:function(t,e,s){"use strict";t.exports=s.p+"img/checkmark.fce97c66.svg"},6123:function(t,e,s){"use strict";t.exports=s.p+"img/clock-sm.64d6783e.svg"},6677:function(t,e,s){"use strict";t.exports=s.p+"img/coins.32ec038c.svg"},208:function(t,e,s){"use strict";t.exports=s.p+"img/email.c9f37de8.svg"},8620:function(t,e,s){"use strict";t.exports=s.p+"img/fb.2e535cd1.svg"},9182:function(t,e,s){"use strict";t.exports=s.p+"img/home.5a9b5f7a.svg"},7448:function(t,e,s){"use strict";t.exports=s.p+"img/instagram.b9f9f468.svg"},1405:function(t,e,s){"use strict";t.exports=s.p+"img/level.192e1b18.svg"},834:function(t,e,s){"use strict";t.exports=s.p+"img/location.af7f8f93.svg"},6705:function(t,e,s){"use strict";t.exports=s.p+"img/marker-pin-sm.ad18415f.svg"},5470:function(t,e,s){"use strict";t.exports=s.p+"img/outline-check-big.5b9ac7e8.svg"},5102:function(t,e,s){"use strict";t.exports=s.p+"img/outline-check.3c12032c.svg"},1912:function(t,e,s){"use strict";t.exports=s.p+"img/outline-exclamation-circle.6037e0e6.svg"},2510:function(t,e,s){"use strict";t.exports=s.p+"img/outline-logout.caeae8dd.svg"},2769:function(t,e,s){"use strict";t.exports=s.p+"img/outline-x.25a650e7.svg"},3980:function(t,e,s){"use strict";t.exports=s.p+"img/phone.7ee401be.svg"},5203:function(t,e,s){"use strict";t.exports=s.p+"img/profile-2.af4c4ae6.svg"},808:function(t,e,s){"use strict";t.exports=s.p+"img/profile.cadb0506.svg"},1348:function(t,e,s){"use strict";t.exports=s.p+"img/right-square.4c171499.svg"},6962:function(t,e,s){"use strict";t.exports=s.p+"img/search.0018435f.svg"},9530:function(t,e,s){"use strict";t.exports=s.p+"img/settings.8917a1c0.svg"},5302:function(t,e,s){"use strict";t.exports=s.p+"img/shopping-cart.084e2855.svg"},3521:function(t,e,s){"use strict";t.exports=s.p+"img/small-arrow-down.173a874d.svg"},6511:function(t,e,s){"use strict";t.exports=s.p+"img/star-2.92a00c62.svg"},1768:function(t,e,s){"use strict";t.exports=s.p+"img/star-level.04f0f47e.svg"},8614:function(t,e,s){"use strict";t.exports=s.p+"img/target.32443842.svg"},3875:function(t,e,s){"use strict";t.exports=s.p+"img/user-01.281354f1.svg"},9140:function(t,e,s){"use strict";t.exports=s.p+"img/user-sm.8947401e.svg"},9643:function(t,e,s){"use strict";t.exports=s.p+"img/user.a2331ca2.svg"},8523:function(t,e,s){"use strict";t.exports=s.p+"img/users.7d415b9e.svg"},7607:function(t,e,s){"use strict";t.exports=s.p+"img/verified-tick.84bcd829.svg"},3219:function(t,e,s){"use strict";t.exports=s.p+"img/wallet.8ee0ea60.svg"},3938:function(t,e,s){"use strict";t.exports=s.p+"img/website.314b2ea6.svg"},8987:function(t,e,s){"use strict";t.exports=s.p+"img/avatar.c363fd38.png"}},e={};function s(n){var i=e[n];if(void 0!==i)return i.exports;var r=e[n]={exports:{}};return t[n].call(r.exports,r,r.exports,s),r.exports}s.m=t,function(){var t=[];s.O=function(e,n,i,r){if(!n){var a=1/0;for(l=0;l<t.length;l++){n=t[l][0],i=t[l][1],r=t[l][2];for(var o=!0,c=0;c<n.length;c++)(!1&r||a>=r)&&Object.keys(s.O).every((function(t){return s.O[t](n[c])}))?n.splice(c--,1):(o=!1,r<a&&(a=r));if(o){t.splice(l--,1);var u=i();void 0!==u&&(e=u)}}return e}r=r||0;for(var l=t.length;l>0&&t[l-1][2]>r;l--)t[l]=t[l-1];t[l]=[n,i,r]}}(),function(){s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,{a:e}),e}}(),function(){s.d=function(t,e){for(var n in e)s.o(e,n)&&!s.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){s.f={},s.e=function(t){return Promise.all(Object.keys(s.f).reduce((function(e,n){return s.f[n](t,e),e}),[]))}}(),function(){s.u=function(t){return"js/"+({21:"change-password",119:"store",329:"club",338:"change-password-success",464:"store-payment",571:"settings",592:"instructors",593:"instructor",639:"store-payment-card",755:"activities",782:"instructor-schedule",837:"bookings",845:"profile",908:"history",939:"payment-success",983:"payments"}[t]||t)+"."+{21:"f9ac4bb7",119:"7b73770f",329:"669337f8",338:"f8fefca0",464:"709dbd1e",571:"cb40c350",592:"441584da",593:"10620c78",609:"b6f3fbb9",635:"48c865f7",639:"07cb9aa8",755:"8d42b575",782:"2234b0f7",837:"7b7a806f",845:"b2e888e3",908:"65588073",939:"1a5abba0",983:"de503373"}[t]+".js"}}(),function(){s.miniCssF=function(t){return"css/"+({21:"change-password",119:"store",329:"club",338:"change-password-success",464:"store-payment",571:"settings",592:"instructors",593:"instructor",639:"store-payment-card",755:"activities",782:"instructor-schedule",837:"bookings",845:"profile",908:"history",939:"payment-success",983:"payments"}[t]||t)+"."+{21:"5dee3dba",119:"7e7935c2",329:"df608be0",338:"c8a8c3b4",464:"72c3dbc5",571:"8c7f8b12",592:"5e1af9b4",593:"dc1ddd1c",609:"5bf19a9e",635:"f6dc05f4",639:"fbfb5582",755:"433f3f5e",782:"5db06d5d",837:"dd7865e2",845:"ec307ba3",908:"c74e1de3",939:"c8a8c3b4",983:"3b6d5d39"}[t]+".css"}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="fitness-app:";s.l=function(n,i,r,a){if(t[n])t[n].push(i);else{var o,c;if(void 0!==r)for(var u=document.getElementsByTagName("script"),l=0;l<u.length;l++){var d=u[l];if(d.getAttribute("src")==n||d.getAttribute("data-webpack")==e+r){o=d;break}}o||(c=!0,o=document.createElement("script"),o.charset="utf-8",o.timeout=120,s.nc&&o.setAttribute("nonce",s.nc),o.setAttribute("data-webpack",e+r),o.src=n),t[n]=[i];var p=function(e,s){o.onerror=o.onload=null,clearTimeout(m);var i=t[n];if(delete t[n],o.parentNode&&o.parentNode.removeChild(o),i&&i.forEach((function(t){return t(s)})),e)return e(s)},m=setTimeout(p.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=p.bind(null,o.onerror),o.onload=p.bind(null,o.onload),c&&document.head.appendChild(o)}}}(),function(){s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){s.p="/fitnes-app/"}(),function(){var t=function(t,e,s,n){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css";var r=function(r){if(i.onerror=i.onload=null,"load"===r.type)s();else{var a=r&&("load"===r.type?"missing":r.type),o=r&&r.target&&r.target.href||e,c=new Error("Loading CSS chunk "+t+" failed.\n("+o+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=a,c.request=o,i.parentNode.removeChild(i),n(c)}};return i.onerror=i.onload=r,i.href=e,document.head.appendChild(i),i},e=function(t,e){for(var s=document.getElementsByTagName("link"),n=0;n<s.length;n++){var i=s[n],r=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(r===t||r===e))return i}var a=document.getElementsByTagName("style");for(n=0;n<a.length;n++){i=a[n],r=i.getAttribute("data-href");if(r===t||r===e)return i}},n=function(n){return new Promise((function(i,r){var a=s.miniCssF(n),o=s.p+a;if(e(a,o))return i();t(n,o,i,r)}))},i={143:0};s.f.miniCss=function(t,e){var s={21:1,119:1,329:1,338:1,464:1,571:1,592:1,593:1,609:1,635:1,639:1,755:1,782:1,837:1,845:1,908:1,939:1,983:1};i[t]?e.push(i[t]):0!==i[t]&&s[t]&&e.push(i[t]=n(t).then((function(){i[t]=0}),(function(e){throw delete i[t],e})))}}(),function(){var t={143:0};s.f.j=function(e,n){var i=s.o(t,e)?t[e]:void 0;if(0!==i)if(i)n.push(i[2]);else{var r=new Promise((function(s,n){i=t[e]=[s,n]}));n.push(i[2]=r);var a=s.p+s.u(e),o=new Error,c=function(n){if(s.o(t,e)&&(i=t[e],0!==i&&(t[e]=void 0),i)){var r=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;o.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",o.name="ChunkLoadError",o.type=r,o.request=a,i[1](o)}};s.l(a,c,"chunk-"+e,e)}},s.O.j=function(e){return 0===t[e]};var e=function(e,n){var i,r,a=n[0],o=n[1],c=n[2],u=0;if(a.some((function(e){return 0!==t[e]}))){for(i in o)s.o(o,i)&&(s.m[i]=o[i]);if(c)var l=c(s)}for(e&&e(n);u<a.length;u++)r=a[u],s.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return s.O(l)},n=self["webpackChunkfitness_app"]=self["webpackChunkfitness_app"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=s.O(void 0,[998],(function(){return s(7290)}));n=s.O(n)})();
//# sourceMappingURL=app.a7b37301.js.map