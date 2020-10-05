import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddPassengerComponent } from './add-passenger/add-passenger.component';
import { PassengerListComponent } from './passenger-list/passenger-list.component';

const routes: Routes = [
  {
    path: 'add-passenger',
    component:AddPassengerComponent
  },
  {
    path: 'passenger-list',
    component:PassengerListComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
