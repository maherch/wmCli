import {Component, Input, OnInit} from '@angular/core';
import {Categorie} from '../../models/categorie';
import {CategorieService} from '../../services/categorie.service';

@Component({
  selector: 'app-delete-categorie',
  templateUrl: './delete-categorie.component.html',
  styleUrls: ['./delete-categorie.component.scss']
})
export class DeleteCategorieComponent implements OnInit {
  @Input()categorieIn: Categorie
  constructor(private categorieService: CategorieService) { }

  ngOnInit() {
  }

  delete(): void {
    this.categorieService.deleteCategorie(this.categorieIn.idCategorie);
  }

  close(): void{
    document.getElementById('overlayDelete').style.display = 'none';
  }
}
