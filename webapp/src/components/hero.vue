
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

    import axios from 'axios'



    export default {
        name: "detail",
        mounted(){
            let that=this;
            this.timer = setTimeout(()=>{that.query()},500);

        },
        data () {
            return {
                timer:null,
                title: '',
                answer1: {option:"",optionContent:""},
                answer2: {option:"",optionContent:""},
                answer3: {option:"",optionContent:""},
                answer4: {option:"",optionContent:""}
            }
        },
        beforeDestroy(){
            if(this.timer) { //如果定时器还在运行 或者直接关闭，不用判断
                clearInterval(this.timer); //关闭
            }
        },
        methods: {
            async query () {
                var type=this.$route.params.name;
                alert(type);
                try {
                    const {data: {message}} = await axios.post('http://47.97.194.211:8080/app/business/question?appType='+type)
                    alert('--'+message)
                } catch (e) {
                    console.error(e)
                    alert('服务器繁忙，请稍后重试')
                }

                // $.getJSON('http://47.97.194.211:8080/app/business/question?appType='+type, function(data){
                //     if(!!data){
                //         this.title=data.data.title;
                //         this.answer1= data.data.results[0]
                //         this.answer2= data.data.results[1]
                //         this.answer3= data.data.results[2]
                //         this.answer4= data.data.results[3]
                //     }
                //
                // });
            }
        }

    }




</script>


<style scoped>
</style>