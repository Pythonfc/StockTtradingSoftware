<template>
    <div>
        <div class="LookPan_top clearfix">
            <div class="LoolPan_top_block01">
                <div>
                    <div style="width:100%;height:100%;" id="chart"></div>
                </div>
                <div>
                    <span>建议仓位</span>
                </div>
            </div>
            <div class="LoolPan_top_block02">
                <div><span>市场中期趋势向上</span></div>
                <div><span>市场短期震荡向上概率较大，利多因素逐渐显现</span></div>
            </div>
        </div>
        <div class="LookPan_middle">
            <div class="middle-title"><span>———</span> &nbsp; <strong>市场风格</strong> &nbsp; <span>———</span></div>
            <div>
                <div style="width:100%;height:20rem;" id="chart02"></div>
            </div>
        </div>
        <div class="LookPan_bottom">
            <span class="bottom_desc">短线机会</span>
            <div>
                <ul>
                    <li v-for="(item, index) in bottomDataList" :key="index">
                        <span style="font-size: 1rem;
                        font-weight: 600;">{{ item.title }}</span>
                        <span style="color:rgb(119 118 118)">{{item.desc}}</span>
                        <div>
                            <span style="color: blue;">{{ item.data01.first }}<strong style="color: #1eae1e;">{{ item.data01.second }}</strong></span>
                            &nbsp;&nbsp;&nbsp;
                            <span style="color: blue;">{{ item.data02.first }}<strong style="color: red;">{{ item.data02.second }}</strong></span>
                        </div>
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
                option: {},
                myChart: null,
                option02: {},
                myChart02: null,
                bottomDataList:[
                    {"title":"新能源车", "desc":"三大新能源汽车厂商再度暴涨, 电动车元年加速到来", 
                        "data01":{"first":"国电南自","second":"-1.21%"}, "data02":{"first":"双杰电器","second":"+7.07%"}},
                    {"title":"天然气", "desc":"“拉尼娜”来袭，冷冬经济成焦点", 
                        "data01":{"first":"通源石油","second":"-0.49%"}, "data02":{"first":"中曼石油","second":"+0.56%"}},
                ]
            }
        },
        created() {

        },
        methods: {

        },
        mounted() {
            // 饼图
            this.option = {
                "data": [
                    {
                        "originData": {
                            "min": 0,
                            "max": 100,
                            "title": "",
                            "values": [
                                {
                                    "value": 75
                                }
                            ]
                        }
                    }
                ],
                "series": [
                    {
                        "type": "arc",
                        "name": "arc1",
                        "data": {
                            "dataIndex": 0
                        },
                        "animation": true,
                        "center": [
                            "50%",
                            "50%"
                        ],
                        "radius": [
                            0,
                            35
                        ],
                        "title": {
                            "offsetCenter": [
                                0,
                                -90
                            ],
                            "textStyle": {
                                "fontSize": 12,
                                "color": "#fff"
                            }
                        },
                        "circleStyle": {
                            "show": false,
                            "innerRadius": 115,
                            "outerRadius": 120,
                            "outerType": "dotted",
                            "symbolStyle": {
                                "edgePadding": 3,
                                "radius": 1,
                                "fill": "#2e96ff",
                                "stroke": "#2e96ff"
                            },
                            "innerStrokeColor": "#2F97FF",
                            "innerFillColor": "#fff",
                            "outerFillColor": "#fff",
                            "outerStrokeColor": "#fff"
                        },
                        "itemStyle": {
                            "normal": {
                                "stroke": "rgba(47, 151, 255, 0)",
                                "fill": "rgba(47, 151, 255, 0.4)",
                                "cornerRadius": 0
                            },
                            "formatter": function (orginD, d) { return parseInt(d * 100) + '%'; },
                            "textStyle": {
                                "position": "center",
                                "color": "#2F97FF",
                                "fontSize": 20,
                                "fontFamily": "DIN-Medium"
                            }
                        }
                    }
                ]
            }
            this.myChart = D3Charts.init("chart");
            this.myChart.setOption(this.option);

            // 百分比雷达图
            this.option02 = {
                "data": [
                    {
                        "originData": [
                            {
                                "name": "预算分配",
                                "value": [
                                    3.7,
                                    4.6,
                                    2.3,
                                    3.1,
                                    3.2,
                                    3.6
                                ]
                            }
                        ]
                    }
                ],
                "tooltip": [
                    {
                        // "trigger": "none"
                    }
                ],
                "legend": [
                    {
                        "show": false,
                        "left": "30%",
                        "data": [
                            "预算分配"
                        ],
                        "textStyle": {
                            "color": "rgba(120,126,142,1)"
                        }
                    }
                ],
                "radarAxis": [
                    {
                        "radius": 135,
                        "center": ['50%', '45%'],
                        "name": {
                            "textStyle": {
                                "textFill": "rgba(120,126,142,1)"
                            }
                        },
                        "axisLine": {
                            "lineStyle": {
                                "color": "rgba(0, 0, 0, 0.04)"
                            }
                        },
                        "splitLine": {
                            "lineStyle": {
                                "color": [
                                    "rgba(0, 0, 0, 0)",
                                    "rgba(0, 0, 0, 0)"
                                ]
                            }
                        },
                        "splitArea": {
                            "areaStyle": {
                                "color": [
                                    "rgba(0, 0, 0, 0.03)",
                                    "rgba(0, 0, 0, 0.03)"
                                ]
                            }
                        },
                        "indicator": [
                            {
                                "name": "成长能力",
                                "max": 5
                            },
                            {
                                "name": "估值",
                                "max": 5
                            },
                            {
                                "name": "现金流",
                                "max": 5
                            },
                            {
                                "name": "股东结构",
                                "max": 5
                            },
                            {
                                "name": "资产",
                                "max": 5
                            },
                            {
                                "name": "盈利能力",
                                "max": 5
                            }
                        ],
                        "shape": "polygon"
                    }
                ],
                "series": [
                    {
                        "type": "radar",
                        "$radarAxisIndex": 0,
                        "$dataIndex": 0,
                        "name": "预算分配",
                        "color": "#2F97FF",
                        "symbolSize": 3,
                        "label": {
                            "normal": {
                                "show": true,
                                "distanceOffset": 1.1,
                                "offset": [
                                    0,
                                    0
                                ]
                            },
                            "emphasis": {
                                "show": true
                            }
                        },
                        "itemStyle": {
                            "normal": {
                                "lineWidth": 2
                            },
                            "emphasis": {
                                "lineWidth": 2
                            }
                        }
                    }
                ]

            }
            this.myChart02 = D3Charts.init("chart02");
            this.myChart02.setOption(this.option02);
        },
    }
</script>

<style lang="less" scoped>
    .LookPan_top,
    .LookPan_middle{
        border-bottom: 0.6rem solid #efefef;
        padding: 0 0.6rem;
    }

    .LoolPan_top_block01 {
        float: left;
        width: 30%;
        height: 7rem;
    }

    .LoolPan_top_block02 {
        float: right;
        width: 70%;
        height: 7rem;
    }

    .LoolPan_top_block02>div:nth-child(1) {
        height: 50%;
        text-align: left;
        font-weight: 800;
        font-size: 1.1rem;
        line-height: 4rem;
    }

    .LoolPan_top_block02>div:nth-child(2) {
        height: 50%;
        text-align: left;
        font-size: 0.7rem;
        color: #7d7b7b;
    }

    .LoolPan_top_block01>div:nth-child(1) {
        width: 100%;
        height: 80%;
        display: inline-block;
    }

    .LoolPan_top_block01>div:nth-child(2) {
        height: 20%;
        text-align: center;
        font-size: 0.8rem;
        color: #fdab15;
    }

    .middle-title {
        height: 2rem;
        text-align: center;
        line-height: 2rem;
    }

    .middle-title span {
        color: #ddd;
    }

    .middle-title strong {
        font-size: 0.8rem;
        font-weight: 800;
    }

    .bottom_desc {
        display: block;
        line-height: 1.5rem;
        height: 1.5rem;
        border-bottom: 1px solid #efefef;
    }

    .bottom_desc::before {
        content: "";
        width: 0.2rem;
        height: 1rem;
        background-color: red;
        margin: 0.25rem 0.6rem;
        display: inline-block;
        float: left;
    }
    .LookPan_bottom ul li {
        height: 6rem;
    }
    .LookPan_bottom ul li:nth-child(1){
        border-bottom: 1px solid #efefef;
    }
    .LookPan_bottom li>span, .LookPan_bottom li>div{
        height: 2rem;
        line-height: 2rem;
        text-align: center;
        display: block;
    }
</style>