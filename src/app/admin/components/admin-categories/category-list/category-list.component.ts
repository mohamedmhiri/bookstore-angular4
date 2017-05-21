import { Category } from './../../../../models/caterogy';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  @Input() category: Category
  constructor() { }

  ngOnInit() {
  }

}
