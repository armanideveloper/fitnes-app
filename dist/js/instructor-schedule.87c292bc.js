"use strict";(self["webpackChunkfitness_app"]=self["webpackChunkfitness_app"]||[]).push([[782],{4288:function(t,e,a){a.d(e,{Z:function(){return d}});var s=function(){var t=this,e=t._self._c;return e("label",{staticClass:"toggle",class:{active:t.currentState}},[e("span",{staticClass:"toggle__label"},[t._t("default")],2),e("input",{directives:[{name:"model",rawName:"v-model",value:t.checkedValue,expression:"checkedValue"}],staticClass:"toggle__checkbox",attrs:{id:`${t.id}-toggle`,type:"checkbox"},domProps:{checked:Array.isArray(t.checkedValue)?t._i(t.checkedValue,null)>-1:t.checkedValue},on:{change:[function(e){var a=t.checkedValue,s=e.target,i=!!s.checked;if(Array.isArray(a)){var n=null,r=t._i(a,n);s.checked?r<0&&(t.checkedValue=a.concat([n])):r>-1&&(t.checkedValue=a.slice(0,r).concat(a.slice(r+1)))}else t.checkedValue=i},t.changeToggleVal]}}),e("span",{staticClass:"toggle__switch"})])},i=[],n={name:"BaseToggle",props:{defaultState:{type:Boolean,default:!1},id:{type:String,default:"base-toggle"}},data(){return{currentState:this.defaultState}},watch:{defaultState:{handler(t){this.currentState=t},immediate:!0}},computed:{checkedValue:{get(){return this.currentState},set(t){this.currentState=t}}},methods:{changeToggleVal(){this.$emit("change-toggle-val",this.currentState)}}},r=n,c=a(1001),l=(0,c.Z)(r,s,i,!1,null,null,null),d=l.exports},6364:function(t,e,a){a.d(e,{Z:function(){return h}});var s=function(){var t=this,e=t._self._c;return e("li",{staticClass:"training-card"},[e("main",{staticClass:"training-card__main"},[e("div",{staticClass:"training-card__content"},[e("div",{staticClass:"training-card__blue-line"}),e("div",{staticClass:"training-card__inner"},[e("div",{staticClass:"training-card__grid"},[e("h3",{staticClass:"training-card__title"},[t._v(t._s(t.training.name))]),e("p",{staticClass:"training-card__time"},[t._v(t._s(t.timeFormatted))]),e("base-toggle",{staticClass:"primary",attrs:{"default-state":!!+t.training.reminder,id:`training-notify-${t.training.id}`},on:{"change-toggle-val":t.toggleNotifications}},[t._v(" Notify me ")]),t.training.repeats?e("span",{staticClass:"training-card__tag training-card__repeats"},[t._v(" "+t._s(t.training.repeats)+"x/week ")]):t._e()],1),e("div",{staticClass:"training-card__tags"},[e("span",{staticClass:"training-card__tag"},[e("img",{attrs:{src:a(9140),alt:""}}),t._v(" "+t._s(t.training.gs_tags)+" ")]),e("span",{staticClass:"training-card__tag"},[e("img",{attrs:{src:a(6123),alt:""}}),t._v(" "+t._s(t.training.duration)+" mins ")]),e("span",{staticClass:"training-card__tag"},[e("img",{attrs:{src:a(6705),alt:""}}),t._v(" "+t._s(t.training.location_name)+" ")]),t.training.equipment?e("span",{staticClass:"training-card__tag"},[e("img",{attrs:{src:a(6705),alt:""}}),t._v(" "+t._s(t.training.equipment)+" ")]):t._e()])])])]),e("footer",{staticClass:"training-card__footer"},[t.training.is_open&&!t.training.choosen?e("base-button",{staticClass:"small-btn training-card__book-btn",nativeOn:{click:function(e){return t.toggleReservation("reservation")}}},[t._v(" Book ")]):t.training.choosen?e("base-button",{staticClass:"small-btn training-card__book-btn",nativeOn:{click:function(e){return t.toggleReservation("cancel_reservation")}}},[t._v(" Cancel ")]):e("base-button",{staticClass:"small-btn training-card__book-btn training-card__book-btn--disabled"},[t._v(" Booking available in "+t._s(t.training.time_till_open_hours)+" ")])],1)])},i=[],n=a(3822),r=a(174),c=a(5729),l=a(5879),d=a(4288),o={name:"TrainingCard",components:{BaseToggle:d.Z,BaseButton:l.Z},props:{training:{type:Object,required:!0,default:()=>{}}},computed:{...(0,n.Se)({user:c.Z.USER_DATA}),timeFormatted(){const[t,e]=this.training.time_from.split(":");return`${t}:${e}`}},methods:{toggleReservation(t){this.$store.dispatch(r.Z.TOGGLE_RESERVATION,{action:t,date:this.training.date_from,reservation:this.training.id,user:this.user.id,member:this.user.member.id,registration:this.user.registration.id}).then((t=>{"success"===t.status?this.$toaster.success(t.message):this.$toaster.error(t.message)}))},toggleNotifications(t){this.$store.dispatch(r.Z.TOGGLE_NOTIFICATIONS,{action:"reminder",status:""+ +t,date:this.training.date_from,reservation:this.training.id,user:this.user.id,member:this.user.member.id,registration:this.user.registration.id}).then((t=>{"success"===t.status?this.$toaster.success(t.message):this.$toaster.error(t.message)}))}}},u=o,g=a(1001),_=(0,g.Z)(u,s,i,!1,null,"665eb06b",null),h=_.exports},7319:function(t,e,a){a.d(e,{Z:function(){return p}});var s=function(){var t=this,e=t._self._c;return e("article",{staticClass:"schedule"},[t._t("default"),e("inline-calendar",{on:{"set-active-date":t.selectDate}}),e("ul",{staticClass:"schedule__trainings"},t._l(t.trainingsFiltered,(function(t,a){return e("training-card",{key:`training-item_${a}`,attrs:{training:t}})})),1)],2)},i=[],n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"inline-calendar"},[e("ul",{ref:"datesWrapper",staticClass:"inline-calendar__dates"},t._l(t.datesReadable,(function(a,s){return e("li",{key:`date-item_${s}`,staticClass:"inline-calendar__date date-item",class:{active:a.id===t.selectedDate.id},on:{click:function(e){return t.setActiveDate(a)}}},[e("p",{staticClass:"date-item__weekday"},[t._v(t._s(a.weekday))]),e("h2",{staticClass:"date-item__day"},[t._v(t._s(a.day))])])})),0)])},r=[],c=(a(7658),{name:"InlineCalendar",data(){return{today:new Date,dates:[],selectedDate:null,maxDate:new Date,daysRange:7}},created(){this.getDatesInRange(this.today,this.daysRange)},computed:{datesReadable(){return this.dates.map(((t,e)=>({id:e+1,date:t,weekday:new Date(t).toLocaleDateString("en-US",{weekday:"short"}),day:new Date(t).getDate()})))}},methods:{getDatesInRange(t,e,a=!1){const s=new Date(t.getTime());a&&s.setDate(s.getDate()+1);const i=new Date(s.getTime()),n=new Date(i.setDate(i.getDate()+e)),r=[];while(s<=n)r.push(new Date(s)),s.setDate(s.getDate()+1);this.dates=this.dates.length?[...this.dates,...r]:r,this.maxDate=r[r.length-1],this.setActiveDate(this.datesReadable[0])},setActiveDate(t){this.selectedDate=t,this.$emit("set-active-date",t)}}}),l=c,d=a(1001),o=(0,d.Z)(l,n,r,!1,null,"26e7a432",null),u=o.exports,g=a(6364),_={name:"TrainingSchedule",components:{InlineCalendar:u,TrainingCard:g.Z},props:{trainings:{type:Array,required:!0,default:()=>{}}},data(){return{selectedDate:null}},computed:{trainingsFiltered(){const t=this.trainings?.filter((t=>{const e=new Date(t.date),a=new Date(this.selectedDate?.date);if(e.getFullYear()===a.getFullYear()&&e.getMonth()===a.getMonth()&&e.getDate()===a.getDate())return t}))[0];return t?.schedules}},methods:{selectDate(t){this.selectedDate=t}}},h=_,m=(0,d.Z)(h,s,i,!1,null,null,null),p=m.exports},9896:function(t,e,a){a.r(e),a.d(e,{default:function(){return d}});var s=function(){var t=this,e=t._self._c;return e("h1",[t._v("Here will be Instructor packages")])},i=[],n={name:"InstructorPackages"},r=n,c=a(1001),l=(0,c.Z)(r,s,i,!1,null,"68601fb8",null),d=l.exports},8966:function(t,e,a){a.r(e),a.d(e,{default:function(){return o}});var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"instructor-schedule"},[e("div",{staticClass:"container"},[e("training-schedule",[e("h2",{staticClass:"instructor-schedule__title"},[t._v("Schedule")])])],1)])},i=[],n=a(7319),r={name:"InstructorSchedule",components:{TrainingSchedule:n.Z}},c=r,l=a(1001),d=(0,l.Z)(c,s,i,!1,null,"b4ae7896",null),o=d.exports}}]);
//# sourceMappingURL=instructor-schedule.87c292bc.js.map