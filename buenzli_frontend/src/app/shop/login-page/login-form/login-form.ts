import { Component, output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  imports: [FormsModule],
  templateUrl: './login-form.html',
  styleUrl: './login-form.scss',
})
export class LoginForm {
  newUsername = output<string>();
  newPassword = output<string>();
  newIsAdmin = output<boolean>();

  formUsername = '';
  formPassword = '';
  formIsAdmin = false;

  submit() {
    this.newUsername.emit(this.formUsername);
    this.newPassword.emit(this.formPassword);
    this.newIsAdmin.emit(this.formIsAdmin);
  }
}
