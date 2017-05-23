import { BookSourceService } from './../../../services/book-source.service';
import { BookService } from './../../../services/book.service';
import { Book } from './../../../models/book';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-books',
  templateUrl: './admin-books.component.html',
  styleUrls: ['./admin-books.component.css'],
  providers: [BookService, BookSourceService]
})
export class AdminBooksComponent implements OnInit {

  public books: Book[]
  public booksFeed: string[][]
  constructor(private bookService: BookService, private service: BookSourceService) { }

  ngOnInit() {
    this.booksFeed = this.service.getBooksUrl()
    this.bookService.getAllBooks()
    .subscribe( data => {
      this.books = data
    })
  }
  parseResponse = {
    'books': [],
    'category': ''
  }
  parseBooks(res: any) {
    /*const tmp = [...this.books, ...res.books]
    this.books = tmp*/
    console.log(res)
  }



}
