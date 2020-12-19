<template>
    <div>
        <div class="header-top">
            <a href="#" @click="showPopup">
                <van-icon name="manager" size="1.6rem" /></a>
            <van-popup v-model="show" position="left" style="height: 100%; width: 50%">账户内容</van-popup>
            <div>
                <a href="#">
                    <van-icon name="service-o" size="1.1rem" /></a>
                <router-link to="/saoM">
                    <van-icon name="scan" size="1.1rem"/>
                </router-link>
                <router-link to="/public/stockChoice?name=选股">
                    <van-icon name="search" size="1.1rem" />
                </router-link>
            </div>
        </div>
        <div>
            <nav>
                <div class="nav">
                    <van-button icon="bar-chart-o" type="primary" @click="TopShenHu">沪深</van-button>
                    <van-button icon="cash-on-deliver" type="primary" @click="TopQiHuo">期货</van-button>
                    <van-button icon="flower-o" type="primary" @click="TopBaoXian">保险</van-button>
                    <van-button icon="points" type="primary" @click="TopJiJin">基金</van-button>
                </div>
            </nav>
            <div class="nav--section">
                <ul>
                    <li v-for="(item, index) in navTitle01" :key="index">
                        <router-link :to="item.linkTo">
                            <van-icon :name="item.iconName" size="1.9rem" :color="item.color" />
                            <span>{{ item.desc }}</span>
                        </router-link>
                    </li>
                </ul>
                <ul>
                    <li v-for="(item, index) in navTitle02" :key="index">
                        <router-link :to="item.linkTo">
                            <van-icon :name="item.iconName" size="1.9rem" :color="item.color" />
                            <span>{{ item.desc }}</span>
                        </router-link>
                    </li>
                </ul>
            </div>
            <van-notice-bar :text="tocast" speed="90" left-icon="volume-o" style="margin-top: 0.7rem;" />
            <van-swipe :autoplay="3000" class="swiper" style="width: 100%; height: 100px;">
                <van-swipe-item v-for="(image, index) in images" :key="index">
                    <img :src="image" @click="Preview_img(images,index)" style="width: 100%;height: 100%;">
                </van-swipe-item>
            </van-swipe>
            <van-tabs v-model="active" swipeable animated sticky @click="changes">
                <van-tab v-for="(item, index) in handSelected" :key="index" :title="item.title" :to="item.to"
                    :name="index">
                </van-tab>
            </van-tabs>
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
    import Vue from 'vue';
    import { Toast, Dialog, ImagePreview } from 'vant'
    Vue.use(Toast, Dialog);
    export default {
        data() {
            return {
                width: '',
                isRouterAlive: true,
                height: '',
                active: 0,
                show: false,
                navTitle01: [],
                navTitle02: [],
                tocast: '互联网金融信息服务行业蓬勃发展的机遇，围绕主营业务积极开展创新，取得了较好的业绩。2018年，公司收入超过13.86亿，净利润超6.34亿，上交税金超过1.73亿',
                handSelected: [
                    {
                        blank: "",
                        title: '资讯',
                        to: '/index/zixun'
                    },
                    {
                        blank: "",
                        title: '盘口',
                        to: '/index/pan'
                    },
                    {
                        blank: "",
                        title: '快讯',
                        to: '/index/news'
                    },
                    {
                        blank: "",
                        title: '数据',
                        to: '/index/datas'
                    }
                ],
                images: [
                    'https://m.360buyimg.com/mobilecms/s750x366_jfs/t1/39343/4/1551/48272/5cbd71f4E329401dc/579b33f530a1402d.jpg!cr_1125x549_0_72!q70.jpg.dpg',
                    "https://m.360buyimg.com/mobilecms/s750x366_jfs/t1/34729/14/3948/120618/5cbeee07Efbe17ec5/d57ddd4fbbbc09e0.jpg!cr_1125x549_0_72!q70.jpg.dpg",
                    "https://m.360buyimg.com/mobilecms/s750x366_jfs/t1/34423/17/5378/97852/5cbecd7bE73730c2f/76e5359d8fb3a1e1.jpg!cr_1125x549_0_72!q70.jpg.dpg"
                ],
            }
        },
        watch: {
            active: function (val) { // 对active 数据进行监听
                console.log(val)
                // this.$router.push('/shop/goods')   对数据做监听，随时切换路由
            }
        },
        created() {
            this.$http.get('static/data.json').then((res) => {
                this.navTitle01 = res.body.message01
                this.navTitle02 = res.body.message02
            }, (err) => {
                Toast.fail('获取接口数据失败');
            })
            this.width = window.screen.availWidth;//手机的屏幕宽
            this.height = window.screen.availHeight　　//手机的屏幕高
        },
        mounted() {
            if (this.$route.path == '/index/zixun') {
                this.active = 0
            } else if (this.$route.path == '/index/pan') {
                this.active = 1
            } else if (this.$route.path == '/index/news') {
                this.active = 2
            } else {
                this.active = 3
            }
            // this.active
            // this.$dialog.alert({
            //     title: '友情提醒',
            //     message: '弹窗内'+ this.width + ',' + this.height
            // });
            // console.log(this.width)
            // console.log(this.height)
            // window.location.reload();
        },
        watch: {
            $route(to, from) {
                // console.log(from.path);//从哪来
                // console.log(to.path);//到哪去
                // if (to.path == '')
                // window.location.reload()
            }
        },
        methods: {
            scanPic() { 
            },
            reload() {
                this.isRouterAlive = false;
                this.$nextTick(function () {
                    this.isRouterAlive = true;
                })
            },
            changes() {
                this.reload()
            },
            showPopup() {
                this.show = true
            },
            Preview_img(images, index) {
                ImagePreview({
                    images: images,
                    showIndex: true,
                    loop: false,
                    startPosition: index
                })
            },
            onChange(index) {
            },
            // 未开放功能方法
            noRoute(name) {
                Dialog.alert({
                    title: '抱歉',
                    message: name + '功能暂时还未开放，敬请期待'
                }).then(() => {
                    // on close
                });
            },
            TopShenHu() {
                this.$router.push('/public/shenMore?name=沪深指数')
            },
            TopQiHuo() {
                this.noRoute('‘期货’')
            },
            TopBaoXian() {
                this.noRoute('‘保险’')
            },
            TopJiJin() {
                this.noRoute('‘基金’')
            },
        },
    }
</script>
<style lang="less" scoped>
    .header-top {
        background-color: rgb(233, 49, 49);
        height: 2rem;
        display: flex;
        justify-content: space-between;
        padding: 0 0 0 1rem;
    }

    .header-top .van-icon {
        color: #fff;
        line-height: 2.4rem;
        margin-right: 1rem;
    }

    .nav {
        width: 100%;
        height: 3rem;
        background-color: rgb(233, 49, 49);
        display: flex;
    }

    .van-button--primary {
        color: #fff;
        background-color: rgb(233, 49, 49);
        border: 1px solid rgb(233, 49, 49);
        flex: 1;
    }

    .van-button--normal {
        padding: 0 0.8rem;
        font-size: 0.8rem;
        height: 3rem;
        border-radius: 10%;
    }

    .nav--section {
        width: 100%;
        height: 6rem;
    }

    li {
        width: 4.15rem;
        height: 3.18rem;
        text-align: center;
    }

    li a span {
        display: block;
    }

    ul {
        position: relative;
        display: flex;
        justify-content: space-around;
        height: 3rem;
        margin-top: 0.3rem;
    }

    .nav--section li a {
        display: block;
        font-size: 13px;
    }
</style>