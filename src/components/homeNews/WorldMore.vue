<template>
    <div>
        <div class="blockData">
            <div><span><strong style="font-size: 1rem;">亚太-大中华区</strong></span></div>
            <div class="boxDatas">
                <ul class="clearfix" style="height: 100%;">
                    <li v-for="(item, index) in china" :key="index">
                        <img :src="item.pic" style="width: 1.2rem; height: 0.8rem;">
                        <span><strong>{{ item.name }}</strong></span>
                        <span style="color: red;"><strong>{{item.data01}}</strong></span>
                        <span style="color: red;"><strong>{{item.data02}}</strong></span>
                    </li>
                </ul>
            </div>
        </div>
        <div style="height:0.2rem;background:rgb(240 240 240)"></div>
        <div class="blockData">
            <div><span><strong style="font-size: 1rem;">亚太市场</strong></span></div>
            <div class="boxDatas">
                <ul class="clearfix" style="height: 100%;">
                    <li v-for="(item, index) in other" :key="index">
                        <img :src="item.pic" style="width: 1.2rem; height: 0.8rem;">
                        <span><strong>{{ item.name }}</strong></span>
                        <span style="color: red;"><strong>{{item.data01}}</strong></span>
                        <span style="color: red;"><strong>{{item.data02}}</strong></span>
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
                title: '大盘指数',
                china:[],
                other:[]
            }
        },
        created() {
            this.title = this.$route.query.name
            this.$http.get('static/TopSecond/more/WorldMore.json').then(res=>{
                this.china = res.body.message.china
                this.other = res.body.message.other
            }, err=>{
                console.log(err)
            })
        },
        watch: {
            title: function(val, k){
                // console.log(val)
                // console.log(k)
            }
        },
        methods: {
            
        },
    }
</script>

<style lang="less" scoped>
    .blockData{
        height: 15rem;
        padding: 0.7rem;
    }
    .boxDatas{
        width: 100%;
        height: 80%;
        border: 1px solid #ddd;
        border-radius: 2%;
        padding-top: 1rem;
        margin-top: 1rem;
    }
    .boxDatas li {
        height: 25%;
        display: flex;
        justify-content: space-around;
    }
</style>