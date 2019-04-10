import {Component, Input, OnInit} from '@angular/core';
import {Categorie} from '../../models/categorie';
import {CategorieService} from '../../services/categorie.service';

@Component({
  selector: 'app-update-categorie',
  templateUrl: './update-categorie.component.html',
  styleUrls: ['./update-categorie.component.scss']
})
export class UpdateCategorieComponent implements OnInit {
  @Input()categorieIn: Categorie;
  constructor(private categorieService: CategorieService) { }

  ngOnInit() {
  }

  save(): void {
    this.categorieService.updateCategorie(this.categorieIn.idCategorie, this.categorieIn).subscribe();
  }

}
