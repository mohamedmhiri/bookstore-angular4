import { CommandService } from './../../services/command.service';
import { Auth } from './../../services/custom-auth.service';
import { CartService } from './../../services/cart.service';
import { BookService } from './../../services/book.service';
import { Component, OnInit, OnChanges, DoCheck } from '@angular/core';
import { Cookie } from 'ng2-cookies/ng2-cookies';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  providers: [BookService, CartService, CommandService]
})

export class CartComponent implements OnInit, OnChanges, DoCheck {
  books: any = []
  data: any = []
  total: number = 0;

  cart = {

    isDeleted: 0,
    books: [],
    TotalPrice: this.total,
    TotalQty: 0
  }


  /*@Input() TotalQty: number;
    @Input() oldPrice: number;*/
  constructor(private cartService: CartService, private bookService: BookService, private auth: Auth, private commandService: CommandService) { }

  ngOnInit() {
    this.cartService.getCartById(+Cookie.get('angular-cookie')).subscribe(data => {
      console.log(data)
      console.log('cart' + data.books[0].name)
      this.books = data.books
    })
    /*console.log(this.data+'after first sub')
        let fields = `${this.data.books[0]}`
        for(let i = 1; i < this.data.length; i++){
          fields += `,${this.data.books[i]}`
        }
        console.log(fields)
        this.booksService.getManyBooks(fields).subscribe(book => {
          this.books.push(book)
          console.log(`${this.books}=========>`)
        })
        console.log(this.books)
      */

  }
  ngOnChanges() {
    this.cartService.getCartById(+Cookie.get('angular-cookie')).subscribe(data => {
      this.books = data.books;
    })

    // console.log("total"+this.total)
  }

  ngDoCheck() {

    console.log("total" + this.total)
  }

  removeBookFromCart(id): void {
    console.log(id)
    this.books.splice(id, 1)

    this.cart.books = this.books
    this.cartService.removeBookFromCart(this.cart).subscribe(data => {
      console.log(data)
    })

  }

  totalQ(): void {
    this.total = 0;
    for (let element of this.books) {
      this.total += element.oldPrice * element.TotalQty;
    }
  }


  trackBooks(index, book) {
    let t = book.oldPrice * book.TotalQty
    t = book.oldPrice * book.TotalQty + t
    this.total = book.oldPrice * book.TotalQty
    // console.log(book.oldPrice*book.TotalQty+"total "+this.total);
    return book ? book.TotalQty : undefined;

  }

  passCommand(): void {
    /*for(let element of this.books) {
      this.total += element.oldPrice * element.TotalQty;
    }*/
    
    let command = {
      books: this.books,
      cart: Cookie.get('angular-cookie')
    }
    
    this.commandService.addCommand(command).subscribe(data => {
      console.log(data)
      Cookie.set('angular-command', data._id)
    })
    Cookie.delete('angular-cookie')
  }
}

