import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginPage } from './shop/login-page/login-page';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LoginPage],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly username = signal('');
  protected readonly password = signal('');
  protected readonly isAdmin = signal(false);

  setUsername(newUsername: string) {
    this.username.update((u) => newUsername);
    console.log('set new username', this.username());
  }

  setPassword(newPassword: string) {
    this.password.update((p) => newPassword);
    console.log('set new password ', this.password());
  }

  setIsAdmin(newIsAdmin: boolean) {
    this.isAdmin.update((a) => newIsAdmin);
    console.log('set isAdmin', this.isAdmin());
  }
}
