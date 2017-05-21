import { CartService } from './../../../services/cart.service';
import { Book } from './../../../models/book';
import { BookService } from './../../../services/book.service';
import { Component, OnInit } from '@angular/core';
import { Cookie } from 'ng2-cookies/ng2-cookies';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css'],
  providers: [BookService, CartService]
})
export class MainContentComponent implements OnInit {
  books: Book[]
  book: Book
  cart = {
    isDeleted: 0,
    TotalQty: 0,
    books: []
  }
  constructor(private service: BookService, private cartService: CartService) { }

  ngOnInit() {
    this.service.getAllBooks().subscribe(books => {
      this.books = books

    }

    )
    if (Cookie.get('angular-cookie') != null) {
      this.cartService.getCartById(+Cookie.get('angular-cookie'))
        .subscribe(data => {
          this.cart = data
        })
    }
  }

  search(books: Book[]){
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


}
