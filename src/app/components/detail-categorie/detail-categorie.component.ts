import {Component, Input, OnInit} from '@angular/core';
import {Categorie} from '../../models/categorie';

@Component({
  selector: 'app-detail-categorie',
  templateUrl: './detail-categorie.component.html',
  styleUrls: ['./detail-categorie.component.scss']
})
export class DetailCategorieComponent implements OnInit {

  @Input()categorieIn: Categorie;
  constructor() { }

  ngOnInit() {
  }

}
