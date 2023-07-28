import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryFlagsComponent } from './country-flags.component';

describe('CountryFlagsComponent', () => {
  let component: CountryFlagsComponent;
  let fixture: ComponentFixture<CountryFlagsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CountryFlagsComponent]
    });
    fixture = TestBed.createComponent(CountryFlagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
