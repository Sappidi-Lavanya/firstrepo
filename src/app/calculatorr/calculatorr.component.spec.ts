import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorrComponent } from './calculatorr.component';

describe('CalculatorrComponent', () => {
  let component: CalculatorrComponent;
  let fixture: ComponentFixture<CalculatorrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculatorrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculatorrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
