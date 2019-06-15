import {Component, Input, OnInit} from '@angular/core';
import {NonConformite} from '../../models/NonConformite';

@Component({
  selector: 'app-liste-nc',
  templateUrl: './liste-nc.component.html',
  styleUrls: ['./liste-nc.component.scss']
})
export class ListeNcComponent implements OnInit {

  @Input() ncDisplay:NonConformite[];

  constructor() { }

  ngOnInit() {
  }

}
