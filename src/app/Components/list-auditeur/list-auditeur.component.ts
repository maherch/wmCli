import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AuditeurService} from '../../service/auditeur.service';
import {Auditeur} from '../../models/Auditeur';

@Component({
  selector: 'app-list-auditeur',
  templateUrl: './list-auditeur.component.html',
  styleUrls: ['./list-auditeur.component.css']
})
export class ListAuditeurComponent implements OnInit {
  auditeurs: Auditeur[];
  idx = '0';
  selectedAuditeur:Auditeur;

  constructor(private route: ActivatedRoute, private auditeurService: AuditeurService) {
  }

  ngOnInit() {
    this.getAuditeurs();
  }

  getAuditeurs(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.idx = id.toString();
    this.auditeurService.getAuditeurs().subscribe(data => {
      this.auditeurs = data;
    });
  }


  //interface d'ajout auditeur

  on(): void {
    document.getElementById('overlay').style.display = 'block';
  }
  off(): void {
    document.getElementById('overlay').style.display = 'none';
  }


  //interface detail auditeur
  onN(id:number) :void {
    this.auditeurService.getAuditeur(id).subscribe(value => {
      this.selectedAuditeur=value;
    });
    document.getElementById('overlay2').style.display = 'block';
  }


  ofF() :void {
    document.getElementById('overlay2').style.display = 'none';
  }

  //interface update auditeur
  onNUpdate(id:number) :void {
    this.auditeurService.getAuditeur(id).subscribe(value => {
      this.selectedAuditeur=value;
    });
    document.getElementById('overlay3').style.display = 'block';

  }

  ofFUpdate() :void {
    document.getElementById('overlay3').style.display = 'none';
  }


  //interface delete auditeur
  ondelete(id: number): void {
     if (confirm("voulez vous supprimer ce utilisateur ?")) {
       this.auditeurService.deleteAuditeur(id)
     }
  }





}
