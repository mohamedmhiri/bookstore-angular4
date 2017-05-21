import { Cart } from './../../../../models/cart';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {

  @Input() cart: Cart
  constructor() { }

  ngOnInit() {
  }

}
