import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AuditeurService} from '../../services/auditeur.service';
import {CategorieService} from '../../services/categorie.service';
import {Auditeur} from '../../models/Auditeur';
import {Categorie} from '../../models/categorie';
import {Mission} from '../../models/Mission';
import {MissionService} from '../../services/mission.service';

@Component({
  selector: 'app-add-mission',
  templateUrl: './add-mission.component.html',
  styleUrls: ['./add-mission.component.scss']
})
export class AddMissionComponent implements OnInit {


  missions: Mission[]=[];
  auditeurs:Auditeur[];
  categories: Categorie[];
  idx = '0';

  constructor(private route: ActivatedRoute, private catService: CategorieService,private auditSerice:AuditeurService,private missionService:MissionService) { }

  ngOnInit() {
   this.getCategories();
    this.getAuditeurs();
  }


  add(idMission:number,
  dateDebut:string,
  dateFin:string,
  nomMission:string,
  sujetMission:string,
  ): void {
    this.missionService.addMission({
      idMission,
      dateDebut,
      dateFin,
      nomMission,
      sujetMission,
    } as Mission)
      .subscribe(mission => {
        this.missions.push(mission);
      });
  }






  getAuditeurs(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.idx = id.toString();
    this.auditSerice.getAuditeurs().subscribe(data => {
      this.auditeurs = data;
    });
  }


  getCategories(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.idx = id.toString();
    this.catService.getCategories().subscribe(data => {
      this.categories = data;
    });
  }

}
