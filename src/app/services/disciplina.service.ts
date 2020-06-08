import { Disciplina } from './../models/disciplina';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DisciplinaService {
  private url: string;

  constructor(private http: HttpClient) {
    this.url = environment.urlApi;
  }

  salvar(data: Disciplina) {
    return this.http.post(`${this.url}/disciplina`, data);
  }
}
