import { LoginService } from './../../services/login.service';
import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  mobileQuery: MediaQueryList;
  logado: boolean;

  fillerNav = Array.from({ length: 2 }, (_, i) => `Nav Item ${i + 1}`);

  fillerContent = Array.from({ length: 1 }, () => '');

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
    this.loginService.emitirLogin.subscribe(
      login => this.logado = login
    );
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
    sessionStorage.clear();
    this.router.navigate(['login']);
  }
}
