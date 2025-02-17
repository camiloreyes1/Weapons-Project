import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { WeaponService } from './weapon.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'type']; // Table columns to display
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

