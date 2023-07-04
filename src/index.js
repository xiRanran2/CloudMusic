import Vue from 'vue';
import { Icon } from '@iconify/vue2';
import App from '@/App.vue';
import router from '@/router';
import Drawer from '@/components/Drawer';
import Switch from '@/components/Switch';
// import Dialog from '@/components/Dialog';
Vue.use(Switch);
Vue.component('Icon', Icon);
Vue.use(Drawer);
// Vue.use(Dialog);

//Vue.extend 给Vue的构造函数配置项设置默认值


// const ChildVue = new Vue.extend({
//   template: '<h1>{{msg}}<h1>',
//   data(){
//     return {
//       msg:'123'
//     }
//   }
// });
// // new Vue();
// new ChildVue({
//   el:'#app',
//   data(){
//     return {
//       msg:'abc'
//     }
//   }
// });

const app = new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});

// window.app = app;
// console.log(app);