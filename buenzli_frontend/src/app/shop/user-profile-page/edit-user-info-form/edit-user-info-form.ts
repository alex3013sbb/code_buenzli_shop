import { Component, input, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../../shared/user';

@Component({
  selector: 'app-edit-user-info-form',
  imports: [FormsModule],
  templateUrl: './edit-user-info-form.html',
  styleUrl: './edit-user-info-form.scss',
})
export class EditUserInfoForm {
  readonly userData = input<User>();
  readonly saveUser = output<User>();
  readonly close = output<void>();

  protected name = signal('');
  protected email = signal('');
  protected address = signal('');

  constructor() {
    const user = this.userData();
    if (user) {
      this.name.set(user.name);
      this.email.set(user.email);
      this.address.set(user.address);
    }
  }

  onSave() {
    this.saveUser.emit({
      name: this.name(),
      email: this.email(),
      address: this.address(),
    });
    this.close.emit();
  }

  onCancel() {
    this.close.emit();
  }
}
