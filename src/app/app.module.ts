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
import { ItemsComponent } from './items/items.component';
import { ItemComponent } from './item/item.component';
import { ItemLoadLogoComponent } from './item-load-logo/item-load-logo.component';
import { LargeItemComponent } from './large-item/large-item.component';
import { VoiceComponent } from './voice/voice.component';
import { ContestsComponent } from './contests/contests.component';

import { ContestsApiService } from './contests-api.service';

import { routing } from './app.routes';

import { ContestsNameFilter } from './contests.pipe';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContestersComponent,
    ContesterComponent,
    ContestComponent,
    ItemsComponent,
    ItemComponent,
    ItemLoadLogoComponent,
    LargeItemComponent,
    VoiceComponent,
    ContestsComponent,
    ContestsNameFilter
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    MaterialModule.forRoot()
  ],
  providers: [ContestsApiService],
  bootstrap: [AppComponent]
})
export class AppModule { };
