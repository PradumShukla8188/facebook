import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewmoreComponent } from './viewmore.component';

describe('ViewmoreComponent', () => {
  let component: ViewmoreComponent;
  let fixture: ComponentFixture<ViewmoreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewmoreComponent]
    });
    fixture = TestBed.createComponent(ViewmoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
