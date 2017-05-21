import { CommandFormComponent } from './../components/admin-commands/command-form/command-form.component';
import { CategoryFormComponent } from './../components/admin-categories/category-form/category-form.component';
import { BookFormComponent } from './../components/admin-books/book-form/book-form.component';
import { CategoryListComponent } from './../components/admin-categories/category-list/category-list.component';
import { CommandListComponent } from './../components/admin-commands/command-list/command-list.component';
import { CartListComponent } from './../components/admin-carts/cart-list/cart-list.component';
import { CartFormComponent } from './../components/admin-carts/cart-form/cart-form.component'
import { BookListComponent } from './../components/admin-books/book-list/book-list.component';
import { AdminHomeComponent } from './../admin-home/admin-home.component';
import { AdminBooksComponent } from './../components/admin-books/admin-books.component';
import { AdminCategoriesComponent } from './../components/admin-categories/admin-categories.component';
import { AdminCommandsComponent } from './../components/admin-commands/admin-commands.component';
import { AdminCartsComponent } from './../components/admin-carts/admin-carts.component';
import { MainPageComponent } from './../components/main-page/main-page.component';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { LoginComponent } from '../../store/login/login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const ROUTES = [
    {
        path: '', 
        component: AdminHomeComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
      path: 'main',
      component: MainPageComponent
    },
    {
      path: 'admin-books',
      component: AdminBooksComponent
    },
    {
      path: 'admin-carts',
      component: AdminCartsComponent
    },
    {
      path: 'admin-commands',
      component: AdminCommandsComponent
    },
    {
      path: 'admin-categories',
      component: AdminCategoriesComponent
    },
    {
      path: 'book-list',
      component: BookListComponent
    },
    {
      path: 'cart-list',
      component: CartListComponent
    },
    {
      path: 'command-list',
      component: CommandListComponent
    },
    {
      path: 'category-list',
      component: CategoryListComponent
    },
    {
      path: 'book-form',
      component: BookFormComponent
    },
    {
      path: 'cart-form',
      component: CartFormComponent
    },
    {
      path: 'command-form',
      component: CommandFormComponent
    },
    {
      path: 'category-form',
      component: CategoryFormComponent
    }


]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class AdminRouterModule { }
