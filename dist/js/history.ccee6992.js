"use strict";(self["webpackChunkfitness_app"]=self["webpackChunkfitness_app"]||[]).push([[908],{3298:function(t,s,i){i.r(s),i.d(s,{default:function(){return y}});var e=function(){var t=this,s=t._self._c;return s("article",{staticClass:"history"},[s("div",{staticClass:"container"},[s("h2",{staticClass:"history__title"},[t._v("History")]),s("ul",{staticClass:"history__list"},t._l(t.historyItems,(function(t,i){return s("history-item",{key:`history-items_${i}`,attrs:{item:t}})})),1)])])},a=[],r=function(){var t=this,s=t._self._c;return s("li",{staticClass:"history-item"},[s("p",{staticClass:"history-item__date"},[t._v(t._s(t.item.date))]),s("h2",{staticClass:"history-item__title",class:`history-item__title--${t.titleColor}`},[t._v(t._s(t.item.title))]),s("p",{staticClass:"history-item__points",class:`history-item__points--${t.pointsColor}`},[t._v(t._s(t.item.points)+" pts")])])},o=[],l={name:"HistoryItem",props:{item:{type:Object,required:!0,default:()=>{}}},computed:{titleColor(){return"Participated"!==this.item.status?"red":"blue"},pointsColor(){return"Participated"!==this.item.status?"red":"green"}}},n=l,u=i(1001),c=(0,u.Z)(n,r,o,!1,null,"4f329029",null),p=c.exports,_={name:"HistoryView",components:{HistoryItem:p},data(){return{historyItems:[{date:"02.08.2022",title:"BodyPump",points:2,status:"Participated"},{date:"05.08.2022",title:"Gym",points:2,status:"Participated"},{date:"06.08.2022",title:"No-show",points:-2,status:"No-show"},{date:"05.08.2022",title:"Cancel",points:-1,status:"Cancel"}]}}},m=_,h=(0,u.Z)(m,e,a,!1,null,"519695b6",null),y=h.exports}}]);
//# sourceMappingURL=history.ccee6992.js.map