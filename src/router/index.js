import IndexView from '@/views/IndexView.vue';
import HomeView from '@/views/HomeView/HomeView.vue';
  import MineView from '@/views/MineView.vue';
  const viewMap = {
    IndexView,
    HomeView,
    MineView
  }
  export default {
    // components: { IndexView, HomeView },
    data() {
      return {
        visibleView: 'HomeView',
      };
    },
    //动态返回一个数据的data
    //computed  === methods + data
    computed:{
      currentComponent(){
        return viewMap[this.visibleView]
      }
    },
    beforeCreate() {
      window.onhashchange = () => {
        this.visibleView = location.hash.replace('#', '');
        console.log(this.visibleView);
      };
    },
    created() {
      window.vm = this;
    },
  };