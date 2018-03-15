import { Component, OnInit } from '@angular/core';
import { ResultService } from '../result.service';
import { Result } from '../result';
import { QuestionService } from "../question.service";
import { Question } from '../question';

@Component({
  selector: 'app-resultview',
  templateUrl: './resultview.component.html',
  styleUrls: ['./resultview.component.css']
})
export class ResultviewComponent implements OnInit {

  public result: Result;
  questions: Question[];

  constructor(private resultService:ResultService,
    private questionService: QuestionService) { 
    this.questionService.getQuestions().subscribe(
      questions => this.questions = questions
    )
    this.result = this.resultService.getResult();
  }

  ngOnInit() {
    this.result = this.resultService.getResult();
  }

}
