<template>
    <div>
        <van-nav-bar :title="title" fixed left-arrow @click-left="onClickLeft">
        </van-nav-bar>
        <div class="section">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                title: '大盘指数222',
                hidshow: true
            }
        },
        created() {
            this.title = this.$route.query.name
            // console.log(this.$route.query)
        },
        mounted() {
            this.title = this.$route.query.name
        },
        // watch: {
        //     title: function(val, k){
        //         console.log(val)
        //         console.log(k)
        //     }
        // },
        methods: {
            onClickLeft() {
                //  返回上一级页面
            // window.location.reload();
                this.hidshow = true
                this.$router.go(-1)
            }
        },
    }
</script>

<style lang="less" scoped>
    .van-hairline--bottom::after {
        border-bottom-width: 0px;
    }

    .section {
        padding-top: 2.25rem;
        /* padding-bottom: 2.45rem; */
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
        background-color: rgb(233,49,49);
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