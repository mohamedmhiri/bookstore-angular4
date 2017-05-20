import { Book } from './../../../models/book';
import { BookService } from './../../../services/book.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css'],
  providers: [BookService]
})
export class MainContentComponent implements OnInit {
  books: Book[]
  constructor(private service: BookService) { }

  ngOnInit() {
    this.service.getAllBooks().subscribe(books => {
      this.books = books

    }

    )
  }

  search(books: Book[]){
    this.books = books
  }

}
