import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContestersComponent } from './contesters/contesters.component';
import { ContesterComponent } from './contester/contester.component';
import { ContestComponent } from './contest/contest.component';

import { ContestsApiService } from './contests-api.service';
import { ItemComponent } from './item/item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContestersComponent,
    ContesterComponent,
    ContestComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot() 
  ],
  providers: [ContestsApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
