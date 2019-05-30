import { Component, OnInit } from '@angular/core';
import {ControlExistant} from '../../models/ControlExistant';
import {ControlExistantService} from '../../services/control-existant.service';

@Component({
  selector: 'app-add-control',
  templateUrl: './add-control.component.html',
  styleUrls: ['./add-control.component.scss']
})
export class AddControlComponent implements OnInit {
  controls: ControlExistant[] = [];
  control: ControlExistant;

  constructor(private controlService: ControlExistantService) { }

  ngOnInit() {
  }

  add(
    idControlExistant: number,
    titreControlExistant: string,
    descriptionControlExistant: string,


  ): void {
    this.controlService.addcontrolExistant({
      idControlExistant,
      titreControlExistant,
      descriptionControlExistant
    } as ControlExistant)
      .subscribe(control => {
        this.controls.push(control);
      });
  }

}
