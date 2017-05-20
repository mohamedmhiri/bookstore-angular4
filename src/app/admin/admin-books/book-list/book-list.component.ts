import { Book } from './../../../models/book';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  @Input () book: Book
  constructor() { }

  ngOnInit() {
  }

}
