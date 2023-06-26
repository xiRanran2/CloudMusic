<template>
    <div class="w-[750px] h-[1450px] overflow-hidden m-auto">
        <ul class="flex">
          <li v-for="item in menu" :key="item.id" v-on:click="toggleMenu(item.name)" class="mx-4 cursor-pointer"
            v-bind:class="{active: item.name === activeMenuItem}">
            {{item.name}}
          </li>
        </ul>
        <ul class="flex flex-wrap justify-between w-[590px] mt-7 m-auto">
          <li v-for="item in playlists" class="w-[150px]" :key="item.id">
            <div class="w-[150px] h-[150px] rounded overflow-hidden">
              <img :src="item.coverImgUrl" class="w-[150px] h-[150px]" alt="">
            </div>
            <p>{{item.name}}</p>
          </li>
        </ul>
      </div>
</template>
<script>
     import axios from 'axios';
    export default{
         data() {
    return{
      menu:[],
      activeMenuItem:'',
      playlists:[],
    };
  },
  methods:{
    toggleMenu(name){
      this.activeMenuItem=name;
      this.fetchPlaylists(name);
    },
    fetchPlaylists(cat){
       axios
       .get(
         'https://netease-cloud-music-api-five-roan-88.vercel.app/top/playlist',
        {
          patams:{cat}
        }
       )
       .then((res)=>{
          console.log(res.data.playlists);
          this.playlists=res.data.playlists;
       });
    },
  },
  created(){
    axios.get('https://netease-cloud-music-api-five-roan-88.vercel.app/playlist/hot')
    .then((res)=>{
        this.menu=res.data.tags;  
        return(this.activeMenuItem=this.menu[0].name);
    })
    .then((cat) => this.fetchPlaylists(cat))
    .catch((err) => console.log(err));
  },
    }

</script>
<style>
    .active {
        color: red;
    }
</style>