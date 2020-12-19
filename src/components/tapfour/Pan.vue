<template>
    <div>
        <div class="panTitle">
            <div class="panTitle_top">
                <span style="font-size: 0.9rem;font-weight: 600;">沪深涨跌分析</span>
                <span style="color: rgb(165 165 165);">数据更新于 {{ctime}}</span>
            </div>
            <div class="panTitle_bottom">
                盘面分析: 短期大盘趋势偏弱
            </div>
        </div>
        <div class="dataTitle">
            <ul class="clearfix">
                <li v-for="(item, index) in items" :key="index">
                    <span>{{item.name}}</span>
                    <span style="color: red;">{{item.datas}}</span>
                </li>
            </ul>
        </div>
        <div id="conn">
            <div style="width:20rem;height:11rem;background:#fff;margin: 1rem 0;" id="upAdowns" v-if="isRouterAlive">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                ctime:'',
                items: [
                    { "name": "得分", "datas": "较好" },
                    { "name": "涨家数", "datas": "1926" },
                    { "name": "跌家数", "datas": "1986" },
                    { "name": "热门板块", "datas": "啤酒概念" }
                ],
                isRouterAlive: true,
                len: 0,
                option3: {},
                myChart3: null,
            }
        },
        beforeRouteUpdate(to, from, next) {
            console.log("111")
            console.log(to, from, next)

        },
        created() {
            var date = new Date(),
                year = date.getFullYear(),
                month = date.getMonth() + 1,
                day = date.getDate(),
                hh = date.getHours(),
                mm = date.getMinutes(),
                ss = date.getSeconds();
            this.ctime = year + "-" + month + "-" + day + "-" + ' ' + hh + ":" + mm + ":" + ss;
        },
        watch: {
            $route(to, from) {
                console.log(from.path);//从哪来
                console.log(to.path);//到哪去
            }
        },
        methods: {

        },
        mounted() {
            this.option3 = {
                "axis": [
                    {
                        "position": "bottom",
                        "$dataIndex": 0,
                        "dataKey": 0,
                        "barGap": "20%",
                        "paddingInner": "60%",
                        "paddingOuter": "40%",
                        "intervalLength": 1,
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
                                "stroke": "rgba(51, 51, 51, 0.1)",
                                "lineWidth": 2
                            },
                            "onZero": true
                        },

                        "label": {
                            "show": true,
                            "padding": 10,
                            "style": {
                                "fill": "rgba(51, 51, 51, 0.4)",
                                "fontSize": 14
                            },
                            "rotate": 45,
                            "followLine": false
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
                                "color": [
                                    "rgba(51, 51, 51, 0.05)",
                                    "rgba(0, 0, 0, 0)"
                                ]
                            }
                        },
                        "name": {
                            "show": false,
                            "text": "",
                            "offset": [
                                0,
                                0
                            ],
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
                            "show": true,
                            "style": {
                                "stroke": "rgba(51, 51, 51, 0.1)",
                                "lineWidth": 2
                            }
                        },
                        "label": {
                            "show": true,
                            "padding": 10,
                            "style": {
                                "fill": "rgba(51, 51, 51, 0.4)",
                                "fontSize": 12
                            }
                        },
                        "axisName": {
                            "show": true,
                            "text": "单位/百分之(%)",
                            "offset": [0,
                                -10],
                            "style": {
                                "fill": "rgba(51, 51, 51, 0.4)",
                                "fontSize": 12
                            }
                        },
                        "splitLine": {
                            "show": true,
                            "style": {
                                "color": "rgba(51, 51, 51, 0.1)",
                                "lineWidth": 1
                            }
                        },
                        "splitArea": {
                            "show": false,
                            "style": {
                                "color": [
                                    "rgba(51, 51, 51, 0.05)",
                                    "rgba(0, 0, 0, 0)"
                                ]
                            }
                        },
                        "name": {
                            "show": false,
                            "text": "",
                            "offset": [
                                0,
                                0
                            ],
                            "location": "end",
                            "gap": 10,
                            "style": {
                                "fontSize": 12,
                                "fill": "rgba(51, 51, 51, 0.4)"
                            }
                        }
                    }
                ],
                "grid": [
                    {
                        "top": "20%",
                        "left": "13%",
                        "right": "10%",
                        "bottom": "20%"
                    }
                ],
                "series": [
                    {
                        "type": "bar",
                        "$dataIndex": 0,
                        "dataKey": 1,
                        "name": "上涨",
                        "itemStyle": {
                            "normal": {
                                "fill": "red"
                            }
                        },
                        "overlap": "营收"
                    },
                    {
                        "type": "bar",
                        "$dataIndex": 0,
                        "dataKey": 2,
                        "name": "下跌",
                        "itemStyle": {
                            "normal": {
                                "fill": "#09c509"
                            }
                        },
                        "overlap": "营收"
                    }
                ],
                "data": [
                    {
                        "originData": [
                            [
                                "跌停",
                                1.3,
                                -0.5
                            ],
                            [
                                "-8%~-6",
                                0.35,
                                -0.32
                            ],
                            [
                                "-4%~-3",
                                0.75,
                                -0.84
                            ],
                            [
                                "-2%~-1",
                                1.23,
                                -0.47
                            ],
                            [
                                "-1%~0",
                                0.47,
                                -1.2
                            ],
                            [
                                "0%~2",
                                0.23,
                                -0.14
                            ],
                            [
                                "2%~4",
                                0.55,
                                -0.22
                            ],
                            [
                                "4%~6",
                                0.71,
                                -1.1
                            ],
                            [
                                "涨停",
                                0.62,
                                -0.34
                            ]
                        ]
                    }
                ],
                "tooltip": [
                    {
                        "trigger": "axis",
                        "$axisIndex": 0,
                        "style": {
                            "backgroundColor": "rgba(57,93,129,0.6)"
                        }
                    }
                ],
                "axisPointer": [
                    {
                        "$axisIndex": 0,
                        "shadow": {
                            "show": true,
                            "style": {
                                "fill": "rgba(57,93,129,0.1)"
                            }
                        },
                        "line": {
                            "show": false
                        },
                        "label": {
                            "show": true,
                            "style": {
                                fill: '#2F97FF',
                                "textBackgroundColor": "rgba(255,255,255,1)",
                                fontWeight: 460,
                                fontSize: 12
                            }
                        }
                    }
                ],
                "legend": [
                    {
                        "show": true,
                        "data": [
                            "下跌",
                            "上涨"
                        ],
                        "left": "67%",
                        "top": "10%",
                        "textStyle": {
                            "color": "#485465",
                            "fontSize": 12
                        },
                        "orient": "horizontal"
                    }
                ],
                "textStyle": {
                    "color": "#9B9B9B",
                    "fontFamily": "SFUIText-Regular"
                }
            }
            this.myChart3 = D3Charts.init("upAdowns");
            this.myChart3.setOption(this.option3);
        },
    }
</script>

<style lang="less" scoped>
    .panTitle {
        height: 5rem;
        margin: 0 0.6rem;
    }

    .panTitle_top {
        height: 3rem;
        line-height: 3rem;
        display: flex;
        justify-content: space-between;
    }

    .panTitle_bottom {
        height: 2rem;
        /* line-height: 2rem; */
        color: #737373;
    }

    .dataTitle {
        margin: 0 0.6rem;
    }

    .dataTitle ul li {
        float: left;
        height: 4rem;
        width: 4.69rem;
        background-color: #f3f3f3;
    }

    .dataTitle li>span {
        display: block;
        height: 2rem;
        line-height: 2rem;
        text-align: center;
    }

    li:nth-child(3)>span:nth-child(2) {
        color: #09c509 !important;
    }

    li:nth-child(4)>span:nth-child(2) {
        color: #000 !important;
    }
</style>