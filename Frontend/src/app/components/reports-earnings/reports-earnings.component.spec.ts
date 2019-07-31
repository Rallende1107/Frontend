import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsEarningsComponent } from './reports-earnings.component';

describe('ReportsEarningsComponent', () => {
  let component: ReportsEarningsComponent;
  let fixture: ComponentFixture<ReportsEarningsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportsEarningsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportsEarningsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
