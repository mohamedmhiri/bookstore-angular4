import { BookService } from './../../../../services/book.service';
import { Book } from './../../../../models/book';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
  providers: [BookService]
})
export class BookListComponent implements OnInit {

  @Input () book: Book
  @Output() delete = new EventEmitter<Book>()
  constructor(private bookService: BookService) { }

  ngOnInit() {
  }

  deleteBook(book: Book) {
    this.bookService.removeBook(book)
    .subscribe(data => this.delete.emit(book))
  }

}
