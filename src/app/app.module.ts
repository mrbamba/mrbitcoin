import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { UserService } from '../app/services/user.service';
import { ContactService } from '../app/services/contact.service';
import { BitcoinService } from '../app/services/bitcoin.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactFilterComponent } from './components/contact-filter/contact-filter.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { ContactPreviewComponent } from './components/contact-preview/contact-preview.component';
import { InputComponent } from './components/input/input.component';
import { ContactDetailsPageComponent } from './pages/contact-details-page/contact-details-page.component';
import { ContactEditPageComponent } from './pages/contact-edit-page/contact-edit-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { StatisticsPageComponent } from './pages/statistics-page/statistics-page.component';
import { AppHeaderComponent } from './components/app-header/app-header.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactFilterComponent,
    ContactListComponent,
    ContactPreviewComponent,
    InputComponent,
    ContactDetailsPageComponent,
    ContactEditPageComponent,
    ContactPageComponent,
    HomePageComponent,
    StatisticsPageComponent,
    AppHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [UserService, ContactService, BitcoinService],
  bootstrap: [AppComponent]
})
export class AppModule { }
