<template >
    

    <div class="w-full h-full px-10 ml-[30px] mt-[10px]">
  <div class="flex flex-row justify-center items-center bg-white border border-solid border-black p-4 mt-3">  <label class="text-black text-4xl font-bold">Insert Article</label></div>
    






<div class="flex flex-col w-full  h-auto">

<div class="flex flex-col my-10">
    <label class="text-4xl font-bold mb-2">Headline</label>
    <input class=" p-3 bg-white border border-solid border-black" type="text" v-model="headline" placeholder="Insert Article Headline" id="">
</div>

<label class="text-2xl font-bold mb-2">Article</label>

<div class="  bg-white border border-solid border-black" id="editor" >
  <QuillEditor :options="options" v-model:content="content" class="" contentType="html" />
 

</div>


<div class="flex flex-row justify-end items-center mr-10 mt-20 ">
    
    <div class="bg-emerald-500 border border-black border-solid text-white font-bold p-4 text-xl hover:cursor-pointer" @click="insertArticle">Insert</div>
</div>




<div>

</div>


</div>

    
    </div>
    
    </template>
    
    
    <script >
    import axios from "axios"
    import {mapStores} from "pinia"
    import {useAuthStore} from "../../stores/authentication"
  

    
   export default{
    data(){
        return{
        content: '<p>2333</p>',
      _content: '',
      editorOption: {
        placeholder: 'core',
        modules: {
        
        },



      },
      disabled: false,
      token:null,
      headline:null
        }
    },


    computed:{
      ...mapStores(useAuthStore)
    },



  created(){
     this.token = this.authStore.token
  },

  methods:{
    insertArticle(){
        var vm = this;
        var user = this.authStore.user;
        var token = this.authStore.token;
        var content = this.content;
        var headline = this.headline;

        var data = new FormData();
        data.append("user", JSON.stringify(user))
        data.append("token", token)
        data.append("content", content)
        data.append("headline", headline)

        axios.post(vm.$globalUrl + "createBlog", data, {
  headers: {
    'Authorization': `Bearer ${token}`,

  }
}).then((result)=>{
            if(result.data == true){
                vm.content = ''
                vm.headline = ''
                vm.$toast.success("Article Inserted Successfully")
            }else{
                vm.$toast.warning(result.data)
            }
        }).catch((error)=> vm.$toast.warning(error))

    }
  }

}




    



   </script>




