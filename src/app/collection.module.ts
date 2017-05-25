import { LoginComponent } from './store/login/login.component';
import { SuiModule } from 'ng2-semantic-ui';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination'; // <-- import the module

@NgModule({
  imports: [
    CommonModule,
    SuiModule,
    FormsModule,
    NgxPaginationModule
  ],
  declarations: [
    LoginComponent

  ],
  exports: [
    LoginComponent,
    NgxPaginationModule,
    SuiModule
  ]
})
export class CollectionModule { }
