import { environment } from './../../environments/environment';
import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  public emitirLogin = new BehaviorSubject<any>(null);

  private url: string;

  constructor(private http: HttpClient) {
    this.url = environment.urlApi;
  }

  login(data) {
    return this.http.post(`${this.url}/auth`, data).pipe(
      tap((p) => {
        this.emitirLogin.next(true);
      })
    );
  }
}
