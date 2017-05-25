import { getTestBed } from '@angular/core/testing';
import { Tab } from './../../../models/tabs';
import { CartService } from './../../../services/cart.service';
import { Book } from './../../../models/book';
import { BookService } from './../../../services/book.service';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { Observable } from 'rxjs/Observable';
import { PaginationInstance } from 'ngx-pagination'

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css'],
  providers: [BookService, CartService],
/*  changeDetection: ChangeDetectionStrategy.OnPush
*/})
export class MainContentComponent implements OnInit {
  books: Book[]
  asyncBooks: Observable<Book[]>
  book: Book
  cart = {
    isDeleted: 0,
    TotalQty: 0,
    books: []
  }
  public loaded: boolean
  tab: Tab
  items: string[]
  public config: PaginationInstance = {
    id: 'advanced',
    itemsPerPage: 10,
    currentPage: 1
  }
  page: number = 1
  constructor(private service: BookService, private cartService: CartService) {

  }

  ngOnInit() {
    console.log('in main content')
    this.tab = new Tab()
    this.items = this.tab.getItems()
    this.service.getAllBooks().subscribe(books => {
      this.books = books
      this.page = 1
      console.log(this.books)
    })
    if (Cookie.get('angular-cookie') != null) {
      this.cartService.getCartById(+Cookie.get('angular-cookie'))
        .subscribe(data => {
          this.cart = data
        })
    }
    console.log(this.books)    /*this.config = {
      itemsPerPage: 10,
      currentPage: p
    }*/
  }

  search(books: Book[]) {
    this.books = books
  }
  public addToCart(book: Book) {
    this.book = book
    console.log(book)
    if (book.isDeleted === 0) // book exists
    {
      console.log('cart will be added')
      console.log(this.cart)

      this.cart.books.push(book._id)
      this.cart.TotalQty += 1

      this.cartService.addCart(this.cart).subscribe(data => {

        console.log(data)
        //this.books.push(book);

        if (Cookie.get('angular-cookie') === null) {
          Cookie.set('angular-cookie', data._id)
        }

      })
    }
  }


  public display(books: Book[]) {
    this.books = books
  }


}
