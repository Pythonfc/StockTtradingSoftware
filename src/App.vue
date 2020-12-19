<template>
    <div>
        <van-tabbar v-model="active" active-color="rgb(233,49,49)" inactive-color="#fff" v-show="hidshow">
            <van-tabbar-item replace icon="eye-o" to="/index/zixun"> 首页</van-tabbar-item>
            <van-tabbar-item icon="chart-trending-o" to="/quotation">行情</van-tabbar-item>
            <van-tabbar-item icon="refund-o" to="/free">交易</van-tabbar-item>
            <van-tabbar-item icon="description" to="/transaction">资讯</van-tabbar-item>
        </van-tabbar>
        <div class="section">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
    import Vue from 'vue';
    import { Toast } from 'vant'
    Vue.use(Toast);
    import router from './router.js'
    export default {
        data() {
            return {
                selected: '',
                active: 0,
                docmHeight: document.documentElement.clientHeight,  //默认屏幕高度
                showHeight: document.body.clientHeight,   //实时屏幕高度
                hidshow: true,
                midData: document.documentElement.clientHeight  // 设置中间变量
            }
        },
        created() {
            this.getDatas()

        },
        watch: {
            // showHeight: function () {
            //     // Toast('默认屏幕高度' + this.docmHeight) // 744
            //     // Toast('实时屏幕高度' + this.showHeight) // 146
            //     if (this.docmHeight >= this.showHeight) {

            //         this.hidshow = false
            //     } else {
            //         this.hidshow = true
            //     }
            // }
        },
        methods: {
            getDatas() {
            },
            routeJude() {
                if (this.$route.path == '/index/zixun') {
                    this.active = 0
                } else if (this.$route.path == '/quotation') {
                    this.active = 1
                } else if (this.$route.path == '/free') {
                    this.active = 2
                } else if (this.$route.path == '/transaction') {
                    this.active = 3
                } else {}
            }
        },
        watch: {
            $route() {
                this.routeJude()
            }
        },
        mounted() {
            this.routeJude()
            //如果项目当中有用到keep-alive、就把他挂载到activated 
            // window.onresize监听页面高度的变化
            window.onresize = () => {
                // Toast('此时doc的值为: ' + this.docmHeight)
                // setTimeout(() => {
                //     Toast('此时show的值为: ' + this.showHeight)
                // }, 3000);
                if (this.docmHeight == this.showHeight) {
                    return (() => {
                        this.showHeight = document.body.clientHeight;
                    })()
                } else if (this.docmHeight != this.showHeight) {
                    this.showHeight = this.midData
                    return (() => {
                        return this.showHeight
                    })()
                }
            }
            // Toast('此时doc的值为: ' + this.docmHeight)
            // setTimeout(() => {
            //     Toast('此时show的值为: ' + this.showHeight)
            // }, 3000);
            // 当不为body的时候
            // 744 744 744
            // 744 1344 744
            // 当为body的时候
            // 744 744 744
            // 0 744 1344 

        },
        router
    }
</script>
<style lang="less" scoped>
    @import './css/base.css';

    .section {
        /* padding-top: 2.25rem; */
        padding-bottom: 2.45rem;
    }

    .mint-header {
        font-size: 22px;
    }

    .mint-button,
    .mint-header {
        background-color: rgb(233, 49, 49);
    }

    .van-tabbar-item--active,
    .van-tabbar--fixed {
        background-color: #080808;
    }

    .mint-header .mint-button {
        font-size: 0.8rem;
    }

    .mint-button-icon .mintui {
        font-size: 1rem;
    }
</style>