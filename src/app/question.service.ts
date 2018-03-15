import { Injectable, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { of } from "rxjs/observable/of";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Question } from "./question";
import { QUESTIONS } from "./mock-questions";

@Injectable()
export class QuestionService implements OnInit {

  questions: Question[];

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
  }

  getQuestions(): Observable<Question[]> {
    return this.http.get<Question[]>('https://my-json-server.typicode.com/amarsankars/GoldQuest/data');
  }

}
