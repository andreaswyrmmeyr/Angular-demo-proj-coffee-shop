import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoffeeItem } from 'src/app/model/coffee-item';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
   id: number = 0;

   currentItem: CoffeeItem = new CoffeeItem;

  constructor(private productService: ProductService, private actRoute: ActivatedRoute, private route: Router) { }

  ngOnInit(): void {
    const routeId = this.actRoute.snapshot.paramMap.get("id") ?? "";
    this.id = parseInt(routeId);
    this.loadItem();
  }

  loadItem() {
    this.productService.getProductByID(this.id).subscribe(foundItem => {
      this.currentItem = foundItem;
    });
  }

  onDelete(testId: number) {
    this.productService.deleteProductById(testId).subscribe(response => {
      this.route.navigateByUrl("/products");
    });
 }

}
