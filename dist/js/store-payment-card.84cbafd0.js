"use strict";(self["webpackChunkfitness_app"]=self["webpackChunkfitness_app"]||[]).push([[782],{5066:function(e,t,a){a.d(t,{Z:function(){return f}});var r=function(){var e=this,t=e._self._c;return t("header",{staticClass:"base-page-header",class:{"base-page-header--items-start":e.itemsStart}},[t("go-back-btn",{staticClass:"base-page-header__go-back",attrs:{"back-to":e.backTo}}),t("h1",{staticClass:"base-page-header__title"},[e._t("default")],2)],1)},s=[],n=function(){var e=this,t=e._self._c;return t("router-link",{staticClass:"go-back-btn",attrs:{to:{name:e.backTo}}},[t("svg",{attrs:{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[t("path",{attrs:{d:"M15.5 19C15.5 19 8.5 14.856 8.5 12C8.5 9.145 15.5 5 15.5 5",stroke:"#031418","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}})])])},i=[],c={name:"GoBackBtn",props:{backTo:{type:String,required:!0,default:"Home"}}},o=c,l=a(1001),u=(0,l.Z)(o,n,i,!1,null,"4bd005bf",null),d=u.exports,p={name:"BasePageHeader",components:{GoBackBtn:d},props:{backTo:{type:String,default:"Home"},itemsStart:{type:Boolean,default:!1}}},m=p,v=(0,l.Z)(m,r,s,!1,null,null,null),f=v.exports},9952:function(e,t,a){a.d(t,{Z:function(){return l}});var r=function(){var e=this,t=e._self._c;return t("label",{staticClass:"base-text-label",attrs:{for:e.id}},[e._t("default"),t("input",e._b({staticClass:"base-text-input",style:{"text-align":e.inputTextAlign},attrs:{id:e.id,name:e.id,type:e.type},domProps:{value:e.value},on:{input:e.changeInputVal}},"input",e.$attrs,!1))],2)},s=[],n={name:"BaseInput",inheritAttrs:!1,props:{id:{type:String,required:!0,default:"base-text-input"},type:{type:String,default:"text",validator(e){return["text","password"].includes(e)}},value:{type:String,default:""},placeholder:{type:String,default:""},inputTextAlign:{type:String,default:"center",validator(e){return["left","right","center","justify","initial","inherit"].includes(e)}}},model:{prop:"value",event:"change-input-val"},methods:{changeInputVal(e){this.$emit("change-input-val",e.target.value)}}},i=n,c=a(1001),o=(0,c.Z)(i,r,s,!1,null,null,null),l=o.exports},1566:function(e,t,a){a.r(t),a.d(t,{default:function(){return p}});var r=function(){var e=this,t=e._self._c;return t("div",{staticClass:"pt-42 store-card"},[t("div",{staticClass:"container"},[t("base-page-header",{attrs:{"back-to":e.backTo}},[e._v("Card details")]),t("form",{staticClass:"store-card__form card-form",attrs:{id:"payment-form"},on:{submit:function(t){return t.preventDefault(),e.paymentHandler.apply(null,arguments)}}},[t("div",{staticClass:"card-form__type-wrapper"},[t("div",{staticClass:"card-form__type"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.cardType,expression:"cardType"}],staticClass:"card-form__type-input",attrs:{id:"debit",type:"radio",value:"debit"},domProps:{checked:e._q(e.cardType,"debit")},on:{change:function(t){e.cardType="debit"}}}),t("label",{staticClass:"card-form__type-label",attrs:{for:"debit"}},[e._v("Debit Card")])]),t("div",{staticClass:"card-form__type"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.cardType,expression:"cardType"}],staticClass:"card-form__type-input",attrs:{id:"credit",type:"radio",value:"credit"},domProps:{checked:e._q(e.cardType,"credit")},on:{change:function(t){e.cardType="credit"}}}),t("label",{staticClass:"card-form__type-label",attrs:{for:"credit"}},[e._v("Credit Card")])])]),t("base-text-input",{staticClass:"card-form__card-number",attrs:{id:"card-number",maxlength:"19",inputmode:"numeric","input-text-align":"left"},model:{value:e.cardNumber,callback:function(t){e.cardNumber=t},expression:"cardNumber"}},[e._v("Card number")]),t("div",{staticClass:"card-form__expiry-cvv"},[t("div",{staticClass:"card-form__expiry-date-wrapper"},[t("p",{staticClass:"card-form__expiry-date-label"},[e._v("Expiry date")]),t("div",{staticClass:"card-form__expiry-date-inputs"},[t("select",{directives:[{name:"model",rawName:"v-model",value:e.expiryMonth,expression:"expiryMonth"}],staticClass:"card-form__expiry-date-months",attrs:{name:"expiry-month",id:"expiry-month"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.expiryMonth=t.target.multiple?a:a[0]}}},e._l(e.monthsList,(function(a){return t("option",{key:a,domProps:{value:a}},[e._v(e._s(a))])})),0),t("base-text-input",{staticClass:"card-form__expiry-date-year",attrs:{id:"expiry-year",maxlength:"4"},model:{value:e.expiryYear,callback:function(t){e.expiryYear=t},expression:"expiryYear"}})],1)]),t("base-text-input",{staticClass:"card-form__input card-form__input--cvv",attrs:{id:"card-cvv","input-text-align":"left",type:"password",maxlength:"3"},model:{value:e.cvv,callback:function(t){e.cvv=t},expression:"cvv"}},[e._v("CVV")])],1),t("base-text-input",{staticClass:"card-form__input mb-16",attrs:{id:"card-name","input-text-align":"left"},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}},[e._v("Name")]),t("label",{staticClass:"card-form__checkbox"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.saveForFuture,expression:"saveForFuture"}],staticClass:"card-form__checkbox-input",attrs:{id:"saveForFuture",type:"checkbox"},domProps:{checked:Array.isArray(e.saveForFuture)?e._i(e.saveForFuture,null)>-1:e.saveForFuture},on:{change:function(t){var a=e.saveForFuture,r=t.target,s=!!r.checked;if(Array.isArray(a)){var n=null,i=e._i(a,n);r.checked?i<0&&(e.saveForFuture=a.concat([n])):i>-1&&(e.saveForFuture=a.slice(0,i).concat(a.slice(i+1)))}else e.saveForFuture=s}}}),e._v(" Save card for future checkouts ")])],1),t("div",{staticClass:"store-card__buttons"},[t("router-link",{attrs:{to:{name:"Store"},custom:""},scopedSlots:e._u([{key:"default",fn:function({navigate:a}){return[t("base-button",{staticClass:"base-btn base-btn--white store-card__btn",nativeOn:{click:function(e){return a.apply(null,arguments)}}},[e._v("Cancel payment")])]}}])}),t("base-button",{staticClass:"base-btn store-card__btn",attrs:{type:"submit",form:"payment-form"}},[e._v("Pay "+e._s(e.$route.params.price)+" RON")])],1)],1)])},s=[],n=(a(7658),a(7368)),i=a(9952),c=a(5066),o={name:"StorePaymentCardView",components:{BaseButton:n.Z,BaseTextInput:i.Z,BasePageHeader:c.Z},metaInfo:{title:"Card details"},data(){return{backTo:"StorePayment",cardType:"debit",cardNumber:"",expiryMonth:"Jan",expiryYear:"2022",cvv:"",name:"",saveForFuture:!1,monthsList:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},watch:{cardNumber(){let e=this.cardNumber.replace(/\s/gi,""),t=e.match(/.{1,4}/g);this.cardNumber=t.join(" ")}},methods:{paymentHandler(){const e={cardType:this.cardType,cardNumber:this.cardNumber,expiresAt:`${this.expiryMonth} ${this.expiryYear}`,cvv:this.cvv,name:this.name,saveForFuture:this.saveForFuture};console.log(e),setTimeout((()=>{this.$router.push({name:"Home"})}),500)}}},l=o,u=a(1001),d=(0,u.Z)(l,r,s,!1,null,"57a1b44f",null),p=d.exports}}]);
//# sourceMappingURL=store-payment-card.84cbafd0.js.map