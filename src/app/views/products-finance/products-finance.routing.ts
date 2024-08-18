import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsAdminComponent } from './views/products-admin/products-admin.component';

const routes: Routes = [
  { path: '', component: ProductsAdminComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsFinanceRoutingModule { }
