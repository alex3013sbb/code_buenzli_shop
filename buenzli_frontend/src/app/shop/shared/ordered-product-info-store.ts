import { inject, Service } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OrderedProductInfo, OrderedProductInfoCreate } from './orderedProductInfo';

@Service()
export class OrderedProductInfoStore {
  #http = inject(HttpClient);
  #apiUrl = 'http://localhost:3000';

  getAll(): Observable<OrderedProductInfo[]> {
    return this.#http.get<OrderedProductInfo[]>(this.#apiUrl + '/orderedProductInfo');
  }

  create(orderedProductInfo: OrderedProductInfoCreate): Observable<OrderedProductInfoCreate> {
    return this.#http.post<OrderedProductInfo>(
      this.#apiUrl + '/orderedProductInfo',
      orderedProductInfo,
    );
  }

  update(orderedProductInfo: OrderedProductInfo): Observable<OrderedProductInfo> {
    return this.#http.post<OrderedProductInfo>(
      this.#apiUrl + '/orderedProductInfo',
      orderedProductInfo,
    );
  }
}
