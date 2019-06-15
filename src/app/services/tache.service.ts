import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {GestionTaches} from '../models/GestionTaches';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class TacheService {
  tacheUrl = '//localhost:8081/gestiontaches';

  constructor(private http: HttpClient) { }

  getTache(id: number): Observable<GestionTaches> {
    return this.http.get<GestionTaches>(`${this.tacheUrl}/${id}`);
  }

  getTaches(): Observable<GestionTaches[]> {
    return this.http.get<GestionTaches[]>(this.tacheUrl);
  }
  addTache(gestionTaches: GestionTaches): Observable<GestionTaches> {
    return this.http.post<GestionTaches>(this.tacheUrl, gestionTaches, httpOptions);
  }
  deleteTache(id: number): void {
    alert('deleting' + id);
    const url = `${this.tacheUrl}/${id}`;
    this.http.delete<GestionTaches>(url, httpOptions).subscribe();
  }
  updateTache(idTache: number, gestionTaches: GestionTaches): Observable<any> {
    const url = `${this.tacheUrl}/${idTache}`;

    return this.http.put<GestionTaches>(url, gestionTaches, httpOptions);
  }
}
