import {Component, Input, OnInit} from '@angular/core';
import {GestionTaches} from '../../models/GestionTaches';
import {TacheService} from '../../services/tache.service';

@Component({
  selector: 'app-update-tache',
  templateUrl: './update-tache.component.html',
  styleUrls: ['./update-tache.component.scss']
})
export class UpdateTacheComponent implements OnInit {

  @Input()tacheIn: GestionTaches;
  constructor(private tacheService: TacheService) { }

  ngOnInit() {
  }
  save(): void {
    this.tacheService.updateTache(this.tacheIn.idGestionTaches, this.tacheIn).subscribe();
  }

}
