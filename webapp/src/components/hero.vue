
<template>
<div id="rrapp" data-id="1" class="question">
    <span class="hero_title">百万英雄</span>

    <div class="question-title" style="display: block;">{{title}}</div>

    <div class="answer" style="display: block;">
        <div class="answer-title">搜狗汪仔</div>
        <div class="answer-detail">参考答案：<span>{{answer1.option}}.{{answer1.optionContent}}</span></div>
    </div>
    <div class="answer" style="display: block;">
        <div class="answer-title">简单搜索</div>
        <div class="answer-detail">参考答案：<span>{{answer2.option}}.{{answer2.optionContent}}</span></div>
    </div>
    <div class="answer" style="display: block;">
        <div class="answer-title">UC</div>
        <div class="answer-detail">参考答案：<span>{{answer3.option}}.{{answer3.optionContent}}</span></div>
    </div>
    <div class="answer" style="display: block;">
        <div class="answer-title">买车宝典</div>
        <div class="answer-detail">参考答案：<span>{{answer4.option}}.{{answer4.optionContent}}</span></div>
    </div>
</div>

</template>
<script>
    export default {
        name: "hero",
        data () {
            return {
                title: '',
                answer1: {option:"",optionContent:""},
                answer2: {option:"",optionContent:""},
                answer3: {option:"",optionContent:""},
                answer4: {option:"",optionContent:""}
            }
        },
        methods: {
            async getHongbao (ss) {
                alert(ss);

                router.replace(path);

                // window.location.href="";
            }
        }

    }




</script>


<style scoped>
</style>