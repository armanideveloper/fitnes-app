"use strict";(self["webpackChunkfitness_app"]=self["webpackChunkfitness_app"]||[]).push([[571],{6060:function(t,e,a){a.d(e,{Z:function(){return p}});var s=function(){var t=this,e=t._self._c;return e("header",{staticClass:"base-page-header",class:{"base-page-header--items-start":t.itemsStart}},[e("go-back-btn",{staticClass:"base-page-header__go-back",attrs:{"back-to":t.backTo}}),e("h1",{staticClass:"base-page-header__title"},[t._t("default")],2)],1)},i=[],n=function(){var t=this,e=t._self._c;return e("router-link",{staticClass:"go-back-btn",attrs:{to:{name:t.backTo}}},[e("svg",{attrs:{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M15.5 19C15.5 19 8.5 14.856 8.5 12C8.5 9.145 15.5 5 15.5 5",stroke:"#031418","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}})])])},l=[],o={name:"GoBackBtn",props:{backTo:{type:String,required:!0,default:"Home"}}},r=o,c=a(1001),g=(0,c.Z)(r,n,l,!1,null,"4f2d44d7",null),u=g.exports,d={name:"BasePageHeader",components:{GoBackBtn:u},props:{backTo:{type:String,default:"Home"},itemsStart:{type:Boolean,default:!1}}},h=d,m=(0,c.Z)(h,s,i,!1,null,null,null),p=m.exports},5624:function(t,e,a){a.d(e,{Z:function(){return c}});var s=function(){var t=this,e=t._self._c;return e("label",{staticClass:"toggle",class:{active:t.currentState}},[e("span",{staticClass:"toggle__label"},[t._t("default")],2),e("input",{directives:[{name:"model",rawName:"v-model",value:t.checkedValue,expression:"checkedValue"}],staticClass:"toggle__checkbox",attrs:{id:`${t.id}-toggle`,type:"checkbox"},domProps:{checked:Array.isArray(t.checkedValue)?t._i(t.checkedValue,null)>-1:t.checkedValue},on:{change:[function(e){var a=t.checkedValue,s=e.target,i=!!s.checked;if(Array.isArray(a)){var n=null,l=t._i(a,n);s.checked?l<0&&(t.checkedValue=a.concat([n])):l>-1&&(t.checkedValue=a.slice(0,l).concat(a.slice(l+1)))}else t.checkedValue=i},t.changeToggleVal]}}),e("span",{staticClass:"toggle__switch"})])},i=[],n={name:"BaseToggle",props:{defaultState:{type:Boolean,default:!1},id:{type:String,default:"base-toggle"}},data(){return{currentState:this.defaultState}},watch:{defaultState:{handler(t){this.currentState=t},immediate:!0}},computed:{checkedValue:{get(){return this.currentState},set(t){this.currentState=t}}},methods:{changeToggleVal(){this.$emit("change-toggle-val",this.currentState)}}},l=n,o=a(1001),r=(0,o.Z)(l,s,i,!1,null,null,null),c=r.exports},9666:function(t,e,a){a.r(e),a.d(e,{default:function(){return u}});var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"pt-42 settings"},[e("div",{staticClass:"container"},[e("base-page-header",[t._v("Settings")]),e("article",[e("ul",{staticClass:"settings__list"},[e("li",{staticClass:"settings__item settings-item"},[t._v(" Notifications "),e("base-toggle",{attrs:{id:"notifications-toggle","default-state":t.areNotifications},on:{"change-toggle-val":t.toggleNotifications}})],1),e("li",{staticClass:"settings__item settings-item"},[t._v(" Switch to Romanian "),e("base-toggle",{attrs:{id:"romanian-toggle","default-state":t.isRomanianLang},on:{"change-toggle-val":t.toggleRomanianLang}})],1),e("li",{staticClass:"settings__item settings-item settings-item--column"},[t._v(" Set weekly target "),e("div",{staticClass:"settings-item__radio-buttons"},t._l(t.weeklyTargetOptions,(function(a,s){return e("div",{key:`weekly-target_${s}`,staticClass:"settings-item__radio-wrapper"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.weeklyTarget,expression:"weeklyTarget"}],staticClass:"settings-item__radio-input",attrs:{id:`target-item-${a}`,type:"radio"},domProps:{value:a,checked:t._q(t.weeklyTarget,a)},on:{change:function(e){t.weeklyTarget=a}}}),e("label",{staticClass:"settings-item__radio-label",attrs:{for:`target-item-${a}`}},[t._v(t._s(a))])])})),0)])])])],1)])},i=[],n=a(5624),l=a(6060),o={name:"SettingsView",components:{BaseToggle:n.Z,BasePageHeader:l.Z},metaInfo:{title:"Settings"},data(){return{areNotifications:!1,isRomanianLang:!1,weeklyTarget:1,weeklyTargetOptions:[1,2,3,4,5,6,7]}},methods:{toggleNotifications(){this.areNotifications=!this.areNotifications},toggleRomanianLang(){this.isRomanianLang=!this.isRomanianLang}}},r=o,c=a(1001),g=(0,c.Z)(r,s,i,!1,null,"1faa85ab",null),u=g.exports}}]);
//# sourceMappingURL=settings.af3d92ad.js.map