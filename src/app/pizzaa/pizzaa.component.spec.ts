import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaaComponent } from './pizzaa.component';

describe('PizzaaComponent', () => {
  let component: PizzaaComponent;
  let fixture: ComponentFixture<PizzaaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ PizzaaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PizzaaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
