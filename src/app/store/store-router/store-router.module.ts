import { HelpComponent } from './../help/help.component';
import { ErrorComponent } from './../error/error.component';
import { HeaderComponent } from './../shared/header/header.component';
import { FooterComponent } from './../shared/footer/footer.component';
import { CatalogComponent } from './../catalog/catalog.component';
import { ResearchComponent } from './../research/research.component';
import { CartComponent } from './../cart/cart.component';
import { CreditNumberComponent } from './../credit-number/credit-number.component';
import { LoginComponent } from './../login/login.component';
import { MainContentComponent } from './../shared/main-content/main-content.component';
import { AboutUsComponent } from './../about-us/about-us.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

const ROUTES = [
   /*{
        path: '',
        redirectTo: 'research',
        pathMatch: 'full'
   },*/
    {
        path: '', 
        component:MainContentComponent
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
    },
    {
        path: 'main',
        component: MainContentComponent
    },
    {
        path: 'about-us',
        component: AboutUsComponent
    },
    {
        path: 'help',
        component: HelpComponent
    },
    {
        path: '**',
        component: ErrorComponent
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
export class StoreRouterModule { }
