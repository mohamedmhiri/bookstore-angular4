import { CategoryService } from './../../../../../services/category.service';
import { Category } from './../../../../../models/caterogy';
import { Book } from './../../../../../models/book';
import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'book-pusher',
  templateUrl: './book-pusher.component.html',
  styleUrls: ['./book-pusher.component.css'],
  providers: [CategoryService]
})
export class BookPusherComponent implements OnInit {

  categories: Category[]
  @Input() book: Book
  bookForm: FormGroup; // <--- heroForm is of type FormGroup

  constructor(private fb: FormBuilder, private service: CategoryService) { // <--- inject FormBuilder
  }

  createForm() {
    this.bookForm = this.fb.group({
      name: [this.book.name, Validators.required],
      oldPrice: [this.book.oldPrice, Validators.pattern('^[0-9]+$')],
      availableBooks: [this.book.availableBooks, Validators.pattern('^[0-9]+$')],
      image: [this.book.image],
      description: [this.book.description, [
        Validators.minLength(1)
      ]],
      editionDate: [this.book.editionDate, Validators.pattern('^[0-9]{4}$')],
      author: [this.book.author, Validators.minLength(3)],
      edition: [this.book.edition, Validators.minLength(3)],
      category: [this.book.category]
    })
  }


  ngOnInit() {
    /*this.service.getAllCategories()
    .subscribe(data => {
      this.categories = data
    })*/
    this.createForm()
  }
}
