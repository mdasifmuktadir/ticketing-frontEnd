<template>
    
    <FilterDrawer :paginator="this.$refs.paginator"/>
    
    <div class="fixed w-[300px] h-[200px] overflow-y-scroll p-3 flex-col bg-yellow-100" id="tooltip" ref="tooltip" style="display:none">
         <div class="flex flex-row items-end w-full justify-end hover:cursor-pointer sticky top-0 " @click="hideProblemDetails" > <div class="flex flex-col justify-center" style="border-radius: 200%; width:20px; height:20px; background-color: black; padding: 2px;"> <font-awesome-icon icon="fa-solid fa-xmark" class="text-white"/></div></div>
        <div id="text" style="word-wrap: break-word; max-width:100%"></div>
        </div>
   <div class=" flex flex-row   text-lg  h-full w-full  bg-gray-200 ml-[30px]  " id="app"  >


    <div class="flex flex-col fixed left-[50px] h-screen customborder   pt-2" style="z-index: 999;" id="sidePanel" v-if="mainStore.sidePanelCheck">
       

        <div @click="filter($event, 'all')" :class="{selected:selectedItem == 'all', notSelected:selectedItem != 'all'}">
              <div class="flex flex-row  w-full items-center hover:cursor-pointer ">

                <div class="w-1/6 hover:cursor-pointer "><font-awesome-icon icon="fa-solid fa-border-all" class=" hover:cursor-pointer " /></div>
                 <label class=" hover:cursor-pointer text-sm">All Issues</label>
                
              </div>
              <label class=" hover:cursor-pointer text-sm ">{{ tickets.length }}</label>
         </div>
        
         <div @click="filter($event, 'unassigned')" :class="{selected:selectedItem == 'unassigned', notSelected:selectedItem != 'unassigned'}">
              <div class="flex flex-row  w-full items-center hover:cursor-pointer ">

                <div class="w-1/6 hover:cursor-pointer "><font-awesome-icon icon="fa-solid fa-tasks" class=" hover:cursor-pointer " /></div>
                 <label class=" hover:cursor-pointer text-sm ">Unassigned Issues</label>
                
              </div>
              <label class=" hover:cursor-pointer text-sm ">{{ unassigned.length }}</label>
         </div>


         <div @click="filter($event, 'assigned')" :class="{selected:selectedItem == 'assigned', notSelected:selectedItem != 'assigned'}">
              <div class="flex flex-row hover:cursor-pointer   w-full items-center">

                <div class="w-1/6 hover:cursor-pointer "><font-awesome-icon icon="fa-solid fa-thumbtack hover:cursor-pointer " /></div>
                 <label class=" hover:cursor-pointer text-sm ">Assigned Issues</label>
                
              </div>
              <label class=" hover:cursor-pointer text-sm ">{{ assigned.length }}</label>
         </div>



         <div @click="filter($event, 'approval')" :class="{selected:selectedItem == 'approval', notSelected:selectedItem != 'approval'}">
              <div class="flex flex-row  w-full items-center hover:cursor-pointer ">

                <div class="w-1/6 hover:cursor-pointer "><font-awesome-icon icon="fa-solid fa-thumbtack" class=" hover:cursor-pointer " /></div>
                 <label class=" hover:cursor-pointer text-sm ">Issues Awaiting Higher Approval</label>
                
              </div>
              <label  class=" hover:cursor-pointer text-sm ">{{ approval.length }}</label>
         </div>


         
         <div @click="filter($event, 'closedTickets')" :class="{selected:selectedItem == 'closedTickets', notSelected:selectedItem != 'closedTickets'}">
              <div class="flex flex-row  w-full items-center hover:cursor-pointer ">

                <div class="w-1/6 hover:cursor-pointer "><font-awesome-icon icon="fa-solid fa-file-export"  class=" hover:cursor-pointer " /></div>
                 <label class=" hover:cursor-pointer text-sm ">Closed Issues</label>
                
              </div>
              <label class=" hover:cursor-pointer text-sm " >{{ myCloseRequests.length }}</label>
         </div>


         <div @click="filter($event, 'info')"  :class="{selected:selectedItem == 'info', notSelected:selectedItem != 'info'}">
              <div class="flex flex-row  w-full items-center  hover:cursor-pointer ">

                <div class="w-1/6  hover:cursor-pointer "><font-awesome-icon icon="fa-solid fa-question" class=" hover:cursor-pointer " /></div>
                 <label class=" hover:cursor-pointer text-sm ">Issues Awaiting Information</label>
                
              </div>
              <label class=" hover:cursor-pointer text-sm ">{{ infoMe.length }}</label>
         </div>







    </div>


  <div class="h-[92vh]  bg-gray-200  flex flex-col items-center w-full mx-2 p-5">  
  
<div class="flex flex-row mb-[10px] items-center justify-between w-full">
    <div class=" text-2xl ml-[40vw] border border-black border-solid font-bold  p-3 bg-white">{{ getSelectedItem() }}</div>


<div class="flex flex-row">
    <div class="flex flex-row">  <div @click="downloadExcel" class="p-2 bg-white  hover:cursor-pointer border border-solid border-black rounded-sm mt-2 mb-2 mr-2">
    Download As Excel<font-awesome-icon icon="fa-solid fa-table" class="ml-4"/>
</div>  
    <FilterButton/>
<ClearButton/>
</div>
</div>
</div>


    <div class="overflow-x-auto   mx-2  border border-black border-solid  customerborder  bg-white    w-[90vw] " style="max-height: 80vh; min-height: auto;">
       
    <table class="w-full text-md text-left text-gray-500 dark:text-gray-400 " style="z-index: 1;">
        <thead class="text-md text-white uppercase sticky top-0" style="z-index:1">
            <tr>
                <th scope="col" class="table-header2  px-6 py-3 " >
                    Issue No.
                </th>
<!-- 
                <th scope="col" class="table-header2 px-6 py-3 ">
                    Ticket Type
                </th> -->
                
                <th scope="col" class="table-header2 px-6 py-3 " >
                    Req. Date
                </th>
                <th scope="col" class="table-header2 px-6 py-3 ">
                    Location
                </th>
                <th scope="col" class="table-header2 px-6 py-3 ">
                    priority
                </th>
                <th scope="col" class="table-header2 px-6 py-3 ">
                    Status
                </th>
                <th scope="col" class="table-header2 px-6 py-3">
                    problem
                </th>
               
                <th scope="col" class="table-header2 px-6 py-3">
                    Requester
                </th>

                <th scope="col" class="table-header2 px-6 py-3">
                    Assignee
                </th>

                <th scope="col" class="table-header2 px-6 py-3">
                    Current Handler
                </th>

                <th scope="col" class="table-header2 px-6 py-3">
                    
                </th>
            </tr>
        </thead>
        <tbody>
            <tr  class="hover:bg-blue-100 hover:text-black hover:cursor-pointer" v-for="(ticket, ticketCounter) in sortedTickets" :key="ticketCounter">
                <td @click="showDetails(ticket._id)"  scope="" class="table-row2 text-center   font-medium text-gray-900  dark:text-white" >
                    {{ ticket._id }}
                </td>
                <!-- <td  class="table-row2 ">
                    <select name="" id="" class="p-1 border border-solid border-black" @change="setTicketType($event, ticket)">
                        <option :value="ticket.ticketType" selected>{{ticket.ticketType}}</option>
                        <option v-if="ticket.ticketType == 'Problem'" value="Incident">Incident</option>
                        <option v-else value="Problem">Problem</option>
                    </select>
                </td> -->
                <td @click="showDetails(ticket._id)" class="table-row2 px-6 ">
                    {{ ticket.requestDate }}
                </td>
                <td  class="table-row2 px-6">
                    <select v-model="sortedTickets[ticketCounter].location" @change="setLocation($event, ticket._id)" class="w-[80px] border border-black border-solid" value>
                       
                       <option v-for="(location, locationCounter) in locations"  :value="location.name">{{location.name}}</option>
                    </select>
                   </td>
                <td  class="table-row2 px-6 ">
                    <select name="" id="" v-model="sortedTickets[ticketCounter].priority.priority" class="p-1 border border-solid border-black" @change="setPriorityForTable($event, ticket)">
                     
                        
                        <option value="Priority 1">Priority 1</option>
                        <option value="Priority 2">Priority 2</option>
                        <option value="Priority 3">Priority 3</option>
                        <option value="Priority 4">Priority 4</option>
                        <option value="Priority 5">Priority 5</option>
                        <option value="Priority 5">Priority 6</option>
                    </select>
                </td>

                <td @click="showDetails(ticket._id)" class="table-row2 px-6 ">
                    {{ticket.status}}
                </td>
                <td @click="showProblemDetails($event)"  class="table-row2   text-center text-sm overflow-hidden text-ellipsis cursor-pointer whitespace-nowrap max-w-0 text-red-400">
                 <div class="flex flex-row justify-center underline items-center">
                   
                    {{ticket.problemDetails}}</div>
                </td>
                <td @click="showDetails(ticket._id)" class="table-row2 pl-4 ">
                   {{ticket.raisedBy.empName}}
                </td>
                <td  class="table-row2 ">
                    <template v-if="ticket.assignedTo ">
                        
                        <select v-model="sortedTickets[ticketCounter].assignedTo.mailAddress"  name="" id="" @change="assignTicket2($event, ticket)" class="bg-white w-[100px] border border-solid border-black">
                            <!-- <option :value="ticket.assignedTo.mailAddress" selected>{{ ticket.assignedTo.mailAddress }}</option> -->
                            <option value="Unassigned" >Unassigned</option>
                            <option v-for="(user, userCounter) in ticket.users"  :key="userCounter" :value="user">{{user}}</option>
                        </select>
                    </template> 
                    <template v-else>
                        <select  name="" id="" @change="assignTicket2($event, ticket)" class="bg-white w-[100px] border border-solid border-black" >
                            <option value="Unassigned" selected>Unassigned</option>
                            <option v-for="(user, userCounter) in ticket.users" :key="userCounter" :value="user">{{user}}</option>
                        </select>
                    </template> 
                 </td>
                <td @click="showDetails(ticket._id)" class="table-row2 ">
                   <template v-if="ticket.currentHandler">{{ ticket.currentHandler.empName }}</template> 
                </td>
                <td class="table-row2 pr-[20px]">
                <button @click="ticketReset(ticket)" class="p-2 bg-green-200 text-black border border-solid border-gray-500"><font-awesome-icon :icon="['fas', 'retweet']" /></button>
                </td>
            </tr>
           
          
         
        </tbody>
    </table>
</div>

<Pagination @changePage="getTickets5"/>


</div>
 


    
   </div>
    

    
    
    
    </template>
    
    

<script setup>

import {ref, onMounted} from "vue"
import { useAuthStore } from "../../stores/authentication";
import { useMainStore } from "../../stores/store";
import { useTicketStore } from "../../stores/ticket";
import { useUserStore } from "../../stores/users";
import {storeToRefs} from "pinia"

var {getTickets5, getLocations, handlePageChanged, assignTicket2, getSelectedItem, selectItem, comparator, filter, 
showDetails, downloadExcel, ticketReset, setLocation, setPriorityForTable, getSupport
} = useTicketStore()

onMounted(()=>{
    getTickets5(1)
    getSupport();
})

getLocations()


var {sortedTickets, approval, assigned, my, myCloseRequests, 
    info, reject, infoMe, tickets, unassigned, filteredTickets, sort, selectedItem, support,
    currentPage, itemsPerPage, locations, paginator } = storeToRefs(useTicketStore())

var mainStore = useMainStore()

var tooltip = ref(null)


function  showProblemDetails(event){

var cell = event.target
var rect = cell.getBoundingClientRect();

const topOffset = rect.top + window.scrollY;
const leftOffset = rect.left + window.scrollX;


var textElem = tooltip.value.querySelector('#text')
textElem.innerText = cell.innerText

tooltip.value.style.border = '2px solid black'
tooltip.value.style.top = topOffset - 40 + 'px';
tooltip.value.style.left = leftOffset - 40 + 'px';
tooltip.value.style.display = 'block'
}



function hideProblemDetails(event){
       tooltip.value.style.top = 'px';
       tooltip.value.style.left = '100px';   
       tooltip.value.style.display = 'none'
     }



</script>



  
<style scoped>






.table-header2{
    font-size: 15px;
}


 #sidePanel div div  label{
   margin-right: 10px;
 }

 .selected{
    display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  padding: 1.25rem; 
  cursor: default;
  background-color: transparent;
  box-shadow: 0px 2px 2px;
  border: none;
  margin-top: 10px;
  margin-bottom: 10px;
  font-weight: bold;


  cursor: pointer;
  background-color: rgb(237, 237, 237);
  border-right-width: 0.25rem; 
  border-right-style: solid;   
  border-right-color: #10B981;


 }



 .notSelected{
    display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  padding: 1.25rem; 
  cursor: default;
  background-color: transparent;
  box-shadow: 0px 2px 2px;
  border: none;
  margin-top: 10px;
  margin-bottom: 10px;
  font-weight: bold;

 }

 .notSelected:hover{
    cursor: pointer;
  background-color: rgb(237, 237, 237);
  border-right-width: 0.25rem; 
  border-right-style: solid;   
  border-right-color: #10B981;

 }

 table th{
    border-bottom:1px solid rgb(184, 181, 181);
    background-color: rgb(2,54,61);
    color:white;
 }

 table td {
    border-bottom: 1px solid gray;
 }

 #sidePanel{
    background-color:rgb(195, 212, 214);
    padding:4px;
    border-right:1px solid gray
 }
 

 #sidePanel div{
   background-color: white;
   
   margin-bottom: 5px;

 }


 tbody tr td:hover{
  cursor: pointer;
 }
 


</style>