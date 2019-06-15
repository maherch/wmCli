import {Component, Input, OnInit} from '@angular/core';
import {GestionTaches} from '../../models/GestionTaches';

@Component({
  selector: 'app-detail-tache',
  templateUrl: './detail-tache.component.html',
  styleUrls: ['./detail-tache.component.scss']
})
export class DetailTacheComponent implements OnInit {

  @Input()tacheIn: GestionTaches;
  constructor() { }

  ngOnInit() {
  }

}
