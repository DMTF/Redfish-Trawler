(function(){"use strict";var e={7186:function(e,a,n){var t=n(9242),s=(n(2166),n(3396));const o={class:"container-fluid"},i={class:"row"},r={class:"container"},l={class:"row"},c={class:"col-sm-2"},u={class:"col"},d={class:"jumbotron hello"};function v(e,a,n,t,v,m){const p=(0,s.up)("SideBar"),h=(0,s.up)("TopBar"),f=(0,s.up)("LocationBar"),b=(0,s.up)("PageChassis"),g=(0,s.up)("MainBlock");return(0,s.wg)(),(0,s.iD)("div",o,[(0,s._)("div",i,[(0,s._)("div",r,[(0,s._)("div",l,[(0,s._)("div",c,[(0,s.Wm)(p,{onChangeMain:t.changeMain},null,8,["onChangeMain"])]),(0,s._)("div",u,[(0,s.Wm)(h,{onChangeService:t.changeService},null,8,["onChangeService"]),(0,s.Wm)(f),(0,s._)("div",d,["chassispage"==t.currentPage&&"unknown"!=t.current_service?((0,s.wg)(),(0,s.j4)(b,{key:0,"chassis-payload":t.current_payload},null,8,["chassis-payload"])):((0,s.wg)(),(0,s.j4)(g,{key:1}))])])])])])])}var m=n.p+"../../static/img/redfish.cb27f9db.png";const p=e=>((0,s.dD)("data-v-73ea8746"),e=e(),(0,s.Cn)(),e),h={class:"sidebar"},f={class:"list-group"},b=p((()=>(0,s._)("img",{class:"list-group-item",id:"logo",alt:"Redfish logo",src:m},null,-1)));function g(e,a,n,t,o,i){return(0,s.wg)(),(0,s.iD)("div",h,[(0,s._)("div",f,[b,(0,s._)("a",{href:"#",onClick:a[0]||(a[0]=a=>e.$emit("changeMain","serviceroot")),class:"list-group-item list-group-item-action"},"Service Information"),(0,s._)("a",{href:"#",onClick:a[1]||(a[1]=a=>e.$emit("changeMain","chassispage")),class:"list-group-item list-group-item-action"},"Chassis"),(0,s._)("a",{href:"#",onClick:a[2]||(a[2]=a=>e.$emit("changeMain","blank")),class:"list-group-item list-group-item-action"},"Managers"),(0,s._)("a",{href:"#",onClick:a[3]||(a[3]=a=>e.$emit("changeMain","blank")),class:"list-group-item list-group-item-action"},"Systems"),(0,s._)("a",{href:"#",onClick:a[4]||(a[4]=a=>e.$emit("changeMain","blank")),class:"list-group-item list-group-item-action"},"User Management"),(0,s._)("a",{href:"#",onClick:a[5]||(a[5]=a=>e.$emit("changeMain","blank")),class:"list-group-item list-group-item-action"},"Logs"),(0,s._)("a",{href:"#",onClick:a[6]||(a[6]=a=>e.$emit("changeMain","blank")),class:"list-group-item list-group-item-action"},"Events")])])}var _={name:"SideBar",setup(){(0,s.Bz)(["changeMain"])}},w=n(89);const y=(0,w.Z)(_,[["render",g],["__scopeId","data-v-73ea8746"]]);var S=y,C=n(7139);const k=e=>((0,s.dD)("data-v-2674e6f5"),e=e(),(0,s.Cn)(),e),M={class:"bar d-flex"},P=k((()=>(0,s._)("option",{disabled:""},"Select a Service",-1))),O=["value"],j=k((()=>(0,s._)("button",{type:"button",class:"btn btn-primary btn-sm","data-bs-toggle":"modal","data-bs-target":"#addServiceModal"}," Add Service ",-1))),T={class:"modal fade",id:"addServiceModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},H={class:"modal-dialog"},B={class:"modal-content"},D=k((()=>(0,s._)("div",{class:"modal-header"},[(0,s._)("h5",{class:"modal-title",id:"exampleModalLabel"},"Add a service"),(0,s._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1))),x={class:"modal-body"},N={role:"form"},$={class:"mb-3"},z=k((()=>(0,s._)("label",{for:"service-nickname",class:"form-label"},"Nickname (optional)",-1))),U={class:"mb-3"},A=k((()=>(0,s._)("label",{for:"service-hostname",class:"form-label"},"Hostname",-1))),L={class:"mb-3"},Z=k((()=>(0,s._)("label",{for:"service-username",class:"form-label"},"Username",-1))),I={class:"mb-3"},V=k((()=>(0,s._)("label",{for:"service-password",class:"form-label"},"Password",-1))),J={class:"modal-footer"},E=k((()=>(0,s._)("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"Close",-1)));function W(e,a,n,o,i,r){return(0,s.wg)(),(0,s.iD)("div",M,[(0,s.wy)((0,s._)("select",{class:"form-select",id:"current_service",onChange:a[0]||(a[0]=a=>e.$emit("changeService",o.current_service)),"onUpdate:modelValue":a[1]||(a[1]=e=>o.current_service=e)},[P,((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(o.services,((e,a)=>((0,s.wg)(),(0,s.iD)("option",{key:a,value:a},(0,C.zw)(a)+" - "+(0,C.zw)(e),9,O)))),128))],544),[[t.bM,o.current_service]]),j,(0,s._)("div",T,[(0,s._)("div",H,[(0,s._)("div",B,[D,(0,s._)("div",x,[(0,s._)("form",N,[(0,s._)("div",$,[z,(0,s.wy)((0,s._)("input",{type:"text",class:"form-control",id:"service-nickname","onUpdate:modelValue":a[2]||(a[2]=e=>o.newnickname=e),placeholder:""},null,512),[[t.nr,o.newnickname]])]),(0,s._)("div",U,[A,(0,s.wy)((0,s._)("input",{type:"text",class:"form-control",id:"service-hostname","onUpdate:modelValue":a[3]||(a[3]=e=>o.newhostname=e),placeholder:"https://hostname"},null,512),[[t.nr,o.newhostname]])]),(0,s._)("div",L,[Z,(0,s.wy)((0,s._)("input",{type:"text",class:"form-control",id:"service-username","onUpdate:modelValue":a[4]||(a[4]=e=>o.newusername=e),placeholder:""},null,512),[[t.nr,o.newusername]])]),(0,s._)("div",I,[V,(0,s.wy)((0,s._)("input",{type:"password",class:"form-control",id:"service-password","onUpdate:modelValue":a[5]||(a[5]=e=>o.newpassword=e),placeholder:""},null,512),[[t.nr,o.newpassword]])])])]),(0,s._)("div",J,[E,(0,s._)("button",{type:"button",class:"btn btn-primary",onClick:a[6]||(a[6]=(...e)=>o.addService&&o.addService(...e)),"data-bs-dismiss":"modal"},"Add service")])])])]),(0,s._)("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:a[7]||(a[7]=(...e)=>o.delService&&o.delService(...e))},"Delete Service"),(0,s._)("button",{type:"button",class:"btn btn-danger btn-sm",onClick:a[8]||(a[8]=(...e)=>o.closeService&&o.closeService(...e))},"Close Service")])}var K=n(4870),R={name:"TopBar",setup(){const e=(0,K.iH)([]),a=(0,K.iH)(""),n=(0,K.iH)(""),t=(0,K.iH)("-"),s=(0,K.iH)("-"),o=(0,K.iH)("");function i(a){fetch("http://127.0.0.1:5000/services").then((e=>e.json())).then((a=>e.value=a.available))}function r(a){fetch("http://127.0.0.1:5000/add-service",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({nickname:n.value,hostname:t.value,username:s.value,password:o.value})}).then((e=>e.json())).then((a=>e.value=a.available))}function l(n){console.log(a.value),console.log(JSON.stringify({hostname:a.value})),fetch("http://127.0.0.1:5000/delete-service",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({hostname:a.value})}).then((e=>e.json())).then((a=>e.value=a.available))}function c(a){fetch("http://127.0.0.1:5000/close-service",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({hostname:this.current_service.value})}).then((e=>e.json())).then((a=>e.value=a.available))}return i(),{services:e,current_service:a,newhostname:t,newnickname:n,newusername:s,newpassword:o,addService:r,delService:l,closeService:c,pollServices:i}}};const Y=(0,w.Z)(R,[["render",W],["__scopeId","data-v-2674e6f5"]]);var F=Y;const G={class:"bar"},q=(0,s._)("nav",{"aria-label":"breadcrumb"},[(0,s._)("ol",{class:"breadcrumb"},[(0,s._)("li",{class:"breadcrumb-item active"},"Service Name"),(0,s._)("li",{class:"breadcrumb-item active","aria-current":"page"},"...")])],-1),Q=[q];function X(e,a,n,t,o,i){return(0,s.wg)(),(0,s.iD)("div",G,Q)}var ee={name:"LocationBar"};const ae=(0,w.Z)(ee,[["render",X]]);var ne=ae;function te(e,a,n,t,o,i){return(0,s.wg)(),(0,s.iD)("div",null," Add and select a service to Continue ")}var se={name:"MainBlock"};const oe=(0,w.Z)(se,[["render",te],["__scopeId","data-v-48680e25"]]);var ie=oe;const re={class:"basic"},le={class:"table"},ce=(0,s._)("thead",null,[(0,s._)("tr",null,[(0,s._)("th",{scope:"col-4"},"Name"),(0,s._)("th",{scope:"col-4"},"ChassisType"),(0,s._)("th",{scope:"col-2"},"PowerState"),(0,s._)("th",{scope:"col-2"},"Health"),(0,s._)("th",{scope:"col-2"},"Action")])],-1),ue=(0,s._)("td",null,[(0,s._)("button",{class:"btn"}," Reset ")],-1);function de(e,a,n,t,o,i){return(0,s.wg)(),(0,s.iD)("div",re,[(0,s._)("table",le,[ce,(0,s._)("tbody",null,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(t.allChassis,(e=>((0,s.wg)(),(0,s.iD)("tr",{key:e},[(0,s._)("td",null,(0,C.zw)(e.Name)+" ("+(0,C.zw)(e.Id)+")",1),(0,s._)("td",null,(0,C.zw)(e.ChassisType),1),(0,s._)("td",null,(0,C.zw)(e.PowerState),1),(0,s._)("td",null,(0,C.zw)(e.Status?e.Status.Health:"n/a"),1),ue])))),128))])])])}var ve={name:"PageChassis",props:["chassisPayload"],watch:{chassisPayload(){this.allChassis=this.chassisPayload}},setup(e){console.log(e.chassisPayload);const a=(0,K.iH)(e.chassisPayload);return{allChassis:a}}};const me=(0,w.Z)(ve,[["render",de]]);var pe=me,he={name:"App",components:{SideBar:S,TopBar:F,LocationBar:ne,MainBlock:ie,PageChassis:pe},setup(){const e=(0,K.iH)("main"),a=(0,K.iH)("unknown"),n=(0,K.iH)([{Name:"name",ChassisType:"a",PowerState:"-",Health:"name"},{Name:"name2",ChassisType:"b",PowerState:"-",Health:"name"},{Name:"name3",ChassisType:"c",PowerState:"-",Health:"name"}]);function t(t){"chassispage"==t&&(console.log(t),console.log(a.value),"unknown"!=a.value&&(fetch("http://127.0.0.1:5000/page-view?service_name="+a.value+"&page_name=chassis",{method:"GET",headers:{"Content-Type":"application/json"}}).then((e=>e.json())).then((e=>n.value=e.data)),console.log(n.value),e.value=t))}function s(e){console.log(e),a.value=e}return{changeMain:t,changeService:s,currentPage:e,current_service:a,current_payload:n}}};const fe=(0,w.Z)(he,[["render",v]]);var be=fe;const ge=(0,t.ri)(be);ge.config.compilerOptions.delimiters=["${","}$"],ge.mount("#app")}},a={};function n(t){var s=a[t];if(void 0!==s)return s.exports;var o=a[t]={exports:{}};return e[t].call(o.exports,o,o.exports,n),o.exports}n.m=e,function(){var e=[];n.O=function(a,t,s,o){if(!t){var i=1/0;for(u=0;u<e.length;u++){t=e[u][0],s=e[u][1],o=e[u][2];for(var r=!0,l=0;l<t.length;l++)(!1&o||i>=o)&&Object.keys(n.O).every((function(e){return n.O[e](t[l])}))?t.splice(l--,1):(r=!1,o<i&&(i=o));if(r){e.splice(u--,1);var c=s();void 0!==c&&(a=c)}}return a}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[t,s,o]}}(),function(){n.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(a,{a:a}),a}}(),function(){n.d=function(e,a){for(var t in a)n.o(a,t)&&!n.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:a[t]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p=""}(),function(){var e={143:0};n.O.j=function(a){return 0===e[a]};var a=function(a,t){var s,o,i=t[0],r=t[1],l=t[2],c=0;if(i.some((function(a){return 0!==e[a]}))){for(s in r)n.o(r,s)&&(n.m[s]=r[s]);if(l)var u=l(n)}for(a&&a(t);c<i.length;c++)o=i[c],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(u)},t=self["webpackChunkredfish_trawler_frontend"]=self["webpackChunkredfish_trawler_frontend"]||[];t.forEach(a.bind(null,0)),t.push=a.bind(null,t.push.bind(t))}();var t=n.O(void 0,[998],(function(){return n(7186)}));t=n.O(t)})();
//# sourceMappingURL=app.ed1e7ba7.js.map