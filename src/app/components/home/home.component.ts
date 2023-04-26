import { Component, OnInit } from '@angular/core';
import { CoffeeItem } from 'src/app/model/coffee-item';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // ProductList: CoffeeItem [];

  constructor() { }

  ngOnInit(): void {
    
  }

}
