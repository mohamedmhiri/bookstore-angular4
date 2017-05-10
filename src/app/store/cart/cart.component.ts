import { CartService } from './../../services/cart.service';
import { BookService } from './../../services/book.service';
import { Component, OnInit, OnChanges, DoCheck } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  providers: [BookService, CartService]
})

export class CartComponent implements OnInit,OnChanges,DoCheck {
  books: any = []
  data: any = []
   total:number=0;

 cart = {
  
    isDeleted: 0,
    books: [],
    TotalPrice:this.total,
    TotalQty:0
 }


  /*@Input() TotalQty: number;
    @Input() oldPrice: number;*/
  constructor(private cartService: CartService, private bookService: BookService) { }

  ngOnInit() {
      this.cartService.getCartById().subscribe(data => {
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
  ngOnChanges(){
     this.cartService.getCartById().subscribe(data => {
        this.books=data.books;
      })
    
     // console.log("total"+this.total)
  }

  ngDoCheck(){
    
      console.log("total"+this.total)
  }

  removeBookFromCart(id): void {
    console.log(id)
    this.books.splice(id, 1)
   
    this.cart.books=this.books
    this.cartService.removeBookFromCart(this.cart).subscribe(data => {
        console.log(data)
      })
     
  }

totalQ():void{
this.total = 0;
    for(let element of this.books) {
      this.total += element.oldPrice * element.TotalQty;
}
}


  trackBooks(index, book) {
      let t=book.oldPrice*book.TotalQty
        t=book.oldPrice*book.TotalQty+t
        this.total=book.oldPrice*book.TotalQty
         // console.log(book.oldPrice*book.TotalQty+"total "+this.total);
        return book ? book.TotalQty : undefined;

    }

    passCommand():void{
      
      console.log("test command")
    }
}

