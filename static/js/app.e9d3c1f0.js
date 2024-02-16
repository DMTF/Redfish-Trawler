(function(){"use strict";var e={1379:function(e,t,a){var o=a(9242),s=(a(2166),a(3396));const n={class:"container-fluid"},i={class:"row"},l={class:"container"},c={class:"row"},r={class:"col-sm-2"},d={class:"col"},u={class:"jumbotron hello"},p={key:2},v={key:3};function _(e,t,a,o,_,h){const g=(0,s.up)("StatusToast"),m=(0,s.up)("SideBar"),b=(0,s.up)("TopBar"),y=(0,s.up)("LocationBar"),f=(0,s.up)("PageChassis"),w=(0,s.up)("PageUserManagement");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s.Wm)(g),(0,s._)("div",n,[(0,s._)("div",i,[(0,s._)("div",l,[(0,s._)("div",c,[(0,s._)("div",r,[(0,s.Wm)(m,{onChangeMain:o.changeMain},null,8,["onChangeMain"])]),(0,s._)("div",d,[(0,s.Wm)(b,{onChangeService:o.changeService},null,8,["onChangeService"]),(0,s.Wm)(y),(0,s._)("div",u,["pagechassis"==o.current_page&&"unknown"!=o.current_service?((0,s.wg)(),(0,s.j4)(f,{key:0,service:o.current_service},null,8,["service"])):"pageusermanagement"==o.current_page&&"unknown"!=o.current_service?((0,s.wg)(),(0,s.j4)(w,{key:1,service:o.current_service},null,8,["service"])):o.current_service&&"unknown"!==o.current_service?((0,s.wg)(),(0,s.iD)("div",v," Select from the sidebar to continue ")):((0,s.wg)(),(0,s.iD)("div",p," Add or select a service to Continue "))])])])])])])],64)}var h=a(7139);const g={class:"toasttable",tabindex:"-1","aria-hidden":"true"};function m(e,t,a,o,n,i){return(0,s.wg)(),(0,s.iD)("div",g,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(o.contents,(e=>((0,s.wg)(),(0,s.iD)("div",{class:"toastitem",key:e},(0,h.zw)(e),1)))),128))])}var b=a(4870),y={name:"StatusToast",props:[],setup(e){const t=(0,b.iH)([]);return{contents:t}}},f=a(89);const w=(0,f.Z)(y,[["render",m],["__scopeId","data-v-2f1e5fbc"]]);var k=w,C=a.p+"../../static/img/redfish.cb27f9db.png";const S=e=>((0,s.dD)("data-v-19ae65ef"),e=e(),(0,s.Cn)(),e),D={class:"sidebar"},T={class:"list-group"},H=S((()=>(0,s._)("img",{class:"list-group-item",id:"logo",alt:"Redfish logo",src:C},null,-1)));function A(e,t,a,o,n,i){return(0,s.wg)(),(0,s.iD)("div",D,[(0,s._)("div",T,[H,(0,s._)("a",{href:"#",onClick:t[0]||(t[0]=t=>e.$emit("changeMain","pageroot")),class:"list-group-item list-group-item-action"},"Service Information"),(0,s._)("a",{href:"#",onClick:t[1]||(t[1]=t=>e.$emit("changeMain","pagechassis")),class:"list-group-item list-group-item-action"},"Chassis"),(0,s._)("a",{href:"#",onClick:t[2]||(t[2]=t=>e.$emit("changeMain","pagemanager")),class:"list-group-item list-group-item-action"},"Managers"),(0,s._)("a",{href:"#",onClick:t[3]||(t[3]=t=>e.$emit("changeMain","pagesystem")),class:"list-group-item list-group-item-action"},"Systems"),(0,s._)("a",{href:"#",onClick:t[4]||(t[4]=t=>e.$emit("changeMain","pageusermanagement")),class:"list-group-item list-group-item-action"},"User Management"),(0,s._)("a",{href:"#",onClick:t[5]||(t[5]=t=>e.$emit("changeMain","pagelog")),class:"list-group-item list-group-item-action"},"Logs"),(0,s._)("a",{href:"#",onClick:t[6]||(t[6]=t=>e.$emit("changeMain","pageevents")),class:"list-group-item list-group-item-action"},"Events"),(0,s._)("a",{href:"#",onClick:t[7]||(t[7]=t=>e.$emit("changeMain","pagetest")),class:"list-group-item list-group-item-action"},"!!TEST!!")])])}var z={name:"SideBar",setup(){(0,s.Bz)(["changeMain"])}};const R=(0,f.Z)(z,[["render",A],["__scopeId","data-v-19ae65ef"]]);var M=R;const j=e=>((0,s.dD)("data-v-370732cd"),e=e(),(0,s.Cn)(),e),L={class:"bar d-flex"},O=j((()=>(0,s._)("option",{disabled:""},"Select a Service",-1))),P=["value"],N=j((()=>(0,s._)("button",{type:"button",class:"btn btn-primary btn-sm","data-bs-toggle":"modal","data-bs-target":"#addServiceModal"}," Add Service ",-1))),Y={class:"modal fade",id:"addServiceModal",tabindex:"-1","aria-labelledby":"addServiceLabel","aria-hidden":"true"},U={class:"modal-dialog"},I={class:"modal-content"},E=j((()=>(0,s._)("div",{class:"modal-header"},[(0,s._)("h5",{class:"modal-title",id:"addServiceLabel"},"Add a service"),(0,s._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1))),K={class:"modal-body"},G={role:"form"},Z=["for"],$=["id","onUpdate:modelValue"],x=["value"],B=["id","onUpdate:modelValue"],V={class:"modal-footer"},W=j((()=>(0,s._)("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"Close",-1)));function F(e,t,a,n,i,l){return(0,s.wg)(),(0,s.iD)("div",L,[(0,s.wy)((0,s._)("select",{class:"form-select",id:"current_service",onChange:t[0]||(t[0]=t=>e.$emit("changeService",n.current_service)),"onUpdate:modelValue":t[1]||(t[1]=e=>n.current_service=e)},[O,((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(n.services,((e,t)=>((0,s.wg)(),(0,s.iD)("option",{key:t,value:t},(0,h.zw)(t)+" - "+(0,h.zw)(e),9,P)))),128))],544),[[o.bM,n.current_service]]),N,(0,s._)("div",Y,[(0,s._)("div",U,[(0,s._)("div",I,[E,(0,s._)("div",K,[(0,s._)("form",G,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(n.service_info,((t,a)=>((0,s.wg)(),(0,s.iD)("div",{class:"mb-3",key:t.option},[(0,s._)("label",{for:a+"id",class:"form-label"},(0,h.zw)(t.option),9,Z),"object"==typeof t.value?(0,s.wy)(((0,s.wg)(),(0,s.iD)("select",{key:e.val,class:"form-select",id:a+"id","onUpdate:modelValue":e=>n.new_service_info[a]=e},[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(t.value,(e=>((0,s.wg)(),(0,s.iD)("option",{key:e,value:e},(0,h.zw)(e),9,x)))),128))],8,$)),[[o.bM,n.new_service_info[a]]]):(0,s.wy)(((0,s.wg)(),(0,s.iD)("input",{key:1,id:a+"id",type:"text",class:"form-control","onUpdate:modelValue":e=>n.new_service_info[a]=e,placeholder:""},null,8,B)),[[o.nr,n.new_service_info[a]]])])))),128))])]),(0,s._)("div",V,[W,(0,s._)("button",{type:"button",class:"btn btn-primary",onClick:t[2]||(t[2]=(...e)=>n.addService&&n.addService(...e)),"data-bs-dismiss":"modal"},"Add service")])])])]),(0,s._)("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:t[3]||(t[3]=(...e)=>n.delService&&n.delService(...e))},"Delete Service"),(0,s._)("button",{type:"button",class:"btn btn-danger btn-sm",onClick:t[4]||(t[4]=(...e)=>n.closeService&&n.closeService(...e))},"Close Service")])}var J={name:"TopBar",setup(){const e=(0,b.iH)([]),t=(0,b.iH)(""),a=(0,b.iH)({nickname:{option:"Nickname (optional)",value:""},hostname:{option:"Hostname",value:"-"},username:{option:"Username",value:"-"},password:{option:"Password",value:""},logintype:{option:"LoginType",value:["Basic","Session","None"]}}),o=(0,b.iH)({nickname:"",hostname:"-",username:"-",password:"",logintype:"Basic"});function s(t){fetch("http://127.0.0.1:5000/services").then((e=>e.json())).then((t=>e.value=t.available))}function n(t){console.log(o),fetch("http://127.0.0.1:5000/add-service",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o.value)}).then((e=>e.json())).then((t=>e.value=t.available))}function i(a){console.log(t.value),console.log(JSON.stringify({hostname:t.value})),fetch("http://127.0.0.1:5000/delete-service",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({hostname:t.value})}).then((e=>e.json())).then((t=>e.value=t.available))}function l(t){fetch("http://127.0.0.1:5000/close-service",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({hostname:this.current_service.value})}).then((e=>e.json())).then((t=>e.value=t.available))}return s(),{services:e,current_service:t,service_info:a,new_service_info:o,addService:n,delService:i,closeService:l,pollServices:s}}};const q=(0,f.Z)(J,[["render",F],["__scopeId","data-v-370732cd"]]);var Q=q;const X={class:"bar"},ee=(0,s._)("nav",{"aria-label":"breadcrumb"},[(0,s._)("ol",{class:"breadcrumb"},[(0,s._)("li",{class:"breadcrumb-item active"},"Service Name"),(0,s._)("li",{class:"breadcrumb-item active","aria-current":"page"},"...")])],-1),te=[ee];function ae(e,t,a,o,n,i){return(0,s.wg)(),(0,s.iD)("div",X,te)}var oe={name:"LocationBar"};const se=(0,f.Z)(oe,[["render",ae]]);var ne=se;const ie={class:"basic"};function le(e,t,a,o,n,i){const l=(0,s.up)("TableChassis"),c=(0,s.up)("ResourceChassis");return(0,s.wg)(),(0,s.iD)("div",ie,["table"===o.view?((0,s.wg)(),(0,s.j4)(l,{key:0,service:a.service,payload:o.page_payload["_chassis"],onGotochassis:t[0]||(t[0]=e=>o.gotoResourceChassis(e))},null,8,["service","payload"])):(0,s.kq)("",!0),"resource"===o.view?((0,s.wg)(),(0,s.j4)(c,{key:1,payload:o.page_payload},null,8,["payload"])):(0,s.kq)("",!0)])}const ce={class:"title"},re={class:"basic"},de={class:"table"},ue=(0,s._)("thead",null,[(0,s._)("tr",null,[(0,s._)("th",{scope:"col-4"},"Name"),(0,s._)("th",{scope:"col-4"},"ChassisType"),(0,s._)("th",{scope:"col-2"},"PowerState"),(0,s._)("th",{scope:"col-2"},"Health"),(0,s._)("th",{scope:"col-2"},"Action")])],-1),pe=["onClick"];function ve(e,t,a,o,n,i){const l=(0,s.up)("ActionResetChassis");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s._)("div",ce,(0,h.zw)(o.title),1),(0,s._)("div",re,[(0,s._)("table",de,[ue,(0,s._)("tbody",null,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(o.all_elements,(t=>((0,s.wg)(),(0,s.iD)("tr",{key:t},[(0,s._)("td",null,[(0,s._)("a",{href:"#",onClick:a=>e.$emit("gotochassis",t.Id)},(0,h.zw)(t.Name)+" ("+(0,h.zw)(t.Id)+")",9,pe)]),(0,s._)("td",null,(0,h.zw)(t.ChassisType),1),(0,s._)("td",null,(0,h.zw)(t.PowerState),1),(0,s._)("td",null,(0,h.zw)(t.Status?t.Status.Health:"n/a"),1),(0,s._)("td",null,[(0,s.Wm)(l,{service:a.service,target_id:t.Id},null,8,["service","target_id"])])])))),128))])])])],64)}const _e=e=>((0,s.dD)("data-v-3253088c"),e=e(),(0,s.Cn)(),e),he=_e((()=>(0,s._)("button",{type:"button",class:"btn btn-primary btn-sm","data-bs-toggle":"modal","data-bs-target":"#resetChassisModal"}," Reset ",-1))),ge={class:"modal fade",id:"resetChassisModal",tabindex:"-1","aria-labelledby":"resetChassisLabel","aria-hidden":"true"},me={class:"modal-dialog"},be={class:"modal-content"},ye=_e((()=>(0,s._)("div",{class:"modal-header"},[(0,s._)("h5",{class:"modal-title",id:"resetChassisLabel"},"Reset Chassis"),(0,s._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1))),fe=_e((()=>(0,s._)("div",{class:"modal-body"}," Are you sure you want to reset this Chassis? ",-1))),we={class:"modal-footer"},ke=_e((()=>(0,s._)("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"Cancel",-1)));function Ce(e,t,a,o,n,i){return(0,s.wg)(),(0,s.iD)(s.HY,null,[he,(0,s._)("div",ge,[(0,s._)("div",me,[(0,s._)("div",be,[ye,fe,(0,s._)("div",we,[(0,s._)("button",{type:"button",class:"btn btn-danger",onClick:t[0]||(t[0]=(...e)=>o.resetChassis&&o.resetChassis(...e)),"data-bs-dismiss":"modal"},"Yes"),ke])])])])],64)}var Se={name:"ActionResetChassis",props:["service","target_id"],data(){return{target_value:"Chassis"}},watch:{target_id:function(e){this.target_value=e,print(this.target_value),print(this.target_id),print(this.service)}},setup(e){const t=(0,b.iH)({}),a=(0,b.iH)({});function o(t){console.log("RESETTING NOW"),fetch("http://127.0.0.1:5000/redfish/v1/Chassis/"+e.target_id+"/Chassis.Reset?service_name="+e.service,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({})}).then((e=>e.json()))}return{action_info:t,action_parameters:a,resetChassis:o}}};const De=(0,f.Z)(Se,[["render",Ce],["__scopeId","data-v-3253088c"]]);var Te=De,He={name:"TableChassis",props:["service","payload","keys"],components:{ActionResetChassis:Te},watch:{payload(){this.all_elements=this.payload}},setup(e){const t=(0,b.iH)("Collection"),a=(0,b.iH)(e.payload),o=(0,b.iH)(e.keys);return{title:t,all_elements:a,all_keys:o}}};const Ae=(0,f.Z)(He,[["render",ve]]);var ze=Ae;const Re={class:"basic"},Me={class:"container"},je={class:"row"},Le={class:"col"},Oe={class:"title"},Pe={class:"propertyblock"},Ne=(0,s._)("div",{class:"title"}," Temperatures ",-1),Ye={class:"table"},Ue=(0,s._)("thead",null,[(0,s._)("tr",null,[(0,s._)("th",{scope:"col-4"},"Name"),(0,s._)("th",{scope:"col-4"},"Reading")])],-1),Ie={class:"col"},Ee=(0,s._)("div",{class:"title"}," Fans ",-1),Ke={class:"table"},Ge=(0,s._)("thead",null,[(0,s._)("tr",null,[(0,s._)("th",{scope:"col-4"},"Name"),(0,s._)("th",{scope:"col-4"},"Reading")])],-1);function Ze(e,t,a,o,n,i){return(0,s.wg)(),(0,s.iD)("div",Re,[(0,s._)("div",Me,[(0,s._)("div",je,[(0,s._)("div",Le,[(0,s._)("div",Oe,(0,h.zw)(o.title),1),(0,s._)("div",Pe,[((0,s.wg)(),(0,s.iD)(s.HY,null,(0,s.Ko)(["Name","Id","SerialNumber","SKU","Model"],(e=>(0,s._)("div",{key:e},(0,h.zw)(e)+": "+(0,h.zw)(o.resource[e]),1))),64)),(0,s._)("div",null," Health: "+(0,h.zw)(o.resource.Status?o.resource.Status.Health:"n/a"),1),(0,s._)("div",null," PowerState: "+(0,h.zw)(o.resource["PowerState"]),1),(0,s._)("div",null," LocationIndicator: "+(0,h.zw)(o.resource["LocationIndicator"]),1)]),Ne,(0,s._)("table",Ye,[Ue,(0,s._)("tbody",null,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(o.temps,(e=>((0,s.wg)(),(0,s.iD)("tr",{key:e},[(0,s._)("td",null,(0,h.zw)(e["MemberId"])+" ("+(0,h.zw)(e["Name"])+")",1),(0,s._)("td",null,(0,h.zw)(e["ReadingCelsius"])+" C* ",1)])))),128))])])]),(0,s._)("div",Ie,[Ee,(0,s._)("table",Ke,[Ge,(0,s._)("tbody",null,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(o.fans,(e=>((0,s.wg)(),(0,s.iD)("tr",{key:e},[(0,s._)("td",null,(0,h.zw)(e["MemberId"])+" ("+(0,h.zw)(e["Name"])+")",1),(0,s._)("td",null,(0,h.zw)(e["Reading"])+" "+(0,h.zw)(e["ReadingUnits"]),1)])))),128))])])])])])])}var $e={name:"ResourceChassis",components:{},props:["payload","keys"],watch:{payload(){this.title="Chassis",this.resource=this.payload["_payload"],this.fans=this.payload["_fans"],this.temps=this.payload["_temperatures"],this.poweredby=this.payload["_poweredby"],console.log(this.fans),console.log(this.temps)}},setup(e){console.log(e.payload),console.log(e.keys);const t=(0,b.iH)("Chassis"),a=(0,b.iH)(e.payload["_payload"]),o=(0,b.iH)(e.payload["_fans"]),s=(0,b.iH)(e.payload["_temperatures"]),n=(0,b.iH)(e.payload["_poweredby"]);return{title:t,resource:a,fans:o,temps:s,poweredby:n}}};const xe=(0,f.Z)($e,[["render",Ze]]);var Be=xe,Ve={name:"PageChassis",components:{TableChassis:ze,ResourceChassis:Be},props:["service"],watch:{},setup(e){const t=(0,b.iH)({}),a=(0,b.iH)("collection");function o(){fetch("http://127.0.0.1:5000/page-view?service_name="+e.service+"&page_name=chassis",{method:"GET",headers:{"Content-Type":"application/json","login-info":"get-from-here"}}).then((e=>e.json())).then((e=>t.value=e)),a.value="table"}function s(o){console.log("GOTO!!!"),console.log(o),fetch("http://127.0.0.1:5000/page-view?service_name="+e.service+"&page_name=chassis&chassis_name="+o,{method:"GET",headers:{"Content-Type":"application/json","login-info":"get-from-here"}}).then((e=>e.json())).then((e=>t.value=e)),a.value="resource"}return o(),{page_payload:t,view:a,gotoTableChassis:o,gotoResourceChassis:s}}};const We=(0,f.Z)(Ve,[["render",le]]);var Fe=We;const Je={class:"basic"},qe={key:0},Qe={key:0,class:"title"},Xe={class:"propertyblock"};function et(e,t,a,o,n,i){const l=(0,s.up)("TableAccounts"),c=(0,s.up)("TableRoles"),r=(0,s.up)("ActionPatchAccountService"),d=(0,s.up)("ResourceGeneric");return(0,s.wg)(),(0,s.iD)("div",Je,["table"===o.view?((0,s.wg)(),(0,s.iD)("div",qe,[(0,s.Wm)(l,{payload:o.page_payload["_accounts"],onGotoaccount:t[0]||(t[0]=e=>o.gotoResource(e))},null,8,["payload"]),(0,s.Wm)(c,{payload:o.page_payload["_roles"],onGotorole:t[1]||(t[1]=e=>o.gotoResource(e))},null,8,["payload"]),"table"===o.view?((0,s.wg)(),(0,s.iD)("div",Qe,[(0,s.Uk)("Properties "),(0,s.Wm)(r,{service:a.service},null,8,["service"])])):(0,s.kq)("",!0),(0,s._)("div",Xe,[((0,s.wg)(),(0,s.iD)(s.HY,null,(0,s.Ko)(["ServiceEnabled","AuthFailureLoggingThreshold","MinPasswordLength","AccountLockoutDuration","AccountLockoutThreshold","AccountLockoutCounterResetAfter"],(e=>(0,s._)("div",{key:e},(0,h.zw)(e)+": "+(0,h.zw)(o.page_payload["_payload"][e]),1))),64))])])):(0,s.kq)("",!0),"resource"===o.view?((0,s.wg)(),(0,s.j4)(d,{key:1,payload:o.page_payload},null,8,["payload"])):(0,s.kq)("",!0)])}const tt={class:"title"},at={class:"basic"},ot={class:"table"},st=(0,s._)("thead",null,[(0,s._)("tr",null,[(0,s._)("th",{scope:"col-4"},"Name"),(0,s._)("th",{scope:"col-4"},"Role"),(0,s._)("th",{scope:"col-2"},"Locked"),(0,s._)("th",{scope:"col-2"},"Enabled"),(0,s._)("th",{scope:"col-2"},"Subscription Types")])],-1),nt=["onClick"];function it(e,t,a,o,n,i){return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s._)("div",tt,(0,h.zw)(o.title),1),(0,s._)("div",at,[(0,s._)("table",ot,[st,(0,s._)("tbody",null,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(o.all_elements,(t=>((0,s.wg)(),(0,s.iD)("tr",{key:t},[(0,s._)("td",null,[(0,s._)("a",{href:"#",onClick:a=>e.$emit("gotoaccount",t["@odata.id"])},(0,h.zw)(t.UserName),9,nt)]),(0,s._)("td",null,(0,h.zw)(t.RoleId),1),(0,s._)("td",null,(0,h.zw)(t.Locked),1),(0,s._)("td",null,(0,h.zw)(t.Enabled),1),(0,s._)("td",null,(0,h.zw)(t.AccountTypes),1)])))),128))])])])],64)}var lt={name:"TableAccounts",props:["payload","keys"],watch:{payload(){this.all_elements=this.payload}},setup(e){console.log(e.payload),console.log(e.keys);const t=(0,b.iH)("Accounts"),a=(0,b.iH)(e.payload),o=(0,b.iH)(e.keys);return{title:t,all_elements:a,all_keys:o}}};const ct=(0,f.Z)(lt,[["render",it]]);var rt=ct;const dt={class:"title"},ut={class:"basic"},pt={class:"table"},vt=(0,s._)("thead",null,[(0,s._)("tr",null,[(0,s._)("th",{scope:"col-2"},"Name"),(0,s._)("th",{scope:"col-2"},"Description"),(0,s._)("th",{scope:"col-8"},"Assigned Privileges")])],-1),_t=["onClick"];function ht(e,t,a,o,n,i){return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s._)("div",dt,(0,h.zw)(o.title),1),(0,s._)("div",ut,[(0,s._)("table",pt,[vt,(0,s._)("tbody",null,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(o.all_elements,(t=>((0,s.wg)(),(0,s.iD)("tr",{key:t},[(0,s._)("td",null,[(0,s._)("a",{href:"#",onClick:a=>e.$emit("gotorole",t["@odata.id"])},(0,h.zw)(t.Id)+" ("+(0,h.zw)(t.Name)+")",9,_t)]),(0,s._)("td",null,(0,h.zw)(t.Description),1),(0,s._)("td",null,(0,h.zw)(t.AssignedPrivileges),1)])))),128))])])])],64)}var gt={name:"TableRoles",props:["payload","keys"],watch:{payload(){this.all_elements=this.payload}},setup(e){console.log(e.payload),console.log(e.keys);const t=(0,b.iH)("Roles"),a=(0,b.iH)(e.payload),o=(0,b.iH)(e.keys);return{title:t,all_elements:a,all_keys:o}}};const mt=(0,f.Z)(gt,[["render",ht]]);var bt=mt;const yt=e=>((0,s.dD)("data-v-bd7ddf50"),e=e(),(0,s.Cn)(),e),ft=yt((()=>(0,s._)("a",{href:"#","data-bs-toggle":"modal","data-bs-target":"#editAccountServiceModal"}," Edit ",-1))),wt={class:"modal fade",id:"editAccountServiceModal",tabindex:"-1","aria-labelledby":"editAccountServiceLabel","aria-hidden":"true"},kt={class:"modal-dialog"},Ct={class:"modal-content"},St=yt((()=>(0,s._)("div",{class:"modal-header"},[(0,s._)("h5",{class:"modal-title",id:"editAccountServiceLabel"},"Reset Chassis"),(0,s._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1))),Dt={class:"modal-body"},Tt=["for"],Ht=["id","onUpdate:modelValue"],At=["value"],zt=["id","onUpdate:modelValue"],Rt=yt((()=>(0,s._)("option",{value:!0},"True",-1))),Mt=yt((()=>(0,s._)("option",{value:!1},"False",-1))),jt=[Rt,Mt],Lt=["id","onUpdate:modelValue"],Ot={class:"modal-footer"},Pt=yt((()=>(0,s._)("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"Cancel",-1)));function Nt(e,t,a,n,i,l){return(0,s.wg)(),(0,s.iD)(s.HY,null,[ft,(0,s._)("div",wt,[(0,s._)("div",kt,[(0,s._)("div",Ct,[St,(0,s._)("div",Dt,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(n.action_info,((e,t)=>((0,s.wg)(),(0,s.iD)("div",{class:"mb-3",key:e.option},[(0,s._)("label",{for:t+"id",class:"form-label"},(0,h.zw)(e.option),9,Tt),"object"==typeof e.value?(0,s.wy)(((0,s.wg)(),(0,s.iD)("select",{key:0,class:"form-select",id:t+"id","onUpdate:modelValue":e=>n.action_parameters[t]=e},[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.value,(e=>((0,s.wg)(),(0,s.iD)("option",{key:e,value:e},(0,h.zw)(e),9,At)))),128))],8,Ht)),[[o.bM,n.action_parameters[t]]]):"boolean"==typeof e.value?(0,s.wy)(((0,s.wg)(),(0,s.iD)("select",{key:1,class:"form-select",id:t+"id","onUpdate:modelValue":e=>n.action_parameters[t]=e},jt,8,zt)),[[o.bM,n.action_parameters[t]]]):(0,s.wy)(((0,s.wg)(),(0,s.iD)("input",{key:2,id:t+"id",type:"text",class:"form-control","onUpdate:modelValue":e=>n.action_parameters[t]=e,placeholder:""},null,8,Lt)),[[o.nr,n.action_parameters[t]]])])))),128))]),(0,s._)("div",Ot,[(0,s._)("button",{type:"button",class:"btn btn-danger",onClick:t[0]||(t[0]=(...e)=>n.editAccountService&&n.editAccountService(...e)),"data-bs-dismiss":"modal"},"Yes"),Pt])])])])],64)}var Yt={name:"ActionResetChassis",props:["service","target_id"],data(){return{target_value:"Chassis"}},watch:{target_id:function(e){this.target_value=e,print(this.target_value),print(this.target_id),print(this.service)}},setup(e){const t=(0,b.iH)({ServiceEnabled:{option:"Service Enabled",value:!0},AuthFailureLoggingThreshold:{option:"AuthFailureLoggingThreshold",value:0},MinPasswordLength:{option:"MinPasswordLength",value:0},AccountLockoutDuration:{option:"AccountLockoutDuration",value:0},AccountLockoutThreshold:{option:"AccountLockoutThreshold",value:0},AccountLockoutCounterResetAfter:{option:"AccountLockoutCounterResetAfter",value:0}}),a=(0,b.iH)({});function o(t){console.log("RESETTING NOW"),fetch("http://127.0.0.1:5000/redfish/v1/AccountService?service_name="+e.service,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(a.value)}).then((e=>e.json()))}return{action_info:t,action_parameters:a,editAccountService:o}}};const Ut=(0,f.Z)(Yt,[["render",Nt],["__scopeId","data-v-bd7ddf50"]]);var It=Ut;const Et={class:"basic"},Kt={class:"container"},Gt={class:"row"},Zt={class:"col"},$t={class:"title"},xt={class:"propertyblock"};function Bt(e,t,a,o,n,i){return(0,s.wg)(),(0,s.iD)("div",Et,[(0,s._)("div",Kt,[(0,s._)("div",Gt,[(0,s._)("div",Zt,[(0,s._)("div",$t,(0,h.zw)(o.title),1),(0,s._)("div",xt,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(o.resource,((e,t)=>((0,s.wg)(),(0,s.iD)("div",{key:e},(0,h.zw)(t)+": "+(0,h.zw)(e),1)))),128))])])])])])}var Vt={name:"ResourceGeneric",components:{},props:["payload","keys"],watch:{payload(){this.title="ResourceGeneric",this.resource=this.payload["_payload"]}},setup(e){console.log(e.payload),console.log(e.keys);const t=(0,b.iH)("Resource"),a=(0,b.iH)(e.payload["_payload"]);return{title:t,resource:a}}};const Wt=(0,f.Z)(Vt,[["render",Bt]]);var Ft=Wt,Jt={name:"PageUserManagement",components:{TableAccounts:rt,TableRoles:bt,ActionPatchAccountService:It,ResourceGeneric:Ft},props:["service"],watch:{},setup(e){const t=(0,b.iH)({_payload:{}}),a=(0,b.iH)("table");function o(){fetch("http://127.0.0.1:5000/page-view?service_name="+e.service+"&page_name=usermanagement",{method:"GET",headers:{"Content-Type":"application/json","login-info":"get-from-here"}}).then((e=>e.json())).then((e=>t.value=e)),a.value="table"}function s(o){fetch("http://127.0.0.1:5000"+o+"?service_name="+e.service,{method:"GET",headers:{"Content-Type":"application/json","login-info":"get-from-here"}}).then((e=>e.json())).then((e=>t.value=e)),a.value="resource"}return o(),{page_payload:t,view:a,gotoTable:o,gotoResource:s}}};const qt=(0,f.Z)(Jt,[["render",et]]);var Qt=qt,Xt={name:"App",components:{SideBar:M,TopBar:Q,LocationBar:ne,PageChassis:Fe,PageUserManagement:Qt,StatusToast:k},setup(){const e=(0,b.iH)("main"),t=(0,b.iH)("unknown");function a(t){e.value=t}function o(e){console.log(e),t.value=e}return{changeMain:a,changeService:o,current_page:e,current_service:t}}};const ea=(0,f.Z)(Xt,[["render",_]]);var ta=ea;const aa=(0,o.ri)(ta);aa.config.compilerOptions.delimiters=["${","}$"],aa.mount("#app")}},t={};function a(o){var s=t[o];if(void 0!==s)return s.exports;var n=t[o]={exports:{}};return e[o].call(n.exports,n,n.exports,a),n.exports}a.m=e,function(){var e=[];a.O=function(t,o,s,n){if(!o){var i=1/0;for(d=0;d<e.length;d++){o=e[d][0],s=e[d][1],n=e[d][2];for(var l=!0,c=0;c<o.length;c++)(!1&n||i>=n)&&Object.keys(a.O).every((function(e){return a.O[e](o[c])}))?o.splice(c--,1):(l=!1,n<i&&(i=n));if(l){e.splice(d--,1);var r=s();void 0!==r&&(t=r)}}return t}n=n||0;for(var d=e.length;d>0&&e[d-1][2]>n;d--)e[d]=e[d-1];e[d]=[o,s,n]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var o in t)a.o(t,o)&&!a.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){a.p=""}(),function(){var e={143:0};a.O.j=function(t){return 0===e[t]};var t=function(t,o){var s,n,i=o[0],l=o[1],c=o[2],r=0;if(i.some((function(t){return 0!==e[t]}))){for(s in l)a.o(l,s)&&(a.m[s]=l[s]);if(c)var d=c(a)}for(t&&t(o);r<i.length;r++)n=i[r],a.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return a.O(d)},o=self["webpackChunkredfish_trawler_frontend"]=self["webpackChunkredfish_trawler_frontend"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=a.O(void 0,[998],(function(){return a(1379)}));o=a.O(o)})();
//# sourceMappingURL=app.e9d3c1f0.js.map