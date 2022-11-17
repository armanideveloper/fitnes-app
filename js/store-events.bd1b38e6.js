"use strict";(self["webpackChunkfitness_app"]=self["webpackChunkfitness_app"]||[]).push([[22],{6185:function(t,e,s){s.d(e,{Z:function(){return f}});var r=function(){var t=this,e=t._self._c;return e("section",{staticClass:"store-items"},[e("h2",{staticClass:"store-page-title"},[t._t("default")],2),e("div",{staticClass:"store-items__list"},t._l(t.storeItems,(function(t,s){return e("store-card",{key:`store-item_${s}`,attrs:{"store-item":t}})})),1)])},a=[],o=function(){var t=this,e=t._self._c;return e("div",{staticClass:"store-card",class:[`store-card--${t.storeItem.type}`,{selected:t.storeItem.selected}]},[e("main",{staticClass:"store-card__main"},["selected"in t.storeItem?e("p",{staticClass:"store-card__current-membership"},[t._v(" "+t._s(t.storeItem.selected?"Current membership":"")+" ")]):t._e(),e("h3",{staticClass:"store-card__title"},[t._v(t._s(t.storeItem.title))]),e("p",{staticClass:"store-card__subtitle"},[t._v(t._s(t.storeItem.subtitle))]),e("p",{staticClass:"store-card__date"},[t._v(t._s(t.storeItem.date))]),e("p",{staticClass:"store-card__time"},[t._v(t._s(t.storeItem.time))]),e("div",{staticClass:"store-card__price-duration"},[e("p",{staticClass:"store-card__price"},[t._v(" "+t._s(t.storeItem.price)+" "),e("span",[t._v("RON")])]),t.storeItem.duration?e("div",{staticClass:"store-card__duration-block"},[e("p",{staticClass:"store-card__duration-title"},[t._v("Valabilitate")]),e("p",{staticClass:"store-card__duration"},[t._v(t._s(t.storeItem.duration)+" Luna")])]):t._e()])]),e("footer",{staticClass:"store-card__footer"},[t.storeItem.selected?[e("router-link",{attrs:{to:{name:"StorePayment"},custom:""},scopedSlots:t._u([{key:"default",fn:function({navigate:s}){return[e("base-button",{staticClass:"small-btn store-card__btn store-card__btn--renew",nativeOn:{click:function(t){return s.apply(null,arguments)}}},[t._v(" Renew ")])]}}],null,!1,1295182182)}),e("base-button",{staticClass:"small-btn store-card__btn store-card__btn--freeze"},[t._v("Freeze")])]:e("router-link",{attrs:{to:{name:"StorePayment"},custom:""},scopedSlots:t._u([{key:"default",fn:function({navigate:s}){return[e("base-button",{staticClass:"small-btn store-card__btn store-card__btn--buy",nativeOn:{click:function(t){return s.apply(null,arguments)}}},[t._v("Buy")])]}}])})],2)])},i=[],n=s(4417),c={name:"StoreCard",components:{BaseButton:n.Z},props:{storeItem:{type:Object,required:!0,default:()=>{}}}},l=c,_=s(1001),u=(0,_.Z)(l,o,i,!1,null,"645be8fa",null),d=u.exports,m={name:"StoreItemsList",components:{StoreCard:d},props:{storeItems:{type:Array,required:!0,default:()=>[]}}},p=m,v=(0,_.Z)(p,r,a,!1,null,"607b29c2",null),f=v.exports},4422:function(t,e,s){s.r(e),s.d(e,{default:function(){return _}});var r=function(){var t=this,e=t._self._c;return e("article",{staticClass:"store-page store-workouts"},[e("div",{staticClass:"container"},[e("div",{staticClass:"store-page-img-wrapper"},[e("img",{staticClass:"store-page-img",attrs:{src:s(3235),alt:""}})]),e("h2",{staticClass:"store-page-title"},[t._v("Events")]),e("store-items-list",{attrs:{"store-items":t.events}})],1)])},a=[],o=s(6185),i={name:"StoreEventsView",components:{StoreItemsList:o.Z},metaInfo:{title:"Store — Events"},data:()=>({events:[{id:1,type:"event",title:"Bootcamp",subtitle:"Ars Nova Gym",date:"20.07.2022",time:"10:00",price:300},{id:2,type:"event",title:"Bootcamp",subtitle:"Ars Nova Gym",date:"20.07.2022",time:"10:00",price:400}]})},n=i,c=s(1001),l=(0,c.Z)(n,r,a,!1,null,"6bf89aa6",null),_=l.exports},3235:function(t,e,s){t.exports=s.p+"img/pic-training.83f282ca.jpg"}}]);
//# sourceMappingURL=store-events.bd1b38e6.js.map