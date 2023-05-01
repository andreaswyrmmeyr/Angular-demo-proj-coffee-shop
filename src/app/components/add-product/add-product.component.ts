import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CoffeeItem } from 'src/app/model/coffee-item';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  newItem: CoffeeItem = new CoffeeItem;

  constructor(private productService: ProductService, private route: Router) { }

  ngOnInit(): void {
    
  }

  onSubmit() {
    this.productService.creatNewProduct(this.newItem).subscribe(response => {
      this.route.navigateByUrl("/products");
    });
  }
}
