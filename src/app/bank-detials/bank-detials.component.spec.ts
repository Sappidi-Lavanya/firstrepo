import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankDetialsComponent } from './bank-detials.component';

describe('BankDetialsComponent', () => {
  let component: BankDetialsComponent;
  let fixture: ComponentFixture<BankDetialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankDetialsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BankDetialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
