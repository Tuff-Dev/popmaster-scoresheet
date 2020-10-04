import QuestionData from '../models/QuestionData';

export default class RoundData {
    constructor(roundNumber) {
        this.roundNumber = roundNumber;
        this.time = new Date();
        this.questions = [];
        this.totalScore = 0;

        // Add 10 questions
        for(var i=1; i<11; i++) {
            this.questions.push(new QuestionData(i));
        }
    }

    updateTotal() {
        this.totalScore = 0;
        for(var i=0; i < this.questions.length; i++) {
            this.totalScore += this.questions[i].score;
        }

    }
}