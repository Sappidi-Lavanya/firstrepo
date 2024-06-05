import { Component, OnInit } from '@angular/core';
import { FlipkartService } from '../flipkart.service';

@Component({
  selector: 'app-flipkart',
  templateUrl: './flipkart.component.html',
  styleUrls: ['./flipkart.component.css']
})
export class FlipkartComponent implements OnInit {
  public products: any[] = [];
  public allProducts: any[] = []; // To keep a copy of all products for filtering

  constructor(private _flipkartService: FlipkartService) { }

  ngOnInit(): void {
    this._flipkartService.getflipkart().subscribe(
      (data: any[]) => {
        this.products = data;
        this.allProducts = data; // Keep a copy of all products
      },
      (err: any) => {
        alert('Internal server error');
      }
    );
  }
  
  filterByCategory(category: string): void {
    this.products = this.allProducts.filter(product => product.category === `${category}'s clothing` || product.category === category);
  }

  filterByPrice(priceRange: number): void {
    switch (priceRange) {
      case 1:
        this.products = this.allProducts.filter(product => product.price > 7 && product.price <= 50);
        break;
      case 2:
        this.products = this.allProducts.filter(product => product.price > 50 && product.price <= 300);
        break;
      case 3:
        this.products = this.allProducts.filter(product => product.price > 300 && product.price <= 600);
        break;
      case 4:
        this.products = this.allProducts.filter(product => product.price > 600 && product.price <= 1000);
        break;
      default:
        this.products = this.allProducts;
    }
  }
}
