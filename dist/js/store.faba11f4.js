"use strict";(self["webpackChunkfitness_app"]=self["webpackChunkfitness_app"]||[]).push([[119],{4288:function(t,e,s){s.d(e,{Z:function(){return l}});var a=function(){var t=this,e=t._self._c;return e("nav",{staticClass:"base-tabs"},[e("ul",{staticClass:"base-tabs__list"},t._l(t.tabs,(function({title:s,component:a,type:r},n){return e("li",{key:`base-tab_${n}`,staticClass:"base-tabs__item"},["component"===r?e("button",{staticClass:"base-tabs__tab",class:{active:t.activeTab===a},on:{click:function(e){return t.setActive(a)}}},[t._v(" "+t._s(s)+" ")]):e("router-link",{staticClass:"base-tabs__tab",attrs:{to:{name:a}}},[t._v(t._s(s))])],1)})),0)])},r=[],n={name:"BaseTabs",props:{tabs:{type:Array,required:!0,default:()=>[]},activeTabInitial:{type:String}},data(){return{activeTab:this.activeTabInitial}},methods:{setActive(t){t!==this.activeTab&&(this.activeTab=t,this.$emit("change-tab",t))}}},i=n,o=s(1001),c=(0,o.Z)(i,a,r,!1,null,null,null),l=c.exports},3428:function(t,e,s){s.d(e,{Z:function(){return v}});var a=function(){var t=this,e=t._self._c;return e("section",{staticClass:"store-items"},[e("h2",{staticClass:"store-items__title"},[t._t("default")],2),e("div",{staticClass:"store-items__list"},t._l(t.storeItems,(function(t,s){return e("store-card",{key:`store-item_${s}`,attrs:{"store-item":t}})})),1)])},r=[],n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"store-card",class:[`store-card--${t.storeItem.type}`,{selected:t.storeItem.selected}]},[e("main",{staticClass:"store-card__main"},[e("p",{staticClass:"store-card__current-membership"},[t._v(" "+t._s(t.storeItem.selected?"Current membership":"")+" ")]),e("h3",{staticClass:"store-card__title"},[t._v(t._s(t.storeItem.title))]),e("p",{staticClass:"store-card__subtitle"},[t._v(t._s(t.storeItem.subtitle))]),e("div",{staticClass:"store-card__price-duration"},[e("p",{staticClass:"store-card__price"},[t._v(t._s(t.storeItem.price)+" "),e("span",[t._v("RON")])]),e("div",{staticClass:"store-card__duration-block"},[e("p",{staticClass:"store-card__duration-title"},[t._v("Valabilitate")]),e("p",{staticClass:"store-card__duration"},[t._v(t._s(t.storeItem.duration)+" Luna")])])])]),e("footer",{staticClass:"store-card__footer"},[t.storeItem.selected?[e("base-button",{staticClass:"small-btn store-card__btn store-card__btn--renew"},[t._v("Renew")]),e("base-button",{staticClass:"small-btn store-card__btn store-card__btn--freeze"},[t._v("Freeze")])]:e("router-link",{attrs:{to:{name:"StorePayment"},custom:""},scopedSlots:t._u([{key:"default",fn:function({navigate:s}){return[e("base-button",{staticClass:"small-btn store-card__btn store-card__btn--buy",nativeOn:{click:function(t){return s.apply(null,arguments)}}},[t._v("Buy")])]}}])})],2)])},i=[],o=s(7368),c={name:"StoreCard",components:{BaseButton:o.Z},props:{storeItem:{type:Object,required:!0,default:()=>{}}}},l=c,u=s(1001),_=(0,u.Z)(l,n,i,!1,null,"0edd9117",null),p=_.exports,d={name:"StoreItemsList",components:{StoreCard:p},props:{storeItems:{type:Array,required:!0,default:()=>[]}}},b=d,m=(0,u.Z)(b,a,r,!1,null,"7e57c7ae",null),v=m.exports},4127:function(t,e,s){s.r(e),s.d(e,{default:function(){return f}});var a=function(){var t=this,e=t._self._c;return e("article",{staticClass:"store"},[e("div",{staticClass:"container"},[e("base-tabs",{attrs:{tabs:t.storeTabs,"active-tab-initial":t.currentComponent},on:{"change-tab":t.changeTab}}),e(t.currentComponent,{tag:"component"})],1)])},r=[],n=s(4288),i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"store-packages"},t._l(t.packages,(function(s,a){return e("div",{key:`packages-set_${a}`,staticClass:"store-packages__wrapper"},[e("store-items-list",{attrs:{"store-items":s.items}},[t._v(t._s(s.title)+" ")]),a!==t.packages.length-1?e("hr"):t._e()],1)})),0)},o=[],c=s(3428),l={name:"StorePackages",components:{StoreItemsList:c.Z},data(){return{packages:[{title:"Pachete Marcus M.",items:[{id:1,selected:!0,type:"package",title:"PT - 12 entries",subtitle:"1-la-1 workout",price:300,duration:1},{id:2,selected:!1,type:"package",title:"PT - 8 entries",subtitle:"1-la-1 workout",price:400,duration:1}]},{title:"Pachete Laura M.",items:[{id:1,selected:!1,type:"package",title:"PT - 12 entries",subtitle:"1-la-1 workout",price:300,duration:1},{id:2,selected:!1,type:"package",title:"PT - 8 entries",subtitle:"1-la-1 workout",price:400,duration:1}]}]}}},u=l,_=s(1001),p=(0,_.Z)(u,i,o,!1,null,"f2ff595c",null),d=p.exports,b={name:"StoreView",components:{BaseTabs:n.Z,StorePackages:d,StoreMemberships:()=>s.e(550).then(s.bind(s,9550))},metaInfo:{title:" Store"},data(){return{currentComponent:"StorePackages",storeTabs:[{title:"Memberships",component:"StoreMemberships",type:"component"},{title:"PT packages",component:"StorePackages",type:"component"}]}},methods:{changeTab(t){this.currentComponent=t}}},m=b,v=(0,_.Z)(m,a,r,!1,null,"8569cb60",null),f=v.exports}}]);
//# sourceMappingURL=store.faba11f4.js.map