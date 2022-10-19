(self["webpackChunkfitness_app"]=self["webpackChunkfitness_app"]||[]).push([[592],{138:function(t,s,r){"use strict";r.d(s,{Z:function(){return u}});var i=function(){var t=this,s=t._self._c;return s("section",{staticClass:"images-block"},t._l(t.images,(function(t,i){return s("img",{key:`images-item_${i}`,staticClass:"images-block__img",attrs:{src:r(1810)(`./${t}.jpg`),alt:""}})})),0)},a=[],e={name:"ImagesBlockScrollable",props:{images:{type:Array,required:!0,default:()=>[]}}},n=e,c=r(1001),o=(0,c.Z)(n,i,a,!1,null,null,null),u=o.exports},2861:function(t,s,r){"use strict";r.r(s),r.d(s,{default:function(){return l}});var i=function(){var t=this,s=t._self._c;return s("article",{staticClass:"instructors"},[s("div",{staticClass:"container"},[s("div",{staticClass:"instructors__wrapper"},[s("images-block-scrollable",{attrs:{images:t.carouselImages}}),s("div",{staticClass:"instructors__main"},[s("div",{staticClass:"container"},[s("form",{staticClass:"instructors__search-form search-form",on:{submit:function(s){return s.preventDefault(),t.searchHandler.apply(null,arguments)}}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.searchStr,expression:"searchStr"}],staticClass:"search-form__input",attrs:{type:"text",placeholder:"Search instructor"},domProps:{value:t.searchStr},on:{input:function(s){s.target.composing||(t.searchStr=s.target.value)}}}),s("button",{staticClass:"search-form__btn"},[s("img",{attrs:{src:r(6962),alt:""}})])]),s("div",{staticClass:"instructors__top instructors-top"},[s("h2",{staticClass:"instructors-top__title"},[t._v("Top instructors")]),s("ul",{staticClass:"instructors-top__list"},t._l(t.topInstructors,(function(i){return s("li",{key:i.id,staticClass:"instructors-top__item instructors-top-card"},[s("article",{staticClass:"instructors-top-card__content"},[s("div",{staticClass:"instructors-top-card__img-title"},[s("img",{staticClass:"instructors-top-card__img",attrs:{src:r(1810)(`./${i.img}.jpg`),alt:""}}),s("h3",{staticClass:"instructors-top-card__title"},[t._v(t._s(i.name))])]),s("footer",{staticClass:"instructors-top-card__footer"},[s("base-button",{staticClass:"small-btn"},[t._v("Details")])],1)])])})),0)]),t._l(t.instructors,(function(i,a){return s("ul",{key:`instructors-list_${a}`,staticClass:"instructors__list"},t._l(i,(function(i,a){return s("li",{key:`instructor_${a}`,staticClass:"instructors__list-item instructors-item"},[s("router-link",{attrs:{to:{name:"Instructor",params:{id:i.id}}}},[s("div",{staticClass:"instructors-item__img-wrapper",class:{"instructors-item__img-wrapper--bordered":!i.img}},[i.img?s("img",{staticClass:"instructors-item__img",attrs:{src:r(260)(`./${i.img}.png`),alt:""}}):s("img",{attrs:{src:r(3875),alt:""}}),s("img",{staticClass:"instructors-item__verified",attrs:{src:r(7607),alt:"Verified"}})]),s("h3",{staticClass:"instructors-item__name"},[t._v(t._s(i.name))])])],1)})),0)}))],2)])],1)])])},a=[],e=r(7744),n=r(138),c={name:"InstructorsView",components:{BaseButton:e.Z,ImagesBlockScrollable:n.Z},metaInfo:{title:"Instructors"},data(){return{carouselImages:["pic-training","pic-training","pic-training","pic-training","pic-training"],searchStr:"",topInstructors:[{id:1,name:"Mark",img:"mark"},{id:2,name:"Mark",img:"mark"},{id:3,name:"Marco",img:"mark"}],instructors:[[{id:1,name:"Marcus",img:"marcus"},{id:2,name:"Marcus",img:""},{id:3,name:"Marcus",img:""},{id:4,name:"Marcus",img:""},{id:5,name:"Marcus",img:""}],[{id:4,name:"Marcus",img:""},{id:5,name:"Marcus",img:""},{id:6,name:"Marcus",img:""},{id:7,name:"Marcus",img:""},{id:8,name:"Marcus",img:""}]]}},methods:{searchHandler(){console.log(this.searchStr)}}},o=c,u=r(1001),m=(0,u.Z)(o,i,a,!1,null,"3f40e864",null),l=m.exports},1810:function(t,s,r){var i={"./map.jpg":5226,"./mark.jpg":6906,"./pic-training.jpg":3235};function a(t){var s=e(t);return r(s)}function e(t){if(!r.o(i,t)){var s=new Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}return i[t]}a.keys=function(){return Object.keys(i)},a.resolve=e,t.exports=a,a.id=1810},260:function(t,s,r){var i={"./avatar.png":8987,"./marcus.png":652,"./stripe-logo.png":9484};function a(t){var s=e(t);return r(s)}function e(t){if(!r.o(i,t)){var s=new Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}return i[t]}a.keys=function(){return Object.keys(i)},a.resolve=e,t.exports=a,a.id=260},5226:function(t,s,r){"use strict";t.exports=r.p+"img/map.fc355796.jpg"},652:function(t,s,r){"use strict";t.exports=r.p+"img/marcus.9fc81eec.png"},6906:function(t,s,r){"use strict";t.exports=r.p+"img/mark.181e5a44.jpg"},3235:function(t,s,r){"use strict";t.exports=r.p+"img/pic-training.83f282ca.jpg"},9484:function(t){"use strict";t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAVCAYAAAAElr0/AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAATWSURBVHgBvVddTFxFFP7m7l0KWFqQ0qS0QSiW9EdNikZsghFNfdAYbWywLAt2gY3GF2NfjOmDLb600cYaXzRYKIXFNhIeTNWmmvTBv5pqY9SkwYoraSONUmhLaCq77B6/2d17ubuherdl+cIwZ849M3O+MzNnZhVyiMA2Kfbk41kY2ASFuqkIHhscVBHkAGY2xoEGyZcybDoyqM66sTfuQIDVQSwCXBFp98sTSvAGxfWM7BXWFcgSIhDkEIZLu40k8ADLUspxl32g4hhWCp0eAw/PmijL1bbSsFekdYds8BrYSmdLEwrBOZave46pMSPRnPOvrVm2puSwEcXVuBe1iVYMkzKDsFkIX1zh92gEvxhaCxSwrm1slFOFJtaT3F3anATPYwaTMS9a+b1EAcOeXzHUdVZFMx1tf1qKVBEe5MrWax9E4YfDA+oT26mGBjGr1+A9ehrEfEwFNbPAMyT4VuY3DtqpPBjmGh1NqcZYdNQrOd4XnOwz5TgjPOxLlproMgzsTAXrR45bTWmZY9hRrxePvt+rRi1FR6vcw609xPlqMlwYicXweO8xNWpUr8aem5HQ+EeQB/coT5BwC4XNSCehURmN4vNAQIp1I9AklQzUyXlIaNxteDCkF4MBR6NKaSmPsjrOdh7lataJLcRBlFK2zRQdOK5lQ/Az23nzOHie//+EO3zJEuY4DWouCOs8kURwD5gmOjl/eWrui7TZzzrK+k2qilnXrl2DZpN7s1rs+fFV94B62ZpBRyOiMF2Q5iMmukOqxWpz2ZucXsUF27h3P9Yys90r+G/8wfke0cILLbIqngzMipTTT2kiJOG3jOnr7kMDKqTloE9KxcA+JI0bTRp+R+/qU7atHS1ST10XO4XYaTThkM995mTCOAP3sDYDukLqEucJKQMJ8twBW9jeQtFj2dCv2jafrE3ICvc5xtlscKjXKEzaKkEVR99Hw5Fgs+zFIoIkfnM080ihLN0Au5goOnWhvH1OjZUGl/Ybnvz72T7Ccs3uJFhCMns6fPKiGHORyyUknn7wjSzmTdwjOn2xCugF6/CjDcmUmRiU6fU5kjppT+b+Es0ahsIGaxMziH/HZ3kPOajILJ68NIVT8/Ztb5Gj3Hc7X2qWEn3PeIbRz5xtLzH3pZc3tH1IyGJ1sFWqtOz3yzLcHooDzbJOux30Swudf976wDlPH/5Qhcnjsq0z8fqq5Sg9cULN6KJ1K4tQV16GjSZTaA23TpO+xTjYhZjwGaJwp2OyMNvjNjG9inGEO/xyhSTfpWoYt45iD1M1dwGvK+Q7P/DW/yAl7mc5kJIf4g65yOB/T0cKGfAq/WxSs9ietk1EPwYdJPS9wvOzN+rBIJsXMpwowcIhjQRX4R1msU+1fGgAb3OlPnJ8Nkigjjb3pt5+SSWd1VH9yTkQI32DLPrVDTTo89Pfr67z2aDz/RmHDf8wZsQxzfovq6S5F8N1JHVWycRVJJOMhWtMu68WRbDbQUt6QmoH9e10fiSj/wTJHGRSOJ2WFXw+WUGHpa9PTeAm2NUoBZfzUdTXh3Fe91k/zXkee+23FlecWbNKhGckiJLubjX5f/31c6SiAsvHxzFtnRONRUmrTsxHBAuAnKVSN5AF/KmV1U/dBYHiuYijh7f4ORL5FguEfwH+Da1/mQm8aQAAAABJRU5ErkJggg=="}}]);
//# sourceMappingURL=instructors.441584da.js.map