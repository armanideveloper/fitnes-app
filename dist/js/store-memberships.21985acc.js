"use strict";(self["webpackChunkfitness_app"]=self["webpackChunkfitness_app"]||[]).push([[609],{6185:function(t,e,s){s.d(e,{Z:function(){return b}});var r=function(){var t=this,e=t._self._c;return e("section",{staticClass:"store-items"},[e("h2",{staticClass:"store-page-title"},[t._t("default")],2),e("div",{staticClass:"store-items__list"},t._l(t.storeItems,(function(t,s){return e("store-card",{key:`store-item_${s}`,attrs:{"store-item":t}})})),1)])},a=[],i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"store-card",class:[`store-card--${t.storeItem.type}`,{selected:t.storeItem.selected}]},[e("main",{staticClass:"store-card__main"},["selected"in t.storeItem?e("p",{staticClass:"store-card__current-membership"},[t._v(" "+t._s(t.storeItem.selected?"Current membership":"")+" ")]):t._e(),e("h3",{staticClass:"store-card__title"},[t._v(t._s(t.storeItem.title))]),e("p",{staticClass:"store-card__subtitle"},[t._v(t._s(t.storeItem.subtitle))]),e("p",{staticClass:"store-card__date"},[t._v(t._s(t.storeItem.date))]),e("p",{staticClass:"store-card__time"},[t._v(t._s(t.storeItem.time))]),e("div",{staticClass:"store-card__price-duration"},[e("p",{staticClass:"store-card__price"},[t._v(" "+t._s(t.storeItem.price)+" "),e("span",[t._v("RON")])]),t.storeItem.duration?e("div",{staticClass:"store-card__duration-block"},[e("p",{staticClass:"store-card__duration-title"},[t._v("Valabilitate")]),e("p",{staticClass:"store-card__duration"},[t._v(t._s(t.storeItem.duration)+" Luna")])]):t._e()])]),e("footer",{staticClass:"store-card__footer"},[t.storeItem.selected?[e("router-link",{attrs:{to:{name:"StorePayment"},custom:""},scopedSlots:t._u([{key:"default",fn:function({navigate:s}){return[e("base-button",{staticClass:"small-btn store-card__btn store-card__btn--renew",nativeOn:{click:function(t){return s.apply(null,arguments)}}},[t._v(" Renew ")])]}}],null,!1,1295182182)}),e("base-button",{staticClass:"small-btn store-card__btn store-card__btn--freeze"},[t._v("Freeze")])]:e("router-link",{attrs:{to:{name:"StorePayment"},custom:""},scopedSlots:t._u([{key:"default",fn:function({navigate:s}){return[e("base-button",{staticClass:"small-btn store-card__btn store-card__btn--buy",nativeOn:{click:function(t){return s.apply(null,arguments)}}},[t._v("Buy")])]}}])})],2)])},n=[],c=s(7744),l={name:"StoreCard",components:{BaseButton:c.Z},props:{storeItem:{type:Object,required:!0,default:()=>{}}}},o=l,u=s(1001),_=(0,u.Z)(o,i,n,!1,null,"645be8fa",null),d=_.exports,p={name:"StoreItemsList",components:{StoreCard:d},props:{storeItems:{type:Array,required:!0,default:()=>[]}}},m=p,f=(0,u.Z)(m,r,a,!1,null,"607b29c2",null),b=f.exports},8560:function(t,e,s){s.r(e),s.d(e,{default:function(){return u}});var r=function(){var t=this,e=t._self._c;return e("div",{staticClass:"store-page store-memberships"},[e("div",{staticClass:"container"},[e("div",{staticClass:"store-page-img-wrapper"},[e("img",{staticClass:"store-page-img",attrs:{src:s(3235),alt:""}})]),t._l(t.packages,(function(s,r){return e("div",{key:`packages-set_${r}`,staticClass:"store-memberships__wrapper"},[e("store-items-list",{attrs:{"store-items":s.items}},[t._v(t._s(s.title))]),r!==t.packages.length-1?e("hr"):t._e()],1)}))],2)])},a=[],i=s(6185),n={name:"StorePackages",components:{StoreItemsList:i.Z},metaInfo:{title:"Store — Memberships"},data(){return{packages:[{title:"Memberships",items:[{id:1,selected:!0,type:"membership",title:"Standard",subtitle:"Standard fara clase incluse",price:300,duration:1},{id:2,selected:!1,type:"membership",title:"All inclusive",subtitle:"Mealplan inclus",price:400,duration:1}]},{title:"Packages",items:[{id:1,selected:!1,type:"package",title:"Pachet 12 intrari",subtitle:"Clase de grup",price:180,duration:1},{id:2,selected:!1,type:"package",title:"Pachet 8 intrari",subtitle:"Clase de grup",price:120,duration:1}]}]}}},c=n,l=s(1001),o=(0,l.Z)(c,r,a,!1,null,"8f099ff8",null),u=o.exports},3235:function(t,e,s){t.exports=s.p+"img/pic-training.83f282ca.jpg"}}]);
//# sourceMappingURL=store-memberships.21985acc.js.map