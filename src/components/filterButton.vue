<template>



<div class="p-2 border border-black border-solid bg-white hover:cursor-pointer  rounded-sm mt-2 mb-2" @click="setFilterToggle">  Filter <font-awesome-icon icon="fa-solid fa-filter" class="ml-2 hover:cursor-pointer"/></div>


</template>

<script setup>

import { useMainStore } from '../stores/store';

var {toggleFilter} = useMainStore()


function setFilterToggle(){
   toggleFilter()
}





</script>

