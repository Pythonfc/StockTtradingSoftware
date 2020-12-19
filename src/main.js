
import Vue from 'vue'

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import App from './App.vue'
Vue.use(MintUI)

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import VueResource from 'vue-resource'
Vue.use(VueResource)

import Vant from 'vant'
import 'vant/lib/index.css';
Vue.use(Vant)

import router from './router.js'
import 'vant/lib/icon/local.css';

import Vuex from 'vuex'
Vue.use(Vuex)

// 拍照
import Mui from 'vue-awesome-mui';
Vue.config.productionTip = false
Vue.use(Mui);

let store = new Vuex.Store({
    state:{
        comments: [
            {desc: "新闻很精彩"}
        ],
        stockName:'阿里巴巴',
    },
    mutations: {},
    getters: {

    }
})


var vm = new Vue({
    methods: {
        show: function(){
            alert(111)
        }
    },
    render: c => c(App),
    router,
    store
}).$mount('#app')