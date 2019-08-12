import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import {Component, DebugElement} from "@angular/core";

import { HeroDetailComponent } from './hero-detail.component';
import {By} from "@angular/platform-browser";

describe('HeroDetailComponent', () => {
    let component: TestComponentWrapper;
    let fixture: ComponentFixture<TestComponentWrapper>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
          declarations: [ HeroDetailComponent, TestComponentWrapper ],
          imports: [FormsModule]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TestComponentWrapper);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create hero detail component', () => {
        expect(component).toBeTruthy();
    });

    it('should display hero details', () => {
        expect(fixture.nativeElement.querySelector('h2').textContent).toEqual('TEST Details');
        expect(fixture.nativeElement.querySelector('.id').textContent).toEqual('Id: 1');
        expect(fixture.nativeElement.querySelector('.name').textContent).toEqual('Name: test');
    });

    @Component({
        selector: `test-component-wrapper`,
        template: `<app-hero-detail [hero]="hero"></app-hero-detail>`
    })
    class TestComponentWrapper {
        hero = {
            id: 1,
            name: "test"
        };
     }
});
