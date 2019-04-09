import { Component, OnInit } from '@angular/core';
import {Auditeur} from '../../models/Auditeur';
import {AuditeurService} from '../../service/auditeur.service';

@Component({
  selector: 'app-add-auditeur',
  templateUrl: './add-auditeur.component.html',
  styleUrls: ['./add-auditeur.component.scss']
})
export class AddAuditeurComponent implements OnInit {

  responsable:Auditeur;
  auditeurs: Auditeur[]=[];

  constructor(private auditeurService: AuditeurService) { }

  ngOnInit() {
  }


  add(
    id: number,
    nom: string,
    prenom: string,
    datenais:string,

    cin: string,
    sexe: string,
    type: string,
    email: string,
    telephone:string,
    pays: string,
    NomUtili: string,
    motPass:string,
  ): void {
    this.auditeurService.addAuditeur({
      id,
      nom,
      prenom,
      datenais,
      cin,
      sexe,
      type,
      email,
      telephone,
      pays,
      NomUtili,
      motPass,
      } as Auditeur)
      .subscribe(auditeur => {
        this.auditeurs.push(auditeur);
      });
  }


}
