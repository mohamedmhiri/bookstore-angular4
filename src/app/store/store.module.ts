import { CollectionModule } from './../collection.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

// our components and modules
import { ToolbarComponent } from './toolbar/toolbar.component';
import { CatalogComponent } from './catalog/catalog.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { MainContentComponent } from './shared/main-content/main-content.component';
import { ErrorComponent } from './error/error.component';
import { HeaderSearchComponent } from './header-search/header-search.component';
import { ResearchComponent } from './research/research.component';
import { CartComponent } from './cart/cart.component';
import { CreditNumberComponent } from './credit-number/credit-number.component';

// ng2Semantic module
import { SuiModule } from 'ng2-semantic-ui';
// ng-semantic modules

const ROUTES = [
   /*{
        path: '',
        redirectTo: 'research',
        pathMatch: 'full'
   },*/
    {
        path: '', 
        component:ResearchComponent
    },
    {
        path: 'header', 
        component: HeaderComponent
    },
    {
        path: 'footer', 
        component: FooterComponent
    },
    {
        path: 'catalog', 
        component: CatalogComponent
    },

     {
        path: 'research', 
        component: ResearchComponent
    },
    {
         path: 'cart', 
        component: CartComponent
    },
    {
        path: 'credit',
        component: CreditNumberComponent
    },
    {
        path: 'login',
        component: LoginComponent
    }


]
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(ROUTES),
    CollectionModule,
   
 ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    MainContentComponent,
    HeaderSearchComponent,
    ErrorComponent,
    CatalogComponent,
    ResearchComponent,
    CartComponent,
    CreditNumberComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    MainContentComponent,
    ErrorComponent,
    CatalogComponent,
    ResearchComponent,
    CartComponent
  ],
  providers: [
/*    MainContentComponent,
*/    CatalogComponent,
    LoginComponent
  ]
})
export class StoreModule { }
