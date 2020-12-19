<template>
    <div>
        <div class="shenHu">
            <div class="shenHu-title">
                <span><strong>沪深指数</strong></span>
                <router-link to="/public/shenMore?name=沪深指数" style="float: right;font-size: 0.7rem;">
                    <span>更多</span>
                    <van-icon name="arrow" />
                </router-link>
            </div>
            <div class="shenHu-section">
                <ul class="clearfix" style="height: 100%;">
                    <li v-for="(item, index) in shenHuList" :key="index">
                        <div><span style="font-size: 0.8rem;">{{item.name}}</span></div>
                        <div><span><strong style="color: red; font-size: 0.9rem;">{{item.count}}</strong></span></div>
                        <div><span style="color:rgb(255, 41, 41)">{{item.up}}</span></div>
                    </li>
                </ul>
            </div>
        </div>
        <div style="height:0.2rem;background:rgb(240 240 240)"></div>
        <div class="shenHu">
            <div class="shenHu-title">
                <span><strong>全球指数</strong></span>
                <router-link to="/public/worldMore?name=全球指数与股指期货" style="float: right;font-size: 0.7rem;">
                    <span>更多</span>
                    <van-icon name="arrow" />
                </router-link>
            </div>
            <div class="shenHu-section">
                <ul class="clearfix" style="height: 100%;">
                    <li v-for="(item, index) in aroundWorld" :key="index">
                        <div><span style="font-size: 0.8rem;">{{item.name}}</span></div>
                        <div><span><strong style="color: red; font-size: 0.9rem;">{{item.count}}</strong></span></div>
                        <div><span style="color:rgb(255, 41, 41)">{{item.up}}</span></div>
                    </li>
                </ul>
            </div>
        </div>
        <div></div>
        <div></div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                shenHuList:[],
                aroundWorld:[]
            }
        },
        created() {
            this.$http.get('static/TopSecond/shenHuList.json').then((res)=>{
                this.shenHuList = res.body.message01
                this.aroundWorld = res.body.message02
            }, (err)=> {
                Toast.fail('获取接口数据失败');
            })
        },
        methods: {
        },
    }
</script>

<style lang="less" scoped>
    .shenHu {
        padding: 0 0.3rem;
        margin-bottom: 0.6rem;
    }
    .shenHu-title {
        height: 2rem;
        line-height: 2rem;
        font-size: 1rem;
        padding: 0 0.3rem;
    }
    .shenHu-section {
        height: 87%;
    }
    .shenHu-section ul li {
        float: left;
        width: 31%;
        height: 41%;
        border: 1px solid rgb(231, 229, 229);
        margin: 0.2rem;
        border-radius: 5%;
        text-align: center;
        display: flex;
        flex-direction:column;
    }
    .shenHu-section li div{
        height: 1.8rem;
        line-height: 1.8rem;
    }
</style>