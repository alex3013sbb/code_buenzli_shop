import { inject, Injectable, Service, signal } from '@angular/core';
import { Category, CategoryCreate } from './category';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CategoryStore {
  #http = inject(HttpClient);
  #apiUrl = 'http://localhost:3000';

  protected activeCategory = signal<Category | undefined>(undefined);

  setActiveCategory(category: Category | undefined): void {
    this.activeCategory.set(category);
  }

  getActiveCategory(): Category | undefined {
    return this.activeCategory();
  }

  getAll(): Observable<Category[]> {
    return this.#http.get<Category[]>(this.#apiUrl + '/categories');
  }

  create(category: CategoryCreate): Observable<Category> {
    return this.#http.post<Category>(this.#apiUrl + '/categories', category);
  }

  search(term: string): Observable<Category[]> {
    return this.#http.get<Category[]>(this.#apiUrl + '/categories/search/' + term);
  }

  delete(id: number): Observable<unknown> {
    return this.#http.delete<Category>(this.#apiUrl + '/categories/' + id)
  }
}


