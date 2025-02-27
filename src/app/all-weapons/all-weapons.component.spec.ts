import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllWeaponsComponent } from './all-weapons.component';

describe('AllWeaponsComponent', () => {
  let component: AllWeaponsComponent;
  let fixture: ComponentFixture<AllWeaponsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllWeaponsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllWeaponsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
