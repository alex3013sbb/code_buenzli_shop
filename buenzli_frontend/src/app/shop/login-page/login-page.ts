import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { LoginForm } from './login-form/login-form';
import { AuthStore, username, userRole } from '../shared/auth';

@Component({
  selector: 'app-login-page',
  imports: [LoginForm],
  templateUrl: './login-page.html',
  styleUrl: './login-page.scss',
})
export class LoginPage {

  #authStore = inject(AuthStore);

  constructor(private router: Router) {}

  setUsername(newUsername: string) {
    this.#authStore.setUsername(newUsername);
  }

  setPassword(_: string) {
    // password not persisted for now
  }

  setIsAdmin(isAdmin: boolean) {
    if (isAdmin) {
      this.#authStore.setAdmin().subscribe();
    } else {
      this.#authStore.setUser().subscribe();
    }
    // navigate to main after login
    this.router.navigate(['/main']);
  }
}
