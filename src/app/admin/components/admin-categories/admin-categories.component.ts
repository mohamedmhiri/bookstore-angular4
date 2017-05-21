import { CategoryService } from './../../../services/category.service';
import { Category } from './../../../models/caterogy';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-categories',
  templateUrl: './admin-categories.component.html',
  styleUrls: ['./admin-categories.component.css'],
  providers: [CategoryService]
})
export class AdminCategoriesComponent implements OnInit {
  categories: Category[]
  constructor(private service: CategoryService) { }

  ngOnInit() {
    this.service.getAllCategories()
    .subscribe(data => {
      this.categories = data
    })
  }

}
