import { Injectable } from '@angular/core';
import { apiEnvironment } from '../../config/api.config';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  serverUrl = apiEnvironment.url

  constructor(
    private http: HttpClient
  ) { }

  getAllProducts() {
    return this.http.get(`${this.serverUrl}/bp/products`);
  }

  createProduct(product: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(`${this.serverUrl}/bp/products`, product, { headers });
  }

  updateProduct(id: string, product: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put(`${this.serverUrl}/bp/products/${id}`, product, { headers });
  }

  deleteProduct(id: string): Observable<any> {
    return this.http.delete(`${this.serverUrl}/bp/products/${id}`);
  }

  verifyProductExistence(id: string): Observable<boolean> {
    return this.http.get<boolean>(`${this.serverUrl}/bp/products/verification/${id}`);
  }





}
