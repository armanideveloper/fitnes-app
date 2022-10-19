"use strict";(self["webpackChunkfitness_app"]=self["webpackChunkfitness_app"]||[]).push([[983],{5066:function(t,e,a){a.d(e,{Z:function(){return y}});var s=function(){var t=this,e=t._self._c;return e("header",{staticClass:"base-page-header",class:{"base-page-header--items-start":t.itemsStart}},[e("go-back-btn",{staticClass:"base-page-header__go-back",attrs:{"back-to":t.backTo}}),e("h1",{staticClass:"base-page-header__title"},[t._t("default")],2)],1)},n=[],i=function(){var t=this,e=t._self._c;return e("router-link",{staticClass:"go-back-btn",attrs:{to:{name:t.backTo}}},[e("svg",{attrs:{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M15.5 19C15.5 19 8.5 14.856 8.5 12C8.5 9.145 15.5 5 15.5 5",stroke:"#031418","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}})])])},r=[],m={name:"GoBackBtn",props:{backTo:{type:String,required:!0,default:"Home"}}},p=m,l=a(1001),u=(0,l.Z)(p,i,r,!1,null,"4bd005bf",null),o=u.exports,c={name:"BasePageHeader",components:{GoBackBtn:o},props:{backTo:{type:String,default:"Home"},itemsStart:{type:Boolean,default:!1}}},d=c,_=(0,l.Z)(d,s,n,!1,null,null,null),y=_.exports},533:function(t,e,a){a.r(e),a.d(e,{default:function(){return h}});var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"pt-42 payments"},[e("div",{staticClass:"container"},[e("base-page-header",[t._v("Payments")]),e("main",[e("ul",{staticClass:"payments__list"},t._l(t.payments,(function(t,a){return e("payments-item",{key:`payments-item_${a}`,attrs:{"payment-date":t.paymentDate,paid:t.paid,sum:t.sum,name:t.name}})})),1)])],1)])},n=[],i=a(5066),r=function(){var t=this,e=t._self._c;return e("li",{staticClass:"payments-item"},[e("h2",{staticClass:"payments-item__title"},[t._v(t._s(t.name))]),e("p",{staticClass:"payments-item__sum"},[t._v(t._s(t.sum))]),e("div",{staticClass:"payments-item__status",class:t.paid?"payments-item__status--paid":"payments-item__status--not-paid"},[e("svg",{attrs:{width:"7",height:"6",viewBox:"0 0 7 6",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("circle",{attrs:{cx:"3.5",cy:"3",r:"3"}})]),e("span",{staticClass:"payments-item__status-text"},[t._v(t._s(t.status)+" "+t._s(t.paymentDate))])]),t.paid?[e("base-button",{staticClass:"small-btn mt-16 payments-item__btn"},[t._v("View Receipt")]),e("base-button",{staticClass:"small-btn mt-16 payments-item__btn"},[t._v("View Contract")])]:t._e()],2)},m=[],p=a(7744),l={name:"PaymentsItem",components:{BaseButton:p.Z},props:{name:{type:String,required:!0,default:""},sum:{type:String,required:!0,default:""},paid:{type:Boolean,required:!0,default:!1},paymentDate:{type:String,required:!0,default:""}},computed:{status(){return this.paid?"Paid":"Not Paid"}}},u=l,o=a(1001),c=(0,o.Z)(u,r,m,!1,null,"20887e7a",null),d=c.exports,_={name:"PaymentsView",components:{BasePageHeader:i.Z,PaymentsItem:d},metaInfo:{title:"Payments"},data:()=>({payments:[{name:"Standard membership - 150 RON",sum:"150 RON",paid:!1},{name:"Standard membership - 150 RON",sum:"150 RON",paid:!0,paymentDate:"12.07.2022"},{name:"Pachet PT 12 intrari",sum:"150 RON",paid:!1},{name:"Pachet PT 12 intrari",sum:"150 RON",paid:!0,paymentDate:"12.07.2022"}]})},y=_,f=(0,o.Z)(y,s,n,!1,null,"6d2d53fc",null),h=f.exports}}]);
//# sourceMappingURL=payments.de503373.js.map