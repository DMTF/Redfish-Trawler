(function(){"use strict";var e={9475:function(e,t,a){var o=a(9242),s=(a(2166),a(3396));const n={class:"container-fluid"},i={class:"row"},l={class:"container"},c={class:"row"},r={class:"col-sm-2"},d={class:"col"},u={key:2},p={key:3};function v(e,t,a,o,v,_){const b=(0,s.up)("StatusToast"),h=(0,s.up)("SideBar"),m=(0,s.up)("TopBar"),g=(0,s.up)("LocationBar"),y=(0,s.up)("PageChassis"),f=(0,s.up)("PageUserManagement");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s.Wm)(b),(0,s._)("div",n,[(0,s._)("div",i,[(0,s._)("div",l,[(0,s._)("div",c,[(0,s._)("div",r,[(0,s.Wm)(h,{onChangeMain:o.changeMain},null,8,["onChangeMain"])]),(0,s._)("div",d,[(0,s.Wm)(m,{onChangeService:o.changeService},null,8,["onChangeService"]),(0,s.Wm)(g),((0,s.wg)(),(0,s.iD)("div",{class:"jumbotron hello",key:o.reset_me},["pagechassis"==o.current_page&&"unknown"!=o.current_service?((0,s.wg)(),(0,s.j4)(y,{key:0,service:o.current_service},null,8,["service"])):"pageusermanagement"==o.current_page&&"unknown"!=o.current_service?((0,s.wg)(),(0,s.j4)(f,{key:1,service:o.current_service},null,8,["service"])):o.current_service&&"unknown"!==o.current_service?((0,s.wg)(),(0,s.iD)("div",p," Select from the sidebar to continue ")):((0,s.wg)(),(0,s.iD)("div",u," Add or select a service to Continue "))]))])])])])])],64)}var _=a(7139);const b={class:"toasttable",tabindex:"-1","aria-hidden":"true"};function h(e,t,a,o,n,i){return(0,s.wg)(),(0,s.iD)("div",b,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(o.contents,(e=>((0,s.wg)(),(0,s.iD)("div",{class:"toastitem",key:e},(0,_.zw)(e),1)))),128))])}var m=a(4870),g={name:"StatusToast",props:[],setup(e){const t=(0,m.iH)([]);return{contents:t}}},y=a(89);const f=(0,y.Z)(g,[["render",h],["__scopeId","data-v-7c1699e7"]]);var w=f,k=a.p+"../../static/img/redfish.cb27f9db.png";const C=e=>((0,s.dD)("data-v-4eb4bbd8"),e=e(),(0,s.Cn)(),e),S={class:"sidebar"},D={class:"list-group"},A=C((()=>(0,s._)("img",{class:"list-group-item",id:"logo",alt:"Redfish logo",src:k},null,-1)));function T(e,t,a,o,n,i){return(0,s.wg)(),(0,s.iD)("div",S,[(0,s._)("div",D,[A,(0,s._)("a",{href:"#",onClick:t[0]||(t[0]=t=>e.$emit("changeMain","pagechassis")),class:"list-group-item list-group-item-action"},"Chassis"),(0,s._)("a",{href:"#",onClick:t[1]||(t[1]=t=>e.$emit("changeMain","pageusermanagement")),class:"list-group-item list-group-item-action"},"User Management")])])}var H={name:"SideBar",setup(){(0,s.Bz)(["changeMain"])}};const R=(0,y.Z)(H,[["render",T],["__scopeId","data-v-4eb4bbd8"]]);var j=R;const z=e=>((0,s.dD)("data-v-bdb60f70"),e=e(),(0,s.Cn)(),e),L={class:"bar d-flex"},P=z((()=>(0,s._)("option",{disabled:""},"Select a Service",-1))),M=["value"],O=z((()=>(0,s._)("button",{type:"button",class:"btn btn-primary btn-sm","data-bs-toggle":"modal","data-bs-target":"#addServiceModal"}," Add Service ",-1))),N={class:"modal fade",id:"addServiceModal",tabindex:"-1","aria-labelledby":"addServiceLabel","aria-hidden":"true"},U={class:"modal-dialog"},Y={class:"modal-content"},E=z((()=>(0,s._)("div",{class:"modal-header"},[(0,s._)("h5",{class:"modal-title",id:"addServiceLabel"},"Add a service"),(0,s._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1))),I={class:"modal-body"},x={role:"form"},K=["for"],V=["id","onUpdate:modelValue"],Z=["value"],G=["id","onUpdate:modelValue"],W={class:"modal-footer"},B=z((()=>(0,s._)("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"Close",-1)));function J(e,t,a,n,i,l){return(0,s.wg)(),(0,s.iD)("div",L,[(0,s.wy)((0,s._)("select",{class:"form-select",id:"current_service",onChange:t[0]||(t[0]=t=>e.$emit("changeService",n.current_service)),"onUpdate:modelValue":t[1]||(t[1]=e=>n.current_service=e)},[P,((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(n.services,((e,t)=>((0,s.wg)(),(0,s.iD)("option",{key:t,value:t},(0,_.zw)(t)+" - "+(0,_.zw)(e),9,M)))),128))],544),[[o.bM,n.current_service]]),O,(0,s._)("div",N,[(0,s._)("div",U,[(0,s._)("div",Y,[E,(0,s._)("div",I,[(0,s._)("form",x,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(n.service_info,((t,a)=>((0,s.wg)(),(0,s.iD)("div",{class:"mb-3",key:t.option},[(0,s._)("label",{for:a+"id",class:"form-label"},(0,_.zw)(t.option),9,K),"object"==typeof t.value?(0,s.wy)(((0,s.wg)(),(0,s.iD)("select",{key:e.val,class:"form-select",id:a+"id","onUpdate:modelValue":e=>n.new_service_info[a]=e},[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(t.value,(e=>((0,s.wg)(),(0,s.iD)("option",{key:e,value:e},(0,_.zw)(e),9,Z)))),128))],8,V)),[[o.bM,n.new_service_info[a]]]):(0,s.wy)(((0,s.wg)(),(0,s.iD)("input",{key:1,id:a+"id",type:"text",class:"form-control","onUpdate:modelValue":e=>n.new_service_info[a]=e,placeholder:""},null,8,G)),[[o.nr,n.new_service_info[a]]])])))),128))])]),(0,s._)("div",W,[B,(0,s._)("button",{type:"button",class:"btn btn-primary",onClick:t[2]||(t[2]=(...e)=>n.addService&&n.addService(...e)),"data-bs-dismiss":"modal"},"Add service")])])])]),(0,s._)("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:t[3]||(t[3]=(...e)=>n.delService&&n.delService(...e))},"Delete Service"),(0,s._)("button",{type:"button",class:"btn btn-danger btn-sm",onClick:t[4]||(t[4]=(...e)=>n.closeService&&n.closeService(...e))},"Close Service")])}var $={name:"TopBar",setup(){const e=(0,m.iH)([]),t=(0,m.iH)(""),a=(0,m.iH)({nickname:{option:"Nickname (optional)",value:""},hostname:{option:"Hostname",value:"-"},username:{option:"Username",value:"-"},password:{option:"Password",value:""},logintype:{option:"LoginType",value:["Basic","Session","None"]}}),o=(0,m.iH)({nickname:"",hostname:"-",username:"-",password:"",logintype:"Basic"});function s(t){fetch("http://127.0.0.1:5000/services").then((e=>e.json())).then((t=>e.value=t.available))}function n(t){console.log(o),fetch("http://127.0.0.1:5000/add-service",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o.value)}).then((e=>e.json())).then((t=>e.value=t.available))}function i(a){console.log(t.value),console.log(JSON.stringify({hostname:t.value})),fetch("http://127.0.0.1:5000/delete-service",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({hostname:t.value})}).then((e=>e.json())).then((t=>e.value=t.available))}function l(t){fetch("http://127.0.0.1:5000/close-service",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({hostname:this.current_service.value})}).then((e=>e.json())).then((t=>e.value=t.available))}return s(),{services:e,current_service:t,service_info:a,new_service_info:o,addService:n,delService:i,closeService:l,pollServices:s}}};const F=(0,y.Z)($,[["render",J],["__scopeId","data-v-bdb60f70"]]);var q=F;const Q={class:"bar"},X=(0,s._)("nav",{"aria-label":"breadcrumb"},[(0,s._)("ol",{class:"breadcrumb"},[(0,s._)("li",{class:"breadcrumb-item active"},"Service Name"),(0,s._)("li",{class:"breadcrumb-item active","aria-current":"page"},"...")])],-1),ee=[X];function te(e,t,a,o,n,i){return(0,s.wg)(),(0,s.iD)("div",Q,ee)}var ae={name:"LocationBar"};const oe=(0,y.Z)(ae,[["render",te]]);var se=oe;const ne={class:"basic"};function ie(e,t,a,o,n,i){const l=(0,s.up)("TableChassis"),c=(0,s.up)("ResourceChassis");return(0,s.wg)(),(0,s.iD)("div",ne,["table"===o.view?((0,s.wg)(),(0,s.j4)(l,{key:0,service:a.service,payload:o.page_payload["_chassis"],onGotochassis:t[0]||(t[0]=e=>o.gotoResourceChassis(e))},null,8,["service","payload"])):(0,s.kq)("",!0),"resource"===o.view?((0,s.wg)(),(0,s.j4)(c,{key:1,payload:o.page_payload},null,8,["payload"])):(0,s.kq)("",!0)])}const le={class:"title"},ce={class:"basic"},re={class:"table"},de=(0,s._)("thead",null,[(0,s._)("tr",null,[(0,s._)("th",{scope:"col-4"},"Name"),(0,s._)("th",{scope:"col-4"},"ChassisType"),(0,s._)("th",{scope:"col-2"},"PowerState"),(0,s._)("th",{scope:"col-2"},"Health"),(0,s._)("th",{scope:"col-2"},"Action")])],-1),ue=["onClick"];function pe(e,t,a,o,n,i){const l=(0,s.up)("ActionResetChassis");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s._)("div",le,(0,_.zw)(o.title),1),(0,s._)("div",ce,[(0,s._)("table",re,[de,(0,s._)("tbody",null,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(o.all_elements,(t=>((0,s.wg)(),(0,s.iD)("tr",{key:t},[(0,s._)("td",null,[(0,s._)("a",{href:"#",onClick:a=>e.$emit("gotochassis",t.Id)},(0,_.zw)(t.Name)+" ("+(0,_.zw)(t.Id)+")",9,ue)]),(0,s._)("td",null,(0,_.zw)(t.ChassisType),1),(0,s._)("td",null,(0,_.zw)(t.PowerState),1),(0,s._)("td",null,(0,_.zw)(t.Status?t.Status.Health:"n/a"),1),(0,s._)("td",null,[(0,s.Wm)(l,{service:a.service,target_id:t.Id},null,8,["service","target_id"])])])))),128))])])])],64)}const ve=e=>((0,s.dD)("data-v-448c06fe"),e=e(),(0,s.Cn)(),e),_e=ve((()=>(0,s._)("button",{type:"button",class:"btn btn-primary btn-sm","data-bs-toggle":"modal","data-bs-target":"#resetChassisModal"}," Reset ",-1))),be={class:"modal fade",id:"resetChassisModal",tabindex:"-1","aria-labelledby":"resetChassisLabel","aria-hidden":"true"},he={class:"modal-dialog"},me={class:"modal-content"},ge=ve((()=>(0,s._)("div",{class:"modal-header"},[(0,s._)("h5",{class:"modal-title",id:"resetChassisLabel"},"Reset Chassis"),(0,s._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1))),ye=ve((()=>(0,s._)("div",{class:"modal-body"}," Are you sure you want to reset this Chassis? ",-1))),fe={class:"modal-footer"},we=ve((()=>(0,s._)("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"Cancel",-1)));function ke(e,t,a,o,n,i){return(0,s.wg)(),(0,s.iD)(s.HY,null,[_e,(0,s._)("div",be,[(0,s._)("div",he,[(0,s._)("div",me,[ge,ye,(0,s._)("div",fe,[(0,s._)("button",{type:"button",class:"btn btn-danger",onClick:t[0]||(t[0]=(...e)=>o.resetChassis&&o.resetChassis(...e)),"data-bs-dismiss":"modal"},"Yes"),we])])])])],64)}var Ce={name:"ActionResetChassis",props:["service","target_id"],data(){return{target_value:"Chassis"}},watch:{target_id:function(e){this.target_value=e,print(this.target_value),print(this.target_id),print(this.service)}},setup(e){const t=(0,m.iH)({}),a=(0,m.iH)({});function o(t){console.log("RESETTING NOW"),fetch("http://127.0.0.1:5000/redfish/v1/Chassis/"+e.target_id+"/Chassis.Reset?service_name="+e.service,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({})}).then((e=>alert([e.status,e.statusText,"\n"].join(" "))))}return{action_info:t,action_parameters:a,resetChassis:o}}};const Se=(0,y.Z)(Ce,[["render",ke],["__scopeId","data-v-448c06fe"]]);var De=Se,Ae={name:"TableChassis",props:["service","payload","keys"],components:{ActionResetChassis:De},watch:{payload(){this.all_elements=this.payload}},setup(e){const t=(0,m.iH)("Collection"),a=(0,m.iH)(e.payload),o=(0,m.iH)(e.keys);return{title:t,all_elements:a,all_keys:o}}};const Te=(0,y.Z)(Ae,[["render",pe]]);var He=Te;const Re={class:"basic"},je={class:"container"},ze={class:"row"},Le={class:"col"},Pe={class:"title"},Me={class:"propertyblock"},Oe=(0,s._)("div",{class:"title"}," Temperatures ",-1),Ne={class:"table"},Ue=(0,s._)("thead",null,[(0,s._)("tr",null,[(0,s._)("th",{scope:"col-4"},"Name"),(0,s._)("th",{scope:"col-4"},"Reading")])],-1),Ye={class:"col"},Ee=(0,s._)("div",{class:"title"}," Fans ",-1),Ie={class:"table"},xe=(0,s._)("thead",null,[(0,s._)("tr",null,[(0,s._)("th",{scope:"col-4"},"Name"),(0,s._)("th",{scope:"col-4"},"Reading")])],-1);function Ke(e,t,a,o,n,i){return(0,s.wg)(),(0,s.iD)("div",Re,[(0,s._)("div",je,[(0,s._)("div",ze,[(0,s._)("div",Le,[(0,s._)("div",Pe,(0,_.zw)(o.title),1),(0,s._)("div",Me,[((0,s.wg)(),(0,s.iD)(s.HY,null,(0,s.Ko)(["Name","Id","SerialNumber","SKU","Model"],(e=>(0,s._)("div",{key:e},(0,_.zw)(e)+": "+(0,_.zw)(o.resource[e]),1))),64)),(0,s._)("div",null," Health: "+(0,_.zw)(o.resource.Status?o.resource.Status.Health:"n/a"),1),(0,s._)("div",null," PowerState: "+(0,_.zw)(o.resource["PowerState"]),1),(0,s._)("div",null," LocationIndicator: "+(0,_.zw)(o.resource["LocationIndicator"]),1)]),Oe,(0,s._)("table",Ne,[Ue,(0,s._)("tbody",null,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(o.temps,(e=>((0,s.wg)(),(0,s.iD)("tr",{key:e},[(0,s._)("td",null,(0,_.zw)(e["MemberId"])+" ("+(0,_.zw)(e["Name"])+")",1),(0,s._)("td",null,(0,_.zw)(e["ReadingCelsius"])+" C* ",1)])))),128))])])]),(0,s._)("div",Ye,[Ee,(0,s._)("table",Ie,[xe,(0,s._)("tbody",null,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(o.fans,(e=>((0,s.wg)(),(0,s.iD)("tr",{key:e},[(0,s._)("td",null,(0,_.zw)(e["MemberId"])+" ("+(0,_.zw)(e["Name"])+")",1),(0,s._)("td",null,(0,_.zw)(e["Reading"])+" "+(0,_.zw)(e["ReadingUnits"]),1)])))),128))])])])])])])}var Ve={name:"ResourceChassis",components:{},props:["payload","keys"],watch:{payload(){this.title="Chassis",this.resource=this.payload["_payload"],this.fans=this.payload["_fans"],this.temps=this.payload["_temperatures"],this.poweredby=this.payload["_poweredby"],console.log(this.fans),console.log(this.temps)}},setup(e){console.log(e.payload),console.log(e.keys);const t=(0,m.iH)("Chassis"),a=(0,m.iH)(e.payload["_payload"]),o=(0,m.iH)(e.payload["_fans"]),s=(0,m.iH)(e.payload["_temperatures"]),n=(0,m.iH)(e.payload["_poweredby"]);return{title:t,resource:a,fans:o,temps:s,poweredby:n}}};const Ze=(0,y.Z)(Ve,[["render",Ke]]);var Ge=Ze,We={name:"PageChassis",components:{TableChassis:He,ResourceChassis:Ge},props:["service"],watch:{},setup(e){const t=(0,m.iH)({}),a=(0,m.iH)("collection");function o(){fetch("http://127.0.0.1:5000/page-view?service_name="+e.service+"&page_name=chassis",{method:"GET",headers:{"Content-Type":"application/json","login-info":"get-from-here"}}).then((e=>e.json())).then((e=>t.value=e)),a.value="table"}function s(o){console.log("GOTO!!!"),console.log(o),fetch("http://127.0.0.1:5000/page-view?service_name="+e.service+"&page_name=chassis&chassis_name="+o,{method:"GET",headers:{"Content-Type":"application/json","login-info":"get-from-here"}}).then((e=>e.json())).then((e=>t.value=e)),a.value="resource"}return o(),{page_payload:t,view:a,gotoTableChassis:o,gotoResourceChassis:s}}};const Be=(0,y.Z)(We,[["render",ie]]);var Je=Be;const $e={class:"basic"},Fe={key:0},qe={class:"title"},Qe={key:0,class:"title"},Xe={class:"propertyblock"};function et(e,t,a,o,n,i){const l=(0,s.up)("ActionPostAccount"),c=(0,s.up)("TableAccounts"),r=(0,s.up)("TableRoles"),d=(0,s.up)("ActionPatchAccountService"),u=(0,s.up)("ResourceGeneric");return(0,s.wg)(),(0,s.iD)("div",$e,["table"===o.view?((0,s.wg)(),(0,s.iD)("div",Fe,[(0,s._)("div",qe,[(0,s.Uk)("Accounts "),(0,s.Wm)(l,{service:a.service},null,8,["service"])]),(0,s.Wm)(c,{payload:o.page_payload["_accounts"],onGotoaccount:t[0]||(t[0]=e=>o.gotoResource(e))},null,8,["payload"]),(0,s.Wm)(r,{payload:o.page_payload["_roles"],onGotorole:t[1]||(t[1]=e=>o.gotoResource(e))},null,8,["payload"]),"table"===o.view?((0,s.wg)(),(0,s.iD)("div",Qe,[(0,s.Uk)("Properties "),(0,s.Wm)(d,{service:a.service},null,8,["service"])])):(0,s.kq)("",!0),(0,s._)("div",Xe,[((0,s.wg)(),(0,s.iD)(s.HY,null,(0,s.Ko)(["ServiceEnabled","AuthFailureLoggingThreshold","MinPasswordLength","AccountLockoutDuration","AccountLockoutThreshold","AccountLockoutCounterResetAfter"],(e=>(0,s._)("div",{key:e},(0,_.zw)(e)+": "+(0,_.zw)(o.page_payload["_payload"][e]),1))),64))])])):(0,s.kq)("",!0),"resource"===o.view?((0,s.wg)(),(0,s.j4)(u,{key:1,service:a.service,deleteable:!0,payload:o.page_payload},null,8,["service","payload"])):(0,s.kq)("",!0)])}const tt={class:"basic"},at={class:"table"},ot=(0,s._)("thead",null,[(0,s._)("tr",null,[(0,s._)("th",{scope:"col-4"},"Name"),(0,s._)("th",{scope:"col-4"},"Role"),(0,s._)("th",{scope:"col-2"},"Locked"),(0,s._)("th",{scope:"col-2"},"Enabled"),(0,s._)("th",{scope:"col-2"},"Account Types")])],-1),st=["onClick"];function nt(e,t,a,o,n,i){return(0,s.wg)(),(0,s.iD)("div",tt,[(0,s._)("table",at,[ot,(0,s._)("tbody",null,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(o.all_elements,(t=>((0,s.wg)(),(0,s.iD)("tr",{key:t},[(0,s._)("td",null,[(0,s._)("a",{href:"#",onClick:a=>e.$emit("gotoaccount",t["@odata.id"])},(0,_.zw)(t.UserName),9,st)]),(0,s._)("td",null,(0,_.zw)(t.RoleId),1),(0,s._)("td",null,(0,_.zw)(t.Locked),1),(0,s._)("td",null,(0,_.zw)(t.Enabled),1),(0,s._)("td",null,(0,_.zw)(t.AccountTypes.join(", ")),1)])))),128))])])])}var it={name:"TableAccounts",props:["payload","keys"],watch:{payload(){this.all_elements=this.payload}},setup(e){console.log(e.payload),console.log(e.keys);const t=(0,m.iH)("Accounts"),a=(0,m.iH)(e.payload),o=(0,m.iH)(e.keys);return{title:t,all_elements:a,all_keys:o}}};const lt=(0,y.Z)(it,[["render",nt]]);var ct=lt;const rt={class:"title"},dt={class:"basic"},ut={class:"table"},pt=(0,s._)("thead",null,[(0,s._)("tr",null,[(0,s._)("th",{scope:"col-2"},"Name"),(0,s._)("th",{scope:"col-8"},"Assigned Privileges")])],-1),vt=["onClick"];function _t(e,t,a,o,n,i){return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s._)("div",rt,(0,_.zw)(o.title),1),(0,s._)("div",dt,[(0,s._)("table",ut,[pt,(0,s._)("tbody",null,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(o.all_elements,(t=>((0,s.wg)(),(0,s.iD)("tr",{key:t},[(0,s._)("td",null,[(0,s._)("a",{href:"#",onClick:a=>e.$emit("gotorole",t["@odata.id"])},(0,_.zw)(t.Id),9,vt)]),(0,s._)("td",null,(0,_.zw)(t.AssignedPrivileges.join(", ")),1)])))),128))])])])],64)}var bt={name:"TableRoles",props:["payload","keys"],watch:{payload(){this.all_elements=this.payload}},setup(e){console.log(e.payload),console.log(e.keys);const t=(0,m.iH)("Roles"),a=(0,m.iH)(e.payload),o=(0,m.iH)(e.keys);return{title:t,all_elements:a,all_keys:o}}};const ht=(0,y.Z)(bt,[["render",_t]]);var mt=ht;const gt=e=>((0,s.dD)("data-v-183a9ab2"),e=e(),(0,s.Cn)(),e),yt=gt((()=>(0,s._)("a",{href:"#","data-bs-toggle":"modal","data-bs-target":"#editAccountServiceModal"}," Edit ",-1))),ft={class:"modal fade",id:"editAccountServiceModal",tabindex:"-1","aria-labelledby":"editAccountServiceLabel","aria-hidden":"true"},wt={class:"modal-dialog"},kt={class:"modal-content"},Ct=gt((()=>(0,s._)("div",{class:"modal-header"},[(0,s._)("h5",{class:"modal-title",id:"editAccountServiceLabel"},"Reset Chassis"),(0,s._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1))),St={class:"modal-body"},Dt=["for"],At=["id","onUpdate:modelValue"],Tt=["value"],Ht=["id","onUpdate:modelValue"],Rt=gt((()=>(0,s._)("option",{value:!0},"True",-1))),jt=gt((()=>(0,s._)("option",{value:!1},"False",-1))),zt=[Rt,jt],Lt=["id","onUpdate:modelValue"],Pt={class:"modal-footer"},Mt=gt((()=>(0,s._)("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"Cancel",-1)));function Ot(e,t,a,n,i,l){return(0,s.wg)(),(0,s.iD)(s.HY,null,[yt,(0,s._)("div",ft,[(0,s._)("div",wt,[(0,s._)("div",kt,[Ct,(0,s._)("div",St,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(n.action_info,((e,t)=>((0,s.wg)(),(0,s.iD)("div",{class:"mb-3",key:e.option},[(0,s._)("label",{for:t+"id",class:"form-label"},(0,_.zw)(e.option),9,Dt),"object"==typeof e.value?(0,s.wy)(((0,s.wg)(),(0,s.iD)("select",{key:0,class:"form-select",id:t+"id","onUpdate:modelValue":e=>n.action_parameters[t]=e},[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.value,(e=>((0,s.wg)(),(0,s.iD)("option",{key:e,value:e},(0,_.zw)(e),9,Tt)))),128))],8,At)),[[o.bM,n.action_parameters[t]]]):"boolean"==typeof e.value?(0,s.wy)(((0,s.wg)(),(0,s.iD)("select",{key:1,class:"form-select",id:t+"id","onUpdate:modelValue":e=>n.action_parameters[t]=e},zt,8,Ht)),[[o.bM,n.action_parameters[t]]]):(0,s.wy)(((0,s.wg)(),(0,s.iD)("input",{key:2,id:t+"id",type:"text",class:"form-control","onUpdate:modelValue":e=>n.action_parameters[t]=e,placeholder:""},null,8,Lt)),[[o.nr,n.action_parameters[t]]])])))),128))]),(0,s._)("div",Pt,[(0,s._)("button",{type:"button",class:"btn btn-danger",onClick:t[0]||(t[0]=(...e)=>n.editAccountService&&n.editAccountService(...e)),"data-bs-dismiss":"modal"},"Yes"),Mt])])])])],64)}var Nt={name:"ActionPatchAccountService",props:["service","target_id"],data(){return{target_value:"Chassis"}},watch:{target_id:function(e){this.target_value=e,print(this.target_value),print(this.target_id),print(this.service)}},setup(e){const t=(0,m.iH)({ServiceEnabled:{option:"Service Enabled",value:!0},AuthFailureLoggingThreshold:{option:"AuthFailureLoggingThreshold",value:0},MinPasswordLength:{option:"MinPasswordLength",value:0},AccountLockoutDuration:{option:"AccountLockoutDuration",value:0},AccountLockoutThreshold:{option:"AccountLockoutThreshold",value:0},AccountLockoutCounterResetAfter:{option:"AccountLockoutCounterResetAfter",value:0}}),a=(0,m.iH)({});function o(t){console.log("PATCH NOW"),fetch("http://127.0.0.1:5000/redfish/v1/AccountService?service_name="+e.service,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(a.value)}).then((e=>alert([e.status,e.statusText,"\n"].join(" "))))}return{action_info:t,action_parameters:a,editAccountService:o}}};const Ut=(0,y.Z)(Nt,[["render",Ot],["__scopeId","data-v-183a9ab2"]]);var Yt=Ut;const Et=e=>((0,s.dD)("data-v-055fe24b"),e=e(),(0,s.Cn)(),e),It=Et((()=>(0,s._)("a",{href:"#","data-bs-toggle":"modal","data-bs-target":"#postAccountModal"}," Add New ",-1))),xt={class:"modal fade",id:"postAccountModal",tabindex:"-1","aria-labelledby":"postAccountLabel","aria-hidden":"true"},Kt={class:"modal-dialog"},Vt={class:"modal-content"},Zt=Et((()=>(0,s._)("div",{class:"modal-header"},[(0,s._)("h5",{class:"modal-title",id:"postAccountLabel"},"Reset Chassis"),(0,s._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1))),Gt={class:"modal-body"},Wt=["for"],Bt=["id","onUpdate:modelValue"],Jt=["value"],$t=["id","onUpdate:modelValue"],Ft=Et((()=>(0,s._)("option",{value:!0},"True",-1))),qt=Et((()=>(0,s._)("option",{value:!1},"False",-1))),Qt=[Ft,qt],Xt=["id","onUpdate:modelValue"],ea={class:"modal-footer"},ta=Et((()=>(0,s._)("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"Cancel",-1)));function aa(e,t,a,n,i,l){return(0,s.wg)(),(0,s.iD)(s.HY,null,[It,(0,s._)("div",xt,[(0,s._)("div",Kt,[(0,s._)("div",Vt,[Zt,(0,s._)("div",Gt,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(n.action_info,((e,t)=>((0,s.wg)(),(0,s.iD)("div",{class:"mb-3",key:e.option},[(0,s._)("label",{for:t+"id",class:"form-label"},(0,_.zw)(e.option),9,Wt),"object"==typeof e.value?(0,s.wy)(((0,s.wg)(),(0,s.iD)("select",{key:0,class:"form-select",id:t+"id","onUpdate:modelValue":e=>n.action_parameters[t]=e},[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.value,(e=>((0,s.wg)(),(0,s.iD)("option",{key:e,value:e},(0,_.zw)(e),9,Jt)))),128))],8,Bt)),[[o.bM,n.action_parameters[t]]]):"boolean"==typeof e.value?(0,s.wy)(((0,s.wg)(),(0,s.iD)("select",{key:1,class:"form-select",id:t+"id","onUpdate:modelValue":e=>n.action_parameters[t]=e},Qt,8,$t)),[[o.bM,n.action_parameters[t]]]):(0,s.wy)(((0,s.wg)(),(0,s.iD)("input",{key:2,id:t+"id",type:"text",class:"form-control","onUpdate:modelValue":e=>n.action_parameters[t]=e,placeholder:""},null,8,Xt)),[[o.nr,n.action_parameters[t]]])])))),128))]),(0,s._)("div",ea,[(0,s._)("button",{type:"button",class:"btn btn-danger",onClick:t[0]||(t[0]=(...e)=>n.postAccount&&n.postAccount(...e)),"data-bs-dismiss":"modal"},"Yes"),ta])])])])],64)}var oa={name:"ActionPostAccount",props:["service","target_id"],data(){return{target_value:"Chassis"}},watch:{target_id:function(e){this.target_value=e,print(this.target_value),print(this.target_id),print(this.service)}},setup(e){const t=(0,m.iH)({Enabled:{option:"Enabled",value:!0},Locked:{option:"Locked",value:!0},Description:{option:"Description",value:0},UserName:{option:"UserName",value:0},Password:{option:"Password",value:0},RoleId:{option:"RoleId",value:0}}),a=(0,m.iH)({});function o(t){console.log("POST NOW"),fetch("http://127.0.0.1:5000/redfish/v1/AccountService/Accounts?service_name="+e.service,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a.value)}).then((e=>alert([e.status,e.statusText,"\n"].join(" "))))}return{action_info:t,action_parameters:a,postAccount:o}}};const sa=(0,y.Z)(oa,[["render",aa],["__scopeId","data-v-055fe24b"]]);var na=sa;const ia={class:"basic"},la={class:"container"},ca={class:"row"},ra={class:"col"},da={class:"title"},ua={class:"propertyblock"};function pa(e,t,a,o,n,i){const l=(0,s.up)("ActionDeleteResource");return(0,s.wg)(),(0,s.iD)("div",ia,[(0,s._)("div",la,[(0,s._)("div",ca,[(0,s._)("div",ra,[(0,s._)("div",da,[(0,s.Uk)((0,_.zw)(o.title)+" ",1),a.deleteable?((0,s.wg)(),(0,s.j4)(l,{key:0,target_id:o.resource["@odata.id"],service:a.service},null,8,["target_id","service"])):(0,s.kq)("",!0)]),(0,s._)("div",ua,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(o.resource,((e,t)=>((0,s.wg)(),(0,s.iD)("div",{key:e},(0,_.zw)(t)+": "+(0,_.zw)(e),1)))),128))])])])])])}const va=e=>((0,s.dD)("data-v-50ae109b"),e=e(),(0,s.Cn)(),e),_a=va((()=>(0,s._)("button",{type:"button",class:"btn btn-primary btn-sm","data-bs-toggle":"modal","data-bs-target":"#deleteResourceModal"}," Reset ",-1))),ba={class:"modal fade",id:"deleteResourceModal",tabindex:"-1","aria-labelledby":"deleteResourceLabel","aria-hidden":"true"},ha={class:"modal-dialog"},ma={class:"modal-content"},ga=va((()=>(0,s._)("div",{class:"modal-header"},[(0,s._)("h5",{class:"modal-title",id:"deleteResourceLabel"},"Reset Chassis"),(0,s._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1))),ya=va((()=>(0,s._)("div",{class:"modal-body"}," Are you sure you want to delete this Resource? ",-1))),fa={class:"modal-footer"},wa=va((()=>(0,s._)("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"Cancel",-1)));function ka(e,t,a,o,n,i){return(0,s.wg)(),(0,s.iD)(s.HY,null,[_a,(0,s._)("div",ba,[(0,s._)("div",ha,[(0,s._)("div",ma,[ga,ya,(0,s._)("div",fa,[(0,s._)("button",{type:"button",class:"btn btn-danger",onClick:t[0]||(t[0]=(...e)=>o.deleteResource&&o.deleteResource(...e)),"data-bs-dismiss":"modal"},"Yes"),wa])])])])],64)}var Ca={name:"ActionDeleteResource",props:["service","target_id"],data(){return{target_value:"Chassis"}},watch:{target_id:function(e){this.target_value=e}},setup(e){const t=(0,m.iH)({}),a=(0,m.iH)({});function o(t){console.log("DELETE NOW"),fetch("http://127.0.0.1:5000/redfish/v1/"+e.target_id+"?service_name="+e.service,{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify({})}).then((e=>alert([e.status,e.statusText,"\n"].join(" "))))}return{action_info:t,action_parameters:a,deleteResource:o}}};const Sa=(0,y.Z)(Ca,[["render",ka],["__scopeId","data-v-50ae109b"]]);var Da=Sa,Aa={name:"ResourceGeneric",components:{ActionDeleteResource:Da},props:["service","payload","keys","deleteable"],watch:{payload(){this.title="ResourceGeneric",this.resource=this.payload["_payload"]}},setup(e){console.log(e.payload),console.log(e.keys);const t=(0,m.iH)("Resource"),a=(0,m.iH)(e.payload["_payload"]);return{title:t,resource:a}}};const Ta=(0,y.Z)(Aa,[["render",pa]]);var Ha=Ta,Ra={name:"PageUserManagement",components:{TableAccounts:ct,TableRoles:mt,ActionPatchAccountService:Yt,ActionPostAccount:na,ResourceGeneric:Ha},props:["service"],watch:{},setup(e){const t=(0,m.iH)({_payload:{}}),a=(0,m.iH)("table");function o(){fetch("http://127.0.0.1:5000/page-view?service_name="+e.service+"&page_name=usermanagement",{method:"GET",headers:{"Content-Type":"application/json","login-info":"get-from-here"}}).then((e=>e.json())).then((e=>t.value=e)),a.value="table"}function s(o){fetch("http://127.0.0.1:5000"+o+"?service_name="+e.service,{method:"GET",headers:{"Content-Type":"application/json","login-info":"get-from-here"}}).then((e=>e.json())).then((e=>t.value=e)),a.value="resource"}return o(),{page_payload:t,view:a,gotoTable:o,gotoResource:s}}};const ja=(0,y.Z)(Ra,[["render",et]]);var za=ja,La={name:"App",components:{SideBar:j,TopBar:q,LocationBar:se,PageChassis:Je,PageUserManagement:za,StatusToast:w},setup(){const e=(0,m.iH)("main"),t=(0,m.iH)("unknown"),a=(0,m.iH)(0);function o(t){e.value=t,a.value+=1}function s(e){console.log(e),t.value=e,a.value+=1}return{changeMain:o,changeService:s,current_page:e,current_service:t,reset_me:a}}};const Pa=(0,y.Z)(La,[["render",v]]);var Ma=Pa;const Oa=(0,o.ri)(Ma);Oa.config.compilerOptions.delimiters=["${","}$"],Oa.mount("#app")}},t={};function a(o){var s=t[o];if(void 0!==s)return s.exports;var n=t[o]={exports:{}};return e[o].call(n.exports,n,n.exports,a),n.exports}a.m=e,function(){var e=[];a.O=function(t,o,s,n){if(!o){var i=1/0;for(d=0;d<e.length;d++){o=e[d][0],s=e[d][1],n=e[d][2];for(var l=!0,c=0;c<o.length;c++)(!1&n||i>=n)&&Object.keys(a.O).every((function(e){return a.O[e](o[c])}))?o.splice(c--,1):(l=!1,n<i&&(i=n));if(l){e.splice(d--,1);var r=s();void 0!==r&&(t=r)}}return t}n=n||0;for(var d=e.length;d>0&&e[d-1][2]>n;d--)e[d]=e[d-1];e[d]=[o,s,n]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var o in t)a.o(t,o)&&!a.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){a.p=""}(),function(){var e={143:0};a.O.j=function(t){return 0===e[t]};var t=function(t,o){var s,n,i=o[0],l=o[1],c=o[2],r=0;if(i.some((function(t){return 0!==e[t]}))){for(s in l)a.o(l,s)&&(a.m[s]=l[s]);if(c)var d=c(a)}for(t&&t(o);r<i.length;r++)n=i[r],a.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return a.O(d)},o=self["webpackChunkredfish_trawler_frontend"]=self["webpackChunkredfish_trawler_frontend"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=a.O(void 0,[998],(function(){return a(9475)}));o=a.O(o)})();
//# sourceMappingURL=app.b4aa6727.js.map