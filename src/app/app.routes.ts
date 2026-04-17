import { Routes } from '@angular/router';
import { Home } from './comps/home/home';
import { Navi } from './comps/navi/navi';
import { Attribute } from './databinding/attribute/attribute';
import { Class } from './databinding/class/class';
import { EventBinding } from './databinding/event/event';
import { Interpolation } from './databinding/interpolation/interpolation';
import { Property} from './databinding/property/property';
import { Style } from './databinding/style/style';
import { TwoWayBinding } from './databinding/two-way/two-way';
import { ProductsList } from './product-list/product-list';
import { ProductDetails } from './product-details/product-details';
import { SupplierDetailsComponent } from './supplier-details/supplier-details';
import { products } from './comps/products/products';
import { SuppliersListComponent } from './supplier-list/supplier-list';

export const routes: Routes = [
{ path: '', redirectTo: '/home', pathMatch: 'full' },
{ path: 'home', component: Home },
{ path: 'navi', component: Navi },
{ path: 'attribute', component: Attribute },
{ path: 'class', component: Class },
{ path: 'event', component: EventBinding },
{ path: 'interpolation', component: Interpolation },
{ path: 'property', component: Property},
{ path: 'style', component: Style },
{ path: 'two-way', component: TwoWayBinding },
{ path: 'products', component: products },
{ path: 'suppliers', component: SuppliersListComponent },
{ path: 'suppliers/:id', component: SupplierDetailsComponent },
{
  path: 'prod-list',
  component: ProductsList,
  children: [
    {
      path: ':id',
      children: [{ path: 'details', component: ProductDetails }],
    },
  ],
},
];