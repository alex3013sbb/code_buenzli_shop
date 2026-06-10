import { Component, input, output } from '@angular/core';
import { LoginForm } from './login-form/login-form';

@Component({
  selector: 'app-login-page',
  imports: [LoginForm],
  templateUrl: './login-page.html',
  styleUrl: './login-page.scss',
})
export class LoginPage {
  readonly username = input.required<string>();
  readonly password = input.required<string>();
  readonly isAdmin = input.required<boolean>();

  newUsername = output<string>();
  newPassword = output<string>();
  newIsAdmin = output<boolean>();

  setUsername(newUsername: string) {
    this.newUsername.emit(newUsername);
  }

  setPassword(newPassword: string) {
    this.newPassword.emit(newPassword);
  }

  setIsAdmin(newIsAdmin: boolean) {
    this.newIsAdmin.emit(newIsAdmin);
  }
}
