import { Injectable } from '@angular/core';

import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Audit} from '../models/Audit';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuditService {


  private  auditUrl = 'http://localhost:8081/mission/audit';
  private  addAuditUrl = 'http://localhost:8081/audit';

  constructor(private http: HttpClient) { }

  getAuditByMissionId(id: number): Observable<Audit[]> {
    const url = `${this.auditUrl}/${id}`;
    return this.http.get<Audit[]>(url);
  }

  addAudit (audit:Audit): Observable<Audit> {
    return this.http.post<Audit>(this.addAuditUrl, audit, httpOptions);
  }

  getAllAudits(): Observable<Audit[]> {
    return this.http.get<Audit[]>(this.addAuditUrl);
  }



}
