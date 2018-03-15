import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { QuestviewComponent } from '../questview/questview.component';
import { QuestionService } from "../question.service";
import { ResultService } from "../result.service";


@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.css']
})
export class InstructionsComponent implements OnInit {
  instructions = [
    "This is a general Quiz. It could be about anything. Don't get surprised",
    "Click the button corresponding to the best answer for each of the questions",
    "If you want to change an answer, simply click the button for your new choice",
    "When you are finished, Submit button at the end of the quiz will calculate your score (from 0 to 100).",
    "Once you have submitted the answers there is no way to go back to the quiz.",
    "All of the correct answers will then be marked with a green check mark.",
    "Use the right answers that you missed as a guide for additional study"
  ];

  constructor(private questView: QuestviewComponent,
    private http: HttpClient) { }

  ngOnInit() {
  }

  startQuiz() {
    this.questView.goNext();
  }

}
