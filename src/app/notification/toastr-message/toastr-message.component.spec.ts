import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToastrMessageComponent } from './toastr-message.component';

describe('ToastrMessageComponent', () => {
  let component: ToastrMessageComponent;
  let fixture: ComponentFixture<ToastrMessageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToastrMessageComponent]
    });
    fixture = TestBed.createComponent(ToastrMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
