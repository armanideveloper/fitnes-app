"use strict";(self["webpackChunkfitness_app"]=self["webpackChunkfitness_app"]||[]).push([[755],{8237:function(t,e,s){s.r(e),s.d(e,{default:function(){return g}});var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"activities"},[e("div",{staticClass:"container"},[e("base-tabs",{attrs:{tabs:t.tabs,"active-tab-initial":t.currentComponent},on:{"change-tab":t.changeTab}}),e(t.currentComponent,{tag:"component"},[e("h2",{staticClass:"schedule-title"},[t._v("Our schedule")])])],1)])},n=[],i=function(){var t=this,e=t._self._c;return e("nav",{staticClass:"base-tabs"},[e("ul",{staticClass:"base-tabs__list"},t._l(t.tabs,(function({title:s,component:a,type:n},i){return e("li",{key:`base-tab_${i}`,staticClass:"base-tabs__item"},["component"===n?e("button",{staticClass:"base-tabs__tab",class:{active:t.activeTab===a},on:{click:function(e){return t.setActive(a)}}},[t._v(" "+t._s(s)+" ")]):e("router-link",{staticClass:"base-tabs__tab",attrs:{to:{name:a}}},[t._v(t._s(s))])],1)})),0)])},c=[],l={name:"BaseTabs",props:{tabs:{type:Array,required:!0,default:()=>[]},activeTabInitial:{type:String}},data(){return{activeTab:this.activeTabInitial}},methods:{setActive(t){this.activeTab=t,this.$emit("change-tab",t)}}},o=l,r=s(1001),u=(0,r.Z)(o,i,c,!1,null,null,null),b=u.exports,p=function(){var t=this,e=t._self._c;return e("h1",[t._v("Here will be Classes component")])},h=[],_={name:"TheClasses"},m=_,v=(0,r.Z)(m,p,h,!1,null,"43b18478",null),C=v.exports,f={name:"ActivitiesView",components:{BaseTabs:b,TheClasses:C,TrainingSchedule:()=>s.e(954).then(s.bind(s,4954))},metaInfo:{title:"Activities"},data(){return{tabs:[{title:"Classes",component:"TheClasses",type:"component"},{title:"PT",component:"TrainingSchedule",type:"component"},{title:"Bookings",component:"Bookings",type:"link"}],currentComponent:"TheClasses"}},methods:{changeTab(t){this.currentComponent=t}}},d=f,T=(0,r.Z)(d,a,n,!1,null,"a8fbd73c",null),g=T.exports}}]);
//# sourceMappingURL=activities.682d826c.js.map