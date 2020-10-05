import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddPassengerComponent } from './add-passenger/add-passenger.component';
import { PassengerListComponent } from './passenger-list/passenger-list.component';
import { PassengerService } from './service/passengerService';

@NgModule({
  declarations: [
    AppComponent,
    AddPassengerComponent,
    PassengerListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [PassengerService,HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }