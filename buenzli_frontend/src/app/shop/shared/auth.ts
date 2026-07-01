import { inject, Service, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export const username = signal<string | null>(null);
export const userRole = signal<string>('USER');

@Service()
export class AuthStore {
  #http = inject(HttpClient);
  #apiUrl = 'http://localhost:3000';

  constructor() {
    this.getUserRole().subscribe(response => {
      console.error(response.role)
      userRole.set(response.role);
    })
  }

  setUsername(name: string) {
    username.set(name);
  }

  setAdmin(): Observable<any> {
    userRole.set('ADMIN');
    return this.#http.put<any>(this.#apiUrl + '/role/1', {role:'ADMIN'});
  }

  setUser(): Observable<any> {
    userRole.set('USER');
    return this.#http.put<any>(this.#apiUrl + '/role/1', {role: 'USER'});
  }

  getUserRole(): Observable<any> {
    return this.#http.get<any>(this.#apiUrl + '/role/1');
  }
}
