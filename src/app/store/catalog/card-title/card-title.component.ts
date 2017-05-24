import { Book } from './../../../models/book';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'card-title',
  templateUrl: './card-title.component.html',
  styleUrls: ['./card-title.component.css']
})
export class CardTitleComponent implements OnInit {
  @Input() book: Book

  constructor() { }

  ngOnInit() {
  }

}
