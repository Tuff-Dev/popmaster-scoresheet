<template>
  <div class="scorecard">
      <div class="scorecard__panel">
            <div class="scorecard_line-splitter"></div>
            <Question v-for="n in currentQuestionNumber" :questionNumber="n" v-bind:key="n"  @scoreChanged="scoreChanged(n-1, $event)" />
      </div>
      <div class="scorecard__total">Total: <strong>{{ totalScore }}</strong></div>
  </div>
  
</template>

<script>
import Question from './Question';

export default {
    components: {
        Question
    },
    data: function() {
        return {
            currentQuestionNumber: 1,
            scores: [0],
            totalScore: 0
        }
    },
    methods: {
        scoreChanged: function(n, val) {
            this.scores[n] = val;
            const reducer = (accumulator, currentValue) => accumulator + currentValue;
            this.totalScore = this.scores.reduce(reducer);
            if(this.currentQuestionNumber < 10) {
                this.currentQuestionNumber = this.scores.length + 1; 
            }
        }
    }
}
</script>

<style lang="scss" scoped>

.scorecard {


    .scorecard__panel {
        background: rgba(255, 255, 255, 0.25);
        border-radius: 10px;
        width: 70%;
        height: 370px;
        margin: 5px auto 0;
        padding-top: 10px;

        @media (min-width: $breakpoint-tablet) {
            width: 100%;
            height: 530px;
        }
    }


    .scorecard_line-splitter {
        border-right: solid rgba(91, 73, 73, 0.5);
        height: 100%;
        float: right;
        position: relative;
        top: -4px;
        right: 50%;
    }


    .scorecard__total {
        font-size: 1.5em;
        width: 50%;
        margin: 10px auto 0;

        @media (min-width: $breakpoint-tablet) {
            font-size: 2.5em;
        }

        

    }

}

</style>