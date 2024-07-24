import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BakaeryComponent } from './bakaery.component';

describe('BakaeryComponent', () => {
  let component: BakaeryComponent;
  let fixture: ComponentFixture<BakaeryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ BakaeryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BakaeryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
