<template>
    <div class="dt_bg">
    <span class="title">综合答题小助手</span>
    <span class="des">(集搜狗搜索,uc搜索,简单搜索,买车宝典)</span>
    <div class="hero_wrap"><a  class="hero" @click="getHongbao('1')">百万英雄</a></div>
    <div class="hero_wrap"><a href="chongding.html" class="hero" @click="getHongbao('2')">冲顶大会</a></div>
    <div class="hero_wrap"><a href="winner.html" class="hero" @click="getHongbao('3')">百万赢家</a></div>
    <div class="hero_wrap"><a href="zhishi.html" class="hero" @click="getHongbao('4')">芝士超人</a></div>
    <span class="donate-title">打赏一下</span>
    <div class="donate">
    </div>
    <span class="donate-desc">支付宝</span>
    </div>
</template>

<script>

    import router from './router.js';

    export default {
        name: "home",
        methods: {
            async getHongbao (path) {
                //挑战到对应的页面
                router.replace(path);
            }
        }

    }




</script>


<style scoped>
</style>