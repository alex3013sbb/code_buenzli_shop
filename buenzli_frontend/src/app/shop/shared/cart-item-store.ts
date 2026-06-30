import { inject, Service } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CartItem, OrderedProductInfoCreate } from './cartItem';

@Service()
export class CartItemStore {
  #http = inject(HttpClient);
  #apiUrl = 'http://localhost:3000';

  getAll(): Observable<CartItem[]> {
    return this.#http.get<CartItem[]>(this.#apiUrl + '/orderedProductInfo');
  }

  create(orderedProductInfo: OrderedProductInfoCreate): Observable<CartItem> {
    return this.#http.post<CartItem>(
      this.#apiUrl + '/orderedProductInfo',
      orderedProductInfo,
    );
  }

  update(orderedProductInfo: CartItem): Observable<CartItem> {
    return this.#http.put<CartItem>(
      this.#apiUrl + '/orderedProductInfo/' + orderedProductInfo.id,
      orderedProductInfo,
    );
  }
}
