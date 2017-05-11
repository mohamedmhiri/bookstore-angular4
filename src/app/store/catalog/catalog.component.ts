import { CartService } from './../../services/cart.service';
import { BookService } from './../../services/book.service';
import { Component, OnInit } from '@angular/core';
import { Cookie } from 'ng2-cookies/ng2-cookies';

@Component({
  selector: 'book-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],
  providers: [BookService, CartService]
})
export class CatalogComponent implements OnInit {

  books: any = []

  cart = {
  
    isDeleted: 0,
    TotalQty: 0,
    books: []
  }

  constructor(private booksService: BookService, private cartsService: CartService) {
    this.booksService.getAllBooks().subscribe(books => {
      this.books = books
    })
  }

  ngOnInit() {
  }

  public getBookAdvancedSearch(book) {
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
  }
  public addToCart(book) {
    if (book.isDeleted === 0) // book exists
    {
      console.log('cart will be added')
    
    
      this.cart.books.push(book._id)
      this.cart.TotalQty += 1

      this.cartsService.addCart(this.cart).subscribe(data => {
        console.log('Success' + data)
        //this.books.push(book);
        Cookie.set('angular-cookie', data._id)
      })
    }

    /*Cookie.set('cookieName', 'cookieValue');
    Cookie.set('cookieName', 'cookieValue', 10 days from now);
    Cookie.set('cookieName', 'cookieValue', 10, '/myapp/', 'mydomain.com');
    
    let myCookie = Cookie.get('cookieName');
    
    
    // List of cookies as Object, like: { cookieName: "cookieValue", cookieName2: "cookieValue2" ... etc }
    
    let cookielist = Cookie.getAll();
    
    Cookie.delete('cookieName');
    Cookie.deleteAll();*/
  }

}
