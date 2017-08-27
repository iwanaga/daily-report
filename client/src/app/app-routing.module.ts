import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ShowReportComponent} from "./show-report/show-report.component";
import {CreateReportComponent} from "./create-report/create-report.component";

const routes: Routes = [
  {
    path: '',
    children: []
  },
  {
    path: 'show',
    component: ShowReportComponent
  },
  {
    path: 'create',
    component: CreateReportComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
