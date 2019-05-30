import { Component, OnInit } from '@angular/core';
import {CategorieService} from '../../services/categorie.service';
import {Categorie} from '../../models/categorie';

@Component({
  selector: 'app-add-categorie',
  templateUrl: './add-categorie.component.html',
  styleUrls: ['./add-categorie.component.scss']
})
export class AddCategorieComponent implements OnInit {

  categories: Categorie[]=[];
  categorie: Categorie;

  constructor(private categorieService: CategorieService) {
  }

  ngOnInit() {
  }

  add(
    idCategorie: number,
    nomCategorie: string,
  descriptionCategorie: string,

  ): void {
   // const cat: string = id_categorie + ',' + nom_categorie + '.';
    this.categorieService.addCategorie({
      idCategorie,
      nomCategorie,
      descriptionCategorie

    } as Categorie)
      .subscribe(categorie => {
        this.categories.push(categorie);
      });
  }



}
