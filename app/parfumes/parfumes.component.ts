import { Component, OnInit } from '@angular/core';
import {Parfume} from "../model/parfume.model";
import { AuthService } from '../services/auth.service';
import { ParfumeService } from '../services/parfume.service';
@Component({
  selector: 'app-parfumes',
  templateUrl: './parfumes.component.html'
})
export class ParfumesComponent implements OnInit {

    parfumes : Parfume[];

  constructor(private parfumeServices : ParfumeService,
               public authService: AuthService) {

    this.parfumes= parfumeServices.listeParfumes();
    
   }

  ngOnInit(): void {
  }

  supprimerParfume(d: Parfume)
{
//console.log(d);
let conf = confirm("Etes-vous sûr ?");
if (conf)
this.parfumeServices.supprimerParfume(d);
}

}
