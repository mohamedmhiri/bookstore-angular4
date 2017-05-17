import { AdminComponent } from './../admin/admin.component';
import { MainContentComponent } from './../store/shared/main-content/main-content.component';
import { ErrorComponent } from './../store/error/error.component';
import { StoreComponent } from './../store/store.component';
import { LoginComponent } from './../store/login/login.component';
import { CatalogComponent } from './../store/catalog/catalog.component';
import { ToolbarComponent } from './../store/toolbar/toolbar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';

const ROUTES = [
    
    {
        path: '',
        redirectTo: 'store',
        pathMatch: 'full'
    },
    {
        path: 'store',
        loadChildren: '../store/store.module#StoreModule',
        component: StoreComponent
    },
    {
        path: 'admin',
        loadChildren: '../admin/admin.module#AdminModule',
        component: AdminComponent
    },
    {
        path: '**',
        component: ErrorComponent
    }
    

]


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(ROUTES),// Add routes to the app
  ],
  declarations: [

  ],
  providers: [
      {provide: APP_BASE_HREF, useValue: '/' }
  ],
  exports: [
      RouterModule

  ]
})
export class AppRouterModule { }
