import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../../models/product';
import { CartService } from '../../cart/cart.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrl: './productlist.component.css',
})
export class ProductlistComponent implements OnInit {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  value = '';
  sortOrder = '';

  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
      this.filteredProducts = data;
    });
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product).subscribe({
      // after call success
      next: () => {
        this.snackBar.open('Product added to cart.');
      },
    });
  }

  applySearchFilter(event: Event): void {
    let searchTerm = (event.target as HTMLInputElement).value;
    searchTerm = searchTerm.toLowerCase();

    this.filteredProducts = this.products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm)
    );

    this.sortProducts(this.sortOrder);
  }

  clearSearchFilter() {
    this.value = '';
    this.filteredProducts = this.products;
  }

  sortProducts(sortCriteria: string) {
    let sortOrder = sortCriteria;

    if (sortOrder === 'priceLowToHigh') {
      this.filteredProducts.sort((a, b) => a.price - b.price);
    }else if (sortOrder === 'priceHighToLow') {
      this.filteredProducts.sort((a,b) => b.price - a.price);
    }
  }
}
