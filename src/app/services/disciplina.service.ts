import { Disciplina } from './../models/disciplina';
import { environment } from './../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DisciplinaService {
  private url: string;
  private token: any;

  constructor(private http: HttpClient) {
    this.url = environment.urlApi;
    this.token = new HttpHeaders({
      Authorization: sessionStorage.getItem('eduplan_token'),
    });
  }

  createOrUpdate(data: Disciplina) {
    if (data.id === null) {
      return this.http.post(`${this.url}/disciplina`, data, {
        headers: this.token,
      });
    } else {
      return this.http.put(`${this.url}/disciplina`, data, {
        headers: this.token,
      });
    }
  }

  getAll(page: number, count: number) {
    return this.http.get(`${this.url}/disciplina/${page}/${count}`, { headers: this.token });
  }
}
