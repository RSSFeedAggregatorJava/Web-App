import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  token: string;

  constructor() {
    this.token = localStorage.getItem('token');
    console.log(this.token);
  }
}
