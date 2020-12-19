<template>
    <div style="background-color: rgb(245,245,245);">
        <div class="hot-top--font">
            <span style="font-size: 12;color: #b3b3b3; padding-left: 1rem;;">根据个股搜索指数，访问热度排序</span>
        </div>
        <div class="hot-top--content">
            <ul style="padding: 0.4rem 0.6rem;">
                <li v-for="(item, index) in HotDatas" :key="index" @click="jumpStocks(item.name)">
                    <div>
                        <van-tag size="medium" :color="item.color">{{ index + 1 }}</van-tag>
                    </div>
                    <div>
                        <div class="container-top">
                            <span style="font-size: 0.9rem;">{{item.name}}</span>
                            <span style="font-size: 0.9rem;color: red;">{{item.up}}</span>
                            <span style="font-size: 0.7rem;"><strong>{{item.count}}w热度</strong></span>
                        </div>
                        <div class="container-bottom">
                            <van-tag plain size="medium" color="rgb(255,102,0)">{{item.desc01}}</van-tag>
                            <van-tag plain size="medium" color="rgb(51,119,255)">{{item.desc02}}</van-tag>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                HotDatas:[]
            }
        },
        created() {
            this.$http.get('static/TopSecond/hotTHS.json').then(res=>{
                this.HotDatas = res.body.message.dataList
            }, err=>{
                console.log(err)
            })
        },
        methods: {
            jumpStocks(name){
                this.$store.state.stockName = name
                setTimeout(() => {
                    this.$router.push('/free')
                }, 300);
            },
        },
    }
</script>

<style lang="less" scoped>
    .hot-top--font {
        height: 1.5rem;
        line-height: 1.5rem;
        background-color: #fff;
        border-top: 1px solid #efefef;
    }

    .hot-top--content {
        margin: 8px 12px;
        background-color: #fff;
        border-radius: 8px;
    }

    .hot-top--content ul li {
        height: 3rem;
        margin-bottom: 0.4rem;
    }

    .hot-top--content ul li>div:nth-child(1) {
        float: left;
        height: 100%;
        width: 18%;
        line-height: 3rem;
    }

    .hot-top--content ul li>div:nth-child(2) {
        float: right;
        height: 100%;
        width: 82%;
    }

    .container-top,
    .container-bottom {
        display: block;
        height: 50%;
        line-height: 1.5rem;
    }
    .container-top{
        display: flex;
        justify-content: space-between;
    }
    .van-tag--medium {
        padding: 0.1rem 0.4rem;
    }
</style>