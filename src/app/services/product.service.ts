import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { CoffeeItem } from '../model/coffee-item';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  dataSource: string = 'http://localhost:3000/products';
  dataSortAsc: string = 'http://localhost:3000/products/?_sort=price';
  dataSortDesc: string = 'http://localhost:3000/products/?_sort=price&_order=desc';

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<CoffeeItem[]> {
    return this.http.get<CoffeeItem[]>(this.dataSource);
  }

  getProductByID(id: number): Observable<CoffeeItem> {
    return this.http.get<CoffeeItem>(`${this.dataSource}/${id}`);
  }

  creatNewProduct(newProduct: CoffeeItem): Observable<CoffeeItem> {
    return this.http.post<CoffeeItem>(this.dataSource, newProduct);
  }

  editProductById(id: number, edittedProduct: CoffeeItem): Observable<CoffeeItem> {
    return this.http.put<CoffeeItem>(`${this.dataSource}/${id}`, edittedProduct);
  }

  deleteProductById(id: number): Observable<CoffeeItem> {
    return this.http.delete<any>(`${this.dataSource}/${id}`);
  }

  sortProductByNameAsc(): Observable<CoffeeItem[]> {
    return this.http.get<CoffeeItem[]>(this.dataSortAsc);
  }

  sortProductByNameDesc(): Observable<CoffeeItem[]> {
    return this.http.get<CoffeeItem[]>(this.dataSortDesc);
  }

}
