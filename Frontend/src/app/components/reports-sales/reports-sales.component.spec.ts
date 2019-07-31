import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsSalesComponent } from './reports-sales.component';

describe('ReportsSalesComponent', () => {
  let component: ReportsSalesComponent;
  let fixture: ComponentFixture<ReportsSalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportsSalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportsSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
