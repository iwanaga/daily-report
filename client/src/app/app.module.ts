import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  MdButtonModule, MdCardModule, MdGridListModule, MdInputModule,
  MdToolbarModule
} from "@angular/material";
import { ShowReportComponent } from './show-report/show-report.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { CreateReportComponent } from './create-report/create-report.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    ShowReportComponent,
    CreateReportComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MdToolbarModule,
    MdGridListModule,
    MdInputModule,
    MdButtonModule,
    MdCardModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
