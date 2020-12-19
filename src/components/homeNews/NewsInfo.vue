<template>
    <div>
        <van-nav-bar :title="title" left-arrow fixed @click-left="goBack" />
        <div class="newsContanier">
            <div class="newsTitles">
                <span>{{ zixunData.top }}</span>
            </div>
            <div class="descNews">
                <div class="fromNews">新闻来源： {{ zixunData.description }}</div>
                <div class="ctime">发布时间： {{ zixunData.ctime }}</div>
            </div>
            <div class="mainNews">
                <div><span>{{ zixunData.title }}。</span></div>
                <img :src="zixunData.picUrl">
                <div><span>{{ zixunData.url }}。</span></div>
            </div>
        </div>

        <div class="comment_log">
            <van-field v-model="message" rows="1" placeholder="请发表您的看法" @focus="openComment" />
            <van-icon name="chat-o" badge="9" size="1rem" style="margin-top: 0.8rem;" />
        </div>
        <div class="footer_commented">
            <div class="greatComment">精彩评论</div>
            <ul>
                <li v-for="(item, index) in $store.state.comments" :key="index">
                    <van-icon name="https://b.yzcdn.cn/vant/icon-demo-1126.png" size="1.8rem" />
                    <div class="comment_value">
                        <span>
                            匿名用户 {{ index + 1 }}
                            <van-icon :name="zan" style="float: right;margin-top: 0.2rem;" color="red" size="1rem"
                                @click="pushStar" />
                        </span>
                        <div>
                            {{ item.desc }}
                        </div>
                        <div class="clearfix" style="height: 1.7rem;
                        line-height: 1.7rem;">
                            <span style="float: right;color: #c3c3c3;">2020-12-08 20:21</span>
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
                title: "资讯详情",
                zixunData: [],
                id: this.$route.params.id,
                message: '',
                zan: 'good-job-o',
                n: 0
            }
        },
        created() {
            this.getNewsInfo()
        },
        methods: {
            pushStar(event) {
                if (this.n % 2 == 0) {
                    event.target.classList.remove('van-icon-good-job-o')
                    event.target.classList.add('van-icon-good-job')
                    this.n += 1
                } else {
                    event.target.classList.remove('van-icon-good-job')
                    event.target.classList.add('van-icon-good-job-o')
                    this.n += 1
                }
            },
            openComment() {
                // console.log('000')
                this.$router.push('/comment')
            },
            goBack() {
                this.$router.go(-1)
            },
            getNewsInfo() {
                this.$http.get('static/api/tapfour/zixun.json').then(res => {
                    let data = res.body.newslist,
                        id = this.id;
                    this.zixunData = data.filter((son, index, data) => {
                        return data = (() => {
                            if (data[index].id == id) {
                                return data[index]
                            }
                        })()
                    })
                    this.zixunData = this.zixunData[0]
                }, err => {
                    console.log(err)
                })
            }
        },
    }
</script>

<style lang="less" scoped>
    .comment_value {
        width: 100%;
    }
    .greatComment::before {
        content: "";
        width: 0.2rem;
        height: 1rem;
        background-color: red;
        margin: 0.45rem 0.6rem;
        display: inline-block;
        float: left;
    }

    .greatComment {
        font-size: 0.9rem;
        height: 2rem;
        line-height: 2rem;
        margin-top: 1rem;
    }

    .comment_value>span {
        height: 1.6rem;
        font-size: 0.8rem;
        line-height: 1.6rem;
        color: blue;
    }

    .footer_commented ul {
        margin-bottom: 2.8rem;
    }

    .footer_commented ul li {
        height: 5rem;
        margin: 0.5rem 0.6rem 0rem;
        display: flex;
        justify-content: flex-start;
    }

    .comment_log {
        display: flex;
        justify-content: space-around;
        position: fixed;
        bottom: 2.24rem;
        width: 96%;
        padding-left: 0.6rem;
        padding-right: 1rem;
        background-color: #fff;
    }

    .van-cell {
        width: 89%;
        padding: 10px 0;
    }

    /deep/.van-field__control {
        text-align: center;
        line-height: 1.6rem;
    }

    /deep/.van-field__value {
        overflow: visible;
        background: #ededed;
        color: #000;
        height: 1.6rem;
    }

    .mainNews {
        text-indent: 1rem;
        margin-top: 0.5rem;
        font-size: 0.7rem;
        line-height: 2rem;
    }

    .mainNews img {
        width: 100%;
    }

    .descNews {
        height: 4rem;
        background-color: #e7e7e7;
        border-radius: 8px;
        margin-top: 0.8rem;
        font-size: 0.75rem;
        padding: 0.6rem;
        line-height: 1.5rem;
    }

    .newsTitles {
        height: 3rem;
        line-height: 3rem;
        font-size: 0.9rem;
        font-weight: 600;
        border-bottom: 1px solid #ededed;
    }

    .newsContanier {
        margin: 2.25rem 0.7rem 0.24rem;
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