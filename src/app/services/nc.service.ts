import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Question} from '../models/Question';
import {NonConformite} from '../models/NonConformite';
import {Auditeur} from '../models/Auditeur';
import {ControlExistant} from '../models/ControlExistant';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class NcService {

  private  NcUrl = 'http://localhost:8081/controle/nc';
  private  addNcUrl = 'http://localhost:8081/nc';

  constructor(private http: HttpClient) { }

  getNcByControleId(id: number): Observable<NonConformite[]> {
    const url = `${this.NcUrl}/${id}`;
    return this.http.get<NonConformite[]>(url);
  }

  addNc (nc:NonConformite): Observable<NonConformite> {
    return this.http.post<NonConformite>(this.addNcUrl, nc, httpOptions);
  }

  getAllNcs(): Observable<NonConformite[]> {
    return this.http.get<NonConformite[]>(this.addNcUrl);
  }


}
