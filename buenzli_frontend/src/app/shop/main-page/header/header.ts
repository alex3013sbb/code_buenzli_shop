import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { userRole } from '../../shared/auth';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {

  readonly userRole = userRole;

  constructor(private router: Router) {}

  navigateMain() {
    this.router.navigate(['/main']);
  }

  navigateCart() {
    this.router.navigate(['/cart']);
  }

  navigateUser() {
    this.router.navigate(['/user']);
  }

  logout(){
    console.log('User logged out');
    // optionally navigate to login
    this.router.navigate(['/login']);
  }
}
