<template>
  <div>
    <header class="w-[97vw] h-[10vw] relative mt-4 bg-gradient-to-r from-black to-red-500">
      <div class="flex justify-around items-center">
        <Icon icon="pepicons-pop:menu" color="white" class="text-[6vw]" />
        <div class="relative">
          <input
            type="text"
            placeholder="足够 周星星"
            class="w-[70vw] h-[6vw] rounded-3xl pl-6 border-amber-400"
          />
          <Icon
            icon="carbon:search"
            color="Seashell3"
            class="text-[6vw] absolute bottom-0 left-[4px]"
          />
        </div>
        <Icon icon="ph:microphone-bold" color="white" class="text-[6vw]" />
      </div>
    </header>

    <section>
        <!-- 轮播图 -->
      <div class="swiper mySwiper mt-[4.537vw]">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="item in menu" :key="item.id">
              <img :src="item.pic" alt="" class="w-[92.22vw] h-[35.741vw]
            m-auto rounded-2xl">
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>

      <!-- 每日推荐 -->
      <div class="flex  ">
          <ul class="menu flex w-[88%] overflow-auto m-auto  mt-[3vw]">
              <li v-for="item in menulist" :key="item.id" class="mr-[3vw]">
                    <img :src="item.iconUrl" class="red-image w-[15vw] h-[15vw]" />
                 <p class="text-[1vw] text-[#aea4a4] w-[15vw] text-center">{{item.name}}</p>
              </li>
          </ul>
      </div>

      <!-- 推荐歌单 -->
      <div>
        <div class=" ml-[4vw] mt-[3vw]">
            <span class="text-[#fff]">推荐歌单</span>
            <Icon icon="bi:chevron-right" class="inline-block text-[#fff]"/>
        </div>
      </div>
      <ul class="flex w-[98vw] h-[39vw] overflow-auto lis menu mt-[3vw] ml-[2vw]">
        <li v-for="item in personalized" :key="item.id" class="w-[29vw] h-[39vw] text-[1vw] mr-[2vw]">
            <img :src="item.picUrl" class="w-[29vw] h-[30vw] rounded-[3vw]">
            <p class="text-[#fff]">{{item.name}}</p>
        </li>
      </ul>
    </section>
  </div>
</template>
<script>
    import axios from 'axios';
    import Swiper from 'swiper';
    export default{
        data() {
            return{
                menu:[],
                activeMenuItem:'',
                playlists:[],
                menulist:[],
                personalized:[],
                ranking: [],
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
                    this.playlists=res.data.playlists;
                });
            },
        },
        created(){
            //banner轮播
            axios.get('https://netease-cloud-music-c2c1ys55f-cc-0820.vercel.app/homepage/block/page')
                 .then((res)=>{
                    this.menu=res.data.data.blocks[0].extInfo.banners; 
                 })
                 .catch((err) => console.log(err));
            //每日推荐
            axios.get('https://netease-cloud-music-c2c1ys55f-cc-0820.vercel.app/homepage/dragon/ball')
                 .then((res) =>{
                    this.menulist = res.data.data;
                    // console.log(this.menulist)
                 })
                 .catch((err) => console.log(err));
            //推荐歌单
            axios.get('https://netease-cloud-music-c2c1ys55f-cc-0820.vercel.app/personalized')
                 .then((res)=>{
                    this.personalized = res.data.result;
                    console.log(this.personalized);
                 })
                 .catch((err) => console.log(err));
        },
    }
    var swiper = new Swiper('.mySwiper', {
        pagination: {
            el: '.swiper-container',
        },
    });
</script>
<style>
    body {
        background-color: #2d2c2c;
    }
    img{
        max-width: none;
    }
    .red-image {
        filter: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'><filter id='colorize'><feColorMatrix type='matrix' values='1 0 0 0 0.698 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0'/></filter></svg>#colorize");
    }
    .menu::-webkit-scrollbar {
        height: 0px;
        width: 20px;
    }
</style>
