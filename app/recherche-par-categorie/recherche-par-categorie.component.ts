import { Component, OnInit } from '@angular/core';
import { Categorie } from '../model/categorie.model';
import { Parfume } from '../model/parfume.model';
import { ParfumeService } from '../services/parfume.service';

@Component({
  selector: 'app-recherche-par-categorie',
  templateUrl: './recherche-par-categorie.component.html',
  styles: [
  ]
})
export class RechercheParCategorieComponent implements OnInit {
parfumes : Parfume[];
categories : Categorie[];
IdCategorie : number ;
  constructor(private parfumeServices : ParfumeService) {
    
   }

  ngOnInit(): void {
this.categories = this.parfumeServices.listeCategories();
    this.parfumes =[];this.parfumes =this.parfumeServices.listeParfumes();
  }

  onChange(){
    console.log(this.IdCategorie);
    this.parfumes = this.parfumeServices.rechercherParCategorie(this.IdCategorie);
  }
  supprimerParfume(d: Parfume)
  {
  //console.log(d);
  let conf = confirm("Etes-vous sûr ?");
  if (conf)
  this.parfumeServices.supprimerParfume(d);
  }

}
