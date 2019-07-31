import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsBranchOfficeComponent } from './reports-branch-office.component';

describe('ReportsBranchOfficeComponent', () => {
  let component: ReportsBranchOfficeComponent;
  let fixture: ComponentFixture<ReportsBranchOfficeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportsBranchOfficeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportsBranchOfficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
