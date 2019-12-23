import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckinAnalyticsComponent } from './checkin-analytics.component';

describe('CheckinAnalyticsComponent', () => {
  let component: CheckinAnalyticsComponent;
  let fixture: ComponentFixture<CheckinAnalyticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckinAnalyticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckinAnalyticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
