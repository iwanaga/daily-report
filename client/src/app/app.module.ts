import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  MdButtonModule, MdCardModule, MdDialogModule, MdGridListModule, MdInputModule,
  MdToolbarModule
} from "@angular/material";
import { ShowReportComponent } from './show-report/show-report.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {CreateReportComponent, DialogConfirm} from './create-report/create-report.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    ShowReportComponent,
    CreateReportComponent,
    DialogConfirm
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
    FormsModule,
    MdDialogModule
  ],
  exports: [DialogConfirm],
  entryComponents: [DialogConfirm],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
