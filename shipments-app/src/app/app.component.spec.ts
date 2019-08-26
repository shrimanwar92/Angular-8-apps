import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {beforeTest} from './spec-helper/spec-helper.spec';

describe('AppComponent', () => {
  beforeTest();
  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'freighthub-test'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('freighthub-test');
  });
});
