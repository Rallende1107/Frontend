import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSucursalComponent } from './add-sucursal.component';

describe('AddSucursalComponent', () => {
  let component: AddSucursalComponent;
  let fixture: ComponentFixture<AddSucursalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSucursalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSucursalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
