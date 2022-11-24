"use strict";(self["webpackChunkfitness_app"]=self["webpackChunkfitness_app"]||[]).push([[685],{9757:function(t,e,s){s.d(e,{Z:function(){return c}});var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"checked"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.model,expression:"model"}],staticClass:"checked__input",attrs:{type:"checkbox",id:"checked"},domProps:{value:t.value,checked:Array.isArray(t.model)?t._i(t.model,t.value)>-1:t.model},on:{change:function(e){var s=t.model,a=e.target,n=!!a.checked;if(Array.isArray(s)){var i=t.value,r=t._i(s,i);a.checked?r<0&&(t.model=s.concat([i])):r>-1&&(t.model=s.slice(0,r).concat(s.slice(r+1)))}else t.model=n}}}),e("label",{staticClass:"checked__label",attrs:{for:"checked"}},[t._v(t._s(t.text))])])},n=[],i={props:{text:{type:String},value:{type:Boolean}},computed:{model:{get(){return this.value},set(t){this.$emit("input",t)}}}},r=i,o=s(1001),l=(0,o.Z)(r,a,n,!1,null,null,null),c=l.exports},5280:function(t,e,s){s.d(e,{Z:function(){return c}});var a=function(){var t=this,e=t._self._c;return e("div",[e("p",[t._v(t._s(t.title))]),e("input",t._b({domProps:{value:t.value},on:{input:t.handleInput}},"input",t.$attrs,!1)),t._t("default")],2)},n=[],i={props:{title:String,value:{type:String,default:""}},methods:{handleInput(t){this.$emit("input",t.target.value)}}},r=i,o=s(1001),l=(0,o.Z)(r,a,n,!1,null,"3ecca01a",null),c=l.exports},4610:function(t,e,s){s.d(e,{Z:function(){return l}});var a=function(){var t=this,e=t._self._c;return e("div",{on:{click:function(e){return t.$router.go(-1)}}},[e("img",{attrs:{src:s(9215),alt:"go back"}})])},n=[],i=s(1001),r={},o=(0,i.Z)(r,a,n,!1,null,"c104fe1a",null),l=o.exports},1577:function(t,e,s){s.r(e),s.d(e,{default:function(){return g}});var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"login-main"},[e("go-back"),e("form",{on:{submit:function(e){return e.preventDefault(),t.signUp.apply(null,arguments)}}},[e("h1",{staticClass:"login-title"},[t._v("Let’s sign you up.")]),e("h2",{staticClass:"login-sub-title"},[t._v("Create account.")]),e("base-input",{attrs:{type:"text",title:"Full Name"},model:{value:t.signUpData.name,callback:function(e){t.$set(t.signUpData,"name",e)},expression:"signUpData.name"}}),e("base-input",{staticClass:"mt-24",attrs:{type:"email",title:"Email Address"},model:{value:t.signUpData.username,callback:function(e){t.$set(t.signUpData,"username",e)},expression:"signUpData.username"}}),e("base-input",{staticClass:"mt-24",attrs:{type:"text",title:"Phone Number"},model:{value:t.signUpData.contact,callback:function(e){t.$set(t.signUpData,"contact",e)},expression:"signUpData.contact"}}),e("base-input",{staticClass:"mt-24",attrs:{type:"text",title:"Address"},model:{value:t.signUpData.address,callback:function(e){t.$set(t.signUpData,"address",e)},expression:"signUpData.address"}}),e("base-input",{staticClass:"mt-24",attrs:{type:t.passwordType,title:"Password"},model:{value:t.signUpData.password,callback:function(e){t.$set(t.signUpData,"password",e)},expression:"signUpData.password"}},[e("button",{on:{click:t.changeType}},[e("img",{staticClass:"eye-icon",attrs:{src:s(4171),alt:"eye icon"}})])]),e("base-input",{staticClass:"mt-24",attrs:{type:t.passwordTypeConfirm,title:"Confirm Password"},model:{value:t.signUpData.password2,callback:function(e){t.$set(t.signUpData,"password2",e)},expression:"signUpData.password2"}},[e("button",{on:{click:t.changeTypeConfirm}},[e("img",{staticClass:"eye-icon",attrs:{src:s(4171),alt:"eye icon"}})])]),e("base-checked",{staticClass:"mt-28 mb-60",attrs:{text:"Agree to terms and conditions"},model:{value:t.termsAgreement,callback:function(e){t.termsAgreement=e},expression:"termsAgreement"}}),e("base-button",{staticClass:"base-btn",attrs:{disabled:!t.termsAgreement}},[e("span",{staticClass:"blue-btn-text"},[t._v("Sign up")])])],1),e("p",{staticClass:"login-text"},[t._v(" Already have an account? "),e("router-link",{attrs:{to:{name:"SignIn"}}},[t._v("Sign in")])],1)],1)},n=[],i=(s(7658),s(174)),r=s(5280),o=s(9757),l=s(5879),c=s(4610),p={components:{GoBack:c.Z,BaseInput:r.Z,BaseChecked:o.Z,BaseButton:l.Z},metaInfo:{title:"Sign Up"},data(){return{signUpData:{name:"",username:"",contact:"",password:"",password2:"",address:""},termsAgreement:!1,passwordType:"password",passwordTypeConfirm:"password"}},methods:{signUp(){this.$store.dispatch(i.Z.REGISTER,this.signUpData).then((t=>{"success"===t.status?this.$router.push({name:"SignIn"}):this.$toaster.error(t.message)}))},changeType(){this.passwordType="password"===this.passwordType?"text":"password"},changeTypeConfirm(){this.passwordTypeConfirm="password"===this.passwordTypeConfirm?"text":"password"}}},u=p,d=s(1001),m=(0,d.Z)(u,a,n,!1,null,"558fb9e0",null),g=m.exports}}]);
//# sourceMappingURL=register.e3ca0e07.js.map