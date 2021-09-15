import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordsComponent } from './accords.component';

describe('AccordsComponent', () => {
  let component: AccordsComponent;
  let fixture: ComponentFixture<AccordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccordsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
