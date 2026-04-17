import { TestBed } from '@angular/core/testing';

import { Supplier } from '../../supplier.interface';

import { SupplierService } from '../../services/product-service/supplier';

describe('SupplierService', () => {
  let service: SupplierService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SupplierService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});