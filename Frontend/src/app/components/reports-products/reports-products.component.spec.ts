import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsProductsComponent } from './reports-products.component';

describe('ReportsProductsComponent', () => {
  let component: ReportsProductsComponent;
  let fixture: ComponentFixture<ReportsProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportsProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportsProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
