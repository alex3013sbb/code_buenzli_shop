import { inject, Service } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CartItem, CartItemCreate } from './cartItem';

@Service()
export class CartItemStore {
  #http = inject(HttpClient);
  #apiUrl = 'http://localhost:3000';

  getAll(): Observable<CartItem[]> {
    return this.#http.get<CartItem[]>(this.#apiUrl + '/cart-item');
  }

  create(cartItem: CartItemCreate): Observable<CartItem> {
    return this.#http.post<CartItem>(
      this.#apiUrl + '/cart-item',
      cartItem,
    );
  }

  update(cartItem: CartItem): Observable<CartItem> {
    return this.#http.put<CartItem>(
      this.#apiUrl + '/cart-item/' + cartItem.id,
      cartItem,
    );
  }

  delete(id: number): Observable<unknown> {
    return this.#http.delete<unknown>(this.#apiUrl + '/cart-item/' + id);
  }
}
