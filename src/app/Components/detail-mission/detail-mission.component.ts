import {Component, Input, OnInit} from '@angular/core';
import {Auditeur} from '../../models/Auditeur';
import {Mission} from '../../models/Mission';
import {Categorie} from '../../models/categorie';

@Component({
  selector: 'app-detail-mission',
  templateUrl: './detail-mission.component.html',
  styleUrls: ['./detail-mission.component.scss']
})
export class DetailMissionComponent implements OnInit {

  @Input()missionIn: Mission;



  constructor() { }

  ngOnInit() {
  }

}
