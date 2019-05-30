import {Component, Input, OnInit} from '@angular/core';
import {ControlExistant} from '../../models/ControlExistant';
import {ActivatedRoute} from '@angular/router';
import {ControlExistantService} from '../../services/control-existant.service';

@Component({
  selector: 'app-list-control',
  templateUrl: './list-control.component.html',
  styleUrls: ['./list-control.component.scss']
})
export class ListControlComponent implements OnInit {

  controls: ControlExistant[];
  selectedControl: ControlExistant;
  constructor(private route: ActivatedRoute, private controlService: ControlExistantService ) { }

  ngOnInit() {
    this.getControlExistant();
  }

  getControlExistant(): void {
    this.controlService.getcontrolExistants().subscribe( data => {
      this.controls = data;
    });
  }

  // interface ajout control
  on(): void {

    document.getElementById('overlay').style.display = 'block';
  }

  off(): void {
    document.getElementById('overlay').style.display = 'none';
  }

}
