import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShipmentsComponent } from './shipments/shipments.component';
import { ShipmentDetailsComponent } from './shipment-details/shipment-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ShipmentsComponent,
    ShipmentDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
