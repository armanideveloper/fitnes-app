(self["webpackChunkfitness_app"]=self["webpackChunkfitness_app"]||[]).push([[329],{138:function(t,s,a){"use strict";a.d(s,{Z:function(){return r}});var i=function(){var t=this,s=t._self._c;return s("section",{staticClass:"images-block"},t._l(t.images,(function(t,i){return s("img",{key:`images-item_${i}`,staticClass:"images-block__img",attrs:{src:a(1810)(`./${t}.jpg`),alt:""}})})),0)},e=[],c={name:"ImagesBlockScrollable",props:{images:{type:Array,required:!0,default:()=>[]}}},l=c,n=a(1001),o=(0,n.Z)(l,i,e,!1,null,null,null),r=o.exports},7191:function(t,s,a){"use strict";a.r(s),a.d(s,{default:function(){return m}});var i=function(){var t=this,s=t._self._c;return s("article",{staticClass:"club-page"},[s("div",{staticClass:"container"},[s("images-block-scrollable",{attrs:{images:t.images}}),s("section",{staticClass:"club-about"},[s("div",{staticClass:"club-about__info"},[s("div",{staticClass:"club-about__avatar-wrapper"},[s("img",{staticClass:"club-about__avatar",attrs:{src:a(9643),alt:""}}),s("img",{staticClass:"club-about__verified-tick",attrs:{src:a(7607),alt:""}})]),s("div",{staticClass:"club-about__data"},[s("h1",{staticClass:"club-about__name"},[t._v(t._s(t.clubName))]),s("p",{staticClass:"club-about__address"},[s("img",{attrs:{src:a(834),alt:""}}),t._v(" "+t._s(t.clubAddress)+" ")])])]),s("p",{staticClass:"club-about__rating"},[s("img",{attrs:{src:a(6511),alt:""}}),t._v(" "+t._s(t.clubRating)+" ")]),s("p",{staticClass:"club-about__description"},[t._v(t._s(t.clubDescription))])]),s("section",{staticClass:"club-facilities"},[s("h3",{staticClass:"club-section-title"},[t._v("Facilities")]),s("ul",{staticClass:"club-facilities__list"},t._l(t.clubFacilities,(function(a){return s("li",{key:a,staticClass:"club-facilities__item"},[t._v(t._s(a))])})),0),s("a",{staticClass:"club-facilities__link",attrs:{href:"#"}},[t._v("View gym rules")]),s("div",{staticClass:"club-facilities__btn-block"},[s("router-link",{attrs:{to:{name:"Store",params:{currentComponent:"StoreMemberships"}},custom:""},scopedSlots:t._u([{key:"default",fn:function({navigate:a}){return[s("base-button",{staticClass:"small-btn",nativeOn:{click:function(t){return a.apply(null,arguments)}}},[t._v("View memberships")])]}}])}),s("base-button",{staticClass:"small-btn"},[t._v("View classes")])],1)]),s("section",{staticClass:"club-schedule"},[s("ul",{staticClass:"club-schedule__table"},t._l(t.clubSchedule,(function(a){return s("li",{key:a.day,staticClass:"club-schedule__date-time"},[s("p",{staticClass:"club-schedule__date"},[t._v(t._s(a.day))]),s("p",{staticClass:"club-schedule__time"},[t._v(t._s(a.time))])])})),0)]),s("section",{staticClass:"club-contact"},[s("h3",{staticClass:"club-section-title"},[t._v("Contact")]),s("ul",{staticClass:"club-contact__list"},t._l(t.clubContact,(function(i,e){return s("li",{key:`contact-item_${e}`,staticClass:"club-contact__item"},[s("div",{staticClass:"club-contact__icon-wrapper"},[s("img",{staticClass:"club-contact__icon",attrs:{src:a(866)(`./${i.icon}.svg`),alt:""}})]),s("a",{staticClass:"club-contact__link",attrs:{href:t.getHref(i.href,i.type),target:i.type?"_self":"_blank"}},[t._v(" "+t._s(i.text)+" ")])])})),0)]),s("section",{staticClass:"club-location"},[s("div",{staticClass:"club-location__map-wrapper"},[s("img",{staticClass:"club-location__map",attrs:{src:a(5226),alt:""}})])])],1)])},e=[],c=a(4417),l=a(138),n={name:"ClubView",components:{BaseButton:c.Z,ImagesBlockScrollable:l.Z},metaInfo:{title:"Club"},data(){return{images:["pic-training","pic-training","pic-training"],clubName:"Moovgym",clubAddress:"Str. Sovata 1, Oradea",clubRating:4.8,clubDescription:"Moov Gym este o sală de fitness dedicată doamnelor și domnișoarelor dornice de mișcare și interesate de un stil de viață sănătos.",clubFacilities:["Gym, sauna","Classes: Aerobic, HIIT, Dance"],clubSchedule:[{day:"Monday",time:"07:00 - 22:00"},{day:"Tuesday",time:"07:00 - 22:00"},{day:"Wednesday",time:"07:00 - 22:00"},{day:"Thursday",time:"07:00 - 22:00"},{day:"Friday",time:"07:00 - 22:00"},{day:"Saturday",time:"08:00 - 14:00"},{day:"Sunday",time:"Closed"}],clubContact:[{icon:"phone",type:"tel",href:"0744123456",text:"0744123456"},{icon:"email",type:"mailto",href:"contact@moovgym.ro",text:"contact@moovgym.ro"},{icon:"website",href:"https://www.moovgym.ro",text:"www.moovgym.ro"},{icon:"instagram",href:"https://instagram.com/moovgym",text:"@moovgym"},{icon:"fb",href:"https://fb.com/moovgym",text:"@moovgym"}]}},methods:{getHref(t,s=""){return["mailto","tel"].includes(s)?`${s}:${t}`:t}}},o=n,r=a(1001),u=(0,r.Z)(o,i,e,!1,null,"4d08f534",null),m=u.exports},1810:function(t,s,a){var i={"./map.jpg":5226,"./mark.jpg":6906,"./pic-training.jpg":3235};function e(t){var s=c(t);return a(s)}function c(t){if(!a.o(i,t)){var s=new Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}return i[t]}e.keys=function(){return Object.keys(i)},e.resolve=c,t.exports=e,e.id=1810},5226:function(t,s,a){"use strict";t.exports=a.p+"img/map.fc355796.jpg"},6906:function(t,s,a){"use strict";t.exports=a.p+"img/mark.181e5a44.jpg"},3235:function(t,s,a){"use strict";t.exports=a.p+"img/pic-training.83f282ca.jpg"}}]);
//# sourceMappingURL=club.9805c12f.js.map