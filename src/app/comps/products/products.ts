import { Component } from '@angular/core';
import { Product } from '../../../product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  imports: [CommonModule],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class products {

  selectedProduct: Product | null = null;
  showModal: boolean = false;

  products: Product[] = [
    {
      id: 1,
      name: 'Mechanical Keyboard',
      category: 'Peripherals',
      price: 8500,
      stock: 15,
      status: 'Available',
      description: 'Hot-swappable tactile switches with RGB backlighting and aluminum frame.',
      brand: 'Keychron',
      rating: 4.8,
      made: 'Made in China',
      model: 'K8 Pro'
    },
    {
      id: 2,
      name: 'Gaming Monitor',
      category: 'Electronics',
      price: 22000,
      stock: 5,
      status: 'Low',
      description: '27-inch 1440p IPS display with 165Hz refresh rate and G-Sync support.',
      brand: 'ASUS',
      rating: 4.7,
      made: 'Made in Taiwan',
      model: 'ROG Swift'
    },
    {
      id: 3,
      name: 'Noise Cancelling Headphones',
      category: 'Electronics, Accessories',
      price: 18900,
      stock: 25,
      status: 'Available',
      description: 'Industry-leading noise cancellation with 30-hour battery life and voice assistant integration.',
      brand: 'Sony',
      rating: 4.9,
      made: 'Made in Malaysia',
      model: 'WH-1000XM5'
    },
    {
      id: 4,
      name: 'Smart Light Bulb',
      category: 'Home Automation',
      price: 950,
      stock: 0,
      status: 'Out of Stock',
      description: 'Wi-Fi enabled multicolor LED bulb compatible with Alexa and Google Home.',
      brand: 'TP-Link',
      rating: 4.3,
      made: 'Made in China',
      model: 'Tapo L530E'
    },
    {
      id: 5,
      name: 'Electric Scooter',
      category: 'Lifestyle',
      price: 32000,
      stock: 3,
      status: 'Limited',
      description: 'Foldable commuter scooter with 30km range and dual braking system.',
      brand: 'Xiaomi',
      rating: 4.6,
      made: 'Made in China',
      model: 'Mi Pro 2'
    },
    {
      id: 6,
      name: 'Mirrorless Camera',
      category: 'Electronics',
      price: 85000,
      stock: 7,
      status: 'Available',
      description: 'Full-frame sensor with high-speed autofocus and 4K video capabilities.',
      brand: 'Canon',
      rating: 4.9,
      made: 'Made in Japan',
      model: 'EOS R6'
    },
    {
      id: 7,
      name: 'External SSD',
      category: 'Accessories',
      price: 6500,
      stock: 40,
      status: 'Available',
      description: 'Rugged 1TB portable storage with high-speed USB 3.2 Gen 2 interface.',
      brand: 'SanDisk',
      rating: 4.7,
      made: 'Made in Malaysia',
      model: 'Extreme Portable'
    },
    {
      id: 8,
      name: 'Graphing Calculator',
      category: 'Education',
      price: 5800,
      stock: 12,
      status: 'Available',
      description: 'Advanced handheld for high school and college math and science.',
      brand: 'Texas Instruments',
      rating: 4.5,
      made: 'Made in Philippines',
      model: 'TI-84 Plus CE'
    },
    {
      id: 9,
      name: 'Air Purifier',
      category: 'Health & Home',
      price: 12500,
      stock: 10,
      status: 'Available',
      description: 'HEPA filter system that captures 99.97% of airborne particles and allergens.',
      brand: 'Dyson',
      rating: 4.8,
      made: 'Made in Malaysia',
      model: 'Pure Cool'
    },
    {
      id: 10,
      name: 'Smart Coffee Maker',
      category: 'Kitchen',
      price: 15000,
      stock: 4,
      status: 'Limited',
      description: 'App-controlled brewing system with built-in grinder and customizable strength.',
      brand: 'DeLonghi',
      rating: 4.4,
      made: 'Made in Italy',
      model: 'Magnifica S'
    }
  ];

  viewProduct(product: Product) {
    this.selectedProduct = product;
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
    this.selectedProduct = null;
  }
}
