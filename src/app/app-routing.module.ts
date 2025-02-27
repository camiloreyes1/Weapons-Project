import { EditWeaponComponent } from './edit-weapon/edit-weapon.component';
import { WeaponAddComponent } from './weapon-add/weapon-add.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: "", redirectTo: 'all-weapons', pathMatch: 'full'},
  { path: "add-weapon", component: WeaponAddComponent},
  { path: "edit-weapon/:id", component: EditWeaponComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
