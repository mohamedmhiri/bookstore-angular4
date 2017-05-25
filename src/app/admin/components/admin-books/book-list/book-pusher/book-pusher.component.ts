import { BookService } from './../../../../../services/book.service';
import { CategoryService } from './../../../../../services/category.service';
import { Category } from './../../../../../models/caterogy';
import { Book } from './../../../../../models/book';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'book-pusher',
  templateUrl: './book-pusher.component.html',
  styleUrls: ['./book-pusher.component.css'],
  providers: [CategoryService, BookService]
})
export class BookPusherComponent implements OnInit {

  categories: Category[]
  @Input() book: Book
  bookForm: FormGroup; // <--- heroForm is of type FormGroup
  @Output() update = new EventEmitter<Book>()
  constructor(private fb: FormBuilder, private service: CategoryService, private bookService: BookService) { // <--- inject FormBuilder
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


  ngOnInit() {
    /*this.service.getAllCategories()
    .subscribe(data => {
      this.categories = data
    })*/
    this.createForm()
  }

  updateBook() {
    const formModel = this.bookForm.value

    const saveBook: Book = {
      _id: this.book._id,
      name: formModel.name,
      oldPrice: formModel.oldPrice,
      recentPrice: formModel.recentPrice,
      availableBooks: formModel.availableBooks,
      inMarket: formModel.availableBooks,
      description: formModel.description
    }
    this.bookService.updateBook(saveBook)
      .subscribe(data => this.update.emit(data))
  }
}
