import { Component } from '@angular/core';
import { Header } from '../main-page/header/header';
import { UserInfo } from './user-info/user-info';
import { OrdersContainer } from './orders-container/orders-container';

@Component({
  selector: 'app-user-profile-page',
  imports: [ Header, UserInfo, OrdersContainer],
  templateUrl: './user-profile-page.html',
  styleUrl: './user-profile-page.scss',
})
export class UserProfilePage {}
