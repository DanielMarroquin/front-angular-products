import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsAdminComponent } from './views/products-finance/views/products-admin/products-admin.component';

export const routes: Routes = [
  {
    path: 'products',
    loadChildren: () => import('./views/products-finance/products-finance.module').then(m => m.ProductsFinanceModule)
  },
  { path: '', redirectTo: 'products', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
