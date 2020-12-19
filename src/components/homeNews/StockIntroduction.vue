
<template>
    <div>
        <div class="backgroundImage">
            <div class="inTitle">
                <em style="display: block;">股票入门步骤</em>
                <span style="display: block; font-size: 1rem; color: gold;line-height: 1rem;height: 2rem;">新手指南，仅需四步</span>
            </div>
            <div class="learnStock">
                <ul>
                    <li>
                        <span style="height:3rem;line-height:3rem ;font-size:1.2rem;display:block;font-weight:800">1, 了解股市</span>
                        <em style="height: 5rem;line-height: 1rem; font-size: 0.9rem; font-weight: 800;
                        padding-bottom: 2rem;display: inline-block;color: gray;">股票（stock）是股份公司所有权的一部分，也是发行的所有权凭证，是股份公司为筹集资金而发行给各个股东作为持股凭证并借以取得股息和红利的一种有价证券</em>
                    </li>
                    <li>
                        <span style="height:3rem;line-height:3rem ;font-size:1.2rem;display:block;font-weight:800">1, 开户</span>
                        <em style="height: 4rem;line-height: 1rem; font-size: 0.9rem; font-weight: 800;display: inline-block;color: gray;">开户是炒股的第一步，就像咱们玩游戏之前，需要建立一个账号，炒股同样
                        也需要先开户才能交易</em>
                        <van-button @click="toRisgter" type="primary" size="large" color="rgb(247,66,47)" style="border-radius: 7px;margin-bottom: 1rem;">去开户
                        </van-button>
                    </li>
                    <li>
                        <span style="height:3rem;line-height:3rem ;font-size:1.2rem;display:block;font-weight:800">3, 选股票</span>
                        <em style="height: 3rem;line-height: 1rem; font-size: 0.9rem; font-weight: 800;
                        display: inline-block;color: gray;">经历完开户，快去看看市场上有哪些热门股票，
                        并把您心仪的股票加入自选</em>
                        <div style="color: rgb(201,151,97); font-size: 0.7rem;height: 2rem;
                        border-bottom: 1px solid #ddd;">今日股票</div>
                        <ul>
                            <li style="border-bottom: 1px solid #ddd;">
                                <div>
                                    <span style="font-size: 0.8rem;font-weight: 600;height: 2rem; line-height: 2rem;">三花控股</span>
                                    &nbsp; <span style="color: red;">23.4 +1.47%</span>
                                </div>
                                <div style="color: rgb(156 156 156);margin-bottom: 0.3rem;">
                                    20家机构调研，机构高度关注
                                </div>
                            </li>
                            <li style="border-bottom: 1px solid #ddd;">
                                <div>
                                    <span style="font-size: 0.8rem;font-weight: 600;height: 2rem; line-height: 2rem;">国际实业</span>
                                    &nbsp; <span style="color: red;">40.2 +0.95%</span>
                                </div>
                                <div style="color: rgb(156 156 156);margin-bottom: 0.3rem;">
                                    中报每股净利润增长5.35%
                                </div>
                            </li>
                            <li style="border-bottom: 1px solid #ddd;">
                                <div>
                                    <span style="font-size: 0.8rem;font-weight: 600;height: 2rem; line-height: 2rem;">傲农生物</span>
                                    &nbsp; <span style="color: red;">15.48 +0.56%</span>
                                </div>
                                <div style="color: rgb(156 156 156);margin-bottom: 0.3rem;">
                                    24家机构调研，机构高度关注
                                </div>
                            </li>
                        </ul>
                        <div style="height: 1rem;"></div>
                    </li>
                    <li>
                        <span style="height:3rem;line-height:3rem ;font-size:1.2rem;display:block;font-weight:800">4, 交易</span>
                        <em style="height: 5rem;line-height: 1rem; font-size: 0.9rem; font-weight: 800;
                        display: inline-block;color: gray;">只剩下两部您就可以成为真正的股票投资者；
                        银行转账，确保您的账户中有资金进行交易，学习下单购买心仪的股票；等待股票上涨赚取收益
                        </em>
                        <van-button @click="allPay" type="primary" size="large" color="rgb(247,66,47)" style="border-radius: 7px;margin-bottom: 1rem;">去交易
                        </van-button>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                
            }
        },
        methods: {
            toRisgter(){
                setTimeout(() => {
                    this.$router.push('/public/stockRegister?name=股票开户')
                }, 700);
            },
            allPay(){
                setTimeout(() => {
                    this.$router.push('/free')
                }, 700);
            }
        },
    }
</script>

<style lang="less" scoped>
    .backgroundImage{
        height: 63rem;
        background: url('https://goss.veer.com/creative/vcg/veer/1600water/veer-307826265.jpg') no-repeat;
        background-size: 100% 63rem;
    }
    .inTitle em, .inTitle span{
        height: 4rem;
        line-height: 4rem;
        font-size: 2rem;
        color:#fff;
        text-align: center;
        font-weight: 800;
    }
    .learnStock {
        margin-top: 2rem;
    }
    .learnStock>ul>li {
        background-color: #fff;
        margin: 0 0.6rem;
        border-radius: 8px;
        padding: 0 0.6rem;
        margin-top: 1rem;
    }
</style>