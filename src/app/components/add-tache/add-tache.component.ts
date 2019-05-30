import { Component, OnInit } from '@angular/core';
import {GestionTaches} from '../../models/GestionTaches';
import {TacheService} from '../../services/tache.service';
import {Categorie} from '../../models/categorie';

@Component({
  selector: 'app-add-tache',
  templateUrl: './add-tache.component.html',
  styleUrls: ['./add-tache.component.scss']
})
export class AddTacheComponent implements OnInit {
  taches: GestionTaches[] = [];
  tache: GestionTaches;

  constructor(private tacheService: TacheService) { }

  ngOnInit() {
  }

  add(
    idGestionTaches: number,
    titreGestionTaches: string,
    descriptionGestionTaches: string,
    durééGestionTaches: number,

  ): void {
    // const cat: string = id_categorie + ',' + nom_categorie + '.';
    this.tacheService.addTache({
      idGestionTaches,
      titreGestionTaches,
      descriptionGestionTaches,
      durééGestionTaches

    } as GestionTaches)
      .subscribe(tache => {
        this.taches.push(tache);
      });
  }

}
