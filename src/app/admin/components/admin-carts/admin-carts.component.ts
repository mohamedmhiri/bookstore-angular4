import { CartService } from './../../../services/cart.service';
import { Cart } from './../../../models/cart';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-carts',
  templateUrl: './admin-carts.component.html',
  styleUrls: ['./admin-carts.component.css'],
  providers: [CartService]
})
export class AdminCartsComponent implements OnInit {
  carts: Cart[]
  constructor(private service: CartService) { }

  ngOnInit() {
    this.service.getAllCarts()
    .subscribe(data => {
      this.carts = data
    })
  }

}
