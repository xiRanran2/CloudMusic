<template>
  <div :class="{ dark: switchCheckStatus }">
    <div class="bg-[#3e3a3a]  dark:bg-[#dac9c9] dark:text-[#000]">
      <header class="w-[90vw] m-auto h-[10vw] relative p-[1vw]">
        <div class="flex justify-around items-center pt-[2vw]">
          <span @click="drawerList = !drawerList">
            <Icon icon="pepicons-pop:menu" color="white" class="text-[6vw]" />
          </span>
          <div class="relative">
            <input
              type="text"
              :placeholder="defaultSearch.showKeyword"
              v-model="userSearchKeywords"
              class="w-[70vw] h-[6vw] rounded-3xl pl-[7vw] "
            />
            <Icon
              icon="carbon:search"
              color="Seashell3"
              class="text-[5vw] absolute bottom-[0.5vw] left-[1.5vw] text-[#615d5e]  dark:text-[#000]"
              @click.native="searchHandler(userSearchKeywords)"
            />
          </div>
          <Icon icon="ph:microphone-bold" color="white" class="text-[6vw]" />
          <ul
            v-if="searchSuggestList.length"
            class="absolute z-50 mb-[0.5vw] top-[8vw] left-[16vw] text-[2vw]"
            id="ulNode"
          >
            <li
              v-for="item in searchSuggestList"
              :key="item.id"
              @click="searchHandler(item.name)"
              class="w-[60vw] mb-[1vw] z-99 text-white bg-pink-700"
            >
              {{ item.name }}
            </li>
          </ul>
        </div>
      </header>

      <!-- 插槽 -->
      <Drawer :visible.sync="drawerList" direction="ltr">
        <div class="mt-[11vw]">
          <!-- 黑胶会员 -->
          <div
            class="w-[72vw] h-[26vw] ml-[2vw] pt-[2vw] px-[3vw] pb-[3.5vw] mt-[2vw] mb-[3vw] flex flex-col justify-between text-[3vw] bg-gradient-to-r from-[#3e3c3a] to-[#8d7168] rounded-2xl dark:bg-[#bfa5a5]"
          >
            <div class="flex justify-between items-center">
              <div>
                <p class="text-[3.89vw] text-[#fce3e1]">开通黑胶VIP</p>
                <p class="text-[#a08d89]">立享超21项专属特权 ></p>
              </div>
              <div
                class="w-[16.39vw] h-[6.39vw] text-[#a9948e] border-[2px] border-[#a9948e] rounded-[20px] text-center leading-[6.39vw]"
              >
                会员中心
              </div>
            </div>
            <p class="text-[#a08d89]">专享优惠!黑胶VIP仅￥0.26/天!</p>
          </div>
          <!-- 消息 -->
          <div
            class="w-[72vw] w dark:text-[#050303] h-[30vw] bg-[#413535] rounded-[2vw] mt-[2vw] ml-[2vw] m-[1vw] dark:bg-[#bfa5a5]"
          >
            <div
              class="border-b-[1px] h-[10vw] border-[#474343] dark:border-[#a39d9d] flex justify-between items-center"
            >
              <div class="flex items-center">
                <Icon
                  class="ml-[2vw]"
                  icon="mdi-light:email"
                  width="20"
                  height="20"
                />
                <span class="ml-[2vw] text-sm">消息中心</span>
              </div>
              <div>
                <Icon
                  icon="ep:arrow-up"
                  class="c"
                  width="20"
                  height="20"
                  :rotate="1"
                />
              </div>
            </div>
            <div
              class="border-b-[1px] h-[10vw] border-[#474343] dark:border-[#a39d9d] flex justify-between items-center"
            >
              <div class="flex">
                <Icon class="ml-[2vw]" icon="system-uicons:inbox" />
                <span class="ml-[2vw] text-sm">云贝中心</span>
              </div>
              <div class="flex">
                <span class="text-[1vw] ml-[3vw] mr-[2vw] c">签到</span>
                <Icon
                  icon="ep:arrow-up"
                  width="20"
                  height="20"
                  :rotate="1"
                  class="c"
                />
              </div>
            </div>
            <div class="h-[10vw] flex justify-between items-center">
              <div class="flex">
                <Icon class="ml-[2vw]" icon="system-uicons:lightbulb-on" />
                <span class="ml-[2vw] text-sm">创作者中心</span>
              </div>
              <div>
                <Icon
                  icon="ep:arrow-up"
                  width="20"
                  height="20"
                  :rotate="1"
                  class="c"
                />
              </div>
            </div>
          </div>
          <!-- 服务 -->
          <div
            class="w-[72vw] h-[76vw] w dark:text-[#060505] bg-[#413535] rounded-[2vw] ml-[2vw] mt-[2vw] m-[1vw] dark:bg-[#bfa5a5]"
          >
            <p
              class="border-b-[1px] h-[6vw] text-[1vw] ml-[3vw] border-[#474343] dark:border-[#a39d9d] leading-[7vw] c"
            >
              音乐服务
            </p>
            <div class="h-[10vw] flex justify-between items-center">
              <div class="flex">
                <Icon class="ml-[2vw]" icon="mdi:star-david" />
                <span class="ml-[2vw] text-sm">趣测</span>
              </div>
              <div class="flex">
                <span class="mr-[2vw] text-[1vw] ml-[3vw] c"
                  >点击查看今日运势</span
                >
                <Icon
                  icon="ep:arrow-up"
                  width="20"
                  height="20"
                  :rotate="1"
                  class="c"
                />
              </div>
            </div>
            <div class="h-[10vw] flex justify-between items-center">
              <div class="flex">
                <Icon class="ml-[2vw]" icon="icomoon-free:ticket" />
                <span class="ml-[2vw] text-sm">云村有票</span>
              </div>
              <div class="flex">
                <Icon
                  icon="ep:arrow-up"
                  width="20"
                  height="20"
                  :rotate="1"
                  class="c"
                />
              </div>
            </div>
            <div class="h-[10vw] flex justify-between items-center">
              <div class="flex">
                <Icon class="ml-[2vw]" icon="system-uicons:archive" />
                <span class="ml-[2vw] text-sm">多多西西口袋</span>
              </div>
              <div class="flex">
                <Icon
                  icon="ep:arrow-up"
                  width="20"
                  height="20"
                  :rotate="1"
                  class="c"
                />
              </div>
            </div>
            <div class="h-[10vw] flex justify-between items-center">
              <div class="flex">
                <Icon class="ml-[2vw]" icon="mdi:local-mall-outline" />
                <span class="ml-[2vw] text-sm">商场</span>
              </div>
              <div class="flex">
                <Icon
                  icon="ep:arrow-up"
                  width="20"
                  height="20"
                  :rotate="1"
                  class="c"
                />
              </div>
            </div>
            <div class="h-[10vw] flex justify-between items-center">
              <div class="flex">
                <Icon class="ml-[2vw]" icon="tabler:heartbeat" />
                <span class="ml-[2vw] text-sm">Beat专区</span>
              </div>
              <div class="flex">
                <span class="mr-[2vw] text-[1vw] ml-[3vw] c"
                  >顶尖制作邀你创作</span
                >
                <Icon
                  icon="ep:arrow-up"
                  width="20"
                  height="20"
                  :rotate="1"
                  class="c"
                />
              </div>
            </div>
            <div class="h-[10vw] flex justify-between items-center">
              <div class="flex">
                <Icon class="ml-[2vw]" icon="system-uicons:bell-ringing" />
                <span class="ml-[2vw] text-sm">口袋彩铃</span>
              </div>
              <div class="flex">
                <Icon
                  icon="ep:arrow-up"
                  width="20"
                  height="20"
                  :rotate="1"
                  class="c"
                />
              </div>
            </div>
            <div class="h-[10vw] flex justify-between items-center">
              <div class="flex">
                <Icon class="ml-[2vw]" icon="icon-park-outline:game-three" />
                <span class="ml-[2vw] text-sm">游戏专区</span>
              </div>
              <div class="flex">
                <span class="mr-[2vw] text-[1vw] ml-[3vw] c"
                  >音乐浇灌治愈花园</span
                >
                <Icon
                  icon="ep:arrow-up"
                  width="20"
                  height="20"
                  :rotate="1"
                  class="c"
                />
              </div>
            </div>
          </div>
          <!-- 其他 -->
          <div
            class="other w-[72vw] w dark:text-[#050303] bg-[#413535] rounded-[2vw] mt-[2vw] ml-[2vw] m-[1vw] dark:bg-[#bfa5a5]"
          >
            <p
              class="border-b-[1px] h-[6vw] text-[1vw] ml-[3vw] border-[#474343] leading-[7vw] c"
            >
              其他
            </p>
            <div class="h-[10vw] flex justify-between items-center">
              <div class="flex">
                <Icon class="ml-[2vw]" icon="icon-park-outline:setting-one" />
                <span class="ml-[2vw] text-sm">设置</span>
              </div>
              <div class="flex">
                <Icon
                  icon="ep:arrow-up"
                  width="20"
                  height="20"
                  :rotate="1"
                  class="c"
                />
              </div>
            </div>
            <div class="h-[10vw] flex justify-between items-center">
              <div class="flex">
                <Icon class="ml-[2vw]" icon="line-md:moon" />
                <span 
                    class="ml-[2vw] text-sm"
                >
                    深色模式
                </span>
              </div>
              <div class="flex">
                <v-switch v-model="switchCheckStatus" />
                <Icon
                  icon="ep:arrow-up"
                  width="20"
                  height="20"
                  :rotate="1"
                  class="c"
                />
              </div>
            </div>
            <div class="h-[10vw] flex justify-between items-center">
              <div class="flex">
                <Icon class="ml-[2vw]" icon="ic:baseline-more-time" />
                <span class="ml-[2vw] text-sm">定时关闭</span>
              </div>
              <div class="flex">
                <Icon
                  icon="ep:arrow-up"
                  width="20"
                  height="20"
                  :rotate="1"
                  class="c"
                />
              </div>
            </div>
            <div class="h-[10vw] flex justify-between items-center">
              <div class="flex">
                <Icon class="ml-[2vw]" icon="mdi:local-mall-outline" />
                <span class="ml-[2vw] text-sm">个性装扮</span>
              </div>
              <div class="flex">
                <Icon
                  icon="ep:arrow-up"
                  width="20"
                  height="20"
                  :rotate="1"
                  class="c"
                />
              </div>
            </div>
            <div class="h-[10vw] flex justify-between items-center">
              <div class="flex">
                <Icon class="ml-[2vw]" icon="ion:headset-outline" />
                <span class="ml-[2vw] text-sm">边听边存</span>
              </div>
              <div class="flex">
                <span class="mr-[2vw] text-[1vw] ml-[3vw] c">未开启</span>
                <Icon
                  icon="ep:arrow-up"
                  width="20"
                  height="20"
                  :rotate="1"
                  class="c"
                />
              </div>
            </div>
            <div class="h-[10vw] flex justify-between items-center">
              <div class="flex">
                <Icon class="ml-[2vw]" icon="bi:card-text" />
                <span class="ml-[2vw] text-sm">在线听歌免流量</span>
              </div>
              <div class="flex">
                <Icon
                  icon="ep:arrow-up"
                  width="20"
                  height="20"
                  :rotate="1"
                  class="c"
                />
              </div>
            </div>
            <div class="h-[10vw] flex justify-between items-center">
              <div class="flex">
                <Icon class="ml-[2vw]" icon="ph:prohibit" />
                <span class="ml-[2vw] text-sm">音乐黑名单</span>
              </div>
              <div class="flex">
                <Icon
                  icon="ep:arrow-up"
                  width="20"
                  height="20"
                  :rotate="1"
                  class="c"
                />
              </div>
            </div>
            <div class="h-[10vw] flex justify-between items-center">
              <div class="flex">
                <Icon class="ml-[2vw]" icon="icon-park-outline:protect" />
                <span class="ml-[2vw] text-sm">青少年模式</span>
              </div>
              <div class="flex">
                <span class="mr-[2vw] text-[1vw] ml-[3vw] c">未开启</span>
                <Icon
                  icon="ep:arrow-up"
                  width="20"
                  height="20"
                  :rotate="1"
                  class="c"
                />
              </div>
            </div>
            <div class="h-[10vw] flex justify-between items-center">
              <div class="flex">
                <Icon class="ml-[2vw]" icon="mdi:alarm-clock" />
                <span class="ml-[2vw] text-sm">音乐闹钟</span>
              </div>
              <div class="flex">
                <Icon
                  icon="ep:arrow-up"
                  width="20"
                  height="20"
                  :rotate="1"
                  class="c"
                />
              </div>
            </div>
          </div>
          <!-- 我的 -->
          <div
            class="others w-[72vw] w dark:text-[#060505] bg-[#413535] rounded-[2vw] mt-[2vw] ml-[2vw] m-[1vw] dark:bg-[#bfa5a5]"
          >
            <div class="h-[10vw] flex justify-between items-center">
              <div class="flex">
                <Icon class="ml-[2vw]" icon="ph:sim-card-light" />
                <span class="ml-[2vw] text-sm">我的订单</span>
              </div>
              <div class="flex">
                <Icon
                  icon="ep:arrow-up"
                  width="20"
                  height="20"
                  :rotate="1"
                  class="c"
                />
              </div>
            </div>
            <div class="h-[10vw] flex justify-between items-center">
              <div class="flex">
                <Icon class="ml-[2vw]" icon="ri:coupon-line" />
                <span class="ml-[2vw] text-sm">优惠卷</span>
              </div>
              <div class="flex">
                <Icon
                  icon="ep:arrow-up"
                  width="20"
                  height="20"
                  :rotate="1"
                  class="c"
                />
              </div>
            </div>
            <div class="h-[10vw] flex justify-between items-center">
              <div class="flex">
                <Icon class="ml-[2vw]" icon="ion:headset-outline" />
                <span class="ml-[2vw] text-sm">我的客服</span>
              </div>
              <div class="flex">
                <Icon
                  icon="ep:arrow-up"
                  width="20"
                  height="20"
                  :rotate="1"
                  class="c"
                />
              </div>
            </div>
            <div class="h-[10vw] flex justify-between items-center">
              <div class="flex">
                <Icon class="ml-[2vw]" icon="ri:share-circle-fill" />
                <span class="ml-[2vw] text-sm">分享网易云音乐</span>
              </div>
              <div class="flex">
                <Icon
                  icon="ep:arrow-up"
                  width="20"
                  height="20"
                  :rotate="1"
                  class="c"
                />
              </div>
            </div>
            <div class="h-[10vw] flex justify-between items-center">
              <div class="flex">
                <Icon class="ml-[2vw]" icon="ion:headset-outline" />
                <span class="ml-[2vw] text-sm">个人信息收集与使用清单</span>
              </div>
              <div class="flex">
                <Icon
                  icon="ep:arrow-up"
                  width="20"
                  height="20"
                  :rotate="1"
                  class="c"
                />
              </div>
            </div>
            <div class="h-[10vw] flex justify-between items-center">
              <div class="flex">
                <Icon class="ml-[2vw]" icon="icons8:share" />
                <span class="ml-[2vw] text-sm">个人信息第三方共享清单</span>
              </div>
              <div class="flex">
                <Icon
                  icon="ep:arrow-up"
                  width="20"
                  height="20"
                  :rotate="1"
                  class="c"
                />
              </div>
            </div>
            <div class="h-[10vw] flex justify-between items-center">
              <div class="flex">
                <Icon class="ml-[2vw]" icon="carbon:ibm-cloud-key-protect" />
                <span class="ml-[2vw] text-sm">个人信息与隐私保护</span>
              </div>
              <div class="flex">
                <Icon
                  icon="ep:arrow-up"
                  width="20"
                  height="20"
                  :rotate="1"
                  class="c"
                />
              </div>
            </div>
            <div class="h-[10vw] flex justify-between items-center">
              <div class="flex">
                <Icon class="ml-[2vw]" icon="mdi:about-circle-outline" />
                <span class="ml-[2vw] text-sm">关于</span>
              </div>
              <div class="flex">
                <Icon
                  icon="ep:arrow-up"
                  width="20"
                  height="20"
                  :rotate="1"
                  class="c"
                />
              </div>
            </div>
          </div>
        </div>
      </Drawer>

      <!-- 轮播图 -->
      <Banner :menu="menu"></Banner>
      <!-- 每日推荐 -->
      <div class="flex">
        <div class="menu flex w-[88%] overflow-auto m-auto mt-[3vw] relative">
          
          <DailyRecommend
            v-for="item in menulist"
            :key="item.id"
            :daily="item"
            class="mr-[3vw]"
          ></DailyRecommend>
        </div>
      </div>

      <!-- 推荐歌单 -->
      <RecommendedSongs
        :personalized="personalized"
        :bannerPic="bannerPic"
        :resourceData="resourceData"
      ></RecommendedSongs>

      <!-- 新歌新碟 -->
      <NewSongList :songList="songList"></NewSongList>
      <!-- 排行榜 -->
      <RankingList :blocks="blocks"></RankingList>

      <!-- 热门话题 -->
      <HotTopic :hottopic="hottopic"></HotTopic>

      <!-- 音乐日历 -->
      <!-- <MusicCalendar :Calendar="Calendar"></MusicCalendar> -->
      <musiccalender :calendar="calendar"></musiccalender>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
import _ from 'lodash';
// import Panel from './HomeView.vue';
import {
  fetchSearchDefault,
  fetchSearchResult,
  fetchSearchSuggest,
  Personalized,
  DailyRecommened,
  Banners,
  Calendar,
  HotTopics,
  // Canlanders,
} from '@/request';
export default {
  data() {
    return {
      menu: [],
      playlists: [],
      menulist: [],
      personalized: [],
      ranking: [],
      songList: [],
      blocks: [],
      calendar: [],
      hottopic:[],
      userSearchKeywords: '',
      defaultSearch: {},
      searchSuggestList: [],
      bannerPic: [],
      drawerList: false,
      show: false,
      resourceData: '',
      switchCheckStatus: false,
    };
  },
  components: {
    Search: () => import('../../components/Search.vue'), //头部搜索
    Banner: () => import('../../components/Banner.vue'), //轮播图
    DailyRecommend: () => import('../../components/DailyRecommend.vue'), //每日推荐
    RecommendedSongs: () => import('../../components/RecommendedSongs.vue'), //推荐歌单
    NewSongList: () => import('../../components/NewSongList.vue'), //新歌新碟
    RankingList: () => import('../../components/RankingList.vue'), //排行榜
    HotTopic: () => import('../../components/HotTopic.vue'), //热门话题
    // MusicCalendar: () => import('../../components/MusicCalendar.vue'), //音乐日历
    musiccalender:() => import('../../components/musiccalender.vue')
  },
  mounted(){
    // let firstText = document.querySelector('.firstText')  //获取节点
    // console.log(firstText);
  },
  methods: {
    async searchHandler(keywords) {
      const res = await fetchSearchResult({
        keywords: keywords || this.defaultSearch.realkeyword,
      });
    },
  },
  async created() {
    //获取搜索默认值
    const res = await fetchSearchDefault();
    this.defaultSearch = res.data.data;
    //每日推荐
    DailyRecommened().then((res) => {
      this.menulist = res.data.data;
      // console.log(res.data.data[0]);
    });
    Banners().then((res) => {
      this.menu = res.data.data.blocks[0].extInfo.banners; //banner轮播
      this.songList = res.data.data.blocks[5].creatives; //新歌新碟
      this.blocks = res.data.data.blocks[3].creatives; // 排行榜
      this.personalized = res.data.data.blocks[1].creatives.slice(1); //推荐歌单
      this.bannerPic = res.data.data.blocks[1].creatives[0].resources; //小轮播数据
      this.hottopic = res.data.data.blocks[4].creatives
      // this.resourceData = this.bannerPic[0].uiElement.mainTitle.title;
      console.log(this.hottopic);
    });
    // HotTopics().then((res) => {
    //   this.hottopic = res.data.data;
    //   console.log(res)
    // })
    //日历
    Calendar().then((res) => {
      // console.log(res)
      this.calendar = res.data.data.calendarEvents;
    })
  },
  watch: {
    userSearchKeywords: _.debounce(async function (keywords) {
      const res = await fetchSearchSuggest(keywords);
      this.searchSuggestList = res.data.result.songs;
    }, 300),
  },
};
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
.van-swipe__indicators > .van-swipe__indicator {
  width: 0;
  height: 0;
}
.other {
  height: 95vw;
}
.others {
  height: 80vw;
}
.w {
  color: #fff;
}

.c {
  color: #918888;
}
</style>
