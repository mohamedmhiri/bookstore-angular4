import { Book } from './../../models/book';
import { CartService } from './../../services/cart.service';
import { BookService } from './../../services/book.service';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Cookie } from 'ng2-cookies/ng2-cookies';

let cart = {

  isDeleted: 0,
  TotalQty: 0,
  books: []
}
@Component({
  selector: 'book-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],
  providers: [BookService, CartService]
})
export class CatalogComponent implements OnInit {
  @Input() book: Book
  books: any = []

  @Output() cartEmitter = new EventEmitter<any>()


  buttonClass: string = 'ui vertical animated button'

  constructor(private booksService: BookService, private cartsService: CartService) {
  }

  ngOnInit() {
    if (Cookie.get('angular-cookie') != null) {
      this.cartsService.getCartById(+Cookie.get('angular-cookie'))
        .subscribe(data => {
          cart = data
          cart.books.forEach(element => {
            if (element._id === this.book._id) {
              this.buttonClass = 'ui disabled vertical animated button'
            }
          });
        })
    }
  }

  /*public getBookAdvancedSearch(book) {
    this.booksService.getBookAdvancedSearch(book).subscribe(books => {
      this.books = books
      console.log("from catalog")
    })
  }

  public getBookRapidSearch(book) {
    this.booksService.getBookRapidSearch(book).subscribe(books => {
      this.books = books
      console.log("from catalog")
    })
  }*/
  public addToCart(book) {
    console.log(book)
    if (book.isDeleted === 0) { // book exists
      console.log('cart will be added')
      console.log(cart)

      cart.books.push(book._id)
      cart.TotalQty += 1

      this.cartsService.addCart(cart).subscribe(data => {

        console.log(data)
        //this.books.push(book);

        if (Cookie.get('angular-cookie') === null) {
          Cookie.set('angular-cookie', data._id)
        }

      })
    }
    this.buttonClass = 'ui disabled vertical animated button'
  }

}
