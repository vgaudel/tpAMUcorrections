import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { IProduit } from '../model/IProduit';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  private readonly apiUrl = 'http://localhost:3000/products';

  http = inject(HttpClient);

  getAllProducts$() : Observable<IProduit[]>{
    return this.http.get<IProduit[]>(this.apiUrl);
  }

  deleteProductById$(id: string) : Observable<{message : string}>{
    return this.http.delete<{message : string}>(this.apiUrl+'/'+id);
  }
  getProductById$(id: string): Observable<IProduit> {
    return this.http.get<IProduit>(`${this.apiUrl}/${id}`);
  }

  getProductByName$(name: string): Observable<IProduit> {
    return this.http.get<IProduit>(`${this.apiUrl}/name/${name}`);
  }

  getProductsByCategory$(category: string): Observable<IProduit[]> {
    return this.http.get<IProduit[]>(`${this.apiUrl}/category/${category}`);
  }
  
  getProductsCategories$(): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiUrl}/categories`);
  }

  productExists$(name: string): Observable<boolean> {
    return this.http.get<boolean>(`${this.apiUrl}/exists/${name}`);
  }
  
  countProducts$(): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/count/total`);
  }

  createProduct$(product: Omit<IProduit, 'id'>): Observable<IProduit> {
    return this.http.post<IProduit>(this.apiUrl, product);
  }

  updateProduct$(id: string, product: Omit<IProduit, 'id'>): Observable<IProduit> {
    return this.http.put<IProduit>(`${this.apiUrl}/${id}`, product);
  }
  deleteProductByName$(name: string): Observable<{ message: string }> {
    return this.http.delete<{ message: string }>(`${this.apiUrl}/name/${name}`);
  }
}
