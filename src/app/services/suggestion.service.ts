import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {NonConformite} from '../models/NonConformite';
import {Suggestion} from '../models/Suggestion';



const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class SuggestionService {


  private  SuggestionUrl = 'http://localhost:8081/nc/suggestion';
  private  addSuggestionUrl = 'http://localhost:8081/suggestion';

  constructor(private http: HttpClient) { }


  getsuggestionByNcId(id: number): Observable<Suggestion[]> {
    const url = `${this.SuggestionUrl}/${id}`;
    return this.http.get<Suggestion[]>(url);
  }

  addSuggestion (suggestion:Suggestion): Observable<Suggestion> {
    return this.http.post<Suggestion>(this.addSuggestionUrl, suggestion, httpOptions);
  }




}
