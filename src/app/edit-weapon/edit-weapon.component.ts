import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-edit-weapon',
  templateUrl: './edit-weapon.component.html',
  styleUrls: ['./edit-weapon.component.css'],
})
export class EditWeaponComponent implements OnInit {
  // Weapon object to hold the weapon's data
  weapon = { id: '', name: '', type: '' };

  // Base URL for JSON server
  apiUrl = 'http://localhost:3000/weapons';

  constructor(
    private route: ActivatedRoute, // To access route parameters
    private router: Router, // To navigate to other routes
    private http: HttpClient // To make HTTP requests
  ) {}

  ngOnInit(): void {
    // Get the weapon ID from the route parameters
    const weaponId = this.route.snapshot.paramMap.get('id');

    // If an ID exists, load the weapon details
    if (weaponId) {
      this.loadWeaponDetails(weaponId);
    }
  }

  /**
   * Load the weapon details from the server using the provided ID.
   * @param id - The ID of the weapon to be loaded.
   */
  loadWeaponDetails(id: string): void {
    this.http.get(`${this.apiUrl}/${id}`).subscribe(
      (data: any) => {
        // Populate the weapon object with the data retrieved from the server
        this.weapon = data;
      },
      (error) => {
        // Handle errors, such as if the weapon is not found
        console.error('Error loading weapon details:', error);
      }
    );
  }

  /**
   * Save the weapon's data (either create a new entry or update an existing one).
   */
  onSubmit(): void {
    if (this.weapon.id) {
      // Update an existing weapon
      this.http.put(`${this.apiUrl}/${this.weapon.id}`, this.weapon).subscribe(
        () => {
          // Notify the user and navigate to the weapons list after saving
          alert('Weapon updated successfully!');
          this.router.navigate(['/all-weapons']);
        },
        (error) => {
          // Handle errors during the update
          console.error('Error updating weapon:', error);
        }
      );
    } else {
      // Create a new weapon if no ID exists
      this.http.post(this.apiUrl, this.weapon).subscribe(
        () => {
          // Notify the user and navigate to the weapons list after saving
          alert('Weapon created successfully!');
          this.router.navigate(['/all-weapons']);
        },
        (error) => {
          // Handle errors during creation
          console.error('Error creating weapon:', error);
        }
      );
    }
  }

  /**
   * Cancel the edit and navigate back to the weapons list.
   */
  cancelEdit(): void {
    // Redirect to the weapons list when the user cancels
    this.router.navigate(['/all-weapons']);
  }
}
