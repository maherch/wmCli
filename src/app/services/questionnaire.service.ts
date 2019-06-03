import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Auditeur} from '../models/Auditeur';
import {Questionnaire} from '../models/Questionnaire';
import {Question} from '../models/Question';
import {Mission} from '../models/Mission';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class QuestionnaireService {

  private  questionnaireUrl = 'http://localhost:8081/questionnaire';
  private  questionnaireUrll = 'http://localhost:8081/questionnaireq';


  constructor(private http: HttpClient) { }

  getQuestionnaires(): Observable<Questionnaire[]> {
    return this.http.get<Questionnaire[]>(this.questionnaireUrl);
  }

  getQuest(id: number): Observable<Questionnaire> {
    const url = `${this.questionnaireUrl}/${id}`;
    return this.http.get<Questionnaire>(url);
  }











}
