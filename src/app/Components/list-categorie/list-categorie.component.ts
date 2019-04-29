import { Component, OnInit } from '@angular/core';
import {Categorie} from '../../models/categorie';
import {Subject} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {CategorieService} from '../../services/categorie.service';

@Component({
  selector: 'app-list-categorie',
  templateUrl: './list-categorie.component.html',
  styleUrls: ['./list-categorie.component.css']
})
export class ListCategorieComponent implements OnInit {

  categories: Categorie[];
  selectedCategorie: Categorie;
  idx = '0';
  //private searchTerms = new Subject<string>();
  constructor(private route: ActivatedRoute, private categorieService: CategorieService) { }

  ngOnInit() {
    this.getCategories();
  }

  getCategories(): void {
    this.categorieService.getCategories().subscribe( data => {
      this.categories = data;
    });
  }

// interface ajout CATEGORIE
  on(): void {

    document.getElementById('overlay').style.display = 'block';
  }

  off(): void {
    document.getElementById('overlay').style.display = 'none';
  }


  // interface detail categorie
  onN(id: number): void {
    this.categorieService.getCategorie(id).subscribe(value => {
      this.selectedCategorie = value;
    });
    document.getElementById('overlay2').style.display = 'block';
  }

  ofF(): void {
    document.getElementById('overlay2').style.display = 'none';
  }

  // interface update categorie
  onNUpdate(id: number): void {
    this.categorieService.getCategorie(id).subscribe(value => {
      this.selectedCategorie = value;
    });
    document.getElementById('overlay3').style.display = 'block';

  }

  ofFUpdate(): void {
    document.getElementById('overlay3').style.display = 'none';
  }

  // interface delete team
  delete(id: number): void {
    this.categorieService.getCategorie(id).subscribe(value => {
      this.selectedCategorie = value;
    });
    document.getElementById('overlayDelete').style.display = 'block';

  }

  offDelete(): void {
    document.getElementById('overlayDelete').style.display = 'none';
  }

}
