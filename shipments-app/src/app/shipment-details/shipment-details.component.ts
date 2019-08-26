import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import {Shipment} from './../shipments/shipments.component';

@Component({
  selector: 'app-shipment-details',
  templateUrl: './shipment-details.component.html',
  styleUrls: ['./shipment-details.component.less']
})
export class ShipmentDetailsComponent implements OnInit {
  shipment: Shipment;

  constructor(private route: ActivatedRoute) { }

  async ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");
    console.log(id);
    const response = await fetch('./../../assets/db.json');
    const shipments = await response.json();
    let shipment = shipments.shipments.filter(shipment => shipment.id == id)[0];
    this.shipment = shipment;
  }

}
