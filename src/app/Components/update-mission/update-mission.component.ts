import {Component, Input, OnInit} from '@angular/core';
import {Auditeur} from '../../models/Auditeur';
import {Mission} from '../../models/Mission';
import {MissionService} from '../../services/mission.service';

@Component({
  selector: 'app-update-mission',
  templateUrl: './update-mission.component.html',
  styleUrls: ['./update-mission.component.scss']
})
export class UpdateMissionComponent implements OnInit {

  @Input()missionInUpdate:Mission

  constructor(private missionService:MissionService) { }

  ngOnInit() {
  }

  save(): void {
    this.missionService.updateMission(this.missionInUpdate.idMission,this.missionInUpdate).subscribe();
    this.close();
  }

  close():void{
    document.getElementById('overlay3').style.display = 'none';
  }





}
