import { CollectionModule } from './../collection.module';
import { LoginComponent } from './../store/login/login.component';
import { AdminRouterModule } from './admin-router.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
// ng2Semantic module
import { SuiModule } from 'ng2-semantic-ui';
// ng-semantic modules
import { NgSemanticModule } from 'ng-semantic';

@NgModule({
  imports: [
    CommonModule,
    SuiModule,
    NgSemanticModule,
    AdminRouterModule,
    CollectionModule
  ],
  declarations: [
    SidebarComponent
  ],
  exports: [
    SidebarComponent
  ]
})
export class AdminModule { }
