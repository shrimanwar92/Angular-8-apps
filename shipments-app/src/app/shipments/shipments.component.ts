import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shipments',
  templateUrl: './shipments.component.html',
  styleUrls: ['./shipments.component.less']
})
export class ShipmentsComponent implements OnInit {
    shipments: Shipment[];
    originalShipments: Shipment[];
  asc = false;
  callDebounce;

  constructor() { 
  }

  ngOnInit() {
	  this.getShipments().then(() => {
       this.callDebounce = this.debounce(this.filter, 500);
    });
  }

  async getShipments() {
	  const response = await fetch('./../../assets/db.json');
	  const shipments = await response.json();
      this.shipments = shipments.shipments;
      this.originalShipments = this.shipments;
	  this.sort('id');
  }

  filter(value: string, orig) {
    const filteredShipments = orig.filter(shipment => {
      if(shipment.id.indexOf(value) != -1) {
          return shipment;
      }
    });

    this.shipments = filteredShipments;
  }

  searchById(e) {
      this.callDebounce(e.target.value, this.originalShipments);
  }

  debounce(fn: Function, delay: number) {
    let timer = undefined;

    return (...args) => {
      if(timer) {
        clearTimeout(timer);
      }

      timer = setTimeout(() => {
        fn.call(this, ...args);
      }, delay);
      timer = undefined;
    }
  }

  sort(sortOrder) {
    if(!sortOrder) {
        return false;
    }
    this.asc = !this.asc;
    
    if(sortOrder == 'name') {
        this.shipments.sort((a, b) => {
            if(this.asc) {
                if (a.name < b.name) return -1;
                else if (a.name > b.name) return 1;
                else return 0;
            } else {
                if (a.name > b.name) return -1;
                else if (a.name < b.name) return 1;
                else return 0;
            }
        });
    } else if(sortOrder == 'id') {
        this.shipments.sort((a, b) => {
            if(this.asc) {
                let aId = a.id.replace('S', '');
                let bId = b.id.replace('S', '');

                return parseInt(aId) - parseInt(bId);
            } else {
                let aId = a.id.replace('S', '');
                let bId = b.id.replace('S', '');

                return parseInt(bId) - parseInt(aId);
            }
        });
    }
  }

}

export interface Shipment {
  id: string;
  name: string;
  cargo: [{
    type: string;
    description: string;
    volume: number;
  }];
  mode: string;
  type: string;
  destination: string;
  origin: string;
  total: number;
  status: string;
  userId: string;
}
