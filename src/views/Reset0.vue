<template>
    <div>
        <h1 ref="h1" @click="fn">{{count | fomate}}</h1>
        <!-- <h1 @click="() => count++">{{count}}</h1> -->
        <!-- <h1 @click="count++">{{count}}</h1> -->
        <button @click="changeAbc">changeAbc</button>
        <ul>
            <li v-for="item in arr" :key="item"> {{ item}}</li>
        </ul>
    </div>
</template>

<script>
import get from 'lodash/get';
import func from 'vue-editor-bridge';

    function initO(){
        let _a = 1 ;
        return {
            //对象a属性的存值器
            set(v){
                // _a = v;
                _a = Math.pow(v,2);
                document.body.innerHTML = `<h1>${this.a}</h1>`
            },
            //对象a属性的取值器
            get a(){
                return _a;
            },
            b:2,
        }
    }
    function reactive(data){
        //['a','b','c']
        Object.keys().forEach(function(key){
            Object.defineProperty(data,key,{
                set(){
                    _[key] = v;
                    // document.body.innerHTML = 
                },
                get(){
                    return _[key]
                }
            })
        })
    }

    reactive({a:{a:1,b:2,c:3},b:2,c:3})
                            
    window.o = initO()
    // console.log(o)
// import Vue from 'vue'
// data中的数据变化(同步)  => 数据对应的视图更新(异步)
    export default {
        data(){
            return {
                count:123,
                abc:112233,
                arr:[1,2,3]
            };
        },
        filters:{
            fomate(value){
                return `$:${value}.00元`
            }
        },
        methods:{
            fn(){
                // this.count++;
                this.count = 124;
                this.$nextTick(() => console.log(this.$refs.h1.innerText))
            },
            changeAbc(){
                this.abc = 4321
                console.log(this.abc)
            },
            addNewProp(){
                this.a = 1;
            }
        },
        updated(){
            console.log('updated')
            // console.log('updated',this.$refs.h1.innerText)
        },
        created
    }
</script>