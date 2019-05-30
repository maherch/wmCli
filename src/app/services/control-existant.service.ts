import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ControlExistant} from '../models/ControlExistant';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ControlExistantService {

  controlExistantUrl = '//localhost:8081/controlexistant';

  constructor(private http: HttpClient) { }
  getcontrolExistant(id: number): Observable<ControlExistant> {
    return this.http.get<ControlExistant>(`${this.controlExistantUrl}/${id}`);
  }

  getcontrolExistants(): Observable<ControlExistant[]> {
    return this.http.get<ControlExistant[]>(this.controlExistantUrl);
  }
  addcontrolExistant(controlExistant: ControlExistant): Observable<ControlExistant> {
    return this.http.post<ControlExistant>(this.controlExistantUrl, controlExistant, httpOptions);
  }
}
