import { Category } from './../../../../models/caterogy';
import { Book } from './../../../../models/book';
import { BookService } from './../../../../services/book.service';
import { CategoryService } from './../../../../services/category.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css'],
  providers: [CategoryService, BookService]
})
export class BookFormComponent implements OnInit {
  categories: Category[]
  book: Book
  bookForm: FormGroup; // <--- heroForm is of type FormGroup
  @Output() insert = new EventEmitter<Book>()
  constructor(private fb: FormBuilder, private service: CategoryService, private bookService: BookService) { }

  ngOnInit() {
    this.book = new Book()
    this.createForm()
  }

  createForm() {
    this.bookForm = this.fb.group({
      name: [this.book.name, Validators.required],
      oldPrice: [this.book.oldPrice, Validators.pattern('^[0-9]+$')],
      recentPrice: [this.book.recentPrice, Validators.pattern('^[0-9]+$')],
      availableBooks: [this.book.availableBooks, Validators.pattern('^[0-9]+$')],
      inMarket: [this.book.availableBooks, Validators.pattern('^[0-9]+$')],
      description: [this.book.description, [
        Validators.minLength(1)
      ]],
    })
  }
  saveBook() {
    const formModel = this.bookForm.value

    const saveBook: Book = {
      name: formModel.name,
      oldPrice: formModel.oldPrice,
      recentPrice: formModel.recentPrice,
      availableBooks: formModel.availableBooks,
      inMarket: formModel.availableBooks,
      description: formModel.description
    }
    this.bookService.addBook(saveBook)
      .subscribe(data => this.insert.emit(data))
    this.bookForm.reset()
    
  }

}
