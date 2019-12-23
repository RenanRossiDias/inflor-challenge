import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckinToolPageComponent } from './checkin-tool-page.component';

describe('CheckinToolPageComponent', () => {
  let component: CheckinToolPageComponent;
  let fixture: ComponentFixture<CheckinToolPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckinToolPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckinToolPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
