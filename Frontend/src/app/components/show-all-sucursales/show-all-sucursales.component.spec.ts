import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAllSucursalesComponent } from './show-all-sucursales.component';

describe('ShowAllSucursalesComponent', () => {
  let component: ShowAllSucursalesComponent;
  let fixture: ComponentFixture<ShowAllSucursalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowAllSucursalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowAllSucursalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
