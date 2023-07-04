//数据仓库对象(VUe插件)

// import Vue from "vue"
let Vue = null;
let store = null;

export const mapMutations = (mutationKeys = []) => {
    return mutationKeys.reduce((prev,key) => {
        prev[key] = store.mutations[key];
        return prev;
    },{})
}

//MapState(['count','msg'])
export const mapState = (stateKeys = []) => {
    // let o = {};
    // for(let key of stateKeys){
    //     o[key] = function(){
    //         return store.state[key]
    //     }
    // }
    // return o;
    return stateKeys.reduce((prev,key) => {
        prev[key] = function(){
            return store.state[key]
        }
        return prev
    },{})
}

export default {
    Store:class{  //给对象一个属性，属性叫类
        constructor({state = {},mutations = {}}){
            this.state = Vue.observable(state)
            // [key,function]
            let o = {};
            for(let key in mutations){
                o[key] = () => {
                    mutations[key](this.state)
                }
            }
            this.mutations = o
        }
    },
    //install方法 
    install(_Vue){
        Vue = _Vue;   //这样可以全局使用构造函数
        Vue.mixin({  //混入 整合所有的配置项
            created(){  //混入一个生命周期 created ，每一个组件都会执行created
                if(!this.$parent){  //如果他没有父组件，他就是根实例
                    Vue.prototype.$store = this.$options.store;//把实例绑定给原型 ，外面实例化的store又传回来了
                    store  = this.$options.store
                }
            }
        })
    }
}