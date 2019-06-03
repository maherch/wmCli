import { Component, OnInit } from '@angular/core';
import {Mission} from '../../models/Mission';
import {ActivatedRoute} from '@angular/router';
import {MissionService} from '../../services/mission.service';

@Component({
  selector: 'app-espace-travail',
  templateUrl: './espace-travail.component.html',
  styleUrls: ['./espace-travail.component.scss']
})
export class EspaceTravailComponent implements OnInit {

  missions: Mission[];
  idx = '0';


  constructor(private route: ActivatedRoute, private missionService: MissionService) { }

  ngOnInit() {
    this.getMissions();
  }

  getMissions(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.idx = id.toString();
    this.missionService.getMissions().subscribe(data => {
      this.missions = data;
    });
  }


}
