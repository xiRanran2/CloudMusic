import Vue from 'vue';
import { Drawer } from '@iconify/vue2';
import App from '@/App.vue';
import MineView from '@/views/MineView.vue'
import Drawer from '@/components/Drawer.vue'
Vue.component('MineView',MineView)
Vue.component('Icon', Icon);
Vue.component('Drawer', Drawer);
//vm就是根实例 root 具备el
//但是其他实例不觉比
//组件的嵌套  A组件出现在B组件的template中 A是B的子组件
//如果一个组件没有父组件 ，则说明它是root组件
/*
组件树
  root
    App
      IndexView
      HomeView
*/
//vm.$parent  返回父组件
//vm.$children  返回子组件
//vm.$root  返回根组件
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

// 组件分类
// 页面组件 业务组件
// 内置组件 第三方组件 自定义组件
// 局部组件 全局组件 (引入文件、注册主键、使用标签) 全局组件
