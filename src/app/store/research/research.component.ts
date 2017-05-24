import { Book } from './../../models/book';
import { Category } from './../../models/caterogy';
import { BookService } from './../../services/book.service';
import { CategoryService } from './../../services/category.service';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-research',
  templateUrl: './research.component.html',
  styleUrls: ['./research.component.css'],
  providers: [BookService, CategoryService]
})
export class ResearchComponent implements OnInit {
  categories: Category[]
  books: any[]
  book: any = {
    name: 'book name',
    author: 'auhtor name',
    editionDate: 2000,
    edition: '',
    priceMin: 0,
    priceMax: 0,
    category: ''
  }
  @Output() search = new EventEmitter<Book>()

  constructor(private categoryService: CategoryService,
    private bookService: BookService) {
    this.categoryService.getAllCategories().subscribe(categories => {
      this.categories = categories
    })
  }

  ngOnInit() {
    this.book = {
      name: null,
      author: null,
      editionDate: null,
      edition: null,
      priceMin: 10,
      priceMax: 500,
      categories: this.categories,
      category: null
    }
  }

  public getBookAdvancedSearch(book) {
    this.bookService.getBookAdvancedSearch(book).subscribe(books => {
      this.search.emit(books)
    })
  }



}
