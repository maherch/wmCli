import { Component, OnInit } from '@angular/core';
import {GestionTaches} from '../../models/GestionTaches';
import {ActivatedRoute} from '@angular/router';
import {TacheService} from '../../services/tache.service';

@Component({
  selector: 'app-liste-tache',
  templateUrl: './liste-tache.component.html',
  styleUrls: ['./liste-tache.component.scss']
})
export class ListeTacheComponent implements OnInit {


  taches: GestionTaches[];
  selectedTache: GestionTaches;
  constructor(private route: ActivatedRoute, private tacheService: TacheService) { }

  ngOnInit() {
    this.getTaches();
  }

  getTaches(): void {
    this.tacheService.getTaches().subscribe( data => {
      this.taches = data;
    });
  }

// interface ajout tache
  on(): void {

    document.getElementById('overlay').style.display = 'block';
  }

  off(): void {
    document.getElementById('overlay').style.display = 'none';
  }


  // interface detail TACHES
  onN(id: number): void {
    this.tacheService.getTache(id).subscribe(value => {
      this.selectedTache = value;
    });
    document.getElementById('overlay2').style.display = 'block';
  }

  ofF(): void {
    document.getElementById('overlay2').style.display = 'none';
  }

  // interface update TACHES
  onNUpdate(id: number): void {
    this.tacheService.getTache(id).subscribe(value => {
      this.selectedTache = value;
    });
    document.getElementById('overlay3').style.display = 'block';

  }

  ofFUpdate(): void {
    document.getElementById('overlay3').style.display = 'none';
  }

  // interface delete TACHES
  delete(id: number): void {
    this.tacheService.getTache(id).subscribe(value => {
      this.selectedTache = value;
    });
    document.getElementById('overlayDelete').style.display = 'block';

  }

  offDelete(): void {
    document.getElementById('overlayDelete').style.display = 'none';
  }

}
