<template>
    <div>
        <van-steps direction="vertical" :active="0">
            <van-step v-for="(item, index) in zixunData" :key="index">
                <h3>{{item.title}}</h3>
                <p>{{item.ctime}}</p>
            </van-step>
        </van-steps>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                zixunData:[]
            }
        },
        created() {
            this.$http.get('static/api/tapfour/zixun.json').then(res => {
                this.zixunData = res.body.newslist
            }, err => {
                console.log(err)
            })
        },
    }
</script>

<style lang="less" scoped>
    *{
        font-size: 0.55rem!important;
    }
    /deep/.van-step__icon--active {
        color: red;
    }

    /deep/.van-step__title--active {
        color: #969799;
        font-size: 0.5rem;
    }
</style>