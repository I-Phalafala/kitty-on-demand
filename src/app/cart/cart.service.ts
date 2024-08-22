import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private apiUrl = environment.apiUrl + '/cart';
  private checkoutApiUrl = environment.apiUrl + '/checkout';

  constructor(private http: HttpClient) {}

  addToCart(product: Product): Observable<void> {
    let params = JSON.stringify(product)
    return this.http.post<void>(this.apiUrl, params);
  }
  getCartItems(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }
  deletetCartItem(): void {
    //this.http.delete(this.apiUrl);
  }
  clearCart(): Observable<void> {
    return this.http.delete<void>(this.apiUrl);
  }

  checkOut(cartItems:Product[]): Observable<void> {
    let params = JSON.stringify(cartItems)
    return this.http.post<void>(this.checkoutApiUrl, params);
  }
}
