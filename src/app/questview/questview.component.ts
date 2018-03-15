import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { of } from "rxjs/observable/of";
import { QuestionService } from '../question.service';
import { ResultService } from '../result.service';
import { Question } from '../question';
import { Result } from '../result';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-questview',
  templateUrl: './questview.component.html',
  styleUrls: ['./questview.component.css']
})
export class QuestviewComponent implements OnInit {
  stepIndex = 0;
  public questions: Question[];
  results: Result;
  nextBtnText = "Next";
  backBtnText = "Back";

  constructor(private questionService: QuestionService,
    private resultService: ResultService,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.getQuestions();
  }

  getQuestions() {
    this.questionService.getQuestions()
      .subscribe(questions => this.questions = questions);
  }

  goNext() {
    this.stepIndex++;
    if(this.stepIndex === this.questions.length) {
      this.nextBtnText = "Submit";
      this.submitResult();
    }
  }

  goBack() {
    this.stepIndex--;
  }

  setUserChoice(question, choice) {
    question.userChoice = choice;
  }

  submitResult() {
    let result = new Result();
    let answers = [];
    for(let question of this.questions) {
      answers.push(question.userChoice);
    }

    result.answers = answers;
    this.resultService.setResult(result);
  }
}
