import { LoginComponent } from './store/login/login.component';
import { SuiModule } from 'ng2-semantic-ui';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    SuiModule
  ],
  declarations: [
    LoginComponent

  ],
  exports: [
    LoginComponent
  ]
})
export class CollectionModule { }
