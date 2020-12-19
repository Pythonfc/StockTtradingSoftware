<template>
    <div>
        <van-nav-bar :title="title" fixed />
        <div class="quotation_title">
            <div class="quotation_title_l">
                <div>
                    <van-icon name="umbrella-circle" color="red" size="0.9rem"
                        style="float: left; margin-top: 1rem;margin-right: 0.3rem;" />
                    <span>节假日休盘</span>
                </div>
                <div style="color:  rgb(149, 148, 148);">
                    以下为上个交易日(12-04)的数据
                </div>
            </div>
            <div class="quotation_title_r">
                <van-swipe style="height: 3rem; width: 5rem;line-height: 1.6rem;" :autoplay="1500" vertical
                    :show-indicators="false">
                    <van-swipe-item v-for="(item, index) in indexBanner" :key="index">
                        <div style="color: rgb(11, 206, 11);font-size: 0.8rem;text-align: right;">{{item.count}}</div>
                        <div style="color: rgb(149, 148, 148);text-align: right;">{{item.desc}}</div>
                    </van-swipe-item>
                </van-swipe>
            </div>
        </div>
        <div class="threeLi">
            <ul>
                <li>
                    <div>上证指数</div>
                    <div>3422.34</div>
                    <div>-0.68%</div>
                </li>
                <li>
                    <div>上证指数</div>
                    <div>13999.23</div>
                    <div>-0.19%</div>
                </li>
                <li>
                    <div>上证指数</div>
                    <div style="color: red;">2733.34</div>
                    <div style="color: red;">+0.09%</div>
                </li>
            </ul>
        </div>
        <div class="unnormal">
            <div class="unnormal_title">
                异动
            </div>
            <van-radio-group v-model="radio" direction="horizontal" style="margin-left: 1rem;" @change="exchanges">
                <van-radio name="1" shape="square">大盘异动</van-radio>
                <van-radio name="2" shape="square">个股异动</van-radio>
            </van-radio-group>
            <span style="font-size: 0.5rem;color: red;margin: 0.4rem 1rem;">(点击切换查看异动的情况)</span>
        </div>
        <div style="width:20rem;height:12rem;background:#fff" id="pie001"></div>
        <div class="quotation_bottom unnormal">
            <div class="unnormal_title">
                市场概况
            </div>
            <van-progress pivot-text="上涨1271" color="#ee0a24" :percentage="50" stroke-width="0.8rem" style="margin: 0 1rem;"/>
            <ul>
                <li>
                    <div>养殖业</div>
                    <div>5.16%</div>
                </li>
                <li>
                    <div>养鸡</div>
                    <div>3.15%</div>
                </li>
                <li>
                    <div>HIT电池</div>
                    <div>2.49%</div>
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
                radio: "1",
                title: '股票行情',
                myChart: null,
                option01: {},
                indexBanner: [
                    { count: "22.26亿", desc: "大盘资金净流入" },
                    { count: "22.20亿", desc: "神沪股通净流入" },
                    { count: "313.86亿", desc: "大盘资金净流入" },
                ],
                oData02: [{
                    "originData": [{
                        "date": "13:00",
                        "x": 40
                    },
                    {
                        "date": "13:05",
                        "x": 80
                    },
                    {
                        "date": "13:10",
                        "x": 100
                    },
                    {
                        "date": "13:15",
                        "x": 70
                    },
                    {
                        "date": "13:20",
                        "x": 200
                    },
                    {
                        "date": "13:25",
                        "x": 250
                    },
                    {
                        "date": "13:30",
                        "x": 260
                    },
                    {
                        "date": "13:35",
                        "x": 230
                    },
                    {
                        "date": "13:40",
                        "x": 220
                    },
                    {
                        "date": "13:45",
                        "x": 245
                    },
                    {
                        "date": "13:50",
                        "x": 110
                    },
                    {
                        "date": "13:55",
                        "x": 115
                    },
                    {
                        "date": "14:00",
                        "x": 160
                    },
                    {
                        "date": "14:05",
                        "x": 170
                    },
                    {
                        "date": "14:10",
                        "x": 280
                    },
                    {
                        "date": "14:15",
                        "x": 400
                    },
                    {
                        "date": "14:20",
                        "x": 360
                    },
                    {
                        "date": "14:25",
                        "x": 260
                    },
                    {
                        "date": "14:30",
                        "x": 310
                    },
                    {
                        "date": "14:35",
                        "x": 320
                    },
                    {
                        "date": "14:40",
                        "x": 248
                    },
                    {
                        "date": "14:45",
                        "x": 270
                    },
                    {
                        "date": "14:50",
                        "x": 300
                    },
                    {
                        "date": "14:55",
                        "x": 320
                    },
                    {
                        "date": "15:00",
                        "x": 470
                    },
                    {
                        "date": "15:05",
                        "x": 400
                    },
                    {
                        "date": "15:10",
                        "x": 360
                    },
                    {
                        "date": "15:15",
                        "x": 250
                    },
                    {
                        "date": "15:20",
                        "x": 80
                    }]
                }],
                oData01: [{
                    "originData": [{
                        "date": "13:00",
                        "x": 80
                    },
                    {
                        "date": "13:05",
                        "x": 120
                    },
                    {
                        "date": "13:10",
                        "x": 160
                    },
                    {
                        "date": "13:15",
                        "x": 180
                    },
                    {
                        "date": "13:20",
                        "x": 168
                    },
                    {
                        "date": "13:25",
                        "x": 160
                    },
                    {
                        "date": "13:30",
                        "x": 120
                    },
                    {
                        "date": "13:35",
                        "x": 180
                    },
                    {
                        "date": "13:40",
                        "x": 220
                    },
                    {
                        "date": "13:45",
                        "x": 245
                    },
                    {
                        "date": "13:50",
                        "x": 224
                    },
                    {
                        "date": "13:55",
                        "x": 248
                    },
                    {
                        "date": "14:00",
                        "x": 310
                    },
                    {
                        "date": "14:05",
                        "x": 340
                    },
                    {
                        "date": "14:10",
                        "x": 280
                    },
                    {
                        "date": "14:15",
                        "x": 300
                    },
                    {
                        "date": "14:20",
                        "x": 260
                    },
                    {
                        "date": "14:25",
                        "x": 160
                    },
                    {
                        "date": "14:30",
                        "x": 210
                    },
                    {
                        "date": "14:35",
                        "x": 220
                    },
                    {
                        "date": "14:40",
                        "x": 248
                    },
                    {
                        "date": "14:45",
                        "x": 290
                    },
                    {
                        "date": "14:50",
                        "x": 300
                    },
                    {
                        "date": "14:55",
                        "x": 290
                    },
                    {
                        "date": "15:00",
                        "x": 270
                    },
                    {
                        "date": "15:05",
                        "x": 280
                    },
                    {
                        "date": "15:10",
                        "x": 260
                    },
                    {
                        "date": "15:15",
                        "x": 250
                    },
                    {
                        "date": "15:20",
                        "x": 280
                    }]
                }]
            }
        },
        mounted() {
            this.option = {
                "data": [{
                    "originData": [{
                        "date": "13:00",
                        "x": 80
                    },
                    {
                        "date": "13:05",
                        "x": 120
                    },
                    {
                        "date": "13:10",
                        "x": 160
                    },
                    {
                        "date": "13:15",
                        "x": 180
                    },
                    {
                        "date": "13:20",
                        "x": 168
                    },
                    {
                        "date": "13:25",
                        "x": 160
                    },
                    {
                        "date": "13:30",
                        "x": 120
                    },
                    {
                        "date": "13:35",
                        "x": 180
                    },
                    {
                        "date": "13:40",
                        "x": 220
                    },
                    {
                        "date": "13:45",
                        "x": 245
                    },
                    {
                        "date": "13:50",
                        "x": 224
                    },
                    {
                        "date": "13:55",
                        "x": 248
                    },
                    {
                        "date": "14:00",
                        "x": 310
                    },
                    {
                        "date": "14:05",
                        "x": 340
                    },
                    {
                        "date": "14:10",
                        "x": 280
                    },
                    {
                        "date": "14:15",
                        "x": 300
                    },
                    {
                        "date": "14:20",
                        "x": 260
                    },
                    {
                        "date": "14:25",
                        "x": 160
                    },
                    {
                        "date": "14:30",
                        "x": 210
                    },
                    {
                        "date": "14:35",
                        "x": 220
                    },
                    {
                        "date": "14:40",
                        "x": 248
                    },
                    {
                        "date": "14:45",
                        "x": 290
                    },
                    {
                        "date": "14:50",
                        "x": 300
                    },
                    {
                        "date": "14:55",
                        "x": 290
                    },
                    {
                        "date": "15:00",
                        "x": 270
                    },
                    {
                        "date": "15:05",
                        "x": 280
                    },
                    {
                        "date": "15:10",
                        "x": 260
                    },
                    {
                        "date": "15:15",
                        "x": 250
                    },
                    {
                        "date": "15:20",
                        "x": 280
                    }]
                }],
                "grid": [{
                    "top": "12%",
                    "left": "17%"
                }],
                "series": [{
                    "type": "line",
                    "$dataIndex": 0,
                    "dataKey": "x",
                    "name": "销量",
                    "curve": {
                        "type": "monotoneX"
                    },
                    "symbol": {
                        "emphasis": {
                            "show": true,
                            "size": 5,
                            "style": {
                                "fill": "#2e96ff",
                                "stroke": "rgba(46, 150, 255, 0.49)",
                                "lineWidth": 6
                            }
                        }
                    },
                    "line": {
                        "show": true,
                        "style": {
                            "normal": {
                                "stroke": "#2e96ff"
                            }
                        }
                    },
                    "area": {
                        "show": true,
                        "style": {
                            "normal": {
                                "fill": "rgba(46, 150, 255, 0.4)",
                                "opacity": 0.2
                            }
                        }
                    }
                }],
                "dataZoom": [{}],
                "axis": [{
                    "position": "bottom",
                    "type": "point",
                    "$dataIndex": 0,
                    "$dataZoomIndex": 0,
                    "dataKey": "date",
                    "barGap": "20%",
                    "paddingInner": "60%",
                    "paddingOuter": "40%",
                    "intervalLength": 37,
                    "tick": {
                        "show": false,
                        "outerSize": 6,
                        "innerSize": 0,
                        "style": {
                            "lineWidth": 1,
                            "stroke": "rgba(51, 51, 51, 0.1)"
                        }
                    },
                    "line": {
                        "show": true,
                        "style": {
                            "stroke": "rgba(0, 0, 0, 0.1)",
                            "lineWidth": 2
                        }
                    },
                    "label": {
                        "show": true,
                        "padding": 10,
                        "style": {
                            "fill": "rgba(0, 0, 0, 0.3)",
                            "fontSize": 12
                        }
                    },
                    "splitLine": {
                        "show": false,
                        "style": {
                            "color": "rgba(51, 51, 51, 0.1)",
                            "lineWidth": 1
                        }
                    },
                    "splitArea": {
                        "show": false,
                        "style": {
                            "color": ["rgba(51, 51, 51, 0.05)",
                                "rgba(0, 0, 0, 0)"]
                        }
                    },
                    "name": {
                        "show": false,
                        "text": "",
                        "offset": [0,
                            0],
                        "location": "end",
                        "gap": 10,
                        "style": {
                            "fontSize": 12,
                            "fill": "rgba(51, 51, 51, 0.4)"
                        }
                    }
                },
                {
                    "position": "left",
                    "type": "linear",
                    "xOrY": "y",
                    "min": 0,
                    "max": 500,
                    "splitNumber": 5,
                    "tick": {
                        "show": false,
                        "outerSize": 6,
                        "innerSize": 0,
                        "style": {
                            "lineWidth": 1,
                            "stroke": "rgba(51, 51, 51, 0.1)"
                        }
                    },
                    "line": {
                        "show": false,
                        "style": {
                            "stroke": "rgba(51, 51, 51, 0.1)",
                            "lineWidth": 2
                        }
                    },
                    "label": {
                        "show": true,
                        "padding": 20,
                        "style": {
                            "fill": "rgba(0, 0, 0, 0.3)",
                            "fontSize": 12
                        }
                    },
                    "splitLine": {
                        "show": true,
                        "style": {
                            "color": "rgba(0, 0, 0, 0.1)",
                            "lineWidth": 1
                        }
                    },
                    "splitArea": {
                        "show": false,
                        "style": {
                            "color": ["rgba(51, 51, 51, 0.05)",
                                "rgba(0, 0, 0, 0)"]
                        }
                    },
                    "name": {
                        "show": false,
                        "text": "",
                        "offset": [0,
                            0],
                        "location": "end",
                        "gap": 10,
                        "style": {
                            "fontSize": 12,
                            "fill": "rgba(51, 51, 51, 0.4)"
                        }
                    }
                }],
                "axisPointer": [{
                    "$axisIndex": 0,
                    "shadow": {
                        "show": true,
                        "style": {
                            "fill": "rgba(5,83,161,0.1)"
                        }
                    },
                    "line": {
                        "show": true
                    },
                    "label": {
                        "show": true,
                        "style": {
                            "fill": "#2F97FF",
                            "textBackgroundColor": "rgba(255,255,255,1)",
                            "fontWeight": 460,
                            "fontSize": 12
                        }
                    }
                }],
                "legend": [{
                    "show": false,
                    "left": "77%",
                    "top": "10%",
                    "symbol": {
                        "type": "circle"
                    },
                    "textStyle": {
                        "color": "#485465",
                        "fontSize": 12
                    },
                    "data": ["销量"]
                }],
                "textStyle": {
                    "fill": "#9B9B9B",
                    "fontFamily": "SFUIText-Regular",
                    "fontSize": 12,
                    "fontStyle": "normal",
                    "fontWeight": "normal"
                }
            }
            this.myChart = D3Charts.init("pie001");
            this.myChart.setOption(this.option);
        },
        methods: {
            exchanges(val) {
                if (val == "1") {
                    this.option.data = this.oData01
                    this.myChart = D3Charts.init("pie001");
                    this.myChart.setOption(this.option);
                } else if (val == "2") {
                    this.option.data = this.oData02
                    this.myChart = D3Charts.init("pie001");
                    this.myChart.setOption(this.option);
                }
            }
        },
    }
</script>
<style scoped>
    .quotation_title {
        height: 5rem;
        margin: 1rem;
        margin-top: 2.25rem;
        display: flex;
        justify-content: space-between;
    }
    .quotation_bottom{
        margin-bottom: 2.24rem;
    }
    .quotation_title_l>div:nth-child(1) {
        height: 3rem;
        line-height: 3rem;
        font-size: 0.9rem;
        font-weight: 600;
    }

    .unnormal {
        margin-top: 1.5rem;
        border-top: 0.4rem solid #edecec;
    }

    .unnormal_title {
        height: 3rem;
        line-height: 3rem;
        margin-left: 1rem;
        font-size: 0.9rem;
        font-weight: 600;
    }

    .quotation_title_r {
        margin-top: 1rem;
    }

    .threeLi {
        margin: 0 1rem;
    }
    
    .threeLi ul{
        width: 100%;
        display: flex;
        justify-content: space-between;
    }
    .quotation_bottom ul {
        width: 90%;
        display: flex;
        justify-content: space-between;
        margin: 1rem;
    }   
    .quotation_bottom li{
        font-size: 0.8rem;
        text-align: center;
        border: 1px solid rgb(233, 233, 233);
        background-color: #fff!important;
    }
    .quotation_bottom li>div:nth-child(1){
        height: 2rem;
        line-height: 2rem;
    }
    .quotation_bottom li>div:nth-child(2){
        height: 1.5rem;
        color: red;
    }
    .threeLi li,.quotation_bottom li{
        width: 30%;
        height: 4rem;
        background-color: #baf2ba;
        display: inline-block;
        border-radius: 8px;
    }

    .threeLi li>div:nth-child(1) {
        height: 2rem;
        line-height: 2rem;
        text-align: center;
    }

    .threeLi li>div:nth-child(2) {
        height: 1rem;
        font-size: 0.7rem;
        font-weight: 600;
        text-align: center;
        color: #4CAF50;
    }

    .threeLi li>div:nth-child(3) {
        height: 1rem;
        text-align: center;
        color: #4CAF50;
    }

    .threeLi li:nth-child(3) {
        background-color: #fcdde3;
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