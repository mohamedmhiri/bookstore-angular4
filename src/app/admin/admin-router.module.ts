import { RouterModule } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LoginComponent } from './../store/login/login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const ROUTES = [
    {
        path: '', 
        component: SidebarComponent
    },
    {
        path: 'login',
        component: LoginComponent
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
