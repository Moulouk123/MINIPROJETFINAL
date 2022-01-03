import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { HttpClientModule } from '@angular/common/http';
import { RechercheParCategorieComponent } from './recherche-par-categorie/recherche-par-categorie.component';
import { ParfumesComponent } from 'src/app/parfumes/parfumes.component';
import { AddParfumeComponent } from 'src/app/add-parfume/add-parfume.component';
import { UpdateParfumeComponent } from 'src/app/update-parfume/update-parfume.component';

@NgModule({
  declarations: [
    AppComponent,
   ParfumesComponent,
    AddParfumeComponent,
    UpdateParfumeComponent,
    LoginComponent,
    ForbiddenComponent,
    RechercheParCategorieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
