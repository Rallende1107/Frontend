import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducMattyComponent } from './produc-matty.component';

describe('ProducMattyComponent', () => {
  let component: ProducMattyComponent;
  let fixture: ComponentFixture<ProducMattyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProducMattyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProducMattyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
