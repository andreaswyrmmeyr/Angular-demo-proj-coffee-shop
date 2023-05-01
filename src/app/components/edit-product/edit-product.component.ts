import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoffeeItem } from 'src/app/model/coffee-item';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent {

  id: number = 0;

  currentItem: CoffeeItem = new CoffeeItem;

 constructor(private productService: ProductService, private actRoute: ActivatedRoute, private route: Router) { }

 ngOnInit(): void {
   const routeId = this.actRoute.snapshot.paramMap.get("id") ?? "";
   this.id = parseInt(routeId);
   this.productService.getProductByID(this.id).subscribe(foundItem => {
    this.currentItem = foundItem;
  });
 }

 onSubmit() {
  this.productService.editProductById(this.id, this.currentItem).subscribe(response => {
    this.route.navigateByUrl("/products");
  });
}
}
