import { StoreRouterModule } from './store-router/store-router.module';
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
import { AboutUsComponent } from './about-us/about-us.component';
import { TabComponent } from './shared/tab/tab.component';
import { CardImageComponent } from './catalog/card-image/card-image.component';
import { CardButtonComponent } from './catalog/card-button/card-button.component';
import { CardTitleComponent } from './catalog/card-title/card-title.component';
import { CardPriceComponent } from './catalog/card-price/card-price.component';
import { BookViewComponent } from './item/book-view/book-view.component';
import { HelpComponent } from './help/help.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CollectionModule,
    StoreRouterModule,
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
    CreditNumberComponent,
    AboutUsComponent,
    TabComponent,
    CardImageComponent,
    CardButtonComponent,
    CardTitleComponent,
    CardPriceComponent,
    BookViewComponent,
    HelpComponent
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
