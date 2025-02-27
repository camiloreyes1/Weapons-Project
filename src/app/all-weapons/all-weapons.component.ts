import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { WeaponService } from '../weapon.service';

@Component({
  selector: 'app-all-weapons',
  templateUrl: './all-weapons.component.html',
  styleUrls: ['./all-weapons.component.css']
})
export class AllWeaponsComponent implements OnInit {
    displayedColumns: string[] = ['id', 'name', 'type', 'actions']; // Table columns to display
    dataSource!: MatTableDataSource<any>; // Data source for the Material table

    constructor(
      private dialog: MatDialog, // To manage dialogs for add/edit forms
      private weaponService: WeaponService // Service to fetch weapon data
    ) {}

    ngOnInit(): void {
      this.getWeapons(); // Fetch weapons data when the component initializes
      this.refreshWeaponList();
    }

    // Method to fetch weapons data from the service
    getWeapons(): void {
      this.weaponService.getWeapons().subscribe(
        (weapons) => {
          this.dataSource = new MatTableDataSource(weapons); // Assign data to the table
        },
        (error) => {
          console.error('Failed to fetch weapons data', error); // Handle errors gracefully
        }
      );
    }

    refreshWeaponList(): void {
      this.weaponService.getWeapons().subscribe((weapons) => {
        this.dataSource = new MatTableDataSource(weapons);
      })
    }
}
