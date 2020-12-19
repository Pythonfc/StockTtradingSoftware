<template>
    <div>
        <div class="myFunctions clearfix">
            <span>我的功能</span>
            <ul class="clearfix" style="float: left;padding-top: 0.3rem;">
                <li v-for="(item, index) in navTitle01" :key="index">
                    <van-icon :name="item.iconName" size="1.2rem" :color="item.color" />
                </li>
                <li v-for="(item, index) in navTitle02" :key="'-'+index">
                    <van-icon :name="item.iconName" size="1.2rem" :color="item.color" />
                </li>
            </ul>
        </div>
        <div class="recently">
            <span>最近使用</span>
            <ul class="clearfix">
                <li v-for="(item, index) in total" :key="'total'+index">
                    <router-link :to="item.linkTo">
                        <van-icon :name="item.iconName" size="2.3rem" :color="item.color" />
                        <span style="display: block;">{{ item.desc }}</span>
                    </router-link>
                </li>
            </ul>
        </div>
        <div class="HotPush">
            <span>推荐火热
                <van-icon name="fire" size="1rem" color="red" style="position: relative;
                left: 0.3rem;
                top: 0.2rem;" /></span>
            <ul class="clearfix">
                <li v-for="(item, index) in news" :key="'total'+index" @click="iconChange(item)">
                    <van-icon :name="item.iconName" size="2.3rem" :color="item.color" />
                    <span style="display: block;">{{ item.desc }}</span>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    import fs from 'fs'
    import Vue from 'vue';
    import { Dialog } from 'vant';
    export default {
        data() {
            return {
                navTitle01: [],
                navTitle02: [],
                total: [],
                news: []
            }
        },
        created() {
            this.$http.get('static/data.json').then((res) => {
                try {
                    this.navTitle01 = res.body.message01
                    this.navTitle02 = res.body.message02
                    this.news = res.body.new
                    this.navTitle02.splice(3, this.navTitle02.length)
                    this.total = this.navTitle01.concat(this.navTitle02)
                } catch (error) {
                    Toast.fail('数据填充失败');
                }
            }, (err) => {
                Toast.fail('获取接口数据失败');
            })
        },
        methods: {
            iconChange(val) {
                Dialog.confirm({
                    title: '提示',
                    message: '你确定添加' + '‘' + val.desc + '’' + '到首页吗？',
                }).then(() => {
                    setTimeout(() => {
                        this.$router.push('/')
                    }, 600);
                }).catch(() => {
                });
            }
        },
    }
</script>

<style lang="less" scoped>
    .myFunctions {
        height: 2.5rem;
        line-height: 2.5rem;
        font-size: 0.8rem;
        font-weight: 600;
        padding: 0 0.6rem;
        border-bottom: 0.4rem solid #EFEFEf;
    }

    .myFunctions li,
    .myFunctions>span {
        float: left;
        padding-right: 0.8rem;
    }

    .van-tabbar-item--active {
        color: #666;
        background-color: #fff;
    }

    .recently,
    .HotPush {
        padding: 0.6rem;
    }

    .recently>span,
    .HotPush>span {
        display: block;
        height: 2rem;
        line-height: 2rem;
        font-size: 0.8rem;
        font-weight: 600;
    }

    .recently {}

    .recently li,
    .HotPush li {
        float: left;
        width: 4rem;
        height: 4rem;
        text-align: center;
        margin-right: 0.7rem;
        margin-top: 0.8rem;
    }
</style>