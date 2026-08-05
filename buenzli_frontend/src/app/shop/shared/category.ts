export interface Category {
  id: number;
  name: string;
}

export type CategoryCreate = Omit<Category, 'id'>
