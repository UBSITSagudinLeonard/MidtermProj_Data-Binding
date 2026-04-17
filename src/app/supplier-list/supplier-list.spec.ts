import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuppliersListComponent } from '../supplier-list/supplier-list';

describe('SupplierList', () => {
  let component: SuppliersListComponent;
  let fixture: ComponentFixture<SuppliersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuppliersListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SuppliersListComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});