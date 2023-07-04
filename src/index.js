import Vue from 'vue';
import { Icon } from '@iconify/vue2';
import App from '@/App.vue';
import router from '@/router';
import Drawer from '@/components/Drawer';
import Switch from '@/components/Switch';
Vue.use(Switch);
Vue.component('Icon', Icon);
Vue.use(Drawer);
import Vuex from '@/vuex'
Vue.use(Vuex) //把Vuex的构造函数传入到当前的js文件中
const store = new Vuex.Store({
  state:{
    count:123,
    msg:'hello,vuex!',
  },
  mutations:{
    increase(state){
      state.count++
    }
  }
})
const app = new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  created(){
    console.log(this.$store)
  }
});
// app.$mount(); // 把模板编译为浏览器能够识别的html片段并赋值给app的$el属性
// setTimeout(() => {
//   document.querySelector('body').appendChild(app.$el);
// }, 5000);
// window.app = app;
console.log(app);