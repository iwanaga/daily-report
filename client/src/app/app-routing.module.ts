import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ShowReportComponent} from "./show-report/show-report.component";

const routes: Routes = [
  {
    path: '',
    children: []
  },
  {
    path: 'show',
    component: ShowReportComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
