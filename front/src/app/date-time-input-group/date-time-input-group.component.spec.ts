import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateTimeInputGroupComponent } from './date-time-input-group.component';

describe('DateTimeInputGroupComponent', () => {
  let component: DateTimeInputGroupComponent;
  let fixture: ComponentFixture<DateTimeInputGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DateTimeInputGroupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DateTimeInputGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
