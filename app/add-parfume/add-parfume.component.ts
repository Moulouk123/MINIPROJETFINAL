import { Component, OnInit } from '@angular/core';
import {Parfume} from "../model/parfume.model";
import { ActivatedRoute,Router } from '@angular/router';
import { ParfumeService } from '../services/parfume.service';
import { Categorie } from '../model/categorie.model';

@Component({
  selector: 'app-add-parfume',
  templateUrl: './add-parfume.component.html'
})
export class AddParfumeComponent implements OnInit {

  newParfume = new Parfume();

  message :String ;
  categories : Categorie[];
newIdCat : number;
newCategorie : Categorie;

  constructor(private activatedRoute: ActivatedRoute,
    private router :Router,
    private parfumeServices : ParfumeService) { }

  ngOnInit(): void {
    this.categories = this.parfumeServices.listeCategories();
  }

  addParfume(){
    this.newCategorie = this.parfumeServices.consulterCategorie(this.newIdCat);
    this.newParfume.categorie = this.newCategorie;
    this.parfumeServices.ajouterParfume(this.newParfume);
    this.message = "Produit "+ this.newParfume.nomParfume+" ajouté avec succès"
    this.router.navigate(['parfumes']);
    }


}
