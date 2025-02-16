import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddWeaponComponent } from './add-weapon/add-weapon.component';
import { AllWeaponsComponent } from './all-weapons/all-weapons.component';
import { EditWeaponComponent } from './edit-weapon/edit-weapon.component';
import { DeleteWeaponComponent } from './delete-weapon/delete-weapon.component';

// Define routes for each component in the app
const routes: Routes = [
  { path: '', redirectTo: 'all-weapons', pathMatch: 'full' }, // Redirect root path to "all-weapons"
  { path: 'all-weapons', component: AllWeaponsComponent }, // Route for listing all weapons
  { path: 'add-weapon', component: AddWeaponComponent }, // Route for adding a new weapon
  { path: 'delete-weapon', component: DeleteWeaponComponent }, // Route for deleting a weapon
  { path: 'edit-weapon/:id', component: EditWeaponComponent }, // Route for editing a weapon (dynamic id)
];


@NgModule({
  declarations: [
    AppComponent,
    AddWeaponComponent,
    AllWeaponsComponent,
    EditWeaponComponent,
    DeleteWeaponComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
