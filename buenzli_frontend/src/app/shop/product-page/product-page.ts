import { Component, input, signal } from '@angular/core';
import { ProductCard } from '../product-card/product-card';
import { Product } from '../shared/product';
import { Category } from '../shared/category';

@Component({
  selector: 'app-product-page',
  imports: [ProductCard],
  templateUrl: './product-page.html',
  styleUrl: './product-page.scss',
})
export class ProductPage {
  protected readonly role = signal<('USER' | 'ADMIN')>('USER');

  protected readonly products = signal<Product[]>([
    {
      id: 1,
      name: 'Top Quality Krawatte',
      price: 15.3,
      category: 'Krawatte',
    },
    {
      id: 2,
      name: "Andi's Special Krawatte",
      price: 19.95,
      category: 'Krawatte',
    },
    {
      id: 3,
      name: 'Traditionelle Wollmütze',
      price: 23.45,
      category: 'Kopfbedeckung',
    },
    {
      id: 4,
      name: 'Alpkräuter-Sitzkissen',
      price: 34.5,
      category: 'Wohnen',
    },
    {
      id: 5,
      name: 'Gipfelstürmer Socken',
      price: 18.9,
      category: 'Socken',
    },
    {
      id: 6,
      name: "Andi's Hüttentee-Mischung",
      price: 12.5,
      category: 'Lebensmittel',
    },
    {
      id: 7,
      name: 'Gestrickter Stirnband-Klassiker',
      price: 21.0,
      category: 'Kopfbedeckung',
    },
    {
      id: 8,
      name: 'Käsehobel mit Arvenholzgriff',
      price: 45.0,
      category: 'Küchenhelfer',
    },
    {
      id: 9,
      name: 'Handgewebter Brotsack',
      price: 16.8,
      category: 'Küche',
    },
    {
      id: 10,
      name: 'Kuschelige Alphütten-Decke',
      price: 89.0,
      category: 'Wohnen',
    },
  ]);
}
