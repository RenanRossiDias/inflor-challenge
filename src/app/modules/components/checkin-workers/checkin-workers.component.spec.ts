import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckinWorkersComponent } from './checkin-workers.component';

describe('CheckinWorkersComponent', () => {
  let component: CheckinWorkersComponent;
  let fixture: ComponentFixture<CheckinWorkersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckinWorkersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckinWorkersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
