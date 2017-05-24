import { Book } from './../../../models/book';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'card-price',
  templateUrl: './card-price.component.html',
  styleUrls: ['./card-price.component.css']
})
export class CardPriceComponent implements OnInit {
  @Input() book: Book

  constructor() { }

  ngOnInit() {
  }

}
