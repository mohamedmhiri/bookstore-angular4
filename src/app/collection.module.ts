import { LoginComponent } from './store/login/login.component';
import { SuiModule } from 'ng2-semantic-ui';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    SuiModule,
    FormsModule
  ],
  declarations: [
    LoginComponent

  ],
  exports: [
    LoginComponent
  ]
})
export class CollectionModule { }
