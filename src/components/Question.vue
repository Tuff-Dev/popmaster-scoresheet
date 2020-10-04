<template>
  <div class="question" @click="toggleScore">
      <span class="question__number"><span v-if="question.bonusQuestion">*</span>{{ question.questionNumber }}</span>
      <span class="question__score">{{ question.answered ? question.score : '' }}</span>
  </div>
</template>

<script>

export default {
    props: {
        question: {
            type: Object
        }
    },
    methods: {
        toggleScore: function() {
            this.question.answered = true;
            // Toggle corrent
            this.question.answeredCorrect = !this.question.answeredCorrect;
            this.question.updateScore();
            this.$emit('scoreupdated');
        }
    }
}
</script>

<style lang="scss" scoped>

    .question {
        font-size: 1.4em;
        padding: 5px 0;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        margin: 0 auto;
        width: 80%;
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
