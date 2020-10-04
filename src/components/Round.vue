<template>
  <div class="scorecard">
      <div class="scorecard__panel">
            <div class="scorecard_line-splitter"></div>
            <Question v-for="(question, index) in roundData.questions" :question="question" v-bind:key="index"  @scoreupdated="scoreUpdated()" />
      </div>
      <div class="scorecard__total">Total: <strong>{{ roundData.totalScore }}</strong></div>
  </div>
  
</template>

<script>
import Question from './Question';
import RoundData from '../models/RoundData';

export default {
    components: {
        Question
    },
    props: {
        roundData: RoundData
    },
    methods: {
        scoreUpdated: function() {
            // Update total round score.
            this.roundData.updateTotal();
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
        height: 380px;
        margin: 5px auto 0;
        padding-top: 10px;
        -webkit-box-shadow: 2px 3px 12px 0px rgba(0,0,0,0.39);
        -moz-box-shadow: 2px 3px 12px 0px rgba(0,0,0,0.39);
        box-shadow: 2px 3px 12px 0px rgba(0,0,0,0.39);

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