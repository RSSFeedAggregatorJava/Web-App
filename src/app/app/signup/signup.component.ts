import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserApi } from '../../api/UserApi';
import { MdSnackBar } from '@angular/material';

declare var module: any;

@Component({
  selector: 'app-signup',
  templateUrl: './signup.html'
})
export class SignupComponent {
  public signupForm = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  });

  constructor(
    public fb: FormBuilder,
    public UserApi: UserApi,
    private MdSnackBar: MdSnackBar,
  ) {}

  doSignup(event: any) {
    this.UserApi.usersSignupPost({email: this.signupForm.controls['email'].value, password: this.signupForm.controls['password'].value})
      .subscribe((data) => {
        this.MdSnackBar.open(`Signup successful`, 'ok', { duration: 2000, });
      });
  }
}
