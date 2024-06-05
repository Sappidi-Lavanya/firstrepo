import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartshopingComponent } from './smartshoping.component';

describe('SmartshopingComponent', () => {
  let component: SmartshopingComponent;
  let fixture: ComponentFixture<SmartshopingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmartshopingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmartshopingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
