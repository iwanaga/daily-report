import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MdToolbarModule } from "@angular/material";
import { ShowReportComponent } from './show-report/show-report.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowReportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MdToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
