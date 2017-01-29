import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { UserApi } from '../../api/UserApi';
import { MdSnackBar } from '@angular/material';
import { AuthService } from '../auth/auth.service';

declare var module: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.html'
})
export class LoginComponent {
  public loginForm = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  });

  constructor(
    public fb: FormBuilder,
    public UserApi: UserApi,
    private MdSnackBar: MdSnackBar,
    private AuthService: AuthService,
    private router: Router,

  ) {}

  doLogin(event: any) {
    this.UserApi.usersLoginPost({email: this.loginForm.controls['email'].value, password: this.loginForm.controls['password'].value})
      .subscribe((data) => {
        console.log(data);
        this.router.navigate(['/']);
        this.AuthService.token = data.apiKey;
        this.MdSnackBar.open(`Login successful`, 'ok', { duration: 2000, });
      });

  }
}
