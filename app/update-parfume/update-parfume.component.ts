import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Parfume } from '../model/parfume.model';
import { Categorie } from '../model/categorie.model';
import { ParfumeService } from '../services/parfume.service';



@Component({
  selector: 'app-update-parfume',
  templateUrl: './update-parfume.component.html',
  styles: []
})
export class UpdateParfumeComponent implements OnInit {

  currentParfume = new Parfume();
  categories : Categorie[];
updatedCategorie : Categorie;

  constructor(private activatedRoute: ActivatedRoute,
              private router : Router,
              private parfumeService: ParfumeService) { }
    
              ngOnInit() {
                this.categories = this.parfumeService.listeCategories();
                this.currentParfume =this.parfumeService.consulterParfume(this.activatedRoute.snapshot.params.id);
                }
    updateParfume()
    {
      this.updatedCategorie =this.parfumeService.consulterCategorie(this.currentParfume.categorie.idCat);
      this.currentParfume.categorie = this.updatedCategorie;
      this.parfumeService.updateParfume(this.currentParfume);
     this.router.navigate(['parfumes']);
      }
  
  }
