export default class QuestionData {
    constructor(questionNumber) {
        this.questionNumber = questionNumber;
        this.answered = false;
        this.answeredCorrect = false;
        this.score = 0;

        if(this.questionNumber === 3 || this.questionNumber === 6 || this.questionNumber === 9) {
            this.bonusQuestion = true;
        } else {
            this.bonusQuestion = false;
        }

    }

    updateScore() {
        if(this.answeredCorrect) {
            if(this.bonusQuestion) {
                this.score = 6;
            } else {
                this.score = 3;
            }
        } else {
            this.score = 0;
        }
    }
}