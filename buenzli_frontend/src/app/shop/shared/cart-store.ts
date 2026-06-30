import { inject, Service } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cart, CartCreate } from './cart';

@Service()
export class CartStore {
  #http = inject(HttpClient);
  #apiUrl = 'http://localhost:3000';

  getAll(): Observable<Cart[]> {
    return this.#http.get<Cart[]>(this.#apiUrl + '/cart');
  }

  create(cart: CartCreate): Observable<Cart> {
    return this.#http.post<Cart>(this.#apiUrl + '/cart', cart);
  }

  update(cart: Cart): Observable<Cart> {
    return this.#http.put<Cart>(this.#apiUrl + `/cart/${cart.id}`, cart);
  }
}
