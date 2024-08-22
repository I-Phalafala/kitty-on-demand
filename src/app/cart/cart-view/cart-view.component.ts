import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart-view',
  templateUrl: './cart-view.component.html',
  styleUrl: './cart-view.component.css',
})
export class CartViewComponent implements OnInit {
  cartItems: Product[] = [];
  totalPrice = 0;

  constructor(private cartService: CartService) {}
  ngOnInit(): void {
    this.cartService.getCartItems().subscribe((data) => {
      this.cartItems = data;
      this.totalPrice = this.getTotal();
    });
  }

  getTotal(): number {
    let totalPrice = 0;

    for (let item of this.cartItems) {
      totalPrice += item.price;
    }
    return totalPrice;
  }

  removeCartItem() {
    this.cartService.deletetCartItem();
  }

  clearCart() {
    this.cartService.clearCart().subscribe();
  }

  checkOut() {
    if (this.cartItems.length > 0) {
      this.cartService.checkOut(this.cartItems).subscribe();
    }
  }
}
