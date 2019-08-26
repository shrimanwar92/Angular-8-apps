import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ShipmentDetailsComponent } from './shipment-details.component';
import {beforeTest} from './../spec-helper/spec-helper.spec';

describe('ShipmentDetailsComponent', () => {
  beforeTest();

  it('should create details component', () => {
    const fixture = TestBed.createComponent(ShipmentDetailsComponent);
    const component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should display shipment details', () => {
    const fixture = TestBed.createComponent(ShipmentDetailsComponent);
    const component = fixture.debugElement.componentInstance;

    component.shipment = {
      "id": "1",
      "name": "test",
      "cargo": [
        {
          "type": "Fabric",
          "description": "1000 Blue T-shirts",
          "volume": 2
        }]
    };
    
    fixture.detectChanges();
    let detail = fixture.nativeElement.querySelector('.shipment-details__shipment');
    let heading = detail.querySelector('.heading span');
    expect(heading.textContent).toBe('test');

  });

  it('should go back to listing page', () => {
    const fixture = TestBed.createComponent(ShipmentDetailsComponent);
    const component = fixture.debugElement.componentInstance;

    component.shipment = {
      "id": "1",
      "name": "test",
      "cargo": [
        {
          "type": "Fabric",
          "description": "1000 Blue T-shirts",
          "volume": 2
        }]
    };
    fixture.detectChanges();
    
    let detail = fixture.nativeElement.querySelector('.shipment-details__shipment');
    let back = detail.querySelector('.heading a');
    back.click();
    fixture.detectChanges();
    expect(back.getAttribute('href')).toEqual('/');

  });
});
