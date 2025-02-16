import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddWeaponComponent } from './add-weapon/add-weapon.component';
import { AllWeaponsComponent } from './all-weapons/all-weapons.component';
import { EditWeaponComponent } from './edit-weapon/edit-weapon.component';
import { DeleteWeaponComponent } from './delete-weapon/delete-weapon.component';

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
