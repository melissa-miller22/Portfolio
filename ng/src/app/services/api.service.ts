import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = 'http://localhost:8080/api/';
  headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');

  constructor(private http: HttpClient) { }

  public get(url: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}${url}`);
  }

  public post(url: string, body: any){

    return this.http.post<any>(`${this.baseUrl}${url}`, JSON.stringify(body), {headers: this.headers});
  }

  public put(url: string, body: any){

    return this.http.put<any>(`${this.baseUrl}${url}`, JSON.stringify(body), {headers: this.headers});
  }
}
