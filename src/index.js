import Vue from 'vue';
import { Icon } from '@iconify/vue2';
import App from '@/App.vue';
import MineView from '@/views/MineView.vue'
Vue.component('MineView',MineView)
Vue.component('Icon', Icon);
new Vue({
  el: '#app',
  components:{App},
  template:`<App/>`,
  //实例已经创建 但是实例上的模板还没有渲染
  created(){
    console.log(this.$parent);  //[App]
    console.log(this.$children);  //[App]
  },
  mounted(){
    console.log(this.$children[0].$children);
  }
});
