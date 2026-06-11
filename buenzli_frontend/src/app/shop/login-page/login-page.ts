import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginForm } from './login-form/login-form';
import { username, userRole } from '../shared/auth';

@Component({
  selector: 'app-login-page',
  imports: [LoginForm],
  templateUrl: './login-page.html',
  styleUrl: './login-page.scss',
})
export class LoginPage {
  constructor(private router: Router) {}

  setUsername(newUsername: string) {
    username.set(newUsername);
  }

  setPassword(_: string) {
    // password not persisted for now
  }

  setIsAdmin(isAdmin: boolean) {
    userRole.set(isAdmin ? 'ADMIN' : 'USER');
    // navigate to main after login
    this.router.navigate(['/main']);
  }
}
