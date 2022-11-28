"use strict";(self["webpackChunkfitness_app"]=self["webpackChunkfitness_app"]||[]).push([[845],{6060:function(e,t,a){a.d(t,{Z:function(){return h}});var r=function(){var e=this,t=e._self._c;return t("header",{staticClass:"base-page-header",class:{"base-page-header--items-start":e.itemsStart}},[t("go-back-btn",{staticClass:"base-page-header__go-back",attrs:{"back-to":e.backTo}}),t("h1",{staticClass:"base-page-header__title"},[e._t("default")],2)],1)},s=[],i=function(){var e=this,t=e._self._c;return t("router-link",{staticClass:"go-back-btn",attrs:{to:{name:e.backTo}}},[t("svg",{attrs:{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[t("path",{attrs:{d:"M15.5 19C15.5 19 8.5 14.856 8.5 12C8.5 9.145 15.5 5 15.5 5",stroke:"#031418","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}})])])},l=[],n={name:"GoBackBtn",props:{backTo:{type:String,required:!0,default:"Home"}}},o=n,p=a(1001),u=(0,p.Z)(o,i,l,!1,null,"4f2d44d7",null),d=u.exports,f={name:"BasePageHeader",components:{GoBackBtn:d},props:{backTo:{type:String,default:"Home"},itemsStart:{type:Boolean,default:!1}}},c=f,m=(0,p.Z)(c,r,s,!1,null,null,null),h=m.exports},2679:function(e,t,a){a.d(t,{Z:function(){return p}});var r=function(){var e=this,t=e._self._c;return t("label",{staticClass:"base-text-label",attrs:{for:e.id}},[e._t("default"),t("input",e._b({staticClass:"base-text-input",style:{"text-align":e.inputTextAlign},attrs:{id:e.id,name:e.id,type:e.type},domProps:{value:e.value},on:{input:e.changeInputVal}},"input",e.$attrs,!1))],2)},s=[],i={name:"BaseInput",inheritAttrs:!1,props:{id:{type:String,required:!0,default:"base-text-input"},type:{type:String,default:"text",validator(e){return["text","password"].includes(e)}},value:{type:String,default:""},placeholder:{type:String,default:""},inputTextAlign:{type:String,default:"center",validator(e){return["left","right","center","justify","initial","inherit"].includes(e)}}},methods:{changeInputVal(e){this.$emit("input",e.target.value)}}},l=i,n=a(1001),o=(0,n.Z)(l,r,s,!1,null,null,null),p=o.exports},9226:function(e,t,a){a.r(t),a.d(t,{default:function(){return m}});var r=function(){var e=this,t=e._self._c;return t("div",{staticClass:"pt-42 profile"},[t("div",{staticClass:"container"},[t("base-page-header",{attrs:{"items-start":""}},[t("div",{staticClass:"profile-avatar"},[t("img",{ref:"avatar",staticClass:"profile-avatar__img",attrs:{src:e.profileAvatarPreview,alt:""}}),t("div",{staticClass:"profile-avatar__input-wrapper"},[t("input",{ref:"avatarInput",attrs:{id:"avatarInput",type:"file",hidden:""},on:{change:e.uploadNewAvatar}}),t("label",{attrs:{for:"avatarInput"}},[t("img",{attrs:{src:a(2360),alt:""}})])])])]),t("main",[t("form",{staticClass:"profile__form profile-form",attrs:{id:"profile-form",action:""},on:{submit:function(t){return t.preventDefault(),e.profileDataHandler.apply(null,arguments)}}},[t("fieldset",{staticClass:"profile-form__fields"},[t("base-text-input",{attrs:{id:"firstname"},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}},[e._v("First name *")]),t("base-text-input",{attrs:{id:"surname"},model:{value:e.profileData.surname,callback:function(t){e.$set(e.profileData,"surname",t)},expression:"profileData.surname"}},[e._v("Surname *")]),t("base-text-input",{staticClass:"col-full",attrs:{id:"address","input-text-align":"left"},model:{value:e.address,callback:function(t){e.address=t},expression:"address"}},[e._v(" Address * ")]),t("base-text-input",{staticClass:"col-full",attrs:{id:"email"},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}},[e._v("Email *")]),t("base-text-input",{attrs:{id:"birthday"},model:{value:e.profileData.birthday,callback:function(t){e.$set(e.profileData,"birthday",t)},expression:"profileData.birthday"}},[e._v("Date of birth")]),t("base-text-input",{attrs:{id:"phone"},model:{value:e.phone,callback:function(t){e.phone=t},expression:"phone"}},[e._v("Phone")]),t("div",{staticClass:"profile-form__fields-wrapper col-full"},[t("p",{staticClass:"profile-form__fields-label"},[e._v("Gender *")]),t("div",{staticClass:"profile-form__radio-wrapper w-100"},e._l(e.genderOptions,(function(a){return t("div",{key:a,staticClass:"profile-form-radio"},[t("label",{staticClass:"profile-form-radio__label"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.profileData.gender,expression:"profileData.gender"}],staticClass:"profile-form-radio__input",attrs:{type:"radio"},domProps:{value:a,checked:e._q(e.profileData.gender,a)},on:{change:function(t){return e.$set(e.profileData,"gender",a)}}}),e._v(" "+e._s(a)+" ")])])})),0)])],1),t("base-button",{staticClass:"base-btn"},[e._v("Apply changes")])],1)])],1)])},s=[],i=a(3822),l=a(5729),n=a(5879),o=a(2679),p=a(6060),u={name:"ProfileView",components:{BaseButton:n.Z,BaseTextInput:o.Z,BasePageHeader:p.Z},metaInfo:{title:"Profile"},data(){return{profileData:{avatar:a(8987),name:"",surname:"",address:"",email:"",birthday:"",phone:"",gender:""},avatarPreviewImg:"",genderOptions:["Male","Female"]}},computed:{...(0,i.Se)({user:l.Z.USER_DATA}),username:{get(){return this.user.name},set(e){this.profileData.name=e}},address:{get(){return this.user.member.address},set(e){this.profileData.address=e}},email:{get(){return this.user.username},set(e){this.profileData.email=e}},phone:{get(){return this.user.member.contact},set(e){this.profileData.phone=e}},gender:{get(){return this.user.member.gender},set(e){this.profileData.gender=e}},profileAvatarPreview:{get(){return this.avatarPreviewImg?this.avatarPreviewImg:this.profileData.avatar},set(e){this.avatarPreviewImg=e}}},mounted(){this.fillProfileData()},methods:{fillProfileData(){this.profileData.name=this.username,this.profileData.address=this.address,this.profileData.email=this.email,this.profileData.phone=this.phone,this.profileData.gender=this.gender},uploadNewAvatar(e){const t=e.target;if(t.files&&t.files[0]){const e=new FileReader;e.onload=e=>{this.profileData.avatar=t.files[0],this.profileAvatarPreview=e.target.result},e.readAsDataURL(t.files[0])}},profileDataHandler(){console.table(this.profileData)}}},d=u,f=a(1001),c=(0,f.Z)(d,r,s,!1,null,"832cf2f8",null),m=c.exports}}]);
//# sourceMappingURL=profile.64fbdd37.js.map