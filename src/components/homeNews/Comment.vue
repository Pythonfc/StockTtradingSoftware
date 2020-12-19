<template>
    <div>
        <van-nav-bar :title="title" left-text="取消" right-text="发表" fixed @click-left="onClickLefts"
            @click-right="onClickRight" />
        <div class="sections">
            <van-field v-model="messages" rows="1" autosize type="textarea" placeholder="请输入" maxlength="18s" focus />
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                title: '发表评论',
                messages: '',
                messageFormat: { id: '', desc: '' }
            }
        },
        mounted() {
            this.onFocus()
        },
        methods: {
            onFocus() {
                this.messages = ''
                document.getElementsByClassName('van-field__control')[0].focus()
            },
            onClickLefts() {
                this.$router.go(-1)
            },
            onClickRight() {
                if (this.messages != this.messageFormat) {
                    this.messageFormat.desc = this.messages
                    this.$store.state.comments.push(this.messageFormat)
                    setTimeout(() => {
                        this.$router.go(-1)
                    }, 500);
                }
            }
        },
    }
</script>

<style scoped>
    /deep/.van-nav-bar__left>.van-nav-bar__text {
        color: #fff;
        font-size: 0.8rem;
    }

    /deep/.van-nav-bar__right>.van-nav-bar__text {
        color: #34e834;
        font-size: 0.8rem;
    }

    .sections {
        margin-top: 2.25rem;
        margin-bottom: 2.24rem;
    }

    .van-nav-bar /deep/ .van-icon {
        color: #ffffff;
        font-size: 1.4rem !important;
    }

    /deep/.van-nav-bar__left {
        padding: 0 0.8rem;
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