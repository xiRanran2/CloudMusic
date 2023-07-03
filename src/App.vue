<template>
    <div class="w-screen h-screen">
      <h1> {{ a }}</h1>
      <component :is="currentComponent" />
      <!-- 内置组件  component：渲染其他的组件的组件 -->
    </div>
  </template>
  <script>
    import router from '@/router'
    export default {
      //混合
      mixins:[router],
      data(){
        return{
          a:123,
        }
      },
      ...router,
    };
  </script>
  <style>
    @tailwind base;
    @tailwind utilities;
    @tailwind components;
  </style>