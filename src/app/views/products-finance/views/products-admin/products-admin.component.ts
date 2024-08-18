import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../../core/services/products.service';

@Component({
  selector: 'app-products-admin',
  standalone: false,
  templateUrl: './products-admin.component.html',
  styleUrl: './products-admin.component.css',
  providers: [ProductsService]
})
export class ProductsAdminComponent implements OnInit{

  products: Object = [];
  constructor(
    private productsService: ProductsService
  ) {
  }

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.productsService.getAllProducts().subscribe(
      (data) => {
        this.products = data;
      },
      (error) => {
        console.error('Error al obtener los productos', error);
      }
    );
  }



}
