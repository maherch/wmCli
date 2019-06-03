import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Question} from '../models/Question';
import {Categorie} from '../models/categorie';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})



export class QuestionService {

  private  questionUrl = 'http://localhost:8081/questionnaire/questions';

  constructor(private http: HttpClient) { }


  getQuestionsByQuestId(id: number): Observable<Question[]> {
    const url = `${this.questionUrl}/${id}`;
    return this.http.get<Question[]>(url);
  }

  updateQuestion(idQuestion: number, question: Question): Observable<any> {
    const url = `${this.questionUrl}/${idQuestion}`;
    return this.http.put<Question>(url, question, httpOptions);
  }


}
