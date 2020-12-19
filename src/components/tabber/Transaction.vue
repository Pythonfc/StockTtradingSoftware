<template>
    <div>
        <van-nav-bar :title="title" fixed left-arrow @click-left="onClickLefts">
        </van-nav-bar>
        <div class="section">
            <ul>
                <li v-for="(item, index) in zixunData" :key="index">
                    <router-link :to="'/news/' + item.id">
                        <van-card :desc="item.url" :title="item.top" :thumb="item.picUrl" footer="asd">
                            <router-link to="'/news' + item.id"></router-link>>
                        </van-card>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                pic: '',
                title: '新闻资讯',
                zixunData: []
            }
        },
        created() {
            this.$http.get('static/api/tapfour/zixun.json').then(res => {
                this.zixunData = res.body.newslist
            }, err => {
                console.log(err)
            })

        },
        methods: {
            // urlToLink(val) {
            //     console.log(val)
            // },
            onClickLefts() {
                //  返回上一级页面
                // window.location.reload();
                this.hidshow = true
                this.$router.go(-1)
            }
        },
    }
</script>
<style scoped>
    .section {
        padding-top: 2.25rem;
        /* padding-bottom: 2.45rem; */
    }

    .van-card__title {
        max-height: 50px;
        font-weight: 800;
        line-height: 50px;
        font-size: 0.8rem;
    }

    .van-nav-bar /deep/ .van-icon {
        color: #ffffff;
        font-size: 1.4rem !important;
    }

    /deep/.van-nav-bar__left {
        padding: 0 0.3rem;
    }

    .van-nav-bar {
        z-index: 1;
        line-height: 2.25rem;
        text-align: center;
        background-color: rgb(233, 49, 49);
        -webkit-user-select: none;
        user-select: none;
    }

    /deep/.van-nav-bar__content {
        height: 2.25rem;
    }

    /deep/ .van-nav-bar__title {
        color: #fff;
        font-size: 0.8rem;
    }
</style>