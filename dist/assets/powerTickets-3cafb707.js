import{_ as k,f as m,r as b,o as u,c as f,b as n,a as e,t as c,j as x,F as _,g as y,d as T,O as C,P as D}from"./index-d0c9d9c3.js";const F={data(){return{approval:0,assigned:0,my:0,myCloseRequests:[],closeRequestsForMe:[],info:[],reject:[],infoMe:[],tickets:[],unassigned:[],accepted:[],filteredTickets:[],closed:[]}},created(){this.$toast.info("Loading Data....");var r=this,o=this.authStore.getToken,i=this.authStore.getUser,l=new FormData;l.append("token",o),l.append("user",JSON.stringify(i)),m.post(r.globalUrl+"getAllTickets",l).then(a=>{r.tickets=a.data,r.filteredTickets=r.tickets,r.mainStore.setTickets(r.tickets),r.mainStore.setFilteredTickets(r.filteredTickets),r.unassigned=r.tickets.filter(s=>s.assigned==!1&&s.ticketingHead&&s.status!="Submitted Ticket - Seeking Supervisor Approval"&&s.status!="Closed Ticket"),r.accepted=r.tickets.filter(s=>s.currentHandler&&s.accepted==!0&&s.assigned==!0&&s.status!="Closed Ticket"&&s.status!="Close Requested"),r.assigned=r.tickets.filter(s=>s.assigned==!0&&s.ticketingHead&&s.currentHandler!=null&&s.accepted==!1&&s.status!="Closed Ticket"),r.approval=r.tickets.filter(s=>s.higherApprover&&s.ticketingHead&&s.currentHandler&&s.currentHandler.mailAddress==s.higherApprover.mailAddress&&s.status!="Closed Ticket"),r.myCloseRequests=r.tickets.filter(s=>s.madeCloseRequest==!0&&s.status!="Closed Ticket"),r.info=r.tickets.filter(s=>s.ask==!0&&s.ticketingHead&&s.status!="Closed Ticket"),r.closed=r.tickets.filter(s=>s.status=="Closed Ticket"),r.$toast.clear(),r.$toast.success("Data Loaded Successfully")}).catch(a=>{r.$toast.clear(),console.log("this is the error"),r.$toast.warning(a)})},methods:{filter(r,o){var i=this,l=i.mainStore;switch(o){case"unassigned":l.setFilteredTickets(i.unassigned),l.setInitialTickets(i.unassigned);break;case"assigned":l.setFilteredTickets(i.assigned),l.setInitialTickets(i.assigned);break;case"accepted":l.setFilteredTickets(i.accepted),l.setInitialTickets(i.accepted);break;case"approval":l.setFilteredTickets(i.approval),l.setInitialTickets(i.approval);break;case"info":l.setFilteredTickets(i.info),l.setInitialTickets(i.info);break;case"close":l.setFilteredTickets(i.myCloseRequests),l.setInitialTickets(i.myCloseRequests);break;case"closed":console.log("fired closed"),l.setFilteredTickets(i.closed),l.setInitialTickets(i.closed);break;case"all":l.setFilteredTickets(i.tickets),l.setInitialTickets(i.tickets);break}},showDetails(r){const o="/ticketing/ticketDetails/"+r;this.$router.push(o)},showProblemDetails(r){console.log("entered show problem details");var o=r.target,i=o.getBoundingClientRect();const l=i.top+window.scrollY,a=i.left+window.scrollX;console.log(o.innerText);var s=this.$refs.tooltip,v=s.querySelector("#text");v.innerText=o.innerText,console.log("offset top"),console.log(l),s.style.border="2px solid black",s.style.top=l-40+"px",s.style.left=a-40+"px",s.style.display="block"},hideProblemDetails(r){var o=this.$refs.tooltip;o.style.top="px",o.style.left="100px",o.style.display="none"}}},h=r=>(C("data-v-0b760806"),r=r(),D(),r),S={class:"fixed w-[300px] h-[200px] overflow-y-scroll p-3 flex-col bg-yellow-100",id:"tooltip",ref:"tooltip",style:{display:"none"}},q={class:"flex flex-col justify-center",style:{"border-radius":"200%",width:"20px",height:"20px","background-color":"black",padding:"2px"}},j=h(()=>e("div",{id:"text",style:{"word-wrap":"break-word","max-width":"100%"}},null,-1)),I={class:"flex flex-row text-lg h-full w-full bg-[rgb(248,248,248)]",id:"app"},R={class:"flex flex-col h-screen customborder bg-white w-1/6 py-10",id:"sidePanelMain"},A={class:"flex flex-row w-full items-center hover:cursor-pointer"},H={class:"w-1/6 hover:cursor-pointer"},B=h(()=>e("label",{class:"hover:cursor-pointer"},"All Tickets",-1)),N={class:"hover:cursor-pointer"},P={class:"flex flex-row w-full items-center hover:cursor-pointer"},M={class:"w-1/6 hover:cursor-pointer"},E=h(()=>e("label",{class:"hover:cursor-pointer"},"Unassigned Task",-1)),O={class:"hover:cursor-pointer"},U={class:"flex flex-row hover:cursor-pointer w-full items-center"},V={class:"w-1/6 hover:cursor-pointer"},L=h(()=>e("label",{class:"hover:cursor-pointer"},"Assigned Task",-1)),J={class:"hover:cursor-pointer"},X={class:"hover:cursor-pointer flex flex-row w-full items-center"},Y={class:"hover:cursor-pointer w-1/6"},z=h(()=>e("label",{class:"hover:cursor-pointer"},"Accepted Task",-1)),G={class:"hover:cursor-pointer"},K={class:"flex flex-row w-full items-center hover:cursor-pointer"},Q={class:"w-1/6 hover:cursor-pointer"},W=h(()=>e("label",{class:"hover:cursor-pointer"},"Tickets Awaiting Higher Approval",-1)),Z={class:"hover:cursor-pointer"},$={class:"flex flex-row w-full items-center hover:cursor-pointer"},ee={class:"w-1/6 hover:cursor-pointer"},se=h(()=>e("label",{class:"hover:cursor-pointer"},"My Close Requests",-1)),re={class:"hover:cursor-pointer"},oe={class:"flex flex-row w-full items-center hover:cursor-pointer"},te={class:"w-1/6 hover:cursor-pointer"},le=h(()=>e("label",{class:"hover:cursor-pointer"},"Information Requested By Me",-1)),ie={class:"hover:cursor-pointer"},ae={class:"flex flex-row w-full items-center hover:cursor-pointer"},ce={class:"w-1/6 hover:cursor-pointer"},ne=h(()=>e("label",{class:"hover:cursor-pointer"},"Closed Tickets",-1)),de={class:"hover:cursor-pointer"},he={class:"h-[100vh] bg-[rgb(248,248,248)] flex flex-col w-5/6 mx-2"},pe={class:"flex flex-row items-end justify-end"},ue={class:"overflow-x-auto mx-2 customerborder w-full overflow-y-scroll",style:{"max-height":"80vh","min-height":"auto"}},fe={class:"w-full text-sm text-left text-gray-500 dark:text-gray-400"},ve=h(()=>e("thead",{class:"text-xs text-gray-700 uppercase bg-white dark:bg-gray-700 dark:text-gray-400"},[e("tr",null,[e("th",{scope:"col",class:"table-header2 px-6 py-3"}," Ticket No. "),e("th",{scope:"col",class:"table-header2 px-6 py-3"}," Req. Date "),e("th",{scope:"col",class:"table-header2 px-6 py-3"}," Status "),e("th",{scope:"col",class:"table-header2 px-6 py-3"}," problem "),e("th",{scope:"col",class:"table-header2 px-6 py-3"}," Requester "),e("th",{scope:"col",class:"table-header2 px-6 py-3"}," Current Handler ")])],-1)),be=["onClick"],xe=["onClick"],_e=["onClick"],we=["onClick"],ge=["onClick"];function ke(r,o,i,l,a,s){const v=b("FilterDrawer"),d=b("font-awesome-icon"),w=b("FilterButton");return u(),f(_,null,[n(v),e("div",S,[e("div",{class:"flex flex-row items-end w-full justify-end hover:cursor-pointer sticky top-0",onClick:o[0]||(o[0]=(...t)=>s.hideProblemDetails&&s.hideProblemDetails(...t))},[e("div",q,[n(d,{icon:"fa-solid fa-xmark",class:"text-white"})])]),j],512),e("div",I,[e("div",R,[e("div",{onClick:o[1]||(o[1]=t=>s.filter(t,"all")),class:"flex flex-row justify-around items-center w-full px-5 hover:cursor-pointer hover:bg-[rgb(237,237,237)] hover:border-r-4 hover:border-solid hover:border-r-emerald-500"},[e("div",A,[e("div",H,[n(d,{icon:"fa-solid fa-border-all",class:"hover:cursor-pointer"})]),B]),e("label",N,c(a.tickets.length),1)]),e("div",{onClick:o[2]||(o[2]=t=>s.filter(t,"unassigned")),class:"flex flex-row justify-around items-center w-full px-5 hover:cursor-pointer hover:bg-[rgb(237,237,237)] hover:border-r-4 hover:border-solid hover:border-r-emerald-500"},[e("div",P,[e("div",M,[n(d,{icon:"fa-solid fa-tasks",class:"hover:cursor-pointer"})]),E]),e("label",O,c(a.unassigned.length),1)]),e("div",{onClick:o[3]||(o[3]=t=>s.filter(t,"assigned")),class:"flex flex-row justify-around w-full px-5 hover:cursor-pointer hover:bg-[rgb(237,237,237)] hover:border-r-4 hover:border-solid hover:border-r-emerald-500"},[e("div",U,[e("div",V,[n(d,{icon:"fa-solid fa-thumbtack hover:cursor-pointer "})]),L]),e("label",J,c(a.assigned.length),1)]),e("div",{onClick:o[4]||(o[4]=t=>s.filter(t,"accepted")),class:"hover:cursor-pointer flex flex-row justify-around w-full px-5 hover:bg-[rgb(237,237,237)] hover:border-r-4 hover:border-solid hover:border-r-emerald-500"},[e("div",X,[e("div",Y,[n(d,{icon:" hover:cursor-pointer fa-solid fa-check"})]),z]),e("label",G,c(a.accepted.length),1)]),e("div",{onClick:o[5]||(o[5]=t=>s.filter(t,"approval")),class:"flex flex-row justify-around w-full px-5 hover:cursor-pointer hover:bg-[rgb(237,237,237)] hover:border-r-4 hover:border-solid hover:border-r-emerald-500"},[e("div",K,[e("div",Q,[n(d,{icon:"fa-solid fa-thumbtack",class:"hover:cursor-pointer"})]),W]),e("label",Z,c(a.approval.length),1)]),e("div",{onClick:o[6]||(o[6]=t=>s.filter(t,"close")),class:"flex flex-row justify-around w-full px-5 hover:cursor-pointer hover:bg-[rgb(237,237,237)] hover:border-r-4 hover:border-solid hover:border-r-emerald-500"},[e("div",$,[e("div",ee,[n(d,{icon:"fa-solid fa-file-export",class:"hover:cursor-pointer"})]),se]),e("label",re,c(a.myCloseRequests.length),1)]),e("div",{onClick:o[7]||(o[7]=t=>s.filter(t,"info")),class:"flex flex-row justify-around w-full px-5 hover:cursor-pointer hover:bg-[rgb(237,237,237)] hover:border-r-4 hover:border-solid hover:border-r-emerald-500"},[e("div",oe,[e("div",te,[n(d,{icon:"fa-solid fa-question",class:"hover:cursor-pointer"})]),le]),e("label",ie,c(a.infoMe.length),1)]),e("div",{onClick:o[8]||(o[8]=t=>s.filter(t,"closed")),class:"flex flex-row justify-around w-full px-5 hover:cursor-pointer hover:bg-[rgb(237,237,237)] hover:border-r-4 hover:border-solid hover:border-r-emerald-500"},[e("div",ae,[e("div",ce,[n(d,{icon:"fa-solid fa-lock",class:"hover:cursor-pointer"})]),ne]),e("label",de,c(a.closed.length),1)])]),e("div",he,[e("div",pe,[e("div",{onClick:o[9]||(o[9]=(...t)=>this.downloadExcel&&this.downloadExcel(...t)),class:"p-2 bg-white hover:cursor-pointer border border-solid border-gray-400 rounded-sm mt-2 mb-2 mr-2"},[n(d,{icon:"fa-solid fa-table",class:"mr-2"}),x("Download As Excel")]),x(),n(w)]),e("div",ue,[e("table",fe,[ve,e("tbody",null,[(u(!0),f(_,null,y(this.mainStore.getFilteredTickets,(t,g)=>(u(),f("tr",{class:"hover:cursor-pointer bg-white border-b dark:bg-gray-800 dark:border-gray-700",key:g},[e("th",{onClick:p=>s.showDetails(t._id),scope:"row",class:"table-row2 px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"},c(t._id),9,be),e("td",{onClick:p=>s.showDetails(t._id),class:"table-row2 px-6 py-4"},c(t.requestDate),9,xe),e("td",{onClick:p=>s.showDetails(t._id),class:"table-row2 px-6 py-4"},c(t.status),9,_e),e("td",{onClick:o[10]||(o[10]=p=>s.showProblemDetails(p)),class:"table-row2 py-3 text-center text-sm overflow-hidden text-ellipsis cursor-pointer whitespace-nowrap max-w-0 text-red-400"},c(t.problemDetails),1),e("td",{onClick:p=>s.showDetails(t._id),class:"table-row2 px-6 py-4"},c(t.raisedBy.empName),9,we),e("td",{onClick:p=>s.showDetails(t._id),class:"table-row2 px-6 py-4"},[t.currentHandler?(u(),f(_,{key:0},[x(c(t.currentHandler.empName),1)],64)):T("",!0)],8,ge)]))),128))])])])])])],64)}const ye=k(F,[["render",ke],["__scopeId","data-v-0b760806"]]);export{ye as default};
