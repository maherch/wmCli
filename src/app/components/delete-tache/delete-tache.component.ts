import {Component, Input, OnInit} from '@angular/core';
import {GestionTaches} from '../../models/GestionTaches';
import {TacheService} from '../../services/tache.service';

@Component({
  selector: 'app-delete-tache',
  templateUrl: './delete-tache.component.html',
  styleUrls: ['./delete-tache.component.scss']
})
export class DeleteTacheComponent implements OnInit {
  @Input()tacheIn: GestionTaches
  constructor(private tacheService: TacheService) { }

  ngOnInit() {
  }

  delete(): void {
    this.tacheService.deleteTache(this.tacheIn.idGestionTaches);
  }

  close(): void{
    document.getElementById('overlayDelete').style.display = 'none';
  }
}
