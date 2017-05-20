import { CollectionModule } from './../collection.module';
import { LoginComponent } from './../store/login/login.component';
import { AdminRouterModule } from './admin-router/admin-router.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
// ng2Semantic module
import { SuiModule } from 'ng2-semantic-ui';
import { MainPageComponent } from './main-page/main-page.component';
import { AdminBooksComponent } from './admin-books/admin-books.component';
import { AdminCategoriesComponent } from './admin-categories/admin-categories.component';
import { AdminCartsComponent } from './admin-carts/admin-carts.component';
import { AdminSessionsComponent } from './admin-sessions/admin-sessions.component';
import { AdminCommandsComponent } from './admin-commands/admin-commands.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { BookListComponent } from './admin-books/book-list/book-list.component';
import { BookFormComponent } from './admin-books/book-form/book-form.component';
import { CategoryFormComponent } from './admin-categories/category-form/category-form.component';
import { CategoryListComponent } from './admin-categories/category-list/category-list.component';
import { CartListComponent } from './admin-carts/cart-list/cart-list.component';
import { CartFormComponent } from './admin-carts/cart-form/cart-form.component';
import { CommandListComponent } from './admin-commands/command-list/command-list.component';
import { CommandFormComponent } from './admin-commands/command-form/command-form.component';


@NgModule({
  imports: [
    CommonModule,
    SuiModule,
    AdminRouterModule,
    CollectionModule
  ],
  declarations: [
    SidebarComponent,
    MainPageComponent,
    AdminBooksComponent,
    AdminCategoriesComponent,
    AdminCartsComponent,
    AdminSessionsComponent,
    AdminCommandsComponent,
    AdminHomeComponent,
    BookListComponent,
    BookFormComponent,
    CategoryFormComponent,
    CategoryListComponent,
    CartListComponent,
    CartFormComponent,
    CommandListComponent,
    CommandFormComponent,

  ],
  exports: [
    SidebarComponent
  ]
})
export class AdminModule { }
