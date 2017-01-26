import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserApi } from '../../api/UserApi';
import { MdSnackBar } from '@angular/material';

declare var module: any;

@Component({
  moduleId: module.id,
  selector: 'login',
  templateUrl: 'login.html'
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
  ) {}

  doLogin(event: any) {
    this.UserApi.usersLoginPost({email: this.loginForm.controls['email'].value, password: this.loginForm.controls['password'].value})
      .subscribe((data) => {
        this.MdSnackBar.open(`Login successful`, 'ok', { duration: 2000, });
      });

  }
}
