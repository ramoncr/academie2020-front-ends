(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["register"],{"73cf":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[t._m(0),a("div",{staticClass:"row"},[a("div",{staticClass:"twelve columns"},[a("TextInput",{attrs:{id:"nameInput",placeholder:"John Doe",label:"Your name"},on:{input:t.verifyIfNameIsUnique},model:{value:t.userName,callback:function(e){t.userName=e},expression:"userName"}}),t.touched&&!t.isNameValid?a("div",{staticClass:"color-red"},[t._v(" Name is already in use ")]):t._e()],1)]),a("div",{staticClass:"row"},[a("div",{staticClass:"twelve columns"},[a("button",{attrs:{disabled:!this.isNameValid},on:{click:t.submit}},[t._v("Submit")])])])])},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("div",{staticClass:"twelve columns"},[a("h1",[t._v("Register")]),a("p",[t._v(" Welcome to this cool quiz tool! Please put in you information below to get started with quizing! ")])])])}],n=a("d4ec"),c=a("bee2"),u=a("262e"),o=a("2caf"),r=a("9ab4"),l=a("60a3"),d=a("96f1"),m=a("afbc"),h=a("bc3a"),v=a.n(h),p=function(t){Object(u["a"])(a,t);var e=Object(o["a"])(a);function a(){var t;return Object(n["a"])(this,a),t=e.apply(this,arguments),t.userName="",t.touched=!1,t.isNameValid=!1,t}return Object(c["a"])(a,[{key:"created",value:function(){this.$store.getters["app/isParticipantSet"]&&m["a"].push({path:"questions"})}},{key:"verifyIfNameIsUnique",value:function(){var t=this;if(""===this.userName||this.userName.length<=3)return this.isNameValid=!1,void(this.touched=!1);v.a.post("Participants/IsNameAvailable",{Name:this.userName}).then((function(e){t.touched=!0,t.isNameValid=e.data.isNameAvailable})).catch((function(){t.touched=!0,t.isNameValid=!1}))}},{key:"submit",value:function(){var t=this;v.a.post("Participants",{Name:this.userName}).then((function(e){var a=e.data;t.$store.dispatch("app/setParticipant",a),m["a"].push({path:"questions"})})).catch((function(t){console.error(t)}))}},{key:"message",get:function(){return this.$store.state}},{key:"isTeamCodeSet",get:function(){return!1}}]),a}(l["c"]);p=Object(r["a"])([Object(l["a"])({components:{TextInput:d["a"]}})],p);var f=p,b=f,N=(a("a894"),a("2877")),w=Object(N["a"])(b,i,s,!1,null,null,null);e["default"]=w.exports},a894:function(t,e,a){"use strict";var i=a("db38"),s=a.n(i);s.a},db38:function(t,e,a){}}]);