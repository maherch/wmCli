import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ControlExistantService} from '../../services/control-existant.service';
import {ControlExistant} from '../../models/ControlExistant';
import {NonConformite} from '../../models/NonConformite';
import {NcService} from '../../services/nc.service';

@Component({
  selector: 'app-nc',
  templateUrl: './nc.component.html',
  styleUrls: ['./nc.component.scss']
})

export class NcComponent implements OnInit {

  controles: ControlExistant[];
  idx = '0';
  ncCoress:  NonConformite[];
  idselectedControle: number;

  constructor(private route: ActivatedRoute, private controleService:ControlExistantService,private ncService:NcService) { }

  ngOnInit() {
    this.getControles();
  }

  getControles(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.idx = id.toString();
    this.controleService.getcontrolExistants().subscribe(data => {
      this.controles = data;
    });
  }

  //interface detail ncs
  onN(id:number) :void {
    this.getNc(id);
    document.getElementById('overlay2').style.display = 'block';
  }

  //interface add nc
  on(id:number) :void {
    this.idselectedControle=id;
    document.getElementById('overlay').style.display = 'block';
  }

  off(): void {
    document.getElementById('overlay2').style.display = 'none';
  }

  ofF(): void {
    document.getElementById('overlay').style.display = 'none';
  }

  getNc(id:number): void {
    this.ncService.getNcByControleId(id).subscribe(data => {
      this.ncCoress = data;
    });
  }






}
