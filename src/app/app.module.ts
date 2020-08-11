import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { GravatarModule, GravatarConfig, FALLBACK, RATING } from 'ngx-gravatar';
import { MomentModule } from 'ngx-moment';
// import { Moment } from 'moment';

// import { AngularFontAwesomeModule } from 'angular-font-awesome';


import { UserService } from '../app/services/user.service';
import { ContactService } from '../app/services/contact.service';
import { BitcoinService } from '../app/services/bitcoin.service';
import { WalletService } from '../app/services/wallet.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactFilterComponent } from './components/contact-filter/contact-filter.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { ContactPreviewComponent } from './components/contact-preview/contact-preview.component';
import { ContactDetailsPageComponent } from './pages/contact-details-page/contact-details-page.component';
import { ContactEditPageComponent } from './pages/contact-edit-page/contact-edit-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { StatisticsPageComponent } from './pages/statistics-page/statistics-page.component';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { TransferFundsComponent } from './components/transfer-funds/transfer-funds.component';
import { MoveListComponent } from './components/move-list/move-list.component';
import { MovePreviewComponent } from './components/move-preview/move-preview.component';



const gravatarConfig: GravatarConfig = {
  fallback: FALLBACK.robohash,
  // hasBorder: true,
  // borderColor: "rgba(255, 0, 0, 0.4)",
  rating: RATING.pg
}
@NgModule({
  declarations: [
    AppComponent,
    ContactFilterComponent,
    ContactListComponent,
    ContactPreviewComponent,
    ContactDetailsPageComponent,
    ContactEditPageComponent,
    ContactPageComponent,
    HomePageComponent,
    StatisticsPageComponent,
    AppHeaderComponent,
    TransferFundsComponent,
    MoveListComponent,
    MovePreviewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    GravatarModule.forRoot(gravatarConfig),
    HttpClientModule,
    MomentModule,
    // Moment,
    // AngularFontAwesomeModule,

  ],
  providers: [UserService, ContactService, BitcoinService, WalletService],
  bootstrap: [AppComponent]
})
export class AppModule { }
