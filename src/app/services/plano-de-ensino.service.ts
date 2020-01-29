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
    const headers = new HttpHeaders({ 'Authorization': 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJkaXJldG9yQGVkdXBsYW4uY29tIiwiY3JlYXRlZCI6MTU4MDI0MDI1MzAzMCwiZXhwIjoxNTgwODQ1MDUzfQ.HzFa0xci9UJPVvlp2bhZuJPP35DFic2-b79XiWxgE4agjIUx6wxgom8H0AISev6mqKGUyUWQh9pTld-mqxNLqA' });
    return this.http.get(this.url + 'api/plano-de-ensino/0/10', { headers: headers });
  }

  findById(id) {
    const headers = new HttpHeaders({ 'Authorization': 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJkaXJldG9yQGVkdXBsYW4uY29tIiwiY3JlYXRlZCI6MTU4MDI0MDI1MzAzMCwiZXhwIjoxNTgwODQ1MDUzfQ.HzFa0xci9UJPVvlp2bhZuJPP35DFic2-b79XiWxgE4agjIUx6wxgom8H0AISev6mqKGUyUWQh9pTld-mqxNLqA' });
    return this.http.get(this.url + 'api/plano-de-ensino/' + id, { headers: headers });
  }
}
