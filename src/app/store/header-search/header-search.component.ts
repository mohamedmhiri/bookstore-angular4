import { Book } from './../../models/book';
import { BookService } from './../../services/book.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'store-header-search',
  templateUrl: './header-search.component.html',
  styleUrls: ['./header-search.component.css'],
  providers: [BookService]
})
export class HeaderSearchComponent implements OnInit {

  books: any[];

  book: any = {

    attr: 'RapidSearch'
  }
 @Output() search = new EventEmitter<Book>()
  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.book = {

      attr: ''
    }
  }

  public save(isValid: boolean, f: any, book: any) {
    if (f) {
      console.log(book)
      this.bookService.getBookAdvancedSearch(book).subscribe(books => {
        this.books = books;
        console.log(books)
      })
    }
  }

  public getBookRapidSearch(book) {
    this.bookService.getBookRapidSearch(book).subscribe(books => {
      this.search.emit(books)
    })
  }


}
