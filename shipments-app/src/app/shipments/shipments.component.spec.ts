import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ShipmentsComponent } from './shipments.component';
import {beforeTest} from './../spec-helper/spec-helper.spec';

describe('ShipmentsComponent', () => {
  beforeTest();

  it('should create and initialize component', () => {
    const fixture = TestBed.createComponent(ShipmentsComponent);
    const component = fixture.debugElement.componentInstance;
    component.shipments = [{
      "id": "S1000",
      "name": "T-shirts(Summer2018) from Shanghai to Hamburg",
      "cargo": [
        {
          "type": "Fabric",
          "description": "1000 Blue T-shirts",
          "volume": 2
        }
      ],
      "mode": "sea",
      "type": "FCL",
      "destination": "Saarbrücker Str. 38, 10405 Berlin",
      "origin": "Shanghai Port",
      "total": 1000,
      "status": "ACTIVE",
      "userId": "U1000"
    }];
    fixture.detectChanges();
    expect(component).toBeTruthy();
    fixture.detectChanges();
    let td = fixture.nativeElement.querySelectorAll('tr td');
    expect(td[0].textContent).toBe('S1000');
    expect(td[1].textContent).toBe('T-shirts(Summer2018) from Shanghai to Hamburg');
  });

  it('should open details page', () => {
    const fixture = TestBed.createComponent(ShipmentsComponent);
    const component = fixture.debugElement.componentInstance;
    component.shipments = [{
      "id": "S1000",
      "name": "T-shirts(Summer2018) from Shanghai to Hamburg",
      "cargo": [
        {
          "type": "Fabric",
          "description": "1000 Blue T-shirts",
          "volume": 2
        }
      ],
      "mode": "sea",
      "type": "FCL",
      "destination": "Saarbrücker Str. 38, 10405 Berlin",
      "origin": "Shanghai Port",
      "total": 1000,
      "status": "ACTIVE",
      "userId": "U1000"
    }];
    fixture.detectChanges();
    let td = fixture.nativeElement.querySelectorAll('tr td');
    expect(td[6].textContent).toBe('View details');
    td[6].click();
    fixture.detectChanges();
    let href = td[6].querySelector('a').getAttribute('href');
    expect(href).toEqual('/shipment/S1000');
  });
});
