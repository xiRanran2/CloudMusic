<template>
  
    <div class="w-[750px] h-[1450px] overflow-hidden m-auto">
      <Icon icon="cil:apple" class="relative top-[10px]"/>
      <h1 class="text-center">歌单广场</h1>
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
        foo:{a:1,b:2,c:3},
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
      window.ins = this;
      axios.get('https://netease-cloud-music-api-five-roan-88.vercel.app/playlist/hot')
      .then((res)=>{
          this.menu=res.data.tags;  
          return(this.activeMenuItem=this.menu[0].name);
      })
      .then((cat) => this.fetchPlaylists(cat))
      .catch((err) => console.log(err));
    },

    // 监控某个响应数据发生变化之后执行指定的动作(函数)
    // methods,beforeCreate,created,watch 中的this指向vm
    // 简易写法 语法糖
    // watch: {
    //   activeMenuItem:function(newCat){
    //     this.fetchPlaylists(newCat);
    //   }
    // },

    // 升级写法
    watch : {
      activeMenuItem:{
        // 指定数据变化的回调函数
          handler:function(newCat){
            this.fetchPlaylists(newCat);
          },
        // 执行配置:立即执行
        immediate:true,
        // 监听配置:深度监听 用于
        // deep:true,
        //不加deep是对当前数据整体进行监听，性能更高，管辖范围更广
        foo:{
          handler(newValue){
              console.log(newValue);
          },
          deep:true,
        }
      },
    },
  }

</script>
<style>
    .active {
        color: red;
    }
</style>