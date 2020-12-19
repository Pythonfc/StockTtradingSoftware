<template>
    <div>
        <div class="topSelect">
            <span>涨幅</span>
            <span>涨跌</span>
            <span>量比</span>
        </div>
        <div class="datas_count">
            <ul>
                <li v-for="(item, index) in shenHuClass" :key="index">
                    <span>{{item.name}}</span>
                    <span style="color: rgb(233,49,49);">{{item.uplength}}</span>
                    <span style="color: rgb(233,49,49);">{{item.upDown}}</span>
                    <span :style="fontColor" class="precentCount">{{item.precent}}</span>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                fontColor: "color: rgb(233,49,49)",
                shenHuClass:[]
            }
        },
        created() {
            // console.log(this.$route.query)
            this.$http.get('static/TopSecond/more/ShenMore.json').then( (res)=> {
                this.shenHuClass = res.body.message
            }, (err)=>{
                Toast.fail('获取接口数据失败');
            })
        },
        mounted() {
            setTimeout(() => {
                try {
                    for (var element = 0; element < document.getElementsByClassName('precentCount').length; element++){
                        parseInt(document.getElementsByClassName('precentCount')[element].innerText) == 0 ? 
                            document.getElementsByClassName('precentCount')[element].style.color = "#0dc70d": ''
                    }
                } catch (error) {
                    console.log(error)
                }
            }, 100);
        },
        methods: {

        },
    }
</script>

<style lang="less" scoped>
    .topSelect {
        height: 2rem;
        display: flex;
        justify-content: flex-end;
        line-height: 2rem;
        color: #848181;
        font-size: 0.7rem;
    }
    .topSelect span {
        width: 23%;
        text-align: center;
    }
    .datas_count ul li {
        height: 2.4rem;
        display: flex;;
        justify-content: space-around;
        border-top: 1px solid #f1eded;
        line-height: 2.4rem;
        font-size: 0.8rem;
    }
</style>