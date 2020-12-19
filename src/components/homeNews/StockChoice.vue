<template>
    <div>
        <van-search v-model="searchs" shape="round" background="rgb(233, 49, 49)" placeholder="请输股票名称的关键字"
            @focus="findStock" @blur="disStock" @search="searchBox">
        </van-search>
        <van-overlay :show="coverShadow" @click="show = false" />
        <!-- 搜索前的页面 -->
        <div v-if="ifShow" style="background-color: rgb(245,245,245);">
            <div class="usually clearfix">
                <span>我的常用功能</span>
                <ul class="clearfix">
                    <li v-for="(item, index) in total" :key="'total'+index">
                        <router-link :to="item.linkTo">
                            <van-icon :name="item.iconName" size="2.3rem" :color="item.color" />
                            <span style="display: block;">{{ item.desc }}</span>
                        </router-link>
                    </li>
                </ul>
            </div>
            <div class="section_ontainer">
                <ul>
                    <li v-for="(item, index) in codeData" :key="index" @click="jumpStocks(item.company)">
                        <div class="stock_title">
                            <span>{{ item.company }}</span>
                            <span style="font-size: 0.75rem;">推荐指数:
                                <van-rate v-model="item.star" :size="25" color="#eaea02" void-icon="star" readonly
                                    void-color="#eee" style="float: right;
                                    margin-top: 0.5rem;
                                    margin-left: 0.2rem;" />
                            </span>
                        </div>
                        <div>
                            <span>股票代码:</span>
                            <span>{{ item.stockCode }}</span>
                        </div>
                        <div class="precentCode">
                            <span style="color: #37f;">{{ item.situation }}</span>
                            <span style="color: #e93030;">{{ item.precent }}</span>
                        </div>
                        <div class="midLine clearfix">
                            <span style="color: #e93030;">{{ item.line }}</span>
                            <span style="color:#b3b3b3">随机更新</span>
                            <span style="color:#b3b3b3; float: right;">策略胜率</span>
                        </div>
                        <div class="descCode">
                            <span>{{ item.descCode }}</span>
                        </div>
                        <div class="twoBlocks">
                            <div>
                                <div class="situation">
                                    <span>{{ item.two.name01 }}</span>
                                </div>
                                <div class="inputsColor">
                                    <span style="color: #29a497;">{{ item.two.count01 }}</span>
                                    <span style="color: #29a497;">{{ item.two.data01 }}</span>
                                </div>
                            </div>
                            <div>
                                <div class="situation">
                                    <span>{{ item.two.name02 }}</span>
                                </div>
                                <div class="inputsColor">
                                    <span style="color: #e93030;">{{ item.two.count02 }}</span>
                                    <span style="color: #e93030;">{{ item.two.data02 }}</span>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <!-- 搜索后的页面 -->
        <div v-else style="height: 60rem;">
            <div id="displayNo" style="display: none;">
                <div class="picNo"></div>
                <div class="fontNo">
                    <span>您要找的股票不在了哦，请重新查找吧</span>
                </div>
            </div>
            <div class="section_ontainer">
                <ul>
                    <li v-for="(item, index) in searchData" :key="index" @click="jumpStocks(item.company)">
                        <div class="stock_title">
                            <span>{{ item.company }}</span>
                            <span style="font-size: 0.75rem;">推荐指数:
                                <van-rate v-model="item.star" :size="25" color="#eaea02" void-icon="star" readonly
                                    void-color="#eee" style="float: right;
                                margin-top: 0.5rem;
                                margin-left: 0.2rem;" />
                            </span>
                        </div>
                        <div>
                            <span>股票代码:</span>
                            <span>{{ item.stockCode }}</span>
                        </div>
                        <div class="precentCode">
                            <span style="color: #37f;">{{ item.situation }}</span>
                            <span style="color: #e93030;">{{ item.precent }}</span>
                        </div>
                        <div class="midLine clearfix">
                            <span style="color: #e93030;">{{ item.line }}</span>
                            <span style="color:#b3b3b3">随机更新</span>
                            <span style="color:#b3b3b3; float: right;">策略胜率</span>
                        </div>
                        <div class="descCode">
                            <span>{{ item.descCode }}</span>
                        </div>
                        <div class="twoBlocks">
                            <div>
                                <div class="situation">
                                    <span>{{ item.two.name01 }}</span>
                                </div>
                                <div class="inputsColor">
                                    <span style="color: #29a497;">{{ item.two.count01 }}</span>
                                    <span style="color: #29a497;">{{ item.two.data01 }}</span>
                                </div>
                            </div>
                            <div>
                                <div class="situation">
                                    <span>{{ item.two.name02 }}</span>
                                </div>
                                <div class="inputsColor">
                                    <span style="color: #e93030;">{{ item.two.count02 }}</span>
                                    <span style="color: #e93030;">{{ item.two.data02 }}</span>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
    import Vue from 'vue';
    import { Toast, NumberKeyboard, Overlay, Rate } from 'vant';
    Vue.use(Overlay, Rate);
    export default {
        data() {
            return {
                searchs: '',
                searchData: [],
                coverShadow: false,
                ifShow: true,
                navTitle01: [],
                navTitle02: [],
                total: [],
                codeData: []
            }
        },
        created() {
            try {
                this.$http.get('static/data.json').then((res) => {
                    try {
                        this.navTitle01 = res.body.message01
                        this.navTitle02 = res.body.message02
                        this.navTitle01.splice(3, this.navTitle01.length)
                        this.navTitle02.splice(3, this.navTitle02.length)
                        this.total = this.navTitle01.concat(this.navTitle02)
                    } catch (error) {
                        Toast.fail('获取常用功能数据失败');
                    }
                }, (err) => {
                    Toast.fail('获取常用功能数据失败');
                })
            } catch (error) {
                Toast.fail('获取常用功能数据失败');
            }
            try {
                this.$http.get('static/api/codeDatas.json').then(res => {
                    this.codeData = res.body.message
                }, err => {
                    Toast.fail('获取股票信息数据失败');
                })
            } catch (error) {
                Toast.fail('获取股票信息数据失败');
            }

        },
        watch: {
            searchs: function (val) {
                console.log(val)
                val == '' || val == null || val == undefined ? this.ifShow = true : this.ifShow = false
            }
        },
        methods: {
            jumpStocks(name){
                this.$store.state.stockName = name
                setTimeout(() => {
                    this.$router.push('/free')
                }, 300);
            },
            findStock(val) {
                this.coverShadow = true
            },
            disStock() {
                this.coverShadow = false
            },
            searchBox() {
                let search = this.searchs,
                    key = 'company';
                if (search) {
                    this.searchData = this.codeData.filter(res => {
                        if (res[key].indexOf(search) != -1) {
                            return res
                        }
                    })
                    try {
                        this.searchData.length != 0 ? 
                            document.getElementById('displayNo').style.display = 'none':
                                document.getElementById('displayNo').style.display = 'block'
                    } catch (error) {

                    }
                    this.ifShow = false
                } else {

                }
            }
        },
    }
</script>

<style lang="less" scoped>
    #displayNo {
        height: 16rem;
        padding-top: 8rem;
    }

    .picNo {
        height: 6rem;
        width: 6rem;
        background: url(//i.thsi.cn/iwencai/xuangu/images/icon_sprite.png) -20px -388px no-repeat;
        background-size: 290px 538px;
        margin: 0 auto;
    }

    .fontNo {
        text-align: center;
        color: #b2b2b2;
        margin-top: 0.5rem;
    }

    .section_ontainer ul li {
        height: 15rem;
        margin: 0.6rem;
        background-color: #fff;
        border-radius: 1rem;
        padding: 0.4rem 0.6rem;
    }

    .stock_title {
        height: 2.5rem;
        line-height: 2.5rem;
        font-size: 1.2rem;
        font-weight: 800;
        display: flex;
        justify-content: space-between;
    }

    .precentCode {
        display: flex;
        justify-content: space-between;
        font-weight: 700;
        font-size: 0.9rem;
        height: 2.5rem;
        line-height: 2.5rem;
    }

    .midLine {
        font-size: 0.6rem;
    }

    .descCode {
        font-size: 0.8rem;
        margin-top: 0.3rem;
        color: #262626;
    }

    .twoBlocks {
        display: flex;
        justify-content: space-between;
        margin-top: 0.8rem;
    }

    .twoBlocks>div {
        width: 47%;
        height: 3rem;
        background-color: #f7f8fa;
        border-radius: 10px;
    }

    .situation {
        color: #262626;
        line-height: 21px;
        font-weight: 700;
    }

    .situation,
    .inputsColor {
        height: 1.5rem;
        line-height: 1.5rem;
        padding-left: 0.6rem;
    }

    .usually,
    .HotPush {
        padding: 0.6rem;
    }

    .usually>span,
    .HotPush>span {
        display: block;
        height: 2rem;
        line-height: 2rem;
        font-size: 0.8rem;
        font-weight: 600;
    }

    .usually ul {
        padding: 0 1.2rem;
    }

    .usually li,
    .HotPush li {
        float: left;
        width: 4rem;
        height: 4rem;
        text-align: center;
        margin-right: 1.46rem;
        margin-top: 0.8rem;
    }

    .van-overlay {
        top: 5.7rem;
    }

    /* calc */
    .van-search {
        padding: 0.8rem 1rem;
    }

    .van-search .van-cell {
        padding: 0.2rem 0.4rem 0.2rem 0;
    }

    .van-cell {
        font-size: 0.7rem;
        line-height: 1.5rem;
    }

    .van-field__left-icon {
        margin-right: 0.6rem;
    }
</style>