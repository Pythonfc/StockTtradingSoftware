<template>
    <div style="background-color: rgb(245,245,245);">
        <div class="hot-top--font">
            <span style="font-size: 12;color: #b3b3b3; padding-left: 1rem;;">根据阅读，点赞，评论等数据进行排序</span>
        </div>
        <div class="hot-top--content">
            <ul style="padding: 0.4rem 0.6rem;">
                <li v-for="(item, index) in HotDatastext" :key="index">
                    <div>
                        <van-tag size="medium" :color="item.color">{{ index + 1 }}</van-tag>
                    </div>
                    <div>
                        <div class="container-top">
                            <span style="font-size: 0.8rem;">{{item.textTop}}</span>
                        </div>
                        <div class="container-bottom">
                            {{item.textBottom}}w热度
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
                HotDatastext:[]
            }
        },
        created() {
            this.$http.get('static/TopSecond/hotTHStext.json').then(res=>{
                this.HotDatastext = res.body.message
            }, err=>{
                console.log(err)
            })
        },
        methods: {
            
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
        height: 4rem;
        margin-bottom: 0.4rem;
    }

    .hot-top--content ul li>div:nth-child(1) {
        float: left;
        height: 100%;
        width: 18%;
        line-height: 4rem;
    }

    .hot-top--content ul li>div:nth-child(2) {
        float: right;
        height: 100%;
        width: 82%;
    }

    .container-top,
    .container-bottom {
        display: block;
        line-height: 1.4rem;
    }
    .container-bottom{
        height: 30%;
        color: rgb(179, 179, 179);
        font-weight: 700;
    }
    .container-top{
        display: flex;
        height: 70%;
        justify-content: space-between;
    }
    .van-tag--medium {
        padding: 0.1rem 0.4rem;
    }
</style>