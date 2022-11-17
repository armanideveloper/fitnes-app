"use strict";(self["webpackChunkfitness_app"]=self["webpackChunkfitness_app"]||[]).push([[535],{9850:function(t,e,s){s.d(e,{Z:function(){return c}});var a=function(){var t=this,e=t._self._c;return e("div",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.model,expression:"model"}],attrs:{type:"checkbox",id:"checked"},domProps:{value:t.value,checked:Array.isArray(t.model)?t._i(t.model,t.value)>-1:t.model},on:{change:function(e){var s=t.model,a=e.target,n=!!a.checked;if(Array.isArray(s)){var i=t.value,o=t._i(s,i);a.checked?o<0&&(t.model=s.concat([i])):o>-1&&(t.model=s.slice(0,o).concat(s.slice(o+1)))}else t.model=n}}}),e("label",{attrs:{for:"checked"}},[t._v(t._s(t.text))])])},n=[],i={props:{text:{type:String},value:{type:Boolean}},computed:{model:{get(){return this.value},set(t){this.$emit("input",t)}}}},o=i,r=s(1001),l=(0,r.Z)(o,a,n,!1,null,"58784896",null),c=l.exports},2206:function(t,e,s){s.d(e,{Z:function(){return c}});var a=function(){var t=this,e=t._self._c;return e("div",[e("p",[t._v(t._s(t.title))]),e("input",t._b({domProps:{value:t.value},on:{input:t.handleInput}},"input",t.$attrs,!1)),t._t("default")],2)},n=[],i={props:{title:String,value:{type:String,default:""}},methods:{handleInput(t){this.$emit("input",t.target.value)}}},o=i,r=s(1001),l=(0,r.Z)(o,a,n,!1,null,"71af4bfd",null),c=l.exports},4610:function(t,e,s){s.d(e,{Z:function(){return l}});var a=function(){var t=this,e=t._self._c;return e("div",{on:{click:function(e){return t.$router.go(-1)}}},[e("img",{attrs:{src:s(9215),alt:"go back"}})])},n=[],i=s(1001),o={},r=(0,i.Z)(o,a,n,!1,null,"c104fe1a",null),l=r.exports},1396:function(t,e,s){s.r(e),s.d(e,{default:function(){return h}});var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"login-main"},[e("go-back"),e("h1",{staticClass:"login-title"},[t._v("Let’s sign you in.")]),e("h2",{staticClass:"login-sub-title"},[t._v("Welcome back. You’ve been missed!")]),e("base-input",{staticClass:"mt-24",attrs:{type:"email",name:"username",title:"Email Address"},on:{change:t.changeInput},model:{value:t.loginData.username,callback:function(e){t.$set(t.loginData,"username",e)},expression:"loginData.username"}}),e("base-input",{staticClass:"mt-24",attrs:{type:t.passwordType,name:"password",title:"Password"},on:{change:t.changeInput},model:{value:t.loginData.password,callback:function(e){t.$set(t.loginData,"password",e)},expression:"loginData.password"}},[e("button",{on:{click:t.changeType}},[e("img",{staticClass:"eye-icon",attrs:{src:s(4171),alt:"eye icon"}})])]),e("div",{staticClass:"login-help-block mt-28 mb-60"},[e("base-checked",{attrs:{text:"Remember Me"}}),e("p",{staticClass:"login-forgot-text"},[t._v("Forgot Password?")])],1),e("base-button",{staticClass:"base-btn",nativeOn:{click:function(e){return t.startSignIn.apply(null,arguments)}}},[e("span",{staticClass:"blue-btn-text"},[t._v("Sign in")])]),e("p",{staticClass:"login-text"},[t._v(" Don’t have an account ? "),e("router-link",{attrs:{to:"/sign-up"}},[t._v("Sign up")])],1)],1)},n=[],i=(s(7658),s(2206)),o=s(9850),r=s(4417),l=s(4610),c=s(174),u={components:{GoBack:l.Z,BaseInput:i.Z,BaseChecked:o.Z,BaseButton:r.Z},metaInfo:{title:"Sign In"},data(){return{loginData:{username:"",password:""},passwordType:"password",passwordTypeConfirm:"password"}},methods:{changeType(){this.passwordType="password"===this.passwordType?"text":"password"},changeTypeConfirm(){this.passwordTypeConfirm="password"===this.passwordTypeConfirm?"text":"password"},startSignIn(){this.$store.dispatch(c.Z.LOGIN,this.loginData).then((t=>{"success"===t.status?this.$router.push("/"):this.$toaster.error(t.message)}))},changeInput(t,e){this.loginData[t]=e}}},p=u,d=s(1001),m=(0,d.Z)(p,a,n,!1,null,"6c78d4d7",null),h=m.exports}}]);
//# sourceMappingURL=login.03b47dd8.js.map