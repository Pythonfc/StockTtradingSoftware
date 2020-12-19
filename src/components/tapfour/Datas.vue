<template>
    <div>
        <div class="datasTitle">
            <div class="datasTitle_top">
                <van-icon name="gem" color="#FF9800" size="1.1rem" style="float: left;margin-top: 1rem;" />
                <span style="margin-left: 0.5rem; font-size: 0.8rem;">龙虎榜敢死队动态</span>
            </div>
            <van-divider dashed :style="{ color: '#FF5722', borderColor: '#9E9E9E', margin: '0 0 0.5rem 0'}">敢死队行业分布</van-divider>
        </div>
        <div style="width:18rem;height:9rem;background:#fff" id="chart04"></div>
        <div class="horeData">
            <ul id="butt">
                <li>
                    <span>股票</span>
                    <span>营业部名称</span>
                    <span>资金流向</span>
                </li>
                <li v-for="(item, index) in items" :key="index" @click="jumpStocks(item.name)">
                    <span>{{item.name}}</span>
                    <span>{{item.desc}}</span>
                    <span>{{item.cash}}</span>
                </li>
            </ul>
        </div>
        <div v-if="cover" @click="coverAllData" class="fontColor">
            收起
            <van-icon name="arrow-up" />
        </div>
        <div @click="putAllData" v-if="put" class="fontColor">
            展开剩余3条
            <van-icon name="arrow-down" />
        </div>
        <div class="datasTitle">
            <div class="datasTitle_top">
                <van-icon name="balance-list" color="#FF9800" size="1.1rem" style="float: left;margin-top: 1rem;" />
                <span style="margin-left: 0.5rem; font-size: 0.8rem;">研报跟买机会</span>
            </div>
            <van-divider dashed :style="{ color: '#FF5722', borderColor: '#9E9E9E', margin: '0 0 0.5rem 0'}">近一个月6大知名研究买入10股</van-divider>
        </div>
        <div class="horeData">
            <ul id="butts">
                <li>
                    <span>股票</span>
                    <span>研究员</span>
                    <span>推荐成功率</span>
                </li>
                <li v-for="(item, index) in items02" :key="index" @click="jumpStocks(item.name)">
                    <span>{{item.name}}</span>
                    <span>{{item.desc}}</span>
                    <span>{{item.cash}}</span>
                </li>
            </ul>
        </div>
        <div v-if="covers" @click="coverAllDatas" class="fontColor">
            收起
            <van-icon name="arrow-up" />
        </div>
        <div @click="putAllDatas" v-if="puts" class="fontColor">
            展开剩余3条
            <van-icon name="arrow-down" />
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                items: [
                    {name:"鲁西化工", desc:"中信证券北京紫竹", cash:"1.65亿"},
                    {name:"宜华健康", desc:"招商证券合肥北一环", cash:"1967万"},
                    {name:"通化金马", desc:"中信证券上海联洋", cash:"0.18亿"},
                    {name:"顺博合金", desc:"浙商证券温岭人民银行", cash:"0.16亿"},
                    {name:"精测电子", desc:"北京证券A股", cash:"735万"},
                    {name:"澳洋顺昌", desc:"上交所一期", cash:"523万"},
                ],
                items02:[
                    {name:"盛鑫锂电", desc:"黄波", cash:"78.26%"},
                    {name:"精测电子", desc:"黄博", cash:"78.13%"},
                    {name:"中集集团", desc:"代川", cash:"77.78%"},
                    {name:"捷佳伟创", desc:"代川", cash:"77.78%"},
                    {name:"先导智能", desc:"代川", cash:"77.78%"},
                    {name:"三一重工", desc:"关东奇来", cash:"72.27%"},
                ],
                put: true,
                cover: false,
                puts: true,
                covers: false,
                option4: {},
                myChart4: null
            }
        },
        mounted() {
            this.option4 = {
                "data": [{
                    "originData": {
                        "title": "互联网服务与终端",
                        "values": [{
                            "value": 500,
                            "name": "化学制品",
                            "color": "#2F97FF",
                            "dataIndex": 0
                        },
                        {
                            "value": 200,
                            "name": "医疗器械服务",
                            "color": "#50E3C2",
                            "dataIndex": 1
                        },
                        {
                            "value": 120,
                            "name": "化学制药",
                            "color": "#FF5646",
                            "dataIndex": 2
                        },
                        {
                            "value": 100,
                            "name": "其他",
                            "color": "#F1C861",
                            "dataIndex": 3
                        }]
                    }
                }],
                "tooltip": [{
                    "trigger": "item"
                }],
                "grid": [
                    {
                        "top": "20%",
                        "left": "-13%",
                        // "right": "10%",
                        "bottom": "20%"
                    }
                ],
                "series": [{
                    "type": "pie",
                    "name": "arc1",
                    "center": ["50%",
                        "50%"],
                    "radius": [26,
                        76],
                    "title": {
                        "offsetCenter": [0,
                            -200],
                        "textStyle": {
                            "fontSize": 18,
                            "color": "#fff"
                        }
                    },
                    "label": {
                        "formatter": function (orginD, d) {
                            return (d * 100).toFixed(0) + '%';
                        },
                        "textStyle": {
                            "position": "center",
                            "color": "#fff",
                            "fontSize": 14,
                            "fontFamily": "DIN-Medium"
                        }
                    },
                    "itemStyle": {
                        "shadowRadius": 5
                    },
                    "data": {
                        "dataIndex": 0
                    }
                }],
                "legend": [{
                    "show": true,
                    "textStyle": {
                        "color": "#485465"
                    },
                    "orient": 'vertical',
                    "left": "73%",
                    "top": "14%",
                    "selected": {},
                    "symbol": {
                        "type": "circle"
                    },
                    "verticalGap": 27,
                    "data": ["化学制品",
                        "医疗器械服务",
                        "化学制药",
                        "其他"]
                }]
            }
            this.myChart4 = D3Charts.init("chart04");
            this.myChart4.setOption(this.option4);
        },
        methods: {
            jumpStocks(name){
                this.$store.state.stockName = name
                setTimeout(() => {
                    this.$router.push('/free')
                }, 300);
            },
            putAllData() {
                document.getElementById('butt').style.overflow = 'visible'
                document.getElementById('butt').style.height = 14 + 'rem'
                this.put = false
                this.cover = true
            },
            coverAllData() {
                document.getElementById('butt').style.overflow = 'hidden'
                document.getElementById('butt').style.height = 8 + 'rem'
                this.put = true
                this.cover = false
            },
            putAllDatas() {
                document.getElementById('butts').style.overflow = 'visible'
                document.getElementById('butts').style.height = 14 + 'rem'
                this.puts = false
                this.covers = true
            },
            coverAllDatas() {
                document.getElementById('butts').style.overflow = 'hidden'
                document.getElementById('butts').style.height = 8 + 'rem'
                this.puts = true
                this.covers = false
            }
        },
    }
</script>

<style scoped>
    .horeData {
        margin:0 0.8rem
    }
    .horeData ul li{
        display: flex;
        justify-content: space-between;
        height: 2rem;
        line-height: 2rem;
    }
    .horeData ul li:nth-child(1)>span {
        color: #aeaeae;
    }
    .datasTitle_top {
        height: 3rem;
        line-height: 3rem;
    }

    .datasTitle_bottom {
        height: 2rem;
        font-size: 0.9rem;
        font-weight: 600;
    }

    .datasTitle {
        margin: 0 0.8rem;
    }

    .fontColor {
        color: #6b8ce6;
        font-size: 0.7rem;
        margin-left: 0.8rem;
        margin-bottom: 1rem;
    }

    ul {
        height: 8rem;
        overflow: hidden;
    }
</style>