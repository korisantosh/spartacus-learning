import { HttpClientModule } from "@angular/common/http";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { UrlModule } from "@spartacus/core";
import { AppRoutingModule } from "@spartacus/storefront";
import { IconModule, MiniCartModule, SearchBoxModule } from "@spartacus/storefront/cms-components";
import { OutletPosition, PageSlotModule } from "@spartacus/storefront/cms-structure";
import { GenericLinkModule } from "@spartacus/storefront/shared";
import { AppComponent } from './app.component';

import { SpartacusModule } from './spartacus/spartacus.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    SpartacusModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
