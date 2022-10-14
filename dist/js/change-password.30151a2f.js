"use strict";(self["webpackChunkfitness_app"]=self["webpackChunkfitness_app"]||[]).push([[21],{3791:function(t,e,a){a.d(e,{Z:function(){return w}});var s=function(){var t=this,e=t._self._c;return e("header",{staticClass:"base-page-header",class:{"base-page-header--items-start":t.itemsStart}},[e("go-back-btn",{staticClass:"base-page-header__go-back",attrs:{"back-to":"Home"}}),e("h1",{staticClass:"base-page-header__title"},[t._t("default")],2)],1)},n=[],r=function(){var t=this,e=t._self._c;return e("router-link",{staticClass:"go-back-btn",attrs:{to:{name:t.backTo}}},[e("svg",{attrs:{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M15.5 19C15.5 19 8.5 14.856 8.5 12C8.5 9.145 15.5 5 15.5 5",stroke:"#031418","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}})])])},o=[],i={name:"GoBackBtn",props:{backTo:{type:String,required:!0,default:"Home"}}},l=i,d=a(1001),u=(0,d.Z)(l,r,o,!1,null,"4bd005bf",null),p=u.exports,c={name:"BasePageHeader",components:{GoBackBtn:p},props:{itemsStart:{type:Boolean,default:!1}}},f=c,h=(0,d.Z)(f,s,n,!1,null,"130f0f22",null),w=h.exports},7427:function(t,e,a){a.d(e,{Z:function(){return d}});var s=function(){var t=this,e=t._self._c;return e("label",{staticClass:"base-text-label",attrs:{for:t.id}},[t._t("default"),e("input",{staticClass:"base-text-input",style:{"text-align":t.inputTextAlign},attrs:{id:t.id,name:t.id,type:t.type},domProps:{value:t.value},on:{input:t.changeInputVal}})],2)},n=[],r={name:"BaseInput",props:{id:{type:String,required:!0,default:"base-text-input"},type:{type:String,default:"text",validator(t){return["text","password"].includes(t)}},value:{type:String,default:""},placeholder:{type:String,default:""},inputTextAlign:{type:String,default:"center",validator(t){return["left","right","center","justify","initial","inherit"].includes(t)}}},model:{prop:"value",event:"change-input-val"},methods:{changeInputVal(t){this.$emit("change-input-val",t.target.value)}}},o=r,i=a(1001),l=(0,i.Z)(o,s,n,!1,null,null,null),d=l.exports},7526:function(t,e,a){a.r(e),a.d(e,{default:function(){return c}});var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"settings-page change-password"},[e("div",{staticClass:"container"},[e("base-page-header",[t._v("Change Password")])],1),e("div",{staticClass:"container container--small"},[e("main",[e("form",{staticClass:"change-password__form",attrs:{action:""},on:{submit:function(e){return e.preventDefault(),t.changePasswordHandler.apply(null,arguments)}}},[e("fieldset",{staticClass:"change-password__fields"},[e("base-text-input",{attrs:{id:"password",type:"password"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}},[t._v("New password")]),e("base-text-input",{attrs:{id:"confirm-password",type:"password"},model:{value:t.confirmPassword,callback:function(e){t.confirmPassword=e},expression:"confirmPassword"}},[t._v("Confirm new password")])],1),e("base-button",{staticClass:"change-password__submit-btn small-btn mt-22"},[t._v("Apply")])],1)])])])},n=[],r=(a(7658),a(8549)),o=a(7427),i=a(3791),l={name:"ChangePasswordView",components:{BaseButton:r.Z,BaseTextInput:o.Z,BasePageHeader:i.Z},metaInfo:{title:"Change Password"},data(){return{password:"",confirmPassword:""}},methods:{changePasswordHandler(){this.password&&this.confirmPassword?this.password===this.confirmPassword?(console.log("Success"),this.$router.push({name:"ChangePasswordSuccess"})):console.error("Password and password confirmation don't match"):console.error("Fill all the fields")}}},d=l,u=a(1001),p=(0,u.Z)(d,s,n,!1,null,"19900ea4",null),c=p.exports}}]);
//# sourceMappingURL=change-password.30151a2f.js.map