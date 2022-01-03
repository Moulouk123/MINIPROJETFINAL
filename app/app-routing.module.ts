import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { ParfumeGuard } from './parfume.guard';
import { RechercheParCategorieComponent } from './recherche-par-categorie/recherche-par-categorie.component';
import { AddParfumeComponent } from 'src/app/add-parfume/add-parfume.component';
import { ParfumesComponent } from 'src/app/parfumes/parfumes.component';
import { UpdateParfumeComponent } from './update-parfume/update-parfume.component';
const routes: Routes = [
  {path: "parfumes", component : ParfumesComponent},
  {path: "add-parfume", component : AddParfumeComponent,canActivate:[ParfumeGuard]},
  {path: "updateParfume/:id", component: UpdateParfumeComponent},
  {path: "rechercheParCategorie", component : RechercheParCategorieComponent},
  {path: 'login', component: LoginComponent},
  {path: 'app-forbidden', component: ForbiddenComponent},
  { path: "", redirectTo: "parfumes", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
