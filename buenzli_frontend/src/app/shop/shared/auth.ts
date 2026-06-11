import { signal } from '@angular/core';

export const username = signal<string | null>(null);
export const userRole = signal<'USER' | 'ADMIN'>('USER');
