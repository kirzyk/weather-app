import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CurrentComponent} from './current/current.component';
import {AppComponent} from './app.component';
import {LayoutComponent} from './layout/layout.component';
import {FiveDaysComponent} from './five-days/five-days.component';
import {SixteenDaysComponent} from './sixteen-days/sixteen-days.component';

const routes: Routes = [
  {path: '', redirectTo: 'current', pathMatch: 'full'},
  {
    path: 'current',
    component: LayoutComponent,
    children: [
      {path: '', component: CurrentComponent},
      {path: 'five', component: FiveDaysComponent},
      {path: 'sixteen', component: SixteenDaysComponent},
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
