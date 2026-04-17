import { Injectable } from '@angular/core';
import { Product } from '../../../product';

@Injectable({ providedIn: 'root' })
export class ProductService {

private products: Product[] = [
  {
      id: 1,
      name: 'Macbook Pro',
      category: 'Electronics',
      price: 50000,
      stock: 20,
      status: 'Available',
      description: 'Laptop with M5, M4 Pro, and Max Chips. Built for AI and Apple Intelligence.',
      brand: 'Apple',
      rating: 4.9,
      made: 'Made in China',
      model: 'A1502'
    },
    {
      id: 2,
      name: 'iPad',
      category: 'Electronics',
      price: 30000,
      stock: 12,
      status: 'Available',
      description: 'iPad is more capable than ever. Get things done, express yourself, and stay immersed in your favorite activities.',
      brand: 'Apple',
      rating: 4.5,
      made: 'Made in China',
      model: 'iPad Gen 11'
    },
    {
      id: 3,
      name: 'AirPods 4',
      category: 'Electronics, Accessories',
      price: 11500,
      stock: 5,
      status: 'Low',
      description: 'AirPods 4 with Active Noise Cancellation.',
      brand: 'Apple',
      rating: 5.0,
      made: 'Made in China',
      model: 'AirPods 4 ANC'
    },
    {
      id: 4,
      name: 'Charger',
      category: 'Electronics, Accessories',
      price: 1200,
      stock: 0,
      status: 'Out of Stock',
      description: '1-meter charge cable with woven design and USB-C connectors on both ends.',
      brand: 'Apple',
      rating: 4.2,
      made: 'Made in China',
      model: 'USB-C Woven Cable'
    },
    {
      id: 5,
      name: 'Apple Watch Series 9',
      category: 'Wearables',
      price: 25000,
      stock: 8,
      status: 'Available',
      description: 'Advanced health monitoring and fitness tracking with Always-On Retina display.',
      brand: 'Apple',
      rating: 4.8,
      made: 'Made in China',
      model: 'Series 9'
    },
    {
      id: 6,
      name: 'iPhone 15',
      category: 'Electronics',
      price: 55000,
      stock: 10,
      status: 'Available',
      description: 'Powerful smartphone with A16 Bionic chip and advanced camera system.',
      brand: 'Apple',
      rating: 4.9,
      made: 'Made in China',
      model: 'iPhone 15'
    },
    {
      id: 7,
      name: 'Magic Keyboard',
      category: 'Accessories',
      price: 7000,
      stock: 6,
      status: 'Limited',
      description: 'Wireless keyboard with comfortable typing experience and long battery life.',
      brand: 'Apple',
      rating: 4.6,
      made: 'Made in China',
      model: 'Magic Keyboard 2'
    },
    {
      id: 8,
      name: 'Magic Mouse',
      category: 'Accessories',
      price: 4500,
      stock: 9,
      status: 'Available',
      description: 'Wireless mouse with multi-touch surface for gestures.',
      brand: 'Apple',
      rating: 4.4,
      made: 'Made in China',
      model: 'Magic Mouse 2'
    },
    {
      id: 9,
      name: 'Mac Mini',
      category: 'Electronics',
      price: 38000,
      stock: 4,
      status: 'Limited',
      description: 'Compact desktop computer powered by Apple Silicon chip.',
      brand: 'Apple',
      rating: 4.7,
      made: 'Made in China',
      model: 'Mac Mini M2'
    },
    {
      id: 10,
      name: 'Apple TV 4K',
      category: 'Entertainment',
      price: 10000,
      stock: 7,
      status: 'Available',
      description: 'Stream movies and shows in 4K HDR with Dolby Atmos support.',
      brand: 'Apple',
      rating: 4.5,
      made: 'Made in China',
      model: 'Apple TV 4K'
    }
  ];

getProducts(): Product[] {
  return this.products;
}

getProductById(id: number): Product | undefined {
  return this.products.find(p => p.id === id);
}

updateProduct(updatedProduct: Product): void {
  const index = this.products.findIndex(p => p.id === updatedProduct.id);
  if (index !== -1) {
    this.products[index] = { ...updatedProduct };
  }
}
}