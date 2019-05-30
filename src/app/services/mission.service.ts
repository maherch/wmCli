import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Categorie} from '../models/categorie';
import {Mission} from '../models/Mission';
import {Auditeur} from '../models/Auditeur';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class MissionService {

  missionUrl = '//localhost:8081/mission';

  constructor(private http: HttpClient) { }


  getMission(id: number): Observable<Mission> {
    return this.http.get<Mission>(`${this.missionUrl}/${id}`);
  }

  getMissions(): Observable<Mission[]> {
    return this.http.get<Mission[]>(this.missionUrl);
  }

  addMission(mission: Mission): Observable<Mission> {
    return this.http.post<Mission>(this.missionUrl, mission, httpOptions);
  }

  deleteMission(id: number): void {
    alert('deleting' + id);
    const url = `${this.missionUrl}/${id}`;
    this.http.delete<Mission>(url, httpOptions).subscribe();
  }

  updateMission(idMission: number, mission: Mission): Observable<any> {
    const url = `${this.missionUrl}/${idMission}`;
    return this.http.put<Mission>(url, mission, httpOptions);
  }


}
