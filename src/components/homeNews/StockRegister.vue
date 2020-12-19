<template>
    <div>
        <div style="margin:1rem">
            <div class="register_pic">
                <a href="#">
                    <img src="static/images/register02.jpg" style="width: 100%; height: 100%;border-radius: 2%;">
                </a>
            </div>
            <div class="register_second">
                <div class="countIncoming">
                    <span style="font-size: 0.7rem;display: block;
                    height: 1.7rem;
                    line-height: 1.7rem;">原油近一个月振幅达<strong style="color: red;">25.71</strong></span>
                    <span><strong style="color: red;font-size: 1.5rem;">257.10%</strong></span>
                    <span style="color: rgb(179 178 178);">累计收益率</span>
                </div>
                <div style="height: 0.01rem; background-color:rgb(238 238 238);margin: 0 1rem;"></div>
                <div class="countRegister">
                    <ul>
                        <li v-for="(item, index) in jiaoYi" :key="index">
                            <van-icon :name="item.icon" size="1.6rem" color="rgb(254,119,64)" />
                            <span style="display: block;"><strong>{{ item.data01 }}</strong></span>
                            <span style="color: rgb(148 142 142);">{{ item.data02 }}</span>
                        </li>
                    </ul>
                    <van-button @click="open" type="primary" size="large" color="rgb(247,66,47)" style="border-radius: 7px;">去期货通开户
                    </van-button>
                </div>
            </div>
            <div class="kaiHuReady">
                <div><span>开户前准备</span></div>
                <div>
                    <ul>
                        <li>
                            <van-icon size="1.4rem" color=" rgb(150, 151, 161)" name="user-o" />
                            <span style="display: block;color: rgb(150, 151, 161);">身份证</span>
                        </li>
                        <li>
                            <van-icon size="1.4rem" color=" rgb(150, 151, 161)" name="credit-pay" />
                            <span style="display: block;color: rgb(150, 151, 161);">银行卡</span>
                        </li>
                        <li>
                            <van-icon size="1.4rem" color=" rgb(150, 151, 161)" name="edit" />
                            <span style="display: block;color: rgb(150, 151, 161);">手写签名</span>
                        </li>
                    </ul>
                </div>
                <div style="height: 0.01rem; background-color:rgb(238 238 238);margin: 0 1rem;"></div>
                <div style="height: 1.8rem;
                line-height: 1.8rem;
                text-align: center;">
                    <a href="#" style="color: rgb(150,192,246);"><span>下载app及时开户>></span></a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue';
    import { Dialog } from 'vant';
    export default {
        data() {
            return {
                jiaoYi: []
            }
        },
        created() {
            this.$http.get('static/TopSecond/kaiHu.json').then(res => {
                this.jiaoYi = res.body.message
            }, err => {
                console.log(err)
            })
        },
        methods: {
            open(){
                Dialog.alert({
                    title: '抱歉',
                    message: name + '功能暂时还未开放，敬请期待'
                }).then(() => {
                    setTimeout(() => {
                        this.$router.push('/')
                    }, 500);
                });
            }
        },
    }
</script>

<style lang="less" scoped>
    .register_pic {
        width: 100%;
        height: 7rem;
    }

    .register_pic a {
        display: block;
        height: 100%;
    }

    .register_second {
        /* height: 14rem; */
        margin: 0.5rem 0;
        border-radius: 2%;
        border: 1px solid #f6f2f2;
    }

    .countIncoming {
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        margin-bottom: 1rem;
    }

    .countRegister {
        margin: 1rem 0;
    }

    .countRegister ul,
    .kaiHuReady ul {
        display: flex;
        justify-content: space-around;
        margin-bottom: 1rem;
    }

    .countRegister ul li,
    .kaiHuReady ul li {
        text-align: center;
    }

    .kaiHuReady {
        height: 6.5rem;
        border: 1px solid #f6f2f2;
        border-radius: 2px;
    }

    .kaiHuReady div:nth-child(1) {
        height: 1.7rem;
        font-size: 0.74rem;
        text-align: center;
        color: rgb(150, 151, 161);
        line-height: 1.7rem;
    }
</style>