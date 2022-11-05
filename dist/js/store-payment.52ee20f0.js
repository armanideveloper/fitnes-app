"use strict";(self["webpackChunkfitness_app"]=self["webpackChunkfitness_app"]||[]).push([[464],{6060:function(t,a,e){e.d(a,{Z:function(){return b}});var s=function(){var t=this,a=t._self._c;return a("header",{staticClass:"base-page-header",class:{"base-page-header--items-start":t.itemsStart}},[a("go-back-btn",{staticClass:"base-page-header__go-back",attrs:{"back-to":t.backTo}}),a("h1",{staticClass:"base-page-header__title"},[t._t("default")],2)],1)},n=[],o=function(){var t=this,a=t._self._c;return a("router-link",{staticClass:"go-back-btn",attrs:{to:{name:t.backTo}}},[a("svg",{attrs:{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[a("path",{attrs:{d:"M15.5 19C15.5 19 8.5 14.856 8.5 12C8.5 9.145 15.5 5 15.5 5",stroke:"#031418","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}})])])},i=[],r={name:"GoBackBtn",props:{backTo:{type:String,required:!0,default:"Home"}}},c=r,u=e(1001),l=(0,u.Z)(c,o,i,!1,null,"4f2d44d7",null),p=l.exports,d={name:"BasePageHeader",components:{GoBackBtn:p},props:{backTo:{type:String,default:"Home"},itemsStart:{type:Boolean,default:!1}}},m=d,A=(0,u.Z)(m,s,n,!1,null,null,null),b=A.exports},2741:function(t,a,e){e.r(a),e.d(a,{default:function(){return p}});var s=function(){var t=this,a=t._self._c;return a("div",{staticClass:"pt-42 store-payment"},[a("div",{staticClass:"container"},[a("base-page-header",{attrs:{"back-to":t.backTo}},[t._v("Payment")]),a("div",{staticClass:"store-payment__about payment-about"},[a("p",{staticClass:"payment-about__text"},[t._v(" You are about to pay "),a("br"),a("strong",[t._v(t._s(t.totalPrice)+" RON")]),t._v(" (discount applied) "),a("br"),t._v(" to "),a("strong",[t._v(t._s(t.paymentAddress))]),a("br"),t._v(" for "),a("strong",[t._v(t._s(t.paymentPurpose))])]),a("p",{staticClass:"payment-about__availability"},[t._v(" Your purchase will be available at Moovgym location or Partner locations ")]),a("hr"),a("p",{staticClass:"payment-about__security"},[t._v(" Secure payment with "),a("img",{attrs:{src:e(9484),alt:""}})])]),a("div",{staticClass:"payment-about__discount discount"},[a("div",{staticClass:"discount__wrapper"},[a("label",{staticClass:"discount__label",attrs:{for:"discount"}},[t._v("Apply discount")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.discount,expression:"discount"}],staticClass:"discount__select",attrs:{name:"discount",id:"discount"},on:{change:function(a){var e=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){var a="_value"in t?t._value:t.value;return a}));t.discount=a.target.multiple?e:e[0]}}},[a("option",{attrs:{disabled:"",value:""}},[t._v("Please select discount")]),t._l(t.discounts,(function(e,s){return a("option",{key:`discount-option_${s}`,domProps:{value:e}},[t._v(" "+t._s(e)+" ")])}))],2)]),a("button",{staticClass:"discount__btn",on:{click:t.applyDiscount}},[t._v("Apply")])]),a("div",{staticClass:"store-payment__buttons"},[a("router-link",{attrs:{to:{name:"Store"},custom:""},scopedSlots:t._u([{key:"default",fn:function({navigate:e}){return[a("base-button",{staticClass:"base-btn base-btn--white store-payment__btn",nativeOn:{click:function(t){return e.apply(null,arguments)}}},[t._v(" Cancel payment ")])]}}])}),a("router-link",{attrs:{to:{name:"StorePaymentCard",params:{price:t.totalPrice}},custom:""},scopedSlots:t._u([{key:"default",fn:function({navigate:e}){return[a("base-button",{staticClass:"base-btn store-payment__btn",nativeOn:{click:function(t){return e.apply(null,arguments)}}},[t._v("Go to payment")])]}}])})],1)],1)])},n=[],o=e(7744),i=e(6060),r={name:"StorePaymentView",components:{BaseButton:o.Z,BasePageHeader:i.Z},metaInfo:{title:"Payment"},data(){return{backTo:"Store",paymentSum:150,discount:null,isDiscountApplied:!1,paymentAddress:"Company Ltd",paymentPurpose:"Standard membership",location:"Moovgym",partners:"Partner locations",discounts:[30,50,70]}},computed:{totalPrice(){return this.isDiscountApplied?this.paymentSum-this.discount:this.paymentSum}},watch:{discount(){this.isDiscountApplied=!1}},methods:{applyDiscount(){this.isDiscountApplied=!0}}},c=r,u=e(1001),l=(0,u.Z)(c,s,n,!1,null,"23264cc2",null),p=l.exports},9484:function(t){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAVCAYAAAAElr0/AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAATWSURBVHgBvVddTFxFFP7m7l0KWFqQ0qS0QSiW9EdNikZsghFNfdAYbWywLAt2gY3GF2NfjOmDLb600cYaXzRYKIXFNhIeTNWmmvTBv5pqY9SkwYoraSONUmhLaCq77B6/2d17ubuherdl+cIwZ849M3O+MzNnZhVyiMA2Kfbk41kY2ASFuqkIHhscVBHkAGY2xoEGyZcybDoyqM66sTfuQIDVQSwCXBFp98sTSvAGxfWM7BXWFcgSIhDkEIZLu40k8ADLUspxl32g4hhWCp0eAw/PmijL1bbSsFekdYds8BrYSmdLEwrBOZave46pMSPRnPOvrVm2puSwEcXVuBe1iVYMkzKDsFkIX1zh92gEvxhaCxSwrm1slFOFJtaT3F3anATPYwaTMS9a+b1EAcOeXzHUdVZFMx1tf1qKVBEe5MrWax9E4YfDA+oT26mGBjGr1+A9ehrEfEwFNbPAMyT4VuY3DtqpPBjmGh1NqcZYdNQrOd4XnOwz5TgjPOxLlproMgzsTAXrR45bTWmZY9hRrxePvt+rRi1FR6vcw609xPlqMlwYicXweO8xNWpUr8aem5HQ+EeQB/coT5BwC4XNSCehURmN4vNAQIp1I9AklQzUyXlIaNxteDCkF4MBR6NKaSmPsjrOdh7lataJLcRBlFK2zRQdOK5lQ/Az23nzOHie//+EO3zJEuY4DWouCOs8kURwD5gmOjl/eWrui7TZzzrK+k2qilnXrl2DZpN7s1rs+fFV94B62ZpBRyOiMF2Q5iMmukOqxWpz2ZucXsUF27h3P9Yys90r+G/8wfke0cILLbIqngzMipTTT2kiJOG3jOnr7kMDKqTloE9KxcA+JI0bTRp+R+/qU7atHS1ST10XO4XYaTThkM995mTCOAP3sDYDukLqEucJKQMJ8twBW9jeQtFj2dCv2jafrE3ICvc5xtlscKjXKEzaKkEVR99Hw5Fgs+zFIoIkfnM080ihLN0Au5goOnWhvH1OjZUGl/Ybnvz72T7Ccs3uJFhCMns6fPKiGHORyyUknn7wjSzmTdwjOn2xCugF6/CjDcmUmRiU6fU5kjppT+b+Es0ahsIGaxMziH/HZ3kPOajILJ68NIVT8/Ztb5Gj3Hc7X2qWEn3PeIbRz5xtLzH3pZc3tH1IyGJ1sFWqtOz3yzLcHooDzbJOux30Swudf976wDlPH/5Qhcnjsq0z8fqq5Sg9cULN6KJ1K4tQV16GjSZTaA23TpO+xTjYhZjwGaJwp2OyMNvjNjG9inGEO/xyhSTfpWoYt45iD1M1dwGvK+Q7P/DW/yAl7mc5kJIf4g65yOB/T0cKGfAq/WxSs9ietk1EPwYdJPS9wvOzN+rBIJsXMpwowcIhjQRX4R1msU+1fGgAb3OlPnJ8Nkigjjb3pt5+SSWd1VH9yTkQI32DLPrVDTTo89Pfr67z2aDz/RmHDf8wZsQxzfovq6S5F8N1JHVWycRVJJOMhWtMu68WRbDbQUt6QmoH9e10fiSj/wTJHGRSOJ2WFXw+WUGHpa9PTeAm2NUoBZfzUdTXh3Fe91k/zXkee+23FlecWbNKhGckiJLubjX5f/31c6SiAsvHxzFtnRONRUmrTsxHBAuAnKVSN5AF/KmV1U/dBYHiuYijh7f4ORL5FguEfwH+Da1/mQm8aQAAAABJRU5ErkJggg=="}}]);
//# sourceMappingURL=store-payment.52ee20f0.js.map