import { Book } from './../../../models/book';
import { BookService } from './../../../services/book.service';
import { Component, OnInit, Input, EventEmitter, Output, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit/*, OnDestroy */{

  @Output() tab = new EventEmitter<Book[]>()
  @Input() item: string = ''
  private subscription
  constructor(private service: BookService) { }

  ngOnInit() {
  }

  /*ngOnDestroy() {
    this.subscription.unsubscribe()
  }*/

 public recentBooks(item) {
    let date = new Date()
    return (date.getFullYear() - item.editionDate < 2)
  }

  public onSales(item) {
    return (item.recentPrice - item.oldPrice != 0)
  }

  public topSaled(item) {
    return (item.inMarket - item.availableBooks > 0)
  }

  

  
  /*'All Books',
          'Top Saled',
          'On Sales',
          'New Arrival',*/
  display(item: string) {
    switch (item) {
      case 'All Books':
        this.subscription = this.service
          .getAllBooks()
          .subscribe(books => {
            this.tab.emit(books)
          })
        break;
      case 'Top Saled':
        this.subscription = this.service
          .getAllBooks()
          .subscribe(books => {
            this.tab.emit(books
            .filter(this.topSaled)
            .sort()
            .reverse()
            .slice(0, 5))
          })
        break;
      case 'On Sales':
        this.subscription = this.service
          .getAllBooks()
          .subscribe(books => {
            this.tab.emit(books
            .filter(this.onSales))
          })
        break;
      case 'New Arrival':
        this.subscription = this.service
          .getAllBooks()
          .subscribe(books => {
            this.tab.emit(books
            .filter(this.recentBooks))
          })
        break;

      default:
        this.subscription = this.service
          .getAllBooks()
          .subscribe(books => {
            this.tab.emit(books)
          })
        break;
    }
  }

}
