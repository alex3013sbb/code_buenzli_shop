import { Component, signal } from '@angular/core';
import { User } from '../../shared/user';
import { EditUserInfoForm } from '../edit-user-info-form';

@Component({
  selector: 'app-user-info',
  imports: [EditUserInfoForm],
  templateUrl: './user-info.html',
  styleUrl: './user-info.scss',
})
export class UserInfo {

  protected user = signal<User>({name: "Oleksandr Kolomiiets", email: "oleksandr.kolomiiets@example.com", address: "Speichergasse 404"});
  protected showEditModal = signal(false);

  changeUserData() {
    this.showEditModal.set(true);
  }

  closeModal() {
    this.showEditModal.set(false);
  }

  onSaveUser(userData: User) {
    this.user.set(userData);
    this.closeModal();
  }

  deleteUser() {
  
  }
}