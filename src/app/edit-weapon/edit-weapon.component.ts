import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-weapon',
  templateUrl: './edit-weapon.component.html',
  styleUrls: ['./edit-weapon.component.css'],
})
export class EditWeaponComponent implements OnInit {
  weapon = { id: '', name: '', type: '' }; // Placeholder for weapon data

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    // Retrieve weapon details using ID from the route (example logic)
    const weaponId = this.route.snapshot.paramMap.get('id');
    if (weaponId) {
      this.loadWeaponDetails(weaponId);
    }
  }

  loadWeaponDetails(id: string): void {
    // Example logic: Replace with actual API call
    console.log('Loading weapon details for ID:', id);
    // Mock data
    this.weapon = { id, name: 'Example Weapon', type: 'Ranged' };
  }

  onSubmit(): void {
    console.log('Saving weapon:', this.weapon);
    // Add save logic here (e.g., API call to update the weapon)
    alert('Weapon updated successfully!');
    this.router.navigate(['/all-weapons']); // Redirect after saving
  }

  cancelEdit(): void {
    // Redirect to the weapons list when the user cancels
    this.router.navigate(['/all-weapons']);
  }
}
