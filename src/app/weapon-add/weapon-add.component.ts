import { WeaponService } from './../weapon.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weapon-add',
  templateUrl: './weapon-add.component.html',
  styleUrls: ['./weapon-add.component.css']
})
export class WeaponAddComponent {

  weapon = {
    name: '',
    type: ''
  };

  constructor(private weaponService: WeaponService) { }

  onSubmit(): void {
    this.weaponService.addWeapon(this.weapon).subscribe(() => {
      alert('Weapon added successfully!');
      this.weapon = { name: '', type: ''}
    });
  }

}
