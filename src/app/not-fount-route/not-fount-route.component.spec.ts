import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFountRouteComponent } from './not-fount-route.component';

describe('NotFountRouteComponent', () => {
  let component: NotFountRouteComponent;
  let fixture: ComponentFixture<NotFountRouteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotFountRouteComponent]
    });
    fixture = TestBed.createComponent(NotFountRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
