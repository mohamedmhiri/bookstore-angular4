import { BookService } from './../../services/book.service';
import { Book } from './../../models/book';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-books',
  templateUrl: './admin-books.component.html',
  styleUrls: ['./admin-books.component.css'],
  providers: [BookService]
})
export class AdminBooksComponent implements OnInit {

  public books: Book[]
  constructor(private service: BookService) { }

  ngOnInit() {
    this.service.getAllBooks()
    .subscribe( data => {
      this.books = data
    })
  }

}
