import { inject, Injectable, Service } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductStore {
  #http = inject(HttpClient);
  #apiUrl = 'http://localhost:3000';

  getAll(): Observable<Product[]> {
    let logTest = this.#http.get<Product[]>(this.#apiUrl + '/products');
    console.log(logTest.subscribe(products => console.log(products)));
    return logTest;
  }

  create(product: Product): Observable<Product> {
    return this.#http.post<Product>(this.#apiUrl + '/products', product);
  }

  search(term: string): Observable<Product[]> {
    return this.#http.get<Product[]>(this.#apiUrl + '/products/search/' + term);
  }

  delete(id: number): Observable<unknown> {
    return this.#http.delete<Product>(this.#apiUrl + '/products/' + id);
  }
}
