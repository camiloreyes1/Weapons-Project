import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeaponAddEditComponent } from './weapon-add-edit.component';

describe('WeaponAddEditComponent', () => {
  let component: WeaponAddEditComponent;
  let fixture: ComponentFixture<WeaponAddEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeaponAddEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeaponAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
