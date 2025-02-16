import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteWeaponComponent } from './delete-weapon.component';

describe('DeleteWeaponComponent', () => {
  let component: DeleteWeaponComponent;
  let fixture: ComponentFixture<DeleteWeaponComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteWeaponComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteWeaponComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
