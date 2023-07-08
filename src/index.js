import Vue from 'vue';
window.V = Vue;
import { Icon } from '@iconify/vue2';
import App from '@/App.vue';
import router from '@/router';
import store from '@/store'
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
  render(h){
    return h(App);
  },
  // render:(h) => h(App),
  created(){
    console.log(this.$store)
  }
});
console.log(app);