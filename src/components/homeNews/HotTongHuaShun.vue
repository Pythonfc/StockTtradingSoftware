<template>
    <div>
        <div class="top_image">
            <img src="//s.thsi.cn/iwencai/jgy/images/hotList_title.png" alt="">
            <div class="top_font">聚集千万人投资动向</div>
        </div>
        <div>
            <van-tabs v-model="active" swipeable animated sticky>
                <van-tab v-for="(item, index) in hotList" :title="item.title" :to="item.to">
                    <!-- 内容 {{ index }} -->
                    <router-view></router-view>
                </van-tab>
            </van-tabs>
        </div>

    </div>
</template>
<script>
    export default {
        data() {
            return {
                active: 0,
                hotList: []
            }
        },
        methods: {

        },
        created() {
            this.$http.get('static/TopSecond/hotTHS.json').then(res => {
                this.hotList = res.body.message.selected
            }, err => {
                console.log(err)
            })
        },
    }
</script>

<style lang="less" scoped>
    .top_image {
        width: 100%;
        background-image: url('//s.thsi.cn/iwencai/jgy/images/hotList_bcg.png');
        height: 4.348rem;
        background-size: 100% 100%;
    }

    .top_image img {
        padding-bottom: 2px;
        height: 44px;
        display: table;
        margin: 0 auto;
    }

    .top_font {
        display: table;
        margin: 0 auto;
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #fff;
        line-height: 20px;
    }

    /deep/.van-tab--active {
        color: red;
        font-weight: 700;
        font-size: 0.8rem;
    }
</style>