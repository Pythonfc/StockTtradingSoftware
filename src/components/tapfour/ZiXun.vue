<template>
    <div>
        <ul>
            <li v-for="(item, index) in zixunData" :key="index">
                <router-link :to="'/news/' + item.id">
                    <van-card :desc="item.url" :title="item.top"
                        :thumb="item.picUrl" footer="asd">
                        <router-link to="'/news' + item.id"></router-link>>
                    </van-card>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                pic: '',
                zixunData: []
            }
        },
        created() {
            this.$http.get('static/api/tapfour/zixun.json').then(res => {
                this.zixunData = res.body.newslist
            }, err => {
                console.log(err)
            })

        },
        methods: {
        },
    }
</script>

<style scoped>
    .van-card__title {
        max-height: 50px;
        font-weight: 800;
        line-height: 50px;
        font-size: 0.8rem;
    }
</style>