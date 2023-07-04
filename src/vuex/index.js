//数据仓库对象(VUe插件)

// import Vue from "vue"
let Vue = null;
let store = null;

export default {
    Store:class{
        constructor({state}){
            this.state = Vue.observable(state)
        }
    },
    install(_Vue){
        Vue = _Vue;
        Vue.mixin({
            created(){
                if(!this.$parent){
                    Vue.proptotype.$store = this.$options.store;
                    store  = this.$options.store
                }
            }
        })
    }
}