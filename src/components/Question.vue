<template>
  <div class="question" @click="toggleScore">
      <span class="question__number"><span v-if="bonusQuestion">*</span>{{ questionNumber }}</span>
      <span class="question__score">{{ answered ? score : '' }}</span>
  </div>
</template>

<script>
export default {
    props: {
        questionNumber: {
            type: Number
        }
    },
    data: function() {
        return {
            answered: false,
            answeredCorrect: false,
            bonusQuestion: false,
            score: 0
        }
       
    },
    created: function() {
        if(this.questionNumber === 3 || this.questionNumber === 6 || this.questionNumber === 9) {
            this.bonusQuestion = true;
        }
    },
    watch: {
        answered: function() {
            this.toggleCorrect();
        },
        answeredCorrect: function() {
            this.toggleCorrect();
        }
    },
    methods: {
        toggleScore: function() {
            this.answered = true;
            // Toggle corrent
            this.answeredCorrect = !this.answeredCorrect;
        },
        toggleCorrect: function() {

            if(this.answeredCorrect) {
                if(this.bonusQuestion) {
                    this.score = 6;
                } else {
                    this.score = 3;
                }
            } else {
                this.score = 0;
            }
            this.$emit('scoreChanged', this.score);

        }
    }
}
</script>

<style lang="scss" scoped>

    .question {
        font-size: 1.4em;
        padding: 5px 0;

        @media (min-width: $breakpoint-tablet) {
            font-size: 2.2em;
        }

    }

    .question__number {
        width: 35%;
        text-align: right;
        margin-right: 20px;
        display: inline-block;
    }
    .question__score {
        width: 35%;
        text-align: left;
        margin-left: 20px;
        display: inline-block;
    }
</style>
