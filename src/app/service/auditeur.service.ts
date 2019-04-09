import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Auditeur} from '../models/Auditeur';
import {ignore} from 'selenium-webdriver/testing';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class AuditeurService {
  private  auditeurUrl = 'http://localhost:8081/auditeur';


  constructor(private http: HttpClient) { }


  getAuditeurs(): Observable<Auditeur[]> {
    return this.http.get<Auditeur[]>(this.auditeurUrl);
  }

  addAuditeur (auditeur:Auditeur): Observable<Auditeur> {
    return this.http.post<Auditeur>(this.auditeurUrl, auditeur, httpOptions);
  }

  updateAuditeur(id:number,auditeur: Auditeur): Observable<any> {
    const url = `${this.auditeurUrl}/${id}`;
    return this.http.put<Auditeur>(url, auditeur, httpOptions);
  }


  getAuditeur(id: number): Observable<Auditeur> {
    const url = `${this.auditeurUrl}/${id}`;
    return this.http.get<Auditeur>(url);
  }


  deleteAuditeur(id: number): void {
    alert('deleting' + id);
    const url = `${this.auditeurUrl}/${id}`;
    this.http.delete<Auditeur>(url, httpOptions).subscribe();
  }





}
