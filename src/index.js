import Vue from 'vue';
import template_index from './index.template';

const vm = new Vue({
  el: '#app',
  //指令是出现在模板中
  //模板语法：指令
  //模板在一定程度上与html片段相似  html+指令 === template
  // template : '<h1>hello, vuejs!</h1>',
  // template:`
  //           <div class="w-[100px] h-[100px] bg-red-500">
  //               <div>123</div>
  //           </div>
  //         `,
  template:template_index,
  data() {
    return {
      msg: 'hello, vuejs!',
    };
  },
});
