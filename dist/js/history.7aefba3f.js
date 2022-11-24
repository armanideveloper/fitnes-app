"use strict";(self["webpackChunkfitness_app"]=self["webpackChunkfitness_app"]||[]).push([[908],{7551:function(t,e,s){s.r(e),s.d(e,{default:function(){return y}});var i=function(){var t=this,e=t._self._c;return e("article",{staticClass:"history"},[e("div",{staticClass:"container"},[e("h2",{staticClass:"history__title"},[t._v("History")]),t.pointsItems?e("v-calendar",{ref:"calendar",staticClass:"history__calendar",attrs:{masks:t.calendarMasks,attributes:t.attributes,locale:"en-US","is-expanded":""},on:{"update:from-page":function(e){t.currentDate=e.date},"update:to-page":function(e){t.currentDate=new Date(e.year,e.month,0)}}},[e("button",{staticClass:"vc-btn vc-btn--prev",attrs:{slot:"header-left-button"},on:{click:function(e){return t.moveToMonth(-1)}},slot:"header-left-button"},[e("svg",{attrs:{width:"10",height:"16",viewBox:"0 0 10 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M8.5 15C8.5 15 1.5 10.856 1.5 8C1.5 5.145 8.5 1 8.5 1",stroke:"#0080FF","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}})])]),e("button",{staticClass:"vc-btn vc-btn--next",attrs:{slot:"header-right-button"},on:{click:function(e){return t.moveToMonth(1)}},slot:"header-right-button"},[e("svg",{attrs:{width:"10",height:"16",viewBox:"0 0 10 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M1.5 0.999998C1.5 0.999998 8.5 5.144 8.5 8C8.5 10.855 1.5 15 1.5 15",stroke:"#0080FF","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}})])])]):t._e(),t.historyItems?e("ul",{staticClass:"history__list"},t._l(t.historyItems,(function(t,s){return e("history-item",{key:`history-items_${s}`,attrs:{item:t}})})),1):t._e()],1)])},r=[],a=s(3822),n=s(174),o=s(5729),l=s(3506),m=function(){var t=this,e=t._self._c;return e("li",{staticClass:"history-item",class:`history-item--${t.itemColor}`},[e("p",{staticClass:"history-item__date"},[t._v(t._s(t.formattedDate))]),e("div",{staticClass:"history-item__title-time"},[e("h2",{staticClass:"history-item__title"},[t._v(t._s(t.item.reason||t.item.gs_tags))]),t.formattedTime?e("p",{staticClass:"history-item__time"},[t._v(t._s(t.formattedTime))]):t._e()]),t.item.value?e("p",{staticClass:"history-item__points"},[t._v(t._s(t.item.value)+" pts")]):e("base-button",{staticClass:"small-btn",nativeOn:{click:function(e){return t.cancelReservation.apply(null,arguments)}}},[t._v("Cancel")])],1)},c=[],u=s(5879),d={name:"HistoryItem",components:{BaseButton:u.Z},props:{item:{type:Object,required:!0,default:()=>{}}},computed:{...(0,a.Se)({user:o.Z.USER_DATA}),formattedDate(){const t=this.item.created_datetime?this.item.created_datetime.split(" ")[0]:this.item.date_from;return t.split("-").reverse().join(".")},formattedTime(){if(this.item.time_from){const[t,e]=this.item.time_from?.split(":");return`${t}:${e}`}return null},itemColor(){return this.item.value?Number(this.item.value)<0?"red":"green":"blue"}},methods:{cancelReservation(){this.$store.dispatch(n.Z.TOGGLE_RESERVATION,{action:"cancel_reservation",date:this.item.date_from,reservation:this.item.id,user:this.user.id,member:this.user.member.id,registration:this.user.registration.id}).then((t=>{"success"===t.status?this.$toaster.success(t.message):this.$toaster.error(t.message)}))}}},h=d,p=s(1001),_=(0,p.Z)(h,m,c,!1,null,"5b694238",null),v=_.exports,f={name:"HistoryView",components:{HistoryItem:v},metaInfo:{title:"History"},data(){return{calendarMasks:{weekdays:"WWW"},currentDate:null}},computed:{...(0,a.Se)({user:o.Z.USER_DATA,pointsItems:o.Z.STATS_POINTS,upcomingItems:o.Z.UPCOMING_TRAININGS}),upcomingItemsReversed(){return this.upcomingItems.slice(0).reverse()},historyItems(){return this.pointsItems.length&&[...this.upcomingItemsReversed,...this.pointsItems].filter((t=>!0===(0,l.WZ)(t.created_datetime||t.c_date_time_dt,this.currentDate)))},attributes(){const t=this.pointsItems.map(((t,e,s)=>{const i=t.created_datetime.split(" ")[0];let r;return 0===e&&(r=!1),e>0&&(r="equal"===(0,l.aN)(i,s[e-1].created_datetime.split(" ")[0])),{...t,dateIsUsed:r}})),e=this.upcomingItems.map(((t,e,s)=>{const i=t.date_from;let r;return 0===e&&(r=!1),e>0&&(r="equal"===(0,l.aN)(i,s[e-1].date_from)),{...t,dateIsUsed:r}}));return[...t.map((t=>({dates:t.created_datetime.split(" ")[0],...Number(t.value)>0&&{highlight:{color:"green",contentClass:"green"}},...Number(t.value)<0&&!t.dateIsUsed&&{dot:{color:"red",class:"red"}},popover:{label:t.reason,visibility:"click",hideIndicator:!0},customData:t}))),...e.map((t=>({...!t.dateIsUsed&&{dot:"#0094ff"},dates:new Date(t.date_from),popover:{label:t.gs_tags,visibility:"click",hideIndicator:!0}}))),{dates:new Date,highlight:{contentClass:"grey"}}]}},mounted(){this.pointsItems.length&&this.upcomingItems.length||this.$store.dispatch(n.Z.LOGIN,{username:this.user.username,password:this.user.password})},methods:{async moveToMonth(t){const e=this.$refs.calendar;await e.move({month:t})}}},g=f,b=(0,p.Z)(g,i,r,!1,null,"6d7ba031",null),y=b.exports}}]);
//# sourceMappingURL=history.7aefba3f.js.map