<template>
    <div>
        <van-calendar id="btn" title="今日打卡" :confirm-text="recode" :poppable="false" :show-confirm="true"
            :style="{ height: '25rem' }" @confirm="hands" />
        <!-- <van-calendar v-model="show" color="#07c160" /> -->
    </div>
</template>
<script>
    import Vue from 'vue';
    import { Toast } from 'vant';
    Vue.use(Toast)
    export default {
        data() {
            return {
                show: '',
                recode: '签到'
            }
        },
        methods: {
            hands(event) {
                // console.log(event)
                console.log(document.getElementsByTagName('button')[0].classList)
                document.getElementsByTagName('button')[0].classList.add('already-active')
                this.recode = "已签到"
                Toast({
                    message: '成功签到',
                    icon: 'checked'
                });
            }
        },
    }
</script>

<style lang="less" scoped>
    /deep/.already-active {
        color: #454545;
        background-color: #ddd;
        border: 1px solid #ddd;
    }
</style>