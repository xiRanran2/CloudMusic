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
        //$attrs
        //$props(被代理了的)
        //在组件封装属性时我们可选的属性类型：attr属性、prop属性
        //其中两者都可以把数据从父组件传递到子组件
        //两者区别：
        //atter属性开箱即用 不需要额外配置 但是使用略显繁琐 而且不具备属性类型检测等功能
        //prop属性需要现在对应组建中使用props配置项先行配置才可使用 使用简单 具备属性值类型检测等功能
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
