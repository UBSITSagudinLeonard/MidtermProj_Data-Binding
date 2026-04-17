import { Injectable } from '@angular/core';
import { Supplier } from '../../supplier.interface';

@Injectable({ providedIn: 'root' })
export class SupplierService {

// mock data - 10 suppliers
private suppliers: Supplier[] = [
  {
  id: 1,
  supplierName: 'Apple Philippines',
  location: ' Metro Manila',
  email: 'apple@gmail.com',
  contactPerson: 'Claire Santos',
  phone: '09123456789',
  productsSupplied: ['MacBook'],
  status: 'Active'
  },
  {
  id: 2,
  supplierName: 'Apple ',
  location: 'New York',
  email: 'apple@gmail.com',
  contactPerson: 'Alfred Smith',
  phone: '023489675',
  productsSupplied: ['Ipad '],
  status: 'Active'
  },
  {
  id: 3,
  supplierName: 'Apple ',
  location: 'New York',
  email: 'apple@gmail.com',
  contactPerson: 'Cristina Yang',
  phone: '0234896879',
  productsSupplied: ['Airpods 4, Airpods'],
  status: 'Active'
  },
  {
  id: 4,
  supplierName: 'Samsung Philippines',
  location: ' Metro Manila',
  email: 'samsung@gmail.com',
  contactPerson: 'Maria Santos',
  phone: '09125439876',
  productsSupplied: ['Charger'],
  status: 'Inactive'
  },
  {
  id: 5,
  supplierName: 'Sony',
  location: 'China',
  email: 'sony@yahoo.com',
  contactPerson: 'Lin Shi',
  phone: '987471034',
  productsSupplied: ['Sony Headphones'],
  status: 'Inactive'
  },
  {
  id: 6,
  supplierName: 'Nokia',
  location: 'Japan',
  email: 'nokiajapan@gmail.com',
  contactPerson: 'Rin Sohma',
  phone: '720174628',
  productsSupplied: ['Phone, Charger'],
  status: 'Active'
  },
  {
  id: 7,
  supplierName: 'LG',
  location: 'South Korea',
  email: 'lgsouthkorea@gmail.com',
  contactPerson: 'Song Kang',
  phone: '02781234567',
  productsSupplied: [' washing machines, tv'],
  status: 'Active'
  },
  {
  id: 8,
  supplierName: 'Samsung',
  location: 'South Korea',
  email: 'samsungsk@gmail.com',
  contactPerson: 'Lena Cruz',
  phone: '02891234567',
  productsSupplied: ['Charger, phone, earphones'],
  status: 'Inactive'
  },
  {
  id: 9,
  supplierName: 'Panasonic',
  location: 'Japan',
  email: 'panasonic@gmail.com',
  contactPerson: 'Tohru Sohma',
  phone: '864251904',
  productsSupplied: ['Camcorder, Camera'],
  status: 'Inactive'
  },
  {
  id: 10,
  supplierName: 'Philips',
  location: 'Netherlands',
  email: 'philips@gmail.com',
  contactPerson: 'Owen Philips',
  phone: '971025375',
  productsSupplied: ['Rice Cooker', 'Vacuum'],
  status: 'Inactive'
  }
];

// returns all suppliers
getSuppliers(): Supplier[] {
  return this.suppliers;
}

// returns one supplier by id
getSupplierById(id: number): Supplier | undefined {
  return this.suppliers.find(s => s.id === id);
}

// updates a supplier in the array
updateSupplier(updatedSupplier: Supplier): void {
  const index = this.suppliers.findIndex(s => s.id === updatedSupplier.id);
  if(index !== -1) {
    this.suppliers[index] = {...updatedSupplier};
  }
}

}