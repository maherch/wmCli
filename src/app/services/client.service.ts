import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Client} from '../models/Client';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private  clientUrl = 'http://localhost:8081/client';
  constructor(private http: HttpClient) { }


  getClients(): Observable<Client[]> {
    return this.http.get<Client[]>(this.clientUrl);
  }

  addClient (client: Client): Observable<Client> {
    return this.http.post<Client>(this.clientUrl, client, httpOptions);
  }

  updateClient(id: number, client: Client): Observable<any> {
    const url = `${this.clientUrl}/${id}`;
    return this.http.put<Client>(url, client, httpOptions);
  }


  getClient(id: number): Observable<Client> {
    const url = `${this.clientUrl}/${id}`;
    return this.http.get<Client>(url);
  }


  deleteClient(id: number): void {
    alert('deleting' + id);
    const url = `${this.clientUrl}/${id}`;
    this.http.delete<Client>(url, httpOptions).subscribe();
  }








}
