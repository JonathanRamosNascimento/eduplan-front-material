import { LoginService } from './../../services/login.service';
import { Component, OnInit, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = this.fb.group({
    'email': ['', [Validators.required, Validators.email]],
    'password': ['', [Validators.required]],
  });

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  login() {
    this.loginService.login(this.loginForm.value).subscribe(
      (data) => {
        let token = data['token'];
        sessionStorage.setItem('eduplan_token', token);
        this.router.navigate(['dashboard']);
      },
      (err) => {
        alert('Email ou senha incorreta');
        sessionStorage.clear();
      }
    );
  }
}