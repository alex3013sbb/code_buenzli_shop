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
  protected readonly title = signal('buenzli_frontend');
  protected readonly username = signal('');
  protected readonly password = signal('');
  protected readonly isAdmin = signal(false);
}
