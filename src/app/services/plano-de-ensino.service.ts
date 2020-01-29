import { environment } from './../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlanoDeEnsinoService {

  private url = 'http://localhost:9090/';

  constructor(
    private http: HttpClient
  ) { }

  getAll() {
    const headers = new HttpHeaders({ 'Authorization': sessionStorage.getItem('eduplan_token') });
    return this.http.get(this.url + 'api/plano-de-ensino/0/10', { headers: headers });
  }

  findById(id) {
    const headers = new HttpHeaders({ 'Authorization': sessionStorage.getItem('eduplan_token') });
    return this.http.get(this.url + 'api/plano-de-ensino/' + id, { headers: headers });
  }

  create() {

  }
}
