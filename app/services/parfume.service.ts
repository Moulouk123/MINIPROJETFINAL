
import { Injectable } from '@angular/core';
import {Parfume} from "../model/parfume.model";
import { Categorie } from '../model/categorie.model';
@Injectable({
  providedIn: 'root'
})
export class ParfumeService {
  categories : Categorie[];
  parfumes : Parfume[];
  parfumesRecherche : Parfume[];
 parfume= new Parfume();
  
  
  categorie = new Categorie();
  constructor() {
    this.categories = [ {idCat : 1, nomCat : "famille Hespéridée"},

                        {idCat : 2, nomCat : "famille Florale "},
                        
                        {idCat : 3, nomCat : "famille fougère"}];
    this.parfumes = [
      {idParfume : 1, nomParfume : "giorgio armani ", nombreParfumes : 500, dateCreation : new Date("01/14/2011"), categorie: {idCat : 1, nomCat : "famille Hespéridée"}  },
      {idParfume : 2, nomParfume : "Van Cleef et arpels", nombreParfumes : 450, dateCreation : new Date("12/17/2010"), categorie: {idCat : 2, nomCat : "famille Florale "} },
      {idParfume : 3, nomParfume :"Montblanc", nombreParfumes : 200, dateCreation : new Date("02/20/2013"), categorie: {idCat : 3, nomCat : "famille fougère "}},
      

      ];
   }

   listeParfumes():Parfume[] {
    return this.parfumes;
  }
  ajouterParfume( prod: Parfume){
  this.parfumes.push(prod);
  }

  supprimerParfume( dep: Parfume){
    const index = this.parfumes.indexOf(dep, 0);
    if (index > -1) {
    this.parfumes.splice(index, 1);
    }
    
    }

    consulterParfume(id:number): Parfume{
      this.parfume = this.parfumes.find(p => p.idParfume == id);
      return this.parfume;
      }

      updateParfume(dep:Parfume)
{
// console.log(p);
this.supprimerParfume(dep);
this.ajouterParfume(dep);
this.trierParfumes();
}

trierParfumes(){
  this.parfumes = this.parfumes.sort((n1,n2) => {
  if (n1.idParfume > n2.idParfume) {
  return 1;
  }
  if (n1.idParfume < n2.idParfume) {
  return -1;
  }
  return 0;
  });
  }

  listeCategories():Categorie[] {
    return this.categories;
    }
    
    consulterCategorie(id:number): Categorie{
    this.categorie = this.categories.find(cat => cat.idCat == id);
    return this.categorie;
    }
    
    rechercherParCategorie(idCat: number): Parfume[]{
      this.parfumesRecherche = [];
      this.parfumes.forEach((cur, index) => {
      if(idCat == cur.categorie.idCat) {
      console.log("cur "+cur);
      this.parfumesRecherche.push(cur);
      }
    });
    return this.parfumesRecherche; }
}
