import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { Component } from '@angular/core';


// Imports commented out for brevity
import { RouterModule } from '@angular/router';

import { APP_BASE_HREF } from '@angular/common';

import { LoginComponent } from './store/login/login.component';
import { FooterComponent } from './store/shared/footer/footer.component';
import { HeaderComponent } from './store/shared/header/header.component';
import { MainContentComponent } from './store/shared/main-content/main-content.component';
import { ErrorComponent } from './store/error/error.component';
import { AuthService } from './services/auth.service';
import { Auth } from './services/custom-auth.service';
import { AppConfig } from './config/app-config';
import { AdminModule } from './admin/admin.module';
import { AuthModule } from './auth/auth.module';
import { StoreModule } from './store/store.module';
/*import { AppRouterModule } from './app-router/app-router.module';
*/import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { StoreComponent } from './store/store.component';
import { SuiModule } from 'ng2-semantic-ui';

const ROUTES = [
    {
        path: '',
        redirectTo: 'store',
        pathMatch: 'full'
    },
    /*{
        path: 'categories',
        component: CategoriesComponent
    },*/
    /*{
        path: 'books',
        component: BooksComponent
    },*/
    {
        path: 'store',
        loadChildren: './store/store.module#StoreModule',
        component:StoreComponent
    },
    {
        path: 'admin',
        loadChildren: './admin/admin.module#AdminModule'
    }
]




@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    StoreComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
/*    AppRouterModule,
*/    
    StoreModule,
    AuthModule,
    AdminModule,
    SuiModule,
    RouterModule.forRoot(ROUTES)
  ],
  exports: [
  ],
  providers: [
    AppConfig,
    Auth,
    AuthService,
    {provide: APP_BASE_HREF, useValue: '/' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
