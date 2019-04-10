import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Categorie} from '../models/categorie';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class CategorieService {
  categorieUrl = '//localhost:8083/categorie';

  constructor(private http: HttpClient) { }

  getCategorie(id: number): Observable<Categorie> {
    return this.http.get<Categorie>(`${this.categorieUrl}/${id}`);
  }
  getCategories(): Observable<Categorie[]> {
    return this.http.get<Categorie[]>(this.categorieUrl);
  }

  addCategorie(categorie: Categorie): Observable<Categorie> {
    return this.http.post<Categorie>(this.categorieUrl, categorie, httpOptions);
  }

  getCategorieById(id: number): Observable<Categorie[]> {
    const url = `${this.categorieUrl}/categorie/${id}`;
    return this.http.get<Categorie[]>(url);
  }

  deleteCategorie(id: number): void {
    const url = `${this.categorieUrl}/${id}`;
    this.http.delete<Categorie>(url, httpOptions).subscribe();
  }
/*
  updateCategorie(idCategorie: number, categorie: Categorie): Observable<any> {
    return this.http.put<Categorie>(this.categorieUrl, categorie, httpOptions);

  }*/

  updateCategorie(idCategorie: number, categorie: Categorie): Observable<any> {
    const url = `${this.categorieUrl}/${idCategorie}`;
    return this.http.put<Categorie>(url, categorie, httpOptions);
  }
}
