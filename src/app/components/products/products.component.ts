import { Component , OnInit } from '@angular/core';
import { CoffeeItem } from 'src/app/model/coffee-item';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  id: number = 0;

  coffeeList: CoffeeItem[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.loadProducts();
  }

  onDelete(testId: number) {
     this.productService.deleteProductById(testId).subscribe(response => {
      this.ngOnInit();
     });
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
