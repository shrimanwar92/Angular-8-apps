import { TestBed, async } from '@angular/core/testing';
import {Component, DebugElement} from "@angular/core";
import { FormsModule } from '@angular/forms';
import {HeroesComponent} from './heroes.component';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';


describe('Heroes Component', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HeroesComponent,
        TestComponent,
        HeroDetailComponent
      ],
      imports: [FormsModule]
    }).compileComponents();
  }));

  it('should create the app', () => {
      const fixture = TestBed.createComponent(TestComponent);
      const app = fixture.debugElement.componentInstance;
      expect(app).toBeTruthy();
  });

  it(`should have proper heading and load correct data`, () => {
    const fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.sub-heading').textContent).toEqual('My Heroes');

    let lis = fixture.nativeElement.querySelectorAll('li .hero-name');
    expect(lis[0].textContent).toEqual('Dr Nice');
  });

  it(`should have the ability to select hero`, () => {
    const fixture = TestBed.createComponent(HeroesComponent);
    fixture.componentInstance.heroes = [
          { id: 1, name: 'test1' },
          { id: 2, name: 'test2' },
    ];
    fixture.detectChanges();

    let lis = fixture.nativeElement.querySelectorAll('li');
    lis[0].click();
    fixture.detectChanges();

    expect(fixture.componentInstance.selectedHero.id).toBe(1);
    expect(fixture.componentInstance.selectedHero.name).toBe('test1');
    expect(lis[0].classList.contains('selected')).toBe(true);
    expect(fixture.nativeElement.querySelector('.selected .hero-name').textContent).toEqual('test1');
  });

  @Component({
      selector: 'test-component',
      template: `<app-heroes></app-heroes>`
  })

  class TestComponent {}

});
