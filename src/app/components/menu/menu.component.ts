import { LoginService } from '../../services/login.service';
import { Component, OnInit, ChangeDetectorRef, OnDestroy, ViewChild } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit, OnDestroy {
  mobileQuery: MediaQueryList;
  logado: boolean;

  private _mobileQueryListener: () => void;

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private router: Router,
    private loginService: LoginService
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit() {
    this.loginService.emitirLogin.subscribe((login) => {
      this.logado = login;
    });
    let token = sessionStorage.getItem('eduplan_token');
    if (token) {
      this.logado = true;
    } else {
      this.router.navigate(['login']);
    }
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  sair() {
    this.loginService.emitirLogin.next(false);
    sessionStorage.clear();
    this.router.navigate(['login']);
  }
}
