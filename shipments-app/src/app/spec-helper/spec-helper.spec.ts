import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { routes } from './../app-routing.module';
import { AppComponent } from './../app.component';
import { ShipmentsComponent } from './../shipments/shipments.component';
import { ShipmentDetailsComponent } from './../shipment-details/shipment-details.component';

export const beforeTest = () => {
  beforeAll((done) => (async () => {
    TestBed.resetTestingModule();
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ShipmentsComponent,
        ShipmentDetailsComponent
      ],
      imports: [
        RouterTestingModule.withRoutes(routes)
      ],
      providers: [],
    })
    await TestBed.compileComponents();
    // prevent Angular from resetting testing module
    TestBed.resetTestingModule = () => TestBed;
  })().then(done).catch(done.fail));
}