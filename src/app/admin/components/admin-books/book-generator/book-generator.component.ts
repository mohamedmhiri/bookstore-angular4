import { Book } from './../../../../models/book';
import { BookSourceService } from '../../../../services/book-source.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'book-generator',
  templateUrl: './book-generator.component.html',
  styleUrls: ['./book-generator.component.css'],
  providers: [BookSourceService]
})
export class BookGeneratorComponent implements OnInit {

  @Output() parse = new EventEmitter<Book[]>()

  @Input() book: string
  books: string[][]
  constructor(private service: BookSourceService) { }

  ngOnInit() {
    this.books = this.service.getBooksUrl()
  }

  parseBooks(book) {
    console.log(book[0])
    this.service.parseRssFeed(book[0])
      .subscribe(data => {
        this.parse.emit(data)
      })
  }

}
