import {Component, Input, OnInit} from '@angular/core';
import {Auditeur} from '../../models/Auditeur';

@Component({
  selector: 'app-detail-auditeur',
  templateUrl: './detail-auditeur.component.html',
  styleUrls: ['./detail-auditeur.component.css']
})
export class DetailAuditeurComponent implements OnInit {

 @Input()auditeurIn: Auditeur

  constructor() { }

  ngOnInit() {
  }
}
