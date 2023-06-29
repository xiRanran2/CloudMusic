<template>
    <div class="w-[32vw] h-[16vw] bg-contain bg-red-400" style="background-image: url(https://fastly.picsum.photos/id/17/2500/1667.jpg?hmac=HD-JrnNUZjFiP2UZQvWcKrgLoC_pc_ouUSWv8kHsJJY);">
      <div>安静的写作咯</div>
    </div>
  </template>
  <script>
      export default{
          data(){
              return {
                  a:1,
              };
          },
          props:['source'],
          props:{
              source:{
                  //属性值的类型，目前类型对应数据的构造函数表达，如果约束为多种类型用数组表达
                  type:Object,
                  //是否必须传递
                  require:true,
              },
              count:{
                  type:Number,
                  validator(value){
                      return [1,2,3].includes(value)
                  }
              }
          },
          mounted(){
              console.log(this)
          }
      }
  </script>