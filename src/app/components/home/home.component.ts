import { Component, OnInit } from '@angular/core';
import { CoffeeItem } from 'src/app/model/coffee-item';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  test: string = "true";

  coffeeList: CoffeeItem[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.loadProducts();
  }


  loadProducts() {
    this.productService.getAllProducts().subscribe(response => {
      this.coffeeList = response;
    });
  }

  sortProductsAsc() {
    this.productService.sortProductByNameAsc().subscribe(Asc => {
      this.coffeeList = Asc;
    });
  }

  sortProductsDesc() {
    this.productService.sortProductByNameDesc().subscribe(Desc => {
      this.coffeeList = Desc;
    });
  }

}
