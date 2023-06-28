<template>
    <div>
        <header class="w-[97vw] h-[10vw] relative  m-auto">
            <div class="flex justify-around items-center">
              <Icon icon="pepicons-pop:menu"  class="text-[6vw]" />
              <div class="relative">
                <input
                  type="text"
                  :placeholder="defaultSearch.showKeyword"
                  v-model="userSearchKeywords"
                  class="w-[70vw] h-[8vw] rounded-3xl pl-6 bg-[#c97d7d]"
                />
                <Icon
                  icon="carbon:search"
                  color="Seashell3"
                  class="text-[6vw] absolute bottom-[2px] left-[4px]"
                  @click.native="searchHandler(userSearchKeywords)"
                />
              </div>
              <Icon icon="ph:microphone-bold"  class="text-[6vw]" />
            </div>
        </header>
        <ul v-if="searchSuggestList.length">
            <li v-for="item in searchSuggestList" :key="item.id" @click="searchHandler(item.name)">{{item.name}}</li>
        </ul>
        <RecommondPlaylistItem v-for="playlists in recommondPlaylist" />   
    </div>
    
</template>

<script>
import _ from 'lodash';
import {
  fetchSearchDefault,
  fetchSearchResult,
  fetchSearchSuggest,
  detchHome,
} from '@/request';
import RecommondPlaylistItem from './components/RecommondPlaylistItem.vue';
export default {
  data() {
    return {
      userSearchKeywords: '',
      defaultSearch: {},
      searchSuggestList: [],
    };
  },
  methods: {
    async searchHandler(keywords) {
      const res = await fetchSearchResult({
        keywords: keywords || this.defaultSearch.realkeyword,
      });
      console.log(res);
    },
  },
  async created() {
    //获取首页数据
    // const homeData = await
    //获取搜索默认值
    const res = await fetchSearchDefault();
    this.defaultSearch = res.data.data;
  },
  watch: {
    // async userSearchKeywords(keywords){
    //     const res = await fetchSearchSuggest(keywords);
    //     this.searchSuggestList = res.data.result.songs;
    // },
    userSearchKeywords: _.debounce(async function (keywords) {
      const res = await fetchSearchSuggest(keywords);
      this.searchSuggestList = res.data.result.songs;
    }, 300),
  },
};
</script>

<style scoped>
.active {
  background-color: pink;
  color: aqua;
  text-align: center;
}
</style>