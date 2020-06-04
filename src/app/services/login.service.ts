import { Injectable, EventEmitter } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { tap } from "rxjs/operators";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class LoginService {
  public emitirLogin = new BehaviorSubject<any>(null);

  private url = "http://localhost:9090/api/auth";

  constructor(private http: HttpClient) {}

  login(data) {
    return this.http.post(this.url, data).pipe(
      tap((p) => {
        this.emitirLogin.next(true);
      })
    );
  }
}
