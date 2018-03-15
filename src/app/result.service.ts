import { Injectable } from '@angular/core';
import { Result } from "./result";
import { QuestionService } from './question.service';
import { Question } from './question';

@Injectable()
export class ResultService {

  public result: Result;
  questions : Question[];

  constructor(private questionService: QuestionService) { 
    questionService.getQuestions().subscribe(
      questions => this.questions = questions
    )
  }

  setResult(result: Result) {
    this.result = result;
  }

  getResult() {
    this.calculateSccore();
    return this.result;
  }

  calculateSccore() {
    let score = 0, percentage=0, status = "Not Attended";
    var index = 0;
    for(let question of this.questions) {
      if(question.answer === this.result.answers[index]) {
        score++;
      }
      index++;
    }

    console.log(this.result);
    console.log(this.questions);
    percentage = (score/this.questions.length)*100;
    console.log(percentage);
    if(percentage) {
      if(percentage > 25 && percentage <= 50) {
        status = "Need to improve!";
      }
      else if((percentage > 50) && (percentage <= 75)) {
        status = "Good Job!";
      }
      else if(percentage > 75) {
        status = "You are awesome!";
      }
      else if(percentage <= 25) {
        status = "Something is wrong!";
      }
    }

    this.result.score = percentage;
    this.result.status = status;

    console.log(status);
  }

}
