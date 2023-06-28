<template>
  <div>
    <header class="w-[97vw] h-[10vw] relative mt-4">
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
            <img
              :src="item.pic"
              alt=""
              class="w-[92.22vw] h-[35.741vw] m-auto rounded-2xl"
            />
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>

      <!-- 每日推荐 -->
      <div class="flex">
        <ul class="menu flex w-[88%] overflow-auto m-auto mt-[3vw]">
          <li v-for="item in menulist" :key="item.id" class="mr-[3vw]">
            <img :src="item.iconUrl" class="red-image w-[15vw] h-[15vw]" />
            <p class="text-[1vw] text-[#aea4a4] w-[15vw] text-center">
              {{ item.name }}
            </p>
          </li>
        </ul>
      </div>

      <!-- 推荐歌单 -->
      <div>
        <div class="ml-[4vw] mt-[3vw]">
          <span class="text-[#fff]">推荐歌单</span>
          <Icon icon="bi:chevron-right" class="inline-block text-[#fff]" />
        </div>
      </div>
      <ul
        class="flex w-[98vw] h-[40vw] overflow-auto lis menu mt-[3vw] ml-[2vw]"
      >
        <li
          v-for="item in personalized"
          :key="item.id"
          class="w-[29vw] h-[40vw] text-[1vw] mr-[2vw]"
        >
          <img :src="item.picUrl" class="w-[29vw] h-[30vw] rounded-[3vw]" />
          <p class="text-[#fff]">{{ item.name }}</p>
        </li>
      </ul>

      <!-- 新歌新碟 -->
      <div>
        <div
          class="ml-[4vw] mt-[3vw] w-[90vw] flex m-auto justify-between items-center"
        >
          <div>
            <span class="text-[#fff]">新歌新碟\数字专辑</span>
            <Icon icon="bi:chevron-right" class="inline-block text-[#fff]" />
          </div>
          <Icon icon="uim:ellipsis-v" class="text-[#aea4a4]" />
        </div>
        <van-swipe class="my-swipe w-[90vw] flex mt-[2vw]"  indicator-color="white">
          <van-swipe-item v-for="item in songList"
          :key="item.id"
          class="w-[90vw] h-[61vw] flex flex-col ml-[2vw] mt-[1vw]">
            <div
            v-for="key in item.resources"
            :key="key.id"
            class="w-[90vw] flex flex-row items-center mb-[1vw]"
          >
            <img
              :src="key.uiElement.image.imageUrl"
              class="w-[20vw] rounded-[2vw]"
            />
            <div class="flex flex-col ml-[2vw] mb-[1vw]">
              <p class="text-[#fff] text-[3vw] mb-[2vw]">
                {{ key.uiElement.mainTitle.title }}
              </p>
              <p class="text-[#aea4a4] text-[1.5vw]">
                {{ key.uiElement.subTitle.title }}
              </p>
            </div>
          </div>
          </van-swipe-item>
        </van-swipe>
      </div>

      <!-- 排行榜 -->
      <div>
        <div
          class="ml-[4vw] mt-[3vw] w-[90vw] flex m-auto justify-between items-center"
        >
          <div>
            <span class="text-[#fff]">排行榜</span>
            <Icon icon="bi:chevron-right" class="inline-block text-[#fff]" />
          </div>
          <Icon icon="uim:ellipsis-v" class="text-[#aea4a4]" />
        </div>
        <van-swipe
          class="my-swipe pl-6"
          :autoplay="30000"
          :loop="false"
          indicator-color="white"
        >
          <van-swipe-item v-for="item in blocks" :key="item.id">
            <div
              :key="item.id"
              class="p-[2vw] mr-[10vw] overflow-hidden w-[90vw] m-[2.5vw] ml-0 h-[50vw] bg-[#4f5054] rounded-[2vw] scroll-item"
              ref="song"
            >
              <div class="flex justify-between w-[100%]">
                <div class="flex relative ">
                  <div class="text-[3vw] font-semibold  text-[white]">
                    {{ item.uiElement.mainTitle.title }}
                  </div>
                  <Icon icon="bi:chevron-right" class="text-[4vw] font-semibold absolute right-[-3vw]  inline-block text-[#fff]" />
                </div>
                <p
                  class="text-[3vw] leading-[7vw] text-ellipsis overflow-hidden whitespace-nowrap text-[#aea4a4]"
                >
                  {{ item.uiElement.mainTitle.titleDesc }}
                </p>
              </div>
              <ul class="">
                <li
                  v-for="(items, indexs) in 3"
                  :key="indexs.id"
                  class="mb-[3vw]"
                >
                  <div class="flex relative w-[100%]">
                    <img
                      :src="
                        item.resources[indexs].resourceExtInfo?.songData.album
                          .blurPicUrl
                      "
                      class="w-[10vw]"
                      alt=""
                    />
                    <p class="text-[5vw] w-[10vw] text-center">
                      {{ indexs + 1 }}
                    </p>
                    <div>
                      <p
                        class="text-[3.5vw] font-normal w-[40vw] text-ellipsis overflow-hidden whitespace-nowrap"
                      >
                        {{
                          item.resources[indexs].resourceExtInfo?.songData.name
                        }}
                      </p>
                      <p class="text-[2.5vw]">
                        {{
                          item.resources[indexs].resourceExtInfo?.artists[0]
                            .name
                        }}
                        <span
                          class="absolute w-[8vw] h-[5vw] right-[3vw] text-[3vw] top-[1vw]"
                          ref="sps"
                          :style="{ color: 'red' }"
                          >{{
                            item.resources[indexs]?.uiElement.labelText.text
                          }}</span
                        >
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </van-swipe-item>
        </van-swipe>
      </div>

      <!-- 热门话题 -->
      <div>
        <div
          class="ml-[4vw] mt-[3vw] w-[90vw] flex m-auto justify-between items-center"
        >
            <span class="text-[#fff]">热门话题</span>
          <Icon icon="uim:ellipsis-v" class="text-[#aea4a4]" />
        </div>
        <van-swipe class="my-swipe w-[70vw] h-[30vw] bg-red-800 rounded-[2vw] ml-[4vw]" :autoplay="3000" indicator-color="white">
          <van-swipe-item class="mr-[2vw]">
            
          </van-swipe-item>
          
        </van-swipe>
      </div>

      <!-- 音乐日历 -->
      <div>
        <div
          class="ml-[4vw] mt-[3vw] w-[90vw] flex m-auto justify-between items-center"
        >
            <div class="flex items-center w-[21vw] justify-between">
              <span class="text-[#fff] text-[3vw]">音乐日历</span>
              <div class="flex items-center w-[7vw] h-[3vw] rounded-[1.5vw] text-center bg-slate-400">
                <span class="text-[#fff] text-[1vw]">更多</span>
                <Icon icon="bi:chevron-right" class="text-[2vw] inline-block text-[#fff]" />
              </div>
            </div>
          <Icon icon="uim:ellipsis-v" class="text-[#aea4a4]" />
        </div>
        <ul class="w-[90vw] mt-[2vw] h-[38vw] bg-red-800 rounded-[2vw] ml-[4vw]">
           
        </ul>
      </div>
    </section>
  </div>
</template>
<script>
import axios from 'axios';
export default {
  data() {
    return {
      menu: [],
      activeMenuItem: '',
      playlists: [],
      menulist: [],
      personalized: [],
      ranking: [],
      songList: [],
      blocks: [],
      calendar:[],
    };
  },
  methods: {
    toggleMenu(name) {
      this.activeMenuItem = name;
      this.fetchPlaylists(name);
    },
    fetchPlaylists(cat) {
      axios
        .get(
          'https://netease-cloud-music-api-five-roan-88.vercel.app/top/playlist',
          {
            patams: { cat },
          }
        )
        .then((res) => {
          this.playlists = res.data.playlists;
        });
    },
  },
  created() {
    //banner轮播
    axios
      .get(
        'https://netease-cloud-music-c2c1ys55f-cc-0820.vercel.app/homepage/block/page'
      )
      .then((res) => {
        this.menu = res.data.data.blocks[0].extInfo.banners;
      })
      .catch((err) => console.log(err));
    //每日推荐
    axios
      .get(
        'https://netease-cloud-music-c2c1ys55f-cc-0820.vercel.app/homepage/dragon/ball'
      )
      .then((res) => {
        this.menulist = res.data.data;
        // console.log(this.menulist)
      })
      .catch((err) => console.log(err));
    //推荐歌单
    axios
      .get(
        'https://netease-cloud-music-c2c1ys55f-cc-0820.vercel.app/personalized'
      )
      .then((res) => {
        this.personalized = res.data.result;
      })
      .catch((err) => console.log(err));
    //新歌新碟
    axios
      .get(
        'https://netease-cloud-music-c2c1ys55f-cc-0820.vercel.app/homepage/block/page'
      )
      .then((res) => {
        this.songList = res.data.data.blocks[5].creatives;
        // console.log(this.songList);
      })
      .catch((err) => console.log(err));
    // 排行榜
    axios
      .get(
        'https://netease-cloud-music-c2c1ys55f-cc-0820.vercel.app/homepage/block/page'
      )
      .then((res) => {
        console.log(res.data.data.blocks[3].creatives);
        this.blocks = res.data.data.blocks[3].creatives;
      })
      .catch((err) => { console.log(err); });
      // 热门话题
      // axios
      //   .get(
      //     'https://netease-cloud-music-c2c1ys55f-cc-0820.vercel.app'
      //   )
      //   .then((res) => {
      //     console.log(res.data.data.blocks[3].creatives);
      //     this.blocks = res.data.data.blocks[3].creatives;
      //   })
      //   .catch((err) => { console.log(err); });
      //日历
      axios
        .get(
          'https://netease-cloud-music-api-five-roan-88.vercel.app/calendar?startTime=1654166400000&endTime=1674943999999'
        )
        .then((res) => {
          this.calendar = res.data;
        })
        .catch((err) => {console.log(err)})
  },
};
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
  img {
    max-width: none;
  }
  .red-image {
    filter: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'><filter id='colorize'><feColorMatrix type='matrix' values='1 0 0 0 0.698 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0'/></filter></svg>#colorize");
  }
  .menu::-webkit-scrollbar {
    height: 0px;
    width: 20px;
  }
  .van-swipe__indicators>.van-swipe__indicator{
    width: 0;
    height: 0;
  }
</style>
