import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {

  userRole: 'ADMIN' | 'CUSTOMER' = 'ADMIN';

  logout(){
    console.log("User logged out");
  }
}
