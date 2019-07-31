import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSucursalComponent } from './update-sucursal.component';

describe('UpdateSucursalComponent', () => {
  let component: UpdateSucursalComponent;
  let fixture: ComponentFixture<UpdateSucursalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateSucursalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateSucursalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
