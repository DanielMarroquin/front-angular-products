import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsFinanceRoutingModule } from './products-finance.routing';
import { ProductsAdminComponent } from './views/products-admin/products-admin.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ProductsFinanceRoutingModule,
    ProductsAdminComponent
  ]
})
export class ProductsFinanceModule { }
