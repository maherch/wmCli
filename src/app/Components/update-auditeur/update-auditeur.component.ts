import {Component, Input, OnInit} from '@angular/core';
import {Auditeur} from '../../models/Auditeur';
import {AuditeurService} from '../../services/auditeur.service';

@Component({
  selector: 'app-update-auditeur',
  templateUrl: './update-auditeur.component.html',
  styleUrls: ['./update-auditeur.component.scss']
})
export class UpdateAuditeurComponent implements OnInit {

  @Input()auditeurInUpdate:Auditeur

  constructor(private auditeurService:AuditeurService) { }

  ngOnInit() {
  }


  save(): void {
    this.auditeurService.updateAuditeur(this.auditeurInUpdate.id,this.auditeurInUpdate).subscribe();
  }

  close():void{
    document.getElementById('overlay3').style.display = 'none';
  }



}
