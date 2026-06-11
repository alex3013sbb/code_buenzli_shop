import { Routes } from '@angular/router';
import { LoginPage } from './shop/login-page/login-page';
import { MainPage } from './shop/main-page/main-page';
import { UserProfilePage } from './shop/user-profile-page/user-profile-page';
import { CartPage } from './shop/cart-page/cart-page';

export const routes: Routes = [
	{ path: '', redirectTo: 'login', pathMatch: 'full' },
	{ path: 'login', component: LoginPage },
	{ path: 'main', component: MainPage },
	{ path: 'user', component: UserProfilePage },
	{ path: 'cart', component: CartPage },
];
