import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountInfoListComponent } from './account-info-list/account-info-list.component';
import { HttpClientModule } from '@angular/common/http';
import { AccountInfoService } from './_services/account-info.service';
import { AccountInfoComponent } from './account-info/account-info.component';

@NgModule({
  declarations: [
    AppComponent,
    AccountInfoListComponent,
    AccountInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule 
  ],
  providers: [AccountInfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
