import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShipmentsComponent } from './shipments/shipments.component';
import { ShipmentDetailsComponent } from './shipment-details/shipment-details.component';


export const routes: Routes = [
    { path: '', component: ShipmentsComponent  },
    { path: 'shipment/:id', component:  ShipmentDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
